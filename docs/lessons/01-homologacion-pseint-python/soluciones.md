# Soluciones de referencia

Estas soluciones son ejemplos posibles. Intenta resolver cada ejercicio antes de revisarlas.

## Ejercicios guiados

### 1. Apellido del usuario

```python
apellido = input("Ingrese su apellido: ")
print("Su apellido es:", apellido)
```

### 2. Doble de un número

```python
numero = int(input("Ingrese un número: "))
doble = numero * 2
print("El doble es:", doble)
```

### 3. Resta de dos números

```python
numero_1 = int(input("Ingrese el primer número: "))
numero_2 = int(input("Ingrese el segundo número: "))
resta = numero_1 - numero_2
print("La resta es:", resta)
```

### 4. Mayor o menor de edad

```python
edad = int(input("Ingrese su edad: "))

if edad >= 18:
    print("Es mayor de edad")
else:
    print("Es menor de edad")
```

### 5. Suma, multiplicación y residuo

```python
numero_1 = int(input("Ingrese el primer número: "))
numero_2 = int(input("Ingrese el segundo número: "))

print("Suma:", numero_1 + numero_2)
print("Multiplicación:", numero_1 * numero_2)
print("Residuo:", numero_1 % numero_2)
```

## Ejercicio integrador

```python
nombre = input("Nombre del estudiante: ")

print("1. Sumar")
print("2. Restar")
opcion = int(input("Elija una opción: "))

numero_1 = int(input("Ingrese el primer número: "))
numero_2 = int(input("Ingrese el segundo número: "))

if opcion == 1:
    resultado = numero_1 + numero_2
    print("Resultado:", resultado)
elif opcion == 2:
    resultado = numero_1 - numero_2
    print("Resultado:", resultado)
else:
    print("Opción no válida")

if numero_1 > numero_2:
    print(nombre, "ingresó primero el número mayor")
else:
    print(nombre, "no ingresó primero el número mayor")

for contador in range(1, 4):
    print("Repetición", contador)
```

