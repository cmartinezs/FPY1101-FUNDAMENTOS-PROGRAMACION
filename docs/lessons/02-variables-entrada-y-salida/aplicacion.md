# Aplicacion

## Ejercicio 1

### Enunciado

Pedir el nombre del usuario y mostrar un saludo personalizado.

### Solucion en Python

```python
nombre = input("Ingresa tu nombre: ")
print("Hola,", nombre, "bienvenido!")
```

### Explicacion

- `input()` solicita el nombre al usuario.
- El valor se guarda en la variable `nombre`.
- `print()` muestra el saludo usando comas para separar argumentos.

## Ejercicio 2

### Enunciado

Pedir un numero y mostrar su doble.

### Solucion en Python

```python
numero = int(input("Ingresa un numero: "))
doble = numero * 2
print("El doble es:", doble)
```

### Explicacion

- `int()` convierte el texto a numero entero.
- Se multiplica por 2 para obtener el doble.
- Se guarda en una variable y se muestra.

## Ejercicio 3

### Enunciado

Pedir dos numeros y mostrar su suma, resta, multiplicacion y division.

### Solucion en Python

```python
numero_1 = float(input("Ingresa el primer numero: "))
numero_2 = float(input("Ingresa el segundo numero: "))

print("Suma:", numero_1 + numero_2)
print("Resta:", numero_1 - numero_2)
print("Multiplicacion:", numero_1 * numero_2)
print("Division:", numero_1 / numero_2)
```

### Explicacion

- Se usa `float()` para permitir numeros decimales.
- Cada operacion se muestra en una linea separada.
- La division siempre da un resultado decimal.

## Ejercicio 4

### Enunciado

Pedir el nombre y la edad de una persona, luego mostrar los datos.

### Solucion en Python

```python
nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingresa tu edad: "))

print(f"{nombre} tiene {edad} años")
```

### Explicacion

- Se usan dos tipos diferentes: `str` y `int`.
- f-string permite integrar variables en el texto.
- La edad se convierte a entero.

## Ejercicio 5

### Enunciado

Pedir una temperatura en Celsius y convertirla a Fahrenheit.

### Solucion en Python

```python
celsius = float(input("Temperatura en Celsius: "))
fahrenheit = celsius * 9 / 5 + 32
print(f"{celsius}°C equivalen a {fahrenheit}°F")
```

### Explicacion

- Se aplica la formula de conversion.
- Se usa f-string para mostrar el resultado con texto.

## Ejercicio 6

### Enunciado

Pedir el precio de un producto y calcular el precio final con IVA (19%).

### Solucion en Python

```python
precio = float(input("Precio sin IVA: "))
iva = precio * 0.19
precio_final = precio + iva

print(f"Precio final: ${precio_final:.2f}")
```

### Explicacion

- Se calcula el 19% del precio.
- Se suma al precio original.
- `.2f` limita el resultado a 2 decimales.

## Ejercicio 7

### Enunciado

Pedir el radio de un circulo y mostrar su area.

### Solucion en Python

```python
radio = float(input("Radio del circulo: "))
area = 3.14159 * radio ** 2
print(f"El area es: {area:.2f}")
```

### Explicacion

- `radio ** 2` eleva al cuadrado.
- Se multiplica por pi (3.14159).
- Se muestra con 2 decimales.

## Ejercicio 8

### Enunciado

Pedir el ancho y largo de un rectangulo y mostrar su area y perimetro.

### Solucion en Python

```python
ancho = float(input("Ancho: "))
largo = float(input("Largo: "))

area = ancho * largo
perimetro = 2 * (ancho + largo)

print(f"Area: {area}")
print(f"Perimetro: {perimetro}")
```

### Explicacion

- Area = ancho × largo.
- Perimetro = 2 × (ancho + largo).

## Ejercicio 9

### Enunciado

Pedir dos numeros y mostrar cual es mayor.

### Solucion en Python

```python
numero_1 = int(input("Primer numero: "))
numero_2 = int(input("Segundo numero: "))

if numero_1 > numero_2:
    print("El mayor es:", numero_1)
else:
    print("El mayor es:", numero_2)
```

### Explicacion

- Se comparan los dos numeros con `>`.
- `if` y `else`决定 cual se muestra.
- Se usa `int()` para comparar como numeros.

## Ejercicio 10

### Enunciado

Pedir una nota (0-100) y mostrar si esta aprobada (>=60) o reprobada.

### Solucion en Python

```python
nota = int(input("Ingresa tu nota: "))

if nota >= 60:
    print("Aprobado")
else:
    print("Reprobado")
```

### Explicacion

- Se usa una condicion simple.
- Si la nota es 60 o mas, esta aprobada.
- De lo contrario, esta reprobada.

## Ejercicio 11

### Enunciado

Pedir la base y altura de un triangulo y mostrar su area.

### Solucion en Python

```python
base = float(input("Base del triangulo: "))
altura = float(input("Altura del triangulo: "))
area = (base * altura) / 2

print(f"El area es: {area:.2f}")
```

### Explicacion

- La formula es (base × altura) / 2.
- Se usa paréntesis para asegurar el orden correcto.

## Ejercicio 12

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

- `%` calcula el residuo de la division por 2.
- Si el residuo es 0, el numero es par.
- Si no, es impar.
