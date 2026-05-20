# Modulo 13 - Patrones de diseno: comportamiento

> **Objetivo:** reconocer patrones que organizan decisiones, mensajes y cambios de estado entre objetos o funciones.

---

## ¿Que son los patrones de comportamiento?

Se enfocan en como colaboran los componentes del sistema y como reparten responsabilidades.

---

## Indice

1. [Observer (Observador)](#1-observer-observador)
2. [Strategy (Estrategia)](#2-strategy-estrategia)
3. [Command (Comando)](#3-command-comando)
4. [Template Method (Metodo plantilla)](#4-template-method-metodo-plantilla)
5. [Chain of Responsibility (Cadena de responsabilidad)](#5-chain-of-responsibility-cadena-de-responsabilidad)
6. [State (Estado)](#6-state-estado)
7. [Tabla comparativa](#7-tabla-comparativa)
8. [Literatura recomendada](#8-literatura-recomendada)
9. [Enlaces de interes](#9-enlaces-de-interes)

---

## 1. Observer (Observador)

### Definicion

Cuando un objeto cambia, notifica a otros interesados.

### Casos de uso reales

- Eventos de interfaz
- Suscripciones
- Sistemas de alertas

### Implementacion en Python

```python
class Canal:
    def __init__(self):
        self.suscriptores = []

    def suscribir(self, funcion):
        self.suscriptores.append(funcion)

    def publicar(self, mensaje):
        for suscriptor in self.suscriptores:
            suscriptor(mensaje)
```

---

## 2. Strategy (Estrategia)

### Definicion

Encapsula distintas formas de resolver una misma tarea.

### Casos de uso reales

- Distintos descuentos
- Distintas rutas de envio
- Distintos algoritmos de ordenamiento o validacion

### Implementacion en Python

```python
def descuento_estudiante(total):
    return total * 0.9

def descuento_normal(total):
    return total

def cobrar(total, estrategia):
    return estrategia(total)
```

---

## 3. Command (Comando)

### Definicion

Convierte una accion en un objeto o callable que puede ejecutarse despues.

### Casos de uso reales

- Menus
- Botones
- Tareas en cola

### Implementacion en Python

```python
def guardar():
    print("guardando")

def ejecutar(comando):
    comando()

ejecutar(guardar)
```

En Python muchas veces basta una funcion, no una clase especial.

---

## 4. Template Method (Metodo plantilla)

### Definicion

Define el esqueleto de un algoritmo y deja algunos pasos para especializacion.

### Casos de uso reales

- Procesos con pasos fijos
- Importacion de distintos formatos

### Implementacion en Python

```python
class Procesador:
    def ejecutar(self, dato):
        dato = self.cargar(dato)
        dato = self.transformar(dato)
        self.guardar(dato)

    def cargar(self, dato):
        return dato

    def transformar(self, dato):
        return dato

    def guardar(self, dato):
        print(dato)
```

---

## 5. Chain of Responsibility (Cadena de responsabilidad)

### Definicion

Pasa una solicitud por una cadena de manejadores hasta que alguno la resuelve.

### Casos de uso reales

- Validaciones
- Middleware web
- Filtros de autorizacion

### Implementacion en Python

```python
def validar_no_vacio(texto):
    if not texto:
        raise ValueError("texto vacio")
    return texto

def validar_largo(texto):
    if len(texto) < 3:
        raise ValueError("texto muy corto")
    return texto

def procesar(texto):
    texto = validar_no_vacio(texto)
    texto = validar_largo(texto)
    return texto
```

---

## 6. State (Estado)

### Definicion

El comportamiento cambia segun el estado actual del objeto.

### Casos de uso reales

- Pedido pendiente, pagado o enviado
- Semaforo
- Reproductor multimedia

### Implementacion en Python

```python
class Pedido:
    def __init__(self):
        self.estado = "pendiente"

    def pagar(self):
        if self.estado != "pendiente":
            raise ValueError("solo se puede pagar un pedido pendiente")
        self.estado = "pagado"
```

---

## 7. Tabla comparativa

| Patron | Problema que resuelve | Forma pythonica comun |
|--------|------------------------|------------------------|
| Observer | Notificar cambios | callbacks, señales, listeners |
| Strategy | Cambiar algoritmo | funciones, callables, clases |
| Command | Encapsular acciones | funciones o objetos ejecutables |
| Template Method | Esqueleto fijo | clase base con pasos redefinibles |
| Chain of Responsibility | Validar o filtrar por etapas | pipeline de funciones |
| State | Cambiar comportamiento por estado | atributos de estado y metodos |

---

## 8. Literatura recomendada

- Erich Gamma et al., *Design Patterns*
- Luciano Ramalho, *Fluent Python*

---

## 9. Enlaces de interes

- https://docs.python.org/3/tutorial/classes.html
