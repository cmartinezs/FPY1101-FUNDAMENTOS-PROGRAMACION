# Módulo 05 — Casos de uso reales integrados

> **Objetivo:** aplicar todos los conceptos de los módulos anteriores en ejemplos completos, del tipo que se implementan en aplicaciones reales.

---

## 5.1 Carrito de compras

Integra acumulador, descuentos, IVA y redondeo.

```python
# Cada producto es un diccionario
items = [
    {"nombre": "Teclado",  "precio": 29990.0, "cantidad": 1},
    {"nombre": "Mouse",   "precio": 15500.0, "cantidad": 2},
    {"nombre": "Monitor", "precio": 189990.0, "cantidad": 1}
]

# ── Acumulador: subtotal ────────────────────────────────────────────
subtotal = 0.0
for item in items:
    subtotal += item["precio"] * item["cantidad"]
# subtotal = 29990 + 31000 + 189990 = 250_980

# ── Descuento escalonado ────────────────────────────────────────────
if subtotal >= 200_000:
    porcentaje_descuento = 15.0
elif subtotal >= 100_000:
    porcentaje_descuento = 10.0
elif subtotal >= 50_000:
    porcentaje_descuento = 5.0
else:
    porcentaje_descuento = 0.0

monto_descuento = subtotal * (porcentaje_descuento / 100)
subtotal_descontado = subtotal - monto_descuento

# ── IVA 19% sobre el precio descontado ─────────────────────────────
tasa_iva = 19.0
monto_iva = subtotal_descontado * (tasa_iva / 100)
total = subtotal_descontado + monto_iva

# ── Resumen ─────────────────────────────────────────────────────────
print("=== RESUMEN DEL CARRITO ===")
for item in items:
    print(f"  {item['nombre']:<10} ×{item['cantidad']}  ${item['precio'] * item['cantidad']:,.2f}")
print("---------------------------")
print(f"Subtotal:          ${subtotal:,.2f}")
print(f"Descuento ({porcentaje_descuento:.0f}%):  -${monto_descuento:,.2f}")
print(f"IVA (19%):        +${monto_iva:,.2f}")
print(f"TOTAL:             ${total:,.2f}")
```

**Salida:**
```
=== RESUMEN DEL CARRITO ===
  Teclado     ×1  $29,990.00
  Mouse       ×2  $31,000.00
  Monitor     ×1  $189,990.00
---------------------------
Subtotal:          $250,980.00
Descuento (15%):  -$37,647.00
IVA (19%):        +$40,210.77
TOTAL:             $213,543.77
```

---

## 5.2 Cálculo de nómina (sueldo y descuentos)

```python
def main():
    nombre_empleado = "Ana González"
    sueldo_bruto = 1_500_000.0
    horas_extra = 8.0
    valor_hora_extra = 12_500.0

    # ── Ingresos ────────────────────────────────────────────────────────
    monto_horas_extra = horas_extra * valor_hora_extra  # 100_000
    total_ingresos = sueldo_bruto + monto_horas_extra  # 1_600_000

    # ── Descuentos legales (% del sueldo bruto) ─────────────────────────
    descuento_salud = total_ingresos * (7.0 / 100)     # 7% salud
    descuento_pension = total_ingresos * (11.5 / 100)  # 11.5% pensión
    descuento_desempleo = total_ingresos * (0.6 / 100) # 0.6% desempleo
    total_descuentos = descuento_salud + descuento_pension + descuento_desempleo

    # ── Sueldo líquido ──────────────────────────────────────────────────
    sueldo_liquido = total_ingresos - total_descuentos

    # ── Reporte ─────────────────────────────────────────────────────────
    print("============================")
    print("  LIQUIDACIÓN DE SUELDO")
    print(f"  {nombre_empleado}")
    print("============================")
    print(f"Sueldo base:      ${sueldo_bruto:,.2f}")
    print(f"Horas extra ({horas_extra:.0f}): ${monto_horas_extra:,.2f}")
    print(f"Total ingresos:   ${total_ingresos:,.2f}")
    print("----------------------------")
    print(f"Salud    (7%):   -${descuento_salud:,.2f}")
    print(f"Pensión (11.5%): -${descuento_pension:,.2f}")
    print(f"Desempleo(0.6%): -${descuento_desempleo:,.2f}")
    print(f"Total descuentos: -${total_descuentos:,.2f}")
    print("============================")
    print(f"SUELDO LÍQUIDO:   ${sueldo_liquido:,.2f}")


if __name__ == "__main__":
    main()
```

---

## 5.3 Estadísticas de productos

```python
# Lista de productos como diccionarios
productos = [
    {"nombre": "Laptop", "categoria": "Electrónica", "precio": 500000, "stock": 10},
    {"nombre": "Mouse", "categoria": "Electrónica", "precio": 25000, "stock": 50},
    {"nombre": "Silla", "categoria": "Muebles", "precio": 150000, "stock": 5},
    {"nombre": "Escritorio", "categoria": "Muebles", "precio": 200000, "stock": 3},
    {"nombre": "Monitor", "categoria": "Electrónica", "precio": 180000, "stock": 8},
]

# ── Contadores por categoría ────────────────────────────────────────
categorias = {}
suma_precios = 0
total_stock = 0

for p in productos:
    # Contador por categoría
    if p["categoria"] in categorias:
        categorias[p["categoria"]] += 1
    else:
        categorias[p["categoria"]] = 1

    suma_precios += p["precio"]
    total_stock += p["stock"]

# ── Promedio de precio ─────────────────────────────────────────────
total_productos = len(productos)
promedio_precio = suma_precios / total_productos if total_productos > 0 else 0.0

print(f"Total productos: {total_productos}")
print(f"Categorías: {categorias}")
print(f"Promedio precio: ${promedio_precio:,.2f}")
print(f"Total stock: {total_stock}")
```

**Salida:**
```
Total productos: 5
Categorías: {'Electrónica': 3, 'Muebles': 2}
Promedio precio: $211,000.00
Total stock: 76
```

---

## 5.4 Sistema de parking (tiempo y tarifa)

```python
TARIFA_POR_HORA = 2_500.0   # $2.500 por hora
TARIFA_FRACCION = 1_500.0   # $1.500 por fracción < 1 hora
MINUTOS_POR_HORA = 60
TOPE_DIARIO = 20_000.0      # máximo por día


def calcular_tarifa(minutos_estacionado):
    horas = minutos_estacionado // MINUTOS_POR_HORA  # división entera
    minutos_extra = minutos_estacionado % MINUTOS_POR_HORA  # módulo

    tarifa = horas * TARIFA_POR_HORA

    if minutos_extra > 0:
        tarifa += TARIFA_FRACCION  # cargo por fracción

    # Aplicar tope diario
    return min(tarifa, TOPE_DIARIO)


# Casos de prueba
casos = [(30, "30 min"), (60, "1 hora"), (90, "1h 30min"), (150, "2h 30min"), (480, "8 horas")]

print(f"{'Tiempo':<12}  Tarifa")
print("------------------------")
for minutos, etiqueta in casos:
    tarifa = calcular_tarifa(minutos)
    print(f"{etiqueta:<12}  ${tarifa:,.2f}")
```

**Salida:**
```
Tiempo        Tarifa
------------------------
30 min        $1,500.00
1 hora        $2,500.00
1h 30min      $4,000.00
2h 30min      $6,500.00
8 horas       $20,000.00
```

---

## 5.5 Calculadora de notas universitarias

```python
# Evaluaciones como diccionarios
evaluaciones = [
    {"nombre": "Control 1",  "nota": 5.5, "ponderacion": 0.15},
    {"nombre": "Control 2",  "nota": 4.8, "ponderacion": 0.15},
    {"nombre": "Tarea",      "nota": 6.2, "ponderacion": 0.20},
    {"nombre": "Solemne 1",  "nota": 4.5, "ponderacion": 0.20},
    {"nombre": "Solemne 2",  "nota": 5.8, "ponderacion": 0.30}
]

# ── Acumulador ponderado ─────────────────────────────────────────────
nota_ponderada = 0.0
total_ponderado = 0.0

for e in evaluaciones:
    nota_ponderada += e["nota"] * e["ponderacion"]
    total_ponderado += e["ponderacion"]

nota_final = nota_ponderada / total_ponderado

# ── Resultado ────────────────────────────────────────────────────────
print("=== NOTAS ===")
for e in evaluaciones:
    print(f"  {e['nombre']:<12}  {e['nota']:.1f}  ({e['ponderacion'] * 100:.0f}%)")
print("─────────────────────────")
print(f"Nota final:   {nota_final:.1f}")
print(f"Estado:       {'✅ APROBADO' if nota_final >= 4.0 else '❌ REPROBADO'}")
```

**Salida:**
```
=== NOTAS ===
  Control 1     5.5  (15%)
  Control 2     4.8  (15%)
  Tarea         6.2  (20%)
  Solemne 1     4.5  (20%)
  Solemne 2     5.8  (30%)
─────────────────────────
Nota final:   5.3
Estado:       ✅ APROBADO
```

---

## 5.6 Cheat sheet de patrones matemáticos en Python

```python
# ─── Contador ────────────────────────────────────────────────────────────────
count = 0
for elemento in lista:
    if condicion(elemento):
        count += 1

# ─── Acumulador ──────────────────────────────────────────────────────────────
total = 0.0
for elemento in lista:
    total += elemento["valor"]  # si es un diccionario

# ─── Promedio ────────────────────────────────────────────────────────────────
promedio = sum(lista) / len(lista) if lista else 0.0

# ─── Porcentaje de una parte ─────────────────────────────────────────────────
porcentaje = (parte / total) * 100

# ─── Descuento ───────────────────────────────────────────────────────────────
monto_descuento = precio * (descuento / 100)
precio_final = precio - monto_descuento
# o en un paso:
precio_final = precio * (1 - descuento / 100)

# ─── Cargo / IVA ─────────────────────────────────────────────────────────────
monto_iva = precio * (tasa / 100)
precio_final = precio + monto_iva
# o en un paso:
precio_final = precio * (1 + tasa / 100)

# ─── Descuento + IVA ─────────────────────────────────────────────────────────
precio_final = precio * (1 - descuento / 100) * (1 + iva / 100)

# ─── Par / Impar ─────────────────────────────────────────────────────────────
es_par = numero % 2 == 0

# ─── Múltiplo de N ───────────────────────────────────────────────────────────
es_multiplo = numero % n == 0

# ─── Redondear a 2 decimales ─────────────────────────────────────────────────
redondeado = round(valor, 2)
formateado = f"{valor:.2f}"

# ─── Máximo y mínimo ─────────────────────────────────────────────────────────
maximo = max(lista)
minimo = min(lista)

# ─── Dinero con Decimal ───────────────────────────────────────────────────────
from decimal import Decimal, RoundingMode

monto = Decimal("9990.50")
descuento = monto * Decimal("0.10")
total = (monto - descuento).quantize(Decimal("0.01"), RoundingMode.HALF_UP)
```

---

## Resumen del extra

| Módulo | Concepto clave |
|--------|---------------|
| 01 — Operaciones básicas | `+` `-` `*` `/` `//` `%` · división entera · `+=` `+= 1` |
| 02 — Contador y acumulador | `count += 1` · `total += valor` · promedio · máx/mín |
| 03 — Porcentajes y cargos | descuento = `precio * (1 - desc/100)` · IVA = `* (1 + tasa/100)` |
| 04 — Redondeo y precisión | `round()` · f-string · `Decimal` para dinero |
| 05 — Casos reales | Carrito · Nómina · Productos · Parking · Notas |

---

*Última actualización: Abril 2026 — FPY1101 Fundamentos de Programación*