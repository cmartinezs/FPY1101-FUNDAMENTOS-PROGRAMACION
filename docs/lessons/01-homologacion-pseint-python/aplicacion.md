# Aplicacion

## Ejercicio 1

### Enunciado

Pedir el nombre del estudiante y mostrar un saludo.

### Solucion en Python

```python
nombre = input("Ingresa tu nombre: ")
print("Hola,", nombre)
```

### Explicacion

- `input()` lee un dato escrito por el usuario.
- El dato se guarda en la variable `nombre`.
- `print()` muestra el saludo.

## Ejercicio 2

### Enunciado

Pedir dos numeros y mostrar su suma.

### Solucion en Python

```python
numero_1 = int(input("Ingresa el primer numero: "))
numero_2 = int(input("Ingresa el segundo numero: "))
print("La suma es:", numero_1 + numero_2)
```

### Explicacion

- Cada dato se lee con `input()`.
- Se convierte a entero con `int()`.
- Luego se muestra el resultado de la suma.

## Ejercicio 3

### Enunciado

Pedir dos numeros y mostrar suma, resta, multiplicacion, division y residuo.

### Solucion en Python

```python
numero_1 = int(input("Ingresa el primer numero: "))
numero_2 = int(input("Ingresa el segundo numero: "))

print("Suma:", numero_1 + numero_2)
print("Resta:", numero_1 - numero_2)
print("Multiplicacion:", numero_1 * numero_2)
print("Division:", numero_1 / numero_2)
print("Residuo:", numero_1 % numero_2)
```

### Explicacion

- Aqui se usan operadores aritmeticos.
- `%` permite obtener el residuo de una division.

## Ejercicio 4

### Enunciado

Pedir una edad y decir si la persona es mayor o menor de edad.

### Solucion en Python

```python
edad = int(input("Ingresa tu edad: "))

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

### Explicacion

- Se usa una condicion con `if`.
- Si la condicion es verdadera, se ejecuta el primer bloque.
- Si no, se ejecuta `else`.

## Ejercicio 5

### Enunciado

Pedir una opcion numerica y mostrar una accion equivalente a un menu simple.

### Solucion en Python

```python
opcion = int(input("Ingresa una opcion: "))

if opcion == 1:
    print("Agregar")
elif opcion == 2:
    print("Modificar")
elif opcion == 3:
    print("Eliminar")
else:
    print("Opcion no valida")
```

### Explicacion

- Este ejercicio homologa el `Segun` de PSeInt.
- En Python inicial se puede resolver con `if`, `elif` y `else`.

## Ejercicio 6

### Enunciado

Mostrar los numeros del 1 al 5.

### Solucion en Python

```python
for i in range(1, 6):
    print(i)
```

### Explicacion

- `for` reemplaza al `Para`.
- `range(1, 6)` genera los valores del 1 al 5.

## Ejercicio 7

### Enunciado

Pedir numeros hasta que el usuario ingrese uno positivo.

### Solucion en Python

```python
numero = 0

while numero <= 0:
    numero = int(input("Ingresa un numero positivo: "))
```

### Explicacion

- Este ejercicio sirve para homologar `Repetir ... Hasta Que`.
- Python no tiene esa estructura exacta, pero se puede representar con `while`.

## Ejercicio 8

### Enunciado

Pedir la edad y si la persona tiene carnet, y mostrar si puede conducir.

### Solucion en Python

```python
edad = int(input("Ingresa tu edad: "))
tiene_carnet = input("Tiene carnet? (si/no): ") == "si"

if edad >= 18 and tiene_carnet:
    print("Puede conducir")
else:
    print("No puede conducir")
```

### Explicacion

- `>=` es un operador de comparacion.
- `and` es un operador logico.
- `==` compara el texto ingresado con `"si"`.

