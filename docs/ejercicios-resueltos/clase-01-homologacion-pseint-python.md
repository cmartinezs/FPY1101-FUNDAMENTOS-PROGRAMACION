# Ejercicios resueltos - Clase 01

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
- Ese dato se guarda en `nombre`.
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

