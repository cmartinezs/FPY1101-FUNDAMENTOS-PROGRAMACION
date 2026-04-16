# Módulo 09 — Entrada y salida (I/O)

> **Objetivo:** entender qué es la entrada/salida (I/O), por qué es una de las operaciones más costosas en un sistema, y conocer las formas esenciales en que un programa en Python se comunica con el mundo exterior.

---

## ¿Qué es I/O?

**I/O** (*Input/Output*, Entrada/Salida) es cualquier operación mediante la cual un programa **recibe o envía datos** hacia o desde el mundo exterior a la memoria del proceso. Ese "mundo exterior" incluye:

- La consola (teclado y pantalla)
- El sistema de archivos (disco)
- La red (HTTP, APIs, bases de datos)
- Otros procesos o dispositivos

> **Por qué importa:** la CPU trabaja muchísimo más rápido que el disco o la red. Por eso, en programas reales, muchas demoras vienen del I/O y no de los cálculos.

---

## Índice

1. [I/O por consola](#1-io-por-consola)
2. [I/O de archivos](#2-io-de-archivos)
3. [I/O de red](#3-io-de-red)
4. [Streams — el concepto unificador](#4-streams--el-concepto-unificador)
5. [I/O bloqueante vs no bloqueante](#5-io-bloqueante-vs-no-bloqueante)
6. [I/O en el contexto backend](#6-io-en-el-contexto-backend)
7. [Tabla resumen](#7-tabla-resumen)
8. [📚 Literatura recomendada](#-literatura-recomendada)
9. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. I/O por consola

### 📖 Definición

La **consola** es la forma más básica de interacción con el usuario: leer lo que escribe y mostrar resultados en pantalla.

### 🐍 En Python

```python
nombre = input("¿Cuál es tu nombre? ")
print(f"Hola, {nombre}")
```

```python
edad = int(input("Ingresa tu edad: "))
print(f"El próximo año tendrás {edad + 1}")
```

### ⚠️ Detalle importante para principiantes

`input()` siempre devuelve **texto** (`str`). Si necesitas un número, debes convertirlo con `int()` o `float()`.

> 📌 **Conexión con PSeInt:** `Leer` en PSeInt parece más "automático". En Python debes convertir el dato cuando corresponde.

---

## 2. I/O de archivos

### 📖 Definición

Las operaciones con archivos permiten leer y escribir información de forma **persistente**. A diferencia de una variable, un archivo sigue existiendo después de que termina el programa.

### 🐍 Leer archivos

```python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()

print(contenido)
```

```python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        print(linea.strip())
```

### 🐍 Escribir archivos

```python
with open("salida.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Hola mundo\n")
    archivo.write("Segunda línea\n")
```

```python
with open("salida.txt", "a", encoding="utf-8") as archivo:
    archivo.write("Línea agregada al final\n")
```

### ⚠️ Siempre cerrar los recursos

La forma correcta en Python es usar `with`:

```python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
```

Cuando sales del bloque, Python cierra el archivo automáticamente.

```python
# ❌ Menos seguro: puedes olvidar cerrarlo
archivo = open("datos.txt", "r", encoding="utf-8")
contenido = archivo.read()
archivo.close()
```

---

## 3. I/O de red

### 📖 Definición

La **I/O de red** ocurre cuando tu programa se comunica con otros sistemas por red. Ejemplos comunes:

- Consumir una API HTTP
- Consultar una base de datos
- Enviar o recibir datos por sockets
- Descargar archivos

### 🐍 Ejemplo con la biblioteca estándar

```python
from urllib.request import urlopen
import json

with urlopen("https://jsonplaceholder.typicode.com/todos/1") as respuesta:
    datos = json.load(respuesta)

print(datos["title"])
```

### ⚠️ Importante

Este tipo de operación depende de la red: puede ser lenta, puede fallar y no siempre está bajo tu control.

---

## 4. Streams — el concepto unificador

### 📖 Definición

Un **stream** (flujo) es una secuencia de datos que va desde un origen hacia un destino.

```
Origen → [lectura] → Tu programa → [escritura] → Destino
```

En Python, muchas operaciones de I/O usan objetos tipo archivo o flujos.

### Ejemplos de orígenes y destinos

- Consola
- Archivos
- Respuestas HTTP
- Memoria

### Texto vs bytes

```python
with open("mensaje.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Hola")  # texto
```

```python
with open("foto.bin", "wb") as archivo:
    archivo.write(b"ABC")  # bytes
```

> ⚠️ Para principiantes, lo importante es recordar esto: **texto** usa `str`; archivos binarios usan **bytes**.

### Buffering

Cuando lees o escribes, normalmente Python usa un **buffer**: un espacio intermedio en memoria para no ir al disco o a la red en cada carácter.

Eso hace el I/O más eficiente.

---

## 5. I/O bloqueante vs no bloqueante

### 📖 Definición

| | I/O Bloqueante (Blocking) | I/O No Bloqueante (Non-blocking) |
|--|--------------------------|----------------------------------|
| **Qué hace el programa** | Espera a que termine la operación | Puede seguir haciendo otras cosas |
| **Simplicidad** | Más simple de entender | Más complejo |
| **Uso común** | Programas pequeños y mucho código tradicional | Sistemas con muchas conexiones o mucha espera |

```
I/O bloqueante:
Programa: [pide dato] → [espera] → [continúa]

I/O no bloqueante:
Programa: [pide dato] → [hace otra tarea] → [recibe aviso] → [continúa]
```

### 🐍 Ejemplo bloqueante

```python
from urllib.request import urlopen

with urlopen("https://jsonplaceholder.typicode.com/todos/1") as respuesta:
    contenido = respuesta.read()
```

Mientras llega la respuesta, el programa está esperando.

### 🐍 Ejemplo asíncrono conceptual

```python
import asyncio

async def tarea_lenta(nombre, segundos):
    print(f"{nombre} inicia")
    await asyncio.sleep(segundos)  # simula espera de red
    print(f"{nombre} termina")

async def main():
    await asyncio.gather(
        tarea_lenta("A", 1),
        tarea_lenta("B", 2),
    )

asyncio.run(main())
```

> ⚠️ Este segundo ejemplo ya es más avanzado. No hace I/O real, pero sirve para entender la idea de no quedarse detenido en una sola espera.

---

## 6. I/O en el contexto backend

En una aplicación web, gran parte del tiempo no se gasta calculando, sino esperando I/O:

```
Request HTTP
    ↓
Tu endpoint o función
    ↓
Base de datos / archivo / API externa
    ↓
Respuesta HTTP
```

### Buenas prácticas

| Práctica | Por qué |
|----------|---------|
| Cerrar archivos y conexiones correctamente | Evita fugas de recursos |
| Leer archivos grandes por partes | Evita cargar todo en memoria |
| Validar antes de escribir | Evita I/O innecesario |
| Reutilizar conexiones cuando el framework lo permita | Reduce costo de apertura |
| Cachear resultados costosos si tiene sentido | Reduce llamadas repetidas |

### Ejemplo simple de lectura por líneas

```python
with open("log.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        if "ERROR" in linea:
            print(linea.strip())
```

Este enfoque es mejor que leer todo el archivo completo si solo necesitas procesarlo línea por línea.

---

## 7. Tabla resumen

| Tipo de I/O | Origen/Destino | Ejemplo en Python | Velocidad relativa |
|-------------|----------------|-------------------|-------------------|
| **Consola** | Terminal | `input()`, `print()` | Rápida |
| **Archivo** | Disco | `open()`, `read()`, `write()` | Más lenta |
| **HTTP** | Red | `urllib.request`, `requests` | Variable |
| **Base de datos** | Red + disco | `sqlite3`, conectores de DB | Lenta frente a RAM |
| **Memoria** | RAM | `io.StringIO`, `io.BytesIO` | Muy rápida |

### Regla de oro

```
Cuanto más lejos de la CPU, más lento suele ser.
CPU → caché → RAM → disco → red local → internet
```

> 💡 Un programa eficiente no solo calcula bien: también usa bien el I/O.

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Automate the Boring Stuff with Python** | Al Sweigart | Principiante | Excelente para practicar archivos, automatización y tareas reales |
| **Python Crash Course** | Eric Matthes | Principiante | Introduce lectura de archivos, APIs y proyectos prácticos |
| **Fluent Python** | Luciano Ramalho | Intermedio / Avanzado | Profundiza en archivos, bytes, streams y programación asíncrona |
| **Effective Python** | Brett Slatkin | Intermedio | Buenas prácticas concretas para trabajar con recursos e I/O |
| **Designing Data-Intensive Applications** | Martin Kleppmann | Avanzado | Para entender el papel del I/O en sistemas más grandes |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Documentación de `open()`** | https://docs.python.org/3/library/functions.html#open | Referencia oficial para lectura y escritura de archivos |
| **Documentación de `io`** | https://docs.python.org/3/library/io.html | Explica streams de texto, bytes y objetos en memoria |
| **Documentación de `urllib.request`** | https://docs.python.org/3/library/urllib.request.html | Biblioteca estándar para I/O de red simple |
| **Real Python — Reading and Writing Files** | https://realpython.com/read-write-files-python/ | Guía práctica y clara sobre manejo de archivos |
| **Latency Numbers Every Programmer Should Know** | https://gist.github.com/jboner/2841832 | Ayuda a dimensionar por qué el I/O cuesta tanto comparado con CPU |
