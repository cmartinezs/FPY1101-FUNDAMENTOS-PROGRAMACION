# Modulo 10 - Memoria: stack, heap y garbage collection

> **Objetivo:** construir un modelo mental simple para entender llamadas, referencias y ciclo de vida de objetos en Python.

---

## ¿Por que importa entender la memoria?

Porque ayuda a explicar:

- por que una funcion recuerda ciertos valores
- por que dos variables pueden apuntar al mismo objeto
- por que una lista cambia en varios lugares a la vez

---

## Indice

1. [Las dos zonas de memoria: stack y heap](#1-las-dos-zonas-de-memoria-stack-y-heap)
2. [El stack](#2-el-stack-pila-de-llamadas)
3. [El heap](#3-el-heap)
4. [Referencias](#4-referencias)
5. [Paso por valor vs paso por referencia](#5-paso-por-valor-vs-paso-por-referencia)
6. [None - la referencia vacia](#6-none---la-referencia-vacia)
7. [Garbage collection](#7-garbage-collection)
8. [Fugas de memoria en lenguajes con GC](#8-fugas-de-memoria-en-lenguajes-con-gc)
9. [Tabla resumen](#9-tabla-resumen)
10. [Literatura recomendada](#-literatura-recomendada)
11. [Enlaces de interes](#-enlaces-de-interes)

---

## 1. Las dos zonas de memoria: stack y heap

Como modelo simplificado:

- **Stack:** llamadas activas de funciones
- **Heap:** objetos creados en memoria

No es una descripcion completa del interprete, pero sirve mucho para aprender.

---

## 2. El stack (Pila de llamadas)

### Definicion

Cada vez que llamas una funcion, aparece un marco de ejecucion con sus variables locales.

### Visualizacion en Python

```python
def saludar(nombre):
    mensaje = "Hola " + nombre
    print(mensaje)

saludar("Ana")
```

Mientras `saludar()` se ejecuta, su contexto esta activo en la pila de llamadas.

### Error clasico

Si la recursion no termina, puedes agotar la pila de llamadas.

---

## 3. El heap

### Definicion

El heap es la zona conceptual donde viven objetos como listas, diccionarios, instancias y cadenas.

### Visualizacion en Python

```python
numeros = [1, 2, 3]
persona = {"nombre": "Ana", "edad": 20}
```

Las variables `numeros` y `persona` hacen referencia a objetos creados en memoria.

---

## 4. Referencias

### Definicion

En Python, una variable guarda una **referencia** a un objeto.

### Consecuencia en Python

```python
a = [1, 2]
b = a
b.append(3)

print(a)   # [1, 2, 3]
```

`a` y `b` apuntan al mismo objeto lista.

---

## 5. Paso por valor vs paso por referencia

### Definicion

Python suele explicarse mejor diciendo:

> Los argumentos se pasan por **asignacion de objeto**.

La funcion recibe una referencia al objeto.

### En Python

```python
def agregar_elemento(lista):
    lista.append(99)

datos = [1, 2]
agregar_elemento(datos)
print(datos)   # [1, 2, 99]
```

Con inmutables el efecto es distinto:

```python
def aumentar(numero):
    numero += 1

x = 10
aumentar(x)
print(x)   # 10
```

---

## 6. None - la referencia vacia

### Definicion

`None` representa ausencia de valor.

### En Python

```python
resultado = None

if resultado is None:
    print("Aun no hay resultado")
```

### Perspectiva universal

Cumple un rol parecido a `null` en otros lenguajes, pero en Python se usa `None`.

---

## 7. Garbage collection

### Definicion

Python libera automaticamente objetos que ya no tienen referencias utiles.

### Como funciona en Python

De forma conceptual:

1. se crean objetos
2. variables y estructuras apuntan a ellos
3. cuando dejan de estar referenciados, pueden ser liberados

Python usa conteo de referencias y un recolector adicional para ciclos.

### El ciclo de vida de un objeto

Crear -> usar -> dejar de referenciar -> liberar

### No controles de forma manual lo que no hace falta

En la mayoria de programas no debes "forzar" el recolector. Lo importante es no conservar referencias inutiles.

---

## 8. Fugas de memoria en lenguajes con GC

### Ejemplos en Python

Puede haber fugas practicas cuando:

- guardas datos en caches sin limite
- acumulas listas gigantes que nunca limpias
- mantienes referencias globales innecesarias

### Sintomas

- consumo de memoria creciente
- lentitud
- procesos que nunca liberan datos esperados

---

## 9. Tabla resumen

| Concepto | Idea clave |
|----------|------------|
| Stack | Llamadas activas |
| Heap | Objetos en memoria |
| Referencia | Nombre que apunta a un objeto |
| None | Ausencia de valor |
| GC | Liberacion automatica de objetos sin uso |

### Regla mnemotecnica

Si una lista cambia "en dos variables a la vez", piensa en referencias compartidas.

---

## Literatura recomendada

- Luciano Ramalho, *Fluent Python*
- Anthony Shaw, *CPython Internals*

---

## Enlaces de interes

- https://docs.python.org/3/library/gc.html
