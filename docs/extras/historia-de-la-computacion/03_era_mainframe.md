# 🏢 Capítulo 3 — La Era del Mainframe

> **Período:** 1952 — 1974  
> **Pregunta central:** ¿Cómo pasó la computadora de ser un experimento científico a ser el motor de la industria, los gobiernos y la ciencia?

---

## El mainframe: cuando una computadora llenaba una sala

Durante más de dos décadas, la computadora fue sinónimo de **mainframe**: una máquina enorme, carísima, que vivía en una sala climatizada, operada por técnicos especializados con batas blancas, accesible solo para gobiernos, grandes corporaciones y universidades.

El usuario promedio no tocaba una computadora. Entregaba tarjetas perforadas a un técnico que las ingresaba por lotes (*batch processing*), y horas después recibía los resultados impresos. Interactividad: ninguna.

Esta era duró desde los 50s hasta mediados de los 70s, cuando el microprocesador lo cambiaría todo.

---

## 1952–1955 — IBM domina el mercado

**IBM** (International Business Machines) no inventó la computadora, pero fue quien la convirtió en industria.

### IBM 701 (1952) — "La calculadora de defensa"

La primera computadora científica de IBM, diseñada para cálculos militares durante la Guerra de Corea. Rentada (no vendida) a 19 clientes, principalmente del gobierno y laboratorios de investigación.

### IBM 650 (1954) — La más vendida de su época

```
IBM 650:
  ├── Precio: ~500.000 USD de 1954 (~5 millones USD actuales)
  ├── Memoria: tambor magnético de 2.000 palabras de 10 dígitos
  ├── Programación: lenguaje máquina o SOAP (ensamblador)
  ├── Unidades vendidas: ~1.800 (enorme para la época)
  └── Usada en universidades, bancos, aerolíneas
```

IBM también introdujo el modelo de **arrendamiento** (alquiler mensual) en lugar de venta directa — lo que garantizó ingresos recurrentes y creó el concepto de "servicio al cliente" en tecnología.

---

## 1953 — La memoria de núcleo magnético

**Jay Forrester** del MIT patentó la **memoria de núcleo de ferrita** — pequeños anillos de material magnético que podían almacenar un bit cada uno. Era el método estándar de memoria RAM hasta los años 70s.

```
Características:
  ✅ No volátil (mantenía datos sin electricidad)
  ✅ Más rápida que los tambores magnéticos anteriores
  ✅ Confiable y duradera
  ❌ Cara y difícil de fabricar (se ensamblaba a mano con hilo de cobre)
```

De aquí viene la expresión *"core memory"* y el término *"core dump"* (volcado de memoria) que todavía se usa en programación cuando un programa falla y vuelca su estado de memoria.

---

## 1957 — FORTRAN: el programador deja de hablar en binario

Antes de 1957, programar significaba escribir instrucciones en **lenguaje de máquina** (código binario) o en **ensamblador** (mnemónicos como `MOV AX, 1` que se traducen directamente a binario). Era tedioso, propenso a errores y completamente diferente en cada modelo de computadora.

**John Backus** y su equipo en IBM crearon **FORTRAN** (FORmula TRANslation) — el **primer lenguaje de programación de alto nivel** ampliamente adoptado.

```fortran
C Programa FORTRAN para calcular el área de un triángulo
      PROGRAM AREA
      REAL BASE, ALTURA, AREA
      READ(*,*) BASE, ALTURA
      AREA = 0.5 * BASE * ALTURA
      WRITE(*,*) 'El área es:', AREA
      STOP
      END
```

El equipo de IBM tardó dos años en convencer a sus propios colegas de que una máquina podía generar código eficiente automáticamente — muchos ingenieros insistían en que ningún compilador podría igualar el código ensamblador escrito a mano.

Se equivocaron. FORTRAN generaba código eficiente y permitía a los científicos concentrarse en los problemas, no en la máquina.

> 💡 FORTRAN sigue siendo usado hoy en 2026 — en meteorología, simulaciones de física nuclear y computación de alto rendimiento. Es el lenguaje de programación más longevo en uso activo.

---

## 1958–1959 — El circuito integrado: miles de transistores en un chip

El transistor (1947) había reemplazado los tubos de vacío. Pero conectar miles de transistores discretos con cables y soldaduras seguía siendo costoso, lento y poco confiable.

En 1958, **Jack Kilby** (Texas Instruments) fabricó el primer **circuito integrado** funcional — varios transistores, resistencias y condensadores grabados sobre una misma pieza de semiconductor (germanio).

Independientemente y casi al mismo tiempo, **Robert Noyce** (Fairchild Semiconductor) creó una versión mejorada usando silicio y conexiones metálicas, más práctica para la producción en masa.

```
Circuito Integrado (IC) — por qué cambió todo:

  Antes (transistores discretos):
    1.000 transistores = 1.000 piezas soldadas = frágil, grande, caro

  Con IC:
    1.000 transistores = 1 chip del tamaño de una uña = sólido, pequeño, barato
```

Kilby ganó el **Premio Nobel de Física de 2000** por la invención del circuito integrado. Noyce había muerto en 1990 (los Nobel no se otorgan póstumamente).

Noyce cofundó **Fairchild Semiconductor** (1957) y luego **Intel Corporation** (1968).

---

## 1959 — COBOL: la computadora entra en los negocios

Mientras FORTRAN servía a científicos e ingenieros, los negocios necesitaban un lenguaje diferente: que manejara grandes volúmenes de datos de clientes, facturas, nóminas y inventarios.

**Grace Hopper** (Almirante de la Marina de EE.UU.) lideró el diseño de **COBOL** (COmmon Business-Oriented Language).

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. SALUDO.
PROCEDURE DIVISION.
    DISPLAY "Hola desde COBOL"
    STOP RUN.
```

COBOL fue diseñado para ser legible en inglés — Hopper creía que los ejecutivos de negocios deberían poder leer (aunque no escribir) programas.

> 🔢 Dato impactante: en 2026, los sistemas COBOL procesan estimados de **$3 billones** (trillones) de transacciones diarias — más del 95% del volumen de las tarjetas de crédito del mundo pasa por código COBOL. El 80% de las transacciones en persona en bancos tocan código COBOL. Es el lenguaje más importante que nadie menciona.

---

## 1960s — La Ley de Moore y la miniaturización exponencial

En 1965, **Gordon Moore** (cofundador de Intel) publicó un artículo observando que el número de transistores en un circuito integrado se **duplicaba aproximadamente cada dos años** — con costos que caían exponencialmente.

```
Ley de Moore (observación, 1965):

  1961: 4 transistores por chip
  1965: 64 transistores
  1971: 2.300 transistores (Intel 4004)
  1982: 134.000 transistores (Intel 286)
  2000: 42.000.000 transistores (Pentium 4)
  2024: ~80.000.000.000 transistores (Apple M3)

  Duplicación cada ~2 años durante 60 años seguidos.
```

La Ley de Moore no es una ley física — es una observación que se convirtió en objetivo para la industria. Ha guiado la estrategia de Intel, AMD, Samsung y TSMC durante décadas.

Hoy, los transistores se miden en **nanómetros** (1 nm = 0,000001 mm). Los procesadores de 2024 usan transistores de 3 nm — 20.000 veces más pequeños que el grosor de un cabello humano.

---

## 1964 — IBM System/360: nace la industria del software

El **IBM System/360** fue el lanzamiento de producto más ambicioso e influyente de la historia de la informática.

Antes del System/360, cada modelo de computadora tenía su propia arquitectura — software escrito para una no funcionaba en otra. IBM cambió eso con una **familia de computadoras compatibles entre sí**, desde los modelos más pequeños hasta los más potentes.

```
IBM System/360 — innovaciones:
  ✅ Compatibilidad de software en toda la familia (del más pequeño al mayor)
  ✅ Mismo conjunto de instrucciones (ISA) en todos los modelos
  ✅ Sistema operativo separado del hardware (OS/360)
  ✅ Arquitectura de 8 bits para un "byte" — IBM estandarizó el byte de 8 bits
  ✅ Discos duros intercambiables
  ✅ Primera vez que IBM vendió software por separado del hardware
```

El System/360 costó a IBM más de $5.000 millones de dólares de la época para desarrollar — más que el Proyecto Manhattan de la bomba atómica. La apuesta casi destruyó a IBM financieramente. Pero cuando llegó al mercado, arrasó.

> 🔑 El System/360 creó la **industria del software**: al separar software de hardware, generó un mercado donde terceros podían vender programas. Sin él, la idea de "comprar software" como producto independiente quizás habría tardado décadas más en nacer.

El proyecto fue documentado por **Fred Brooks** en *"The Mythical Man-Month"* (1975) — el libro más importante sobre gestión de proyectos de software, aún vigente hoy.

---

## 1964 — BASIC: programar para todos

**John Kemeny** y **Thomas Kurtz** del Dartmouth College crearon **BASIC** (Beginner's All-purpose Symbolic Instruction Code) con un objetivo claro: que estudiantes de humanidades, ciencias sociales y artes pudieran programar sin ser matemáticos.

```basic
10 PRINT "¿Cuál es tu nombre?"
20 INPUT NOMBRE$
30 PRINT "Hola, " + NOMBRE$ + "!"
40 END
```

BASIC fue el primer lenguaje verdaderamente diseñado para la educación. En 1975, **Bill Gates** y **Paul Allen** adaptaron BASIC para el Altair 8800 — ese producto se convirtió en la base de Microsoft.

---

## 1969 — Unix: el sistema operativo que lo cambió todo

En los **Laboratorios Bell** de AT&T, **Ken Thompson** y **Dennis Ritchie** crearon **Unix** — inicialmente como proyecto personal en una computadora PDP-7 abandonada.

```
Filosofía Unix (que pervive en Linux, macOS, Android):
  "Haz una sola cosa y hazla bien"
  "Todo es un archivo"
  "Conecta programas pequeños para hacer cosas grandes"
  "Escribe código para humanos, no para máquinas"
```

Unix introdujo conceptos que definieron el software moderno:
- **Shell**: interfaz de línea de comandos programable
- **Pipes** (`|`): conectar la salida de un programa con la entrada de otro
- **Sistema de archivos jerárquico**: directorios dentro de directorios
- **Multiusuario y multitarea**: varios usuarios y procesos simultáneos
- **Portabilidad**: diseñado para funcionar en distintos hardware

En 1973, Ritchie reescribió Unix en **C** — haciendo que un sistema operativo fuera portable entre diferentes arquitecturas de hardware por primera vez. Antes, cada sistema operativo estaba escrito en ensamblador específico para un chip.

Unix fue licenciado a universidades a precio simbólico. Las generaciones de programadores de los 70s y 80s aprendieron Unix en la universidad — y llevaron su filosofía al mundo laboral. Todo servidor Linux actual, macOS, Android, iOS, y los servidores que corren Java Spring Boot son descendientes directos de Unix.

---

## 1969 — ARPANET: la semilla de Internet

El mismo año que Unix, el Departamento de Defensa de EE.UU. activó **ARPANET** — la primera red de computadoras de área amplia que implementó el concepto de **conmutación de paquetes**.

La idea: en lugar de una línea dedicada entre dos puntos (como el teléfono), la información se divide en paquetes que viajan de forma independiente por distintas rutas y se reensamblan en el destino.

```
29 de octubre de 1969 — el primer mensaje de ARPANET:

  Origen: UCLA (Los Ángeles)
  Destino: Stanford Research Institute (Menlo Park)
  Mensaje intentado: "LOGIN"
  Mensaje recibido: "LO"
  (el sistema colapsó en la "G")

  El primer mensaje de la historia de Internet fue un crash.
```

ARPANET conectaba 4 universidades en 1969. Se convertiría en Internet treinta años después.

---

## 1971 — El microprocesador: una CPU en un chip

El **Intel 4004** (1971), diseñado por **Federico Faggin**, **Ted Hoff** y **Stanley Mazor**, fue el primer **microprocesador** comercial — una CPU completa en un solo chip de silicio.

```
Intel 4004 — especificaciones:
  ├── 2.300 transistores
  ├── Proceso: 10 micrómetros (10.000 nm)
  ├── Velocidad: 740 kHz (0,00074 GHz)
  ├── Ancho de datos: 4 bits
  ├── Precio original: ~300 USD
  └── Uso original: calculadora Busicom (no una computadora)
```

El 4004 era 20 veces más potente que el ENIAC — la computadora de 30 toneladas de 1945 — en un chip más pequeño que una uña.

En 1972, Intel lanzó el **8008** (8 bits), y en 1974 el **8080** — este último sería el procesador sobre el que Bill Gates y Paul Allen escribirían el primer BASIC para la PC.

---

## 1972 — El lenguaje C: el padre de todos

**Dennis Ritchie** creó el **lenguaje C** en los Laboratorios Bell, principalmente para reescribir Unix.

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

C fue diseñado para ser:
- **Portátil**: el mismo código funciona en distintos procesadores
- **Eficiente**: acceso directo a memoria y hardware
- **Expresivo**: más legible que ensamblador, más potente que lenguajes anteriores

La influencia de C es incalculable:
- **Unix** fue reescrito en C (1973)
- **C++** es C con objetos (1983)
- **Java** tomó la sintaxis de C
- **Python**, **PHP**, **JavaScript**, **Go**, **Rust** — todos tienen sintaxis derivada de C
- Los sistemas operativos Windows, macOS, Linux y el kernel de Android están escritos en C y C++

> 💬 *"C es el lenguaje de programación más cercano al lenguaje de los dioses que los mortales pueden escribir."* — Brian Kernighan

---

## Resumen del capítulo

| Año | Hito | Legado |
|-----|------|--------|
| 1952 | IBM 701 | IBM domina la era del mainframe |
| 1957 | FORTRAN | El programador habla con la máquina en alto nivel |
| 1958 | Circuito integrado | Miniaturización exponencial — empieza la era del chip |
| 1959 | COBOL | Los negocios se informatizan — sigue procesando billones hoy |
| 1964 | IBM System/360 | Compatibilidad de software — nace la industria del software |
| 1964 | Ley de Moore | La predicción que guió 60 años de la industria |
| 1964 | BASIC | Programar para todos — educación + Microsoft |
| 1969 | Unix | La filosofía de software que domina los servidores hoy |
| 1969 | ARPANET | La semilla de Internet |
| 1971 | Intel 4004 | CPU en un chip — el microprocesador lo cambia todo |
| 1972 | Lenguaje C | El padre de casi todos los lenguajes modernos |

---

→ Siguiente capítulo: [La revolución personal — La PC llega al hogar (1975–1994)](./04_revolucion_personal.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

