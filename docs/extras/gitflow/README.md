# 🌊 GitFlow — Estrategia de Ramificación

## ¿Qué es GitFlow?

**GitFlow** es un **modelo de ramificación** (branching strategy) para Git, propuesto por Vincent Driessen en 2010. Define un conjunto de reglas sobre cómo organizar las ramas de un repositorio y cómo fluyen los cambios entre ellas a lo largo del ciclo de vida del software.

> 📌 GitFlow **no es una herramienta** ni un comando de Git: es un **conjunto de convenciones y reglas** que el equipo acuerda seguir. Se puede aplicar usando solo comandos estándar de Git.

---

## ¿Por qué usar GitFlow?

| Problema sin estrategia | Solución con GitFlow |
|------------------------|----------------------|
| Código inestable en `main` | `main` solo contiene código listo para producción |
| Mezcla de features incompletos | Cada funcionalidad vive en su propia rama `feature/` |
| Bugs en producción difíciles de parchear | Ramas `hotfix/` permiten corregir sin interrumpir el desarrollo |
| Lanzamientos caóticos | Ramas `release/` estabilizan el código antes de desplegar |
| Sin historial claro de versiones | Cada release queda etiquetado (`tag`) en `main` |

---

## Las 5 ramas de GitFlow

GitFlow define dos tipos de ramas: **permanentes** (viven durante toda la vida del proyecto) y **temporales** (se crean para una tarea específica y se eliminan al terminar).

### Ramas permanentes

| Rama | Propósito |
|------|-----------|
| `main` | Código en **producción**. Siempre estable. Solo recibe merges desde `release/` o `hotfix/` |
| `develop` | Rama de **integración**. Contiene el trabajo más reciente listo para el próximo release |

### Ramas temporales

| Rama | Se crea desde | Se fusiona hacia | Propósito |
|------|--------------|------------------|-----------|
| `feature/*` | `develop` | `develop` | Nueva funcionalidad |
| `release/*` | `develop` | `main` y `develop` | Preparar un nuevo lanzamiento |
| `hotfix/*` | `main` | `main` y `develop` | Corregir un bug crítico en producción |

---

## Diagrama del flujo

```
main      ────●────────────────────────────●────────────●────▶
               │                           ↑            ↑
               │  (tag v1.0)               │ (tag v1.1) │ (tag v1.1.1)
               │                        release/1.1     │
develop   ─────●──────●──────●──────────────●──●──────●─┼─────▶
                       │      ↑              ↑   │      ↑ │
                       │      │              │   │      │ │
feature/login ─────────●──────┘              │   │      │ │
                              │              │   │      │ │
feature/tickets ──────────────●──────────────┘   │      │ │
                                                 │      │ │
                                          hotfix/bug-x──┘ │
                                                          ↑
                                                    (merge a main)
```

---

## Ciclo de vida de cada rama

### 1. 🌿 `feature/*` — Nueva funcionalidad

**Cuándo:** Al comenzar a desarrollar una nueva característica.

**Reglas:**
- Se crea a partir de `develop`
- Se fusiona de vuelta a `develop` al terminar
- Nunca se fusiona directamente a `main`
- Nombre sugerido: `feature/nombre-descriptivo` (ej. `feature/login`, `feature/crear-ticket`)

**Flujo:**
```
develop
   │
   ├─── (crear) feature/login
   │         │
   │         ● commit: agrega formulario
   │         ● commit: agrega validación
   │         ● commit: agrega tests
   │         │
   └─── (merge) feature/login → develop
```

**En Git:**
```bash
# Crear la rama feature desde develop
git checkout develop
git checkout -b feature/login

# ... desarrollar, hacer commits ...
git commit -m "feat(auth): agrega formulario de login"
git commit -m "feat(auth): agrega validación de credenciales"

# Fusionar de vuelta a develop
git checkout develop
git merge --no-ff feature/login

# Eliminar la rama feature (ya no es necesaria)
git branch -d feature/login
```

> 💡 El flag `--no-ff` (no fast-forward) crea siempre un commit de merge, preservando el historial de que esos cambios vinieron de una feature branch.

---

### 2. 🚀 `release/*` — Preparar un lanzamiento

**Cuándo:** Cuando `develop` tiene suficientes funcionalidades para un nuevo release y se quiere estabilizar antes de pasar a producción.

**Reglas:**
- Se crea a partir de `develop`
- Solo se permiten correcciones menores (bugs, ajustes de documentación, número de versión)
- Al terminar, se fusiona a **`main`** (con tag) **y** a **`develop`**
- Nombre sugerido: `release/x.y.z` (ej. `release/1.2.0`)

**Flujo:**
```
develop  ──●── (tiene features A, B, C listas)
            │
            ├─── (crear) release/1.2.0
            │         │
            │         ● fix: corrige bug menor
            │         ● chore: actualiza versión a 1.2.0
            │         │
main     ───┼─────────●  ← merge + tag v1.2.0
            │         │
develop  ───┼─────────●  ← merge (para incluir los fixes)
```

**En Git:**
```bash
# Crear la rama release desde develop
git checkout develop
git checkout -b release/1.2.0

# ... correcciones menores, actualización de versión ...
git commit -m "chore: actualiza versión a 1.2.0"

# Fusionar a main y etiquetar
git checkout main
git merge --no-ff release/1.2.0
git tag -a v1.2.0 -m "Release v1.2.0"

# Fusionar también a develop (para traer las correcciones)
git checkout develop
git merge --no-ff release/1.2.0

# Eliminar la rama release
git branch -d release/1.2.0
```

---

### 3. 🚑 `hotfix/*` — Corrección urgente en producción

**Cuándo:** Se detecta un bug crítico en producción que no puede esperar al próximo release.

**Reglas:**
- Se crea a partir de **`main`** (no de `develop`)
- Solo contiene la corrección del bug
- Al terminar, se fusiona a **`main`** (con tag) **y** a **`develop`**
- Nombre sugerido: `hotfix/descripcion-del-bug` (ej. `hotfix/null-pointer-login`)

**Flujo:**
```
main  ──● v1.2.0 ─────────────────● v1.2.1
         │                        ↑
         ├─── (crear) hotfix/bug  │
         │         │              │
         │         ● fix: corrige NullPointer en login
         │         │              │
         └─────────┘ ─────────────┘ (merge a main + tag)
                   │
develop ───────────● (merge para incluir el fix)
```

**En Git:**
```bash
# Crear la rama hotfix desde main
git checkout main
git checkout -b hotfix/null-pointer-login

# ... corregir el bug ...
git commit -m "fix(auth): corrige NullPointerException al iniciar sesión sin email"

# Fusionar a main y etiquetar
git checkout main
git merge --no-ff hotfix/null-pointer-login
git tag -a v1.2.1 -m "Hotfix v1.2.1"

# Fusionar también a develop
git checkout develop
git merge --no-ff hotfix/null-pointer-login

# Eliminar la rama hotfix
git branch -d hotfix/null-pointer-login
```

---

## Reglas de fusión resumidas

```
feature/*   →  develop                (nunca a main directamente)
release/*   →  main + develop         (merge en ambas)
hotfix/*    →  main + develop         (merge en ambas)
```

| ¿Quién puede mergear a `main`? | Solo `release/*` y `hotfix/*` |
|---|---|
| ¿Quién puede mergear a `develop`? | `feature/*`, `release/*` y `hotfix/*` |
| ¿Se hace commit directo en `main` o `develop`? | ❌ Nunca (solo merges) |

---

## Versionado semántico con GitFlow

GitFlow se combina naturalmente con **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

| Tipo de cambio | Qué sube | Ejemplo |
|----------------|---------|---------|
| Corrección de bug (`hotfix`) | `PATCH` | 1.2.0 → **1.2.1** |
| Nueva funcionalidad (`release`) | `MINOR` | 1.2.0 → **1.3.0** |
| Cambio incompatible con versiones anteriores | `MAJOR` | 1.2.0 → **2.0.0** |

Los tags en `main` reflejan estas versiones:

```bash
git tag -a v1.3.0 -m "Release v1.3.0: agrega módulo de tickets"
git tag -a v1.3.1 -m "Hotfix v1.3.1: corrige validación de estado"
```

---

## GitFlow vs otros flujos de trabajo

| Criterio | GitFlow | GitHub Flow | Trunk-Based |
|----------|---------|-------------|-------------|
| Número de ramas permanentes | 2 (`main` + `develop`) | 1 (`main`) | 1 (`main`) |
| Complejidad | Alta | Baja | Media |
| Ideal para | Releases planificados | Despliegue continuo | Equipos con CI/CD maduro |
| Velocidad de entrega | Ciclos planificados | Alta (deploy por PR) | Muy alta (varias veces al día) |
| Riesgo de conflictos | Menor (ramas largas bien definidas) | Mayor si hay muchas features | Requiere feature flags |

> 📌 GitFlow es ideal cuando el proyecto tiene **releases con versiones definidas** y **equipos medianos o grandes**. Para proyectos pequeños con despliegue continuo, **GitHub Flow** puede ser suficiente.

---

## Convención de nombres de ramas

| Tipo | Patrón | Ejemplo |
|------|--------|---------|
| Feature | `feature/nombre-descriptivo` | `feature/crear-ticket` |
| Release | `release/x.y.z` | `release/2.1.0` |
| Hotfix | `hotfix/descripcion-del-bug` | `hotfix/error-500-tickets` |

> 💡 Usa **kebab-case** (palabras separadas por guiones), sin espacios ni caracteres especiales.

---

## Aplicado al proyecto Tickets

El proyecto `Tickets` podría organizar su desarrollo con GitFlow así:

```
main
  └── v0.1.0 (primera versión funcional)
  └── v0.1.1 (hotfix: corrige respuesta 500 en GET /tickets)
  └── v0.2.0 (agrega endpoint de búsqueda por estado)

develop
  ├── feature/get-all-tickets
  ├── feature/create-ticket
  ├── feature/update-ticket-status
  └── feature/delete-ticket

release/0.2.0
  └── chore: actualiza versión en pom.xml
  └── fix: ajusta validación de campo status

hotfix/0.1.1
  └── fix(controller): corrige NullPointerException en GET /tickets/{id}
```

**Ejemplo de flujo para una nueva feature:**

```bash
# 1. Partir desde develop actualizado
git checkout develop
git pull origin develop

# 2. Crear la feature branch
git checkout -b feature/create-ticket

# 3. Desarrollar y commitear
git commit -m "feat(tickets): agrega endpoint POST /tickets"
git commit -m "test(tickets): agrega prueba unitaria para createTicket"

# 4. Integrar a develop
git checkout develop
git merge --no-ff feature/create-ticket -m "merge: feature/create-ticket"
git push origin develop

# 5. Limpiar
git branch -d feature/create-ticket
```

---

## Buenas prácticas

| ✅ Hacer | ❌ Evitar |
|---------|---------|
| Crear `feature` siempre desde `develop` actualizado | Crear `feature` desde `main` |
| Usar `--no-ff` en todos los merges de GitFlow | Usar fast-forward (pierde historial de ramas) |
| Etiquetar cada release en `main` con `git tag` | Dejar `main` sin tags de versión |
| Hacer PRs de `feature` → `develop` para revisión | Mergear sin revisión de código |
| Fusionar `hotfix` tanto a `main` como a `develop` | Olvidar llevar el hotfix a `develop` |
| Nombres de ramas descriptivos en kebab-case | Nombres genéricos como `fix`, `cambios`, `nueva` |
| `release` solo para correcciones menores | Agregar features nuevas en una rama `release` |

---

## Recursos recomendados

| Recurso | Tipo | Enlace |
|---------|------|--------|
| A successful Git branching model (artículo original) | 📖 Artículo | [nvie.com/posts/a-successful-git-branching-model](https://nvie.com/posts/a-successful-git-branching-model/) |
| Atlassian — Gitflow Workflow | 📄 Guía | [atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) |
| Semantic Versioning | 📖 Estándar | [semver.org/lang/es](https://semver.org/lang/es/) |
| Learn Git Branching (interactivo) | 🎮 Interactivo | [learngitbranching.js.org](https://learngitbranching.js.org/?locale=es_ES) |

---

*[← Volver a Extras](../README.md)*

