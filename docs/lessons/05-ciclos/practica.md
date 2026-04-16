# Practica

## Ejercicios guiados

1. Mostrar los numeros del 1 al 10 usando for y range().
2. Mostrar los numeros impares del 1 al 15.
3. Pedir un numero mayor a 0 usando while.
4. Crear un menu simple con 3 opciones y salida.
5. Calcular el factorial de un numero usando un ciclo.

## Ejercicios autonomos

1. Mostrar los numeros del 10 al 1 (cuenta regresiva).
2. Pedir una opcion valida entre 1 y 5.
3. Calcular la suma de los primeros n numeros.
4. Pedir un correo que contenga "@".
5. Mostrar la tabla de multiplicar del 5 (del 1 al 10).
6. Pedir que el usuario ingrese "si" para confirmar.
7. Contar cuantas veces aparece la letra "a" en un texto (usando ciclo).
8. Validar que un numero este entre 1 y 100.
9. Crear un menu de calculadora completo (suma, resta, multiplicacion, division, salir).
10. Pedir una contrasena que tenga al menos 6 caracteres.
11. Mostrar los primeros n numeros pares.
12. Pedir un anio valido (mayor a 1900 y menor a 2100).
13. Crear un menu con 4 opciones y salida con confirmacion.
14. Calcular la potencia sin usar **.
15. Validar un numero de telefono (solo digitos y 8 caracteres).

## Ejercicio integrador

Crear un sistema de gestion de notas de estudiantes con menu ciclico:

1. Mostrar menu con opciones:
   - 1. Agregar estudiante
   - 2. Ver promedio de notas
   - 3. Buscar estudiante por nombre
   - 4. Salir

2. Para "Agregar estudiante":
   - Pedir nombre del estudiante (no puede estar vacio)
   - Pedir 3 notas (entre 0 y 100)
   - Calcular el promedio
   - Mostrar el resultado

3. Para "Ver promedio de notas":
   - Si no hay estudiantes, mostrar "No hay estudiantes"
   - Si hay, mostrar el promedio general

4. Para "Buscar estudiante":
   - Pedir un nombre
   - Buscar y mostrar las notas si existe, o mensaje de no encontrado

5. Para "Salir":
   - Pedir confirmacion antes de salir
   - Si confirma, terminar el programa
   - Si no, volver al menu

Ejemplo de salida esperada:

```
=== GESTION DE ESTUDIANTES ===
1. Agregar estudiante
2. Ver promedio de notas
3. Buscar estudiante
4. Salir
Opcion: 1
Nombre: Juan
Nota 1: 85
Nota 2: 90
Nota 3: 70
Juan, tu promedio es: 81.67

=== GESTION DE ESTUDIANTES ===
1. Agregar estudiante
2. Ver promedio de notas
3. Buscar estudiante
4. Salir
Opcion: 4
Estas seguro de salir? (s/n): s
Chao!
```
