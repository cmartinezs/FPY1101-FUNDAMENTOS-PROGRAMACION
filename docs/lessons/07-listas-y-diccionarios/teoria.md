# Teoria

## Objetivo

Conocer y usar listas y diccionarios en Python: crear, acceder, modificar y recorrer estas estructuras de datos.

## Idea central

Las listas y los diccionarios permiten agrupar multiples datos en una sola variable. Son esenciales para manejar colecciones de informacion en cualquier programa.

---

## LISTAS

## 1. Que es una lista

Una lista es una coleccion ordenada de elementos. Puede contener numeros, texto u otros tipos de datos.

```python
# Lista vacia
mi_lista = []

# Lista de numeros
notas = [85, 90, 70, 95]

# Lista de textos
nombres = ["Ana", "Luis", "Maria"]

# Lista mixta
datos = ["Juan", 20, True, 9.5]
```

## 2. Acceder a elementos

Se accede por posicion (indice). El primer elemento tiene indice 0.

```python
frutas = ["manzana", "pera", "uva"]

print(frutas[0])   # manzana
print(frutas[1])   # pera
print(frutas[2])   # uva
print(frutas[-1])  # uva (ultimo elemento)
print(frutas[-2])  # pera (penultimo)
```

## 3. Modificar elementos

```python
notas = [85, 90, 70]

notas[0] = 95   # cambia el primer elemento
print(notas)    # [95, 90, 70]
```

## 4. Largo de una lista

`len()` devuelve la cantidad de elementos.

```python
nombres = ["Ana", "Luis", "Maria"]
print(len(nombres))   # 3
```

## 5. Agregar elementos

```python
frutas = ["manzana", "pera"]

# Agregar al final
frutas.append("uva")
print(frutas)   # ["manzana", "pera", "uva"]

# Agregar en una posicion especifica
frutas.insert(1, "naranja")
print(frutas)   # ["manzana", "naranja", "pera", "uva"]
```

## 6. Eliminar elementos

```python
frutas = ["manzana", "pera", "uva", "pera"]

# Eliminar por valor (el primero que encuentre)
frutas.remove("pera")
print(frutas)   # ["manzana", "uva", "pera"]

# Eliminar por indice
del frutas[0]
print(frutas)   # ["uva", "pera"]

# Eliminar y obtener el ultimo elemento
ultimo = frutas.pop()
print(ultimo)   # pera
print(frutas)   # ["uva"]

# Eliminar y obtener por indice
frutas = ["a", "b", "c"]
elemento = frutas.pop(1)
print(elemento)  # b
print(frutas)    # ["a", "c"]
```

## 7. Ordenar una lista

```python
numeros = [3, 1, 4, 1, 5, 9]

# Ordenar de menor a mayor
numeros.sort()
print(numeros)   # [1, 1, 3, 4, 5, 9]

# Ordenar de mayor a menor
numeros.sort(reverse=True)
print(numeros)   # [9, 5, 4, 3, 1, 1]

# Invertir el orden actual
numeros.reverse()
print(numeros)   # [1, 1, 3, 4, 5, 9]
```

## 8. Verificar si un elemento existe

```python
frutas = ["manzana", "pera", "uva"]

if "pera" in frutas:
    print("Si esta")

if "kiwi" not in frutas:
    print("No esta")
```

## 9. Recorrer una lista con for

```python
nombres = ["Ana", "Luis", "Maria"]

for nombre in nombres:
    print(nombre)
```

Sale: Ana, Luis, Maria

### Con indice

```python
frutas = ["manzana", "pera", "uva"]

for i in range(len(frutas)):
    print(i, frutas[i])
```

Sale:
```
0 manzana
1 pera
2 uva
```

## 10. Operaciones comunes con listas

```python
numeros = [3, 1, 4, 1, 5]

print(sum(numeros))    # 14 (suma total)
print(min(numeros))    # 1 (minimo)
print(max(numeros))    # 5 (maximo)
print(len(numeros))    # 5 (cantidad)
```

### Acumular resultados en una lista

```python
cuadrados = []

for i in range(1, 6):
    cuadrados.append(i * i)

print(cuadrados)   # [1, 4, 9, 16, 25]
```

---

## DICCIONARIOS

## 11. Que es un diccionario

Un diccionario almacena pares de clave-valor. Las claves son unicas y se usan para acceder a los valores.

```python
# Diccionario vacio
mi_dict = {}

# Diccionario con datos
persona = {
    "nombre": "Ana",
    "edad": 20,
    "ciudad": "Santiago"
}
```

## 12. Acceder a valores

```python
persona = {"nombre": "Ana", "edad": 20}

print(persona["nombre"])   # Ana
print(persona["edad"])     # 20

# Con get() (no da error si la clave no existe)
print(persona.get("ciudad"))          # None
print(persona.get("ciudad", "N/A"))   # N/A
```

## 13. Modificar y agregar valores

```python
persona = {"nombre": "Ana", "edad": 20}

# Modificar
persona["edad"] = 21
print(persona)   # {"nombre": "Ana", "edad": 21}

# Agregar nueva clave
persona["ciudad"] = "Santiago"
print(persona)   # {"nombre": "Ana", "edad": 21, "ciudad": "Santiago"}
```

## 14. Eliminar entradas

```python
persona = {"nombre": "Ana", "edad": 20, "ciudad": "Santiago"}

# Eliminar por clave
del persona["ciudad"]
print(persona)   # {"nombre": "Ana", "edad": 20}

# Eliminar y obtener el valor
edad = persona.pop("edad")
print(edad)      # 20
print(persona)   # {"nombre": "Ana"}
```

## 15. Verificar si una clave existe

```python
persona = {"nombre": "Ana", "edad": 20}

if "nombre" in persona:
    print("La clave existe")

if "ciudad" not in persona:
    print("La clave no existe")
```

## 16. Recorrer un diccionario

```python
persona = {"nombre": "Ana", "edad": 20, "ciudad": "Santiago"}

# Solo claves
for clave in persona:
    print(clave)

# Solo valores
for valor in persona.values():
    print(valor)

# Claves y valores juntos
for clave, valor in persona.items():
    print(clave, ":", valor)
```

## 17. Metodos utiles de diccionarios

```python
persona = {"nombre": "Ana", "edad": 20}

print(persona.keys())     # dict_keys(["nombre", "edad"])
print(persona.values())   # dict_values(["Ana", 20])
print(persona.items())    # dict_items([("nombre", "Ana"), ("edad", 20)])
print(len(persona))       # 2
```

---

## 18. Listas de diccionarios

Es muy comun tener una lista donde cada elemento es un diccionario.

```python
estudiantes = [
    {"nombre": "Ana", "nota": 85},
    {"nombre": "Luis", "nota": 90},
    {"nombre": "Maria", "nota": 70}
]

for estudiante in estudiantes:
    print(estudiante["nombre"], "-", estudiante["nota"])
```

Sale:
```
Ana - 85
Luis - 90
Maria - 70
```

### Agregar a una lista de diccionarios

```python
estudiantes = []

nombre = input("Nombre: ")
nota = float(input("Nota: "))

estudiantes.append({"nombre": nombre, "nota": nota})
```

---

## 19. Errores comunes

### Indice fuera de rango (listas)

```python
# ERROR
frutas = ["manzana", "pera"]
print(frutas[5])   # IndexError: list index out of range

# CORRECTO: verificar el indice primero
if 5 < len(frutas):
    print(frutas[5])
```

### Clave inexistente (diccionarios)

```python
# ERROR
persona = {"nombre": "Ana"}
print(persona["edad"])   # KeyError: 'edad'

# CORRECTO: usar get() o verificar primero
print(persona.get("edad", "No disponible"))

if "edad" in persona:
    print(persona["edad"])
```

### Modificar una lista mientras se recorre

```python
# ERROR: puede dar resultados inesperados
numeros = [1, 2, 3, 4]
for n in numeros:
    if n == 2:
        numeros.remove(n)

# CORRECTO: trabajar sobre una copia o construir nueva lista
numeros = [1, 2, 3, 4]
resultado = []
for n in numeros:
    if n != 2:
        resultado.append(n)
```

---

## 20. Resumen

### Listas

| Operacion | Codigo |
| --- | --- |
| Crear | `lista = [1, 2, 3]` |
| Acceder | `lista[0]` |
| Modificar | `lista[0] = 10` |
| Agregar al final | `lista.append(valor)` |
| Insertar | `lista.insert(indice, valor)` |
| Eliminar por valor | `lista.remove(valor)` |
| Eliminar por indice | `del lista[indice]` |
| Largo | `len(lista)` |
| Recorrer | `for x in lista:` |
| Verificar | `valor in lista` |

### Diccionarios

| Operacion | Codigo |
| --- | --- |
| Crear | `d = {"clave": valor}` |
| Acceder | `d["clave"]` |
| Acceder seguro | `d.get("clave", default)` |
| Agregar/modificar | `d["clave"] = valor` |
| Eliminar | `del d["clave"]` |
| Verificar clave | `"clave" in d` |
| Recorrer | `for clave, valor in d.items():` |
| Largo | `len(d)` |
