# Soluciones de referencia

Estas soluciones muestran usos basicos de listas, diccionarios y listas de diccionarios.

## Ejercicios guiados

### 1. Lista de companeros

```python
companeros = ["Ana", "Luis", "Maria", "Pedro"]

for companero in companeros:
    print(companero)
```

### 2. Suma de 3 numeros

```python
numeros = []

for i in range(1, 4):
    numero = float(input(f"Numero {i}: "))
    numeros.append(numero)

print("Suma:", sum(numeros))
```

### 3. Diccionario personal

```python
persona = {
    "nombre": "Carlos",
    "edad": 21,
    "carrera": "Ingenieria"
}

print(persona["nombre"])
print(persona["edad"])
print(persona["carrera"])
```

### 4. Recorrer diccionario con items()

```python
datos = {"ciudad": "Santiago", "pais": "Chile", "poblacion": 8000000}

for clave, valor in datos.items():
    print(clave, ":", valor)
```

### 5. Buscar numero en lista

```python
numeros = [10, 20, 30, 40, 50]
buscado = int(input("Numero a buscar: "))

if buscado in numeros:
    print(buscado, "esta en la lista")
else:
    print(buscado, "no esta en la lista")
```

## Ejercicio integrador

```python
contactos = []

while True:
    print("=== AGENDA DE CONTACTOS ===")
    print("1. Agregar contacto")
    print("2. Ver todos los contactos")
    print("3. Buscar contacto")
    print("4. Eliminar contacto")
    print("5. Salir")

    opcion = input("Opcion: ")

    if opcion == "1":
        nombre = input("Nombre: ").strip()
        while nombre == "":
            nombre = input("El nombre no puede estar vacio. Nombre: ").strip()

        telefono = input("Telefono: ").strip()
        while telefono == "":
            telefono = input("El telefono no puede estar vacio. Telefono: ").strip()

        email = input("Email: ").strip()
        while "@" not in email:
            email = input("El email debe contener '@'. Email: ").strip()

        contactos.append({"nombre": nombre, "telefono": telefono, "email": email})
        print("Contacto agregado.")

    elif opcion == "2":
        if len(contactos) == 0:
            print("No hay contactos")
        else:
            for i in range(len(contactos)):
                c = contactos[i]
                print(f"{i + 1}. {c['nombre']} | {c['telefono']} | {c['email']}")

    elif opcion == "3":
        nombre_buscado = input("Nombre a buscar: ").strip()
        encontrado = False

        for contacto in contactos:
            if contacto["nombre"].lower() == nombre_buscado.lower():
                print("Nombre:", contacto["nombre"])
                print("Telefono:", contacto["telefono"])
                print("Email:", contacto["email"])
                encontrado = True

        if not encontrado:
            print("No encontrado")

    elif opcion == "4":
        nombre_eliminar = input("Nombre a eliminar: ").strip()
        eliminado = False

        for contacto in contactos:
            if contacto["nombre"].lower() == nombre_eliminar.lower():
                contactos.remove(contacto)
                print("Contacto eliminado.")
                eliminado = True
                break

        if not eliminado:
            print("No se encontro el contacto")

    elif opcion == "5":
        print("Chao!")
        break

    else:
        print("Opcion invalida")
```
