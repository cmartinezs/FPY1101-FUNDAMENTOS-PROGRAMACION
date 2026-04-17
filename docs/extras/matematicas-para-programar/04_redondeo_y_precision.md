# Módulo 04 — Redondeo y precisión decimal

> **Objetivo:** entender por qué los decimales en programación no son exactos, cómo redondear correctamente y cuándo usar `Decimal` en lugar de `float`.

---

## 4.1 El problema con los decimales en computación

Las computadoras almacenan los números decimales en binario (base 2). Algunos decimales como `0.1` o `0.3` **no pueden representarse de forma exacta** en binario, del mismo modo que `1/3` no puede escribirse de forma exacta en decimal (0.333…).

```python
print(0.1 + 0.2)          # 0.30000000000000004  ← NO es 0.3
print(1.0 - 0.9)          # 0.09999999999999998  ← NO es 0.1
print(0.1 * 3)            # 0.30000000000000004
print(10.0 / 3.0 * 3.0)  # 10.000000000000002   ← NO es 10
```

> 📌 Esto no es un bug de Python — es el estándar IEEE 754 que usan prácticamente todos los lenguajes (JavaScript, Java, C, etc.).

### ¿Cuándo importa?

| Contexto | ¿Importa la precisión exacta? | Solución |
|----------|------------------------------|----------|
| Cálculos de física o estadística | A veces | `float` suele ser suficiente |
| Mostrar precios en pantalla | Sí (2 decimales) | Redondear con f-string |
| Operaciones financieras / dinero | **Siempre** | `Decimal` |
| Comparar decimales con `==` | **Nunca uses `==`** | Usar tolerancia o `Decimal` |

---

## 4.2 La clase `math`

Python incluye el módulo `math` con funciones para operaciones matemáticas comunes.

### Funciones de redondeo

| Función | Descripción | Ejemplo | Resultado |
|---------|-------------|---------|-----------|
| `round(x)` | Redondea al entero más cercano (≥0.5 sube) | `round(4.5)` | `5` |
| `round(x, n)` | Redondea a n decimales | `round(4.567, 2)` | `4.57` |
| `math.floor(x)` | Redondea **hacia abajo** (piso) | `math.floor(4.9)` | `4` |
| `math.ceil(x)` | Redondea **hacia arriba** (techo) | `math.ceil(4.1)` | `5` |
| `math.abs(x)` | Valor absoluto (quita el signo negativo) | `abs(-7)` | `7` |

```python
import math

valor = 4.567

print(round(valor))      # 5
print(math.floor(valor)) # 4
print(math.ceil(valor))  # 5
```

### Redondear a N decimales con `round`

```python
precio = 9990.567

# Redondear a 2 decimales
redondeado = round(precio, 2)
print(redondeado)  # 9990.57

# Para 3 decimales: round(precio, 3)
```

### Otras funciones útiles de `math`

```python
import math

# Potencia: x elevado a la n
print(math.pow(2, 10))  # 1024.0

# Raíz cuadrada
print(math.sqrt(16))   # 4.0
print(math.sqrt(2))    # 1.4142135623730951

# Máximo y mínimo entre dos valores
print(max(15, 8))   # 15
print(min(15, 8))   # 8

# Valor absoluto
print(abs(-42))     # 42
print(abs(-3.14))   # 3.14

# Número aleatorio (necesita import random)
import random
aleatorio = random.random()  # ej: 0.7432...

# Número entero aleatorio entre min y max (inclusive)
dado = random.randint(1, 6)  # 1 a 6
```

---

## 4.3 Formatear decimales con f-string

Para **mostrar** un número con cierta cantidad de decimales (sin necesariamente redondear el valor en memoria):

```python
precio = 9990.5

# .2f → decimal con 2 cifras después del punto
print(f"{precio:.2f}")  # "9990.50"

# ,.2f → con separador de miles (la coma)
print(f"Precio: ${precio:,.2f}")  # "Precio: $9,990.50"

# Formatear porcentaje
porcentaje = 0.1567
print(f"Tasa: {porcentaje * 100:.1f}%")  # "Tasa: 15.7%"
```

> 💡 El formateo no modifica la variable — solo formatea la representación textual para mostrarla. La variable `precio` sigue valiendo `9990.5`.

---

## 4.4 Formateo de texto y números con f-string

El formateo con f-strings es muy potente para crear salidas tabulares nice.

### Alineación de texto

| Especificador | Descripción | Ejemplo |
|---------------|-------------|---------|
| `{texto:<n}` | Alinear a la **izquierda** (n caracteres) | `f"{'hola':<10}"` → `"hola      "` |
| `{texto:>n}` | Alinear a la **derecha** (n caracteres) | `f"{'hola':>10}"` → `"      hola"` |
| `{texto:^n}` | Centrar en n caracteres | `f"{'hola':^10}"` → `"   hola   "` |

```python
# Ejemplo de tabla
productos = [
    {"nombre": "Teclado", "precio": 29990},
    {"nombre": "Mouse", "precio": 15500},
    {"nombre": "Monitor", "precio": 189990},
]

print(f"{'Producto':<12} {'Precio':>10}")
print("-" * 22)
for p in productos:
    print(f"{p['nombre']:<12} ${p['precio']:>9,}")
```

**Salida:**
```
Producto         Precio
----------------------
Teclado       $ 29,990
Mouse         $ 15,500
Monitor       $189,990
```

### Formato de números

| Especificador | Descripción | Ejemplo |
|---------------|-------------|---------|
| `,` | Separador de miles | `f"{1000000:,}"` → `"1,000,000"` |
| `.2f` | 2 decimales fijos | `f"{3.14159:.2f}"` → `"3.14"` |
| `.0f` | Sin decimales | `f"{3.7:.0f}"` → `"4"` |
| `06d` | Rellenar con ceros (enteros) | `f"{5:06d}"` → `"000005"` |
| `.2%` | Porcentaje | `f"{0.1567:.2%}"` → `"15.67%"` |
| `e` | Notación científica | `f"{1234:.2e}"` → `"1.23e+03"` |

```python
numero = 1234

# Separador de miles
print(f"{numero:,}")           # 1,234

# Rellenar con ceros
print(f"{numero:010,}")        # 000001,234

# Decimales
pi = 3.14159265
print(f"{pi:.2f}")             # 3.14
print(f"{pi:.5f}")             # 3.14159

# Porcentaje
tasa = 0.1567
print(f"{tasa:.1%}")           # 15.7%

# Enteros alineados (útil para facturas)
print(f"001: ${10000:,}")
print(f"002: ${25000:,}")
print(f"003: ${5000:,}")
```

### Combinaciones útiles

```python
# Tabla de carrito de compras (caso real)
items = [
    {"nombre": "Teclado", "cantidad": 1, "precio": 29990},
    {"nombre": "Mouse", "cantidad": 2, "precio": 15500},
]

print(f"{'Item':<10} {'Cant':>5} {'Precio':>10} {'Subtotal':>12}")
print("-" * 40)
for item in items:
    subtotal = item["cantidad"] * item["precio"]
    print(f"{item['nombre']:<10} {item['cantidad']:>5} ${item['precio']:>9,} ${subtotal:>11,}")
```

**Salida:**
```
Item         Cant     Precio     Subtotal
----------------------------------------
Teclado          1  $   29,990  $     29,990
Mouse            2  $   15,500  $     31,000
```

### Resumen de especificadores

| Tipo | Sintaxis | Ejemplo | Resultado |
|------|----------|---------|-----------|
| Entero con ceros | `{n:0Xd}` | `{5:05d}` | `00005` |
| Decimal fijo | `{n:.Yf}` | `{3.14159:.2f}` | `3.14` |
| Separador miles | `{n:,}` | `{1000000:,}` | `1,000,000` |
| Porcentaje | `{n:.Y%}` | `{0.5:.1%}` | `50.0%` |
| Texto izq | `{s:<X}` | `{'hi':<5}` | `hi   ` |
| Texto der | `{s:>X}` | `{'hi':>5}` | `   hi` |
| Texto centro | `{s:^X}` | `{'hi':^5}` | ` hi  ` |

---

## 4.5 `Decimal` — precisión exacta para dinero

Cuando manejas **dinero**, los errores de punto flotante pueden generar diferencias de centavos que en auditorías o cierres contables son inaceptables. La solución es `Decimal` del módulo `decimal`.

```python
from decimal import Decimal, RoundingMode
```

### Crear un `Decimal`

```python
# ✅ Forma correcta: desde String (garantiza representación exacta)
precio = Decimal("9990.50")

# ✅ Forma correcta: desde int
precio = Decimal("100")

# ⚠️ Forma que puede heredar el error de float:
dudoso = Decimal(0.1)  # 0.1000000000000000055511151231257827021181583404541015625
seguro = Decimal("0.1")  # exactamente 0.1
```

### Operaciones con `Decimal`

`Decimal` es **inmutable** — cada operación retorna un nuevo objeto.

```python
from decimal import Decimal, RoundingMode

precio = Decimal("50000.00")
descuento = Decimal("0.10")  # 10%
tasa_iva = Decimal("0.19")  # 19%

# Descuento
monto_descuento = precio * descuento
# 50000 × 0.10 = 5000.00

precio_descontado = precio - monto_descuento
# 50000 - 5000 = 45000.00

# IVA sobre precio descontado
monto_iva = precio_descontado * tasa_iva
# 45000 × 0.19 = 8550.00

precio_final = precio_descontado + monto_iva
# 45000 + 8550 = 53550.00

print(f"Precio final: ${precio_final}")  # $53550.00
```

| Operación matemática | Método `Decimal` |
|---------------------|-----------------|
| `a + b` | `a + b` |
| `a - b` | `a - b` |
| `a * b` | `a * b` |
| `a / b` | `a / b` (puede requerir rounding) |
| Redondear | `a.quantize(Decimal('0.00'), RoundingMode.HALF_UP)` |
| Comparar | `a == b` (funciona bien con Decimal) |

### Modos de redondeo más usados

| `RoundingMode` | Comportamiento | Ejemplo (2 dec.) |
|----------------|---------------|-----------------|
| `HALF_UP` | El estándar matemático (≥0.5 sube) | `2.345` → `2.35` |
| `HALF_DOWN` | ≥0.5 baja | `2.345` → `2.34` |
| `FLOOR` | Siempre hacia abajo | `2.349` → `2.34` |
| `CEILING` | Siempre hacia arriba | `2.341` → `2.35` |

```python
from decimal import Decimal, RoundingMode

resultado = Decimal("10") / Decimal("3")
resultado = resultado.quantize(Decimal("0.01"), RoundingMode.HALF_UP)
print(resultado)  # 3.33
```

---

## 4.6 Comparar decimales correctamente

```python
# ❌ NUNCA comparar floats con ==
a = 0.1 + 0.2
b = 0.3
print(a == b)  # False ← bug

# ✅ Opción 1: comparar con una tolerancia (epsilon)
epsilon = 1e-9  # 0.000000001
print(abs(a - b) < epsilon)  # True

# ✅ Opción 2: usar Decimal
from decimal import Decimal
x = Decimal("0.1") + Decimal("0.2")
y = Decimal("0.3")
print(x == y)  # True
```

---

## 4.7 Cuándo usar `float` vs `Decimal`

| Criterio | `float` | `Decimal` |
|----------|---------|------------|
| Velocidad | ⚡ Rápido | 🐢 Más lento |
| Precisión exacta | ❌ No garantizada | ✅ Garantizada |
| Ideal para... | Estadísticas, física, UI | Dinero, contabilidad, auditorías |
| operaciones simples | ✅ | Recomendado |

---

## Resumen

- `float` tiene errores de precisión inherentes al estándar binario — nunca compares con `==`.
- `round()`, `math.floor()`, `math.ceil()` para redondear valores `float`.
- f-string `"{valor:.2f}"` para mostrar 2 decimales en pantalla.
- f-string `"{valor:,.2f}"` para mostrar con separador de miles.
- Alineación de texto: `{texto:<10}`, `{texto:>10}`, `{texto:^10}`.
- `Decimal` para operaciones financieras — siempre crear desde `String`.
- En Python, `Decimal` es más seguro para dinero por su precisión exacta.

→ [Siguiente módulo: Casos de uso reales integrados](./05_casos_de_uso_reales.md)