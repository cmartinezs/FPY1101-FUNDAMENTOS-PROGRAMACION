# Aplicacion

## Ejercicio 1

### Enunciado

Pedir un numero al usuario y mostrar su tipo usando `type()`.

### Solucion en Python

```python
numero = input("Ingresa un numero: ")
print(type(numero))
```

### Explicacion

- `input()` siempre devuelve `str` (texto).
- `type()` muestra el tipo de la variable.

## Ejercicio 2

### Enunciado

Pedir un numero, convertirlo a entero y mostrar el tipo antes y despues.

### Solucion en Python

```python
numero = input("Ingresa un numero: ")
print("Tipo antes:", type(numero))

numero = int(numero)
print("Tipo despues:", type(numero))
```

### Explicacion

- Antes de convertir, es `str`.
- Despues de `int()`, es `int`.

## Ejercicio 3

### Enunciado

Pedir la base y altura de un triangulo, calcular el area y mostrar el resultado con 2 decimales.

### Solucion en Python

```python
base = float(input("Base: "))
altura = float(input("Altura: "))
area = (base * altura) / 2

print(f"El area es: {area:.2f}")
```

### Explicacion

- Se convierten a `float` para permitir decimales.
- `.2f` formatea el resultado a 2 decimales.

## Ejercicio 4

### Enunciado

Pedir un texto y verificar si es un numero usando `isdigit()`.

### Solucion en Python

```python
texto = input("Ingresa un valor: ")

if texto.isdigit():
    print("Es un numero")
else:
    print("No es un numero")
```

### Explicacion

- `isdigit()` devuelve `True` si el texto es solo digitos.

## Ejercicio 5

### Enunciado

Pedir un numero decimal, convertirlo a entero y mostrar el resultado.

### Solucion en Python

```python
numero = float(input("Ingresa un decimal: "))
entero = int(numero)

print(f"El numero entero es: {entero}")
```

### Explicacion

- `float()` lee el decimal.
- `int()` lo convierte a entero (sin redondeo, solo corta la parte decimal).

## Ejercicio 6

### Enunciado

Pedir un numero y mostrar su valor absoluto.

### Solucion en Python

```python
numero = int(input("Ingresa un numero: "))

if numero < 0:
    numero = -numero

print(f"El valor absoluto es: {numero}")
```

### Explicacion

- Si el numero es negativo, se multiplica por -1.
- Tambien se puede usar `abs(numero)`.

## Ejercicio 7

### Enunciado

Pedir una oracion y mostrar la oracion en mayusculas, minusculas y capitalizada.

### Solucion en Python

```python
oracion = input("Ingresa una oracion: ")

print("Mayusculas:", oracion.upper())
print("Minusculas:", oracion.lower())
print("Capitalizada:", oracion.capitalize())
```

### Explicacion

- `upper()` convierte a mayusculas.
- `lower()` convierte a minusculas.
- `capitalize()` pone la primera letra en mayuscula.

## Ejercicio 8

### Enunciado

Pedir dos numeros (texto), convertirlos y mostrar la suma.

### Solucion en Python

```python
num1 = input("Primer numero: ")
num2 = input("Segundo numero: ")

resultado = int(num1) + int(num2)
print(f"La suma es: {resultado}")
```

### Explicacion

- Se convierten los textos a enteros antes de operar.

## Ejercicio 9

### Enunciado

Pedir un numero y mostrar su representacion en binario y hexadecimal.

### Solucion en Python

```python
numero = int(input("Ingresa un numero: "))

print(f"Binario: {bin(numero)}")
print(f"Hexadecimal: {hex(numero)}")
```

### Explicacion

- `bin()` convierte a binario (0b...).
- `hex()` convierte a hexadecimal (0x...).

## Ejercicio 10

### Enunciado

Pedir un valor y verificar si es booleano usando `bool()`.

### Solucion en Python

```python
valor = input("Ingresa un valor: ")
es_verdadero = bool(valor)

print(f"El valor se evalua como: {es_verdadero}")
```

### Explicacion

- Cadenas vacias dan `False`.
- Cadenas no vacias dan `True`.

## Ejercicio 11

### Enunciado

Pedir un texto y mostrar su longitud.

### Solucion en Python

```python
texto = input("Ingresa un texto: ")
print(f"La longitud es: {len(texto)}")
```

### Explicacion

- `len()` cuenta los caracteres.

## Ejercicio 12

### Enunciado

Pedir un nombre y verificar si contiene la letra "a".

### Solucion en Python

```python
nombre = input("Ingresa tu nombre: ")

if "a" in nombre:
    print("El nombre contiene la letra 'a'")
else:
    print("El nombre no contiene la letra 'a'")
```

### Explicacion

- `in` verifica si un substring existe en el string.

## Ejercicio 13

### Enunciado

Pedir un numero flotante y mostrarlo formateado a 3 decimales.

### Solucion en Python

```python
numero = float(input("Ingresa un decimal: "))
print(f"Formateado: {numero:.3f}")
```

### Explicacion

- `: .3f` limita a 3 decimales.

## Ejercicio 14

### Enunciado

Pedir un texto y mostrar los primeros 3 caracteres.

### Solucion en Python

```python
texto = input("Ingresa un texto: ")
print(f"Primeros 3: {texto[:3]}")
```

### Explicacion

- `[:3]` toma los caracteres desde el inicio hasta la posicion 3.

## Ejercicio 15

### Enunciado

Pedir un numero y mostrar si es par o impar.

### Solucion en Python

```python
numero = int(input("Ingresa un numero: "))

if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")
```

### Explicacion

- `%` obtiene el residuo de la division por 2.
- Si es 0, es par.
