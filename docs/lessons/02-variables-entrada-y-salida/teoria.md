# Teoria

## Objetivo

Comprender qué son las variables en Python, cómo se declaran y usan, y cómo manejar la entrada (`input()`) y salida (`print()`) de datos.

## Idea central

En Python, las variables son espacios de memoria que guardan valores. No es necesario declarar el tipo de antemano; Python lo infiere automáticamente. Sin embargo, es fundamental entender los tipos de datos para evitar errores.

## Tipos de datos basicos

Python maneja varios tipos de datos. Los más comunes son:

| Tipo | Descripcion | Ejemplo |
| --- | --- | --- |
| `int` | Numeros enteros | `18`, `-5`, `100` |
| `float` | Numeros decimales | `3.14`, `-0.5`, `2.0` |
| `str` | Texto (cadena) | `"Hola"`, `'Ana'`, `"123"` |
| `bool` | Valores logicos | `True`, `False` |

## 1. Crear variables

En Python, una variable se crea al asignarle un valor.

```python
nombre = "Ana"
edad = 18
altura = 1.65
es_estudiante = True
```

### Diferencia con PSeInt

En PSeInt se usa `Definir`:

```text
Definir nombre Como Cadena
Definir edad Como Entero
nombre <- "Ana"
edad <- 18
```

En Python simplemente se asigna:

```python
nombre = "Ana"
edad = 18
```

## 2. Reglas para nombres de variables

- Deben comenzar con una letra o guion bajo (_)
- No pueden tener espacios
- No pueden ser palabras reservadas (`if`, `while`, `for`, etc.)
- Son sensibles a mayusculas y minusculas

```python
nombre = "Luis"       # valido
Nombre = "Luis"      # valido (diferente a nombre)
_edad = 25            # valido
2nombre = "Luis"     # invalido
mi nombre = "Luis"   # invalido (espacio)
```

## 3. Conversion de tipos

La funcion `input()` siempre devuelve texto (`str`). Si necesitas un numero, debes convertirlo.

```python
edad = int(input("Ingresa tu edad: "))
altura = float(input("Ingresa tu altura: "))
```

### Tabla de conversion

| Tipo deseado | Funcion |
| --- | --- |
| Entero | `int()` |
| Decimal | `float()` |
| Texto | `str()` |
| Booleano | `bool()` |

## 4. Entrada de datos: input()

`input()` pausa el programa y espera a que el usuario escriba algo.

### Sintaxis basica

```python
nombre = input()
```

### Con mensaje

```python
nombre = input("Ingresa tu nombre: ")
```

### Conversion obligatoria

```python
edad = int(input("Ingresa tu edad: "))
```

## 5. Salida de datos: print()

`print()` muestra informacion en pantalla.

### Sintaxis basica

```python
print("Hola mundo")
```

### Multiple argumentos

```python
nombre = "Ana"
print("Hola", nombre)
```

### Concatenacion

```python
nombre = "Ana"
print("Hola " + nombre)
```

### Con format

```python
nombre = "Ana"
edad = 18
print("Hola {} tienes {} años".format(nombre, edad))
```

### f-strings (recomendado)

```python
nombre = "Ana"
edad = 18
print(f"Hola {nombre} tienes {edad} años")
```

## 6. Operadores de asignacion

Ademas de `=`, Python tiene operadores combinados:

| Operador | Equivalente | Ejemplo |
| --- | --- | --- |
| `+=` | `x = x + n` | `x += 5` |
| `-=` | `x = x - n` | `x -= 3` |
| `*=` | `x = x * n` | `x *= 2` |
| `/=` | `x = x / n` | `x /= 4` |
| `%=` | `x = x % n` | `x %= 7` |
| `**=` | `x = x ** n` | `x **= 2` |

## 7. Entrada multiple

Se puede pedir varios datos en secuencia:

```python
nombre = input("Nombre: ")
apellido = input("Apellido: ")
edad = int(input("Edad: "))
```

## 8. Entrada de valores en una linea

Si el usuario ingresa valores separados por espacio:

```python
datos = input().split()
a = int(datos[0])
b = int(datos[1])
```

O mas directo:

```python
a, b = input().split()
a = int(a)
b = int(b)
```

## 9. Errores comunes

### Olvidar conversion

```python
# INCORRECTO
edad = input("Edad: ")  # edad es texto, no numero
if edad > 17:  # ERROR: no se puede comparar texto con numero
    print("Mayor")

# CORRECTO
edad = int(input("Edad: "))
if edad > 17:
    print("Mayor")
```

### Mezclar tipos

```python
# INCORRECTO
numero = "5"
print(numero + 3)  # ERROR: no se puede sumar texto con numero

# CORRECTO
numero = 5
print(numero + 3)  # Sale 8
```

## 10. Ejemplos completos

### Ejemplo 1: Saludo personalizado

```python
nombre = input("Ingresa tu nombre: ")
print("Hola,", nombre, "bienvenido!")
```

### Ejemplo 2: Calculo de suma

```python
numero_1 = int(input("Ingresa el primer numero: "))
numero_2 = int(input("Ingresa el segundo numero: "))
resultado = numero_1 + numero_2
print("La suma es:", resultado)
```

### Ejemplo 3: Datos de una persona

```python
nombre = input("Nombre: ")
apellido = input("Apellido: ")
edad = int(input("Edad: "))
estatura = float(input("Estatura: "))

print(f"{nombre} {apellido} tiene {edad} años y mide {estatura}m")
```

## 11. Resumen

- Las variables se crean al asignar un valor.
- `input()` lee datos (siempre texto).
- `print()` muestra datos en pantalla.
- Para usar numeros, hay que convertir con `int()` o `float()`.
- Los nombres de variables deben seguir reglas.
- f-strings son utiles para formatear salida.
