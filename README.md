# Python desde 0 para estudiantes con base en PSeInt

Proyecto educativo para ensenar Python de forma progresiva a estudiantes que ya conocen fundamentos de programacion en PSeInt.

## Proposito

La idea es acompanar la transicion desde pseudocodigo a un lenguaje real, manteniendo una ruta ordenada y gradual:

- teoria con ejemplos
- aplicacion con ejercicios resueltos
- practica por leccion

## Punto de partida del curso

Se asume que el estudiante ya maneja en PSeInt:

- variables
- escribir y leer
- si y sino
- segun
- mientras
- repetir
- para
- definir

La primera etapa del proyecto se centra en la [homologacion entre PSeInt y Python](docs/lessons/01-homologacion-pseint-python/README.md).

## Navegacion rapida

- [Documentacion del curso](docs/README.md)
- [Lessons](docs/lessons/README.md)
- [Extras](docs/extras/README.md)
- [Leccion 01 - Homologacion entre PSeInt y Python](docs/lessons/01-homologacion-pseint-python/README.md)

## Estructura

```text
docs/
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

## Criterio pedagogico

Cada carpeta en `docs/lessons/` representa una leccion y contiene el material directo de esa clase.

Cada leccion debe desarrollarse con esta estructura:

- `teoria.md`: explicacion completa, clara y progresiva, con ejemplos
- `aplicacion.md`: ejercicios resueltos para mostrar como se usa lo visto
- `practica.md`: ejercicios para que el estudiante aplique la leccion por su cuenta

La carpeta [`docs/extras/`](docs/extras/README.md) contiene material complementario para consulta autonoma.

