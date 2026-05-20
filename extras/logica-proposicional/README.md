# 🧠 Lógica Proposicional

## ¿Qué es la lógica proposicional?

La **lógica proposicional** (también llamada *lógica de enunciados*) es la rama de la lógica matemática que estudia las relaciones entre **proposiciones** y las leyes que las rigen. Es la base del razonamiento formal, de los circuitos digitales y —muy directamente— de las **condiciones y validaciones** en cualquier lenguaje de programación.

> 📌 Cada vez que escribes un `if`, un `while` o una expresión booleana en Python, estás aplicando lógica proposicional.

---

## Conceptos básicos

### ¿Qué es una proposición?

Una **proposición** es un enunciado declarativo que puede ser **verdadero (V / true)** o **falso (F / false)**, pero no ambos al mismo tiempo.

| Enunciado | ¿Es proposición? | Valor |
|-----------|-----------------|-------|
| "Python es un lenguaje de programación" | ✅ Sí | **V** |
| "2 + 2 = 5" | ✅ Sí | **F** |
| "¿Cuánto vale x?" | ❌ No (pregunta) | — |
| "Cierra la puerta" | ❌ No (orden) | — |
| "x > 10" | ⚠️ Sí, si `x` tiene valor | Depende |

Las proposiciones se representan con letras minúsculas: **p**, **q**, **r**, **s**, …

---

## Conectivos lógicos

Los **conectivos lógicos** permiten combinar proposiciones simples para formar **proposiciones compuestas**.

| Símbolo | Nombre | En Python |
|---------|--------|----------|
| `¬` / `~` | Negación | `not` |
| `∧` | Conjunción (Y) | `and` |
| `∨` | Disyunción (O) | `or` |
| `→` | Condicional (Si…entonces) | `if p: ...` |
| `↔` | Bicondicional (Si y solo si) | `p == q` |

---

## 1. Negación (`¬p`)

Invierte el valor de verdad de una proposición.

| p | ¬p |
|---|----|
| V | F  |
| F | V  |

```python
es_mayor = edad >= 18
es_menor = not es_mayor  # negación
```

---

## 2. Conjunción (`p ∧ q`)

Es verdadera **solo cuando ambas** proposiciones son verdaderas.

| p | q | p ∧ q |
|---|---|-------|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

```python
# p: el usuario está activo
# q: el usuario tiene el rol ADMIN
puede_administrar = usuario["activo"] and usuario["rol"] == "ADMIN"
```

---

## 3. Disyunción (`p ∨ q`)

Es falsa **solo cuando ambas** proposiciones son falsas.

| p | q | p ∨ q |
|---|---|-------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | **F** |

```python
# p: el ticket está en estado ABIERTO
# q: el ticket está en estado EN_PROCESO
esta_activo = estado == "ABIERTO" or estado == "EN_PROCESO"
```

> ⚠️ Existe también la **disyunción exclusiva (XOR)**: verdadera solo cuando *exactamente una* de las dos es verdadera.

> | p | q | p ⊕ q |
> |---|---|-------|
> | V | V | F |
> | V | F | **V** |
> | F | V | **V** |
> | F | F | F |

> En Python (bool): `bool(p) ^ bool(q)` o `(p or q) and not (p and q)`

---

## 4. Condicional (`p → q`)

Leído como "**si p entonces q**". Es falso **solo** cuando el antecedente es verdadero y el consecuente es falso.

| p | q | p → q |
|---|---|-------|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

> 📌 "Si llueve, entonces el suelo está mojado" — Solo se rompe la promesa si llueve y el suelo NO está mojado.

```python
# Si el ticket existe, entonces se puede actualizar
# Equivale a: ¬p ∨ q
if ticket_existe:
    actualizar(ticket)
# Si ticket_existe es False, no importa lo que ocurra → la condición no se rompe
```

### Formas relacionadas al condicional

Dada la implicación **p → q**:

| Forma | Expresión | Equivalente lógico |
|-------|-----------|-------------------|
| Recíproca | q → p | NO equivalente |
| Contrarrecíproca | ¬q → ¬p | ✅ Equivalente a p → q |
| Inversa | ¬p → ¬q | NO equivalente |

---

## 5. Bicondicional (`p ↔ q`)

Leído como "**p si y solo si q**". Verdadero cuando ambas tienen el **mismo valor de verdad**.

| p | q | p ↔ q |
|---|---|-------|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | **V** |

```python
# Un usuario es premium si y solo si pagó su suscripción
es_premium = ha_pagado == tiene_beneficios_premium
```

---

## Tabla de verdad general

Resumen de todos los conectivos para referencia rápida:

| p | q | ¬p | p ∧ q | p ∨ q | p ⊕ q | p → q | p ↔ q |
|---|---|----|-------|-------|-------|-------|-------|
| V | V | F  | V     | V     | F     | V     | V     |
| V | F | F  | F     | V     | V     | F     | F     |
| F | V | V  | F     | V     | V     | V     | F     |
| F | F | V  | F     | F     | F     | V     | V     |

---

## Tautologías, contradicciones y contingencias

| Tipo | Definición | Ejemplo |
|------|-----------|---------|
| **Tautología** | Siempre verdadera | `p ∨ ¬p` ("p o no p") |
| **Contradicción** | Siempre falsa | `p ∧ ¬p` ("p y no p") |
| **Contingencia** | A veces V, a veces F | `p ∧ q` |

```python
# Tautología en código (siempre True)
siempre = valor > 0 or valor <= 0  # p ∨ ¬p → siempre True

# Contradicción en código (siempre False, código muerto)
nunca = valor > 10 and valor < 5   # imposible → siempre False
```

> ⚠️ Las **contradicciones** en condiciones crean *código muerto* (código que nunca se ejecuta). Son errores lógicos difíciles de detectar.

---

## Leyes y equivalencias lógicas

Dos proposiciones son **lógicamente equivalentes** (`≡`) si tienen la misma tabla de verdad.

### Leyes de identidad
```
p ∧ V ≡ p
p ∨ F ≡ p
```

### Leyes de dominación
```
p ∨ V ≡ V
p ∧ F ≡ F
```

### Leyes de idempotencia
```
p ∨ p ≡ p
p ∧ p ≡ p
```

### Leyes de complemento
```
p ∨ ¬p ≡ V    (tautología)
p ∧ ¬p ≡ F    (contradicción)
¬(¬p)  ≡ p    (doble negación)
```

### Leyes conmutativas
```
p ∧ q ≡ q ∧ p
p ∨ q ≡ q ∨ p
```

### Leyes asociativas
```
(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)
(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
```

### Leyes distributivas
```
p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)
```

### ⭐ Leyes de De Morgan

Las más utilizadas en programación:

```
¬(p ∧ q) ≡ ¬p ∨ ¬q
¬(p ∨ q) ≡ ¬p ∧ ¬q
```

En palabras:
- La negación de un **Y** es un **O** de negaciones.
- La negación de un **O** es un **Y** de negaciones.

```python
# ❌ Difícil de leer
if not (usuario["activo"] and usuario["tiene_rol"]("ADMIN")):
    raise PermissionError("Acceso denegado")

# ✅ Equivalente por De Morgan — más claro
if not usuario["activo"] or not usuario["tiene_rol"]("ADMIN"):
    raise PermissionError("Acceso denegado")
```

### Eliminación del condicional
```
p → q ≡ ¬p ∨ q
```

```python
# "Si el ticket está cerrado, no se puede editar"
# p → q  ≡  ¬p ∨ q
# "El ticket está abierto O se puede editar"
puede_editar = not ticket["cerrado"] or tiene_permiso_especial
```

---

## Precedencia de operadores

Al igual que en aritmética (multiplicación antes que suma), los operadores lógicos tienen orden de precedencia:

| Prioridad | Operador | Descripción |
|-----------|----------|-------------|
| 1 (mayor) | `not` | Negación |
| 2 | `and` | Conjunción |
| 3 | `or` | Disyunción |
| 4 | `→` | Condicional |
| 5 (menor) | `↔` | Bicondicional |

> 📌 Usa **paréntesis** para hacer explícita la precedencia y mejorar la legibilidad, igual que en Python.

```python
# Ambiguo — ¿cuál se evalúa primero?
resultado = a or b and c

# Explícito — intención clara
resultado = a or (b and c)  # and tiene mayor precedencia que or
```

---

## Forma Normal Conjuntiva (FNC) y Forma Normal Disyuntiva (FND)

Cualquier proposición puede reescribirse en una **forma normal estándar**:

| Forma | Estructura | Ejemplo |
|-------|-----------|---------|
| **FND** | Disyunción de conjunciones (OR de ANDs) | `(p ∧ q) ∨ (¬p ∧ r)` |
| **FNC** | Conjunción de disyunciones (AND de ORs) | `(p ∨ q) ∧ (¬p ∨ r)` |

> 📌 Las bases de datos usan FNC internamente para optimizar consultas con `WHERE` compuesto.

---

## Aplicación práctica en Python

### Validaciones con múltiples condiciones

```python
def validar_cambio_estado(ticket, nuevo_estado, usuario):
    # p: el ticket no está cerrado
    # q: el usuario es el creador o tiene rol ADMIN
    # r: el nuevo estado es válido

    p = ticket["estado"] != "CERRADO"
    q = ticket["creador_id"] == usuario["id"] or usuario["rol"] == "ADMIN"
    r = nuevo_estado in ["ABIERTO", "EN_PROCESO", "CERRADO"]

    # Se permite el cambio si: p ∧ q ∧ r
    if not (p and q and r):
        # Por De Morgan: ¬p ∨ ¬q ∨ ¬r
        if not p:
            raise ValueError("No se puede cambiar el estado de un ticket cerrado")
        if not q:
            raise PermissionError("No tienes permiso para cambiar este ticket")
        if not r:
            raise ValueError(f"Estado inválido: {nuevo_estado}")
```

### Construcción de filtros dinámicos

```python
# Filtrar tickets activos y asignados al usuario actual
# p: estado es ABIERTO o EN_PROCESO → (e1 ∨ e2)
# q: asignado al usuario → a
# Condición total: (e1 ∨ e2) ∧ a

filtrados = [t for t in tickets 
             if (t["estado"] == "ABIERTO" or t["estado"] == "EN_PROCESO")
             and t["asignado_id"] == usuario_id]
```

### Reglas de negocio como proposiciones

```python
# Regla: un ticket puede eliminarse si y solo si
#        está cerrado Y (el usuario es admin O es el creador)
# p ↔ (q ∧ (r ∨ s))

puede_eliminar = (
    ticket["estado"] == "CERRADO" 
    and (usuario["rol"] == "ADMIN" or usuario["id"] == ticket["creador_id"])
)
```

---

## Inferencia lógica — Reglas básicas

| Regla | Forma | Ejemplo |
|-------|-------|---------|
| **Modus Ponens** | p, p→q ⊢ q | Si el token es válido (p) y token válido→acceso concedido (p→q), entonces acceso concedido (q) |
| **Modus Tollens** | ¬q, p→q ⊢ ¬p | Si no hay acceso (¬q), entonces el token no era válido (¬p) |
| **Silogismo hipotético** | p→q, q→r ⊢ p→r | Login→token, token→acceso ⊢ login→acceso |
| **Adición** | p ⊢ p ∨ q | Si el usuario es admin, entonces es admin o moderador |
| **Simplificación** | p ∧ q ⊢ p | Si el usuario es activo y verificado, entonces es activo |

---

## Resumen

| Concepto | Definición rápida |
|----------|-------------------|
| **Proposición** | Enunciado con valor V o F |
| **Negación ¬** | Invierte el valor de verdad |
| **Conjunción ∧** | V solo si ambas son V (`and`) |
| **Disyunción ∨** | F solo si ambas son F (`or`) |
| **Condicional →** | F solo si antecedente V y consecuente F |
| **Bicondicional ↔** | V cuando ambas tienen el mismo valor |
| **Tautología** | Siempre V para cualquier combinación |
| **Contradicción** | Siempre F para cualquier combinación |
| **De Morgan** | `¬(p∧q) ≡ ¬p∨¬q` y `¬(p∨q) ≡ ¬p∧¬q` |

---

*Última actualización: Abril 2026 — FPY1101 Fundamentos de Programación*