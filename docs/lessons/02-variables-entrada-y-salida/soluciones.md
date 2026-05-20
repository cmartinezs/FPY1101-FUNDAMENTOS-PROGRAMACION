# Soluciones de referencia

Estas soluciones muestran una forma simple de resolver los ejercicios. Pueden existir otras respuestas correctas.

## Ejercicios guiados

### 1. Saludo personalizado

```python
nombre = input("Nombre: ")
print("Hola", nombre + ", bienvenido")
```

### 2. Triple de un número

```python
numero = int(input("Número: "))
print("El triple es:", numero * 3)
```

### 3. Promedio de dos números

```python
numero_1 = float(input("Primer número: "))
numero_2 = float(input("Segundo número: "))
promedio = (numero_1 + numero_2) / 2
print("Promedio:", promedio)
```

### 4. Área de un cuadrado

```python
lado = float(input("Lado del cuadrado: "))
area = lado * lado
print("Área:", area)
```

### 5. Mayoría de edad

```python
edad = int(input("Edad: "))

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

## Ejercicio integrador

```python
nombre = input("Nombre: ")
nota_1 = float(input("Nota 1: "))
nota_2 = float(input("Nota 2: "))
nota_3 = float(input("Nota 3: "))

promedio = (nota_1 + nota_2 + nota_3) / 3

if promedio >= 70:
    estado = "Aprobado"
else:
    estado = "Reprobado"

print(nombre, "tu promedio es", round(promedio, 2), "y estás", estado)
```

