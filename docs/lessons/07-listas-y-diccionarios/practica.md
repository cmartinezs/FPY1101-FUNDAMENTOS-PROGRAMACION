# Practica

## Ejercicios guiados

1. Crear una lista con los nombres de 4 companeros y mostrarlos con `for`.
2. Pedir 3 numeros al usuario, guardarlos en una lista y mostrar su suma.
3. Crear un diccionario con tu nombre, edad y carrera. Mostrar cada valor.
4. Recorrer un diccionario con `items()` y mostrar cada clave y valor.
5. Buscar si un numero existe en una lista usando `in`.

## Ejercicios autonomos

1. Pedir 5 numeros y mostrar solo los que sean mayores a 10.
2. Crear una lista de 6 numeros y ordenarla de mayor a menor.
3. Pedir nombres hasta escribir "fin" y mostrar cuantos se ingresaron.
4. Crear un diccionario de un producto con nombre, precio y stock. Mostrar todo.
5. Pedir un nombre y buscarlo en una lista; mostrar si esta o no.
6. Calcular el promedio de notas ingresadas por el usuario (sin saber cuantas seran).
7. Crear una lista de pares de numeros del 1 al 20.
8. Contar cuantas veces aparece un elemento en una lista.
9. Pedir datos de 3 personas (nombre y edad) y guardarlos en una lista de diccionarios.
10. Mostrar el nombre del estudiante con la nota mas alta de una lista de diccionarios.
11. Eliminar los duplicados de una lista (sin usar set).
12. Crear un diccionario que cuente cuantas veces aparece cada letra en un texto.
13. Invertir el orden de una lista sin usar `reverse()`.
14. Dado un diccionario de precios, mostrar solo los productos que cuesten menos de 1000.
15. Pedir productos y precios, guardar en lista de diccionarios y mostrar el total de todos los precios.

## Ejercicio integrador

Crear un sistema de contactos con menu ciclico que permita:

1. Mostrar menu con opciones:
   - 1. Agregar contacto
   - 2. Ver todos los contactos
   - 3. Buscar contacto por nombre
   - 4. Eliminar contacto
   - 5. Salir

2. Para "Agregar contacto":
   - Pedir nombre (no puede estar vacio)
   - Pedir telefono (no puede estar vacio)
   - Pedir email (debe contener "@")
   - Guardar como diccionario en la lista de contactos

3. Para "Ver todos los contactos":
   - Si no hay contactos, mostrar "No hay contactos"
   - Si hay, mostrar nombre, telefono y email de cada uno numerados

4. Para "Buscar contacto":
   - Pedir un nombre
   - Mostrar sus datos si existe, o "No encontrado" si no

5. Para "Eliminar contacto":
   - Pedir un nombre
   - Si existe, eliminarlo y confirmar
   - Si no existe, mostrar mensaje

6. Para "Salir":
   - Salir del programa directamente

Ejemplo de salida esperada:

```
=== AGENDA DE CONTACTOS ===
1. Agregar contacto
2. Ver todos los contactos
3. Buscar contacto
4. Eliminar contacto
5. Salir
Opcion: 1
Nombre: Ana
Telefono: 912345678
Email: ana@mail.com
Contacto agregado.

=== AGENDA DE CONTACTOS ===
1. Agregar contacto
2. Ver todos los contactos
3. Buscar contacto
4. Eliminar contacto
5. Salir
Opcion: 2
1. Ana | 912345678 | ana@mail.com

=== AGENDA DE CONTACTOS ===
1. Agregar contacto
2. Ver todos los contactos
3. Buscar contacto
4. Eliminar contacto
5. Salir
Opcion: 5
Chao!
```
