# Módulo 07 — Principios de buen código

> **Objetivo:** conocer los principios universales que separan el código que *funciona* del código que *se puede mantener*. No son reglas de un lenguaje: son principios que también aplican cuando programas en Python.

---

## ¿Por qué importan estos principios?

Hacer que un programa funcione es solo la primera etapa. En el mundo real, el código:

- Lo leerán otras personas (o tú mismo en 6 meses).
- Se modificará muchas veces.
- Tendrá que crecer sin romperse.

> 📌 "Cualquier tonto puede escribir código que una computadora entiende. Los buenos programadores escriben código que los humanos entienden." — Martin Fowler

---

## Índice

1. [DRY — Don't Repeat Yourself](#1-dry--dont-repeat-yourself)
2. [KISS — Keep It Simple, Stupid](#2-kiss--keep-it-simple-stupid)
3. [YAGNI — You Aren't Gonna Need It](#3-yagni--you-arent-gonna-need-it)
4. [Fail Fast](#4-fail-fast)
5. [Principio de responsabilidad única (SRP)](#5-principio-de-responsabilidad-única-srp)
6. [Nombres que explican la intención](#6-nombres-que-explican-la-intención)
7. [Funciones pequeñas y con propósito único](#7-funciones-pequeñas-y-con-propósito-único)
8. [Comentarios: cuándo sí, cuándo no](#8-comentarios-cuándo-sí-cuándo-no)
9. [Números mágicos](#9-números-mágicos)
10. [Tabla resumen](#10-tabla-resumen)
11. [📚 Literatura recomendada](#-literatura-recomendada)
12. [🔗 Enlaces de interés](#-enlaces-de-interés)

---

## 1. DRY — Don't Repeat Yourself

### 📖 Definición

**"No te repitas"**: cada pieza de conocimiento o lógica debería tener **un solo lugar confiable** en el código. Si copias y pegas, probablemente estás violando DRY.

### 🐍 En Python

```python
# ❌ DRY violado: la misma lógica repetida
def calcular_total_con_iva(precio):
    return precio * 1.19


def calcular_precio_final(precio):
    return precio * 1.19
```

```python
# ✅ DRY aplicado
IVA = 0.19


def aplicar_iva(precio):
    return precio * (1 + IVA)


def calcular_total_con_iva(precio):
    return aplicar_iva(precio)


def calcular_precio_final(precio):
    return aplicar_iva(precio)
```

### ⚠️ Consecuencia de violar DRY

Si el IVA cambia, en el código ❌ debes buscar la lógica repetida en varios lugares. En el código ✅ cambias una sola cosa.

> ⚠️ **Cuidado:** DRY no significa forzar reutilización cuando dos cosas solo se parecen por fuera. DRY aplica al **conocimiento duplicado**, no a cualquier coincidencia superficial.

---

## 2. KISS — Keep It Simple, Stupid

### 📖 Definición

**"Mantenlo simple"**: si dos soluciones funcionan, normalmente conviene elegir la más simple y clara.

### 🐍 En Python

```python
# ❌ Demasiada vuelta para saber si un número es par
def es_par(numero):
    if numero % 2 == 0:
        return True
    else:
        return False
```

```python
# ✅ Más simple
def es_par(numero):
    return numero % 2 == 0
```

```python
# ❌ Sobre-ingeniería para aplicar un descuento
class CalculadoraDeDescuentoEspecializada:
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje

    def ejecutar_calculo_descuento_final(self, precio):
        return precio - (precio * self.porcentaje / 100)
```

```python
# ✅ Solución directa para el problema actual
def aplicar_descuento(precio, porcentaje):
    return precio * (1 - porcentaje / 100)
```

### ⚠️ KISS no es "hacerlo rápido y mal"

Simple no significa descuidado. Significa evitar complejidad innecesaria.

---

## 3. YAGNI — You Aren't Gonna Need It

### 📖 Definición

**"No lo vas a necesitar"**: no implementes hoy una funcionalidad que nadie te pidió todavía.

### 🐍 En Python

```python
# ❌ YAGNI violado: preparar múltiples monedas sin necesidad real
class Precio:
    def __init__(self, valor, moneda="CLP", tasa_cambio=1.0):
        self.valor = valor
        self.moneda = moneda
        self.tasa_cambio = tasa_cambio

    def convertir_a(self, otra_moneda):
        # lógica que hoy nadie necesita
        return self.valor * self.tasa_cambio
```

```python
# ✅ YAGNI aplicado: resolver el problema real de hoy
class Precio:
    def __init__(self, valor_en_pesos):
        self.valor_en_pesos = valor_en_pesos

    def obtener_valor(self):
        return self.valor_en_pesos
```

### ⚠️ YAGNI no significa "cerrar la puerta al futuro"

Significa no agregar complejidad por escenarios imaginarios. Cuando el requisito aparezca de verdad, se diseña con información real.

---

## 4. Fail Fast

### 📖 Definición

**"Falla pronto"**: valida temprano y reporta el error cerca de su origen.

### 🐍 En Python

```python
# ❌ Fail slow: el error aparece lejos del problema real
def procesar_pedido(pedido):
    cliente = pedido["cliente"]
    nombre = cliente["nombre"]
    print("Procesando pedido de", nombre)
```

```python
# ✅ Fail fast: validar al inicio
def procesar_pedido(pedido):
    if pedido is None:
        raise ValueError("El pedido no puede ser None")
    if "cliente" not in pedido:
        raise ValueError("El pedido debe incluir un cliente")
    if "nombre" not in pedido["cliente"]:
        raise ValueError("El cliente debe incluir nombre")

    nombre = pedido["cliente"]["nombre"]
    print("Procesando pedido de", nombre)
```

### ✅ Beneficios

- El error se detecta antes.
- El mensaje es claro.
- El resto de la función puede asumir que los datos son válidos.

---

## 5. Principio de responsabilidad única (SRP)

### 📖 Definición

Cada módulo, clase o función debe tener **una sola razón para cambiar**.

> 📌 En cursos iniciales de Python, muchas veces aplicar SRP significa **separar funciones**, no necesariamente crear muchas clases.

### 🐍 En Python

```python
# ❌ Hace demasiadas cosas
def procesar_ticket(ticket):
    costo = ticket["horas"] * 15000
    ticket["costo"] = costo
    print("Guardando ticket...")
    print("Enviando correo...")
    return f"Ticket listo: {ticket}"
```

```python
# ✅ Cada función con una responsabilidad
TARIFA_HORA = 15000


def calcular_costo(ticket):
    return ticket["horas"] * TARIFA_HORA


def guardar_ticket(ticket):
    print("Guardando ticket...")


def notificar_cliente(ticket):
    print("Enviando correo...")


def procesar_ticket(ticket):
    ticket["costo"] = calcular_costo(ticket)
    guardar_ticket(ticket)
    notificar_cliente(ticket)
    return ticket
```

---

## 6. Nombres que explican la intención

### 📖 Definición

Los nombres deben **decir qué representa cada cosa** sin obligar a leer todo el código.

### 🐍 En Python

```python
# ❌ Nombres poco claros
d = 30
lst = []

def proc(l):
    for x in l:
        if x["dias"] > d:
            lst.append(x)
```

```python
# ✅ Nombres claros
DIAS_LIMITE_VENCIMIENTO = 30

tickets_vencidos = []

def filtrar_tickets_vencidos(tickets):
    for ticket in tickets:
        if ticket["dias"] > DIAS_LIMITE_VENCIMIENTO:
            tickets_vencidos.append(ticket)
```

### Guía de nombres por tipo

| Qué nombrar | Convención | Criterio |
|-------------|-----------|---------|
| **Variable booleana** | `es_activo`, `tiene_descuento`, `puede_editar` | Suena a pregunta |
| **Función que retorna valor** | `calcular_total()`, `obtener_nombre()` | Verbo + idea clara |
| **Función de acción** | `procesar_pago()`, `validar_datos()` | Verbo de acción |
| **Clase** | `Pedido`, `Usuario`, `CalculadoraIVA` | Sustantivo claro |
| **Constante** | `MAX_INTENTOS`, `TASA_IVA`, `DIAS_LIMITE` | UPPER_SNAKE_CASE |

---

## 7. Funciones pequeñas y con propósito único

### 📖 Definición

Una función debería **hacer una sola cosa y hacerla bien**. Si para explicarla dices "esta función hace esto **y** esto otro", probablemente ya creció demasiado.

### 🐍 En Python

```python
# ❌ Hace demasiado
def procesar_y_guardar_y_notificar(ticket):
    if "descripcion" not in ticket:
        raise ValueError("Falta la descripción")

    ticket["costo"] = ticket["horas"] * 15000
    print("Guardando en base de datos")
    print("Enviando correo al cliente")
    print("Registrando en log")
```

```python
# ✅ Más claro y mantenible
TARIFA_HORA = 15000


def validar_ticket(ticket):
    if "descripcion" not in ticket:
        raise ValueError("Falta la descripción")


def asignar_costo(ticket):
    ticket["costo"] = ticket["horas"] * TARIFA_HORA


def guardar_ticket(ticket):
    print("Guardando en base de datos")


def notificar_cliente(ticket):
    print("Enviando correo al cliente")


def procesar_ticket(ticket):
    validar_ticket(ticket)
    asignar_costo(ticket)
    guardar_ticket(ticket)
    notificar_cliente(ticket)
```

> 💡 `procesar_ticket()` ahora se lee casi como una tabla de contenidos.

---

## 8. Comentarios: cuándo sí, cuándo no

### 📖 Definición

Un buen comentario explica el **por qué**, no lo obvio del **qué**.

### 🐍 En Python

```python
# ❌ Comentario que solo repite el código
# Incrementa el contador
contador += 1
```

```python
# ✅ Comentario que aporta contexto
# Reintentamos con espera creciente para no saturar el servicio externo.
espera = 2 ** intento
```

```python
# ✅ Comentario útil sobre una decisión no obvia
# Usamos 30 días porque así lo define la regla de negocio del curso.
DIAS_LIMITE_VENCIMIENTO = 30
```

### Regla práctica

```
¿El código ya dice QUÉ hace? → No comentes eso
¿Hace falta explicar POR QUÉ se hace así? → Comenta
¿Hay una decisión rara, una regla de negocio o una limitación? → Comenta
```

---

## 9. Números mágicos

### 📖 Definición

Un **número mágico** es un literal que aparece en el código sin contexto.

### 🐍 En Python

```python
# ❌ ¿Qué significan 0.19, 3 y 30?
total = precio * 1.19
if intentos > 3:
    print("Bloquear usuario")
if dias > 30:
    print("Ticket vencido")
```

```python
# ✅ Constantes con nombre
TASA_IVA = 0.19
MAX_INTENTOS_LOGIN = 3
DIAS_LIMITE_VENCIMIENTO = 30

total = precio * (1 + TASA_IVA)
if intentos > MAX_INTENTOS_LOGIN:
    print("Bloquear usuario")
if dias > DIAS_LIMITE_VENCIMIENTO:
    print("Ticket vencido")
```

---

## 10. Tabla resumen

| Principio | En una línea | Señal de que se viola |
|-----------|-------------|----------------------|
| **DRY** | No repitas lógica | Copiar y pegar |
| **KISS** | Elige la solución más simple que funcione | Sobre-ingeniería |
| **YAGNI** | Haz lo que necesitas hoy | Código pensado para un futuro imaginario |
| **Fail Fast** | Detecta errores al inicio | Fallas lejanas y mensajes confusos |
| **SRP** | Una función o módulo, una responsabilidad | Funciones que hacen demasiadas cosas |
| **Nombres claros** | El nombre revela la intención | Variables crípticas |
| **Funciones pequeñas** | Una función, una tarea principal | Bloques enormes |
| **Sin números mágicos** | Usa constantes con nombre | Literales sin contexto |

---

## 📚 Literatura recomendada

| Libro | Autores | Nivel | Por qué leerlo |
|-------|---------|-------|----------------|
| **Clean Code** | Robert C. Martin | Intermedio | Referencia clásica sobre nombres, funciones, comentarios y mantenimiento |
| **The Pragmatic Programmer** | Hunt & Thomas | Principiante / Intermedio | Introduce ideas como DRY y pensamiento práctico para escribir mejor software |
| **A Philosophy of Software Design** | John Ousterhout | Intermedio / Avanzado | Complementa y discute críticamente varias ideas de diseño |
| **Refactoring** | Martin Fowler | Intermedio | Enseña cómo mejorar código ya existente paso a paso |
| **Beyond the Basic Stuff with Python** | Al Sweigart | Principiante / Intermedio | Lleva buenas prácticas directamente al día a día de Python |

---

## 🔗 Enlaces de interés

| Recurso | URL | Por qué vale la pena |
|---------|-----|----------------------|
| **PEP 8** | https://peps.python.org/pep-0008/ | Guía de estilo de Python: nombres, formato y convenciones |
| **The Zen of Python** | https://peps.python.org/pep-0020/ | Resume la filosofía de legibilidad y simplicidad del lenguaje |
| **Refactoring.Guru — Code Smells** | https://refactoring.guru/es/refactoring/smells | Catálogo útil de problemas de diseño y mantenimiento |
| **Real Python — Python Code Quality** | https://realpython.com/python-code-quality/ | Artículos prácticos sobre legibilidad y calidad de código en Python |
| **Clean Code in Python** | https://www.packtpub.com/en-us/product/clean-code-in-python-9781800560215 | Recurso centrado en trasladar estos principios al estilo Python |
