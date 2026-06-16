# Teoria

## Objetivo

Comprender y usar matrices y listas asociadas en Python para representar informacion organizada y relacionada.

## Idea central

En la leccion anterior se usaron listas para guardar varios datos en una sola variable. Ahora usaremos listas de forma mas estructurada:

- Una matriz es una lista que contiene otras listas.
- Una lista asociada es una lista que se relaciona con otra por medio de sus indices.

---

## MATRICES: LISTAS DE LISTAS

## 1. Que es una matriz

Una matriz organiza datos en filas y columnas. En Python, se puede representar como una lista de listas.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

Cada lista interna representa una fila.

```python
print(matriz[0])  # [1, 2, 3]
print(matriz[1])  # [4, 5, 6]
print(matriz[2])  # [7, 8, 9]
```

## 2. Acceder a una posicion

Para acceder a un dato se usan dos indices:

```python
matriz[fila][columna]
```

Ejemplo:

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matriz[0][0])  # 1
print(matriz[1][2])  # 6
print(matriz[2][1])  # 8
```

El primer indice indica la fila. El segundo indice indica la columna.

## 3. Modificar una posicion

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matriz[0][1] = 20

print(matriz)
```

Sale:

```python
[[1, 20, 3], [4, 5, 6], [7, 8, 9]]
```

## 4. Recorrer una matriz

Para recorrer una matriz se usan ciclos anidados: un ciclo para las filas y otro para las columnas.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for fila in matriz:
    for valor in fila:
        print(valor)
```

Tambien se puede recorrer con indices:

```python
for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        print("Fila:", i, "Columna:", j, "Valor:", matriz[i][j])
```

## 5. Ejemplo: tablero de ajedrez

Un tablero de ajedrez tiene 8 filas y 8 columnas. Podemos representarlo como una matriz.

En este ejemplo:

- `"T"` representa torre.
- `"C"` representa caballo.
- `"A"` representa alfil.
- `"D"` representa dama.
- `"R"` representa rey.
- `"P"` representa peon.
- `"."` representa casilla vacia.

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
```

Para mostrar el tablero:

```python
for fila in tablero:
    for pieza in fila:
        print(pieza, end=" ")
    print()
```

Sale:

```text
T C A D R A C T
P P P P P P P P
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
P P P P P P P P
T C A D R A C T
```

## 6. Mover una pieza en el tablero

Para mover una pieza, se copia el valor de una casilla a otra y luego se deja vacia la casilla original.

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

# Mover un peon desde fila 6, columna 4 hacia fila 4, columna 4
tablero[4][4] = tablero[6][4]
tablero[6][4] = "."

for fila in tablero:
    for pieza in fila:
        print(pieza, end=" ")
    print()
```

## 7. Crear una matriz vacia

Tambien se puede crear una matriz usando ciclos.

```python
filas = 3
columnas = 4
matriz = []

for i in range(filas):
    fila = []
    for j in range(columnas):
        fila.append(0)
    matriz.append(fila)

print(matriz)
```

Sale:

```python
[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

---

## LISTAS ASOCIADAS

## 8. Que son las listas asociadas

Las listas asociadas son dos o mas listas donde los datos se relacionan por el mismo indice.

```python
nombres = ["Ana", "Luis", "Maria"]
edades = [20, 22, 19]

print(nombres[0], edades[0])  # Ana 20
print(nombres[1], edades[1])  # Luis 22
print(nombres[2], edades[2])  # Maria 19
```

En este caso:

- `nombres[0]` se relaciona con `edades[0]`.
- `nombres[1]` se relaciona con `edades[1]`.
- `nombres[2]` se relaciona con `edades[2]`.

## 9. Recorrer listas asociadas

Para recorrer listas asociadas se usa el mismo indice.

```python
nombres = ["Ana", "Luis", "Maria"]
edades = [20, 22, 19]

for i in range(len(nombres)):
    print(nombres[i], "-", edades[i], "anios")
```

## 10. Ejemplo: butacas del cine

Un cine puede guardar la informacion de sus butacas usando listas asociadas.

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]
precios = [4500, 4500, 4500, 5000, 5000]
```

Cada posicion representa una butaca:

```python
print(butacas[0], estados[0], precios[0])  # A1 libre 4500
print(butacas[1], estados[1], precios[1])  # A2 ocupada 4500
```

Mostrar todas las butacas:

```python
for i in range(len(butacas)):
    print(butacas[i], "-", estados[i], "- $" + str(precios[i]))
```

## 11. Buscar una butaca

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]
precios = [4500, 4500, 4500, 5000, 5000]

codigo = input("Butaca a buscar: ")

if codigo in butacas:
    posicion = butacas.index(codigo)
    print("Butaca:", butacas[posicion])
    print("Estado:", estados[posicion])
    print("Precio:", precios[posicion])
else:
    print("Butaca no existe")
```

## 12. Reservar una butaca

```python
butacas = ["A1", "A2", "A3", "A4", "A5"]
estados = ["libre", "ocupada", "libre", "reservada", "libre"]

codigo = input("Butaca a reservar: ")

if codigo in butacas:
    posicion = butacas.index(codigo)

    if estados[posicion] == "libre":
        estados[posicion] = "reservada"
        print("Butaca reservada")
    else:
        print("La butaca no esta libre")
else:
    print("Butaca no existe")
```

## 13. Cuidado con las listas asociadas

Las listas asociadas deben tener el mismo largo. Si una lista tiene mas elementos que otra, la relacion por indice se rompe.

```python
# Problema: las listas no tienen el mismo largo
butacas = ["A1", "A2", "A3"]
estados = ["libre", "ocupada"]
```

En casos mas grandes, suele ser mejor usar una lista de diccionarios:

```python
butacas = [
    {"codigo": "A1", "estado": "libre", "precio": 4500},
    {"codigo": "A2", "estado": "ocupada", "precio": 4500},
    {"codigo": "A3", "estado": "libre", "precio": 5000}
]
```

Pero las listas asociadas ayudan a entender como varios datos pueden estar conectados mediante una misma posicion.

---

## 14. Resumen

### Matrices

| Operacion | Codigo |
| --- | --- |
| Crear | `matriz = [[1, 2], [3, 4]]` |
| Acceder | `matriz[fila][columna]` |
| Modificar | `matriz[fila][columna] = valor` |
| Recorrer filas | `for fila in matriz:` |
| Recorrer con indices | `for i in range(len(matriz)):` |

### Listas asociadas

| Operacion | Codigo |
| --- | --- |
| Crear | `nombres = [...]`, `edades = [...]` |
| Acceder relacionado | `nombres[i]`, `edades[i]` |
| Buscar posicion | `posicion = lista.index(valor)` |
| Modificar dato asociado | `estados[posicion] = "reservada"` |
| Validar existencia | `if codigo in butacas:` |
