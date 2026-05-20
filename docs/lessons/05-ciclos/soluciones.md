# Soluciones de referencia

Estas soluciones muestran usos básicos de `for`, `while`, validaciones y menús.

## Ejercicios guiados

### 1. Números del 1 al 10

```python
for numero in range(1, 11):
    print(numero)
```

### 2. Impares del 1 al 15

```python
for numero in range(1, 16, 2):
    print(numero)
```

### 3. Pedir un número mayor a 0

```python
numero = int(input("Número mayor a 0: "))

while numero <= 0:
    numero = int(input("Error. Ingrese un número mayor a 0: "))

print("Número válido:", numero)
```

### 4. Menú simple

```python
opcion = 0

while opcion != 3:
    print("1. Saludar")
    print("2. Mostrar curso")
    print("3. Salir")
    opcion = int(input("Opción: "))

    if opcion == 1:
        print("Hola")
    elif opcion == 2:
        print("FPY-1101")
    elif opcion == 3:
        print("Chao")
    else:
        print("Opción no válida")
```

### 5. Factorial

```python
numero = int(input("Número: "))
factorial = 1

for valor in range(1, numero + 1):
    factorial = factorial * valor

print("Factorial:", factorial)
```

## Ejercicio integrador

```python
estudiantes = []
opcion = 0

while opcion != 4:
    print("=== GESTIÓN DE ESTUDIANTES ===")
    print("1. Agregar estudiante")
    print("2. Ver promedio de notas")
    print("3. Buscar estudiante")
    print("4. Salir")

    opcion = int(input("Opción: "))

    if opcion == 1:
        nombre = input("Nombre: ").strip()

        while nombre == "":
            nombre = input("El nombre no puede estar vacío. Nombre: ").strip()

        notas = []

        for contador in range(1, 4):
            nota = float(input(f"Nota {contador}: "))

            while nota < 0 or nota > 100:
                nota = float(input("Nota inválida. Ingrese una nota entre 0 y 100: "))

            notas.append(nota)

        promedio = sum(notas) / len(notas)
        estudiantes.append([nombre, notas, promedio])
        print(f"{nombre}, tu promedio es: {promedio:.2f}")

    elif opcion == 2:
        if len(estudiantes) == 0:
            print("No hay estudiantes")
        else:
            suma_promedios = 0

            for estudiante in estudiantes:
                suma_promedios = suma_promedios + estudiante[2]

            promedio_general = suma_promedios / len(estudiantes)
            print(f"Promedio general: {promedio_general:.2f}")

    elif opcion == 3:
        nombre_buscado = input("Nombre a buscar: ").strip()
        encontrado = False

        for estudiante in estudiantes:
            if estudiante[0].lower() == nombre_buscado.lower():
                print("Notas:", estudiante[1])
                print(f"Promedio: {estudiante[2]:.2f}")
                encontrado = True

        if not encontrado:
            print("Estudiante no encontrado")

    elif opcion == 4:
        confirmar = input("¿Estás seguro de salir? (s/n): ").lower()

        if confirmar == "s":
            print("Chao!")
        else:
            opcion = 0
```

