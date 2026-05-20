# 🤖 Capítulo 7 — Inteligencia Artificial y el Presente

> **Período:** 1950 — 2026  
> **Pregunta central:** ¿Cómo pasamos de la idea de "máquinas que piensan" a herramientas de IA que millones de personas usan todos los días?

---

## La IA no es nueva — tiene 70 años de historia

Cuando ChatGPT apareció en noviembre de 2022 y el mundo pareció "descubrir" la inteligencia artificial, muchos pensaron que era algo nuevo.

No lo era.

La IA tiene más de 70 años de historia — con picos de entusiasmo, décadas de decepciones ("Inviernos de la IA"), y finalmente el despegue real gracias a la convergencia de tres factores que tardaron décadas en madurar simultáneamente: **datos masivos**, **poder de cómputo** y **mejores algoritmos**.

---

## 1950 — Alan Turing y la pregunta fundamental

En 1950, **Alan Turing** publicó *"Computing Machinery and Intelligence"* con la pregunta que abriría el campo:

> *"¿Pueden las máquinas pensar?"*

Turing propuso el **Test de Turing**: si un humano conversa con una máquina por escrito y no puede distinguirla de otro humano, la máquina puede considerarse "inteligente".

Este test sigue siendo referencia hoy, aunque también es cuestionado — los Large Language Models como GPT-4 pasan el Test de Turing en muchas situaciones, pero ¿eso significa que "piensan"?

---

## 1956 — La Conferencia de Dartmouth: nace la IA como campo

En el verano de 1956, **John McCarthy**, **Marvin Minsky**, **Claude Shannon** y otros se reunieron en el Dartmouth College para una conferencia de investigación de 6 semanas.

McCarthy acuñó el término **"Inteligencia Artificial"** para describir el campo.

La premisa del workshop era optimista:

> *"Procederemos sobre la base de la conjetura de que cada aspecto del aprendizaje o de cualquier otra característica de la inteligencia puede en principio ser descrito con tal precisión que una máquina puede ser construida para simularlo."*

Era 1956. Había computadoras tan potentes como una calculadora de bolsillo. El optimismo era enorme.

---

## 1956–1974 — El primer verano de la IA: el optimismo desmedido

Los primeros años fueron prometedores:

```
1956: Logic Theorist (Newell y Simon) — demostró teoremas matemáticos automáticamente
1958: LISP — el lenguaje de la IA clásica (listas, recursión, símbolos)
1959: Arthur Samuel crea un programa que aprende a jugar damas mejor que él
1964: ELIZA — primer chatbot (Joseph Weizenbaum, MIT)
        Simulaba a un psicoterapeuta Rogeriano
        Muchos usuarios pensaban que era una persona real
1969: SHRDLU — entendía y ejecutaba comandos en lenguaje natural
```

Las predicciones de la época eran extraordinariamente optimistas:

> *"En 10 años, una computadora será campeón mundial de ajedrez."* — Simon y Newell, 1957

Tardó 40 años (Deep Blue venció a Kasparov en 1997).

> *"En 20 años, las máquinas harán cualquier trabajo que pueda hacer un ser humano."* — Simon, 1965

Seguimos esperando.

---

## 1974–1980 — El Primer Invierno de la IA

La promesa no se cumplió. Los proyectos de IA no daban los resultados esperados:

- **El problema de la escala**: los algoritmos que funcionaban en problemas pequeños fallaban completamente en problemas del mundo real.
- **La explosión combinatoria**: el número de posibilidades en un juego de ajedrez o en el lenguaje natural era tan enorme que los computadores de la época no podían manejarlo.
- **Sin datos**: no había suficientes datos para entrenar sistemas complejos.
- **Sin potencia de cómputo**: los algoritmos eran correctos pero las máquinas eran demasiado lentas.

Los gobiernos cortaron el financiamiento. El campo entró en el **Primer Invierno de la IA** (1974–1980).

---

## 1980–1987 — El renacimiento: los Sistemas Expertos

Los **Sistemas Expertos** parecieron ser la solución. En lugar de enseñar a la máquina a aprender, **codificaban el conocimiento de expertos humanos** en reglas:

```
Sistema Experto MYCIN (1976) — diagnóstico de infecciones bacterianas:
  SI el paciente tiene fiebre alta
  Y el recuento de glóbulos blancos es >11.000
  Y hay síntomas de dolor lumbar
  ENTONCES probablemente hay infección de riñón (confianza: 0.85)
  RECOMENDAR antibiótico X con dosis Y

MYCIN era más preciso que médicos junior en diagnósticos de meningitis.
```

Los sistemas expertos tuvieron éxito industrial real:
- **R1/XCON** (DEC, 1978): configuraba pedidos de computadoras, ahorraba $40M/año
- **DENDRAL**: identificaba estructuras moleculares
- **MYCIN**: diagnóstico médico

En los 80s, el mercado de IA llegó a $1 billón de dólares anuales. Empresas como **Symbolics** vendían computadoras especializadas en LISP a $100.000 cada una.

---

## 1987–1993 — El Segundo Invierno de la IA

Los sistemas expertos tenían un problema fundamental: necesitaban que expertos humanos codificaran **cada regla manualmente**. Cuando los problemas se volvían complejos, el número de reglas se volvía inmanejable.

Las **computadoras personales** (IBM PC y compatibles) se volvieron más baratas y poderosas que las costosísimas estaciones LISP. El mercado colapsó. Según invierno.

Pero mientras el Invierno golpeaba a los sistemas expertos, algo nuevo y más profundo se desarrollaba en los laboratorios universitarios.

---

## 1986 — Backpropagation: el algoritmo que lo cambió todo

En 1986, **David Rumelhart**, **Geoffrey Hinton** y **Ronald Williams** popularizaron el algoritmo de **retropropagación del error (backpropagation)** para entrenar redes neuronales multicapa.

```
¿Qué es una red neuronal artificial?

  Inspirada en el cerebro humano — neuronas conectadas:

  Entrada → [Capa oculta 1] → [Capa oculta 2] → Salida
  
  Cada conexión tiene un "peso" (número)
  La red "aprende" ajustando esos pesos para minimizar el error

  Backpropagation:
    1. La red hace una predicción
    2. Se calcula el error (diferencia entre predicción y resultado real)
    3. El error se "propaga hacia atrás" por la red
    4. Cada peso se ajusta un poco en la dirección que reduce el error
    5. Se repite millones de veces con millones de ejemplos
```

En teoría era poderoso. En práctica, con las computadoras de 1986, entrenar redes con más de 2-3 capas ocultas era computacionalmente imposible.

---

## 1997 — Deep Blue vence a Kasparov: la IA demuestra poder

El 11 de mayo de 1997, la supercomputadora **Deep Blue** de IBM venció al campeón mundial de ajedrez **Garry Kasparov** en el juego 6 de una serie de 6, ganando el match 3,5 a 2,5.

```
Deep Blue:
  ├── 480 chips especializados para ajedrez
  ├── Evaluaba 200 millones de posiciones por segundo
  ├── Mirada hacia adelante: 12 movimientos o más en posiciones complejas
  └── No "pensaba" — era búsqueda exhaustiva con evaluación heurística

Kasparov, después de la derrota:
  "Siento una mente nueva, una inteligencia nueva detrás del tablero."
```

Deep Blue no "entendía" el ajedrez — calculaba posibilidades a velocidades imposibles para el cerebro humano. Fue un triunfo de la fuerza bruta, no de la inteligencia real. Pero demostró que las computadoras podían superar a humanos en dominios específicos.

---

## 1990s–2000s — Machine Learning: aprender de los datos

Un cambio de paradigma fundamental ocurrió en los 90s: en lugar de programar reglas explícitas, **se le daba a la máquina datos y ella extraía los patrones**.

```
IA Clásica (sistemas expertos):
  Programador → codifica reglas → máquina aplica reglas

Machine Learning:
  Datos → algoritmo → máquina aprende reglas automáticamente

Ejemplo — detección de spam:

  Sistema experto:
    SI contiene "GRATIS" Y "Haga clic aquí" → es spam

  Machine Learning:
    Analiza 1.000.000 de emails etiquetados como spam/no-spam
    Aprende qué combinaciones de palabras predicen spam
    Se adapta a nuevos patrones automáticamente
```

### Algoritmos de ML que tuvieron éxito real en los 90s-2000s

| Algoritmo | Para qué funcionó |
|-----------|------------------|
| **Support Vector Machines** | Clasificación de texto, reconocimiento de caracteres |
| **Árboles de decisión y Random Forests** | Predicción, análisis de datos tabulares |
| **Naive Bayes** | Filtros de spam — Gmail lo usó extensivamente |
| **K-means clustering** | Segmentación de clientes |
| **Sistemas de recomendación** | Amazon ("otros también compraron"), Netflix |

En 2006, **Netflix** lanzó el **Netflix Prize**: $1 millón de dólares para quien mejorara su algoritmo de recomendación en un 10%. El ganador tardó 3 años — pero el concurso aceleró enormemente la investigación en ML.

---

## 2012 — El big bang del Deep Learning: AlexNet

El 30 de septiembre de 2012 cambió la historia de la IA.

En el **ImageNet Large Scale Visual Recognition Challenge** — la competencia de reconocimiento de imágenes más importante del mundo — un equipo de la Universidad de Toronto liderado por **Geoffrey Hinton** presentó **AlexNet**: una red neuronal profunda (deep learning) con 8 capas.

```
ImageNet Challenge 2012 — resultados:

  Sistemas tradicionales (los mejores del mundo): ~26% de error
  AlexNet (red neuronal profunda):                10,9% de error

  Una mejora del 41% — de un salto.
  El segundo lugar quedó 10 puntos por detrás.
```

### ¿Por qué funcionó en 2012 y no antes?

La combinación correcta finalmente se alineó:

```
1. DATOS: ImageNet — 14 millones de imágenes etiquetadas manualmente
   (Internet hizo posible recopilar este volumen)

2. POTENCIA DE CÓMPUTO: GPUs (Unidades de Procesamiento Gráfico)
   NVIDIA — diseñadas para gráficos pero perfectas para ML
   Una GPU hace miles de operaciones en paralelo
   AlexNet usó dos GPUs NVIDIA GTX 580 para entrenar

3. ALGORITMOS: Redes neuronales profundas + backpropagation + nuevas técnicas
   ReLU activation — entrenamiento más rápido
   Dropout — reduce el overfitting
   Data augmentation — más datos a partir de menos
```

AlexNet fue el momento en que el mundo académico — y pronto la industria — entendió que el Deep Learning era el futuro.

**Hinton**, **LeCun** y **Bengio** ("los padrinos del Deep Learning") ganaron el **Premio Turing de 2018** (el Nobel de la computación).

---

## 2014–2020 — La IA se industrializa

### La carrera de los gigantes

Después de AlexNet, cada gran empresa tecnológica se lanzó al Deep Learning:

| Año | Empresa | Hito |
|-----|---------|------|
| 2014 | Google | Compra DeepMind por $500M |
| 2014 | Facebook | DeepFace — reconocimiento facial al 97,35% |
| 2015 | Google | TensorFlow — framework de DL open source |
| 2016 | Google/DeepMind | **AlphaGo** vence a Lee Sedol en Go (4-1) |
| 2016 | NVIDIA | GPU V100 — acelerador especializado en IA |
| 2018 | Google | BERT — modelo de lenguaje transformador |
| 2018 | OpenAI | GPT-1 — primer modelo de lenguaje generativo grande |

### AlphaGo (2016): el momento que impresionó al mundo

El **Go** es un juego de tablero chino de 2.500 años de antigüedad — más complejo que el ajedrez por varios órdenes de magnitud (más posibles juegos que átomos en el universo observable).

Durante décadas, los expertos dijeron que una máquina nunca vencería a un maestro de Go.

En marzo de 2016, **AlphaGo** de DeepMind venció al campeón mundial **Lee Sedol** (4 juegos a 1). En el juego 2, AlphaGo jugó el **Movimiento 37** — una jugada tan inusual y brillante que los expertos creyeron al principio que era un error. No lo era.

AlphaGo no fue programado para jugar Go. **Aprendió** jugando millones de partidas contra sí mismo.

### Los Transformers (2017): la arquitectura que lo cambió todo

En 2017, investigadores de Google publicaron el paper *"Attention Is All You Need"* — introduciendo la arquitectura **Transformer**.

```
Arquitectura Transformer — por qué fue revolucionaria:

  Antes (RNNs/LSTMs):
    El texto se procesaba secuencialmente — una palabra tras otra
    Para entender "El banco del río era empinado", la red tenía que
    recordar "banco" hasta llegar a "río" — difícil con textos largos

  Con Transformers (Atención):
    El modelo mira TODAS las palabras simultáneamente
    Calcula qué palabras se relacionan con cuáles (atención)
    "banco" presta más atención a "río" que a "dinero" — contexto
    Paralelizable → entrenamiento mucho más rápido en GPUs
```

Los Transformers son la base de GPT, BERT, LLaMA, Gemini, Claude — básicamente toda la IA moderna de lenguaje.

---

## 2020–2022 — GPT y la IA que escribe

**OpenAI** (fundada en 2015 por Elon Musk, Sam Altman y otros, con apoyo de Microsoft) desarrolló la familia de modelos GPT (Generative Pre-trained Transformer):

```
Evolución GPT:

  GPT-1 (2018): 117 millones de parámetros
    → Generaba texto coherente pero limitado

  GPT-2 (2019): 1.500 millones de parámetros
    → OpenAI dijo que era "demasiado peligroso" para publicar completo
    → Lo publicaron en etapas — el texto generado era impresionante

  GPT-3 (2020): 175.000 millones de parámetros
    → Escritura, código, traducciones, respuestas a preguntas
    → Acceso vía API — empresas lo integraron en productos
    → GitHub Copilot (2021) — el programador asistido por IA

  GPT-4 (2023): ~1 billón de parámetros (estimado, no confirmado)
    → Multimodal (texto + imágenes)
    → Aprueba el bar exam en el percentil 90
    → Pasa el Test de Turing en condiciones informales
```

---

## 30 de noviembre de 2022 — ChatGPT: el momento que todo cambió

**OpenAI** lanzó **ChatGPT** — una interfaz de chat construida sobre GPT-3.5. No era la primera IA generativa, pero era la primera **accesible, fácil de usar y asombrosamente capaz**.

```
ChatGPT — el crecimiento más rápido de la historia:

  Usuarios en:
    5 días    → 1 millón
    2 meses   → 100 millones
    12 meses  → 100 millones de usuarios activos diarios

  Para comparar:
    Instagram tardó 2,5 años en llegar a 100 millones
    TikTok tardó 9 meses
    ChatGPT: 2 meses
```

ChatGPT podía:
- Escribir código en cualquier lenguaje
- Explicar conceptos técnicos complejos
- Redactar emails, artículos, guiones
- Resolver problemas matemáticos
- Analizar texto y resumirlo
- Traducir idiomas con fluidez nativa

### La carrera de la IA Generativa (2023–2026)

| Año | Modelo | Empresa | Capacidad |
|-----|--------|---------|-----------|
| 2023 | GPT-4 | OpenAI | Multimodal, razonamiento avanzado |
| 2023 | Gemini | Google DeepMind | Integrado en el ecosistema Google |
| 2023 | LLaMA | Meta | Open source — cualquiera puede ejecutarlo |
| 2023 | Claude | Anthropic | Énfasis en seguridad y largas conversaciones |
| 2024 | Sora | OpenAI | Generación de video a partir de texto |
| 2024 | GPT-4o | OpenAI | Voz, video, texto en tiempo real |
| 2024 | Gemini 2.0 | Google | Agentes de IA — actúa en el mundo |
| 2025 | Modelos de razonamiento | OpenAI, DeepSeek | Piensan paso a paso — matemáticas y código |
| 2026 | Agentes de IA | Múltiples | La IA toma acciones, no solo responde |

---

## El presente: dónde estamos en 2026

```
El panorama tecnológico actual:

  🤖 IA Generativa:
     Los LLMs son asistentes de productividad en programación, escritura y análisis
     GitHub Copilot, Cursor, y otros asistentes de código son mainstream
     El programador que no usa IA es el que tarda el doble

  ☁️  Nube e Infraestructura:
     AWS, Google Cloud y Azure dominan la infraestructura global
     Kubernetes es el estándar de orquestación
     Serverless y edge computing crecen

  📱 Mobile:
     El 60%+ del tráfico web es móvil
     Android e iOS son los únicos sistemas operativos móviles relevantes
     Las apps nativas compiten con las Progressive Web Apps (PWA)

  🔗 Open Source:
     Linux mueve casi todo el internet
     Java, Python, JavaScript, Go, Rust — todos open source o con raíces en él
     El modelo open source de IA (LLaMA, Mistral) compite con el cerrado

  ⚛️  Computación Cuántica (emergente):
     IBM, Google, IonQ construyen computadoras cuánticas
     IBM supera los 1.000 qubits
     Para problemas prácticos generales: aún faltan años
     Para criptografía y simulaciones químicas: promesa real
```

---

## La conexión con tu carrera como programador

```
Cada herramienta que usas hoy tiene su historia:

  Java (1995)       → Lleva 30 años evolucionando
  Spring Boot       → Sobre hombros de Spring (2003), Java EE, servlets (1997)
  HTTP/REST         → Berners-Lee (1991) + Roy Fielding (2000)
  Git               → Linus Torvalds (2005) — sí, el mismo del kernel
  MySQL             → 1995 — casi 30 años en producción
  JSON              → Douglas Crockford (2001)
  GitHub            → 2008 — construido sobre Git
  IntelliJ IDEA     → 2001 — JetBrains, Praga, República Checa
  Maven             → 2004
  Docker            → 2013
  GitHub Copilot    → 2021 — IA que completa tu código

Y todo eso se apoya en:
  El transistor (1947)
  El circuito integrado (1958)
  Unix (1969)
  C (1972)
  TCP/IP (1974)
  La arquitectura de Von Neumann (1945)
  El álgebra booleana de Boole (1854)
  Y los algoritmos de Ada Lovelace (1843)
```

---

## Resumen del capítulo

| Período | Hito | Estado |
|---------|------|--------|
| 1950 | Test de Turing | Define qué significa que una máquina "piense" |
| 1956 | Conferencia de Dartmouth | Nace el campo de la IA |
| 1956–1974 | Primer verano de IA | Optimismo exagerado |
| 1974–1980 | Primer Invierno | La realidad frena el hype |
| 1980–1987 | Sistemas Expertos | IA con éxito industrial real |
| 1987–1993 | Segundo Invierno | Los sistemas expertos no escalan |
| 1986 | Backpropagation | El algoritmo que hace posible el Deep Learning |
| 1997 | Deep Blue vence a Kasparov | La IA supera al humano en ajedrez |
| 2000s | Machine Learning | Aprender de datos — bases del ML moderno |
| 2012 | AlexNet — Deep Learning | El punto de inflexión de la IA moderna |
| 2016 | AlphaGo | La IA supera al humano en Go |
| 2017 | Transformers | La arquitectura de toda la IA de lenguaje moderna |
| 2022 | ChatGPT | La IA generativa llega al gran público |
| 2024–2026 | Agentes de IA | La IA pasa de responder a actuar |

---

→ Siguiente capítulo: [Historia de los lenguajes de programación](./08_lenguajes_de_programacion.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

