# Módulo 04 — Tipos de errores y debugging

> **Objetivo:** identificar los tres tipos de errores más comunes en programación, entender por qué ocurren en Python y practicar estrategias concretas para encontrarlos y corregirlos.

---

## ¿Por qué importa distinguir el tipo de error?

Cuando algo falla, no basta con decir *"hay un error"*. Un error de sintaxis, uno de ejecución y uno de lógica se buscan de formas distintas.

> 📌 Saber **qué tipo de error tienes** te ayuda a decidir **dónde mirar primero** y **qué herramienta usar**.

---

## Índice

1. [Error de sintaxis](#1-error-de-sintaxis)
2. [Error en tiempo de ejecución (Runtime Error)](#2-error-en-tiempo-de-ejecución-runtime-error)
3. [Error de lógica](#3-error-de-lógica)
4. [Stack trace — cómo leerlo](#4-stack-trace--cómo-leerlo)
5. [Estrategias de debugging](#5-estrategias-de-debugging)
6. [Tabla resumen](#6-tabla-resumen)
7. [📚 Literatura recomendada](#-literatura-recomendada)
8. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Error de sintaxis

### 📖 Definición

Un **error de sintaxis** ocurre cuando el código **no respeta las reglas del lenguaje**. Python no puede interpretar la instrucción y detiene la ejecución antes de empezar realmente el programa.

### 🌐 Perspectiva universal

| Lenguaje | ¿Cuándo se detecta? | Herramienta |
|----------|--------------------|-------------|
| Python | Al intentar ejecutar el archivo o la línea | Intérprete |
| Java, C, C# | Al compilar | Compilador |
| Todos | Muchas veces antes, en el editor | IDE o linter |

### 🐍 Ejemplos en Python

```python
# ❌ Falta el :
if edad >= 18
    print("Mayor de edad")

# ❌ Paréntesis sin cerrar
print("Hola"

# ❌ Comillas sin cerrar
nombre = "Ana

# ❌ Indentación incorrecta
if True:
print("Python exige sangría")
```

### ✅ Cómo resolverlo

1. Lee el mensaje exacto que entrega Python.
2. Revisa la línea indicada y también la anterior.
3. Fíjate en `:`, comillas, paréntesis e indentación.
4. Usa el editor para que te marque errores mientras escribes.

### ⚠️ Errores de sintaxis comunes en Python

| Error | Causa frecuente |
|-------|-----------------|
| `SyntaxError: expected ':'` | Falta `:` en `if`, `for`, `while`, `def`, `class` |
| `IndentationError` | La sangría no coincide o falta |
| `SyntaxError: '(' was never closed` | Paréntesis sin cerrar |
| `SyntaxError: unterminated string literal` | Texto entre comillas sin cerrar |
| `TabError` | Mezcla de tabs y espacios |

---

## 2. Error en tiempo de ejecución (Runtime Error)

### 📖 Definición

Un **error en tiempo de ejecución** ocurre **mientras el programa ya está corriendo**. La sintaxis está bien, pero algún dato o situación real provoca la falla.

En Python estos errores aparecen como **excepciones**.

> **Analogía:** la receta está bien escrita, pero al cocinar te das cuenta de que no tienes un ingrediente o usaste uno incorrecto.

### 🌐 Perspectiva universal

```python
# Python
numeros = [10, 20, 30]
print(numeros[5])   # IndexError

entero = int("hola")  # ValueError
```

```javascript
// JavaScript
let usuario = null;
console.log(usuario.nombre); // TypeError
```

### 🐍 Excepciones más comunes en Python

```python
# 1. IndexError — índice fuera de rango
numeros = [1, 2, 3]
print(numeros[10])

# 2. ValueError — conversión inválida
edad = int("dieciocho")

# 3. TypeError — operación con tipos incompatibles
resultado = "10" + 5

# 4. ZeroDivisionError — división por cero
promedio = 10 / 0

# 5. KeyError — clave inexistente en un diccionario
persona = {"nombre": "Ana"}
print(persona["edad"])

# 6. RecursionError — demasiadas llamadas recursivas
def contar():
    return contar()
```

### ✅ Cómo resolverlo

1. Lee el **tipo de excepción** y su mensaje.
2. Mira el traceback completo.
3. Reproduce el error con los mismos datos.
4. Valida entradas antes de operar.
5. Usa `try` y `except` cuando el error sea esperable y quieras manejarlo.

---

## 3. Error de lógica

### 📖 Definición

Un **error de lógica** ocurre cuando el programa **se ejecuta sin lanzar errores**, pero el resultado es incorrecto.

> **Analogía:** seguiste todos los pasos y la torta salió, pero tenía sal en lugar de azúcar.

### 🌐 Perspectiva universal

Ningún lenguaje te salva por completo de esto. Si la idea está mal, el programa puede correr igual y entregar una respuesta equivocada.

### 🐍 Ejemplos en Python

```python
# ❌ Error de lógica 1: precedencia de operadores
nota_1 = 7
nota_2 = 8
nota_3 = 9
promedio = nota_1 + nota_2 + nota_3 / 3
print(promedio)  # 18.0, no 8.0

# ✅ Correcto
promedio_correcto = (nota_1 + nota_2 + nota_3) / 3


# ❌ Error de lógica 2: condición invertida
edad = 65
if edad < 60:
    print("Descuento adulto mayor")

# ✅ Correcto
if edad >= 60:
    print("Descuento adulto mayor")


# ❌ Error de lógica 3: off-by-one
for numero in range(1, 10):
    print(numero)  # imprime del 1 al 9

# ✅ Correcto
for numero in range(1, 11):
    print(numero)
```

### ✅ Cómo resolverlo

1. Define primero qué resultado esperas.
2. Prueba con casos pequeños y fáciles de verificar.
3. Imprime variables clave en distintos puntos.
4. Recorre el algoritmo paso a paso, como en PSeInt.
5. Escribe pruebas simples con `assert`.

---

## 4. Stack trace — cómo leerlo

### 📖 Definición

En Python, el **stack trace** o **traceback** es el reporte que aparece cuando ocurre una excepción. Muestra la cadena de llamadas que llevó al error.

### 🐍 Ejemplo de stack trace

```text
Traceback (most recent call last):
  File "app.py", line 12, in <module>
    crear_usuario()
  File "app.py", line 8, in crear_usuario
    validar_edad("dieciocho")
  File "app.py", line 4, in validar_edad
    edad = int(texto)
ValueError: invalid literal for int() with base 10: 'dieciocho'
```

### 🔍 Cómo leerlo

```text
Traceback (most recent call last):
    ...
ValueError                         ← tipo de excepción
invalid literal for int()...       ← mensaje descriptivo

File "app.py", line 4             ← línea donde ocurre el problema real
in validar_edad                    ← función donde falló
```

### ⚠️ Reglas para leer un stack trace

1. Empieza por el **final**: ahí está el tipo de excepción.
2. Busca la primera línea de tu código que aparece en el traceback.
3. Sigue la cadena de llamadas si necesitas entender cómo se llegó allí.
4. No adivines: lee el mensaje completo.

---

## 5. Estrategias de debugging

### 5.1 Print debugging (el más básico)

Agregar impresiones temporales sigue siendo una forma muy útil de entender qué está pasando.

```python
def calcular_total(precios):
    print("[DEBUG] precios:", precios)
    total = 0

    for precio in precios:
        print("[DEBUG] precio actual:", precio)
        total += precio

    print("[DEBUG] total final:", total)
    return total
```

> ✅ Rápido y simple.  
> ⚠️ Después conviene limpiar esos `print()` de depuración.

### 5.2 Debugger del IDE (el más poderoso)

Si usas VS Code, PyCharm u otro editor moderno, puedes poner **breakpoints** y ejecutar línea a línea.

```text
Flujo básico:
1. Coloca un breakpoint en una línea.
2. Ejecuta en modo Debug.
3. Observa el valor real de las variables.
4. Avanza paso a paso con Step Over o Step Into.
5. Repite hasta encontrar dónde cambia algo inesperado.
```

### 5.3 Dividir y conquistar (rubber duck debugging)

Cuando el error no aparece claro:

1. Reduce el problema al caso más pequeño posible.
2. Explícalo en voz alta o por escrito.
3. Revisa tus suposiciones con datos concretos.

### 5.4 Tests como herramienta de debugging

Un `assert` simple ya puede ayudarte a aislar errores de lógica.

```python
def calcular_descuento(precio, porcentaje):
    return precio * porcentaje / 100


assert calcular_descuento(1000, 10) == 100
assert calcular_descuento(0, 10) == 0
```

Si un `assert` falla, ya tienes una pista muy precisa de qué caso no está funcionando.

### 5.5 Buscar el mensaje de error

Antes de perder tiempo:

1. Copia el mensaje de error exacto.
2. Busca en documentación oficial o foros confiables.
3. Compara tu caso con ejemplos pequeños.

> 💡 Saber buscar errores también es parte de aprender a programar.

---

## 6. Tabla resumen

| Tipo de error | ¿Cuándo aparece? | ¿Python lo detecta antes de correr el programa completo? | Peligrosidad | Estrategia principal |
|--------------|-----------------|-----------------------------------------------------------|-------------|---------------------|
| **Sintaxis** | Al interpretar el archivo | ✅ Sí | 🟢 Baja | Leer el mensaje y corregir la línea |
| **Runtime** | Durante la ejecución | ❌ No | 🟡 Media | Leer el traceback y validar datos |
| **Lógica** | El programa corre, pero da mal resultado | ❌ No | 🔴 Alta | Probar casos, depurar paso a paso |

### Flujo de diagnóstico rápido

```text
¿Python no puede ejecutar el archivo?
  → Probablemente es un error de SINTAXIS.

¿El programa empieza pero se detiene con una excepción?
  → Es un error de RUNTIME.

¿El programa termina, pero el resultado está mal?
  → Es un error de LÓGICA.
```

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Think Python** | Allen B. Downey | Principiante | Explica muy bien cómo razonar sobre errores y probar ideas pequeñas |
| **The Pragmatic Programmer** | Hunt & Thomas | Principiante / Intermedio | Tiene consejos clásicos y muy prácticos sobre debugging |
| **Debugging: The 9 Indispensable Rules** | David J. Agans | Principiante | Corto, claro y universal |
| **Python Crash Course** | Eric Matthes | Principiante | Útil para practicar con ejemplos pequeños y reales |
| **Clean Code** | Robert C. Martin | Intermedio | Un buen diseño reduce muchos errores de lógica |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Python Exceptions — documentación oficial** | https://docs.python.org/3/tutorial/errors.html | Explica excepciones, `try`, `except` y manejo básico de errores |
| **pdb — Python Debugger** | https://docs.python.org/3/library/pdb.html | Documentación del depurador incorporado en Python |
| **Python Tutor** | https://pythontutor.com/ | Ideal para ver la ejecución paso a paso |
| **Real Python — Debugging Python Applications** | https://realpython.com/python-debugging-pdb/ | Guía práctica para depurar en Python |
| **Stack Overflow — How to debug small programs** | https://stackoverflow.com/questions/2069367 | Recomendaciones útiles y universales para principiantes |
