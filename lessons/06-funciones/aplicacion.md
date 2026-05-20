# Aplicacion

## Ejercicio 1 - Tipo 1: Sin parametros, sin retorno

### Enunciado

Crear una funcion que muestre un mensaje de bienvenida.

### Solucion en Python

```python
def mostrar_bienvenida():
    print("=== BIENVENIDO ===")
    print("Sistema de Gestion v1.0")
    print("===================")

mostrar_bienvenida()
```

### Explicacion

- La funcion no recibe parametros.
- Solo ejecuta print() para mostrar el mensaje.

---

## Ejercicio 2 - Tipo 1: Sin parametros, sin retorno

### Enunciado

Crear una funcion que muestre el menu del sistema.

### Solucion en Python

```python
def mostrar_menu():
    print("1. Agregar")
    print("2. Buscar")
    print("3. Eliminar")
    print("4. Salir")

mostrar_menu()
```

### Explicacion

- Sin parametros, solo muestra opciones.

---

## Ejercicio 3 - Tipo 2: Sin parametros, con retorno

### Enunciado

Crear una funcion que devuelva la fecha actual.

### Solucion en Python

```python
def obtener_fecha():
    return "15 de abril de 2026"

fecha = obtener_fecha()
print("Hoy es:", fecha)
```

### Explicacion

- No recibe parametros.
- Usa `return` para devolver el valor.

---

## Ejercicio 4 - Tipo 2: Sin parametros, con retorno

### Enunciado

Crear una funcion que devuelva un numero aleatorio.

### Solucion en Python

```python
def generar_codigo():
    import random
    return random.randint(1000, 9999)

codigo = generar_codigo()
print("Tu codigo es:", codigo)
```

### Explicacion

- `return` devuelve el valor generado.

---

## Ejercicio 5 - Tipo 3: Con parametros, sin retorno

### Enunciado

Crear una funcion que reciba dos numeros y muestre su suma.

### Solucion en Python

```python
def mostrar_suma(a, b):
    print(f"{a} + {b} = {a + b}")

mostrar_suma(5, 3)
```

### Explicacion

- Recibe parametros a y b.
- No retorna, solo muestra el resultado.

---

## Ejercicio 6 - Tipo 3: Con parametros, sin retorno

### Enunciado

Crear una funcion que reciba un nombre y edad, y muestre la informacion.

### Solucion en Python

```python
def mostrar_datos(nombre, edad):
    print(f"Nombre: {nombre}")
    print(f"Edad: {edad} años")

mostrar_datos("Ana", 25)
```

### Explicacion

- Dos parametros: nombre y edad.
- Solo muestra, no retorna.

---

## Ejercicio 7 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que reciba dos numeros y devuelva su suma.

### Solucion en Python

```python
def calcular_suma(a, b):
    return a + b

resultado = calcular_suma(5, 3)
print("Resultado:", resultado)
```

### Explicacion

- Recibe parametros y retorna el resultado.
- El valor retornado se guarda en una variable.

---

## Ejercicio 8 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que calcule el area de un rectangulo.

### Solucion en Python

```python
def calcular_area_rectangulo(base, altura):
    return base * altura

area = calcular_area_rectangulo(5, 3)
print("Area:", area)
```

### Explicacion

- Recibe base y altura.
- Retorna el area calculada.

---

## Ejercicio 9 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que verifique si un numero es par.

### Solucion en Python

```python
def es_par(numero):
    return numero % 2 == 0

if es_par(10):
    print("Es par")
else:
    print("Es impar")
```

### Explicacion

- Recibe un numero.
- Retorna True o False.

---

## Ejercicio 10 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que calcule el promedio de tres notas.

### Solucion en Python

```python
def calcular_promedio(nota1, nota2, nota3):
    return (nota1 + nota2 + nota3) / 3

promedio = calcular_promedio(85, 90, 78)
print(f"Promedio: {promedio:.2f}")
```

### Explicacion

- Recibe tres notas.
- Retorna el promedio.

---

## Ejercicio 11 - Tipo 3: Con parametros, sin retorno

### Enunciado

Crear una funcion que muestre la tabla de multiplicar de un numero.

### Solucion en Python

```python
def mostrar_tabla(numero):
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero * i}")

mostrar_tabla(7)
```

### Explicacion

- Recibe el numero.
- Muestra la tabla, no retorna nada.

---

## Ejercicio 12 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que calcule el descuento y retorne el precio final.

### Solucion en Python

```python
def calcular_precio_final(precio, descuento):
    monto_descuento = precio * descuento / 100
    return precio - monto_descuento

precio_final = calcular_precio_final(100, 20)
print("Precio final:", precio_final)
```

### Explicacion

- Recibe precio y porcentaje de descuento.
- Retorna el precio despues del descuento.

---

## Ejercicio 13 - Tipo 2: Sin parametros, con retorno

### Enunciado

Crear una funcion que devuelva la version del programa.

### Solucion en Python

```python
def obtener_version():
    return "2.0.1"

print("Version:", obtener_version())
```

### Explicacion

- No recibe parametros.
- Retorna un string con la version.

---

## Ejercicio 14 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que retorne el mayor de dos numeros.

### Solucion en Python

```python
def obtener_mayor(a, b):
    if a > b:
        return a
    else:
        return b

mayor = obtener_mayor(10, 20)
print("El mayor es:", mayor)
```

### Explicacion

- Compara los dos numeros.
- Retorna el mayor.

---

## Ejercicio 15 - Tipo 4: Con parametros, con retorno

### Enunciado

Crear una funcion que convierta Celsius a Fahrenheit.

### Solucion en Python

```python
def celsius_a_fahrenheit(celsius):
    return celsius * 9 / 5 + 32

temp_f = celsius_a_fahrenheit(25)
print(f"{25}C = {temp_f}F")
```

### Explicacion

- Recibe grados Celsius.
- Retorna el equivalentes en Fahrenheit.

---

## Ejercicio 16 - Return multiple

### Enunciado

Crear una funcion que retorne la suma y la resta de dos numeros.

### Solucion en Python

```python
def operaciones(a, b):
    return a + b, a - b

suma, resta = operaciones(10, 5)
print("Suma:", suma)
print("Resta:", resta)
```

### Explicacion

- `return` puede devolver varios valores separados por coma.
- Se desempaquetan al llamar la funcion.

---

## Ejercicio 17 - Parametros por defecto

### Enunciado

Crear una funcion con parametro por defecto.

### Solucion en Python

```python
def saludar(nombre="Usuario"):
    print(f"Hola, {nombre}!")

saludar()          # Hola, Usuario!
saludar("Ana")     # Hola, Ana!
```

### Explicacion

- Si no se pasa el argumento, usa el valor por defecto.

---

## Ejercicio 18 - *args

### Enunciado

Crear una funcion que sume todos los numeros que se le pasen.

### Solucion en Python

```python
def sumar_todos(*numeros):
    total = 0
    for n in numeros:
        total += n
    return total

print(sumar_todos(1, 2, 3))          # 6
print(sumar_todos(1, 2, 3, 4, 5))   # 15
```

### Explicacion

- `*numeros` permite recibir cualquier cantidad de argumentos.
