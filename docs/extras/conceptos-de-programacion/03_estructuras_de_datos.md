# Módulo 03 — Estructuras de datos comunes

> **Objetivo:** reconocer las estructuras de datos más usadas, entender qué problema resuelve cada una y ver su equivalente práctico en Python.

---

## ¿Qué es una estructura de datos?

Una **estructura de datos** es una forma de organizar información para poder guardarla, recorrerla, buscarla o modificarla de manera conveniente.

> 📌 No existe una estructura “mejor” para todo. La mejor depende de lo que necesitas hacer con los datos.

---

## Índice

1. [Array / Arreglo](#1-array--arreglo)
2. [Lista](#2-lista)
3. [Pila (Stack)](#3-pila-stack)
4. [Cola (Queue)](#4-cola-queue)
5. [Mapa (Map / Diccionario)](#5-mapa-map--diccionario)
6. [Conjunto (Set)](#6-conjunto-set)
7. [Árbol (Tree)](#7-árbol-tree)
8. [Grafo (Graph)](#8-grafo-graph)
9. [¿Cuál elegir?](#9-cuál-elegir)
10. [Tabla resumen](#10-tabla-resumen)
11. [📚 Literatura recomendada](#-literatura-recomendada)
12. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. Array / Arreglo

### 📖 Definición

Un **array** es una colección ordenada donde cada elemento se accede por posición.

### 🌐 Perspectiva universal

En muchos lenguajes el array tiene tamaño fijo y todos sus elementos son del mismo tipo. En Python, al comenzar, casi siempre usarás `list`, que cubre esa necesidad de forma más flexible.

### 🐍 En Python

```python
notas = [5.5, 6.0, 4.8]
print(notas[0])  # 5.5
```

Si necesitas un arreglo más estricto, Python también tiene el módulo `array`, aunque para un curso inicial no suele ser necesario.

### ✅ Cuándo usarlo

- Cuando necesitas mantener un orden.
- Cuando acceder por índice es importante.
- Cuando la idea mental es “posición 0, posición 1, posición 2...”.

### 🌍 Ejemplos reales

- Notas de un estudiante.
- Temperaturas de la semana.
- Resultados de una encuesta guardados en orden.

### ⚠️ Limitación

Si necesitas insertar o quitar elementos con mucha frecuencia en posiciones intermedias, otras estructuras pueden ser más cómodas.

---

## 2. Lista

### 📖 Definición

Una **lista** es una colección ordenada y dinámica: puede crecer o reducirse.

### 🌐 Perspectiva universal

En Python, `list` es una de las estructuras más importantes. Muchas veces reemplaza al “array” de otros lenguajes en ejercicios cotidianos.

### 🐍 En Python

```python
compras = ["pan", "leche"]
compras.append("fruta")
compras.remove("pan")

print(compras)  # ['leche', 'fruta']
```

### ⚠️ Lista en Python: ideas clave

- Mantiene el orden.
- Permite elementos repetidos.
- Se puede recorrer con `for`.
- Se puede modificar con `append`, `pop`, `insert`, `remove`.

### 🌍 Ejemplos reales

- Carrito de compras.
- Lista de tareas.
- Historial de puntajes.

---

## 3. Pila (Stack)

### 📖 Definición

Una **pila** sigue la regla **LIFO** (*Last In, First Out*): el último en entrar es el primero en salir.

> **Analogía:** una pila de platos.

### Operaciones fundamentales

- **push**: agregar arriba.
- **pop**: sacar el último.
- **peek**: mirar el último sin quitarlo.

### 🌐 Perspectiva universal

La pila aparece mucho en llamadas de funciones, deshacer acciones y recorridos de estructuras.

### 🐍 En Python

```python
pila = []
pila.append("primer cambio")
pila.append("segundo cambio")

ultimo = pila.pop()
print(ultimo)    # segundo cambio
print(pila[-1])  # primer cambio
```

### ✅ Cuándo usarla

- Funcionalidad de deshacer.
- Recorrer estados en profundidad.
- Resolver problemas con “volver atrás”.

### 🌍 Ejemplos reales

- Historial de “undo”.
- Pila de llamadas de funciones.
- Navegación de expresiones con paréntesis.

---

## 4. Cola (Queue)

### 📖 Definición

Una **cola** sigue la regla **FIFO** (*First In, First Out*): el primero en entrar es el primero en salir.

> **Analogía:** una fila en una caja o ventanilla.

### Operaciones fundamentales

- **enqueue**: agregar al final.
- **dequeue**: sacar del frente.
- **peek**: mirar el primero sin sacarlo.

### 🌐 Perspectiva universal

Sirve cuando el orden de llegada importa.

### 🐍 En Python

```python
from collections import deque

cola = deque()
cola.append("cliente 1")
cola.append("cliente 2")

primero = cola.popleft()
print(primero)  # cliente 1
```

### ✅ Cuándo usarla

- Procesar tareas en orden de llegada.
- Simular atención de clientes.
- Recorridos por niveles.

### 🌍 Ejemplos reales

- Impresiones pendientes.
- Turnos de atención.
- Mensajes en espera de procesamiento.

### ⚠️ Stack vs Queue

- **Stack**: sale el último.
- **Queue**: sale el primero.

---

## 5. Mapa (Map / Diccionario)

### 📖 Definición

Un **mapa** relaciona una **clave** con un **valor**.

### 🌐 Perspectiva universal

En Python esta estructura se llama `dict`. Es ideal cuando no quieres buscar por posición, sino por nombre o clave.

### 🐍 En Python

```python
estudiante = {
    "nombre": "Ana",
    "edad": 19,
    "carrera": "Analista Programador"
}

print(estudiante["nombre"])
estudiante["edad"] = 20
```

### ⚠️ Ideas clave del diccionario

- Las claves deben ser únicas.
- El acceso por clave suele ser muy cómodo.
- Es excelente para modelar datos con atributos.

### 🌍 Ejemplos reales

- Ficha de un estudiante.
- Configuración de una aplicación.
- Conteo de palabras: palabra → cantidad.

---

## 6. Conjunto (Set)

### 📖 Definición

Un **conjunto** guarda elementos **sin repetidos**.

### 🌐 Perspectiva universal

En Python se usa `set`. Es muy útil cuando te importa más la pertenencia que el orden.

### 🐍 En Python

```python
inscritos = {"Ana", "Luis", "Ana", "Marta"}
print(inscritos)  # {'Ana', 'Luis', 'Marta'}

inscritos.add("Pedro")
print("Luis" in inscritos)
```

### ✅ Cuándo usarlo

- Eliminar duplicados.
- Revisar si algo ya existe.
- Hacer intersecciones o diferencias entre colecciones.

### 🌍 Ejemplos reales

- Correos únicos.
- Alumnos inscritos en un taller.
- Palabras distintas en un texto.

### ⚠️ Importante

Un `set` no garantiza posiciones como una lista.

---

## 7. Árbol (Tree)

### 📖 Definición

Un **árbol** es una estructura jerárquica formada por nodos. Tiene una **raíz** y desde ella pueden salir ramas hacia otros nodos.

```text
Carpeta raíz
├── documentos
│   ├── tareas
│   └── apuntes
└── imágenes
```

### Vocabulario clave

- **Raíz**: nodo inicial.
- **Padre**: nodo que tiene hijos.
- **Hijo**: nodo que depende de otro.
- **Hoja**: nodo sin hijos.
- **Altura**: cantidad de niveles.

### Tipos más comunes

- Árbol binario.
- Árbol de búsqueda.
- Árbol de directorios.

### 🌍 Ejemplos reales

- Carpetas del sistema operativo.
- Menús anidados.
- Árbol genealógico.

### ✅ Cuándo usarlo

- Cuando los datos tienen jerarquía.
- Cuando una cosa depende de otra en varios niveles.

En Python puede representarse con clases, diccionarios anidados o listas de hijos.

---

## 8. Grafo (Graph)

### 📖 Definición

Un **grafo** es un conjunto de nodos conectados por relaciones llamadas aristas.

A diferencia del árbol, un nodo puede conectarse con muchos otros sin una jerarquía única.

```text
Ana ---- Luis
 |        |
 |        |
Marta -- Pedro
```

### Conceptos clave

- **Nodo** o vértice.
- **Arista** o conexión.
- **Dirigido** o no dirigido.
- **Peso** si una conexión tiene costo o distancia.

### Tipos comunes

- Grafos dirigidos.
- Grafos no dirigidos.
- Grafos ponderados.

### 🌍 Ejemplos reales

- Redes sociales.
- Mapas y rutas.
- Recomendación de contactos.

### ✅ Cuándo usarlo

- Cuando lo importante son las conexiones.
- Cuando quieres encontrar rutas, vecinos o caminos.

### ⚠️ Árbol vs Grafo

Todo árbol es un tipo particular de grafo, pero no todo grafo es un árbol.

---

## 9. ¿Cuál elegir?

| Si necesitas... | Estructura sugerida |
|-----------------|---------------------|
| Mantener orden y recorrer datos | **Lista** |
| Acceder por posición fija | **Array / Lista** |
| Deshacer el último paso | **Stack** |
| Atender por orden de llegada | **Queue** |
| Buscar por clave | **Diccionario** |
| Evitar repetidos | **Set** |
| Representar jerarquías | **Árbol** |
| Representar conexiones complejas | **Grafo** |

> 💡 En Python, `list`, `dict`, `set` y `deque` resuelven una gran cantidad de problemas iniciales sin necesidad de estructuras más avanzadas.

---

## 10. Tabla resumen

| Estructura | Ordenada | Repite elementos | Acceso típico | Ejemplo Python |
|-----------|----------|------------------|---------------|----------------|
| Array / Lista | Sí | Sí | Índice | `datos[0]` |
| Stack | Sí | Sí | Último agregado | `append()` / `pop()` |
| Queue | Sí | Sí | Primero en entrar | `deque().popleft()` |
| Diccionario | No por posición | Claves únicas | Clave | `persona["nombre"]` |
| Set | No por posición | No | Pertenencia | `x in conjunto` |
| Árbol | Jerárquico | Depende | Padre / hijo | clases o diccionarios |
| Grafo | Conexiones | Depende | Vecinos / rutas | diccionario de adyacencia |

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Grokking Algorithms** | Aditya Bhargava | Principiante | Explica estructuras y algoritmos con dibujos y ejemplos muy claros |
| **Problem Solving with Algorithms and Data Structures Using Python** | Miller & Ranum | Intermedio | Enfocado directamente en Python |
| **Think Python** | Allen B. Downey | Principiante | Buen punto de entrada para entender listas, diccionarios y conjuntos |
| **Fluent Python** | Luciano Ramalho | Intermedio | Profundiza en las estructuras propias del lenguaje |
| **Data Structures and Algorithms in Python** | Goodrich, Tamassia, Goldwasser | Intermedio / Avanzado | Texto más formal para seguir profundizando |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **Python Tutorial — Data Structures** | https://docs.python.org/3/tutorial/datastructures.html | Guía oficial de listas, pilas y colas en Python |
| **collections.deque** | https://docs.python.org/3/library/collections.html#collections.deque | Referencia oficial para colas y pilas eficientes |
| **Python dict** | https://docs.python.org/3/library/stdtypes.html#mapping-types-dict | Documentación oficial de diccionarios |
| **Python set** | https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset | Documentación oficial de conjuntos |
| **Python Tutor** | https://pythontutor.com/ | Muy útil para ver cómo cambian las estructuras paso a paso |
