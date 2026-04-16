# Nivel 5: Algoritmos Complejos

Ejercicios que requieren algoritmos más complejos, combinaciones de conceptos y lógica avanzada.

---

### 1. Calculadora de Dígito Verificador del RUT (Chile)
El Servicio de Registro Civil de Chile utiliza un algoritmo para calcular el dígito verificador del RUT. El proceso es:

1. Multiplicar cada dígito del RUT (sin el verificador) por la serie: 2, 3, 4, 5, 6, 7, 2, 3, 4... (de derecha a izquierda)
2. Sumar todos los productos obtenidos
3. Calcular el resto de dividir esa suma por 11
4. Restar 11 menos ese resto
5. Si el resultado es 11, el dígito es "0"; si es 10, el dígito es "K"; de lo contrario, el resultado es el dígito

**Ejemplo:** Para RUT 12345678-? → La suma es 176 → 11 - (176 % 11) = 11 - 0 = 11 → El verificador es "0"

Solicita el RUT sin el dígito verificador (solo los dígitos) y calcula cuál debe ser el dígito verificador.

**Entrada:** RUT sin dígito verificador (número entero)  
**Salida:** Dígito verificador ("0" a "9" o "K")

---

### 2. Calculadora de Bhaskara (Raíces Reales)
Resuelve ecuaciones cuadráticas ax² + bx + c = 0 solo si el discriminante es mayor o igual a 0. La fórmula es: `x = (-b ± √(b²-4ac)) / 2a`. Solicita a, b, c y muestra las raíces reales.

**Entrada:** Coeficientes a, b, c  
**Salida:** Las dos raíces (si existen)

---

### 3. Calculadora de Raíz Cuadrada Aproximada
Sin usar funciones built-in de raíz, calcula la raíz cuadrada usando el método de Newton. El método es: x_nuevO = (x_anterior + n / x_anterior) / 2. Repite hasta que la diferencia sea muy pequeña.

**Entrada:** Número mayor a 0  
**Salida:** Raíz cuadrada aproximada

---

### 4. Calculadora de Factorial
El factorial de n es: n! = 1 × 2 × 3 × ... × n. Solicita un número entero no negativo y calcula su factorial (usando ciclo).

**Entrada:** Un número entero no negativo  
**Salida:** Factorial del número

---

### 5. Verificador de Número Primo
Un número primo solo es divisible por 1 y por sí mismo. Solicita un número mayor a 1 y determina si es primo (debes probar divisibilidad desde 2 hasta la raíz del número).

**Entrada:** Un número mayor a 1  
**Salida:** "Primo" o "No primo"

---

### 6. Calculadora de Potencia
Sin usar el operador **, calcula base^exponente usando un ciclo. El exponente puede ser positivo, negativo o cero.

**Entrada:** Base y exponente (entero)  
**Salida:** Resultado de base^exponente

---

### 7. Invertir Número
El usuario ingresa un número entero y el sistema invierte sus dígitos. Ejemplo: 1234 → 4321. El resultado debe ser también un número entero.

**Entrada:** Un número entero  
**Salida:** Número invertido

---

### 8. Contador de Dígitos
Un sistema necesita contar la cantidad de dígitos de un número sin usar funciones de string. Solicita un número entero y muestra cuántos dígitos tiene.

**Entrada:** Un número entero  
**Salida:** Cantidad de dígitos

---

### 9. Calculadora de Serie Fibonacci
La serie Fibonacci comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13... Solicita la cantidad de términos y muestra la serie.

**Entrada:** Cantidad de términos  
**Salida:** Serie Fibonacci

---

### 10. Verificador de Palíndromo
El usuario ingresa una palabra y el sistema verifica si es un palíndromo (se lee igual al revés). No uses funciones de string invertidas.

**Entrada:** Una palabra  
**Salida:** "Palíndromo" o "No es palíndromo"

---

### 11. Números Primos en un Rango
Solicita dos números (inicio y fin) y muestra todos los números primos en ese rango.

**Entrada:** Número inicio y número fin  
**Salida:** Números primos en el rango

---

### 12. Calculadora de MCM (Mínimo Común Múltiplo)
El MCM de dos números es el menor número divisible por ambos. Solicita dos números y calcula su MCM.

**Entrada:** Dos números  
**Salida:** Mínimo común múltiplo

---

### 13. Calculadora de MCD (Máximo Común Divisor)
El MCD de dos números es el mayor número que divide a ambos. Usa el algoritmo de Euclides. Solicita dos números y calcula su MCD.

**Entrada:** Dos números  
**Salida:** Máximo común divisor

---

### 14. Conversor de Número a Romano
Convierte un número entero (1-3999) a números romanos. Ejemplo: 1994 → MCMXCIV.

**Entrada:** Un número entero (1-3999)  
**Salida:** Número en romanos

---

### 15. Verificador de Número Perfecto
Un número perfecto es aquel cuya suma de sus divisores propios (excluyendo el mismo) es igual al número. Ejemplo: 6 = 1 + 2 + 3. Solicita un número y verifica si es perfecto.

**Entrada:** Un número  
**Salida:** "Perfecto" o "No es perfecto"

---

### 16. Calculadora de Coeficiente Binomial
El coeficiente binomial C(n,k) = n! / (k! * (n-k)!). Calcula el coeficiente binomial para n y k dados.

**Entrada:** Valores n y k  
**Salida:** Coeficiente binomial

---

### 17. Generador de Números Aleatorios (Pseudoaleatorio)
Simula un generador de números aleatorios simple usando el método lineal congruencial: `siguiente = (a * actual + c) % m`. Usa a=1103515245, c=12345, m=2^31.

**Entrada:** Semilla y cantidad de números  
**Salida:** Secuencia de números pseudoaleatorios

---

### 18. Calculadora de Área de Triángulo con Fórmula de Herón
El área por fórmula de Herón: `√(s*(s-a)*(s-b)*(s-c))` donde s = (a+b+c)/2. Solicita los tres lados y calcula el área (verificando que formen triángulo válido).

**Entrada:** Los tres lados del triángulo  
**Salida:** Área del triángulo

---

### 19. Conversor de Decimal a Binario
Convierte un número decimal a binario sin usar funciones built-in. Ejemplo: 10 → 1010.

**Entrada:** Un número decimal  
**Salida:** Representación binaria

---

### 20. Calculadora de Sumatoria
Calcula la suma de los cubos de los primeros n números: 1³ + 2³ + 3³ + ... + n³. La fórmula es: `(n * (n+1) / 2)²`.

**Entrada:** Un número n  
**Salida:** Sumatoria de cubos
