# ⚡ Capítulo 2 — El Nacimiento de la Computación

> **Período:** 1936 — 1951  
> **Pregunta central:** ¿Cómo pasamos del papel y los engranajes a las primeras computadoras electrónicas reales?

---

## El contexto: guerra, urgencia y matemáticas

Los años 30 y 40 fueron convulsos. La Segunda Guerra Mundial (1939–1945) creó una necesidad desesperada de calcular más rápido que el enemigo:

- Descifrar mensajes cifrados de la máquina **Enigma** alemana.
- Calcular trayectorias balísticas de artillería.
- Diseñar la bomba atómica (Proyecto Manhattan).
- Calcular tablas de navegación para la armada.

La guerra aceleró 20 años de desarrollo tecnológico en 5. Las primeras computadoras electrónicas nacieron directamente de estas urgencias militares.

---

## 1936 — Alan Turing: la computadora antes de existir

En 1936, el matemático británico **Alan Turing** (26 años) publicó un paper titulado *"On Computable Numbers, with an Application to the Entscheidungsproblem"*.

En ese paper describió una máquina imaginaria — hoy llamada **Máquina de Turing** — para responder una pregunta matemática abstracta: ¿qué puede y qué no puede ser calculado por un proceso mecánico?

### La Máquina de Turing (concepto)

```
Máquina de Turing (abstracta, no física):
  ├── Cinta infinita        → memoria (puede leer y escribir símbolos)
  ├── Cabeza lectora/escrit → lee el símbolo actual, escribe uno nuevo
  ├── Tabla de estados      → reglas (si estás en estado X y lees Y, haz Z)
  └── Estado actual         → "posición mental" de la máquina

La máquina:
  1. Lee el símbolo bajo la cabeza
  2. Busca en la tabla qué hacer según (estado actual, símbolo leído)
  3. Escribe un nuevo símbolo, mueve la cinta izquierda/derecha, cambia de estado
  4. Repite hasta llegar al estado de "fin"
```

### ¿Por qué importa esto?

Turing demostró que **cualquier problema que pueda resolverse mediante un proceso paso a paso (algoritmo) puede ser resuelto por una Máquina de Turing**. Y una sola máquina universal podía simular cualquier otra máquina específica si se le cargaba la descripción adecuada.

Esto es la **Tesis de Church-Turing**: la definición formal de qué significa "computar" algo.

> 🔑 La Máquina de Turing es el fundamento teórico de toda computación. Tu procesador Intel, el compilador de Java, el servidor de Google — todos son, en esencia, Máquinas de Turing físicas y muy rápidas.

---

## 1937–1938 — Claude Shannon conecta la lógica con los circuitos

Siendo estudiante de posgrado en el MIT, **Claude Shannon** escribió lo que se considera *"la tesis de maestría más importante del siglo XX"*.

Su idea: los circuitos eléctricos (interruptores que pueden estar abiertos o cerrados, 0 o 1) implementan de forma natural el **álgebra booleana de Boole** (1854).

```
Interruptor abierto  = 0 = falso
Interruptor cerrado  = 1 = verdadero

Dos interruptores en serie  = AND  (ambos cerrados para pasar corriente)
Dos interruptores en paralelo = OR  (cualquiera cerrado para pasar corriente)
Un interruptor invertido = NOT
```

Shannon demostró que se pueden diseñar circuitos que sumen, comparen, decidan y recuerden usando álgebra booleana. En 1948 publicó *"A Mathematical Theory of Communication"*, fundando la **Teoría de la Información** y definiendo el **bit** (binary digit) como la unidad mínima de información.

---

## 1941 — Konrad Zuse y el Z3: la primera computadora programable

Mientras en Inglaterra y EE.UU. se trabajaba en secreto, el ingeniero alemán **Konrad Zuse** construyó en su sala de estar, prácticamente solo y sin apoyo estatal, la **Z3** (1941).

```
Z3 — especificaciones:
  ├── Tecnología: relés electromagnéticos (no tubos de vacío)
  ├── Sistema numérico: binario (por primera vez en una computadora real)
  ├── Memoria: 64 palabras de 22 bits
  ├── Programación: cinta de película cinematográfica perforada
  ├── Velocidad: 5-10 operaciones por segundo
  └── Uso: cálculos de ingeniería aeronáutica para la Luftwaffe
```

El Z3 es reconocido hoy como la **primera computadora electromecánica completamente programable y automática** de la historia. Fue destruida en un bombardeo aliado en 1943.

Zuse también creó el **Plankalkül** (Plan Cálculo, 1945) — el primer lenguaje de programación de alto nivel diseñado, aunque no fue implementado en su época.

---

## 1943 — Colossus: descifrar Enigma con electrónica

En Bletchley Park, el centro secreto de criptografía británico, el matemático **Max Newman** y el ingeniero **Tommy Flowers** construyeron **Colossus** — la primera computadora electrónica completamente funcional.

Su único propósito: descifrar los mensajes de la máquina Lorenz SZ-42 alemana, usada por el Alto Mando Nazi.

```
Colossus Mark 1 (1943):
  ├── 1.500 tubos de vacío (electrónico — sin partes mecánicas en el cálculo)
  ├── Leía cinta de papel a 5.000 caracteres por segundo
  ├── No era de propósito general (solo hacía descifrado)
  └── Clasificado como secreto hasta 1975 — el mundo no supo que existió
```

Colossus fue tan secreto que Churchill ordenó destruir todas las máquinas y documentos al terminar la guerra. El proyecto no se desclasificó hasta 1975. Durante décadas, los ingenieros que lo construyeron no pudieron contar lo que habían hecho.

Se estima que Colossus **acortó la guerra en 2 años**, salvando millones de vidas.

---

## 1944 — Harvard Mark I: la computadora más grande del mundo

**IBM** y la **Universidad de Harvard** construyeron el **Harvard Mark I** — financiado por la Armada de EE.UU. para calcular tablas balísticas.

```
Harvard Mark I:
  ├── 15,5 metros de largo · 2,4 metros de alto
  ├── 765.000 componentes mecánicos
  ├── 800 km de cable
  ├── Pesaba 4.500 kg (4,5 toneladas)
  ├── Podía sumar en 0,3 segundos
  ├── Programación: cinta de papel perforado
  └── Operó hasta 1959
```

**Grace Hopper** trabajó como programadora del Mark I. Un día encontró una polilla muerta dentro del relé 70 causando un fallo — literalmente la pegó en el libro de registro con la nota *"First actual case of bug being found"*. Así nació el término **bug** (error de software).

---

## 1945 — ENIAC: la computadora que el mundo conoció

El **ENIAC** (Electronic Numerical Integrator and Computer) fue presentado públicamente en 1946 y se convirtió en el símbolo de la computadora moderna ante el mundo.

```
ENIAC — especificaciones:
  ├── 17.468 tubos de vacío
  ├── 70.000 resistencias
  ├── 10.000 condensadores
  ├── Pesaba 30 toneladas
  ├── Ocupaba 167 m² (el tamaño de una casa grande)
  ├── Consumía 150 kW de electricidad
  ├── Velocidad: 5.000 sumas por segundo
  └── Programación: cables y switches físicos — reprogramar tomaba días
```

### Las programadoras del ENIAC

Lo que muchos no saben: el ENIAC fue **programado principalmente por seis mujeres**: Jean Jennings Bartik, Frances Bilas Spence, Kay McNulty Mauchly Antonelli, Marlyn Wescoff Meltzer, Ruth Lichterman Teitelbaum y Frances Elizabeth Snyder Holberton.

Ellas desarrollaron los algoritmos, depuraron los errores y descubrieron técnicas de programación que se siguen usando hoy — sin recibir crédito público durante décadas.

---

## 1945 — La Arquitectura Von Neumann: el diseño que persiste

El matemático húngaro-estadounidense **John von Neumann** escribió en 1945 el *"First Draft of a Report on the EDVAC"* — un documento que describía una arquitectura de computadora radicalmente importante.

### El concepto clave: el programa almacenado

Antes, las computadoras eran cableadas para una tarea específica. Cambiar el programa significaba reconectar físicamente cables. Von Neumann propuso que **el programa se almacene en la misma memoria que los datos** — y que la CPU lo lea y ejecute de forma secuencial.

```
Arquitectura Von Neumann (1945) — usada en casi toda computadora hasta hoy:

  ┌─────────────────────────────────────────┐
  │              MEMORIA                    │
  │  (almacena datos Y programas juntos)    │
  └────────────────┬────────────────────────┘
                   │
  ┌────────────────▼────────────────────────┐
  │                CPU                      │
  │  ┌──────────────┐  ┌──────────────────┐ │
  │  │  ALU         │  │  Unidad de       │ │
  │  │  (Aritmética │  │  Control         │ │
  │  │  y Lógica)   │  │  (fetch-decode-  │ │
  │  └──────────────┘  │   execute)       │ │
  │                    └──────────────────┘ │
  └─────────────────────────────────────────┘
           │                    │
  ┌────────▼────────┐  ┌────────▼────────────┐
  │    ENTRADA      │  │       SALIDA         │
  │ (teclado,       │  │  (pantalla,          │
  │  cinta, disco)  │  │   impresora)         │
  └─────────────────┘  └──────────────────────┘
```

Esta arquitectura tiene un cuello de botella inherente — la CPU y la memoria comparten el mismo bus de comunicación — conocido hoy como el **"cuello de botella de Von Neumann"**. Arquitecturas modernas como GPUs y procesadores vectoriales existen en parte para superar esta limitación.

---

## 1947 — El transistor: el invento que lo cambió todo

El 16 de diciembre de 1947, en los **Laboratorios Bell** de AT&T, los físicos **John Bardeen**, **Walter Brattain** y **William Shockley** demostraron el primer **transistor** funcional.

El transistor es un interruptor electrónico:
- Sin partes mecánicas móviles
- Más pequeño que un tubo de vacío
- Genera mucho menos calor
- Usa mucha menos energía
- Es extremadamente confiable

```
Tubo de vacío vs. Transistor:
                    Tubo de vacío    Transistor (1947)
  Tamaño            ~10 cm           ~1 cm (y bajando)
  Calor             Mucho            Poco
  Confiabilidad     Baja             Alta
  Costo             Caro             Barato
  Velocidad         Buena            Mejor
```

Bardeen, Brattain y Shockley ganaron el **Premio Nobel de Física de 1956** por este invento.

El transistor hizo posible todo lo que vino después: circuitos integrados, microprocesadores, computadoras personales, teléfonos móviles. Es probablemente el invento más importante del siglo XX.

---

## 1948 — Manchester Baby: el primer programa almacenado

El 21 de junio de 1948, en la Universidad de Manchester, la **Manchester Small-Scale Experimental Machine** (apodada "Baby") ejecutó el primer programa **almacenado en memoria electrónica** de la historia.

El programa, escrito por **Tom Kilburn**, encontraba el máximo divisor de un número. Tardó 52 minutos en ejecutarlo — hoy un procesador moderno lo haría en nanosegundos.

Este es el momento en que la Arquitectura Von Neumann pasó del papel a la realidad.

---

## 1951 — UNIVAC: la computadora llega al mundo comercial

El **UNIVAC I** (Universal Automatic Computer) fue la primera computadora producida comercialmente en EE.UU., diseñada por **Eckert y Mauchly** (los creadores del ENIAC).

La primera unidad fue entregada a la **Oficina del Censo de EE.UU.** en 1951 — cerrando el círculo con Herman Hollerith, que había mecanizado el censo 60 años antes.

El momento que puso al UNIVAC en el mapa cultural: en las elecciones presidenciales de noviembre de 1952, CBS usó un UNIVAC en vivo en televisión para predecir los resultados. El UNIVAC predijo la victoria aplastante de **Eisenhower** sobre Stevenson cuando los analistas humanos aún veían la carrera como cerrada. La predicción fue correcta.

Fue la primera vez que millones de personas vieron una computadora "en acción" — y empezaron a entender que no era solo una calculadora gigante, sino algo nuevo.

---

## Resumen del capítulo

| Año | Hito | Significado |
|-----|------|-------------|
| 1936 | Máquina de Turing | Definición teórica de computación — qué puede calcularse |
| 1937 | Shannon — álgebra booleana en circuitos | Los circuitos físicos implementan lógica matemática |
| 1941 | Zuse Z3 | Primera computadora programable real (electromecánica) |
| 1943 | Colossus | Primera computadora electrónica — descifra Enigma |
| 1944 | Harvard Mark I | IBM entra en la computación — Grace Hopper y el "bug" |
| 1945 | ENIAC | La computadora que el mundo vio — programada por mujeres |
| 1945 | Arquitectura Von Neumann | El diseño que define la computadora hasta hoy |
| 1947 | Transistor | El invento que hace posible todo lo demás |
| 1948 | Manchester Baby | Primer programa almacenado ejecutado en hardware |
| 1948 | Teoría de la Información | Nace el "bit" — la unidad mínima de información |
| 1951 | UNIVAC I | La computadora se convierte en producto comercial |

---

→ Siguiente capítulo: [La era del mainframe (1952–1974)](./03_era_mainframe.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

