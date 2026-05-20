# Teoria

## Objetivo

Comprender los tipos de datos basicos en Python (`int`, `float`, `str`, `bool`) y aprender a convertir entre ellos.

## Idea central

Python deduce el tipo de dato automaticamente cuando se asigna un valor. Sin embargo, el programador debe conocer los tipos para operar correctamente con ellos.

## Tipos de datos basicos

| Tipo | Descripcion | Ejemplo |
| --- | --- | --- |
| `int` | Numeros enteros (sin decimales) | `18`, `-5`, `0`, `100` |
| `float` | Numeros decimales | `3.14`, `-0.5`, `2.0` |
| `str` | Texto (cadena de caracteres) | `"Hola"`, `'Ana'`, `"123"` |
| `bool` | Valores logicos | `True`, `False` |

## 1. Enteros (int)

Son numeros sin parte decimal, positivos o negativos.

```python
edad = 18
temperatura = -10
contador = 0
```

### Operaciones con enteros

```python
a = 10
b = 3

print(a + b)   # Suma: 13
print(a - b)   # Resta: 7
print(a * b)   # Multiplicacion: 30
print(a / b)   # Division: 3.333... (resultado siempre float)
print(a // b)  # Division entera: 3
print(a % b)   # Residuo: 1
print(a ** b)  # Potencia: 1000
```

## 2. Flotantes (float)

Son numeros con parte decimal.

```python
altura = 1.75
precio = 19.99
pi = 3.14159
```

### Precision

```python
resultado = 0.1 + 0.2
print(resultado)  # Puede dar 0.30000000000000004
```

Python tiene precision limitada en numeros decimales.

## 3. Cadenas (str)

Son texto, delimited por comillas simples o dobles.

```python
nombre = "Ana"
mensaje = 'Hola mundo'
vacio = ""
```

### Concatenacion

```python
nombre = "Ana"
apellido = "Lopez"

print(nombre + " " + apellido)  # "Ana Lopez"
print(nombre * 3)  # "AnaAnaAna" (repetir)
```

### Indexacion

```python
palabra = "Python"

print(palabra[0])   # "P" (primer caracter)
print(palabra[-1])  # "n" (ultimo caracter)
print(palabra[0:2])  # "Py" (slice: posiciones 0 y 1)
```

### Metodos utiles

```python
texto = "Hola Mundo"

print(texto.upper())       # "HOLA MUNDO"
print(texto.lower())       # "hola mundo"
print(texto.capitalize())  # "Hola mundo"
print(texto.replace("Mundo", "Python"))  # "Hola Python"
print(len(texto))         # 10 (longitud)
print("Mundo" in texto)   # True (buscar)
```

## 4. Booleanos (bool)

Solo puede tener dos valores: `True` o `False`.

```python
es_mayor = True
tiene_energia = False
```

### Conversiones con bool

Todo valor puede convertirse a booleano:

```python
bool(1)        # True
bool(0)        # False
bool("")       # False
bool("a")      # True
bool(-5)       # True
bool(0.0)      # False
```

### Valores "falsy"

Son valores que se evaluan como `False`:

- `0`
- `0.0`
- `""` (cadena vacia)
- `None`
- `[]` (lista vacia, no visto aun)

## 5. Conversion entre tipos

### De texto a numero

```python
edad = int("18")       # Convierte a entero
precio = float("19.99")  # Convierte a decimal
```

### De numero a texto

```python
edad = 18
print("Tu edad es: " + str(edad))  # "Tu edad es: 18"
```

### De texto a lista (split)

```python
numeros = "10 20 30".split()
print(numeros)  # ["10", "20", "30"]
```

### De numero a booleano

```python
bool(5)   # True
bool(0)   # False
```

### Conversion en input

```python
# Siempre devuelve str
edad = input("Edad: ")  # edad es texto

# Hay que convertir
edad = int(input("Edad: "))  # edad es entero
```

## 6. Conversion de tipos en operaciones

### Division siempre da float

```python
print(10 / 2)   # 5.0 (float)
print(10 // 3)  # 3 (int, division entera)
```

### Multiplicacion con strings

```python
print("Hola" * 3)  # "HolaHolaHola"
print("-" * 10)    # "----------"
```

## 7. Funcion type()

Permite saber el tipo de una variable.

```python
x = 10
y = "Hola"
z = 3.14

print(type(x))  # <class 'int'>
print(type(y))  # <class 'str'>
print(type(z))  # <class 'float'>
```

## 8. Funcion isinstance()

Permite verificar si una variable es de un tipo especifico.

```python
edad = 18

print(isinstance(edad, int))      # True
print(isinstance(edad, str))      # False
print(isinstance(edad, float))    # False
```

## 9. Errores comunes

### Conversion invalida

```python
# ERROR
numero = int("Hola")  # ValueError

# CORRECTO: solo convierte si el texto es numero valido
numero = int("18")    # 18
```

### Mezclar tipos

```python
# ERROR
print("La edad es: " + 18)  # TypeError

# CORRECTO
print("La edad es: " + str(18))
```

### Division por cero

```python
# ERROR
print(10 / 0)  # ZeroDivisionError
```

## 10. Ejemplos completos

### Ejemplo 1: Calcular area con conversion

```python
base = float(input("Base: "))
altura = float(input("Altura: "))
area = base * altura

print("El area es: " + str(area))
```

### Ejemplo 2: Verificar tipo

```python
valor = input("Ingresa un valor: ")

if valor.isdigit():
    print("Es un numero")
else:
    print("Es texto")
```

### Ejemplo 3: Conversion en cadena

```python
numero = 42
binario = bin(numero)
hexadecimal = hex(numero)

print(binario)      # 0b101010
print(hexadecimal)  # 0x2a
```

## 11. Resumen

- `int`: numeros enteros.
- `float`: numeros decimales.
- `str`: texto.
- `bool`: True o False.
- `int()` convierte a entero.
- `float()` convierte a decimal.
- `str()` convierte a texto.
- `bool()` convierte a booleano.
- `input()` siempre devuelve `str`.
- La division `/` siempre devuelve `float`.
