# 🔤 Capítulo 8 — Historia de los Lenguajes de Programación

> **Período:** 1843 — 2026  
> **Pregunta central:** ¿Cómo evolucionó la forma en que los humanos le dicen a las máquinas qué hacer?

---

## El arco completo: de los switches a la IA que escribe código

La historia de los lenguajes de programación es la historia de **hacer más expresivo y poderoso el diálogo entre humano y máquina** — a la vez que se reducen los errores y se aumenta la productividad.

```
1843 → Algoritmo de Ada Lovelace (en papel)
1940s → Código máquina (binario, directo al hardware)
1950s → Ensamblador (mnemónicos — MOV, ADD, JMP)
1957 → FORTRAN (primer lenguaje de alto nivel)
1958 → LISP (primer lenguaje funcional)
1959 → COBOL (el lenguaje del negocio)
1964 → BASIC (el lenguaje de la educación)
1970s → C (portable, eficiente, universal)
1970s → SQL (el lenguaje de los datos)
1980s → C++, Objective-C (orientación a objetos)
1987 → Perl (texto y scripts)
1990s → Python, Java, JavaScript, Ruby, PHP (la Web moderna)
2000s → C#, Scala, Go (ecosistemas industriales)
2010s → Kotlin, Swift, Rust, TypeScript (modernización)
2020s → La IA escribe código — GitHub Copilot, ChatGPT
```

---

## Los paradigmas: distintas formas de pensar el código

Antes de ver la historia cronológica, entendamos los **paradigmas de programación** — las filosofías fundamentales sobre cómo organizar el código.

```
Paradigma Imperativo:
  Describes CÓMO hacer algo — paso a paso
  "Ve a la heladera, abre la puerta, saca la leche, cierra la puerta"
  Ejemplos: C, ensamblador, FORTRAN, BASIC

  Subparadigma — Orientado a Objetos (OOP):
    Organizas el código en "objetos" con estado y comportamiento
    "La Heladera tiene el método abrirPuerta() y el estado leche:2"
    Ejemplos: Java, C++, Python, C#, Ruby

Paradigma Funcional:
  Describes QUÉ calcular — funciones matemáticas puras sin estado
  "leche = contenidoHeladera(ingrediente: LECHE)"
  Ejemplos: LISP, Haskell, Erlang, Clojure, F#
  (Python, Java, JavaScript tienen elementos funcionales)

Paradigma Declarativo:
  Describes QUÉ quieres, no cómo obtenerlo
  "Quiero la leche de la heladera" — sin especificar cómo
  Ejemplos: SQL, HTML, CSS, Prolog

Paradigma Reactivo:
  El código reacciona a eventos y flujos de datos
  Ejemplos: RxJava, Reactor (usado en Spring WebFlux)
```

---

## 1843 — Ada Lovelace: el primer algoritmo (antes del hardware)

Ada Lovelace escribió en 1843 un algoritmo para calcular los números de Bernoulli en la Analytical Engine de Babbage — una máquina que nunca se construyó.

El algoritmo incluía conceptos que siguen siendo fundamentales:
- Variables (`n` que va cambiando)
- Bucles (la secuencia de instrucciones que se repite)
- Condicionales implícitos

---

## 1940s — Código máquina y ensamblador

Las primeras computadoras se programaban en **código máquina**: instrucciones binarias directas al procesador.

```
Código máquina (ejemplo para x86):
  10110000 01100001   → Mover el valor 97 al registro AL

Ensamblador (el mismo código, legible):
  MOV AL, 61h   → Mover el valor hexadecimal 61 (=97 decimal) al registro AL

Cada instrucción de ensamblador corresponde exactamente a una instrucción del procesador.
El ensamblador traduce los mnemónicos a binario — este traductor se llama "assembler".
```

Programar en ensamblador era tedioso, propenso a errores y completamente específico para cada tipo de procesador. Un programa para IBM 701 no funcionaba en UNIVAC.

---

## 1957 — FORTRAN: el salto a alto nivel

**John Backus** (IBM) y su equipo de 13 ingenieros crearon FORTRAN en 1957.

```fortran
! FORTRAN moderno — suma de números del 1 al 100
PROGRAM SUMA
  INTEGER :: i, suma
  suma = 0
  DO i = 1, 100
    suma = suma + i
  END DO
  PRINT *, "Suma =", suma
END PROGRAM SUMA
```

**Contribuciones de FORTRAN:**
- Primer compilador de alto nivel ampliamente adoptado
- Demostró que el compilador podía generar código eficiente
- Matrices y aritmética de punto flotante de forma natural
- Define la base de la sintaxis imperativa que persiste hasta hoy

FORTRAN sigue siendo usado en 2026 en física computacional, meteorología y aeronáutica.

---

## 1958 — LISP: la otra rama del árbol

**John McCarthy** (MIT) creó LISP (LISt Processing) en 1958 — el segundo lenguaje de alto nivel, y el primero en ser radicalmente diferente.

```lisp
;; LISP — suma recursiva del 1 al n
(defun suma (n)
  (if (= n 0)
      0
      (+ n (suma (- n 1)))))

(suma 100) ; → 5050
```

LISP introdujo conceptos revolucionarios:
- **Funciones de primera clase**: las funciones son datos — puedes pasarlas como parámetros
- **Recursión** como alternativa principal a los bucles
- **Garbage collection**: la memoria se gestiona automáticamente (antes era manual)
- **Código como datos**: un programa LISP puede manipular otros programas LISP
- **Read-Eval-Print Loop (REPL)**: ejecutar código interactivamente

Muchos conceptos de LISP tardaron décadas en llegar a los lenguajes mainstream:
- Garbage collection → Java (1995)
- Funciones de primera clase → JavaScript (1995), luego lambdas en Java (2014)
- REPL → Python, Node.js, Jupyter Notebooks

---

## 1959 — COBOL: la computadora en el banco

**Grace Hopper** y el comité CODASYL crearon COBOL (1959) para los negocios.

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULAR-SALARIO.

DATA DIVISION.
WORKING-STORAGE SECTION.
  01 SALARIO-BASE    PIC 9(7)V99.
  01 HORAS-EXTRA     PIC 9(3).
  01 TOTAL-SALARIO   PIC 9(7)V99.

PROCEDURE DIVISION.
  MULTIPLY 1.5 BY HORAS-EXTRA GIVING PAGO-EXTRA
  ADD SALARIO-BASE PAGO-EXTRA GIVING TOTAL-SALARIO
  DISPLAY "Salario total: " TOTAL-SALARIO
  STOP RUN.
```

COBOL está diseñado para ser legible — casi como inglés. Y sigue estando vivo: procesa el 95% de las transacciones de tarjeta de crédito del mundo.

---

## 1964 — BASIC: aprender a programar

**John Kemeny** y **Thomas Kurtz** crearon BASIC en 1964 para que estudiantes sin formación técnica pudieran programar en el mainframe de Dartmouth.

```basic
10 REM Programa que saluda al usuario
20 PRINT "¿Cuál es tu nombre?"
30 INPUT NOMBRE$
40 PRINT "Hola, " + NOMBRE$ + "! Bienvenido a la programación."
50 END
```

BASIC fue el lenguaje con el que millones de jóvenes de los 80s dieron sus primeros pasos — en el Apple II, el Commodore 64, el ZX Spectrum, el MSX. Bill Gates lo usó para crear el primer producto de Microsoft.

---

## 1972 — C: el lenguaje que movió el mundo

**Dennis Ritchie** (Bell Labs) creó C entre 1969 y 1973, principalmente para reescribir Unix.

```c
#include <stdio.h>

// C — programa que calcula factorial recursivamente
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("10! = %d\n", factorial(10));
    return 0;
}
```

**C introdujo o popularizó:**
- Tipos de datos (int, char, float, double, void)
- Punteros — acceso directo a la memoria
- Estructuras (struct) — precursoras de las clases
- Funciones con parámetros y retorno
- Compilación a código nativo eficiente
- Portabilidad — el mismo código en distintos procesadores

**El árbol de descendientes de C:**

```
C (1972)
├── C++ (1983) — C con objetos
│   ├── Java (1995) — C++ sin punteros, con GC
│   │   └── Kotlin (2011) — Java moderno para Android
│   ├── C# (2000) — Java de Microsoft
│   └── Objective-C (1984) → Swift (2014) — iOS
├── Perl (1987) — texto y scripts
├── Python (1991) — legibilidad y productividad
├── PHP (1994) — web server-side
├── JavaScript (1995) — web client-side
├── Go (2009) — concurrencia moderna
└── Rust (2015) — seguridad de memoria sin GC
```

---

## 1974 — SQL: el lenguaje de los datos

**Edgar F. Codd** (IBM) publicó en 1970 el paper que fundamentó las bases de datos relacionales. **Donald Chamberlin** y **Raymond Boyce** (IBM) desarrollaron **SQL** (Structured Query Language) en 1974.

```sql
-- SQL — el mismo desde 1974
SELECT nombre, salario
FROM empleados
WHERE departamento = 'Ingeniería'
  AND salario > 50000
ORDER BY salario DESC;
```

SQL es el lenguaje declarativo por excelencia: describes **qué datos quieres**, no **cómo obtenerlos**. El motor de base de datos decide el plan de ejecución más eficiente.

SQL, con variaciones menores, funciona en MySQL, PostgreSQL, Oracle, SQL Server, SQLite — todos los sistemas de bases de datos relacionales hablan SQL. Lleva 50 años siendo indispensable.

---

## 1983 — C++: objetos al poder

**Bjarne Stroustrup** (Bell Labs) creó C++ como "C con clases" — añadiendo programación orientada a objetos a la eficiencia de C.

```cpp
// C++ — clase con encapsulación
class CuentaBancaria {
private:
    double saldo;
public:
    CuentaBancaria(double saldoInicial) : saldo(saldoInicial) {}

    void depositar(double monto) {
        if (monto > 0) saldo += monto;
    }

    double getSaldo() const { return saldo; }
};
```

C++ fue el lenguaje dominante en software de sistemas, juegos y aplicaciones de alto rendimiento durante los 80s y 90s. Es la base de:
- El motor de los navegadores web (Chrome V8, Firefox SpiderMonkey)
- El motor de Unreal Engine (videojuegos)
- Adobe Photoshop
- Microsoft Office
- Muchos sistemas embebidos

---

## 1987 — Perl: el procesamiento de texto

**Larry Wall** creó **Perl** para procesar texto de forma eficiente — manipular archivos de log, extraer datos, automatizar tareas de sistema.

Perl fue el lenguaje dominante en CGI (scripts del lado del servidor) en los primeros años de la Web.

```perl
# Perl — contar líneas que contienen "ERROR" en un log
open(my $fh, '<', 'app.log') or die "No puedo abrir: $!";
my $count = grep { /ERROR/ } <$fh>;
print "Encontré $count líneas con errores\n";
```

Perl introdujo el concepto de **"hay más de una forma de hacerlo"** (TMTOWTDI) — libertad total para el programador. Python tomaría la filosofía opuesta: **"debería haber una única forma obvia de hacerlo"**.

---

## 1991 — Python: la legibilidad como valor

**Guido van Rossum** (Países Bajos) creó Python durante las navidades de 1989 y lo publicó en 1991. El nombre viene de **Monty Python**, no de la serpiente.

```python
# Python — legible como pseudocódigo
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

numeros = [fibonacci(i) for i in range(10)]
print(numeros)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

**Filosofía de Python (El Zen de Python):**
- *"La legibilidad cuenta"*
- *"Simple es mejor que complejo"*
- *"Debería haber una — y preferiblemente solo una — forma obvia de hacerlo"*

Python tardó en popularizarse. En los 90s era un lenguaje de scripting de nicho. En los 2000s ganó popularidad en administración de sistemas y web (Django, Flask). En los 2010s se convirtió en el **lenguaje dominante de la IA y el Machine Learning** (NumPy, Pandas, TensorFlow, PyTorch).

En 2026, Python es el lenguaje más usado del mundo según la mayoría de los índices.

---

## 1995 — Java: "Write Once, Run Anywhere"

**James Gosling** y su equipo en **Sun Microsystems** crearon Java en 1995 con un objetivo específico: escribir software para dispositivos electrónicos que tenían distintos procesadores.

```java
// Java — el mismo código funciona en Windows, Mac y Linux
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola, Mundo!");
        // Este .class corre en la JVM — cualquier plataforma
    }
}
```

**La solución de Java: la JVM**

```
Código Java (.java)
     ↓ Compilador Java (javac)
Bytecode Java (.class)
     ↓ Java Virtual Machine (JVM)
Código máquina específico del procesador
```

El bytecode es el mismo en todas las plataformas. La JVM lo traduce al código nativo de cada procesador. Una vez compilado, el programa corre en Windows, Linux, macOS, Solaris... sin recompilar.

**Java en la historia:**
- 1995: Java 1.0 — "Write once, run anywhere"
- 2004: Java 5 — generics, autoboxing, enumeraciones
- 2009: Oracle compra Sun Microsystems por $7,4 billones
- 2014: Java 8 — lambdas y Streams — el Java moderno empieza aquí
- 2017: Java 9 — módulos
- 2018: Ciclo de releases cada 6 meses (Java 11, 17, 21 son LTS)
- 2024: Java 21 LTS — records, sealed classes, virtual threads, pattern matching

**Ecosistema Java en 2026:**
- **Spring Boot** — el framework backend más usado en Java empresarial
- **Kotlin** — el sucesor de Java en Android y creciendo en backend
- **Quarkus, Micronaut** — alternativas cloud-native a Spring Boot
- La JVM sigue siendo la plataforma de ejecución de Kotlin, Scala, Clojure, Groovy

---

## 1995 — JavaScript: el lenguaje del navegador

**Brendan Eich** (Netscape) creó JavaScript en **10 días** en mayo de 1995. Las prisas se notan — JavaScript tiene muchas inconsistencias que siguen causando confusión hoy.

```javascript
// JavaScript — el lenguaje que corre en el navegador
const saludar = (nombre) => `Hola, ${nombre}!`;
console.log(saludar("Mundo"));

// Las "rarezas" de JavaScript:
typeof null       // "object" — bug de 1995 que no puede corregirse
0.1 + 0.2         // 0.30000000000000004 — problema de punto flotante
[] + []           // "" — concatenación de arrays vacíos
[] + {}           // "[object Object]"
```

A pesar de sus imperfecciones, JavaScript es el único lenguaje que corre nativamente en los navegadores — lo que lo convierte en el lenguaje más ejecutado del mundo. Node.js (2009) llevó JavaScript al servidor.

**TypeScript (2012)** — Microsoft añadió tipado estático a JavaScript, resolviendo muchos de sus problemas para proyectos grandes. Hoy es el estándar en proyectos JavaScript serios.

---

## 2000s — Los lenguajes de la industrialización

| Año | Lenguaje | Creador | Por qué |
|-----|---------|---------|--------|
| 2000 | **C#** | Microsoft / Anders Hejlsberg | Java de Microsoft para .NET — evolucionó muy rápido |
| 2003 | **Scala** | Martin Odersky | OOP + Funcional sobre la JVM |
| 2004 | **Ruby on Rails** | DHH (sobre Ruby de 1995) | "Convention over configuration" — 10× más rápido en web |
| 2006 | **Groovy** | James Strachan | Scripting dinámico para la JVM |

---

## 2009 — Go: concurrencia para el mundo moderno

**Robert Griesemer**, **Rob Pike** y **Ken Thompson** (sí, el mismo de Unix y C) crearon **Go** (Golang) en Google en 2009.

```go
// Go — servidor HTTP en pocas líneas
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hola desde Go!")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

Go fue diseñado para resolver los problemas de escala de Google: código que compila rápido, se ejecuta eficientemente, tiene concurrencia incorporada y es fácil de leer por equipos grandes.

Goroutines — el modelo de concurrencia de Go — permiten manejar miles de conexiones simultáneas con poco código y poca memoria. Herramientas como Docker y Kubernetes están escritas en Go.

---

## 2011 — Kotlin: Java sin el dolor

**JetBrains** (los creadores de IntelliJ IDEA) crearon **Kotlin** para reemplazar Java en su propia base de código — era demasiado verboso y propenso a errores.

```kotlin
// Kotlin — la misma lógica, mucho menos código que Java
data class Ticket(val id: Int, val titulo: String, val prioridad: String)

fun main() {
    val tickets = listOf(
        Ticket(1, "Error en login", "HIGH"),
        Ticket(2, "Botón roto", "LOW")
    )
    tickets
        .filter { it.prioridad == "HIGH" }
        .forEach { println(it.titulo) }
}
```

En 2017, Google anunció Kotlin como **lenguaje oficial de Android** — junto a Java. Hoy la mayoría del código nuevo de Android se escribe en Kotlin.

---

## 2014 — Swift: el lenguaje de Apple

**Chris Lattner** (Apple) creó Swift en secreto durante 4 años. Se anunció en WWDC 2014 como reemplazo de Objective-C para el desarrollo de apps iOS y macOS.

```swift
// Swift — sintaxis moderna y segura
struct Ticket {
    let id: Int
    var titulo: String
    let prioridad: String
}

let ticket = Ticket(id: 1, titulo: "Error en login", prioridad: "HIGH")
print("Ticket: \(ticket.titulo)")
```

Swift introdujo características de seguridad de tipos muy fuertes — especialmente con `Optional` para evitar null pointer exceptions, el error más común en Objective-C y Java.

---

## 2015 — Rust: seguridad de memoria sin recolector de basura

**Graydon Hoare** (Mozilla) creó Rust — un lenguaje de sistemas que garantiza seguridad de memoria **sin** necesitar un recolector de basura (garbage collector).

```rust
// Rust — el compilador previene errores de memoria en tiempo de compilación
fn main() {
    let s1 = String::from("hola");
    let s2 = s1;      // s1 se "mueve" a s2 — s1 ya no es válido
    // println!("{}", s1); // Error de compilación — el compilador lo previene
    println!("{}", s2);   // Correcto
}
```

El sistema de "ownership" de Rust hace imposible los errores de memoria más comunes (buffer overflows, use-after-free, dangling pointers) en tiempo de compilación, sin runtime overhead.

Rust fue votado el **lenguaje más amado** en la encuesta de Stack Overflow durante 10 años consecutivos (2016-2025). Linux kernel (2022), Windows kernel, Firefox, Cloudflare y Mozilla lo usan en producción.

---

## El árbol de los lenguajes — Influencias

```
FORTRAN (1957) ──────────────────────────────────────→ Ciencia y matemáticas
LISP (1958) ──────────────────────────────────────────→ Haskell, Clojure, funcional
COBOL (1959) ─────────────────────────────────────────→ COBOL moderno
                                                          (sigue vivo)
C (1972)
├── C++ (1985) ──────────────────────────────────────→ sistemas, juegos
│   └── Java (1995) ─────────────────────────────────→ backend empresarial
│       ├── C# (2000) ───────────────────────────────→ ecosistema Microsoft
│       ├── Kotlin (2011) ───────────────────────────→ Android
│       └── Scala (2003) ────────────────────────────→ Big Data (Spark)
├── Perl (1987) ─────────────────────────────────────→ texto, sysadmin
├── Python (1991) ───────────────────────────────────→ IA, ciencia de datos, web
├── PHP (1994) ──────────────────────────────────────→ web (WordPress: 43% de la web)
├── JavaScript (1995) ───────────────────────────────→ web frontend/backend
│   └── TypeScript (2012) ───────────────────────────→ JavaScript con tipos
├── Ruby (1995) ─────────────────────────────────────→ web (Rails)
└── Go (2009) ───────────────────────────────────────→ cloud, contenedores
Rust (2015) ─────────────────────────────────────────→ sistemas, WebAssembly
Swift (2014) ────────────────────────────────────────→ iOS, macOS
```

---

## El índice TIOBE 2026 — Los lenguajes más usados

> *Los rankings varían según la fuente (TIOBE, Stack Overflow, GitHub, RedMonk). Esta es una aproximación.*

| # | Lenguaje | Fortaleza principal |
|---|---------|---------------------|
| 1 | Python | IA, ciencia de datos, scripting, enseñanza |
| 2 | Java | Backend empresarial, Android |
| 3 | JavaScript | Web frontend, Node.js |
| 4 | C/C++ | Sistemas, embebidos, juegos |
| 5 | C# | Ecosistema Microsoft, Unity |
| 6 | TypeScript | JavaScript tipado — proyectos grandes |
| 7 | Go | Cloud, microservicios, DevOps |
| 8 | Rust | Sistemas, seguridad, WebAssembly |
| 9 | Kotlin | Android, backend JVM |
| 10 | Swift | iOS, macOS |
| 11 | PHP | Web (WordPress, Laravel) |
| 12 | R | Estadística, ciencia de datos |
| 13 | SQL | Bases de datos — siempre relevante |
| 14 | Scala | Big Data, funcional JVM |
| 15 | COBOL | Banca, gobierno — inamovible |

---

## Resumen del capítulo

La evolución de los lenguajes sigue un patrón claro:

```
1. Un nuevo hardware o contexto crea nuevas necesidades
2. Un programador frustrando con la herramienta actual crea algo mejor
3. El nuevo lenguaje gana adopción lentamente
4. Llega un "killer app" o plataforma que lo dispara (la Web para JS, IA para Python)
5. Se vuelve estándar — y alguien empieza a frustrarse con él y crea el siguiente
```

```
Java nació porque C++ era demasiado complejo y no era portable
Python nació porque Perl era demasiado críptico
Kotlin nació porque Java era demasiado verboso
Rust nació porque C++ tenía demasiados errores de memoria
TypeScript nació porque JavaScript era demasiado impredecible en proyectos grandes
```

Cada lenguaje que usas hoy es la respuesta de alguien a los problemas del lenguaje anterior.

---

→ Siguiente capítulo: [Pioneros y visionarios — Las personas detrás de todo](./09_pioneros_y_visionarios.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

