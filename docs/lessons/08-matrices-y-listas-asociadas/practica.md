# Practica

## Ejercicios guiados

1. Crear una matriz de 2 filas y 2 columnas con numeros y mostrarla completa.
2. Mostrar el valor ubicado en la fila 1, columna 0 de una matriz.
3. Modificar un valor de una matriz usando fila y columna.
4. Crear un tablero de ajedrez con piezas y casillas vacias usando `"."`.
5. Mostrar todas las piezas de un tablero de ajedrez usando ciclos anidados.
6. Crear dos listas asociadas: `butacas` y `estados`. Mostrar cada butaca con su estado.
7. Buscar una butaca en una lista y mostrar su estado asociado.
8. Cambiar el estado de una butaca de `"libre"` a `"reservada"`.

## Ejercicios autonomos

1. Crear una matriz de 3 filas y 4 columnas llena de ceros.
2. Pedir al usuario los valores de una matriz de 3 filas y 3 columnas.
3. Calcular la suma de todos los valores de una matriz numerica.
4. Contar cuantos valores mayores a 10 hay en una matriz.
5. Mostrar solo la primera fila de una matriz.
6. Mostrar solo la ultima columna de una matriz.
7. Crear un tablero de ajedrez y contar cuantas casillas vacias hay.
8. Crear un tablero de ajedrez y contar cuantos peones hay.
9. Pedir una posicion del tablero y mostrar si esta vacia o tiene pieza.
10. Mover una pieza del tablero validando que la posicion de origen no este vacia.
11. Crear listas asociadas con nombres de estudiantes y notas. Mostrar estudiantes aprobados.
12. Crear listas asociadas con productos, precios y stock. Mostrar el total valorizado de cada producto.
13. Crear listas asociadas de butacas, estados y precios. Mostrar solo las butacas libres.
14. Pedir al usuario una butaca. Si existe y esta libre, cambiarla a `"ocupada"`.
15. Contar cuanto dinero se recaudo con las butacas cuyo estado sea `"ocupada"`.

## Ejercicio integrador

Crear un sistema simple de reservas de cine con listas asociadas.

El programa debe tener:

1. Tres listas asociadas:
   - `butacas`: codigos como `"A1"`, `"A2"`, `"A3"`, `"B1"`, `"B2"`, `"B3"`.
   - `estados`: valores `"libre"`, `"ocupada"` o `"reservada"`.
   - `precios`: precio de cada butaca.

2. Menu ciclico con opciones:
   - 1. Ver todas las butacas
   - 2. Ver butacas libres
   - 3. Reservar butaca
   - 4. Comprar butaca
   - 5. Ver resumen
   - 6. Salir

3. Para "Ver todas las butacas":
   - Mostrar codigo, estado y precio de cada butaca.

4. Para "Ver butacas libres":
   - Mostrar solo las butacas cuyo estado sea `"libre"`.

5. Para "Reservar butaca":
   - Pedir codigo.
   - Si no existe, mostrar mensaje.
   - Si existe pero no esta libre, mostrar mensaje.
   - Si existe y esta libre, cambiar estado a `"reservada"`.

6. Para "Comprar butaca":
   - Pedir codigo.
   - Si no existe, mostrar mensaje.
   - Si existe y esta `"libre"` o `"reservada"`, cambiar estado a `"ocupada"`.
   - Si ya esta `"ocupada"`, mostrar mensaje.

7. Para "Ver resumen":
   - Mostrar cantidad de butacas libres, reservadas y ocupadas.
   - Mostrar total recaudado considerando solo butacas ocupadas.

Ejemplo de salida esperada:

```text
=== CINE ===
1. Ver todas las butacas
2. Ver butacas libres
3. Reservar butaca
4. Comprar butaca
5. Ver resumen
6. Salir
Opcion: 1
A1 - libre - $4500
A2 - ocupada - $4500
A3 - libre - $4500
B1 - reservada - $5000
B2 - libre - $5000
B3 - libre - $5000

=== CINE ===
1. Ver todas las butacas
2. Ver butacas libres
3. Reservar butaca
4. Comprar butaca
5. Ver resumen
6. Salir
Opcion: 3
Butaca a reservar: A3
Butaca reservada.

=== CINE ===
1. Ver todas las butacas
2. Ver butacas libres
3. Reservar butaca
4. Comprar butaca
5. Ver resumen
6. Salir
Opcion: 5
Libres: 3
Reservadas: 2
Ocupadas: 1
Recaudado: 4500
```
