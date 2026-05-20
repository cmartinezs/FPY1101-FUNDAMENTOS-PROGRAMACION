# Soluciones de referencia

Estas soluciones se enfocan en condiciones claras con `if`, `elif`, `else` y operadores lógicos.

## Ejercicios guiados

### 1. Par o impar

```python
numero = int(input("Número: "))

if numero % 2 == 0:
    print("Par")
else:
    print("Impar")
```

### 2. Menor de dos números

```python
numero_1 = float(input("Primer número: "))
numero_2 = float(input("Segundo número: "))

if numero_1 < numero_2:
    print("El menor es:", numero_1)
else:
    print("El menor es:", numero_2)
```

### 3. Letra mayúscula

```python
letra = input("Letra: ")

if letra == letra.upper() and letra.isalpha():
    print("Es mayúscula")
else:
    print("No es mayúscula")
```

### 4. Número entre 20 y 30

```python
numero = int(input("Número: "))

if numero >= 20 and numero <= 30:
    print("Está entre 20 y 30")
else:
    print("No está entre 20 y 30")
```

### 5. Categoría por edad

```python
edad = int(input("Edad: "))

if edad <= 12:
    print("Niño")
elif edad <= 17:
    print("Adolescente")
elif edad <= 64:
    print("Adulto")
else:
    print("Adulto mayor")
```

## Ejercicio integrador

```python
usuario = input("Usuario: ").strip()
contrasena = input("Contraseña: ")

usuario_vacio = usuario == ""
contrasena_corta = len(contrasena) < 6

if not usuario_vacio and not contrasena_corta:
    print("Login exitoso")
else:
    if usuario_vacio:
        print("Error: El usuario no puede estar vacío")

    if contrasena_corta:
        print("Error: La contraseña debe tener al menos 6 caracteres")
```

