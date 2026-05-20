# Módulo 05 — Recursividad

> **Objetivo:** entender qué es la recursividad, cómo funciona internamente, cuándo es la herramienta correcta y cuándo no. Es uno de los conceptos que más cuesta al principio y más se disfruta cuando hace clic.

---

## ¿Qué es la recursividad?

Una función es **recursiva** cuando **se llama a sí misma** como parte de su propia definición para resolver una versión más pequeña del mismo problema.

> **Analogía:** para saber en qué piso estás de un edificio sin mirar los números, le preguntas a la persona del piso de abajo. Esa persona hace lo mismo: le pregunta a la de más abajo. Hasta que alguien llega a la planta baja y dice "estoy en el piso 0". A partir de ahí, cada persona suma 1 y responde al de arriba. Ese proceso es recursividad.

La recursividad es, en esencia, una **alternativa a los bucles**: ambos sirven para repetir algo, pero con enfoques distintos.

> 📌 **Conexión con PSeInt:** en PSeInt normalmente resuelves repeticiones con `Mientras`, `Para` o `Repetir`. En Python también puedes hacerlo así, pero a veces una función recursiva expresa mejor problemas que tienen partes anidadas o que se reducen a una versión más pequeña del mismo caso.

---

## Índice

1. [Anatomía de una función recursiva](#1-anatomía-de-una-función-recursiva)
2. [Cómo funciona internamente](#2-cómo-funciona-internamente)
3. [Ejemplos clásicos](#3-ejemplos-clásicos)
4. [Recursividad vs iteración](#4-recursividad-vs-iteración)
5. [Cuándo usar (y cuándo no)](#5-cuándo-usar-y-cuándo-no)
6. [Errores frecuentes](#6-errores-frecuentes)
7. [📚 Literatura recomendada](#-literatura-recomendada)
8. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Anatomía de una función recursiva

Toda función recursiva válida tiene **dos partes obligatorias**:

```
función recursiva(problema)
├── CASO BASE      → condición de parada, resuelve el caso más simple sin recursión
└── CASO RECURSIVO → reduce el problema y se llama a sí misma con esa versión reducida
```

Si falta el **caso base** → el programa cae en recursión infinita → `RecursionError`.  
Si el **caso recursivo** no reduce el problema → pasa lo mismo.

### 🐍 En Python

```python
# Calcular el factorial de n (n! = n × (n-1) × (n-2) × ... × 1)
def factorial(n):
    # CASO BASE: el problema más simple que podemos resolver directamente
    if n == 0 or n == 1:
        return 1

    # CASO RECURSIVO: reducimos el problema y nos llamamos con la versión reducida
    return n * factorial(n - 1)
```

```
factorial(5)
  = 5 * factorial(4)
        = 4 * factorial(3)
              = 3 * factorial(2)
                    = 2 * factorial(1)
                          = 1           ← caso base: devuelve 1
                    = 2 * 1 = 2
              = 3 * 2 = 6
        = 4 * 6 = 24
  = 5 * 24 = 120
```

---

## 2. Cómo funciona internamente

Cada llamada recursiva crea un nuevo **frame** en el **call stack** (pila de llamadas). Cuando se alcanza el caso base, los frames se van resolviendo de vuelta en orden inverso.

```
Estado del call stack durante factorial(4):

┌─────────────────┐  ← tope del stack
│ factorial(1)=1  │
├─────────────────┤
│ factorial(2)    │  espera resultado de factorial(1)
├─────────────────┤
│ factorial(3)    │  espera resultado de factorial(2)
├─────────────────┤
│ factorial(4)    │  espera resultado de factorial(3)
├─────────────────┤
│ programa        │  espera resultado de factorial(4)
└─────────────────┘  ← base del stack
```

Cada frame ocupa memoria. Con entradas muy grandes, Python protege el programa lanzando `RecursionError` antes de que el stack crezca indefinidamente.

---

## 3. Ejemplos clásicos

### Suma de los primeros N números

```python
def sumar(n):
    if n <= 0:
        return 0          # caso base
    return n + sumar(n - 1)  # caso recursivo

# sumar(4) = 4 + 3 + 2 + 1 = 10
```

### Contar hacia atrás

```python
def contar_atras(n):
    if n < 0:
        return            # caso base

    print(n)
    contar_atras(n - 1)   # caso recursivo

# contar_atras(3) imprime:
# 3
# 2
# 1
# 0
```

### Búsqueda binaria (recursiva)

```python
# Busca un elemento en una lista ORDENADA
def busqueda_binaria(datos, objetivo, inicio, fin):
    if inicio > fin:
        return -1

    medio = (inicio + fin) // 2

    if datos[medio] == objetivo:
        return medio
    if datos[medio] > objetivo:
        return busqueda_binaria(datos, objetivo, inicio, medio - 1)
    return busqueda_binaria(datos, objetivo, medio + 1, fin)
```

### Recorrer una estructura anidada

La recursividad brilla con estructuras en árbol o datos anidados, donde la profundidad no se conoce de antemano.

```python
# Calcula la profundidad máxima de una lista anidada
# Ejemplo: [1, [2, [3]]] tiene profundidad 3
def profundidad(elemento):
    if not isinstance(elemento, list):
        return 0
    if not elemento:
        return 1

    return 1 + max(profundidad(subelemento) for subelemento in elemento)
```

> ⚠️ Este ejemplo ya es un poco más abstracto que los primeros. La idea importante es esta: si un dato contiene otros datos del mismo tipo, la recursividad suele aparecer de forma natural.

---

## 4. Recursividad vs iteración

El mismo problema se puede resolver con recursividad o con un bucle. A veces una es claramente mejor:

```python
# ITERATIVO — factorial con bucle
def factorial_iterativo(n):
    resultado = 1
    for numero in range(2, n + 1):
        resultado *= numero
    return resultado

# RECURSIVO — factorial con recursión
def factorial_recursivo(n):
    if n <= 1:
        return 1
    return n * factorial_recursivo(n - 1)
```

| | Iterativo | Recursivo |
|--|-----------|-----------|
| **Legibilidad** | Clara para lógica lineal | Clara para problemas con subestructura |
| **Memoria** | O(1) — usa pocas variables extra | O(n) — crea frames en el stack |
| **Riesgo** | Bucle infinito | `RecursionError` |
| **Velocidad** | Generalmente más rápido | Tiene costo extra por llamadas |
| **Cuándo brilla** | Repetición lineal | Árboles, estructuras anidadas, divide y vencerás |

---

## 5. Cuándo usar (y cuándo no)

### ✅ Úsala cuando

- El problema tiene **subestructura recursiva natural**: se reduce a versiones más pequeñas del mismo problema.
- Trabajas con **árboles, directorios, JSON o listas anidadas**.
- El algoritmo se basa en **divide y vencerás**: búsqueda binaria, merge sort, quick sort.
- La versión recursiva es **mucho más legible** que la iterativa.

### ❌ Evítala cuando

- El problema es simplemente **repetición lineal**: un `for` o `while` suele ser más claro.
- La entrada puede ser **muy grande**: Python no está pensado para recursiones muy profundas.
- Necesitas **máxima eficiencia** en un caso sencillo.

> 💡 Para principiantes, la mejor regla es: **si un bucle resuelve el problema de forma clara, parte por ahí**. Usa recursividad cuando realmente te ayude a pensar mejor el problema.

---

## 6. Errores frecuentes

### ❌ Sin caso base (recursión infinita)

```python
def factorial(n):
    return n * factorial(n - 1)  # ❌ nunca se detiene
```

### ❌ Caso base inalcanzable

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n + 1)  # ❌ n crece en lugar de acercarse al caso base
```

### ❌ Olvidar el `return` en el caso recursivo

```python
def factorial(n):
    if n <= 1:
        return 1
    n * factorial(n - 1)  # ❌ devuelve None
```

### ✅ Regla mnemotécnica para diseñar recursividad

```
1. ¿Cuál es el caso más simple que puedo resolver directamente? → CASO BASE
2. ¿Cómo reduzco el problema actual a una versión más pequeña? → CASO RECURSIVO
3. ¿Confío en que la llamada recursiva resolverá la versión más pequeña? → SÍ (fe recursiva)
```

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Grokking Algorithms** | Aditya Bhargava | Principiante | Tiene una de las explicaciones más claras sobre recursividad y call stack, con diagramas muy amigables |
| **Problem Solving with Algorithms and Data Structures Using Python** | Miller & Ranum | Principiante / Intermedio | Presenta recursividad directamente con ejemplos en Python y ejercicios muy didácticos |
| **Think Python** | Allen B. Downey | Principiante | Explica recursividad con lenguaje simple y progresivo, ideal para estudiantes que vienen de pseudocódigo |
| **Structure and Interpretation of Computer Programs (SICP)** | Abelson & Sussman | Avanzado | Enseña a pensar de forma recursiva y abstracta. Es exigente, pero muy formativo |
| **The Little Schemer** | Friedman & Felleisen | Intermedio | Aunque usa Lisp, enseña muy bien la idea mental detrás de la recursividad |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Python Tutor** | https://pythontutor.com/ | Permite ejecutar funciones recursivas paso a paso y ver la pila de llamadas en pantalla |
| **VisuAlgo — Recursion** | https://visualgo.net/en/recursion | Visualización animada del call stack durante una ejecución recursiva |
| **Khan Academy — Recursión** | https://es.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion | Introducción visual y amigable al tema |
| **Think Python (gratis)** | https://greenteapress.com/wp/think-python-2e/ | Libro abierto con capítulo sobre recursividad |
| **The Recursion Fairy** | https://jeffe.cs.illinois.edu/teaching/algorithms/book/01-recursion.pdf | Texto excelente sobre la “fe recursiva” y cómo pensar este tipo de soluciones |
