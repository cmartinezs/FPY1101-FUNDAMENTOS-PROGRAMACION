# Teoria

## Objetivo

Dominar los ciclos `while` y `for` en Python, incluyendo validaciones con ciclos y menus ciclicos con salida explicita.

## Idea central

Los ciclos repiten codigo. `while` es ideal para situaciones donde no se sabe cuantas veces se repetira. `for` es ideal cuando se conoce el numero de iteraciones o se recorre una secuencia.

## 1. Ciclo while

Repite mientras la condicion sea verdadera.

```python
while condicion:
    # codigo a repetir
```

### Ejemplo basico

```python
contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1
```

Sale: 1, 2, 3, 4, 5

### Importante

- La condicion debe cambiar dentro del ciclo para evitar un ciclo infinito.
- Si la condicion es False desde el inicio, el ciclo no se ejecuta.

## 2. Ciclo for

Repite sobre una secuencia o rango.

```python
for variable in secuencia:
    # codigo a repetir
```

### Usando range()

```python
for i in range(1, 6):
    print(i)
```

Sale: 1, 2, 3, 4, 5

### range() con un parametro

```python
for i in range(5):
    print(i)
```

Sale: 0, 1, 2, 3, 4

### range() con tres parametros

```python
for i in range(0, 10, 2):
    print(i)
```

Sale: 0, 2, 4, 6, 8 (cuenta de 2 en 2)

## 3. break

Termina el ciclo inmediatamente.

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

Sale: 0, 1, 2, 3, 4

## 4. continue

Salta a la siguiente iteracion.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

Sale: 0, 1, 3, 4 (el 2 se salta)

## 5. else en ciclos

El bloque `else` se ejecuta cuando el ciclo termina normalmente (sin `break`).

```python
for i in range(3):
    print(i)
else:
    print("El ciclo termino")
```

## 6. Ciclos anidados

Un ciclo dentro de otro.

```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

## 7. Validaciones con ciclos

Los ciclos son utiles para validar datos hasta que el usuario ingrese un valor correcto.

### Validar numero positivo

```python
numero = -1

while numero <= 0:
    numero = int(input("Ingresa un numero positivo: "))

print("El numero es:", numero)
```

El ciclo se repite hasta que el usuario ingrese un numero mayor a 0.

### Validar opcion de menu

```python
opcion = 0

while opcion < 1 or opcion > 3:
    opcion = int(input("Opcion (1-3): "))

print("Opcion valida")
```

### Validar texto no vacio

```python
nombre = ""

while nombre == "":
    nombre = input("Ingresa tu nombre: ")

print("Hola", nombre)
```

### Validar edad en rango

```python
edad = -1

while edad < 0 or edad > 120:
    edad = int(input("Edad (0-120): "))

print("Edad valida:", edad)
```

### Validar contrasena

```python
contrasena = ""

while contrasena != "python123":
    contrasena = input("Contrasena: ")

print("Acceso concedido")
```

### Multiple validacion

```python
valido = False

while not valido:
    usuario = input("Usuario: ")
    clave = input("Clave: ")
    
    if usuario != "" and len(clave) >= 4:
        valido = True
    else:
        print("Datos invalidos. Intenta de nuevo.")
```

## 8. Menus ciclicos con salida explicita

Un menu ciclico muestra opciones y repite hasta que el usuario elija salir explicitamente.

### Estructura basica

```python
opcion = 0

while opcion != 4:
    print("=== MENU ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Salir")
    
    opcion = int(input("Opcion: "))
    
    if opcion == 1:
        print("Sumar")
    elif opcion == 2:
        print("Restar")
    elif opcion == 3:
        print("Multiplicar")
    elif opcion == 4:
        print("Chao")
    else:
        print("Opcion invalida")
```

### Menu con validacion de opcion

```python
opcion = ""

while opcion not in ["1", "2", "3", "4"]:
    print("=== MENU ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion not in ["1", "2", "3", "4"]:
        print("Opcion invalida. Intenta de nuevo.")
```

### Menu completo con calculadora

```python
while True:
    print("=== CALCULADORA ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion == "5":
        print("Gracias por usar la calculadora")
        break
    
    if opcion in ["1", "2", "3", "4"]:
        a = float(input("Primer numero: "))
        b = float(input("Segundo numero: "))
        
        if opcion == "1":
            print("Resultado:", a + b)
        elif opcion == "2":
            print("Resultado:", a - b)
        elif opcion == "3":
            print("Resultado:", a * b)
        elif opcion == "4":
            if b != 0:
                print("Resultado:", a / b)
            else:
                print("Error: division por cero")
    else:
        print("Opcion invalida")
```

### Menu con confirmacion

```python
while True:
    print("=== GESTION DE DATOS ===")
    print("1. Agregar")
    print("2. Ver")
    print("3. Eliminar")
    print("4. Salir")
    
    opcion = input("Opcion: ")
    
    if opcion == "1":
        print("Agregando...")
    elif opcion == "2":
        print("Viendo...")
    elif opcion == "3":
        print("Eliminando...")
    elif opcion == "4":
        confirmar = input("Estas seguro? (s/n): ")
        if confirmar == "s":
            print("Chao")
            break
    else:
        print("Opcion invalida")
```

## 9. Diferencia entre while y for

| Caracteristica | while | for |
| --- | --- | --- |
| Cuando usar | Cuando no se sabe cuantas veces | Cuando se conoce el numero o se recorre secuencia |
| Condicion | Se evalua en cada iteracion | Se define el rango o secuencia |
| Necesita actualizacion | Si, manualmente | No, `range()` la maneja |

## 10. Errores comunes

### Ciclo infinito

```python
# ERROR: nunca cambia la condicion
contador = 1
while contador <= 5:
    print(contador)
    #忘记 contador = contador + 1

# CORRECTO
contador = 1
while contador <= 5:
    print(contador)
    contador = contador + 1
```

### Olvidar conversion en validacion

```python
# ERROR
numero = input("Numero: ")
while numero > 0:  # ERROR: comparando texto con numero
    numero = input("Numero: ")

# CORRECTO
numero = int(input("Numero: "))
while numero <= 0:
    numero = int(input("Numero positivo: "))
```

## 11. Resumen

- `while` repite mientras la condicion sea verdadera.
- `for` repite sobre una secuencia o rango.
- `range(n)` genera 0 a n-1.
- `range(inicio, fin)` genera desde inicio hasta fin-1.
- `range(inicio, fin, paso)` genera con el paso indicado.
- `break` termina el ciclo.
- `continue` salta a la siguiente iteracion.
- `else` en ciclos se ejecuta al terminar.
- Validaciones: usar `while` hasta que el dato sea correcto.
- Menu ciclico: `while True` con `break` para salir.
