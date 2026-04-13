# Homologacion entre PSeInt y Python

Esta unidad introduce Python usando como puente los conceptos que el estudiante ya conoce en PSeInt.

## Idea central

PSeInt ayuda a pensar la logica. Python obliga a escribir esa logica con una sintaxis real, precisa y ejecutable.

## Equivalencias iniciales

| PSeInt | Python | Comentario |
| --- | --- | --- |
| `Escribir "Hola"` | `print("Hola")` | Salida por pantalla |
| `Leer nombre` | `nombre = input()` | Entrada de datos |
| `Definir x Como Entero` | `x = 0` | Python no exige declarar el tipo antes |
| `Si ... Entonces` | `if ...:` | Python usa `:` e indentacion |
| `Sino` | `else:` | Igual idea, distinta sintaxis |
| `Segun` | `match` o `if/elif/else` | Para empezar suele convenir `if/elif/else` |
| `Mientras` | `while` | Misma logica general |
| `Para` | `for` | En Python suele usarse con `range()` |
| `Repetir ... Hasta Que` | `while` | No existe igual, se adapta con otra estructura |

## Primer ejemplo

### En PSeInt

```text
Proceso Saludo
    Definir nombre Como Cadena
    Escribir "Ingresa tu nombre:"
    Leer nombre
    Escribir "Hola ", nombre
FinProceso
```

### En Python

```python
nombre = input("Ingresa tu nombre: ")
print("Hola", nombre)
```

## Diferencias importantes desde el primer dia

1. Python distingue mayusculas y minusculas.
2. Python no usa `FinSi`, `FinPara` ni `FinMientras`; usa indentacion.
3. Python no necesita declarar variables con `Definir`.
4. Python tiene una sintaxis mas corta, pero tambien mas estricta.

