# ✍️ Markdown

## ¿Qué es Markdown?
Markdown es un **lenguaje de marcado ligero** creado por John Gruber en 2004. Permite dar formato a texto plano usando caracteres simples, que luego se renderizan como HTML. Es el estándar de facto para documentación técnica.

**Se usa en:** GitHub, GitLab, Notion, Confluence, Obsidian, Jupyter, Discord, Reddit, y más.

---

## ¿Por qué aprenderlo?

- Todo proyecto profesional tiene un `README.md`
- Las issues y pull requests en GitHub usan Markdown
- Es la forma más común de escribir documentación técnica
- Es legible incluso sin renderizar
- Es texto plano: funciona en cualquier editor y sistema de control de versiones

---

## Sintaxis completa

### Títulos

```markdown
# H1 — Título principal (solo uno por documento)
## H2 — Sección
### H3 — Subsección
#### H4 — Sub-subsección
```

---

### Énfasis de texto

```markdown
**Negrita** o __Negrita__
*Cursiva* o _Cursiva_
***Negrita y cursiva***
~~Tachado~~
`código en línea`
```

**Resultado:**
**Negrita** · *Cursiva* · ***Negrita y cursiva*** · ~~Tachado~~ · `código en línea`

---

### Listas

```markdown
- Ítem sin orden
- Otro ítem
  - Sub-ítem (2 espacios de indentación)
  - Otro sub-ítem

1. Ítem numerado
2. Segundo ítem
   1. Sub-ítem numerado
```

---

### Enlaces e imágenes

```markdown
[Texto del enlace](https://url.com)
[Enlace con título](https://url.com "Texto al pasar el cursor")

![Texto alternativo](https://url.com/imagen.png)
![Logo](./assets/logo.png)  ← ruta relativa
```

---

### Bloques de código

````markdown
```java
// Bloque con resaltado de sintaxis
public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
    }
}
```

```bash
./mvnw spring-boot:run
```

```json
{
  "id": 1,
  "titulo": "Error en login"
}
```
````

> Reemplaza `java` por el lenguaje correspondiente: `python`, `sql`, `yaml`, `xml`, `bash`, `http`, etc.

---

### Tablas

```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|:---------:|----------:|
| Izquierda | Centrado  |  Derecha  |
| Valor A   | Valor B   |  Valor C  |
```

| Columna 1 | Columna 2 | Columna 3 |
|-----------|:---------:|----------:|
| Izquierda | Centrado  |  Derecha  |
| Valor A   | Valor B   |  Valor C  |

---

### Citas (`blockquote`)

```markdown
> Esto es una cita o nota importante.
> Puede ocupar múltiples líneas.

> ⚠️ Advertencia: esto puede romper el sistema.
> 💡 Tip: usa Optional para evitar NullPointerException.
```

---

### Línea horizontal

```markdown
---
```

---

### Tareas (checkboxes)

```markdown
- [x] Crear el modelo Ticket
- [x] Implementar el repositorio
- [ ] Agregar validaciones
- [ ] Escribir tests
```

- [x] Crear el modelo Ticket
- [x] Implementar el repositorio
- [ ] Agregar validaciones
- [ ] Escribir tests

---

### Notas al pie *(GitHub Flavored Markdown)*

```markdown
Esta es una afirmación importante[^1].

[^1]: Fuente: Martin Fowler, Patterns of Enterprise Application Architecture.
```

---

### Alertas *(GitHub Flavored Markdown — nuevo)*

```markdown
> [!NOTE]
> Información útil que el lector debe considerar.

> [!TIP]
> Consejo para mejorar la experiencia.

> [!WARNING]
> Contenido crítico que requiere atención.

> [!IMPORTANT]
> Información esencial para el éxito del usuario.
```

---

## Estructura recomendada para un `README.md` de proyecto

```markdown
# Nombre del Proyecto

Breve descripción de qué hace el proyecto.

## 🚀 Requisitos previos

- Java 21+
- Maven 3.9+

## ⚙️ Instalación y ejecución

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
./mvnw spring-boot:run
```

## 📖 Documentación de la API

| Método | Endpoint        | Descripción          |
|--------|-----------------|----------------------|
| GET    | /tickets        | Listar todos         |
| GET    | /tickets/{id}   | Obtener por ID       |
| POST   | /tickets        | Crear nuevo ticket   |
| PUT    | /tickets/{id}   | Actualizar ticket    |
| DELETE | /tickets/{id}   | Eliminar ticket      |

## 🧪 Tests

```bash
./mvnw test
```

## 📄 Licencia

MIT
```

---

## Buenas prácticas

- ✅ Usar un solo `#` por documento (el título)
- ✅ Dejar una línea en blanco antes y después de bloques de código
- ✅ Especificar el lenguaje en los bloques de código para resaltado de sintaxis
- ✅ Mantener tablas alineadas visualmente en el texto plano
- ✅ Usar emojis con moderación para mejorar la legibilidad (no para decorar)
- ❌ No anidar más de 3 niveles de listas
- ❌ No usar HTML dentro de Markdown salvo que sea estrictamente necesario

---

## Herramientas útiles

| Herramienta | Descripción | Enlace |
|-------------|-------------|--------|
| Markdown Preview (IDE) | Vista previa en IntelliJ / VS Code | Incluida en el IDE |
| Markdownlint | Linter para Markdown | [github.com/DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint) |
| readme.so | Generador visual de README | [readme.so](https://readme.so/es) |
| Tables Generator | Generador de tablas Markdown | [tablesgenerator.com/markdown_tables](https://www.tablesgenerator.com/markdown_tables) |

---

## Recursos recomendados

| Recurso | Tipo | Enlace |
|---------|------|--------|
| Markdown Guide | 📖 Guía completa | [markdownguide.org/es](https://www.markdownguide.org/es/) |
| GitHub Flavored Markdown | 📄 Especificación GFM | [docs.github.com/es/get-started/writing-on-github](https://docs.github.com/es/get-started/writing-on-github) |
| CommonMark Spec | 📄 Estándar | [commonmark.org](https://commonmark.org/) |

---

*[← Volver a Extras](../README.md)*

