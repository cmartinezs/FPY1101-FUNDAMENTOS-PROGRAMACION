# Módulo 01 — Operaciones básicas y operadores en Python

> **Objetivo:** conocer los operadores aritméticos de Python, entender cómo el tipo de dato afecta el resultado y aprender los atajos de asignación más usados.

---

## 1.1 Los cinco operadores aritméticos

Python hereda los operadores aritméticos estándar de las matemáticas y agrega uno muy útil para programación: el **módulo** (`%`).

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| `+` | Suma | `10 + 3` | `13` |
| `-` | Resta | `10 - 3` | `7` |
| `*` | Multiplicación | `10 * 3` | `30` |
| `/` | División | `10 / 3` | `3.333...` |
| `%` | Módulo (resto) | `10 % 3` | `1` |

> ⚠️ En Python 3, `/` siempre devuelve un `float`. Para división entera usa `//`.

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)  # 30
print(a / b)  # 3.3333333333333335
print(a // b) # 3  ← división entera
print(a % b)  # 1  ← el resto de 10 / 3
```

---

## 1.2 División entera vs. división real

Python distingue claramente entre:
- `/` → división real (siempre devuelve `float`)
- `//` → división entera (devuelve `int` si ambos son `int`)

```python
# ✅ División real (float)
x = 7
y = 2
print(x / y)    # 3.5

# ✅ División entera (int)
print(x // y)   # 3
```

### ¿Cuándo usar cada tipo?

| Situación | Tipo recomendado |
|-----------|-----------------|
| Contar elementos, índices, IDs | `int` |
| Cantidades grandes (millones+) | `int` (sin límite en Python) |
| Cálculos con decimales simples | `float` |
| Dinero / cálculos financieros | `Decimal` ← ver módulo 04 |

---

## 1.3 El operador módulo `%`

El operador `%` devuelve el **resto** de la división. Es uno de los operadores más útiles en programación.

```
10 % 3 = 1   porque  10 = 3 × 3 + 1
15 % 5 = 0   porque  15 = 5 × 3 + 0
7  % 2 = 1   porque   7 = 2 × 3 + 1
8  % 2 = 0   porque   8 = 2 × 4 + 0
```

### Casos de uso del módulo

```python
# ✅ Caso 1: determinar si un número es par o impar
numero = 17
if numero % 2 == 0:
    print("Par")
else:
    print("Impar")  # → "Impar"

# ✅ Caso 2: ciclos con patrón cada N elementos
#    (ej: aplicar descuento cada 3 productos)
for i in range(1, 10):
    if i % 3 == 0:
        print(f"Item {i} → DESCUENTO")
# Salida: Item 3 → DESCUENTO | Item 6 → DESCUENTO | Item 9 → DESCUENTO

# ✅ Caso 3: limitar un contador circular (ej: turno de mesa en restaurant)
mesas_disponibles = 4
cliente_numero = 9
mesa_asignada = (cliente_numero % mesas_disponibles) + 1
print(f"Mesa asignada: {mesa_asignada}")  # Mesa 2

# ✅ Caso 4: saber si es múltiplo de algo
minutos_transcurridos = 45
if minutos_transcurridos % 15 == 0:
    print("Enviar recordatorio")  # cada 15 min
```

---

## 1.4 Orden de precedencia (jerarquía de operaciones)

Python respeta las mismas reglas que las matemáticas: multiplicación y división antes que suma y resta.

| Prioridad | Operadores | Evaluación |
|-----------|------------|------------|
| 1 (mayor) | `*` `/` `%` `//` | de izquierda a derecha |
| 2 | `+` `-` | de izquierda a derecha |

```python
resultado = 2 + 3 * 4     # 14, NO 20 — primero 3*4=12, luego 2+12
con_parentesis = (2 + 3) * 4  # 20 — el paréntesis fuerza primero la suma
```

> 💡 Ante la duda, **usa paréntesis**. Son gratis y evitan bugs difíciles de detectar.

```python
# Ejemplo real: calcular el precio con IVA
precio = 100.0
iva = 19.0

# ✅ Correcto
total = precio + (precio * iva / 100)  # 119.0
```

---

## 1.5 Operadores de asignación compuesta

Son atajos que **combinan una operación aritmética con la asignación**. Hacen el código más conciso y son extremadamente comunes en bucles y acumuladores.

| Atajo | Equivalente | Descripción |
|-------|-------------|-------------|
| `x += n` | `x = x + n` | Suma n a x |
| `x -= n` | `x = x - n` | Resta n a x |
| `x *= n` | `x = x * n` | Multiplica x por n |
| `x /= n` | `x = x / n` | Divide x entre n |
| `x //= n` | `x = x // n` | División entera |
| `x %= n` | `x = x % n` | Asigna el resto |

```python
total = 100

total += 50   # total = 150
total -= 20   # total = 130
total *= 2    # total = 260
total /= 4    # total = 65.0
total %= 10   # total = 5.0
```

---

## 1.6 Incremento y decremento

Python **no tiene** operadores `++` y `--` como otros lenguajes. En su lugar, se usa `+= 1` y `-= 1`.

```python
count = 5
count += 1  # count = 6
count += 1  # count = 7

count -= 1  # count = 6
```

> 💡 Python no tiene operadores de incremento/decremento porque sigue la filosofía de "explicito es mejor que implicito".

---

## 1.7 Operaciones con `str` y números

Python permite concatenar (`+`) un número con un string, pero el resultado **es siempre un string**, no una suma.

```python
# ⚠️ Concatenación, NO suma
print("Resultado: " + str(3 + 4))  # "Resultado: 7"

# ✅ Formateo con f-string (más limpio y recomendado)
precio = 9990.5
print(f"Precio: ${precio:.2f}")  # "Precio: $9990.50"

# ✅ Formateo con separador de miles
print(f"Precio: ${precio:,.2f}")  # "Precio: $9,990.50"

# ✅ Formatear porcentaje
porcentaje = 0.1567
print(f"Tasa: {porcentaje * 100:.1f}%")  # "Tasa: 15.7%"
```

---

## Resumen

| Concepto | Clave para recordar |
|----------|-------------------|
| División real | `/` siempre devuelve `float` |
| División entera | `//` descarta decimales |
| Módulo `%` | Devuelve el **resto**; detecta pares, múltiplos y ciclos |
| Precedencia | `*` `/` `%` `//` antes que `+` `-`; usa paréntesis ante la duda |
| `+=`, `-=`, `*=` | Atajos de asignación — esenciales en acumuladores |
| Incremento | Python usa `+= 1` en lugar de `++` |
| `+` con String | Concatena, no suma — usa `str()` o f-string |

→ [Siguiente módulo: Contador y acumulador](./02_contador_y_acumulador.md)