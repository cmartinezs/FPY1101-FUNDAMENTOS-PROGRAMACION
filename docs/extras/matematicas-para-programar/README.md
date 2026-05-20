# ➕ Matemáticas para Programar

> **Nivel de entrada:** cualquiera — no se requieren conocimientos previos de matemáticas avanzadas.  
> **Objetivo:** dominar las operaciones y patrones matemáticos más usados en el desarrollo de software.  
> **Lenguaje de referencia:** Python 3.

---

## ¿Por qué matemáticas en programación?

Programar no requiere cálculo diferencial ni álgebra lineal en el día a día. Sin embargo, **sí requiere dominar un conjunto pequeño pero fundamental de operaciones matemáticas** que aparecen constantemente en cualquier sistema real:

- Calcular el total de un carrito de compras
- Aplicar un descuento del 20%
- Contar cuántos productos están en stock
- Calcular el promedio de calificaciones
- Determinar si un número es par o impar
- Redondear un precio a dos decimales

> 📌 El 90% de la matemática que usarás como desarrollador cabe en este extra.

---

## Índice de módulos

| # | Tema | Archivo |
|---|------|---------|
| 01 | Operaciones básicas y operadores en Python | [`01_operaciones_basicas.md`](./01_operaciones_basicas.md) |
| 02 | Contador y acumulador | [`02_contador_y_acumulador.md`](./02_contador_y_acumulador.md) |
| 03 | Porcentajes, descuentos y cargos | [`03_porcentajes_descuentos_y_cargos.md`](./03_porcentajes_descuentos_y_cargos.md) |
| 04 | Redondeo y precisión decimal | [`04_redondeo_y_precision.md`](./04_redondeo_y_precision.md) |
| 05 | Casos de uso reales integrados | [`05_casos_de_uso_reales.md`](./05_casos_de_uso_reales.md) |

---

## Mapa de conceptos

```
Matemáticas para Programar
│
├── 01 Operaciones básicas ──────────────────────────┐
│   + suma · - resta · * multiplicación              │  Todo el resto
│   / división · % módulo (resto)                    │  se apoyo aqui
│   Tipos: int, float                                │
│                                                    ┘
├── 02 Contador y acumulador ────────────────────────┐
│   Contador: count += 1                             │
│   Acumulador: total += valor                       │  Patrones de
│   Promedio: total / count                          │  bucles y listas
│                                                    ┘
├── 03 Porcentajes, descuentos y cargos ─────────────┐
│   Porcentaje de un total                           │
│   Descuento: precio - (precio * descuento / 100)    │  Contexto
│   Cargo / IVA: precio + (precio * tasa / 100)      │  financiero
│   Precio final con descuento + cargo               │
│                                                    ┘
├── 04 Redondeo y precisión decimal ─────────────────┐
│   round · floor · ceil                             │
│   Decimal para dinero                              │  Evitar errores
│   format con f-string                              │  con decimales
│                                                    ┘
└── 05 Casos de uso reales ──────────────────────────┐
    Carrito de compras · Nómina · Notas              │  Integración
    Parking · Estadísticas de productos             │  de todo
                                                      ┘
```

→ [01 — Operaciones básicas](./01_operaciones_basicas.md)  
→ [02 — Contador y acumulador](./02_contador_y_acumulador.md)  
→ [03 — Porcentajes, descuentos y cargos](./03_porcentajes_descuentos_y_cargos.md)  
→ [04 — Redondeo y precisión decimal](./04_redondeo_y_precision.md)  
→ [05 — Casos de uso reales integrados](./05_casos_de_uso_reales.md)

---

## ¿Cómo usar este extra?

1. **Lee el [módulo 01](./01_operaciones_basicas.md)** aunque ya sepas sumar y restar — la parte de tipos en Python es importante.
2. **El [módulo 02](./02_contador_y_acumulador.md)** es el más importante para bucles y listas.
3. **El [módulo 03](./03_porcentajes_descuentos_y_cargos.md)** es el más pedido en ejercicios y proyectos reales.
4. **El [módulo 04](./04_redondeo_y_precision.md)** es obligatorio si manejas dinero en tu aplicación.
5. **El [módulo 05](./05_casos_de_uso_reales.md)** integra todo con ejemplos completos listos para adaptar.

---

*Última actualización: Abril 2026 — FPY1101 Fundamentos de Programación*