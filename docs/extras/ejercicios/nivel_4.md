# Nivel 4: Ciclos con Lógica

Ejercicios que utilizan ciclos con acumulación, validación y lógica más compleja.

---

### 1. Calculadora de Promedio de N Valores
Un sistema necesita calcular el promedio de una cantidad variable de valores. El usuario ingresa valores uno a uno y termina con 0. Calcula el promedio de todos los valores ingresados (sin incluir el 0).

**Entrada:** Valores uno a uno (termina con 0)  
**Salida:** Promedio de los valores

---

### 2. Contador de Números Positivos y Negativos
Un sistema necesita contar cuántos números positivos y negativos se ingresan. El usuario ingresa números uno a uno y termina con 0. Muestra la cantidad de positivos, negativos y el total.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** Cantidad de positivos, negativos y total

---

### 3. Sumador de Pares
Un sistema necesita sumar solo los números pares ingresados. El usuario ingresa números uno a uno y termina con 0. Muestra la suma solo de los números pares.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** Suma de números pares

---

### 4. Encontrar el Mayor
El usuario ingresa números uno a uno y termina con 0. Muestra cuál fue el mayor número ingresado.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** El número mayor

---

### 5. Encontrar el Menor
El usuario ingresa números uno a uno y termina con 0. Muestra cuál fue el menor número ingresar.
</think>


<minimax:tool_call>
<invoke name="write">
<parameter name="content"># Nivel 4: Ciclos con Lógica

Ejercicios que utilizan ciclos con acumulación, validación y lógica más compleja.

---

### 1. Calculadora de Promedio de N Valores
Un sistema necesita calcular el promedio de una cantidad variable de valores. El usuario ingresa valores uno a uno y termina con 0. Calcula el promedio de todos los valores ingresados (sin incluir el 0).

**Entrada:** Valores uno a uno (termina con 0)  
**Salida:** Promedio de los valores

---

### 2. Contador de Números Positivos y Negativos
Un sistema necesita contar cuántos números positivos y negativos se ingresan. El usuario ingresa números uno a uno y termina con 0. Muestra la cantidad de positivos, negativos y el total.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** Cantidad de positivos, negativos y total

---

### 3. Sumador de Pares
Un sistema necesita sumar solo los números pares ingresados. El usuario ingresa números uno a uno y termina con 0. Muestra la suma solo de los números pares.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** Suma de números pares

---

### 4. Encontrar el Mayor
El usuario ingresa números uno a uno y termina con 0. Muestra cuál fue el mayor número ingresado.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** El número mayor

---

### 5. Encontrar el Menor
El usuario ingresa números uno a uno y termina con 0. Muestra cuál fue el menor número ingresado.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** El número menor

---

### 6. Contador de Números Divisibles
El usuario ingresa números uno a uno y termina con 0. Cuenta cuántos números son divisibles por 3.

**Entrada:** Números uno a uno (termina con 0)  
**Salida:** Cantidad divisible por 3

---

### 7. Calculadora de Factorial
Un sistema necesita calcular el factorial de un número. El factorial de n es: n! = 1 × 2 × 3 × ... × n. Solicita un número entero no negativo y calcula su factorial.

**Entrada:** Un número entero no negativo  
**Salida:** Factorial del número

---

### 8. Calculadora de Raíz Cuadrada Aproximada
Sin usar funciones built-in de raíz, calcula la raíz cuadrada usando el método de Newton. Solicita un número mayor a 0 y encuentra su raíz cuadrada aproximada.

**Entrada:** Número mayor a 0  
**Salida:** Raíz cuadrada aproximada

---

### 9. Calculadora de Dígito Verificador del RUT (Chile)
El Servicio de Registro Civil de Chile utiliza un algoritmo para calcular el dígito verificador del RUT. El proceso es:

1. Multiplicar cada dígito del RUT (sin el verificador) por la serie: 2, 3, 4, 5, 6, 7, 2, 3, 4... (de derecha a izquierda)
2. Sumar todos los productos obtenidos
3. Calcular el resto de dividir esa suma por 11
4. Restar 11 menos ese resto
5. Si el resultado es 11, el dígito es "0"; si es 10, el dígito es "K"; de lo contrario, el resultado es el dígito

Solicita el RUT sin el dígito verificador (solo los dígitos) y calcula cuál debe ser el dígito verificador.

**Entrada:** RUT sin dígito verificador (número entero)  
**Salida:** Dígito verificador ("0" a "9" o "K")

---

### 10. Calculadora de Potencia
Sin usar el operador **, calcula la potencia de base^exponente usando un ciclo. Solicita la base y el exponente (entero no negativo).

**Entrada:** Base y exponente  
**Salida:** Resultado de base^exponente

---

### 11. Verificador de Número Primo
Un sistema matemático necesita verificar si un número es primo. Un número primo solo es divisible por 1 y por sí mismo. Solicita un número mayor a 1 y determina si es primo.

**Entrada:** Un número mayor a 1  
**Salida:** "Primo" o "No primo"

---

### 12. Contador de Dígitos
Un sistema necesita contar la cantidad de dígitos de un número. Solicita un número entero y muestra cuántos dígitos tiene.

**Entrada:** Un número entero  
**Salida:** Cantidad de dígitos

---

### 13. Invertir Número
El usuario ingresa un número entero y el sistema invierte sus dígitos. Ejemplo: 1234 → 4321.

**Entrada:** Un número entero  
**Salida:** Número invertido

---

### 14. Calculadora de Serie Fibonacci
La serie Fibonacci comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13... Solicita la cantidad de términos y muestra la serie.

**Entrada:** Cantidad de términos  
**Salida:** Serie Fibonacci

---

### 15. Tabla de Multiplicar
Solicita un número y muestra su tabla de multiplicar del 1 al 10.

**Entrada:** Un número  
**Salida:** Tabla de multiplicar del 1 al 10

---

### 16. Contador de Vocales
El usuario ingresa una palabra y el sistema cuenta cuántas vocales tiene.

**Entrada:** Una palabra  
**Salida:** Cantidad de vocales

---

### 17. Verificador de Palíndromo
El usuario ingresa una palabra y el sistema verifica si es un palíndromo (se lee igual al revés).

**Entrada:** Una palabra  
**Salida:** "Palíndromo" o "No es palíndromo"

---

### 18. Generador de Números Pares
El usuario ingresa un número y el sistema muestra todos los números pares desde 1 hasta ese número.

**Entrada:** Un número  
**Salida:** Números pares del 1 al número

---

### 19. Sumador de Secuencia
Calcula la suma de la secuencia: 1 + 2 + 3 + ... + n. Solicita n y muestra el resultado.

**Entrada:** Un número n  
**Salida:** Suma de 1 a n

---

### 20. Calculadora de Suma de Dígitos
Un sistema necesita la suma de los dígitos de un número. Solicita un número entero y calcula la suma de sus dígitos.

**Entrada:** Un número entero  
**Salida:** Suma de dígitos
