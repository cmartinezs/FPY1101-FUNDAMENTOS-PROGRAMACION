# Aplicacion

## Ejercicio 1

### Enunciado

Mostrar los numeros del 1 al 5 usando while.

### Solucion en Python

```python
contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1
```

### Explicacion

- Se inicializa el contador en 1.
- Mientras sea menor o igual a 5, se muestra y se incrementa.

## Ejercicio 2

### Enunciado

Mostrar los numeros del 1 al 5 usando for y range().

### Solucion en Python

```python
for i in range(1, 6):
    print(i)
```

### Explicacion

- `range(1, 6)` genera 1, 2, 3, 4, 5.
- El limite superior (6) no se incluye.

## Ejercicio 3

### Enunciado

Pedir un numero positivo. Si ingresa negativo o cero, seguir pidiendo.

### Solucion en Python

```python
numero = 0

while numero <= 0:
    numero = int(input("Ingresa un numero positivo: "))

print("El numero es:", numero)
```

### Explicacion

- El ciclo se repite mientras el numero sea menor o igual a 0.
- Solo termina cuando el usuario ingresa un numero positivo.

## Ejercicio 4

### Enunciado

Crear un menu ciclico que muestre opciones hasta que el usuario elija salir.

### Solucion en Python

```python
opcion = 0

while opcion != 3:
    print("=== MENU ===")
    print("1. Saludar")
    print("2. Despedirse")
    print("3. Salir")
    
    opcion = int(input("Opcion: "))
    
    if opcion == 1:
        print("Hola!")
    elif opcion == 2:
        print("Chao!")
    elif opcion == 3:
        print("Fin del programa")
    else:
        print("Opcion invalida")
```

### Explicacion

- El menu se muestra repetidamente.
- Cuando opcion es 3, el ciclo termina.

## Ejercicio 5

### Enunciado

Calcular la suma de los primeros 10 numeros naturales.

### Solucion en Python

```python
suma = 0

for i in range(1, 11):
    suma = suma + i

print("La suma es:", suma)
```

### Explicacion

- Se usa un acumulador (`suma`) para ir sumando cada numero.

## Ejercicio 6

### Enunciado

Pedir una contrasena hasta que el usuario ingrese "python123".

### Solucion en Python

```python
contrasena = ""

while contrasena != "python123":
    contrasena = input("Ingresa la contrasena: ")

print("Acceso concedido")
```

### Explicacion

- El ciclo se repite hasta que la contrasena sea correcta.

## Ejercicio 7

### Enunciado

Mostrar solo los numeros pares del 1 al 10.

### Solucion en Python

```python
for i in range(2, 11, 2):
    print(i)
```

### Explicacion

- `range(2, 11, 2)` genera: 2, 4, 6, 8, 10.

## Ejercicio 8

### Enunciado

Pedir un nombre que no este vacio.

### Solucion en Python

```python
nombre = ""

while nombre == "":
    nombre = input("Ingresa tu nombre: ")

print("Hola", nombre)
```

### Explicacion

- El ciclo se repite mientras el nombre sea una cadena vacia.

## Ejercicio 9

### Enunciado

Crear un menu con while True y break para salir.

### Solucion en Python

```python
while True:
    print("=== MENU ===")
    print("1. Ver hora")
    print("2. Ver fecha")
    print("3. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion == "1":
        print("Son las 10:00")
    elif opcion == "2":
        print("Hoy es 15 de abril")
    elif opcion == "3":
        print("Chao")
        break
    else:
        print("Opcion invalida")
```

### Explicacion

- `while True` crea un ciclo infinito.
- `break` termina el ciclo cuando el usuario elige salir.

## Ejercicio 10

### Enunciado

Usar continue para mostrar los numeros del 1 al 5, saltandose el 3.

### Solucion en Python

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

### Explicacion

- `continue` salta a la siguiente iteracion cuando i es 3.

## Ejercicio 11

### Enunciado

Pedir una edad valida entre 0 y 120.

### Solucion en Python

```python
edad = -1

while edad < 0 or edad > 120:
    edad = int(input("Edad (0-120): "))

print("Tu edad es:", edad)
```

### Explicacion

- El ciclo verifica que la edad esté en el rango valido.

## Ejercicio 12

### Enunciado

Crear una calculadora con menu ciclico.

### Solucion en Python

```python
while True:
    print("1. Sumar")
    print("2. Restar")
    print("3. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion == "3":
        print("Chao")
        break
    
    if opcion in ["1", "2"]:
        a = float(input("Numero 1: "))
        b = float(input("Numero 2: "))
        
        if opcion == "1":
            print("Resultado:", a + b)
        else:
            print("Resultado:", a - b)
    else:
        print("Opcion invalida")
```

### Explicacion

- Se valida que la opcion sea valida.
- Se sale con break.

## Ejercicio 13

### Enunciado

Contar los digitos de un numero usando un ciclo.

### Solucion en Python

```python
numero = int(input("Numero: "))
contador = 0

while numero > 0:
    numero = numero // 10
    contador = contador + 1

print("Tiene", contador, "digitos")
```

### Explicacion

- Se divide por 10 repetidamente hasta que el numero sea 0.
- Cada division cuenta un digito.

## Ejercicio 14

### Enunciado

Invertir un numero usando un ciclo.

### Solucion en Python

```python
numero = int(input("Numero: "))
invertido = 0

while numero > 0:
    digito = numero % 10
    invertido = invertido * 10 + digito
    numero = numero // 10

print("Invertido:", invertido)
```

### Explicacion

- Se extrae cada digito con `% 10`.
- Se construye el numero invertido.

## Ejercicio 15

### Enunciado

Crear un menu con confirmacion para salir.

### Solucion en Python

```python
while True:
    print("=== SISTEMA ===")
    print("1. Ingresar datos")
    print("2. Buscar")
    print("3. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion == "1":
        print("Ingresando datos...")
    elif opcion == "2":
        print("Buscando...")
    elif opcion == "3":
        respuesta = input("Estas seguro de salir? (s/n): ")
        if respuesta == "s":
            print("Chao")
            break
    else:
        print("Opcion invalida")
```

### Explicacion

- Se pide confirmacion antes de salir.
- Solo sale si el usuario confirma con "s".
