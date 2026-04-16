# Aplicacion

## Ejercicio 1

### Enunciado

Pedir una edad y mostrar si la persona es mayor o menor de edad.

### Solucion en Python

```python
edad = int(input("Edad: "))

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

### Explicacion

- Se pide la edad y se convierte a entero.
- `if` verifica si es mayor o igual a 18.
- `else` cubre el caso contrario.

## Ejercicio 2

### Enunciado

Pedir un numero y mostrar si es positivo, negativo o cero.

### Solucion en Python

```python
numero = int(input("Numero: "))

if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Cero")
```

### Explicacion

- `if` evalua si es mayor a 0.
- `elif` evalua si es menor a 0.
- `else` cubre el caso restante (cero).

## Ejercicio 3

### Enunciado

Pedir dos numeros y mostrar cual es mayor.

### Solucion en Python

```python
num1 = int(input("Primer numero: "))
num2 = int(input("Segundo numero: "))

if num1 > num2:
    print("El mayor es:", num1)
elif num2 > num1:
    print("El mayor es:", num2)
else:
    print("Son iguales")
```

### Explicacion

- Se comparan los dos numeros.
- Si el primero es mayor, se muestra.
- Si el segundo es mayor, se muestra.
- Si son iguales, se usa el caso `else`.

## Ejercicio 4

### Enunciado

Pedir una nota (0-100) y mostrar la letra corresponding: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

### Solucion en Python

```python
nota = int(input("Nota: "))

if nota >= 90:
    print("A")
elif nota >= 80:
    print("B")
elif nota >= 70:
    print("C")
elif nota >= 60:
    print("D")
else:
    print("F")
```

### Explicacion

- Las condiciones se evaluan en orden.
- No es necesario verificar el limite superior cada vez porque ya paso las condiciones anteriores.

## Ejercicio 5

### Enunciado

Pedir la edad y si tiene licencia, y mostrar si puede conducir.

### Solucion en Python

```python
edad = int(input("Edad: "))
tiene_licencia = input("Tiene licencia? (s/n): ") == "s"

if edad >= 18 and tiene_licencia:
    print("Puede conducir")
else:
    print("No puede conducir")
```

### Explicacion

- Se usa `and` para combinar dos condiciones.
- Ambas deben ser verdaderas para que pueda conducir.

## Ejercicio 6

### Enunciado

Pedir un año y verificar si es bisiesto (divisible por 4, excepto los divisible por 100 unless also divisible by 400).

### Solucion en Python

```python
anio = int(input("Año: "))

if (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0):
    print("Bisiesto")
else:
    print("No bisiesto")
```

### Explicacion

- Un año es bisiesto si es divisible por 4 Y NO es divisible por 100.
- O si es divisible por 400.

## Ejercicio 7

### Enunciado

Pedir un numero y verificar si es par Y mayor a 10.

### Solucion en Python

```python
numero = int(input("Numero: "))

if numero % 2 == 0 and numero > 10:
    print("Cumple ambas condiciones")
else:
    print("No cumple las condiciones")
```

### Explicacion

- `% 2 == 0` verifica si es par.
- `and` requiere que ambas condiciones sean verdaderas.

## Ejercicio 8

### Enunciado

Pedir una opcion (1-3) y mostrar un mensaje diferente para cada una.

### Solucion en Python

```python
opcion = int(input("Opcion (1-3): "))

if opcion == 1:
    print("Agregar")
elif opcion == 2:
    print("Modificar")
elif opcion == 3:
    print("Eliminar")
else:
    print("Opcion invalida")
```

### Explicacion

- `if` y `elif` verifican cada opcion.
- `else` captura cualquier valor diferente de 1, 2 o 3.

## Ejercicio 9

### Enunciado

Pedir el precio de una compra y aplicar un descuento: 20% si > $500, 10% si > $200, sin descuento otherwise.

### Solucion en Python

```python
precio = float(input("Precio: "))

if precio > 500:
    descuento = precio * 0.20
elif precio > 200:
    descuento = precio * 0.10
else:
    descuento = 0

print(f"Descuento: ${descuento}")
print(f"Total: ${precio - descuento}")
```

### Explicacion

- Se evalua en orden de mayor a menor.
- El descuento se calcula segun el rango.

## Ejercicio 10

### Enunciado

Pedir un caracter y verificar si es vocal (a, e, i, o, u).

### Solucion en Python

```python
letra = input("Letra: ").lower()

if letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u":
    print("Es vocal")
else:
    print("No es vocal")
```

### Explicacion

- `lower()` convierte a minuscula para aceptar mayusculas.
- `or` conecta las 5 condiciones posibles.

## Ejercicio 11

### Enunciado

Pedir la edad y el genero, y mostrar la categoria deportiva: Masculino + 18 = Adulto Masculino, Femenino + 18 = Adulto Femenino, otherwise = Juvenil.

### Solucion en Python

```python
edad = int(input("Edad: "))
genero = input("Genero (m/f): ").lower()

if edad >= 18 and genero == "m":
    print("Adulto Masculino")
elif edad >= 18 and genero == "f":
    print("Adulto Femenino")
else:
    print("Juvenil")
```

### Explicacion

- Se combinan `and` con cada condicion.
- Las condiciones se encadenan con `elif`.

## Ejercicio 12

### Enunciado

Pedir dos numeros y verificar si ambos son positivos.

### Solucion en Python

```python
num1 = int(input("Numero 1: "))
num2 = int(input("Numero 2: "))

if num1 > 0 and num2 > 0:
    print("Ambos son positivos")
else:
    print("Al menos uno no es positivo")
```

### Explicacion

- `and` exige que las dos condiciones sean verdaderas.

## Ejercicio 13

### Enunciado

Pedir una temperatura y mostrar el estado del clima: Frio (<10), Templado (10-25), Calor (>25).

### Solucion en Python

```python
temp = int(input("Temperatura: "))

if temp < 10:
    print("Frio")
elif temp <= 25:
    print("Templado")
else:
    print("Calor")
```

### Explicacion

- Se definen tres rangos excluyentes.
- Las condiciones se evaluan en orden.

## Ejercicio 14

### Enunciado

Usando la tabla de verdad, verificar que `not (A and B)` es igual a `(not A) or (not B)`.

### Solucion en Python

```python
A = True
B = False

print("A and B:", A and B)
print("not (A and B):", not (A and B))
print()
print("not A:", not A)
print("not B:", not B)
print("(not A) or (not B):", (not A) or (not B))
```

### Explicacion

- Esta es la Ley de De Morgan.
- `not (A and B)` = `(not A) or (not B)`
- `not (A or B)` = `(not A) and (not B)`

## Ejercicio 15

### Enunciado

Pedir un numero y verificar si esta en el rango de 1 a 100 (inclusive).

### Solucion en Python

```python
numero = int(input("Numero: "))

if numero >= 1 and numero <= 100:
    print("Esta en el rango 1-100")
else:
    print("Esta fuera del rango")
```

### Explicacion

- Se usan dos comparaciones con `and`.
- Tambien se puede escribir: `1 <= numero <= 100`.
