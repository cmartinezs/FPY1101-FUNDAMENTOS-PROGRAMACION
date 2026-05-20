# Teoria

## Objetivo

Comprender el tipado opcional en Python y como usar type hints para mejorar el codigo.

## Idea central

Los type hints permiten especificar el tipo de datos esperado para parametros y valores de retorno. Esto es opcional en Python y no fuerza el cumplimiento, pero mejora la documentacion y la experiencia en editores.

## Por que usar type hints

1. **Mejora la lectura**: Queda claro que tipo de dato espera cada funcion.
2. **Ayuda en el desarrollo**: Los editores pueden mostrar errores antes de ejecutar.
3. **Documentacion automatica**: El codigo se documenta a si mismo.
4. **Refactorizacion segura**: Es mas facil cambiar codigo sin romperlo.

## Sintaxis basica

### Funcion sin type hints

```python
def saludar(nombre):
    return "Hola, " + nombre
```

### Funcion con type hints

```python
def saludar(nombre: str) -> str:
    return "Hola, " + nombre
```

- `nombre: str` indica que el parametro debe ser string.
- `-> str` indica que retorna un string.

## Tipos basicos

```python
def ejemplo():
    edad: int = 18              # Entero
    altura: float = 1.75         # Flotante
    nombre: str = "Ana"         # Cadena
    activo: bool = True          # Booleano
```

## Type hints en funciones

### Sin parametros, sin retorno

```python
def mostrar_menu() -> None:
    print("1. Ingresar")
    print("2. Salir")
```

`-> None` indica que no retorna nada.

### Sin parametros, con retorno

```python
def obtener_fecha() -> str:
    return "15 de abril"
```

### Con parametros, sin retorno

```python
def mostrar_info(nombre: str, edad: int) -> None:
    print(f"{nombre} tiene {edad} años")
```

### Con parametros, con retorno

```python
def sumar(a: int, b: int) -> int:
    return a + b
```

## Tipos especiales

### Multiple tipo

```python
from typing import Union

def procesar(valor: Union[int, str]) -> str:
    return str(valor)
```

Tambien se puede usar el operador `|` (Python 3.10+):

```python
def procesar(valor: int | str) -> str:
    return str(valor)
```

### Lista de tipos

```python
from typing import List

def sumar_todos(numeros: List[int]) -> int:
    total = 0
    for n in numeros:
        total += n
    return total
```

Tambien se puede usar `list` directamente (Python 3.9+):

```python
def sumar_todos(numeros: list[int]) -> int:
    total = 0
    for n in numeros:
        total += n
    return total
```

### Tipo None

```python
def saludar(nombre: str | None = None) -> str:
    if nombre is None:
        return "Hola!"
    return f"Hola, {nombre}!"
```

### Cualquier tipo

```python
from typing import Any

def mostrar_cualquier cosa(dato: Any) -> None:
    print(dato)
```

### Sin retorno (None)

```python
def mostrar(mensaje: str) -> None:
    print(mensaje)
```

## Parametros con valores por defecto

```python
def calcular_descuento(precio: float, porcentaje: float = 10.0) -> float:
    return precio * porcentaje / 100
```

## Parametros variables

```python
from typing import Tuple

def promediar(*notas: float) -> float:
    return sum(notas) / len(notas)
```

Tambien se puede usar (Python 3.9+):

```python
def promediar(*notas: float) -> float:
    return sum(notas) / len(notas)
```

## Retorno multiple

```python
from typing import Tuple

def operaciones(a: int, b: int) -> Tuple[int, int]:
    return a + b, a - b
```

## Errores comunes

### Olvidar dos puntos

```python
# ERROR
def saludar(nombre str) -> str:
    return "Hola"

# CORRECTO
def saludar(nombre: str) -> str:
    return "Hola"
```

### Olvidar -> None para funciones sin retorno

```python
# INCORRECTO (pero funciona)
def mostrar(mensaje: str):
    print(mensaje)

# CORRECTO (convention)
def mostrar(mensaje: str) -> None:
    print(mensaje)
```

## Resumen de tipos

| Tipo | Notacion |
| --- | --- |
| Entero | `int` |
| Flotante | `float` |
| Cadena | `str` |
| Booleano | `bool` |
| Lista | `list[int]` o `List[int]` |
| Tupla | `tuple[int, str]` |
| Cualquier cosa | `Any` |
| Varios tipos | `int | str` o `Union[int, str]` |
| Sin retorno | `None` |

## Ejemplo completo

```python
from typing import List

def calcular_promedio(notas: List[float]) -> float:
    """
    Calcula el promedio de una lista de notas.
    
    Parametros:
        notas: lista de notas (float)
    
    Retorna:
        El promedio de las notas
    """
    if len(notas) == 0:
        return 0.0
    return sum(notas) / len(notas)

def obtener_estado(promedio: float) -> str:
    """
    Determina el estado segun el promedio.
    
    Parametros:
        promedio: el promedio del estudiante
    
    Retorna:
        "Aprobado" si promedio >= 70, sino "Reprobado"
    """
    if promedio >= 70:
        return "Aprobado"
    else:
        return "Reprobado"

# Uso
notas = [85.0, 90.0, 78.5]
prom = calcular_promedio(notas)
estado = obtener_estado(prom)
print(f"Promedio: {prom:.2f}")
print(f"Estado: {estado}")
```

## Nota importante

Python **no** fuerza el cumplimiento de los type hints. Son solo "sugerencias". El siguiente codigo funciona sin errores:

```python
def saludar(nombre: str) -> str:
    return "Hola"

saludar(123)  # Funciona, pero no es lo esperado
```

Para verificar los tipos en tiempo de ejecucion, se pueden usar herramientas como `mypy`.
