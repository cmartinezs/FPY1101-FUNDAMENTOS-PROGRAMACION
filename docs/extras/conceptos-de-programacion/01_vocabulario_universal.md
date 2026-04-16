# 🧠 Conceptos de Programación — Vocabulario Universal

> **Nivel de entrada:** cualquiera.  
> **Objetivo:** dominar vocabulario fundamental que aparece en programación, usando **Python como lenguaje de referencia** y conectando, cuando conviene, con lo que ya conoces de PSeInt.  
> **Lenguaje de referencia para ejemplos:** Python 3.

---

## Índice

1. [Identificador](#1-identificador)
2. [Tipo de dato](#2-tipo-de-dato)
3. [Literal](#3-literal)
4. [Variable](#4-variable)
5. [Constante](#5-constante)
6. [Declaración](#6-declaración)
7. [Asignación](#7-asignación)
8. [Expresión](#8-expresión)
9. [Operador](#9-operador)
10. [Sentencia / Instrucción](#10-sentencia--instrucción)
11. [Bloque](#11-bloque)
12. [Comentario](#12-comentario)
13. [Condicional](#13-condicional)
14. [Bucle / Ciclo](#14-bucle--ciclo)
15. [Función / Método](#15-función--método)
16. [Parámetro y argumento](#16-parámetro-y-argumento)
17. [Retorno](#17-retorno)
18. [Ámbito (Scope)](#18-ámbito-scope)
19. [Clase](#19-clase)
20. [Objeto / Instancia](#20-objeto--instancia)
21. [Interfaz / Contrato](#21-interfaz--contrato)
22. [Módulo / Paquete / Namespace](#22-módulo--paquete--namespace)
23. [Array / Arreglo](#23-array--arreglo)
24. [Excepción / Error](#24-excepción--error)
25. [Algoritmo](#25-algoritmo)
26. [Referencia](#26-referencia)
27. [Tabla resumen](#tabla-resumen)

---

## 1. Identificador

### 📖 Definición

Un **identificador** es el nombre que le das a algo dentro del programa: una variable, una función, una clase o un módulo.

### 🌐 En otros lenguajes

En PSeInt también nombras variables y procesos. La idea es la misma: elegir un nombre que permita reconocer qué representa ese elemento.

### 🐍 En Python

```python
nombre_estudiante = "Ana"
edad = 19

def calcular_promedio(notas):
    return sum(notas) / len(notas)
```

### ⚠️ Reglas universales

- Debe empezar con letra o guion bajo.
- No puede contener espacios.
- No debe ser una palabra reservada como `if`, `for` o `class`.
- Conviene que describa la intención.

---

## 2. Tipo de dato

### 📖 Definición

Un **tipo de dato** indica qué clase de valor estás manejando y qué operaciones tienen sentido con él.

### 🌐 Tipos comunes en diferentes lenguajes

Los tipos más comunes son texto, enteros, decimales, booleanos y colecciones. En Python no declaras el tipo antes, pero igual existe y afecta el comportamiento del valor.

### 🐍 En Python

```python
nombre = "Ana"      # str
edad = 19           # int
altura = 1.65       # float
es_activo = True    # bool
```

### ⚠️ Importante

Python es **de tipado dinámico**: el tipo se asocia al valor, no a la variable escrita con anticipación.

---

## 3. Literal

### 📖 Definición

Un **literal** es un valor escrito directamente en el código.

### 🌐 Perspectiva universal

Es la forma más simple de representar un dato: un número, un texto, `True`, `False`, etc.

### 🐍 En Python

```python
10
3.14
"hola"
True
[1, 2, 3]
```

```python
edad = 18       # 18 es un literal
nombre = "Ana"  # "Ana" es un literal
```

### ⚠️ No confundas literal con variable

En `edad = 18`, `edad` es una variable y `18` es el literal.

---

## 4. Variable

### 📖 Definición

Una **variable** es un nombre que referencia un valor para poder usarlo más tarde.

### 🌐 En otros lenguajes

En PSeInt primero escribías `Definir edad Como Entero`. En Python la variable aparece cuando le asignas un valor.

### 🐍 En Python

```python
edad = 18
nombre = "Ana"
total = 0
```

### ⚠️ La confusión más frecuente

La variable no es el valor mismo: es el nombre que apunta a ese valor en el programa.

---

## 5. Constante

### 📖 Definición

Una **constante** es un dato que, por acuerdo, no debería cambiar durante la ejecución.

### 🌐 En otros lenguajes

Algunos lenguajes tienen una palabra reservada especial para constantes. Python normalmente usa una **convención de nombres**.

### 🐍 En Python

```python
PI = 3.14159
DIAS_SEMANA = 7
MENSAJE_BIENVENIDA = "Hola"
```

### ⚠️ Constante vs literal

`3.14159` es un literal. `PI` es un nombre al que decidimos tratar como constante.

---

## 6. Declaración

### 📖 Definición

**Declarar** significa introducir un nombre nuevo en el programa.

### 🌐 Perspectiva universal

En lenguajes como Java o C se suele declarar indicando el tipo. En Python, para variables simples, declaración y primera asignación suelen ocurrir al mismo tiempo.

### 🐍 En Python

```python
edad = 18
nombre = "Ana"

def saludar():
    print("Hola")

class Persona:
    pass
```

### ⚠️ Declaración ≠ Asignación (aunque se hagan juntas)

Cuando escribes `edad = 18`, estás introduciendo el nombre `edad` y también le estás dando un valor.

---

## 7. Asignación

### 📖 Definición

**Asignar** es guardar un valor en una variable.

### 🌐 Perspectiva universal

En PSeInt usabas `<-`. En Python se usa `=` para asignar.

### 🐍 En Python

```python
total = 0
total = total + 5
nombre = "Ana"
```

### ⚠️ `=` NO es igualdad

En Python, `=` asigna. Para comparar igualdad se usa `==`.

---

## 8. Expresión

### 📖 Definición

Una **expresión** es cualquier combinación de valores, variables u operadores que produce un resultado.

### 🌐 Perspectiva universal

Si al evaluarla obtienes un valor, entonces es una expresión.

### 🐍 En Python

```python
2 + 3
edad >= 18
nombre.upper()
len([1, 2, 3])
```

### ⚠️ Expresión vs Sentencia

`2 + 3` es una expresión. `print(2 + 3)` es una instrucción que usa esa expresión.

---

## 9. Operador

### 📖 Definición

Un **operador** es un símbolo o palabra que sirve para realizar una operación.

### 🌐 Tipos de operadores (universales)

- Aritméticos: `+`, `-`, `*`, `/`, `%`, `**`
- Relacionales: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Lógicos: `and`, `or`, `not`

### 🐍 En Python

```python
a = 10
b = 3

print(a + b)
print(a % b)
print(a > b)
print(a > 5 and b < 5)
```

---

## 10. Sentencia / Instrucción

### 📖 Definición

Una **sentencia** o **instrucción** es una orden completa que Python puede ejecutar.

### 🌐 Perspectiva universal

Un programa está formado por instrucciones. Algunas son simples y otras contienen bloques completos.

### 🐍 En Python

```python
edad = 18
print(edad)
nombre = input("Nombre: ")
```

### ⚠️ Importante

En Python el salto de línea y la indentación ayudan a separar y organizar instrucciones.

---

## 11. Bloque

### 📖 Definición

Un **bloque** es un conjunto de instrucciones agrupadas.

### 🌐 En otros lenguajes

Muchos lenguajes usan llaves `{}`. Python usa **indentación**.

### 🐍 En Python

```python
edad = 20

if edad >= 18:
    print("Mayor de edad")
    print("Puede votar")
```

### ⚠️ Variables dentro de un bloque

Aunque Python no crea un scope nuevo en cada `if`, la indentación sí define qué instrucciones pertenecen al bloque.

---

## 12. Comentario

### 📖 Definición

Un **comentario** es texto para humanos que Python ignora al ejecutar.

### 🌐 Sintaxis en distintos lenguajes

En Python se usa `#` para comentarios de una línea. Los docstrings se escriben con triple comilla y sirven para documentar funciones, clases o módulos.

### 🐍 En Python

```python
# Este comentario explica la siguiente línea
total = 0

def saludar(nombre):
    """Retorna un saludo simple."""
    return f"Hola, {nombre}"
```

### ⚠️ Buenos vs malos comentarios

Un buen comentario aclara una intención. Un mal comentario repite lo obvio.

---

## 13. Condicional

### 📖 Definición

Un **condicional** permite ejecutar un bloque solo si se cumple una condición.

### 🌐 Perspectiva universal

En PSeInt usabas `Si ... Entonces`. En Python usas `if`, `elif` y `else`.

### 🐍 En Python

```python
edad = 17

if edad >= 18:
    print("Puede entrar")
else:
    print("No puede entrar")
```

---

## 14. Bucle / Ciclo

### 📖 Definición

Un **bucle** repite instrucciones varias veces.

### 🌐 Perspectiva universal

En PSeInt ya conoces `Mientras`, `Repetir` y `Para`. En Python lo más común es usar `while` y `for`.

### 🐍 En Python

```python
for numero in range(1, 4):
    print(numero)

contador = 0
while contador < 3:
    print("Hola")
    contador += 1
```

### ⚠️ Bucle infinito

Si la condición nunca cambia, el ciclo puede no terminar.

---

## 15. Función / Método

### 📖 Definición

Una **función** es un bloque reutilizable de código. Un **método** es una función asociada a un objeto o clase.

### 🌐 En otros lenguajes

La idea es universal: dividir el problema en piezas más pequeñas y reutilizables.

### 🐍 En Python

```python
def sumar(a, b):
    return a + b

texto = "hola"
print(texto.upper())  # upper es un método del objeto str
```

### ⚠️ Ventajas de usar funciones/métodos

Permiten reutilizar, ordenar mejor el código y probar partes pequeñas por separado.

---

## 16. Parámetro y argumento

### 📖 Definición

Un **parámetro** es el nombre que aparece en la definición de una función. Un **argumento** es el valor real que se entrega al llamarla.

### 🐍 En Python

```python
def saludar(nombre):  # nombre es parámetro
    print(f"Hola, {nombre}")

saludar("Ana")        # "Ana" es argumento
```

### ⚠️ Regla mnemotécnica

- **Parámetro**: aparece en la puerta de entrada de la función.
- **Argumento**: viaja en la llamada.

---

## 17. Retorno

### 📖 Definición

El **retorno** es el valor que una función entrega al terminar.

### 🌐 Perspectiva universal

Si una función solo muestra algo con `print()`, no necesariamente está retornando un valor útil al programa.

### 🐍 En Python

```python
def cuadrado(numero):
    return numero * numero

resultado = cuadrado(4)
print(resultado)
```

### ⚠️ `return` termina la función

Lo que esté después de un `return` dentro del mismo bloque ya no se ejecuta.

---

## 18. Ámbito (Scope)

### 📖 Definición

El **ámbito** indica en qué parte del programa existe y puede usarse un nombre.

### 🌐 Perspectiva universal

Hay variables locales y globales. Entender esto evita confusiones al reutilizar nombres.

### 🐍 En Python

```python
mensaje = "global"

def mostrar():
    texto = "local"
    print(texto)
    print(mensaje)
```

### ⚠️ Por qué importa el scope

Si intentas usar una variable fuera de su ámbito, obtendrás un error como `NameError`.

---

## 19. Clase

### 📖 Definición

Una **clase** es un molde para crear objetos.

### 🌐 Perspectiva universal

No todos los programas iniciales necesitan clases, pero aparecen mucho cuando modelas entidades del problema.

### 🐍 En Python

```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print(f"Hola, soy {self.nombre}")
```

---

## 20. Objeto / Instancia

### 📖 Definición

Un **objeto** o **instancia** es un valor creado a partir de una clase.

### 🐍 En Python

```python
persona_1 = Persona("Ana")
persona_1.saludar()
```

### ⚠️ Clase vs Objeto

La clase es el molde. El objeto es la versión concreta creada desde ese molde.

---

## 21. Interfaz / Contrato

### 📖 Definición

Una **interfaz** o **contrato** define qué comportamiento se espera de algo, aunque no detalle toda la implementación.

### 🌐 Perspectiva universal

En Python esta idea muchas veces se expresa por **duck typing**: si un objeto tiene los métodos necesarios, puede usarse.

### 🐍 En Python

```python
class Perro:
    def hablar(self):
        return "guau"

class Gato:
    def hablar(self):
        return "miau"

def hacer_hablar(animal):
    print(animal.hablar())
```

Un contrato aquí es: “todo lo que entre a `hacer_hablar()` debe tener un método `hablar()`”.

---

## 22. Módulo / Paquete / Namespace

### 📖 Definición

Un **módulo** es un archivo Python. Un **paquete** es una carpeta que agrupa módulos relacionados. Un **namespace** es el espacio de nombres que evita choques entre identificadores.

### 🐍 En Python

```python
import math

print(math.sqrt(25))
```

Aquí `math` es un módulo y `math.sqrt` indica en qué namespace está `sqrt`.

### ⚠️ Por qué existen

Sirven para ordenar el código y evitar que todo quede mezclado en un solo archivo gigante.

---

## 23. Array / Arreglo

### 📖 Definición

Un **array** es una colección ordenada de elementos accesibles por índice.

### 🌐 Perspectiva universal

En lenguajes como C o Java el array suele tener tamaño fijo. En Python, para empezar, normalmente usarás `list`, que es más flexible.

### 🐍 En Python

```python
notas = [5.5, 6.0, 4.8]
print(notas[0])
```

### ⚠️ El índice empieza en 0

`notas[0]` es el primer elemento, no el segundo.

---

## 24. Excepción / Error

### 📖 Definición

Una **excepción** es una señal de que algo salió mal durante la ejecución del programa.

### 🌐 Perspectiva universal

No todos los errores son iguales: algunos son de sintaxis, otros aparecen al correr el programa y otros son de lógica.

### 🐍 En Python

```python
try:
    edad = int(input("Edad: "))
except ValueError:
    print("Debes escribir un número entero")
```

---

## 25. Algoritmo

### 📖 Definición

Un **algoritmo** es una secuencia ordenada de pasos para resolver un problema.

### 🌐 Perspectiva universal

Primero puedes pensar el algoritmo en palabras o pseudocódigo; luego lo traduces a Python.

### ⚠️ Algoritmo ≠ Código

El algoritmo es la idea. El código es una implementación concreta de esa idea.

---

## 26. Referencia

### 📖 Definición

En Python, una variable **referencia** un objeto. Esto importa mucho cuando trabajas con listas, diccionarios u otros objetos mutables.

### 🐍 En Python

```python
lista_1 = [1, 2, 3]
lista_2 = lista_1

lista_2.append(4)

print(lista_1)  # [1, 2, 3, 4]
print(lista_2)  # [1, 2, 3, 4]
```

### ⚠️ Por qué `==` e `is` no son lo mismo

- `==` compara contenido.
- `is` compara identidad: si ambas variables apuntan al mismo objeto.

```python
a = [1, 2]
b = [1, 2]
c = a

print(a == b)  # True
print(a is b)  # False
print(a is c)  # True
```

---

## Tabla resumen

| Término | Idea corta | Ejemplo Python |
|--------|------------|----------------|
| Identificador | Nombre dentro del programa | `edad`, `calcular_total` |
| Tipo de dato | Clase de valor | `int`, `str`, `bool` |
| Literal | Valor escrito directamente | `10`, `"Ana"` |
| Variable | Nombre que referencia un valor | `edad = 18` |
| Constante | Valor que no debería cambiar | `PI = 3.14159` |
| Asignación | Guardar un valor | `total = 0` |
| Expresión | Produce un resultado | `a + b` |
| Bloque | Grupo de instrucciones | cuerpo de un `if` |
| Función | Código reutilizable | `def saludar():` |
| Clase | Molde para objetos | `class Persona:` |
| Excepción | Error en ejecución | `ValueError` |
| Referencia | Nombre que apunta a un objeto | dos variables para la misma lista |

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Think Python** | Allen B. Downey | Principiante | Muy bueno para fijar vocabulario y razonamiento básico |
| **Python Crash Course** | Eric Matthes | Principiante | Presenta conceptos con ejemplos cortos y directos |
| **Fluent Python** | Luciano Ramalho | Intermedio | Ayuda a entender mejor objetos, referencias y estructuras propias de Python |
| **Automate the Boring Stuff with Python** | Al Sweigart | Principiante | Conecta vocabulario con tareas reales y motivadoras |
| **Grokking Algorithms** | Aditya Bhargava | Principiante / Intermedio | Excelente apoyo para la noción de algoritmo y estructuras |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **The Python Tutorial** | https://docs.python.org/3/tutorial/ | Guía oficial y progresiva |
| **Python Data Types** | https://docs.python.org/3/library/stdtypes.html | Referencia oficial de tipos integrados |
| **PEP 8** | https://peps.python.org/pep-0008/ | Convenciones básicas de nombres y estilo |
| **Python Tutor** | https://pythontutor.com/ | Visualiza variables, referencias y ejecución paso a paso |
| **Real Python** | https://realpython.com/ | Tutoriales claros y prácticos sobre conceptos base |
