# Clase 01 - De PSeInt a Python

## Objetivo

Reconocer que la logica aprendida en PSeInt sigue siendo util, pero ahora se escribira con la sintaxis real de Python.

## Idea clave

No empezamos de cero en pensamiento computacional. Lo nuevo es el lenguaje.

## Equivalencias basicas

| Idea | PSeInt | Python |
| --- | --- | --- |
| Mostrar texto | `Escribir "Hola"` | `print("Hola")` |
| Pedir un dato | `Leer nombre` | `nombre = input()` |
| Decidir | `Si edad >= 18 Entonces` | `if edad >= 18:` |
| Repetir mientras | `Mientras x < 10 Hacer` | `while x < 10:` |
| Repetir un numero de veces | `Para i <- 1 Hasta 5` | `for i in range(1, 6):` |

## Primer programa

```python
nombre = input("Escribe tu nombre: ")
print("Bienvenido,", nombre)
```

## Conceptos nuevos

### 1. Indentacion

Python usa espacios para marcar bloques de codigo.

```python
edad = int(input("Edad: "))

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

### 2. Tipos convertidos manualmente

`input()` entrega texto. Si se necesita un numero, hay que convertirlo.

```python
edad = int(input("Edad: "))
```

### 3. Menos palabras de cierre

Python no usa `FinSi` ni `FinMientras`. El bloque termina cuando cambia la indentacion.

