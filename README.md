# Python desde 0 para estudiantes con base en PSeInt

Proyecto educativo para enseñar Python de forma progresiva a estudiantes que ya conocen fundamentos de programación en PSeInt.

## Propósito

La idea es acompañar la transición desde pseudocódigo a un lenguaje real, manteniendo una ruta ordenada y gradual:

- teoría con ejemplos
- aplicación con ejercicios resueltos
- práctica por lección

## Punto de partida del curso

Se asume que el estudiante ya maneja en PSeInt:

- variables
- escribir y leer
- si y sino
- según
- mientras
- repetir
- para
- definir

La primera etapa del proyecto se centra en la [homologación entre PSeInt y Python](docs/lessons/01-homologacion-pseint-python/README.md).

## Navegación rápida

- [Portal de actividades](docs/index.html)
- [Lessons](docs/lessons/README.md)
- [Extras](docs/extras/README.md)
- [Guía interactiva Git y GitHub](docs/guide/git-github.html)
- [Lección 01 - Homologación entre PSeInt y Python](docs/lessons/01-homologacion-pseint-python/README.md)

## Estructura

```text
docs/
├── guide/
│   └── git-github.html
├── lessons/
│   ├── 01-homologacion-pseint-python/
│   ├── 02-variables-entrada-y-salida/
│   ├── 03-tipos-de-datos-y-conversion/
│   ├── 04-condicionales/
│   ├── 05-ciclos/
│   └── 06-funciones/
└── extras/
    ├── ejercicios/
    ├── entorno-python/
    ├── errores-comunes/
    ├── git-github/
    ├── json/
    ├── markdown/
    ├── matematicas-para-programar/
    ├── terminal/
    └── tips-de-programacion/
```

## Criterio pedagógico

Cada carpeta en `docs/lessons/` representa una lección y contiene el material directo de esa clase.

Cada lección debe desarrollarse con esta estructura:

- `teoria.md`: explicación completa, clara y progresiva, con ejemplos
- `aplicacion.md`: ejercicios resueltos para mostrar cómo se usa lo visto
- `practica.md`: ejercicios para que el estudiante aplique la lección por su cuenta

La carpeta [`docs/extras/`](docs/extras/README.md) contiene material complementario para consulta autónoma.

La carpeta [`docs/guide/`](docs/guide/) contiene guías interactivas publicadas como páginas HTML independientes.
