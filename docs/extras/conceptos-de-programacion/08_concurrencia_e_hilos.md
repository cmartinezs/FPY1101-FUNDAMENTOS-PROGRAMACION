# Módulo 08 — Concurrencia e hilos

> **Objetivo:** entender qué es la concurrencia, por qué existe y cuáles son los problemas clásicos que genera. Es un tema importante en sistemas reales, pero para principiantes conviene verlo primero a nivel conceptual y con ejemplos pequeños.

---

## ¿Qué es la concurrencia?

La **concurrencia** es la capacidad de un programa de **avanzar en varias tareas al mismo tiempo** o de forma intercalada. En Python, una forma de lograrlo es usando **hilos** (*threads*), aunque también existen procesos y programación asíncrona.

> **Analogía:** un restaurante con un solo mesero atiende una mesa, espera, vuelve, cobra y recién después pasa a la siguiente. Con varios meseros, varias mesas pueden avanzar a la vez.

---

## Índice

1. [Proceso vs Hilo (Thread)](#1-proceso-vs-hilo-thread)
2. [Concurrencia vs Paralelismo](#2-concurrencia-vs-paralelismo)
3. [Por qué usar concurrencia](#3-por-qué-usar-concurrencia)
4. [Problemas clásicos de concurrencia](#4-problemas-clásicos-de-concurrencia)
5. [Sincronización](#5-sincronización)
6. [Concurrencia en Python](#6-concurrencia-en-python)
7. [Concurrencia en la práctica backend](#7-concurrencia-en-la-práctica-backend)
8. [Tabla resumen](#8-tabla-resumen)
9. [📚 Literatura recomendada](#-literatura-recomendada)
10. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Proceso vs Hilo (Thread)

| | Proceso | Hilo (Thread) |
|--|---------|--------------|
| **Qué es** | Programa en ejecución, con su propia memoria | Unidad de ejecución dentro de un proceso |
| **Memoria** | Aislada de otros procesos | Compartida con otros hilos del mismo proceso |
| **Comunicación** | Más costosa | Más directa |
| **Costo de creación** | Mayor | Menor |
| **Ejemplo** | Abrir VS Code y el navegador | Varias tareas dentro de una misma app |

```
Proceso de Python
├── Hilo principal
├── Hilo que espera datos de red
├── Hilo que escribe logs
└── Hilo que procesa una tarea en segundo plano
```

---

## 2. Concurrencia vs Paralelismo

Son conceptos relacionados, pero no iguales:

| | Concurrencia | Paralelismo |
|--|-------------|------------|
| **Definición** | Varias tareas avanzan, aunque sea alternando | Varias tareas se ejecutan literalmente al mismo tiempo |
| **Requiere** | Puede ocurrir incluso en un solo núcleo | Requiere varios núcleos o varios procesadores |
| **Analogía** | Un chef alterna entre varios platos | Varios chefs cocinan a la vez |

> 📌 La concurrencia es sobre **cómo se organiza el programa**. El paralelismo es sobre **cómo se ejecuta en el hardware**.

```
CONCURRENCIA:
Tarea A: ███░░███░░███
Tarea B: ░░███░░███░░

PARALELISMO:
Tarea A: ████████████
Tarea B: ████████████
```

### ⚠️ Nota importante en Python

En CPython existe el **GIL** (*Global Interpreter Lock*). Eso significa que, para trabajo intensivo de CPU, varios hilos no suelen acelerar tanto como uno esperaría. Aun así, los hilos sí son útiles para tareas de **I/O**: esperar archivos, red o APIs.

---

## 3. Por qué usar concurrencia

### ✅ Casos de uso legítimos

| Caso | Por qué ayuda la concurrencia |
|------|------------------------------|
| **Servidor web** | Permite atender varias solicitudes sin dejar esperando a todos en fila |
| **Operaciones I/O lentas** | Mientras una tarea espera red o disco, otra puede avanzar |
| **Procesamiento en segundo plano** | Enviar correos, generar reportes o procesar archivos |
| **Interfaces gráficas** | Evita que la ventana se congele mientras ocurre una tarea lenta |
| **Descargas múltiples** | Varias esperas de red pueden solaparse |

---

## 4. Problemas clásicos de concurrencia

La memoria compartida entre hilos puede producir errores difíciles de reproducir.

### 4.1 Condición de carrera (Race Condition)

Dos o más hilos modifican datos compartidos sin coordinación, y el resultado depende del orden exacto de ejecución.

```python
# ❌ Ejemplo conceptual: dos hilos comparten esta variable
contador = 0


def incrementar():
    global contador
    contador += 1
```

Aunque `contador += 1` parece una sola instrucción, internamente implica leer, sumar y escribir.

### 4.2 Deadlock (Bloqueo mutuo)

Dos hilos esperan recursos que el otro tiene, y ninguno puede avanzar.

```
Hilo A tiene recurso 1 y espera recurso 2
Hilo B tiene recurso 2 y espera recurso 1
→ nadie avanza
```

### 4.3 Starvation (Inanición)

Una tarea queda esperando indefinidamente porque otras siempre reciben el recurso antes.

### 4.4 Visibilidad de memoria

Un hilo puede no enterarse inmediatamente de un cambio hecho por otro hilo si no existe un mecanismo de coordinación adecuado.

> ⚠️ Estos problemas son reales, pero al inicio lo más importante es **reconocer que existen**. Diseñar programas concurrentes correctos es un tema más avanzado.

---

## 5. Sincronización

La sincronización coordina el acceso a recursos compartidos.

### `Lock` en Python

```python
import threading

contador = 0
candado = threading.Lock()


def incrementar():
    global contador
    with candado:
        contador += 1
```

El bloque `with candado:` asegura que solo un hilo a la vez entre a esa sección crítica.

### `Event` en Python

```python
import threading
import time

listo = threading.Event()


def tarea_lenta():
    time.sleep(1)
    listo.set()


def esperar_resultado():
    listo.wait()
    print("La tarea terminó")
```

`Event` sirve para avisar a otros hilos que algo ya ocurrió.

### `Queue` como herramienta segura

```python
from queue import Queue

cola = Queue()
cola.put("mensaje")
print(cola.get())
```

Muchas veces es mejor **pasar datos por una cola** que compartir variables mutables directamente.

---

## 6. Concurrencia en Python

### Crear hilos

```python
import threading


def saludar():
    print("Ejecutando en un hilo")


hilo = threading.Thread(target=saludar)
hilo.start()
hilo.join()
```

### `ThreadPoolExecutor` — una forma práctica

```python
from concurrent.futures import ThreadPoolExecutor
import time


def tarea(numero):
    time.sleep(1)
    return f"Tarea {numero} lista"


with ThreadPoolExecutor(max_workers=3) as executor:
    resultados = executor.map(tarea, [1, 2, 3])
    for resultado in resultados:
        print(resultado)
```

### `asyncio` — concurrencia sin muchos hilos

```python
import asyncio

async def tarea(nombre, segundos):
    print(f"{nombre} iniciada")
    await asyncio.sleep(segundos)  # simula espera de red o disco
    print(f"{nombre} terminada")

async def main():
    await asyncio.gather(
        tarea("A", 1),
        tarea("B", 2),
    )

asyncio.run(main())
```

> ⚠️ `asyncio` es un tema más avanzado. Lo importante por ahora es saber que existe otra forma de concurrencia, muy usada cuando hay mucha espera de I/O.

---

## 7. Concurrencia en la práctica backend

En desarrollo web con Python, la concurrencia aparece aunque no la programes desde cero:

```
Cada request HTTP
    ↓
Servidor web / framework
    ↓
Tu función o endpoint
    ↓
Base de datos / API externa / archivos
```

### Ejemplo conceptual en un backend Python

```python
# Ejemplo simplificado: función que no guarda estado compartido
def obtener_usuario(repo, user_id):
    return repo.buscar_por_id(user_id)
```

```python
# ❌ Riesgoso: estado mutable compartido
cache = []


def agregar_a_cache(item):
    cache.append(item)
```

Si varios hilos o tareas usan el mismo estado mutable sin control, aparecen problemas difíciles de detectar.

### Buenas prácticas en backend Python

| Práctica | Por qué |
|----------|---------|
| Preferir funciones sin estado compartido | Reduce bugs de concurrencia |
| Evitar variables globales mutables | Son foco de race conditions |
| Usar `Queue`, `Lock` o estructuras diseñadas para concurrencia | Coordinan acceso seguro |
| Para tareas de CPU intensivo, considerar procesos | En Python suelen rendir mejor que varios hilos |
| Para muchas esperas de red, considerar async | Aprovecha mejor el tiempo de espera |

---

## 8. Tabla resumen

| Concepto | Definición | Ejemplo |
|----------|-----------|---------|
| **Hilo (Thread)** | Unidad de ejecución dentro de un proceso | `threading.Thread(...)` |
| **Concurrencia** | Varias tareas avanzan al mismo tiempo o alternándose | Atender varias descargas |
| **Paralelismo** | Varias tareas corren literalmente a la vez | Varias CPU trabajando |
| **Race condition** | El resultado depende del orden de ejecución | Dos hilos modifican el mismo contador |
| **Deadlock** | Dos tareas se esperan mutuamente | Cada una bloquea un recurso distinto |
| **Lock** | Solo un hilo entra a una sección crítica | `with candado:` |
| **Event** | Un hilo avisa a otros que algo ocurrió | `listo.set()` |
| **Queue** | Paso seguro de datos entre tareas | `cola.put(...)` y `cola.get()` |
| **ThreadPoolExecutor** | Pool de hilos reutilizable | Ejecutar varias tareas cortas |
| **asyncio** | Concurrencia orientada a I/O | Varias esperas de red simultáneas |

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Python Crash Course** | Eric Matthes | Principiante | Introducción amigable a proyectos reales; sirve como base antes de entrar en concurrencia |
| **Fluent Python** | Luciano Ramalho | Intermedio / Avanzado | Tiene excelentes capítulos sobre concurrencia, futures y asyncio en Python |
| **Python Cookbook** | Beazley & Jones | Intermedio | Incluye recetas prácticas sobre threads, colas y tareas concurrentes |
| **Effective Python** | Brett Slatkin | Intermedio | Muestra buenas prácticas concretas, incluyendo concurrencia y procesos |
| **The Little Book of Semaphores** | Allen B. Downey | Avanzado | Ayuda a entender problemas clásicos de sincronización más allá de un lenguaje |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Documentación de `threading`** | https://docs.python.org/3/library/threading.html | Referencia oficial para hilos, locks y eventos |
| **Documentación de `concurrent.futures`** | https://docs.python.org/3/library/concurrent.futures.html | Muestra una forma práctica de trabajar con pools |
| **Documentación de `asyncio`** | https://docs.python.org/3/library/asyncio.html | Introducción oficial a programación asíncrona en Python |
| **Real Python — Python Concurrency** | https://realpython.com/python-concurrency/ | Explicación muy clara de hilos, procesos y async |
| **Deadlock Empire** | https://deadlockempire.github.io/ | Juego interactivo para visualizar bugs clásicos de concurrencia |
