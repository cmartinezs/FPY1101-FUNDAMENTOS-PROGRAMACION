# Módulo 06 — Complejidad algorítmica (Big O)

> **Objetivo:** entender cómo medir si un algoritmo es eficiente, qué es la notación Big O y por qué elegir el algoritmo correcto importa más que elegir el lenguaje correcto.

---

## ¿Qué es la complejidad algorítmica?

La **complejidad algorítmica** mide **cómo crece el tiempo de ejecución (o el uso de memoria) de un algoritmo a medida que crece el tamaño de la entrada**. No mide segundos exactos: mide cómo escala.

> **Analogía:** buscar un nombre en una lista de 10 personas es casi instantáneo con cualquier estrategia. Pero buscar en una lista de 10 millones de personas es donde la estrategia cambia todo.

La herramienta estándar para expresar complejidad es la **notación Big O** (`O(...)`), que describe el comportamiento conforme la entrada `n` crece mucho.

---

## Índice

1. [Notación Big O](#1-notación-big-o)
2. [O(1) — Constante](#2-o1--constante)
3. [O(log n) — Logarítmica](#3-olog-n--logarítmica)
4. [O(n) — Lineal](#4-on--lineal)
5. [O(n log n) — Lineal-logarítmica](#5-on-log-n--lineal-logarítmica)
6. [O(n²) — Cuadrática](#6-on²--cuadrática)
7. [O(2ⁿ) — Exponencial](#7-o2ⁿ--exponencial)
8. [Complejidad espacial](#8-complejidad-espacial)
9. [Comparación visual y reglas prácticas](#9-comparación-visual-y-reglas-prácticas)
10. [📚 Literatura recomendada](#-literatura-recomendada)
11. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Notación Big O

Big O describe el **orden de crecimiento** de un algoritmo. Se ignoran constantes y términos menores porque, cuando `n` es grande, lo dominante es lo que realmente importa.

```
T(n) = 3n² + 5n + 100
        ↑      ↑    ↑
  dominante  menor constante
                         → O(n²)
```

**Reglas de simplificación:**

| Regla | Ejemplo |
|-------|---------|
| Eliminar constantes multiplicativas | `O(5n)` → `O(n)` |
| Eliminar términos menores | `O(n² + n)` → `O(n²)` |
| Mirar el peor caso | Dos recorridos anidados de tamaño `n` → `O(n²)` |

> 📌 **Conexión con Python:** Big O no cambia por usar Python, Java o C. Lo que cambia es el tiempo real de ejecución. La complejidad describe la idea del algoritmo, no el lenguaje.

---

## 2. O(1) — Constante

### 📖 Definición

El algoritmo tarda **aproximadamente lo mismo**, sin importar el tamaño de la entrada. Es la complejidad ideal.

### 🐍 Ejemplos en Python

```python
# Acceder a un elemento por índice en una lista
primero = numeros[0]  # O(1)

# Consultar o guardar en un diccionario
edades["Ana"]        # O(1) promedio
edades["Luis"] = 20  # O(1) promedio

# Agregar o quitar al final de una lista
pila.append(10)       # O(1) amortizado
pila.pop()            # O(1)
```

```
n=10         → 1 operación importante
n=1.000      → 1 operación importante
n=1.000.000  → 1 operación importante
```

---

## 3. O(log n) — Logarítmica

### 📖 Definición

Cada paso **reduce mucho el problema**, normalmente a la mitad. Crece muy lentamente.

> **Analogía:** buscar una palabra en un diccionario físico. Lo abres cerca de la mitad, decides si vas a la izquierda o a la derecha, y descartas la mitad restante.

### 🐍 Ejemplos en Python

```python
from bisect import bisect_left

numeros = [2, 4, 6, 8, 10, 12, 14]
posicion = bisect_left(numeros, 10)  # búsqueda binaria → O(log n)
```

```python
def busqueda_binaria(datos, objetivo):
    izquierda = 0
    derecha = len(datos) - 1

    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        if datos[medio] == objetivo:
            return medio
        if datos[medio] < objetivo:
            izquierda = medio + 1
        else:
            derecha = medio - 1

    return -1
```

```
n=8              → 3 pasos
n=1.000          → ~10 pasos
n=1.000.000      → ~20 pasos
n=1.000.000.000  → ~30 pasos
```

---

## 4. O(n) — Lineal

### 📖 Definición

El tiempo crece **proporcionalmente** al tamaño de la entrada. Si duplicas `n`, aproximadamente duplicas el trabajo.

### 🐍 Ejemplos en Python

```python
# Recorrer una lista completa
for nombre in nombres:   # O(n)
    print(nombre)

# Buscar un elemento en una lista no ordenada
if "Ana" in nombres:     # O(n) en el peor caso
    print("Encontrado")

# Sumar todos los elementos
suma = sum(numeros)       # O(n)
```

```
n=10         → 10 operaciones
n=1.000      → 1.000 operaciones
n=1.000.000  → 1.000.000 operaciones
```

---

## 5. O(n log n) — Lineal-logarítmica

### 📖 Definición

Más lenta que `O(n)`, pero muchísimo mejor que `O(n²)`. Es la complejidad típica de algoritmos de ordenamiento eficientes.

### 🐍 Ejemplos en Python

```python
numeros_ordenados = sorted(numeros)  # O(n log n)

nombres.sort()                       # O(n log n)
```

Python usa **Timsort**, un algoritmo muy eficiente en la práctica para listas reales.

```
n=10         → ~33 operaciones
n=1.000      → ~10.000 operaciones
n=1.000.000  → ~20.000.000 operaciones
```

---

## 6. O(n²) — Cuadrática

### 📖 Definición

Aparece normalmente cuando hay **un bucle dentro de otro bucle**, ambos relacionados con `n`. Duplicar la entrada multiplica el trabajo por cuatro.

### 🐍 Ejemplos en Python

```python
# ❌ Buscar duplicados con dos recorridos anidados — O(n²)
for i in range(len(datos)):
    for j in range(i + 1, len(datos)):
        if datos[i] == datos[j]:
            print("Duplicado:", datos[i])
```

```python
# ✅ Usar un set reduce el problema a O(n) promedio
vistos = set()
for elemento in datos:
    if elemento in vistos:
        print("Duplicado:", elemento)
    else:
        vistos.add(elemento)
```

```
n=10         → 100 operaciones
n=1.000      → 1.000.000 operaciones
n=10.000     → 100.000.000 operaciones
```

### ⚠️ Señal de alarma

Cuando veas dos `for` anidados sobre la misma colección, pregúntate: **¿se puede resolver con un `set`, un `dict` o una sola pasada?**

---

## 7. O(2ⁿ) — Exponencial

### 📖 Definición

El trabajo crece de forma explosiva. Solo es aceptable para entradas pequeñas.

### 🐍 Ejemplo en Python

```python
# Fibonacci recursivo ingenuo — O(2ⁿ)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

```
fibonacci(5)   → pocas llamadas
fibonacci(20)  → miles de llamadas
fibonacci(40)  → demasiadas llamadas
```

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_memo(n):
    if n <= 1:
        return n
    return fibonacci_memo(n - 1) + fibonacci_memo(n - 2)
```

La memoización evita recalcular lo mismo y reduce este caso a **O(n)**.

---

## 8. Complejidad espacial

La notación Big O también mide **cuánta memoria extra** usa un algoritmo.

```python
# O(1) espacial — solo unas pocas variables extra
def suma(datos):
    total = 0
    for numero in datos:
        total += numero
    return total
```

```python
# O(n) espacial — crea una nueva lista del tamaño de la entrada
def duplicar(datos):
    resultado = []
    for numero in datos:
        resultado.append(numero * 2)
    return resultado
```

```python
# O(n) espacial — por la profundidad de la recursión
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

---

## 9. Comparación visual y reglas prácticas

### Crecimiento según tamaño de entrada

| n | O(1) | O(log n) | O(n) | O(n log n) | O(n²) | O(2ⁿ) |
|---|------|---------|------|-----------|------|------|
| 10 | 1 | 3 | 10 | 33 | 100 | 1.024 |
| 100 | 1 | 7 | 100 | 664 | 10.000 | 10³⁰ |
| 1.000 | 1 | 10 | 1.000 | 9.966 | 1.000.000 | 💥 |
| 1.000.000 | 1 | 20 | 1.000.000 | ~20M | 10¹² | 💥 |

### Jerarquía de mejor a peor

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
 ↑                                               ↑
mejor                                           peor
```

### Reglas prácticas para el día a día

| Si ves esto en el código... | Complejidad probable |
|-----------------------------|---------------------|
| Acceso por índice o clave en `dict` | O(1) promedio |
| Un solo `for` o `while` | O(n) |
| `sorted()` o `.sort()` | O(n log n) |
| Un `for` dentro de otro `for` | O(n²) — revisa si se puede mejorar |
| Búsqueda binaria | O(log n) |
| Recursión que se llama dos veces | Posible O(2ⁿ) |
| Uso de `set` para eliminar duplicados | O(n) promedio |

### ¿Cuándo importa optimizar?

```
n < 1.000       → casi cualquier solución simple sirve
n ~ 10.000      → O(n²) puede empezar a notarse
n ~ 100.000     → O(n²) suele ser mala idea
n > 1.000.000   → necesitas O(n), O(log n) o mejores estructuras
```

> 💡 **Regla de oro:** primero haz que funcione correctamente. Luego mide. Luego optimiza si el rendimiento realmente es un problema.

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Grokking Algorithms** | Aditya Bhargava | Principiante | Explica Big O con dibujos, analogías y ejemplos muy claros |
| **Problem Solving with Algorithms and Data Structures Using Python** | Miller & Ranum | Principiante / Intermedio | Presenta estructuras y algoritmos directamente en Python |
| **The Algorithm Design Manual** | Steven Skiena | Intermedio / Avanzado | Excelente para aprender a reconocer patrones de complejidad y elegir algoritmos |
| **Introduction to Algorithms (CLRS)** | Cormen, Leiserson, Rivest, Stein | Avanzado | Referencia formal sobre análisis asintótico |
| **Programming Pearls** | Jon Bentley | Intermedio | Muestra por qué un buen algoritmo cambia problemas reales |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Big-O Cheat Sheet** | https://www.bigocheatsheet.com/ | Referencia rápida de complejidad temporal y espacial |
| **VisuAlgo — Sorting** | https://visualgo.net/en/sorting | Visualiza algoritmos y sus diferencias de rendimiento |
| **CS50 — Algorithms** | https://cs50.harvard.edu/x/2024/weeks/3/ | Clase muy accesible sobre búsqueda, ordenamiento y Big O |
| **Python Wiki — TimeComplexity** | https://wiki.python.org/moin/TimeComplexity | Tabla muy útil sobre complejidad de listas, diccionarios y sets en Python |
| **Khan Academy — Algoritmos** | https://es.khanacademy.org/computing/computer-science/algorithms | Introducción amigable a ideas de eficiencia y análisis |
