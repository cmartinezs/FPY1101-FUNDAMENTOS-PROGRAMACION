# Soluciones de referencia

Estas soluciones usan type hints para documentar qué tipo de dato recibe y retorna cada función.

## Ejercicios guiados

```python
from math import pi


def calcular_cuadrado(numero: float) -> float:
    return numero ** 2


def mostrar_positivo(numero: float) -> None:
    if numero > 0:
        print("Positivo")
    else:
        print("No positivo")


def calcular_area_circulo(radio: float) -> float:
    return pi * radio ** 2


def obtener_mayor(numero_1: float, numero_2: float) -> float:
    if numero_1 > numero_2:
        return numero_1
    return numero_2


def calcular_promedio(nota_1: float, nota_2: float, nota_3: float) -> float:
    return (nota_1 + nota_2 + nota_3) / 3
```

## Ejemplos para ejercicios autónomos

```python
from math import pi


def sumar(numero_1: float, numero_2: float) -> float:
    return numero_1 + numero_2


def es_par(numero: int) -> bool:
    return numero % 2 == 0


def aplicar_iva(precio: float, iva: float = 19) -> float:
    return precio + (precio * iva / 100)


def validar_contrasena(contrasena: str) -> bool:
    return len(contrasena) >= 6


def obtener_mayor_lista(numeros: list[float]) -> float:
    return max(numeros)


def calcular_perimetro_circulo(radio: float) -> float:
    return 2 * pi * radio
```

## Ejercicio integrador

```python
from math import pi


def obtener_opcion() -> int:
    print("1. Área cuadrado")
    print("2. Área círculo")
    print("3. Área triángulo")
    print("4. Salir")
    return int(input("Opción: "))


def calcular_area_cuadrado(lado: float) -> float:
    return lado * lado


def calcular_area_circulo(radio: float) -> float:
    return pi * radio ** 2


def calcular_area_triangulo(base: float, altura: float) -> float:
    return (base * altura) / 2


def mostrar_resultado(figura: str, area: float) -> None:
    print(f"El área de {figura} es {area:.2f}")


opcion: int = obtener_opcion()

if opcion == 1:
    lado: float = float(input("Lado: "))
    mostrar_resultado("cuadrado", calcular_area_cuadrado(lado))
elif opcion == 2:
    radio: float = float(input("Radio: "))
    mostrar_resultado("círculo", calcular_area_circulo(radio))
elif opcion == 3:
    base: float = float(input("Base: "))
    altura: float = float(input("Altura: "))
    mostrar_resultado("triángulo", calcular_area_triangulo(base, altura))
elif opcion == 4:
    print("Programa finalizado")
else:
    print("Opción no válida")
```

