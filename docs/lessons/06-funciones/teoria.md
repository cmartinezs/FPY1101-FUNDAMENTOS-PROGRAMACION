# Teoria

## Objetivo

Comprender que son las funciones, como definirlas y los 4 tipos de funciones segun sus parametros y retorno.

## Idea central

Una funcion es un bloque de codigo que tiene un nombre, puede recibir datos (parametros), hace una tarea y puede devolver un resultado (retorno).

## Sintaxis basica

```python
def nombre_funcion(parametros):
    # cuerpo de la funcion
    return resultado  # opcional
```

## Los 4 tipos de funciones

Python tiene 4 combinaciones posibles de parametros y retorno:

| Tipo | Parametros | Retorno | Ejemplo |
| --- | --- | --- | --- |
| 1 | Sin parametros | Sin retorno | `saludar()` |
| 2 | Sin parametros | Con retorno | `obtener_fecha()` |
| 3 | Con parametros | Sin retorno | `mostrar_suma(a, b)` |
| 4 | Con parametros | Con retorno | `calcular_suma(a, b)` |

---

## Tipo 1: Sin parametros, sin retorno

No recibe datos ni devuelve resultados. Solo ejecuta una accion.

```python
def saludar():
    print("Hola, bienvenido!")

# Llamar la funcion
saludar()
```

### Ejemplos

```python
def mostrar_menu():
    print("=== MENU ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Salir")

def mostrar_separador():
    print("-" * 30)

def iniciar_programa():
    print("Iniciando el programa...")
    print("Listo!")

# Uso
iniciar_programa()
mostrar_menu()
mostrar_separador()
```

---

## Tipo 2: Sin parametros, con retorno

No recibe datos pero devuelve un resultado.

```python
def obtener_nombre():
    return "Juan"

nombre = obtener_nombre()
print(nombre)  # Juan
```

### Ejemplos

```python
def obtener_fecha():
    return "15 de abril de 2026"

def obtener_version():
    return "1.0.0"

def generar_id():
    import random
    return random.randint(1000, 9999)

# Uso
print(obtener_fecha())
print("Version:", obtener_version())
```

---

## Tipo 3: Con parametros, sin retorno

Recibe datos pero no devuelve resultados. Solo muestra informacion.

```python
def mostrar_suma(a, b):
    resultado = a + b
    print(f"La suma es: {resultado}")

mostrar_suma(5, 3)  # Sale: La suma es: 8
```

### Ejemplos

```python
def mostrar_info(nombre, edad):
    print(f"Nombre: {nombre}")
    print(f"Edad: {edad}")

def mostrar_promedio(nota1, nota2, nota3):
    promedio = (nota1 + nota2 + nota3) / 3
    print(f"Promedio: {promedio:.2f}")

def mostrar_tabla(numero):
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero * i}")

# Uso
mostrar_info("Ana", 25)
mostrar_promedio(85, 90, 78)
mostrar_tabla(5)
```

---

## Tipo 4: Con parametros, con retorno

Recibe datos y devuelve un resultado.

```python
def calcular_suma(a, b):
    return a + b

resultado = calcular_suma(5, 3)
print(resultado)  # 8
```

### Ejemplos

```python
def calcular_area_rectangulo(base, altura):
    return base * altura

def calcular_descuento(precio, porcentaje):
    return precio * porcentaje / 100

def verificar_mayor(a, b):
    if a > b:
        return a
    else:
        return b

def calcular_promedio(a, b, c):
    return (a + b + c) / 3

# Uso
area = calcular_area_rectangulo(5, 3)
print(area)  # 15

descuento = calcular_descuento(100, 20)
print(descuento)  # 20

mayor = verificar_mayor(10, 20)
print(mayor)  # 20
```

---

## Parametros con valores por defecto

```python
def saludar(nombre="Usuario"):
    print(f"Hola, {nombre}")

saludar()          # Hola, Usuario
saludar("Ana")     # Hola, Ana
```

---

## Parametros variables (*args)

```python
def sumar_todos(*numeros):
    total = 0
    for n in numeros:
        total = total + n
    return total

print(sumar_todos(1, 2, 3))       # 6
print(sumar_todos(1, 2, 3, 4, 5)) # 15
```

---

## Return multiple

Una funcion puede devolver multiple valores.

```python
def operaciones(a, b):
    suma = a + b
    resta = a - b
    return suma, resta

resultado = operaciones(10, 5)
print(resultado)  # (15, 5)

# Desempaquetar
s, r = operaciones(10, 5)
print(s)  # 15
print(r)  # 5
```

---

## Documentacion de funciones (docstring)

```python
def calcular_area_circulo(radio):
    """
    Calcula el area de un circulo.
    
    Parametros:
        radio: el radio del circulo
    
    Retorna:
        El area del circulo
    """
    import math
    return math.pi * radio ** 2
```

---

## Errores comunes

### Olvidar los dos puntos

```python
# ERROR
def saludar
    print("Hola")

# CORRECTO
def saludar():
    print("Hola")
```

### No usar return

```python
# ERROR
def sumar(a, b):
    print(a + b)  # No retorna

resultado = sumar(5, 3)
print(resultado)  # None

# CORRECTO
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)
print(resultado)  # 8
```

### Confundir print con return

```python
# ERROR: la funcion no retorna nada
def suma(a, b):
    print(a + b)

# CORRECTO: la funcion retorna el resultado
def suma(a, b):
    return a + b
```

---

## Resumen de los 4 tipos

| Tipo | Definicion | Llamada |
| --- | --- | --- |
| Sin params, sin retorno | `def nombre():` | `nombre()` |
| Sin params, con retorno | `def nombre(): return x` | `x = nombre()` |
| Con params, sin retorno | `def nombre(a, b):` | `nombre(1, 2)` |
| Con params, con retorno | `def nombre(a, b): return a + b` | `x = nombre(1, 2)` |
