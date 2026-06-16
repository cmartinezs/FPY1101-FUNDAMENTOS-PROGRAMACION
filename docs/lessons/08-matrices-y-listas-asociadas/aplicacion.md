# Aplicacion

## Ejercicio 1

### Enunciado

Crear una matriz de 3 filas y 3 columnas con numeros del 1 al 9. Mostrarla en formato de tabla.

### Solucion en Python

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for fila in matriz:
    for valor in fila:
        print(valor, end=" ")
    print()
```

### Explicacion

- Cada lista interna representa una fila.
- El primer `for` recorre las filas.
- El segundo `for` recorre los valores de cada fila.

## Ejercicio 2

### Enunciado

Crear una matriz de 2 filas y 3 columnas con valores ingresados por el usuario.

### Solucion en Python

```python
matriz = []

for i in range(2):
    fila = []
    for j in range(3):
        valor = int(input(f"Valor fila {i}, columna {j}: "))
        fila.append(valor)
    matriz.append(fila)

print("Matriz ingresada:")

for fila in matriz:
    for valor in fila:
        print(valor, end=" ")
    print()
```

### Explicacion

- Se crea una lista vacia para la matriz.
- En cada vuelta del primer ciclo se crea una nueva fila.
- En cada vuelta del segundo ciclo se agrega un valor a la fila.

## Ejercicio 3

### Enunciado

Crear un tablero de ajedrez y mostrar que pieza hay en una posicion indicada por fila y columna.

### Solucion en Python

```python
tablero = [
    ["T", "C", "A", "D", "R", "A", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["T", "C", "A", "D", "R", "A", "C", "T"]
]

fila = int(input("Fila (0 a 7): "))
columna = int(input("Columna (0 a 7): "))

if fila >= 0 and fila < 8 and columna >= 0 and columna < 8:
    print("Contenido:", tablero[fila][columna])
else:
    print("Posicion invalida")
```

### Explicacion

- Se valida que la fila y la columna esten entre 0 y 7.
- Se accede con `tablero[fila][columna]`.

## Ejercicio 4

### Enunciado

Mover una pieza dentro de un tablero de ajedrez desde una posicion inicial hacia una posicion final.

### Solucion en Python

```python
tablero = [
    ["T", "C", "A", "D", "R", "A", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["T", "C", "A", "D", "R", "A", "C", "T"]
]

fila_origen = int(input("Fila origen: "))
columna_origen = int(input("Columna origen: "))
fila_destino = int(input("Fila destino: "))
columna_destino = int(input("Columna destino: "))

if tablero[fila_origen][columna_origen] != ".":
    tablero[fila_destino][columna_destino] = tablero[fila_origen][columna_origen]
    tablero[fila_origen][columna_origen] = "."
    print("Movimiento realizado")
else:
    print("No hay pieza en la posicion de origen")

for fila in tablero:
    for pieza in fila:
        print(pieza, end=" ")
    print()
```

### Explicacion

- Primero se verifica que la casilla de origen tenga una pieza.
- Luego se copia la pieza al destino.
- Finalmente se reemplaza el origen por `"."`.

## Ejercicio 5

### Enunciado

Crear listas asociadas con codigos de butacas y estados. Mostrar todas las butacas.

### Solucion en Python

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]

for i in range(len(butacas)):
    print(butacas[i], "-", estados[i])
```

### Explicacion

- `butacas[i]` y `estados[i]` pertenecen a la misma posicion.
- El indice `i` conecta la informacion de ambas listas.

## Ejercicio 6

### Enunciado

Buscar una butaca por codigo y mostrar su estado.

### Solucion en Python

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]

codigo = input("Codigo de butaca: ")

if codigo in butacas:
    posicion = butacas.index(codigo)
    print("Estado:", estados[posicion])
else:
    print("Butaca no encontrada")
```

### Explicacion

- `in` verifica si la butaca existe.
- `index()` obtiene la posicion.
- Con esa posicion se consulta la lista `estados`.

## Ejercicio 7

### Enunciado

Reservar una butaca solo si esta libre.

### Solucion en Python

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]

codigo = input("Codigo de butaca a reservar: ")

if codigo in butacas:
    posicion = butacas.index(codigo)

    if estados[posicion] == "libre":
        estados[posicion] = "reservada"
        print("Reserva realizada")
    else:
        print("La butaca no esta libre")
else:
    print("Butaca no encontrada")

for i in range(len(butacas)):
    print(butacas[i], "-", estados[i])
```

### Explicacion

- Se busca la posicion de la butaca.
- Solo se cambia el estado si el valor actual es `"libre"`.

## Ejercicio 8

### Enunciado

Calcular cuantas butacas estan libres, ocupadas y reservadas.

### Solucion en Python

```python
butacas = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3"]
estados = ["libre", "ocupada", "libre", "reservada", "libre", "ocupada", "libre", "reservada"]

libres = 0
ocupadas = 0
reservadas = 0

for estado in estados:
    if estado == "libre":
        libres = libres + 1
    elif estado == "ocupada":
        ocupadas = ocupadas + 1
    elif estado == "reservada":
        reservadas = reservadas + 1

print("Libres:", libres)
print("Ocupadas:", ocupadas)
print("Reservadas:", reservadas)
```

### Explicacion

- Se recorre la lista de estados.
- Cada estado aumenta su propio contador.
