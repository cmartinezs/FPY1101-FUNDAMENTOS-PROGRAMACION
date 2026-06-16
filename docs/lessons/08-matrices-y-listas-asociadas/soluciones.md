# Soluciones de referencia

Estas soluciones muestran usos basicos de matrices y listas asociadas.

## Ejercicios guiados

### 1. Matriz de 2 por 2

```python
matriz = [
    [1, 2],
    [3, 4]
]

for fila in matriz:
    for valor in fila:
        print(valor, end=" ")
    print()
```

### 2. Valor en fila 1, columna 0

```python
matriz = [
    [10, 20],
    [30, 40]
]

print(matriz[1][0])
```

### 3. Modificar una matriz

```python
matriz = [
    [10, 20],
    [30, 40]
]

matriz[0][1] = 99
print(matriz)
```

### 4. Tablero de ajedrez

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

### 5. Mostrar piezas del tablero

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

for fila in tablero:
    for pieza in fila:
        print(pieza, end=" ")
    print()
```

### 6. Butacas y estados

```python
butacas = ["A1", "A2", "A3"]
estados = ["libre", "ocupada", "libre"]

for i in range(len(butacas)):
    print(butacas[i], "-", estados[i])
```

### 7. Buscar butaca

```python
butacas = ["A1", "A2", "A3"]
estados = ["libre", "ocupada", "libre"]

codigo = input("Butaca: ")

if codigo in butacas:
    posicion = butacas.index(codigo)
    print("Estado:", estados[posicion])
else:
    print("Butaca no existe")
```

### 8. Reservar butaca

```python
butacas = ["A1", "A2", "A3"]
estados = ["libre", "ocupada", "libre"]

codigo = input("Butaca a reservar: ")

if codigo in butacas:
    posicion = butacas.index(codigo)

    if estados[posicion] == "libre":
        estados[posicion] = "reservada"
        print("Butaca reservada")
    else:
        print("No se puede reservar")
else:
    print("Butaca no existe")
```

## Ejercicio integrador

```python
butacas = ["A1", "A2", "A3", "B1", "B2", "B3"]
estados = ["libre", "ocupada", "libre", "reservada", "libre", "libre"]
precios = [4500, 4500, 4500, 5000, 5000, 5000]

while True:
    print("=== CINE ===")
    print("1. Ver todas las butacas")
    print("2. Ver butacas libres")
    print("3. Reservar butaca")
    print("4. Comprar butaca")
    print("5. Ver resumen")
    print("6. Salir")

    opcion = input("Opcion: ")

    if opcion == "1":
        for i in range(len(butacas)):
            print(butacas[i], "-", estados[i], "- $" + str(precios[i]))

    elif opcion == "2":
        hay_libres = False

        for i in range(len(butacas)):
            if estados[i] == "libre":
                print(butacas[i], "- $" + str(precios[i]))
                hay_libres = True

        if not hay_libres:
            print("No hay butacas libres")

    elif opcion == "3":
        codigo = input("Butaca a reservar: ")

        if codigo in butacas:
            posicion = butacas.index(codigo)

            if estados[posicion] == "libre":
                estados[posicion] = "reservada"
                print("Butaca reservada.")
            else:
                print("La butaca no esta libre.")
        else:
            print("Butaca no existe.")

    elif opcion == "4":
        codigo = input("Butaca a comprar: ")

        if codigo in butacas:
            posicion = butacas.index(codigo)

            if estados[posicion] == "ocupada":
                print("La butaca ya esta ocupada.")
            else:
                estados[posicion] = "ocupada"
                print("Compra realizada.")
        else:
            print("Butaca no existe.")

    elif opcion == "5":
        libres = 0
        reservadas = 0
        ocupadas = 0
        recaudado = 0

        for i in range(len(estados)):
            if estados[i] == "libre":
                libres = libres + 1
            elif estados[i] == "reservada":
                reservadas = reservadas + 1
            elif estados[i] == "ocupada":
                ocupadas = ocupadas + 1
                recaudado = recaudado + precios[i]

        print("Libres:", libres)
        print("Reservadas:", reservadas)
        print("Ocupadas:", ocupadas)
        print("Recaudado:", recaudado)

    elif opcion == "6":
        print("Chao!")
        break

    else:
        print("Opcion invalida")
```
