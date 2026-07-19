"use strict";

const state = {
  manifest: null,
  evaluations: [],
  dashboardMetrics: [],
  presentationBreakdown: {},
  finalGradeBreakdown: {},
  rubricTables: new Map(),
};

const order = ["EV1", "EV2", "EV3", "EV4", "EvG", "ET"];
const PAGE_SIZE = 10;

const elements = {
  form: document.getElementById("lookupForm"),
  rut: document.getElementById("rutInput"),
  code: document.getElementById("accessCodeInput"),
  rutError: document.getElementById("rutError"),
  codeError: document.getElementById("codeError"),
  submit: document.getElementById("submitButton"),
  error: document.getElementById("errorBox"),
  lookupPanel: document.getElementById("lookupPanel"),
  studentView: document.getElementById("studentView"),
  reset: document.getElementById("resetButton"),
  courseTitle: document.getElementById("courseTitle"),
  sectionLabel: document.getElementById("sectionLabel"),
  generatedAt: document.getElementById("generatedAt"),
  studentName: document.getElementById("studentName"),
  finalGrade: document.getElementById("finalGrade"),
  presentationGrade: document.getElementById("presentationGrade"),
  examGrade: document.getElementById("examGrade"),
  baseFinalGrade: document.getElementById("baseFinalGrade"),
  observationsSection: document.getElementById("observationsSection"),
  finalObservations: document.getElementById("finalObservations"),
  evaluationsBody: document.getElementById("evaluationsBody"),
  evaluationsFoot: document.getElementById("evaluationsFoot"),
  finalGradeBody: document.getElementById("finalGradeBody"),
  finalGradeFoot: document.getElementById("finalGradeFoot"),
  dashboardAverage: document.getElementById("dashboardAverage"),
  dashboardDifference: document.getElementById("dashboardDifference"),
  dashboardComparison: document.getElementById("dashboardComparison"),
  dashboardRange: document.getElementById("dashboardRange"),
  dashboardCount: document.getElementById("dashboardCount"),
  dashboardBody: document.getElementById("dashboardBody"),
  progressLineChart: document.getElementById("progressLineChart"),
  comparisonBars: document.getElementById("comparisonBars"),
  contributionBars: document.getElementById("contributionBars"),
  benefitsSection: document.getElementById("benefitsSection"),
  benefitsList: document.getElementById("benefitsList"),
  feedbackAccordion: document.getElementById("feedbackAccordion"),
};

function normalizeRut(value) {
  return String(value || "").trim().toUpperCase().replace(/[.\-\s]/g, "");
}

function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function hex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  return hex(await crypto.subtle.digest("SHA-256", bytes));
}

async function deriveKey(rut, code, salt, iterations) {
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(`${normalizeRut(rut)}:${code}`),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
}

async function decryptStudent(envelope, rut, code) {
  const salt = base64ToBytes(envelope.crypto.salt);
  const iv = base64ToBytes(envelope.crypto.iv);
  const ciphertext = base64ToBytes(envelope.payload);
  const key = await deriveKey(rut, code, salt, envelope.crypto.iterations);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return JSON.parse(new TextDecoder().decode(plaintext));
}

function grade(value) {
  return value === null || value === undefined || value === "" ? "S/I" : String(value);
}

function signedGrade(value) {
  if (value === null || value === undefined || value === "") return "S/I";
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return String(value);
  return numeric > 0 ? `+${value}` : String(value);
}

function percent(value) {
  return value === null || value === undefined || value === "" ? "S/I" : `${String(value).replace(".", ",")}%`;
}

function gradeToneClass(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return "";
  if (numeric >= 5.5) return "tone-high";
  if (numeric >= 4.0) return "tone-mid";
  return "tone-low";
}

function percentToneClass(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return "";
  if (numeric >= 80) return "tone-high";
  if (numeric >= 60) return "tone-mid";
  return "tone-low";
}

function gradePill(value) {
  return `<span class="grade-pill ${gradeToneClass(value)}">${grade(value)}</span>`;
}

function percentPill(value) {
  return `<span class="percent-pill ${percentToneClass(value)}">${percent(value)}</span>`;
}

function setMetricGrade(element, value) {
  element.textContent = grade(value);
  element.classList.remove("tone-high", "tone-mid", "tone-low");
  const tone = gradeToneClass(value);
  if (tone) {
    element.classList.add(tone);
  }
}

function setMetricComparison(element, value) {
  element.textContent = signedGrade(value);
  element.classList.remove("comparison-up", "comparison-down", "comparison-even");
  element.classList.add(comparisonToneClass(value));
}

function text(value) {
  return value === null || value === undefined || value === "" ? "S/I" : String(value);
}

function titleName(value) {
  return text(value)
    .toLocaleLowerCase("es-CL")
    .replace(/(^|\s)(\S)/g, (match) => match.toLocaleUpperCase("es-CL"));
}

function evaluationTitle(item) {
  const names = {
    EV1: "Evaluación 1",
    EV2: "Evaluación 2",
    EV3: "Evaluación 3",
    EV4: "Evaluación 4",
    ET: "Examen transversal",
    EvG: "Evaluación recuperativa",
  };
  return names[item.evaluation_code] || item.title || item.evaluation_code;
}

function statusLabel(status) {
  const labels = {
    EVALUATED: "Evaluada",
    PENDING: "Pendiente",
    MISSING: "Sin entrega",
  };
  return labels[status] || text(status);
}

function statusClass(status) {
  if (status === "EVALUATED") return "bg-success-subtle text-success-emphasis border border-success-subtle";
  if (status === "PENDING" || status === "MISSING") return "bg-warning-subtle text-warning-emphasis border border-warning-subtle";
  return "text-bg-light border";
}

function toneKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

function evaluationToneClass(code) {
  return `eval-${toneKey(code)}`;
}

function sourceToneClass(code) {
  return `source-${toneKey(code)}`;
}

function comparisonToneClass(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric) || Math.abs(numeric) < 0.05) return "comparison-even";
  return numeric > 0 ? "comparison-up" : "comparison-down";
}

function performanceToneClass(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return "comparison-even";
  if (numeric >= 80) return "performance-high";
  if (numeric >= 60) return "performance-mid";
  return "performance-low";
}

function sortEvaluations(left, right) {
  const leftIndex = order.indexOf(left.evaluation_code);
  const rightIndex = order.indexOf(right.evaluation_code);
  const normalizedLeft = leftIndex === -1 ? 999 : leftIndex;
  const normalizedRight = rightIndex === -1 ? 999 : rightIndex;
  return normalizedLeft - normalizedRight || text(left.evaluation_code).localeCompare(text(right.evaluation_code), "es-CL");
}

function escapeText(value) {
  const span = document.createElement("span");
  span.textContent = text(value);
  return span.innerHTML;
}

function inlineMarkdown(value) {
  return escapeText(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function markdownBlock(value) {
  const lines = String(value || "").split(/\r?\n/);
  const html = [];
  let listOpen = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (listOpen) {
        html.push("</ul>");
        listOpen = false;
      }
      continue;
    }
    if (trimmed.startsWith("- ")) {
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(trimmed.slice(2))}</li>`);
    } else {
      if (listOpen) {
        html.push("</ul>");
        listOpen = false;
      }
      html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
    }
  }
  if (listOpen) {
    html.push("</ul>");
  }
  return html.join("");
}

function setError(message) {
  elements.error.textContent = message;
  elements.error.classList.toggle("d-none", !message);
}

function setFieldError(field, message) {
  const input = field === "rut" ? elements.rut : elements.code;
  const box = field === "rut" ? elements.rutError : elements.codeError;
  input.classList.toggle("is-invalid", Boolean(message));
  box.textContent = message || "";
  box.classList.toggle("d-none", !message);
}

function clearFieldErrors() {
  setFieldError("rut", "");
  setFieldError("code", "");
}

function makeFieldError(field, message) {
  const error = new Error(message);
  error.field = field;
  return error;
}

function validateAccessFields() {
  clearFieldErrors();
  const normalizedRut = normalizeRut(elements.rut.value);
  const code = elements.code.value.trim();
  let valid = true;

  if (!normalizedRut) {
    setFieldError("rut", "Ingresa tu RUT para buscar tus resultados.");
    valid = false;
  }
  if (!code) {
    setFieldError("code", "Ingresa tu código de acceso individual.");
    valid = false;
  }

  return valid;
}

function renderEvaluationRows(student) {
  state.evaluations = [...((student.presentation_breakdown || {}).rows || [])];
  updateEvaluationsPage(1);
}

function renderEvaluationTableRows(evaluations, page) {
  const start = (page - 1) * PAGE_SIZE;
  return evaluations.slice(start, start + PAGE_SIZE)
    .map((item) => `<tr>
      <td><span class="badge rounded-pill eval-chip ${evaluationToneClass(item.evaluation_code)}">${escapeText(item.evaluation_code)}</span><div class="text-muted small mt-1">${escapeText(evaluationTitle(item))}</div></td>
      <td class="text-end">${gradePill(item.base_grade)}</td>
      <td>${presentationAdjustmentsHtml(item.adjustments || [])}</td>
      <td class="text-end fw-semibold">${gradePill(item.considered_grade)}</td>
      <td class="text-end">${percent(item.weight_percent)}</td>
      <td class="text-end fw-semibold">${grade(item.contribution_to_np)}</td>
    </tr>`)
    .join("");
}

function presentationAdjustmentsHtml(adjustments) {
  if (!adjustments.length) {
    return '<span class="text-secondary">Sin ajustes</span>';
  }
  return adjustments
    .map((adjustment) => `<span class="badge rounded-pill source-chip ${sourceToneClass(adjustment.source_code)} me-1 mb-1">${escapeText(adjustment.source_code || "Ajuste")}: ${grade(adjustment.before_grade)} → ${grade(adjustment.after_grade)}</span>`)
    .join("");
}

function renderEvaluationFooter() {
  const breakdown = state.presentationBreakdown || {};
  elements.evaluationsFoot.innerHTML = `<tr class="table-light">
    <th colspan="5" class="text-end">Suma de aportes a NP</th>
    <th class="text-end">${gradePill(breakdown.total_contribution_to_np)}</th>
  </tr>
  <tr>
    <th colspan="5" class="text-end">Tu NP</th>
    <th class="text-end">${gradePill(breakdown.displayed_np)}</th>
  </tr>`;
}

function renderFinalGradeBreakdown() {
  const breakdown = state.finalGradeBreakdown || {};
  const rows = breakdown.rows || [];
  elements.finalGradeBody.innerHTML = rows
    .map((item) => `<tr>
      <td><span class="badge rounded-pill component-chip ${evaluationToneClass(item.component_code === "NP" ? "EV2" : "ET")}">${escapeText(item.component_code)}</span><div class="text-muted small mt-1">${escapeText(item.label)}</div></td>
      <td class="text-end">${gradePill(item.grade)}</td>
      <td class="text-end">${percent(item.weight_percent)}</td>
      <td class="text-end fw-semibold">${grade(item.contribution_to_final)}</td>
    </tr>`)
    .join("");
  elements.finalGradeFoot.innerHTML = `<tr class="table-light">
    <th colspan="3" class="text-end">Suma de aportes a nota final</th>
    <th class="text-end">${gradePill(breakdown.total_contribution_to_final)}</th>
  </tr>
  <tr>
    <th colspan="3" class="text-end">Tu nota final</th>
    <th class="text-end">${gradePill(breakdown.displayed_final_grade)}</th>
  </tr>`;
}

function renderDashboardRows(metrics, page) {
  const start = (page - 1) * PAGE_SIZE;
  return metrics.slice(start, start + PAGE_SIZE)
    .map((item) => `<tr>
      <td><span class="badge rounded-pill component-chip ${evaluationToneClass(item.metric_code)}">${escapeText(item.metric_code)}</span><div class="text-muted small mt-1">${escapeText(item.label)}</div></td>
      <td class="text-end fw-semibold">${gradePill(item.student_value)}</td>
      <td class="text-end">${gradePill(item.average)}</td>
      <td class="text-end">${gradePill(item.minimum)}</td>
      <td class="text-end">${gradePill(item.maximum)}</td>
      <td class="text-end fw-semibold">${signedGrade(item.difference_from_average)}</td>
      <td><span class="badge rounded-pill comparison-chip ${comparisonToneClass(item.difference_from_average)}">${escapeText(item.comparison)}</span></td>
    </tr>`)
    .join("");
}

function updateDashboardPage(requestedPage) {
  const metrics = state.dashboardMetrics;
  const pageCount = Math.max(1, Math.ceil(metrics.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, requestedPage), pageCount);
  elements.dashboardBody.innerHTML = renderDashboardRows(metrics, page);

  const pagination = document.getElementById("dashboardPagination");
  if (!pagination) return;
  pagination.classList.toggle("d-none", metrics.length <= PAGE_SIZE);
  if (metrics.length <= PAGE_SIZE) {
    pagination.innerHTML = "";
    return;
  }
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, metrics.length);
  pagination.innerHTML = `<div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mt-3">
    <div class="text-secondary small">Mostrando ${start} a ${end} de ${metrics.length} indicadores.</div>
    <nav aria-label="Paginación del dashboard">
      <ul class="pagination pagination-sm mb-0">
        <li class="page-item ${page === 1 ? "disabled" : ""}">
          <button class="page-link" type="button" id="dashboardPrev" ${page === 1 ? "disabled" : ""}>Anterior</button>
        </li>
        <li class="page-item ${page === pageCount ? "disabled" : ""}">
          <button class="page-link" type="button" id="dashboardNext" ${page === pageCount ? "disabled" : ""}>Siguiente</button>
        </li>
      </ul>
    </nav>
  </div>`;
  document.getElementById("dashboardPrev")?.addEventListener("click", () => updateDashboardPage(page - 1));
  document.getElementById("dashboardNext")?.addEventListener("click", () => updateDashboardPage(page + 1));
}

function renderCourseDashboard(student) {
  const dashboard = student.course_dashboard || {};
  state.dashboardMetrics = dashboard.metrics || [];
  const finalMetric = state.dashboardMetrics.find((item) => item.metric_code === "Nva_NF") || {};
  elements.dashboardCount.textContent = dashboard.section_size ? `Curso: ${dashboard.section_size} estudiantes` : "Curso: S/I";
  setMetricGrade(elements.dashboardAverage, finalMetric.average);
  setMetricComparison(elements.dashboardDifference, finalMetric.difference_from_average);
  elements.dashboardComparison.textContent = finalMetric.comparison || "Comparación con el promedio";
  elements.dashboardRange.textContent = finalMetric.minimum !== undefined && finalMetric.maximum !== undefined
    ? `${grade(finalMetric.minimum)} - ${grade(finalMetric.maximum)}`
    : "S/I";
  updateDashboardPage(1);
}

function gradeScale(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return 0;
  return Math.max(0, Math.min(100, (numeric / 7) * 100));
}

function ratioScale(value, maxValue) {
  const numeric = Number(value);
  const max = Number(maxValue);
  if (Number.isNaN(numeric) || Number.isNaN(max) || max <= 0) return 0;
  return Math.max(0, Math.min(100, (numeric / max) * 100));
}

function lineChartPoint(value, index, total) {
  const numeric = Number(value);
  const clamped = Number.isNaN(numeric) ? 1 : Math.max(1, Math.min(7, numeric));
  const x = 48 + (index * (304 / Math.max(1, total - 1)));
  const y = 170 - (((clamped - 1) / 6) * 120);
  return { x: roundDisplay(x), y: roundDisplay(y) };
}

function roundDisplay(value) {
  return Math.round(value * 100) / 100;
}

function metricByCode(code) {
  return state.dashboardMetrics.find((item) => item.metric_code === code) || {};
}

function renderProgressLineChart() {
  const rows = (state.presentationBreakdown.rows || []).filter((item) => ["EV1", "EV2", "EV3", "EV4"].includes(item.evaluation_code));
  if (!rows.length) {
    elements.progressLineChart.innerHTML = '<p class="text-secondary mb-0">Aún no hay datos suficientes para graficar tu progreso.</p>';
    return;
  }
  const studentPoints = rows.map((item, index) => lineChartPoint(item.considered_grade, index, rows.length));
  const averagePoints = rows.map((item, index) => lineChartPoint(metricByCode(item.evaluation_code).average, index, rows.length));
  const studentPolyline = studentPoints.map((point) => `${point.x},${point.y}`).join(" ");
  const averagePolyline = averagePoints.map((point) => `${point.x},${point.y}`).join(" ");
  const labels = rows.map((item, index) => {
    const point = studentPoints[index];
    return `<text class="chart-axis-label" x="${point.x}" y="198" text-anchor="middle">${escapeText(item.evaluation_code)}</text>`;
  }).join("");
  const points = rows.map((item, index) => {
    const studentPoint = studentPoints[index];
    const averagePoint = averagePoints[index];
    return `<circle class="chart-point-average" cx="${averagePoint.x}" cy="${averagePoint.y}" r="4"></circle>
      <circle class="chart-point-student" cx="${studentPoint.x}" cy="${studentPoint.y}" r="5"></circle>
      <text class="chart-point-label" x="${studentPoint.x}" y="${studentPoint.y - 10}" text-anchor="middle">${grade(item.considered_grade)}</text>`;
  }).join("");
  elements.progressLineChart.innerHTML = `<svg class="chart-svg" viewBox="0 0 400 220" role="img" aria-label="Gráfico de progreso EV1 a EV4">
    <line class="chart-grid" x1="40" y1="50" x2="360" y2="50"></line>
    <line class="chart-grid" x1="40" y1="110" x2="360" y2="110"></line>
    <line class="chart-grid" x1="40" y1="170" x2="360" y2="170"></line>
    <text class="chart-axis-label" x="16" y="54">7,0</text>
    <text class="chart-axis-label" x="16" y="114">4,0</text>
    <text class="chart-axis-label" x="16" y="174">1,0</text>
    <polyline class="chart-line-average" points="${averagePolyline}"></polyline>
    <polyline class="chart-line-student" points="${studentPolyline}"></polyline>
    ${points}
    ${labels}
  </svg>`;
}

function comparisonMetricCodes() {
  return ["Nva_NF", "Nva_NP", "ET", "EV1", "EV2", "EV3", "EV4"];
}

function renderComparisonBars() {
  const metrics = comparisonMetricCodes()
    .map((code) => metricByCode(code))
    .filter((item) => item.metric_code);
  elements.comparisonBars.innerHTML = metrics.map((item) => `<div>
    <div class="d-flex justify-content-between gap-2 mb-1">
      <span><span class="badge rounded-pill component-chip ${evaluationToneClass(item.metric_code)} me-1">${escapeText(item.metric_code)}</span>${escapeText(item.label)}</span>
      <span class="text-secondary small">Tú ${gradePill(item.student_value)} · Prom. ${gradePill(item.average)}</span>
    </div>
    <div class="chart-bar-track mb-1" aria-hidden="true">
      <span class="chart-bar-fill average" style="--bar-width: ${gradeScale(item.average)}%"></span>
    </div>
    <div class="chart-bar-track" aria-hidden="true">
      <span class="chart-bar-fill student" style="--bar-width: ${gradeScale(item.student_value)}%"></span>
    </div>
  </div>`).join("");
}

function renderContributionBars() {
  const presentationRows = (state.presentationBreakdown.rows || []).map((item) => ({
    label: `${item.evaluation_code} a NP`,
    value: item.contribution_to_np,
    max: 7,
    tone: evaluationToneClass(item.evaluation_code),
    color: "teal",
  }));
  const finalRows = (state.finalGradeBreakdown.rows || []).map((item) => ({
    label: `${item.component_code} a nota final`,
    value: item.contribution_to_final,
    max: 7,
    tone: evaluationToneClass(item.component_code === "NP" ? "Nva_NP" : item.component_code),
    color: item.component_code === "NP" ? "violet" : "rose",
  }));
  const groups = [
    { title: "Aportes a NP", rows: presentationRows },
    { title: "Aportes a nota final", rows: finalRows },
  ];
  elements.contributionBars.innerHTML = groups.map((group) => {
    const maxValue = Math.max(...group.rows.map((item) => Number(item.value) || 0), 1);
    return `<div class="col-12 col-lg-6">
    <div class="border rounded p-3 h-100 bg-white">
      <h5 class="h6 mb-3">${escapeText(group.title)}</h5>
      <div class="vstack gap-3">
        ${group.rows.map((item) => `<div>
          <div class="d-flex justify-content-between gap-2 mb-1">
            <span class="badge rounded-pill component-chip ${item.tone}">${escapeText(item.label)}</span>
            <span class="fw-semibold">${grade(item.value)}</span>
          </div>
          <div class="chart-bar-track" aria-hidden="true">
            <span class="chart-bar-fill ${item.color}" style="--bar-width: ${ratioScale(item.value, maxValue)}%"></span>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </div>`;
  }).join("");
}

function renderProgressCharts() {
  renderProgressLineChart();
  renderComparisonBars();
  renderContributionBars();
}

function updateEvaluationsPage(requestedPage) {
  const evaluations = state.evaluations;
  const pageCount = Math.max(1, Math.ceil(evaluations.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, requestedPage), pageCount);
  elements.evaluationsBody.innerHTML = renderEvaluationTableRows(evaluations, page);

  const pagination = document.getElementById("evaluationsPagination");
  renderEvaluationFooter();
  if (!pagination) return;
  pagination.classList.toggle("d-none", evaluations.length <= PAGE_SIZE);
  if (evaluations.length <= PAGE_SIZE) {
    pagination.innerHTML = "";
    return;
  }
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, evaluations.length);
  pagination.innerHTML = `<div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mt-3">
    <div class="text-secondary small">Mostrando ${start} a ${end} de ${evaluations.length} evaluaciones.</div>
    <nav aria-label="Paginación de evaluaciones">
      <ul class="pagination pagination-sm mb-0">
        <li class="page-item ${page === 1 ? "disabled" : ""}">
          <button class="page-link" type="button" id="evaluationsPrev" ${page === 1 ? "disabled" : ""}>Anterior</button>
        </li>
        <li class="page-item ${page === pageCount ? "disabled" : ""}">
          <button class="page-link" type="button" id="evaluationsNext" ${page === pageCount ? "disabled" : ""}>Siguiente</button>
        </li>
      </ul>
    </nav>
  </div>`;
  document.getElementById("evaluationsPrev")?.addEventListener("click", () => updateEvaluationsPage(page - 1));
  document.getElementById("evaluationsNext")?.addEventListener("click", () => updateEvaluationsPage(page + 1));
}

function renderBenefits(student) {
  const items = [];
  for (const bonus of student.bonuses || []) {
    items.push({
      title: `${bonus.source_code}: ${grade(bonus.amount)} décimas consideradas`,
      body: bonus.notes ? `Entregas registradas: ${text(bonus.notes.submissions_count)}; entregas faltantes: ${text(bonus.notes.missing_count)}.` : "",
    });
  }
  for (const adjustment of student.adjustments || []) {
    items.push({
      title: `${adjustment.source_code || "Ajuste"}: ajuste aplicado en ${adjustment.target_evaluation_code}`,
      body: `Se aplicó por ${text(adjustment.source_label)}. Cambio registrado: ${adjustment.explanation}.`,
    });
  }
  elements.benefitsSection.classList.toggle("d-none", items.length === 0);
  elements.benefitsList.innerHTML = items
    .map((item) => `<div class="list-group-item">
      <strong class="d-block">${escapeText(item.title)}</strong>
      <span class="text-secondary">${escapeText(item.body)}</span>
    </div>`)
    .join("");
}

function renderRubricRows(indicators, page) {
  const start = (page - 1) * PAGE_SIZE;
  return indicators.slice(start, start + PAGE_SIZE)
    .map((indicator) => `<tr>
      <td class="fw-semibold">${escapeText(indicator.indicator_code)}</td>
      <td>${escapeText(indicator.description)}</td>
      <td><span class="badge rounded-pill performance-chip ${performanceToneClass(indicator.level_percent)}">${escapeText(indicator.performance_level)}</span></td>
      <td class="text-end">${percentPill(indicator.level_percent)}</td>
      <td class="text-end">${percent(indicator.weight_percent)}</td>
      <td class="text-end">${percent(indicator.awarded_points)}</td>
      <td>${inlineMarkdown(indicator.feedback)}</td>
    </tr>`).join("");
}

function rubricPaginationHtml(index, totalRows) {
  if (totalRows <= PAGE_SIZE) return "";
  return `<div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mt-3" id="rubricPagination-${index}" data-rubric-pagination="${index}" data-page="1">
    <div class="text-secondary small" id="rubricPageInfo-${index}"></div>
    <nav aria-label="Paginación de rúbrica">
      <ul class="pagination pagination-sm mb-0">
        <li class="page-item">
          <button class="page-link" type="button" data-rubric-index="${index}" data-rubric-action="prev">Anterior</button>
        </li>
        <li class="page-item">
          <button class="page-link" type="button" data-rubric-index="${index}" data-rubric-action="next">Siguiente</button>
        </li>
      </ul>
    </nav>
  </div>`;
}

function updateRubricPage(index, requestedPage) {
  const key = String(index);
  const indicators = state.rubricTables.get(key) || [];
  const pageCount = Math.max(1, Math.ceil(indicators.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, requestedPage), pageCount);
  const tbody = document.getElementById(`rubricRows-${key}`);
  const container = document.getElementById(`rubricPagination-${key}`);
  if (!tbody) return;

  tbody.innerHTML = renderRubricRows(indicators, page);
  if (!container) return;

  container.dataset.page = String(page);
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, indicators.length);
  const info = document.getElementById(`rubricPageInfo-${key}`);
  if (info) {
    info.textContent = `Mostrando ${start} a ${end} de ${indicators.length} indicadores.`;
  }
  const previous = container.querySelector('[data-rubric-action="prev"]');
  const next = container.querySelector('[data-rubric-action="next"]');
  previous?.closest(".page-item")?.classList.toggle("disabled", page === 1);
  next?.closest(".page-item")?.classList.toggle("disabled", page === pageCount);
  previous?.toggleAttribute("disabled", page === 1);
  next?.toggleAttribute("disabled", page === pageCount);
}

function setupRubricPagination() {
  document.querySelectorAll("[data-rubric-pagination]").forEach((container) => {
    updateRubricPage(container.dataset.rubricPagination, 1);
  });
  document.querySelectorAll("[data-rubric-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.rubricIndex;
      const container = document.getElementById(`rubricPagination-${index}`);
      const currentPage = Number(container?.dataset.page || "1");
      const direction = button.dataset.rubricAction === "next" ? 1 : -1;
      updateRubricPage(index, currentPage + direction);
    });
  });
}

function renderFeedback(student) {
  state.rubricTables.clear();
  const evaluations = [...(student.evaluations || [])]
    .filter((item) => item.final_feedback || (item.rubric_indicators || []).length > 0)
    .sort(sortEvaluations);
  elements.feedbackAccordion.innerHTML = evaluations
    .map((item, index) => {
      const headingId = `feedback-heading-${index}`;
      const bodyId = `feedback-body-${index}`;
      const indicators = item.rubric_indicators || [];
      state.rubricTables.set(String(index), indicators);
      const rubricHtml = indicators.length
        ? `<div class="table-responsive">
            <table class="table table-sm table-hover align-middle mb-0 rubric-table">
              <thead>
                <tr>
                  <th>IE</th>
                  <th>Indicador</th>
                  <th>Nivel</th>
                  <th class="text-end">% logro</th>
                  <th class="text-end">Pond.</th>
                  <th class="text-end">% IE</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody id="rubricRows-${index}">${renderRubricRows(indicators, 1)}</tbody>
            </table>
            ${rubricPaginationHtml(index, indicators.length)}
          </div>`
        : `<p class="text-muted mb-0">No hay detalle de rúbrica registrado para esta evaluación.</p>`;
      const feedbackHtml = item.final_feedback
        ? `<div class="feedback-prose">${markdownBlock(item.final_feedback)}</div>`
        : `<p class="text-muted mb-0">No hay retroalimentación final registrada para esta evaluación.</p>`;
      return `<div class="accordion-item">
        <h2 class="accordion-header" id="${headingId}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${bodyId}" aria-expanded="false" aria-controls="${bodyId}">
            <span class="accordion-title">
              <strong>${escapeText(item.evaluation_code)} · ${escapeText(evaluationTitle(item))}</strong>
              <span><span class="badge rounded-pill eval-chip ${evaluationToneClass(item.evaluation_code)} me-1">${escapeText(item.evaluation_code)}</span>Nota ${gradePill(item.grade)} · Logro ${percentPill(item.score_percent)} · Forma ${escapeText(item.form)}</span>
            </span>
          </button>
        </h2>
        <div id="${bodyId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#feedbackAccordion">
          <div class="accordion-body">
            <div class="detail-block">
              <div class="text-uppercase text-secondary fw-semibold small mb-2">Rúbrica ponderada</div>
              ${rubricHtml}
            </div>
            <div class="detail-block">
              <div class="text-uppercase text-secondary fw-semibold small mb-2">Retroalimentación</div>
              ${feedbackHtml}
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
  setupRubricPagination();
}

function renderStudent(payload) {
  const student = payload.student;
  const final = student.final || {};
  state.presentationBreakdown = student.presentation_breakdown || {};
  state.finalGradeBreakdown = student.final_grade_breakdown || {};
  elements.studentName.textContent = titleName(student.display_name);
  setMetricGrade(elements.finalGrade, final.Nva_NF);
  setMetricGrade(elements.presentationGrade, final.Nva_NP);
  setMetricGrade(elements.examGrade, final.ET);
  setMetricGrade(elements.baseFinalGrade, final.NF);
  elements.observationsSection.classList.toggle("d-none", !final.Observaciones);
  elements.finalObservations.textContent = final.Observaciones || "";
  renderEvaluationRows(student);
  renderFinalGradeBreakdown();
  renderCourseDashboard(student);
  renderProgressCharts();
  renderBenefits(student);
  renderFeedback(student);
  elements.lookupPanel.classList.add("d-none");
  elements.studentView.classList.remove("d-none");
  showSummaryTab();
}

function showSummaryTab() {
  const tab = document.getElementById("summaryTab");
  if (!tab) return;
  if (window.bootstrap?.Tab) {
    window.bootstrap.Tab.getOrCreateInstance(tab).show();
    return;
  }
  tab.click();
}

async function loadManifest() {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error("Tu navegador no permite abrir esta consulta de forma segura. Usa el enlace oficial del curso o intenta con un navegador actualizado.");
  }
  const response = await fetch("./data/manifest.json", { cache: "no-store" });
  if (!response.ok) throw new Error("No pudimos cargar la información del curso. Intenta actualizar la página.");
  state.manifest = await response.json();
  const course = state.manifest.course || {};
  const section = state.manifest.section || {};
  elements.courseTitle.textContent = `${course.course_code || ""} · ${course.course_name || "Evaluaciones"}`.trim();
  elements.sectionLabel.textContent = section.section_code || "Resultados";
  elements.generatedAt.textContent = state.manifest.generated_at ? `Actualizado: ${new Date(state.manifest.generated_at).toLocaleString("es-CL")}` : "Sin fecha de actualización";
}

async function lookupStudent(rut, code) {
  const normalizedRut = normalizeRut(rut);
  if (!normalizedRut || !code) {
    throw makeFieldError("code", "Ingresa tu RUT y tu código de acceso para continuar.");
  }
  const lookupId = await sha256(`${state.manifest.section.section_code}:${normalizedRut}:${code}`);
  const response = await fetch(`./data/students/${lookupId}.json`, { cache: "no-store" });
  if (!response.ok) {
    throw makeFieldError("code", "No encontramos resultados con esos datos. Revisa tu RUT, tu código de acceso y vuelve a intentarlo.");
  }
  const envelope = await response.json();
  try {
    return await decryptStudent(envelope, normalizedRut, code);
  } catch {
    throw makeFieldError("code", "No pudimos abrir tus resultados con ese código. Revisa que lo hayas escrito exactamente como fue entregado.");
  }
}

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setError("");
  if (!validateAccessFields()) {
    return;
  }
  const button = elements.submit;
  button.disabled = true;
  button.textContent = "Abriendo tus resultados...";
  try {
    const payload = await lookupStudent(elements.rut.value, elements.code.value.trim());
    renderStudent(payload);
  } catch (error) {
    if (error.field === "rut" || error.field === "code") {
      setFieldError(error.field, error.message);
    } else {
      setError(error.message || "No se pudieron cargar los resultados.");
    }
  } finally {
    button.disabled = false;
    button.textContent = button.dataset.defaultLabel || "Ver mis resultados";
  }
});

elements.reset.addEventListener("click", () => {
  elements.studentView.classList.add("d-none");
  elements.lookupPanel.classList.remove("d-none");
  elements.rut.value = "";
  elements.code.value = "";
  clearFieldErrors();
  setError("");
  elements.rut.focus();
});

elements.rut.addEventListener("input", () => setFieldError("rut", ""));
elements.code.addEventListener("input", () => setFieldError("code", ""));

loadManifest().catch((error) => setError(error.message));
