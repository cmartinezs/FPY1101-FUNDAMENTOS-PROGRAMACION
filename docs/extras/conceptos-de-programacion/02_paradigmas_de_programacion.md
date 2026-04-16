# Módulo 02 — Paradigmas de programación

> **Objetivo:** entender qué es un paradigma, por qué existen varios y cómo Python puede usar más de uno a la vez. Tener este mapa mental ayuda a leer y escribir código con más intención.

---

## ¿Qué es un paradigma?

Un **paradigma de programación** es una **forma de pensar y estructurar el código**. No es solo una sintaxis: es una manera de decidir cómo dividir un problema y cómo expresar la solución.

> **Analogía:** si varias personas tienen que llegar al mismo lugar, una puede caminar paso a paso siguiendo una ruta, otra puede pedir un transporte indicando solo el destino y otra puede dividir el trayecto en tramos pequeños. El objetivo es el mismo, pero el enfoque cambia. Eso mismo ocurre con los paradigmas.

Los paradigmas **no son excluyentes**. En Python es común mezclar varios según la tarea.

---

## Índice

1. [Imperativo](#1-imperativo)
2. [Declarativo](#2-declarativo)
3. [Orientado a Objetos (OOP)](#3-orientado-a-objetos-oop)
4. [Funcional](#4-funcional)
5. [¿Cuál usar?](#5-cuál-usar)
6. [Python y los paradigmas](#6-python-y-los-paradigmas)
7. [Tabla resumen](#7-tabla-resumen)
8. [📚 Literatura recomendada](#-literatura-recomendada)
9. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Imperativo

### 📖 Definición

En el paradigma **imperativo** le dices al programa **qué hacer y en qué orden**. Vas indicando cada paso del proceso.

> **Analogía:** es como una receta con instrucciones numeradas: “1. corta, 2. mezcla, 3. cocina, 4. sirve”.

### 🌐 Perspectiva universal

Es el paradigma más natural cuando empiezas a programar, y también el más parecido a cómo se explica un algoritmo en PSeInt.

### 🐍 En Python

```python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares_mayores_a_5 = []

for numero in numeros:
    if numero % 2 == 0:
        if numero > 5:
            pares_mayores_a_5.append(numero)

print(pares_mayores_a_5)  # [6, 8, 10]
```

### ⚠️ Características clave

- **Estado mutable**: las variables suelen cambiar.
- **Flujo explícito**: tú controlas cada paso.
- **Muy cercano a PSeInt**: es ideal para empezar.
- **Puede crecer demasiado** si todo se resuelve con pasos largos y repetitivos.

---

## 2. Declarativo

### 📖 Definición

El paradigma **declarativo** se enfoca en describir **qué resultado quieres**, no todos los detalles de cómo obtenerlo.

> **Analogía:** en vez de decirle a alguien cómo cocinar plato por plato, le dices qué comida quieres y el sistema se encarga del resto.

### 🌐 Perspectiva universal

SQL y HTML son ejemplos clásicos: declaras una consulta o una estructura, y otra capa resuelve los detalles internos.

En Python también aparece cuando usas herramientas que expresan la intención de forma compacta.

### 🐍 En Python

```python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares_mayores_a_5 = [numero for numero in numeros if numero % 2 == 0 and numero > 5]

print(pares_mayores_a_5)  # [6, 8, 10]
```

```sql
SELECT nombre, edad
FROM estudiantes
WHERE edad >= 18
ORDER BY nombre;
```

### ⚠️ Imperativo vs Declarativo — mismo resultado, diferente enfoque

| | Imperativo | Declarativo |
|--|-----------|-------------|
| Se enfoca en | *Cómo* hacer las cosas | *Qué* se quiere obtener |
| Control del flujo | El programador | El lenguaje o la herramienta |
| Verbosidad | Más pasos visibles | Menos detalle operativo |
| Lectura | Más literal | Más expresiva |

---

## 3. Orientado a Objetos (OOP)

### 📖 Definición

La **programación orientada a objetos** organiza el código alrededor de **objetos** que combinan **datos** y **comportamientos**.

> **Analogía:** un auto tiene atributos como marca y color, y también acciones como arrancar o frenar.

### 🌐 Perspectiva universal

OOP aparece en muchos lenguajes. En Python se usa bastante, aunque el lenguaje también deja trabajar muy bien con funciones sueltas y scripts simples.

### 🐍 En Python

```python
class Auto:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.encendido = False

    def arrancar(self):
        self.encendido = True
        print(f"{self.marca} {self.modelo} arrancado")

    def apagar(self):
        self.encendido = False


mi_auto = Auto("Toyota", "Corolla")
mi_auto.arrancar()
```

### ⚠️ Los 4 pilares de OOP

| Pilar | Qué significa |
|-------|---------------|
| **Encapsulamiento** | Agrupar datos y comportamiento, y controlar cómo se usan |
| **Herencia** | Reutilizar comportamiento desde otra clase |
| **Polimorfismo** | La misma operación puede actuar distinto según el objeto |
| **Abstracción** | Modelar solo lo importante del problema |

---

## 4. Funcional

### 📖 Definición

La **programación funcional** pone el foco en **funciones** que transforman datos, idealmente con pocos efectos secundarios y sin depender demasiado de estado compartido.

> **Analogía:** una calculadora recibe datos y entrega un resultado; no necesita recordar una historia completa para operar.

### 🌐 Perspectiva universal

Hay lenguajes más funcionales que otros, pero Python soporta varias ideas funcionales: funciones de orden superior, `lambda`, comprensión de listas, `map()`, `filter()` y `sum()`.

### 🐍 En Python

```python
def doble(x):
    return x * 2


def es_par(x):
    return x % 2 == 0


numeros = [1, 2, 3, 4, 5]
resultado = list(map(doble, filter(es_par, numeros)))
suma = sum(numeros)

print(resultado)  # [4, 8]
print(suma)       # 15
```

### ⚠️ Conceptos clave del paradigma funcional

| Concepto | Qué significa |
|----------|---------------|
| **Función pura** | Con la misma entrada, entrega la misma salida |
| **Inmutabilidad** | En vez de modificar, muchas veces se crea un valor nuevo |
| **Sin efectos secundarios** | La función evita cambiar cosas externas |
| **Función de orden superior** | Recibe o retorna funciones |
| **Lambda** | Función pequeña escrita en una sola expresión |

---

## 5. ¿Cuál usar?

No existe un paradigma perfecto para todo. Lo normal es combinar.

| Situación | Paradigma sugerido |
|-----------|-------------------|
| Resolver una secuencia simple de pasos | **Imperativo** |
| Filtrar o transformar colecciones | **Declarativo** o **funcional** |
| Modelar entidades del problema | **OOP** |
| Trabajar con consultas | **Declarativo** |
| Reducir errores por estado compartido | **Funcional** |

> 💡 En cursos iniciales conviene empezar pensando de forma imperativa y, poco a poco, reconocer cuándo Python permite una solución más expresiva.

---

## 6. Python y los paradigmas

Python no obliga a programar de una sola forma. En un mismo archivo pueden convivir varios enfoques.

```python
class Pedido:
    def __init__(self, cliente, total, activo):
        self.cliente = cliente
        self.total = total
        self.activo = activo


pedidos = [
    Pedido("Ana", 12000, True),
    Pedido("Luis", 8000, False),
    Pedido("Marta", 15000, True),
]

# OOP: modelamos el problema con objetos
# Funcional/declarativo: filtramos y transformamos la colección
activos = [pedido for pedido in pedidos if pedido.activo]
nombres = list(map(lambda pedido: pedido.cliente, activos))

# Imperativo: mostramos resultados paso a paso
for nombre in nombres:
    print(nombre)
```

Python suele sentirse natural para mezclar estilos porque:

- permite scripts simples sin ceremonias innecesarias
- incluye clases cuando las necesitas
- ofrece herramientas funcionales sin obligarte a usarlas siempre
- tiene sintaxis muy expresiva para procesar colecciones

---

## 7. Tabla resumen

| Paradigma | Pregunta central | Foco | Ejemplo típico en Python |
|-----------|-----------------|------|--------------------------|
| **Imperativo** | ¿Cómo lo hago paso a paso? | Instrucciones y estado | `for`, `if`, variables que cambian |
| **Declarativo** | ¿Qué quiero obtener? | Resultado deseado | comprensiones, SQL |
| **OOP** | ¿Qué objetos existen y cómo interactúan? | Entidades con datos y métodos | clases, objetos |
| **Funcional** | ¿Cómo transformo datos con funciones? | Transformaciones y composición | `map`, `filter`, `sum`, `lambda` |

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Python Crash Course** | Eric Matthes | Principiante | Introduce Python con ejemplos directos y muestra varias formas de estructurar programas |
| **Fluent Python** | Luciano Ramalho | Intermedio | Excelente para entender qué hace especial a Python, incluyendo su lado funcional y orientado a objetos |
| **Think Python** | Allen B. Downey | Principiante / Intermedio | Explica conceptos de programación con foco claro y pedagógico |
| **Structure and Interpretation of Computer Programs (SICP)** | Abelson & Sussman | Avanzado | Da una base conceptual fuerte sobre paradigmas, especialmente el funcional |
| **Clean Code** | Robert C. Martin | Intermedio | No trata solo de paradigmas, pero ayuda a elegir estructuras claras y razonadas |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Python Tutorial — Classes** | https://docs.python.org/3/tutorial/classes.html | Explicación oficial y clara de clases y objetos en Python |
| **Python Functional Programming HOWTO** | https://docs.python.org/3/howto/functional.html | Introducción oficial al estilo funcional en Python |
| **Real Python — OOP in Python** | https://realpython.com/python3-object-oriented-programming/ | Buena guía práctica para ver OOP aplicada en Python |
| **Imperative vs Declarative Programming** | https://www.freecodecamp.org/news/imperative-vs-declarative-programming-difference/ | Comparación accesible entre ambos enfoques |
| **Python Tutor** | https://pythontutor.com/ | Permite ejecutar código paso a paso y observar su comportamiento |
