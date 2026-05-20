# Módulo 03 — Porcentajes, descuentos y cargos

> **Objetivo:** traducir operaciones de porcentaje al código Python que aparece en sistemas reales: descuentos, recargos, impuestos y precio final combinado.

---

## 3.1 ¿Qué es un porcentaje?

Un **porcentaje** es una forma de expresar una fracción de 100. Decir "el 15%" es lo mismo que decir "15 de cada 100" o, expresado matemáticamente:

```
porcentaje% = porcentaje / 100
```

En código, los porcentajes se manejan de dos formas:

| Forma | Ejemplo 15% | Cuándo usar |
|-------|------------|-------------|
| Como entero | `15` | Cuando el usuario o la BD lo guarda como `int` |
| Como decimal | `0.15` | Cuando ya está listo para multiplicar |

---

## 3.2 Calcular el porcentaje de un valor

**Fórmula:**
```
porción = total × (tasa / 100)
```

```python
precio = 50_000.0
tasa = 20.0  # 20%

porcion = precio * (tasa / 100)  # 10000.0
```

> ⚠️ En Python, `tasa / 100` siempre devuelve `float`, así que no hay problema de división entera como en otros lenguajes.

```python
# ✅ Correcto en Python
tasa = 20
total = 50_000
resultado = total * (tasa / 100)  # 10000.0 (float)
```

---

## 3.3 Descuento

Un **descuento** reduce el precio original en una proporción dada.

### Fórmulas

```
monto descuento  = precio × (descuento / 100)
precio final     = precio - monto descuento

  o directamente:

precio final     = precio × (1 - descuento / 100)
```

### Implementación paso a paso

```python
precio_original = 80_000.0
porcentaje_descuento = 25.0  # 25%

# Opción 1: en dos pasos (más legible, mejor para mostrar el desglose)
monto_descuento = precio_original * (porcentaje_descuento / 100)  # 20000
precio_final = precio_original - monto_descuento                 # 60000

print(f"Precio original:  ${precio_original:,.2f}")   # $80,000.00
print(f"Descuento (25%): -${monto_descuento:,.2f}")  # -$20,000.00
print(f"Precio final:     ${precio_final:,.2f}")     # $60,000.00
```

```python
# Opción 2: en un paso (más compacto)
precio_final = precio_original * (1 - porcentaje_descuento / 100)  # 60000
```

### Descuentos escalonados (según monto de compra)

```python
def calcular_descuento(total_compra):
    if total_compra >= 100_000:
        return 20.0  # 20% para compras sobre $100.000
    elif total_compra >= 50_000:
        return 10.0  # 10% para compras entre $50.000 y $99.999
    elif total_compra >= 20_000:
        return 5.0   # 5% para compras entre $20.000 y $49.999
    else:
        return 0.0   # sin descuento

# Uso
total = 75_000.0
descuento = total * (calcular_descuento(total) / 100)
a_pagar = total - descuento

print(f"Total:     ${total:,.2f}")      # $75,000.00
print(f"Descuento: ${descuento:,.2f}") # $7,500.00
print(f"A pagar:   ${a_pagar:,.2f}")    # $67,500.00
```

---

## 3.4 Cargo (recargo / interés)

Un **cargo** aumenta el precio original: impuestos (IVA), intereses, gastos de envío porcentuales, recargos por pago en cuotas, etc.

### Fórmulas

```
monto cargo   = precio × (tasa / 100)
precio final  = precio + monto cargo

  o directamente:

precio final  = precio × (1 + tasa / 100)
```

### Implementación

```python
precio_neto = 100_000.0
tasa_iva = 19.0  # IVA 19%

monto_iva = precio_neto * (tasa_iva / 100)  # 19000
precio_final = precio_neto + monto_iva       # 119000

print(f"Precio neto:  ${precio_neto:,.2f}")    # $100,000.00
print(f"IVA (19%):   +${monto_iva:,.2f}")     # +$19,000.00
print(f"Total:       ${precio_final:,.2f}")   # $119,000.00
```

### Recargo por pago en cuotas

```python
precio_contado = 200_000.0
numero_cuotas = 12
recargo_anual = 24.0  # 24% anual

monto_recargo = precio_contado * (recargo_anual / 100)
total_con_recargo = precio_contado + monto_recargo
valor_cuota = total_con_recargo / numero_cuotas

print(f"Precio contado: ${precio_contado:,.2f}")    # $200,000.00
print(f"Recargo 24%:  +${monto_recargo:,.2f}")     # +$48,000.00
print(f"Total cuotas: ${total_con_recargo:,.2f}") # $248,000.00
print(f"Valor cuota:  ${valor_cuota:,.2f}")        # $20,666.67
```

---

## 3.5 Precio final: descuento + cargo combinados

En muchos sistemas el precio final aplica **primero el descuento y luego el impuesto** sobre el precio descontado.

```
precio con descuento = precio × (1 - descuento / 100)
precio final         = precio con descuento × (1 + impuesto / 100)
```

> ⚠️ El orden importa: aplicar el impuesto sobre el precio original (sin descontar) primero es un error común que favorece al vendedor en perjuicio del comprador.

```python
precio_original = 90_000.0
porcentaje_descuento = 10.0  # 10% de descuento
tasa_iva = 19.0  # 19% de IVA

# Paso 1: aplicar descuento
precio_con_descuento = precio_original * (1 - porcentaje_descuento / 100)
# 90_000 × 0.90 = 81_000

# Paso 2: aplicar impuesto sobre precio ya descontado
precio_final = precio_con_descuento * (1 + tasa_iva / 100)
# 81_000 × 1.19 = 96_390

print(f"Precio original:      ${precio_original:,.2f}")      # $90,000.00
print(f"Precio con descuento: ${precio_con_descuento:,.2f}")  # $81,000.00
print(f"Precio final c/IVA:   ${precio_final:,.2f}")          # $96,390.00
```

---

## 3.6 Calcular el porcentaje que representa una parte

A veces necesitas saber **qué porcentaje representa un valor respecto a un total**:

```
porcentaje = (parte / total) × 100
```

```python
# ¿Qué % de los tickets está resuelto?
total_tickets = 120
tickets_resueltos = 84

porcentaje_resuelto = (tickets_resueltos / total_tickets) * 100
print(f"Resueltos: {porcentaje_resuelto:.1f}%")  # 70.0%
```

```python
# ¿Cuánto representa una venta del total mensual?
venta_mes = 4_500_000.0
venta_vendedor = 1_125_000.0

participacion = (venta_vendedor / venta_mes) * 100
print(f"Participación: {participacion:.1f}%")  # 25.0%
```

---

## 3.7 Extraer el valor neto desde un precio con impuesto incluido

Cuando el precio ya **incluye** el impuesto y necesitas saber cuánto es el precio neto:

```
precio neto = precio con impuesto / (1 + tasa / 100)
impuesto    = precio con impuesto - precio neto
```

```python
precio_con_iva = 119_000.0
tasa_iva = 19.0

precio_neto = precio_con_iva / (1 + tasa_iva / 100)  # 100000
monto_iva = precio_con_iva - precio_neto            # 19000

print(f"Precio neto: ${precio_neto:,.2f}")  # $100,000.00
print(f"IVA:         ${monto_iva:,.2f}")    # $19,000.00
```

---

## 3.8 Tabla de fórmulas de referencia rápida

| Cálculo | Fórmula | Python |
|---------|---------|--------|
| Porcentaje de un valor | `total × tasa / 100` | `total * (tasa / 100)` |
| Precio con descuento | `precio × (1 - desc/100)` | `precio * (1 - desc / 100)` |
| Monto de descuento | `precio × desc / 100` | `precio * desc / 100` |
| Precio con cargo / IVA | `precio × (1 + tasa/100)` | `precio * (1 + tasa / 100)` |
| Descuento + IVA | `precio × (1 - desc/100) × (1 + iva/100)` | encadenar ambas |
| Qué % es una parte | `(parte / total) × 100` | `parte / total * 100` |
| Extraer neto de precio c/IVA | `precioConIVA / (1 + tasa/100)` | `precioConIVA / (1 + tasa / 100)` |

---

## Resumen

- Porcentaje = `total * tasa / 100` — en Python esto siempre devuelve float.
- Descuento = restar; cargo = sumar; el operador `1 ±` acorta el código.
- **Primero descuento, luego impuesto** — el orden afecta el resultado.
- Para desglosar en una respuesta, calcula cada parte por separado y devuélvelas como campos independientes.

→ [Siguiente módulo: Redondeo y precisión decimal](./04_redondeo_y_precision.md)