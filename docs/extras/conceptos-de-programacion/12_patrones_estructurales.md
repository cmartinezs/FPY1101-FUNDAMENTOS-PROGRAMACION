# Modulo 12 - Patrones de diseno: estructurales

> **Objetivo:** conocer patrones que ayudan a combinar objetos y responsabilidades sin acoplar demasiado el codigo.

---

## ¿Que son los patrones estructurales?

Son patrones que muestran como organizar clases, objetos o interfaces para que colaboren mejor.

---

## Indice

1. [Adapter (Adaptador)](#1-adapter-adaptador)
2. [Decorator (Decorador)](#2-decorator-decorador)
3. [Facade (Fachada)](#3-facade-fachada)
4. [Composite (Compuesto)](#4-composite-compuesto)
5. [Proxy](#5-proxy)
6. [Tabla comparativa](#6-tabla-comparativa)
7. [Literatura recomendada](#7-literatura-recomendada)
8. [Enlaces de interes](#8-enlaces-de-interes)

---

## 1. Adapter (Adaptador)

### Definicion

Convierte una interfaz en otra que el cliente espera.

### Casos de uso reales

- Adaptar datos de una API externa
- Conectar codigo nuevo con una libreria vieja

### Implementacion en Python

```python
class ServicioExterno:
    def obtener_usuario(self):
        return {"full_name": "Ana"}

class AdaptadorUsuario:
    def __init__(self, servicio):
        self.servicio = servicio

    def obtener_nombre(self):
        datos = self.servicio.obtener_usuario()
        return datos["full_name"]
```

### Cuando NO usarlo

Si puedes corregir la interfaz original sin costo real, el adaptador sobra.

---

## 2. Decorator (Decorador)

### Definicion

Agrega comportamiento sin cambiar la clase base.

### Casos de uso reales

- Logging
- Validacion
- Cache

### Implementacion en Python

Python tiene decoradores como sintaxis natural.

```python
def registrar(func):
    def envoltura(*args, **kwargs):
        print("antes")
        resultado = func(*args, **kwargs)
        print("despues")
        return resultado
    return envoltura

@registrar
def saludar():
    print("hola")
```

---

## 3. Facade (Fachada)

### Definicion

Ofrece una interfaz simple para un subsistema mas complejo.

### Casos de uso reales

- Ocultar varios pasos de una compra
- Simplificar acceso a varios servicios

### Implementacion en Python

```python
class TiendaFacade:
    def comprar(self):
        print("validar stock")
        print("cobrar")
        print("emitir boleta")
```

---

## 4. Composite (Compuesto)

### Definicion

Permite tratar objetos individuales y grupos de objetos de la misma forma.

### Casos de uso reales

- Arboles de carpetas
- Menus
- Componentes visuales

### Implementacion en Python

```python
class Archivo:
    def mostrar(self):
        print("archivo")

class Carpeta:
    def __init__(self):
        self.elementos = []

    def agregar(self, elemento):
        self.elementos.append(elemento)

    def mostrar(self):
        for elemento in self.elementos:
            elemento.mostrar()
```

---

## 5. Proxy

### Definicion

Controla el acceso a otro objeto.

### Casos de uso reales

- Cache
- Permisos
- Carga diferida

### Implementacion en Python

```python
class ServicioReal:
    def obtener(self):
        print("datos reales")

class ProxyServicio:
    def __init__(self):
        self.servicio = ServicioReal()

    def obtener(self):
        print("verificando acceso")
        self.servicio.obtener()
```

---

## 6. Tabla comparativa

| Patron | Idea central |
|--------|--------------|
| Adapter | Cambiar interfaz |
| Decorator | Agregar comportamiento |
| Facade | Simplificar subsistema |
| Composite | Tratar parte y todo igual |
| Proxy | Controlar acceso |

### Decorator vs Proxy

Ambos envuelven otro objeto, pero:

- **Decorator** agrega capacidades
- **Proxy** controla acceso o momento de uso

---

## 7. Literatura recomendada

- Erich Gamma et al., *Design Patterns*
- Luciano Ramalho, *Fluent Python*

---

## 8. Enlaces de interes

- https://docs.python.org/3/glossary.html#term-decorator
