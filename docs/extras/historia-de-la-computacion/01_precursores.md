# 📜 Capítulo 1 — Antes de las Máquinas: Los Precursores

> **Período:** ~3000 a.C. — 1935  
> **Pregunta central:** ¿Cómo llegó la humanidad a la idea de una máquina que calcula y sigue instrucciones?

---

## El problema que siempre estuvo ahí

Desde que los humanos empezaron a comerciar, construir pirámides, cobrar impuestos y trazar mapas estelares, necesitaron calcular. Y calcular es tedioso, lento y propenso a errores cuando lo hace el cerebro humano durante horas.

La historia de la computación empieza ahí: en la necesidad humana de **delegar el cálculo a una herramienta**.

---

## ~3000 a.C. — El ábaco: la primera herramienta de cálculo

El **ábaco** es el dispositivo de cálculo más antiguo conocido. Apareció en Mesopotamia, fue adoptado por Egipto, Grecia, Roma, China y Japón — cada cultura con su variante.

No es una computadora, pero representa el primer paso conceptual: **externalizar una operación mental en un objeto físico**.

```
Principio del ábaco:
  Cada fila de cuentas representa una posición (unidades, decenas, centenas...)
  Mover cuentas = ejecutar una operación
  El resultado queda "almacenado" en la posición de las cuentas
```

El ábaco chino (suanpan) y japonés (soroban) siguen siendo usados hoy en algunas culturas, y expertos los operan más rápido que una calculadora para operaciones básicas.

---

## 1614 — Las tablas logarítmicas: calcular con papel

John **Napier** (Escocia) inventó los **logaritmos** — una herramienta matemática que convierte multiplicaciones en sumas, reduciendo enormemente el esfuerzo de cálculo.

Sus tablas logarítmicas publicadas en 1614 fueron usadas por científicos, navegantes y astrónomos durante **300 años**. Kepler usó logaritmos de Napier para calcular las órbitas planetarias.

> 💡 La idea clave: si puedes transformar un problema difícil en uno más simple, has avanzado. Los compiladores hacen exactamente esto — transforman código de alto nivel en instrucciones de máquina.

---

## 1642 — La Pascalina: primer calculadora mecánica

**Blaise Pascal** (Francia, 19 años) construyó la **Pascalina** para ayudar a su padre, que trabajaba como recaudador de impuestos y pasaba horas sumando columnas de números.

```
Pascalina:
  ✅ Podía sumar y restar
  ✅ Mecanismo de engranajes — completamente mecánica
  ✅ Acarreo automático (cuando una rueda llega a 9, la siguiente avanza 1)
  ❌ No podía ser "programada" — hacía una sola operación
```

Pascal construyó unas 50 unidades. Era cara y difícil de fabricar, así que no tuvo éxito comercial — pero demostró que **una máquina podía realizar aritmética sin intervención humana directa**.

---

## 1673 — Leibniz y la multiplicación mecánica

**Gottfried Wilhelm Leibniz** (Alemania) mejoró la Pascalina creando la **Rueda de Leibniz**, un mecanismo que permitía multiplicar y dividir — no solo sumar.

Pero Leibniz hizo algo igual de importante en 1679: desarrolló el **sistema numérico binario** — representar cualquier número usando solo `0` y `1`.

> 🔑 El sistema binario de Leibniz es literalmente la base de toda computación digital moderna. Cada bit en un procesador moderno, cada byte en tu RAM, cada archivo en tu disco — todo es binario.

---

## 1801 — El telar de Jacquard: la idea del programa

**Joseph Marie Jacquard** (Francia) inventó un telar automático controlado por **tarjetas perforadas**. Cada tarjeta con agujeros en posiciones específicas indicaba qué hilos levantar — creando patrones de tejido complejos de forma automática y repetible.

```
Telar de Jacquard:
  Tarjeta perforada → instrucción
  Secuencia de tarjetas → programa
  El telar → procesador (ejecuta las instrucciones)
  El tejido resultante → output
```

Este es el primer ejemplo en la historia de **una máquina controlada por instrucciones externas que pueden cambiarse**. El concepto de "programa separado del hardware" nace aquí, en un telar textil francés.

Los obreros tejedores, amenazados por el desempleo, quemaron telares y atacaron a Jacquard en las calles. Es uno de los primeros ejemplos de resistencia tecnológica de la historia.

---

## 1820s–1870s — Charles Babbage: el visionario imposible

**Charles Babbage** (Inglaterra) es considerado el **padre conceptual de la computadora**.

### La Difference Engine (Motor de Diferencias, 1822)

Diseñó una máquina mecánica para calcular tablas matemáticas automáticamente — eliminando los errores humanos de los libros de tablas usados en navegación y astronomía.

El gobierno británico le financió (con el equivalente de millones de dólares actuales) pero la máquina nunca se terminó. Los engranajes de la época no tenían la precisión necesaria.

### La Analytical Engine (Motor Analítico, 1837)

Mientras la Difference Engine no avanzaba, Babbage diseñó algo radicalmente más ambicioso: la **Analytical Engine**.

```
Analytical Engine — diseño (nunca construida):
  ├── Mill (Molino)      → equivalente a la CPU
  ├── Store (Almacén)    → equivalente a la RAM (1.000 números de 50 dígitos)
  ├── Reader             → lector de tarjetas perforadas (entrada)
  ├── Printer            → impresora (salida)
  └── Control de flujo   → condicionales y bucles (¡en 1837!)
```

La Analytical Engine tenía, en papel, **todos los componentes conceptuales de una computadora moderna**: unidad de procesamiento, memoria, entrada, salida y control de flujo. Babbage murió en 1871 sin verla construida.

En 1991, el Museo de Ciencias de Londres construyó la Difference Engine #2 según los planos originales de Babbage. Funciona perfectamente — la tecnología de la época era el único obstáculo.

---

## 1843 — Ada Lovelace: la primera programadora

**Augusta Ada King, Condesa de Lovelace** (hija de Lord Byron, el poeta) conoció a Babbage a los 17 años y quedó fascinada con la Analytical Engine.

En 1843 tradujo del francés un artículo sobre la Analytical Engine escrito por el matemático Luigi Menabrea, y añadió sus propias notas — que terminaron siendo **tres veces más largas que el artículo original**.

### La Nota G — el primer algoritmo

En sus notas, Ada describió con detalle cómo programar la Analytical Engine para calcular los **números de Bernoulli**, una secuencia matemática compleja. Este es considerado el **primer algoritmo de la historia** — instrucciones paso a paso diseñadas para ser ejecutadas por una máquina.

```
Ada Lovelace fue la primera en entender que:
  ✅ La máquina podía manipular cualquier símbolo, no solo números
  ✅ Un programa podía repetir pasos (bucles)
  ✅ La máquina podía tomar decisiones según resultados anteriores (condicionales)
  ✅ El mismo "motor" podía servir para tareas completamente distintas
```

También fue la primera en advertir los límites de la máquina: *"La Analytical Engine no origina nada. Solo puede hacer lo que nosotros ordenemos que haga."* — una reflexión sobre IA que sigue siendo relevante 180 años después.

El lenguaje de programación **Ada** (1980, usado en sistemas militares y aeroespaciales) lleva su nombre.

---

## 1854 — George Boole: la lógica se vuelve matemática

**George Boole** (Inglaterra, autodidacta, sin título universitario) publicó en 1854 *"An Investigation of the Laws of Thought"*, donde presentó el **álgebra booleana**.

La idea central: la lógica del pensamiento puede expresarse matemáticamente usando solo dos valores: **verdadero (1)** y **falso (0)**, combinados con tres operaciones: **AND, OR, NOT**.

```
Álgebra booleana:
  0 AND 0 = 0      0 OR 0 = 0      NOT 0 = 1
  0 AND 1 = 0      0 OR 1 = 1      NOT 1 = 0
  1 AND 1 = 1      1 OR 1 = 1

En Java:
  true && false → false   (AND)
  true || false → true    (OR)
  !true         → false   (NOT)
```

En vida de Boole, esto era filosofía matemática abstracta. Ochenta años después, Claude Shannon demostró que los circuitos eléctricos implementan álgebra booleana de forma natural. Cada compuerta lógica (AND, OR, NOT) en un chip moderno es álgebra de Boole en silicio.

> 🔑 Todo el hardware digital — desde tu procesador hasta una calculadora de bolsillo — funciona gracias al álgebra booleana de un matemático autodidacta del siglo XIX.

---

## 1890 — Herman Hollerith: las tarjetas perforadas escalan

El censo de EE.UU. de 1880 tardó **8 años** en procesarse manualmente. Se calculaba que el de 1890 podría tardar más de 10 años — más tiempo del que había entre censos.

**Herman Hollerith** (EE.UU.) diseñó un sistema electromecánico de tarjetas perforadas para procesar los datos del censo. Cada persona quedaba codificada en una tarjeta con agujeros en posiciones específicas. Las máquinas leían las tarjetas eléctricamente y tabulaban resultados.

```
Resultado: el censo de 1890 (62 millones de personas) se procesó en 6 semanas.
```

Hollerith fundó la **Tabulating Machine Company** en 1896, que se fusionó con otras empresas en 1911 y en 1924 pasó a llamarse **IBM** (International Business Machines).

Las tarjetas perforadas dominaron el almacenamiento de datos por casi 80 años — hasta los años 1970s.

---

## 1904–1930s — La electrónica entra en escena

### 1904 — Tubo de vacío (válvula termoiónica)

**John Ambrose Fleming** inventó el primer tubo de vacío (diodo), y Lee de Forest mejoró el diseño en 1906 con el triodo, que podía **amplificar señales eléctricas y actuar como interruptor**.

El tubo de vacío hizo posible:
- La radio y la televisión
- Los primeros teléfonos de larga distancia
- Y eventualmente... las primeras computadoras electrónicas

```
Tubo de vacío:
  ✅ Velocidad eléctrica (mucho más rápido que los engranajes mecánicos)
  ❌ Grande (tamaño de un puño)
  ❌ Genera mucho calor
  ❌ Se quema frecuentemente
  ❌ Consume mucha energía
```

### 1930s — La convergencia

En los años 30, varias cosas convergieron:
- La matemática tenía las bases (Boole, Turing pronto llegaría)
- La electrónica tenía los tubos de vacío
- Los problemas urgentes (criptografía militar, trayectorias de artillería, tablas de navegación) exigían cálculo masivo

La computadora electrónica estaba a punto de nacer — y la Segunda Guerra Mundial la aceleraría dramáticamente.

---

## Resumen del capítulo

| Año | Persona / Hito | Aporte conceptual |
|-----|----------------|-------------------|
| ~3000 a.C. | Ábaco | Externalizar el cálculo en una herramienta |
| 1614 | Napier / Logaritmos | Transformar un problema difícil en uno simple |
| 1642 | Pascal / Pascalina | Máquina que realiza aritmética automáticamente |
| 1673 | Leibniz / Binario | El lenguaje universal de las máquinas digitales |
| 1801 | Jacquard / Telar | Instrucciones externas controlan la máquina (el programa) |
| 1837 | Babbage / Analytical Engine | CPU + memoria + entrada + salida + control de flujo |
| 1843 | Ada Lovelace | Primer algoritmo — el programa como arte |
| 1854 | Boole / Álgebra booleana | La lógica se vuelve matemática — base del hardware |
| 1890 | Hollerith / IBM | Tarjetas perforadas a escala — nace IBM |
| 1904 | Tubo de vacío | La electrónica hace posible la velocidad |

---

→ Siguiente capítulo: [El nacimiento de la computación (1936–1951)](./02_nacimiento_computacion.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

