# Aplicacion

## Ejercicio 1

### Enunciado

Crear una lista con 5 frutas y mostrarlas todas.

### Solucion en Python

```python
frutas = ["manzana", "pera", "uva", "naranja", "kiwi"]

for fruta in frutas:
    print(fruta)
```

### Explicacion

- Se crea la lista con los elementos directamente.
- Se recorre con `for` para mostrar cada uno.

## Ejercicio 2

### Enunciado

Pedir 5 notas al usuario, guardarlas en una lista y mostrar el promedio.

### Solucion en Python

```python
notas = []

for i in range(1, 6):
    nota = float(input(f"Nota {i}: "))
    notas.append(nota)

promedio = sum(notas) / len(notas)
print("Promedio:", promedio)
```

### Explicacion

- Se usa `append()` para agregar cada nota a la lista.
- `sum()` suma todos los elementos y `len()` da la cantidad.

## Ejercicio 3

### Enunciado

Crear una lista de numeros y mostrar el mayor y el menor.

### Solucion en Python

```python
numeros = [4, 7, 2, 9, 1, 5]

print("Mayor:", max(numeros))
print("Menor:", min(numeros))
```

### Explicacion

- `max()` y `min()` recorren la lista y devuelven el valor extremo.

## Ejercicio 4

### Enunciado

Pedir nombres al usuario hasta que escriba "fin", guardarlos en una lista y mostrarlos numerados.

### Solucion en Python

```python
nombres = []

nombre = input("Nombre (o 'fin' para terminar): ")

while nombre != "fin":
    nombres.append(nombre)
    nombre = input("Nombre (o 'fin' para terminar): ")

for i in range(len(nombres)):
    print(i + 1, "-", nombres[i])
```

### Explicacion

- El ciclo `while` recoge nombres hasta que el usuario escriba "fin".
- Se recorre con `range(len(nombres))` para mostrar el numero de orden.

## Ejercicio 5

### Enunciado

Crear un diccionario con los datos de un estudiante y mostrarlo.

### Solucion en Python

```python
estudiante = {
    "nombre": "Ana",
    "edad": 20,
    "carrera": "Informatica",
    "promedio": 88.5
}

for clave, valor in estudiante.items():
    print(clave, ":", valor)
```

### Explicacion

- `items()` devuelve cada par clave-valor del diccionario.

## Ejercicio 6

### Enunciado

Pedir nombre, edad y ciudad al usuario y guardarlo en un diccionario. Luego mostrar cada dato.

### Solucion en Python

```python
persona = {}

persona["nombre"] = input("Nombre: ")
persona["edad"] = int(input("Edad: "))
persona["ciudad"] = input("Ciudad: ")

print("Datos ingresados:")
print("Nombre:", persona["nombre"])
print("Edad:", persona["edad"])
print("Ciudad:", persona["ciudad"])
```

### Explicacion

- Se puede agregar claves a un diccionario vacio una a una.

## Ejercicio 7

### Enunciado

Contar cuantos numeros pares hay en una lista.

### Solucion en Python

```python
numeros = [1, 2, 3, 4, 5, 6, 7, 8]
pares = 0

for n in numeros:
    if n % 2 == 0:
        pares = pares + 1

print("Numeros pares:", pares)
```

### Explicacion

- Se recorre la lista y se cuenta cada numero que sea divisible por 2.

## Ejercicio 8

### Enunciado

Buscar si un nombre existe en una lista y mostrar su posicion.

### Solucion en Python

```python
nombres = ["Ana", "Luis", "Maria", "Pedro"]
buscado = input("Nombre a buscar: ")

if buscado in nombres:
    posicion = nombres.index(buscado)
    print(buscado, "esta en la posicion", posicion)
else:
    print(buscado, "no esta en la lista")
```

### Explicacion

- `in` verifica si el elemento existe.
- `index()` devuelve la posicion del primer elemento encontrado.

## Ejercicio 9

### Enunciado

Crear una lista de diccionarios con 3 productos (nombre y precio), luego mostrar todos.

### Solucion en Python

```python
productos = [
    {"nombre": "Lapiz", "precio": 500},
    {"nombre": "Cuaderno", "precio": 1500},
    {"nombre": "Mochila", "precio": 12000}
]

for producto in productos:
    print(producto["nombre"], "-", "$" + str(producto["precio"]))
```

### Explicacion

- Cada elemento de la lista es un diccionario con sus propios datos.
- Se accede a cada campo con la clave correspondiente.

## Ejercicio 10

### Enunciado

Pedir productos y precios al usuario, guardarlos en una lista de diccionarios y mostrar el producto mas caro.

### Solucion en Python

```python
productos = []

cantidad = int(input("Cuantos productos? "))

for i in range(cantidad):
    nombre = input(f"Nombre del producto {i + 1}: ")
    precio = float(input(f"Precio del producto {i + 1}: "))
    productos.append({"nombre": nombre, "precio": precio})

mas_caro = productos[0]

for producto in productos:
    if producto["precio"] > mas_caro["precio"]:
        mas_caro = producto

print("Producto mas caro:", mas_caro["nombre"], "-", mas_caro["precio"])
```

### Explicacion

- Se asume el primero como el mas caro y se compara con los demas.
- Al final, `mas_caro` guarda el diccionario completo del producto con mayor precio.

## Ejercicio 11

### Enunciado

Calcular el promedio de las notas almacenadas en una lista de diccionarios.

### Solucion en Python

```python
estudiantes = [
    {"nombre": "Ana", "nota": 85},
    {"nombre": "Luis", "nota": 90},
    {"nombre": "Maria", "nota": 70},
    {"nombre": "Pedro", "nota": 60}
]

total = 0

for estudiante in estudiantes:
    total = total + estudiante["nota"]

promedio = total / len(estudiantes)
print(f"Promedio del curso: {promedio:.2f}")
```

### Explicacion

- Se acumula la nota de cada diccionario en `total`.
- Se divide por `len()` para obtener el promedio.

## Ejercicio 12

### Enunciado

Eliminar todos los numeros negativos de una lista.

### Solucion en Python

```python
numeros = [3, -1, 7, -4, 5, -2, 8]
positivos = []

for n in numeros:
    if n >= 0:
        positivos.append(n)

print("Lista sin negativos:", positivos)
```

### Explicacion

- Se construye una nueva lista con solo los elementos que cumplen la condicion.
