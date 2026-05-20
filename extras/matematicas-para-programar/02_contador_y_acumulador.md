# Módulo 02 — Contador y acumulador

> **Objetivo:** dominar los dos patrones matemáticos más frecuentes en programación: el contador (cuántos) y el acumulador (cuánto en total), y derivar de ellos el promedio.

---

## 2.1 ¿Qué es un contador?

Un **contador** es una variable que **aumenta (o disminuye) en una cantidad fija**, generalmente 1, cada vez que ocurre un evento.

```
contador = contador + 1   →   contador += 1
```

### Estructura básica

```python
contador = 0  # siempre se inicializa antes de usarlo

# Cada vez que ocurre el evento:
contador += 1  # equivale a: contador = contador + 1
```

> ⚠️ El error más común: olvidar inicializar el contador en `0` antes del bucle.

---

## 2.2 Casos de uso del contador

### Contar elementos de una lista

```python
tickets = ["ABIERTO", "CERRADO", "ABIERTO", "ABIERTO", "CERRADO"]

abiertos = 0
cerrados = 0

for estado in tickets:
    if estado == "ABIERTO":
        abiertos += 1
    else:
        cerrados += 1

print(f"Tickets abiertos: {abiertos}")   # 3
print(f"Tickets cerrados: {cerrados}")    # 2
```

### Contar intentos de login fallidos

```python
intentos_fallidos = 0
LIMITE = 3

while intentos_fallidos < LIMITE:
    login_ok = intentar_login(usuario, password)

    if login_ok:
        print("Bienvenido")
        break
    else:
        intentos_fallidos += 1
        print(f"Contraseña incorrecta. Intento {intentos_fallidos} de {LIMITE}")

if intentos_fallidos == LIMITE:
    print("Cuenta bloqueada por demasiados intentos")
```

### Contador descendente (cuenta regresiva)

```python
# Temporizador de 5 segundos
segundos = 5

while segundos > 0:
    print(f"Tiempo restante: {segundos}s")
    segundos -= 1  # decremento

print("¡Tiempo!")
```

### Contar con Python moderno

```python
tickets = [
    {"estado": "ABIERTO", "prioridad": 3},
    {"estado": "CERRADO", "prioridad": 1},
    {"estado": "ABIERTO", "prioridad": 2},
    {"estado": "ABIERTO", "prioridad": 5},
]

# Contar abiertos
abiertos = sum(1 for t in tickets if t["estado"] == "ABIERTO")
print(abiertos)  # 3

# Contar con filter
cerrados = len(list(filter(lambda t: t["estado"] == "CERRADO", tickets)))
print(cerrados)  # 1
```

---

## 2.3 ¿Qué es un acumulador?

Un **acumulador** es una variable que **suma (o acumula) valores variables** en cada iteración. A diferencia del contador, no suma siempre 1, sino el valor de cada elemento.

```
acumulador = acumulador + valorActual   →   acumulador += valorActual
```

### Estructura básica

```python
total = 0.0  # siempre inicializado en 0

for valor in valores:
    total += valor  # acumula cada valor
```

---

## 2.4 Casos de uso del acumulador

### Sumar precios de un carrito

```python
precios = [9990.0, 15500.0, 3200.0, 8750.0]

total_carrito = 0.0

for precio in precios:
    total_carrito += precio

print(f"Total del carrito: ${total_carrito:,.2f}")
# Total del carrito: $37,440.00
```

### Acumular puntos de fidelidad

```python
compras = [5000, 12000, 3500, 8000]
puntos_acumulados = 0
PUNTOS_POR_CADA_1000 = 1  # 1 punto por cada $1000 gastados

for compra in compras:
    puntos_acumulados += compra // 1000  # división entera intencional

print(f"Puntos acumulados: {puntos_acumulados}")  # 28 puntos
```

### Calcular total de horas trabajadas

```python
horas_por_dia = [8.0, 7.5, 8.0, 6.5, 9.0]
total_horas = 0.0

for horas in horas_por_dia:
    total_horas += horas

print(f"Total semanal: {total_horas:.1f} horas")  # 39.0 horas
```

---

## 2.5 Combinando contador y acumulador: el promedio

El **promedio** (o media aritmética) combina ambos patrones:

```
promedio = total / cantidad
```

```python
notas = [65, 80, 72, 90, 58, 88]

suma_notas = 0      # acumulador
cantidad_notas = 0  # contador

for nota in notas:
    suma_notas    += nota   # acumula
    cantidad_notas += 1     # cuenta

promedio = suma_notas / cantidad_notas

print(f"Promedio: {promedio:.2f}")  # 75.50
```

> ⚠️ **Error clásico:** en Python 3 esto funciona bien porque `/` siempre devuelve float. Pero si usas `//` (división entera), perderías los decimales.

### Con funciones modernas de Python

```python
notas = [65, 80, 72, 90, 58, 88]

promedio = sum(notas) / len(notas)
print(f"Promedio: {promedio:.2f}")  # 75.50
```

---

## 2.6 Máximo, mínimo y rango

Derivados naturales de recorrer una colección:

```python
ventas = [1200, 8500, 450, 3300, 9900, 670]

max_venta = ventas[0]  # se inicializa con el primer elemento
min_venta = ventas[0]

for venta in ventas:
    if venta > max_venta:
        max_venta = venta
    if venta < min_venta:
        min_venta = venta

rango = max_venta - min_venta

print(f"Venta máxima:  ${max_venta:,}")  # $9900
print(f"Venta mínima:  ${min_venta:,}")  # $450
print(f"Rango:         ${rango:,}")       # $9450
```

### Con funciones built-in

```python
maximo = max(ventas)
minimo = min(ventas)
rango = maximo - minimo
```

---

## 2.7 Tabla resumen de patrones

| Patrón | Variable inicial | Operación en bucle | Para qué sirve |
|--------|-----------------|-------------------|----------------|
| **Contador** | `0` | `count += 1` o `count -= 1` | Cuántas veces ocurre algo |
| **Acumulador** | `0` o `0.0` | `total += valor` | Suma de valores variables |
| **Promedio** | `0` y `0` | `suma += val; count += 1` | Media de un conjunto |
| **Máximo** | `lista[0]` | `if v > max: max = v` | Valor más alto |
| **Mínimo** | `lista[0]` | `if v < min: min = v` | Valor más bajo |

---

## Resumen

- El **contador** suma 1 en cada evento → cuenta ocurrencias.
- El **acumulador** suma el valor actual → totaliza cantidades.
- El **promedio** = acumulador / contador → en Python 3 `/` ya devuelve float.
- Inicializar siempre en `0` (o `lista[0]` para máx/mín).
- Python moderno tiene `sum()`, `len()`, `max()`, `min()` que hacen el trabajo por ti.

→ [Siguiente módulo: Porcentajes, descuentos y cargos](./03_porcentajes_descuentos_y_cargos.md)