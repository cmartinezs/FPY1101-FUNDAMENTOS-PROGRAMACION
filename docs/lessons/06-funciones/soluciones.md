# Soluciones de referencia

Estas soluciones separan responsabilidades usando funciones pequeñas.

## Ejercicios guiados

```python
import random


def mostrar_hola_mundo():
    print("Hola mundo")


def obtener_numero_aleatorio():
    return random.randint(1, 100)


def mostrar_cuadrado(numero):
    print("Cuadrado:", numero ** 2)


def obtener_mayor(numero_1, numero_2):
    if numero_1 > numero_2:
        return numero_1
    return numero_2


def calcular_area_triangulo(base, altura):
    return (base * altura) / 2


mostrar_hola_mundo()
print("Aleatorio:", obtener_numero_aleatorio())
mostrar_cuadrado(5)
print("Mayor:", obtener_mayor(8, 3))
print("Área triángulo:", calcular_area_triangulo(10, 4))
```

## Ejemplos para ejercicios autónomos

```python
def mostrar_menu():
    print("1. Agregar")
    print("2. Buscar")
    print("3. Salir")


def calcular_precio_final(precio, descuento=0):
    return precio - (precio * descuento / 100)


def obtener_suma_y_multiplicacion(numero_1, numero_2):
    suma = numero_1 + numero_2
    multiplicacion = numero_1 * numero_2
    return suma, multiplicacion
```

## Ejercicio integrador

```python
PI = 3.1416


def mostrar_menu():
    print("1. Área cuadrado")
    print("2. Área círculo")
    print("3. Área triángulo")
    print("4. Salir")


def obtener_opcion():
    return int(input("Opción: "))


def calcular_area_cuadrado(lado):
    return lado * lado


def calcular_area_circulo(radio):
    return PI * radio * radio


def calcular_area_triangulo(base, altura):
    return (base * altura) / 2


def mostrar_resultado(figura, area):
    print(f"El área de {figura} es {area:.2f}")


opcion = 0

while opcion != 4:
    mostrar_menu()
    opcion = obtener_opcion()

    if opcion == 1:
        lado = float(input("Lado: "))
        area = calcular_area_cuadrado(lado)
        mostrar_resultado("cuadrado", area)
    elif opcion == 2:
        radio = float(input("Radio: "))
        area = calcular_area_circulo(radio)
        mostrar_resultado("círculo", area)
    elif opcion == 3:
        base = float(input("Base: "))
        altura = float(input("Altura: "))
        area = calcular_area_triangulo(base, altura)
        mostrar_resultado("triángulo", area)
    elif opcion == 4:
        print("Programa finalizado")
    else:
        print("Opción no válida")
```

