# Teoria

## Objetivo

Reconocer que la logica aprendida en PSeInt sigue siendo util, pero ahora se escribira con la sintaxis real de Python.

## Idea central

No se empieza desde cero en logica. Lo que cambia ahora es el lenguaje: Python tiene reglas de escritura reales, estrictas y ejecutables.

## Mapa general de homologacion

| PSeInt | Python | Observacion |
| --- | --- | --- |
| `Definir x Como Entero` | `x = 0` | Python no obliga a declarar el tipo antes |
| `Escribir "Hola"` | `print("Hola")` | Salida por pantalla |
| `Leer nombre` | `nombre = input()` | Entrada de datos |
| `Si ... Entonces` | `if ...:` | Python usa `:` e indentacion |
| `Sino` | `else:` | Misma idea con otra sintaxis |
| `Segun` | `if/elif/else` o `match` | Para empezar conviene `if/elif/else` |
| `Mientras` | `while` | La logica general se mantiene |
| `Repetir ... Hasta Que` | `while` | No existe igual, se adapta |
| `Para` | `for` con `range()` | Python recorre secuencias |
| Operadores aritmeticos | `+`, `-`, `*`, `/`, `//`, `%`, `**` | Python agrega algunos operadores utiles |
| Operadores de comparacion | `==`, `!=`, `<`, `<=`, `>`, `>=` | Se usan para formar condiciones |
| Operadores logicos | `and`, `or`, `not` | Equivalen a `Y`, `O`, `NO` |

## Primer vistazo: del pseudocodigo al codigo real

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

La idea del programa es exactamente la misma. La diferencia es que Python:

- no usa `Proceso` ni `FinProceso`
- no usa `Leer`, sino `input()`
- no usa `Escribir`, sino `print()`
- usa sintaxis real para guardar valores en variables

## 1. Variables

En PSeInt normalmente se declara la variable antes de usarla.

### PSeInt

```text
Definir edad Como Entero
edad <- 18
```

### Python

```python
edad = 18
```

### Idea importante

Python no exige escribir antes el tipo de dato. La variable se crea al asignarle un valor.

```python
nombre = "Ana"
edad = 18
altura = 1.65
es_estudiante = True
```

## 2. Escribir y leer

### Escribir

### PSeInt

```text
Escribir "Hola mundo"
```

### Python

```python
print("Hola mundo")
```

### Leer

### PSeInt

```text
Leer nombre
```

### Python

```python
nombre = input()
```

Si se quiere mostrar un mensaje al pedir el dato:

```python
nombre = input("Ingresa tu nombre: ")
```

### Diferencia importante

En Python, `input()` entrega texto. Si necesitas un numero, debes convertirlo.

```python
edad = int(input("Ingresa tu edad: "))
nota = float(input("Ingresa tu nota: "))
```

## 3. Operadores aritmeticos

Los operadores aritmeticos permiten realizar calculos con numeros.

| Idea | PSeInt | Python |
| --- | --- | --- |
| Suma | `a + b` | `a + b` |
| Resta | `a - b` | `a - b` |
| Multiplicacion | `a * b` | `a * b` |
| Division | `a / b` | `a / b` |
| Modulo o residuo | `a mod b` | `a % b` |
| Potencia | `a ^ b` | `a ** b` |

### Ejemplo

```python
numero_1 = 10
numero_2 = 3

print(numero_1 + numero_2)
print(numero_1 - numero_2)
print(numero_1 * numero_2)
print(numero_1 / numero_2)
print(numero_1 % numero_2)
print(numero_1 ** numero_2)
```

### Observaciones

- En Python, `%` calcula el residuo.
- En Python, `**` se usa para la potencia.
- Python tambien tiene `//`, que realiza division entera.

```python
print(10 // 3)
```

## 4. Operadores de comparacion

Los operadores de comparacion producen un resultado verdadero o falso.

| Idea | PSeInt | Python |
| --- | --- | --- |
| Igual | `=` o `==` segun contexto | `==` |
| Distinto | `<>` | `!=` |
| Mayor que | `>` | `>` |
| Menor que | `<` | `<` |
| Mayor o igual | `>=` | `>=` |
| Menor o igual | `<=` | `<=` |

### Ejemplo

```python
edad = 17

print(edad == 17)
print(edad != 18)
print(edad > 12)
print(edad >= 18)
```

### Idea importante

En Python:

- `=` sirve para asignar
- `==` sirve para comparar

Esa diferencia debe quedar muy clara desde el inicio.

## 5. Operadores logicos

Los operadores logicos permiten combinar condiciones.

| Idea | PSeInt | Python |
| --- | --- | --- |
| Y | `Y` | `and` |
| O | `O` | `or` |
| NO | `No` | `not` |

### Ejemplo

```python
edad = 20
tiene_entrada = True

if edad >= 18 and tiene_entrada:
    print("Puede ingresar")
```

```python
llueve = False
hay_paraguas = True

if llueve or hay_paraguas:
    print("Se puede salir")
```

```python
activo = False

if not activo:
    print("La cuenta esta inactiva")
```

## 6. Condicionales: si y sino

### PSeInt

```text
Si edad >= 18 Entonces
    Escribir "Mayor de edad"
SiNo
    Escribir "Menor de edad"
FinSi
```

### Python

```python
if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

### Equivalencia clave

- `Si` pasa a `if`
- `SiNo` pasa a `else`
- `Entonces` desaparece
- `FinSi` desaparece
- El bloque se marca con indentacion

## 7. Segun

En PSeInt, `Segun` sirve para tomar una decision entre varios casos.

### PSeInt

```text
Segun opcion Hacer
    1:
        Escribir "Sumar"
    2:
        Escribir "Restar"
    De Otro Modo:
        Escribir "Opcion no valida"
FinSegun
```

### Python para empezar

```python
if opcion == 1:
    print("Sumar")
elif opcion == 2:
    print("Restar")
else:
    print("Opcion no valida")
```

### Comentario

Python moderno tiene `match`, pero para estudiantes que recien empiezan suele ser mejor trabajar primero con `if`, `elif` y `else`.

## 8. Mientras

### PSeInt

```text
mientras contador < 5 Hacer
    Escribir contador
    contador <- contador + 1
FinMientras
```

### Python

```python
while contador < 5:
    print(contador)
    contador = contador + 1
```

### Observaciones

- `Mientras` pasa a `while`
- `Hacer` desaparece
- `FinMientras` desaparece
- La actualizacion de la variable sigue siendo necesaria

## 9. Repetir hasta que

Python no tiene una estructura exactamente igual a `Repetir ... Hasta Que`. La forma mas comun de homologarla al inicio es usar `while` con una condicion de control.

### PSeInt

```text
Repetir
    Leer numero
Hasta Que numero > 0
```

### Python

```python
numero = 0

while numero <= 0:
    numero = int(input("Ingresa un numero positivo: "))
```

### Idea importante

En PSeInt, el bloque se ejecuta al menos una vez por definicion. En Python hay que preparar la condicion para lograr ese comportamiento.

## 10. Para

### PSeInt

```text
Para i <- 1 Hasta 5 Hacer
    Escribir i
FinPara
```

### Python

```python
for i in range(1, 6):
    print(i)
```

### Ojo con `range()`

`range(1, 6)` genera:

```python
1, 2, 3, 4, 5
```

El ultimo valor no se incluye. Por eso, si en PSeInt el ciclo llega hasta 5, en Python se usa 6 como limite superior.

## 11. Indentacion: la diferencia mas visible

En PSeInt el cierre de bloques se marca con palabras como `FinSi` o `FinPara`. En Python los bloques se marcan con espacios al inicio de cada linea.

Python usa espacios para marcar bloques de codigo.

```python
edad = int(input("Edad: "))

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

Si se pierde la indentacion, el programa cambia o directamente falla.

## 12. Diferencias que deben quedar claras desde el inicio

1. Python distingue mayusculas y minusculas.
2. Python no usa `FinSi`, `FinPara`, `FinMientras` ni `FinSegun`.
3. Python no obliga a declarar variables con `Definir`.
4. Python usa `:` para abrir bloques.
5. Python usa indentacion obligatoria.
6. `input()` entrega texto, no numeros.
7. `=` asigna y `==` compara.
8. `Y`, `O` y `No` se escriben como `and`, `or` y `not`.

## 13. Resumen final de homologacion

Lo aprendido en PSeInt sigue sirviendo:

- sabes trabajar con variables
- ya entiendes entrada y salida
- ya puedes tomar decisiones
- ya conoces ciclos

Lo nuevo en Python es:

- una sintaxis real
- indentacion obligatoria
- conversion explicita de tipos cuando hace falta
- nuevas palabras reservadas como `if`, `else`, `while` y `for`

