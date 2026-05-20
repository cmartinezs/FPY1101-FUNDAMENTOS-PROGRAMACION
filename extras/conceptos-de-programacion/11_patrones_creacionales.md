# Modulo 11 - Patrones de diseno: creacionales

> **Objetivo:** conocer patrones para crear objetos de forma flexible y entender como suelen expresarse en Python.

---

## ¿Que son los patrones de diseno?

Un patron de diseno es una solucion reutilizable para un problema frecuente de arquitectura o diseno de software.

### Las tres familias

| Familia | Pregunta que responde | Modulo |
|---------|-----------------------|--------|
| Creacionales | ¿Como crear objetos? | Este modulo |
| Estructurales | ¿Como organizarlos? | Modulo 12 |
| De comportamiento | ¿Como colaboran? | Modulo 13 |

---

## Patrones creacionales

Se enfocan en el proceso de crear objetos y estructuras iniciales.

---

## Indice

1. [Singleton](#1-singleton)
2. [Factory Method](#2-factory-method)
3. [Abstract Factory](#3-abstract-factory)
4. [Builder](#4-builder)
5. [Prototype](#5-prototype)
6. [Tabla comparativa](#6-tabla-comparativa)
7. [Literatura recomendada](#7-literatura-recomendada)
8. [Enlaces de interes](#8-enlaces-de-interes)

---

## 1. Singleton

### Definicion

Garantiza una unica instancia compartida.

### Casos de uso reales

- Configuracion global
- Registro centralizado
- Cache compartida

### Implementacion en Python

En Python muchas veces basta con un modulo o con una instancia creada una sola vez.

```python
class Configuracion:
    def __init__(self):
        self.modo = "desarrollo"

config = Configuracion()
```

Importar `config` desde distintos lugares ya comparte la misma instancia del modulo cargado.

### Cuando NO usarlo

- Cuando introduces estado global dificil de probar
- Cuando una dependencia explicita seria mas clara

---

## 2. Factory Method

### Definicion

Encapsula la creacion de objetos segun una decision.

### Casos de uso reales

- Crear notificaciones por canal
- Crear parseadores por formato
- Crear conectores por proveedor

### Implementacion en Python

```python
class Email:
    def enviar(self, mensaje):
        print("email:", mensaje)

class SMS:
    def enviar(self, mensaje):
        print("sms:", mensaje)

def crear_notificacion(tipo):
    if tipo == "email":
        return Email()
    if tipo == "sms":
        return SMS()
    raise ValueError("tipo no soportado")
```

### Cuando NO usarlo

Si solo existe una variante y no va a crecer, puede ser exceso.

---

## 3. Abstract Factory

### Definicion

Crea familias de objetos relacionados.

### Casos de uso reales

- Tema claro / oscuro
- Base de datos local / remota
- Servicios para distintos paises

### Implementacion en Python

```python
class BotonClaro:
    def renderizar(self):
        print("boton claro")

class BotonOscuro:
    def renderizar(self):
        print("boton oscuro")

def crear_componentes(tema):
    if tema == "claro":
        return {"boton": BotonClaro()}
    if tema == "oscuro":
        return {"boton": BotonOscuro()}
    raise ValueError("tema invalido")
```

### Nota Pythonica

En Python muchas veces este patron se implementa con funciones, diccionarios o modulos, no necesariamente con jerarquias complejas.

---

## 4. Builder

### Definicion

Construye objetos complejos paso a paso.

### Casos de uso reales

- Configurar consultas
- Crear reportes
- Armar objetos con muchas opciones

### Implementacion en Python

```python
class ConsultaBuilder:
    def __init__(self):
        self.partes = []

    def seleccionar(self, texto):
        self.partes.append(f"SELECT {texto}")
        return self

    def desde(self, tabla):
        self.partes.append(f"FROM {tabla}")
        return self

    def construir(self):
        return " ".join(self.partes)

consulta = ConsultaBuilder().seleccionar("*").desde("clientes").construir()
```

---

## 5. Prototype

### Definicion

Consiste en crear objetos copiando uno existente.

### Casos de uso reales

- Plantillas
- Configuraciones base
- Objetos con muchos valores repetidos

### Implementacion en Python

```python
from copy import copy

base = {"rol": "estudiante", "activo": True}
otro = copy(base)
otro["rol"] = "docente"
```

---

## 6. Tabla comparativa

| Patron | Problema que resuelve | Forma comun en Python |
|--------|------------------------|-----------------------|
| Singleton | Instancia unica | modulo o instancia compartida |
| Factory Method | Elegir que objeto crear | funcion o clase fabrica |
| Abstract Factory | Crear familias coherentes | funciones que devuelven conjuntos relacionados |
| Builder | Construccion paso a paso | builder fluido o helper |
| Prototype | Clonar configuraciones | `copy()` o `deepcopy()` |

---

## 7. Literatura recomendada

- Erich Gamma et al., *Design Patterns*
- Luciano Ramalho, *Fluent Python*

---

## 8. Enlaces de interes

- https://docs.python.org/3/library/copy.html
