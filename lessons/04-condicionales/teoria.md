# Teoria

## Objetivo

Dominar los condicionales (`if`, `elif`, `else`), operadores de comparacion y logica proposicional para tomar decisiones en el programa.

## Idea central

Los condicionales evaluan condiciones y ejecutan diferente codigo segun el resultado. La logica proposicional permite combinar condiciones usando operadores logicos.

## 1. Condicional simple: if

Ejecuta un bloque si la condicion es verdadera.

```python
if condicion:
    # codigo si es verdadero
```

```python
edad = 18

if edad >= 18:
    print("Mayor de edad")
```

### Importante

- La condicion debe evaluarse a `True` o `False`.
- El bloque debe estar indentado.

## 2. Condicional con alternativa: if-else

Si la condicion es verdadera, ejecuta un bloque; si no, ejecuta otro.

```python
if condicion:
    # codigo si es verdadero
else:
    # codigo si es falso
```

```python
edad = 16

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

## 3. Condicional multiple: if-elif-else

Evalua varias condiciones en secuencia.

```python
if condicion1:
    # codigo para condicion1
elif condicion2:
    # codigo para condicion2
elif condicion3:
    # codigo para condicion3
else:
    # codigo si ninguna condicion es verdadera
```

```python
nota = 75

if nota >= 90:
    print("A")
elif nota >= 80:
    print("B")
elif nota >= 70:
    print("C")
elif nota >= 60:
    print("D")
else:
    print("F")
```

## 4. Operadores de comparacion

| Operador | Significado | Ejemplo |
| --- | --- | --- |
| `==` | Igual a | `edad == 18` |
| `!=` | Distinto de | `edad != 0` |
| `>` | Mayor que | `edad > 17` |
| `<` | Menor que | `edad < 65` |
| `>=` | Mayor o igual | `edad >= 18` |
| `<=` | Menor o igual | `edad <= 65` |

## 5. Operadores logicos

Combinan condiciones: `and`, `or`, `not`.

### Tabla de verdad del AND

| A | B | A and B |
|---|---|---------|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

Solo es verdadero cuando ambas condiciones son verdaderas.

```python
edad = 25
tiene_licencia = True

if edad >= 18 and tiene_licencia:
    print("Puede conducir")
```

### Tabla de verdad del OR

| A | B | A or B |
|---|---|--------|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

Es verdadero cuando al menos una condicion es verdadera.

```python
es_estudiante = False
es_jubilado = True

if es_estudiante or es_jubilado:
    print("Tiene descuento")
```

### Tabla de verdad del NOT

| A | not A |
|---|-------|
| True | False |
| False | True |

Invierte el valor de la condicion.

```python
esta_activo = False

if not esta_activo:
    print("La cuenta esta inactiva")
```

### Tabla de verdad completa

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

## 6. Anidamiento de condicionales

Un condicional dentro de otro.

```python
edad = int(input("Edad: "))
tiene_licencia = input("Tiene licencia? (s/n): ") == "s"

if edad >= 18:
    if tiene_licencia:
        print("Puede conducir")
    else:
        print("Es mayor pero no tiene licencia")
else:
    print("No puede conducir")
```

## 7. Condicional sin else

Se puede usar solo `if` sin `else`.

```python
numero = 10

if numero > 0:
    print("Es positivo")

print("Fin del programa")
```

## 8. Condicional con expresion ternaria

Forma abreviada para condiciones simples.

```python
edad = 20
mensaje = "Mayor" if edad >= 18 else "Menor"
print(mensaje)
```

## 9. Comparacion de strings

```python
nombre = "Ana"

if nombre == "Ana":
    print("Hola Ana")

if nombre.lower() == "ana":
    print("Hola ana")
```

## 10. Errores comunes

### Olvidar los dos puntos

```python
# ERROR
if edad >= 18
    print("Mayor")

# CORRECTO
if edad >= 18:
    print("Mayor")
```

### Olvidar la indentacion

```python
# ERROR
if edad >= 18:
print("Mayor")  # Este print esta fuera del if

# CORRECTO
if edad >= 18:
    print("Mayor")
```

### Usar = en lugar de ==

```python
# ERROR: asigna, no compara
if edad = 18:
    print("Mayor")

# CORRECTO
if edad == 18:
    print("Mayor")
```

### Condiciones con valores no booleanos

```python
# CUIDADO: Python evalua el valor directamente
if "":
    print("No se ejecuta (cadena vacia es False)")
if "Hola":
    print("Si se ejecuta (texto no vacio es True)")
if 0:
    print("No se ejecuta (0 es False)")
if 5:
    print("Si se ejecuta (5 es True)")
```

## 11. Ejemplos completos

### Ejemplo 1: Clasificacion por edad

```python
edad = int(input("Edad: "))

if edad < 0:
    print("Edad invalida")
elif edad <= 12:
    print("Nino")
elif edad <= 17:
    print("Adolescente")
elif edad <= 64:
    print("Adulto")
else:
    print("Adulto mayor")
```

### Ejemplo 2: Calculadora de descuentos

```python
compra = float(input("Monto de compra: "))

if compra > 500:
    descuento = compra * 0.20
elif compra > 300:
    descuento = compra * 0.15
elif compra > 100:
    descuento = compra * 0.10
else:
    descuento = 0

print(f"Descuento: ${descuento}")
print(f"Total: ${compra - descuento}")
```

### Ejemplo 3: Acceso con condiciones combinadas

```python
edad = int(input("Edad: "))
es_estudiante = input("Es estudiante? (s/n): ") == "s"

if edad < 5:
    print("Entrada gratis")
elif edad >= 60:
    print("Descuento adulto mayor")
elif es_estudiante:
    print("Descuento estudiante")
else:
    print("Entrada normal")
```

### Ejemplo 4: Verificacion de numero

```python
numero = int(input("Ingresa un numero: "))

if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Cero")

if numero % 2 == 0:
    print("Par")
else:
    print("Impar")
```

## 12. Resumen

- `if` evalua una condicion.
- `else` proporciona alternativa cuando `if` es falso.
- `elif` encadena multiples condiciones.
- Operadores de comparacion: `==`, `!=`, `>`, `<`, `>=`, `<=`.
- Operador `and`: ambas condiciones deben ser True.
- Operador `or`: al menos una condicion debe ser True.
- Operador `not`: invierte la condicion.
- La indentacion es obligatoria en Python.
- La condicion debe evaluarse a True o False.
