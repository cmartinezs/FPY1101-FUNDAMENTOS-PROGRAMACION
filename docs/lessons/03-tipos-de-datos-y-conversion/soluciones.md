# Soluciones de referencia

Revisa estas respuestas después de intentar la práctica. Observa especialmente las conversiones de tipo.

## Ejercicios guiados

### 1. Positivo, negativo o cero

```python
numero = float(input("Número: "))

if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Cero")
```

### 2. Concatenar textos

```python
texto_1 = input("Primer texto: ")
texto_2 = input("Segundo texto: ")
oracion = texto_1 + " " + texto_2
print(oracion)
```

### 3. Parte entera

```python
decimal = float(input("Número decimal: "))
print("Parte entera:", int(decimal))
```

### 4. Longitud de un texto

```python
texto = input("Texto: ")
print("Longitud:", len(texto))
```

### 5. Cuadrado y cubo

```python
numero = float(input("Número: "))
print("Cuadrado:", numero ** 2)
print("Cubo:", numero ** 3)
```

## Ejemplos para ejercicios autónomos

```python
texto = input("Texto: ")
print("Últimos 3 caracteres:", texto[-3:])
print("Texto invertido:", texto[::-1])
print("Sin espacios externos:", texto.strip())
print("Contiene espacios:", " " in texto)
```

```python
palabra = input("Palabra: ").lower().strip()

if palabra == palabra[::-1]:
    print("Es palíndromo")
else:
    print("No es palíndromo")
```

## Ejercicio integrador

```python
nombre = input("Nombre: ")
nota_1 = float(input("Nota 1: "))
nota_2 = float(input("Nota 2: "))
nota_3 = float(input("Nota 3: "))

promedio = (nota_1 + nota_2 + nota_3) / 3
nota_mayor = max(nota_1, nota_2, nota_3)
nota_menor = min(nota_1, nota_2, nota_3)

if promedio >= 70:
    situacion = "Aprobado"
else:
    situacion = "Reprobado"

print("---")
print(f"{nombre}, tu promedio es {promedio:.2f} y estás {situacion}")
print("Nota más alta:", nota_mayor)
print("Nota más baja:", nota_menor)
```

