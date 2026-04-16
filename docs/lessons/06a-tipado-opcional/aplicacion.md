# Aplicacion

## Ejercicio 1

### Enunciado

Crear una funcion con type hints que sume dos numeros.

### Solucion en Python

```python
def sumar(a: int, b: int) -> int:
    return a + b

resultado = sumar(5, 3)
print(resultado)  # 8
```

### Explicacion

- `a: int` y `b: int` indican que espera numeros enteros.
- `-> int` indica que retorna un entero.

---

## Ejercicio 2

### Enunciado

Crear una funcion con type hints que muestre un mensaje.

### Solucion en Python

```python
def mostrar_mensaje(mensaje: str) -> None:
    print(mensaje)

mostrar_mensaje("Hola mundo")
```

### Explicacion

- `-> None` indica que no retorna nada.

---

## Ejercicio 3

### Enunciado

Crear una funcion que calcule el area de un rectangulo con type hints.

### Solucion en Python

```python
def calcular_area_rectangulo(base: float, altura: float) -> float:
    return base * altura

area = calcular_area_rectangulo(5.0, 3.0)
print(f"Area: {area}")
```

### Explicacion

- Usa `float` para permitir numeros decimales.
- Retorna un `float`.

---

## Ejercicio 4

### Enunciado

Crear una funcion con type hints que verifique si es mayor de edad.

### Solucion en Python

```python
def es_mayor_de_edad(edad: int) -> bool:
    return edad >= 18

if es_mayor_de_edad(20):
    print("Mayor de edad")
else:
    print("Menor de edad")
```

### Explicacion

- `-> bool` indica que retorna True o False.

---

## Ejercicio 5

### Enunciado

Crear una funcion con type hints que calcule el promedio de una lista.

### Solucion en Python

```python
def calcular_promedio(notas: list[float]) -> float:
    if len(notas) == 0:
        return 0.0
    return sum(notas) / len(notas)

promedio = calcular_promedio([85.0, 90.0, 78.0])
print(f"Promedio: {promedio:.2f}")
```

### Explicacion

- `list[float]` indica una lista de flotantes.
- `Python 3.9+` permite esta sintaxis.

---

## Ejercicio 6

### Enunciado

Crear una funcion con type hints que acepte enteros o flotantes.

### Solucion en Python

```python
def multiplicar(a: int | float, b: int | float) -> int | float:
    return a * b

resultado = multiplicar(5, 3.5)
print(resultado)  # 17.5
```

### Explicacion

- `int | float` acepta ambos tipos.
- Python 3.10+ permite esta sintaxis.

---

## Ejercicio 7

### Enunciado

Crear una funcion con type hints y valor por defecto.

### Solucion en Python

```python
def calcular_descuento(precio: float, porcentaje: float = 10.0) -> float:
    return precio * porcentaje / 100

desc1 = calcular_descuento(100.0)
desc2 = calcular_descuento(100.0, 20.0)

print(desc1)  # 10.0
print(desc2)  # 20.0
```

### Explicacion

- `porcentaje: float = 10.0` tiene un valor por defecto.

---

## Ejercicio 8

### Enunciado

Crear una funcion con type hints que retorne multiple valores.

### Solucion en Python

```python
def operaciones(a: int, b: int) -> tuple[int, int, int]:
    return a + b, a - b, a * b

suma, resta, mul = operaciones(10, 5)
print(f"Suma: {suma}, Resta: {resta}, Mul: {mul}")
```

### Explicacion

- `-> tuple[int, int, int]` indica que retorna 3 enteros.

---

## Ejercicio 9

### Enunciado

Crear una funcion con type hints que acepte parametros variables.

### Solucion en Python

```python
def sumar_todos(*numeros: float) -> float:
    return sum(numeros)

resultado = sumar_todos(1.0, 2.0, 3.0, 4.0)
print(resultado)  # 10.0
```

### Explicacion

- `*numeros: float` acepta cualquier cantidad de flotantes.

---

## Ejercicio 10

### Enunciado

Crear una funcion con type hints que tenga un parametro opcional.

### Solucion en Python

```python
def saludar(nombre: str | None = None) -> str:
    if nombre is None:
        return "Hola!"
    return f"Hola, {nombre}!"

print(saludar())           # Hola!
print(saludar("Ana"))      # Hola, Ana!
```

### Explicacion

- `nombre: str | None = None` es opcional.

---

## Ejercicio 11

### Enunciado

Crear una funcion con type hints para una calculadora simple.

### Solucion en Python

```python
def calculadora(a: float, b: float, operacion: str) -> float:
    if operacion == "+":
        return a + b
    elif operacion == "-":
        return a - b
    elif operacion == "*":
        return a * b
    elif operacion == "/":
        if b != 0:
            return a / b
        else:
            return 0.0
    else:
        return 0.0

print(calculadora(10, 5, "+"))  # 15.0
print(calculadora(10, 5, "*"))  # 50.0
```

### Explicacion

- Varios parametros con diferentes tipos.
- Retorna float.

---

## Ejercicio 12

### Enunciado

Crear una funcion con type hints que valide un correo.

### Solucion en Python

```python
def validar_correo(correo: str) -> bool:
    return "@" in correo and "." in correo

if validar_correo("ana@correo.com"):
    print("Correo valido")
else:
    print("Correo invalido")
```

### Explicacion

- Recibe un string.
- Retorna un booleano.

---

## Ejercicio 13

### Enunciado

Crear una funcion con type hints que convierta temperatura.

### Solucion en Python

```python
def celsius_a_fahrenheit(celsius: float) -> float:
    return celsius * 9 / 5 + 32

def fahrenheit_a_celsius(fahrenheit: float) -> float:
    return (fahrenheit - 32) * 5 / 9

print(celsius_a_fahrenheit(25))      # 77.0
print(fahrenheit_a_celsius(77))      # 25.0
```

### Explicacion

- Dos funciones con type hints.
- Entrada y salida son floats.

---

## Ejercicio 14

### Enunciado

Crear una funcion con type hints que procese un diccionario simple.

### Solucion en Python

```python
from typing import Dict

def obtener_nombre(persona: Dict[str, str]) -> str:
    return persona.get("nombre", "Desconocido")

persona = {"nombre": "Ana", "edad": "25"}
print(obtener_nombre(persona))  # Ana
```

### Explicacion

- `Dict[str, str]` indica un diccionario con claves y valores string.

---

## Ejercicio 15

### Enunciado

Crear una funcion con type hints para clasificar una nota.

### Solucion en Python

```python
def clasificar_nota(nota: float) -> str:
    if nota >= 90:
        return "A"
    elif nota >= 80:
        return "B"
    elif nota >= 70:
        return "C"
    elif nota >= 60:
        return "D"
    else:
        return "F"

print(clasificar_nota(85.5))  # B
```

### Explicacion

- Recibe float, retorna str.
