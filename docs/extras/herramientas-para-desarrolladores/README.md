# 🛠️ Herramientas para Desarrolladores

> **Nivel de entrada:** principiante — este documento introduce las herramientas básicas que usarás a lo largo del curso.  
> **Objetivo:** conocer el ecosistema de herramientas esenciales para cualquier programador y saber para qué sirve cada una.  
> **Contexto:** PSeInt, Python, Git y GitHub.

---

## ¿Por qué importa conocer las herramientas?

Un programador no trabaja solo con el lenguaje. El entorno que lo rodea —el editor de código, la terminal, el navegador, las herramientas online— define en gran medida su productividad y la calidad de su trabajo.

> 💡 Conocer la herramienta correcta para cada tarea es tan importante como saber programar.

---

## Mapa de herramientas

```
🛠️ Herramientas para Desarrolladores
│
├── 📝  Editores de código     → VS Code · Thonny · PSeInt
├── 🌐  Navegador               → Chrome · Firefox
├── 🖥️  Terminal               → PowerShell · CMD · Bash
├── 🔧  Git y GitHub            → Git · GitHub · GitHub Desktop
├── ☁️  Utilidades online       → GitHub · replit · Programiz
└── 📚  Documentación           → Python docs · MDN
```

---

## Índice

| # | Categoría | Herramientas |
|---|-----------|-------------|
| 1 | [Editores de código](#1-editores-de-código) | VS Code, Thonny, PSeInt |
| 2 | [Navegador y DevTools](#2-navegador-y-devtools) | Chrome, Firefox |
| 3 | [Terminal y línea de comandos](#3-terminal-y-línea-de-comandos) | PowerShell, CMD, Bash |
| 4 | [Git y GitHub](#4-git-y-github) | Git, GitHub, GitHub Desktop |
| 5 | [Utilidades online](#5-utilidades-online) | GitHub, Replit, Programiz |
| 6 | [Tabla resumen](#6-tabla-resumen) | Todas |

---

## 1. Editores de código

Un **editor de código** es el lugar donde se escribe, ejecuta y depura el código. Elegir uno bueno impacta directamente en la productividad.

---

### Visual Studio Code ⭐ Recomendado

| Dato | Detalle |
|------|---------|
| **Fabricante** | Microsoft |
| **Precio** | Gratuito y open source |
| **Descarga** | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Ideal para** | Python, JavaScript, HTML/CSS, y prácticamente cualquier lenguaje |

**¿Por qué VS Code?**

- Extensiones para Python, PSeInt y muchos lenguajes.
- Terminal integrada.
- Autocompletado inteligente.
- Depurador visual para Python.
- Git integrado.

**Extensiones útiles para este curso**

- `Python` — soporte completo para Python de Microsoft
- `PSeInt` — sintaxis y resaltado para PSeInt
- `Prettier` — formateo automático de código
- `GitLens` — historial de Git enriquecido

---

### Thonny

| Dato | Detalle |
|------|---------|
| **Precio** | Gratis y open source |
| **Descarga** | [thonny.org](https://thonny.org/) |
| **Ideal para** | Principiantes de Python |

IDE diseñado específicamente para principiantes. Incluye un depurador visual muy útil para entender cómo funciona el código paso a paso.

---

### PSeInt

| Dato | Detalle |
|------|---------|
| **Precio** | Gratis |
| **Descarga** | [pseint.sourceforge.net](https://pseint.sourceforge.net/) |
| **Ideal para** | Aprender lógica de programación |

El entorno que ya conoces del inicio del curso. Utilizado para pseudocódigo y diagramas de flujo.

---

## 2. Navegador y DevTools

Las **DevTools** (herramientas de desarrollo del navegador) son útiles para ver cómo funcionan las páginas web y depurar código frontend.

---

### Chrome DevTools / Firefox DevTools

**Cómo abrir:** `F12` o clic derecho → *Inspeccionar*

**Pestañas útiles**

| Pestaña | Uso principal |
|---------|--------------|
| **Console** | Ver errores de JavaScript y ejecutar código |
| **Network** | Ver las peticiones que hace la página |
| **Elements** | Inspeccionar y modificar el HTML/CSS en vivo |

> 💡 Si en el futuro trabajas con desarrollo web, las DevTools serán tu mejor amiga.

---

## 3. Terminal y línea de comandos

La **terminal** (o consola) es una interfaz de texto donde se escriben comandos. Es fundamental para usar Git, ejecutar scripts y muchas tareas de desarrollo.

---

### Terminal en Windows

| Herramienta | Descripción |
|-------------|-------------|
| **PowerShell** | Terminal moderna de Windows (predeterminada en Windows 10/11) |
| **CMD** | Terminal clásica de Windows (menos usada actualmente) |

---

### Terminal en macOS / Linux

| Herramienta | Descripción |
|-------------|-------------|
| **Terminal** | Terminal integrada en macOS |
| **Bash** | Shell más común en Linux |

> 💡 Git funciona desde la terminal. Es importante conocer comandos básicos como `cd`, `ls`, `mkdir`.

---

## 4. Git y GitHub

**Git** es un sistema de control de versiones que permite guardar el historial de cambios de tu código. **GitHub** es una plataforma online donde se almacenan los repositorios.

---

### Git

| Dato | Detalle |
|------|---------|
| **Precio** | Gratis y open source |
| **Descarga** | [git-scm.com](https://git-scm.com/) |
| **Plataformas** | Windows, macOS, Linux |

**Comandos esenciales que verás en el curso**

```bash
# Configurar tu identidad
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Iniciar un repositorio
git init

# Ver el estado de los archivos
git status

# Agregar archivos al staging
git add .
git add nombre_archivo

# Hacer un commit
git commit -m "Mensaje descriptivo"

# Ver el historial
git log

# Crear una rama
git branch nombre_rama

# Cambiar de rama
git checkout nombre_rama

# Fusionar ramas
git merge nombre_rama
```

---

### GitHub

| Dato | Detalle |
|------|---------|
| **Precio** | Gratis (cuenta básica) |
| **Web** | [github.com](https://github.com/) |

**Flujo básico con GitHub**

```
1. Crear un repositorio en GitHub
2. Conectar tu repositorio local con GitHub
   git remote add origin https://github.com/usuario/repo.git
3. Subir tu código (push)
   git push -u origin main
4. Descargar cambios (pull)
   git pull
```

> 💡 Git y GitHub se ven al final del curso. ¡No te preocupes si aún no los has usado!

---

### GitHub Desktop

| Dato | Detalle |
|------|---------|
| **Precio** | Gratis y open source |
| **Descarga** | [desktop.github.com](https://desktop.github.com/) |
| **Ideal para** | Principiantes que prefieren interfaz gráfica |

Interfaz visual para Git. Facilita hacer commits, ramas y push/pull sin usar la terminal.

---

### Comparación de opciones para Git

| Herramienta | Tipo | Ideal para |
|-------------|------|-----------|
| Git (terminal) | Línea de comandos | Control total, servidores |
| GitHub Desktop | GUI simple | Principiantes |
| GitLens (en VS Code) | Extensión de IDE | Usar Git sin salir del editor |

---

## 5. Utilidades online

Herramientas web que se usan durante el desarrollo sin necesidad de instalación.

---

### GitHub

| Dato | Detalle |
|------|---------|
| **URL** | [github.com](https://github.com/) |
| **Uso** | Almacenar repositorios, colaborar en proyectos |

Plataforma para alojar código fuente. Permite versionar proyectos, colaborar con otros y mostrar tu portafolio.

---

### Replit

| Dato | Detalle |
|------|---------|
| **URL** | [replit.com](https://replit.com/) |
| **Uso** | IDE online para Python, JavaScript, etc. |

Entorno de desarrollo en el navegador. Ideal para practicar sin instalar nada en tu equipo.

---

### Programiz

| Dato | Detalle |
|------|---------|
| **URL** | [programiz.com](https://www.programiz.com/) |
| **Uso** | Tutoriales y ejemplos de Python |

Documentación y tutoriales de Python con ejemplos interactivos.

---

### Python Documentation

| Dato | Detalle |
|------|---------|
| **URL** | [docs.python.org](https://docs.python.org/3/) |
| **Uso** | Documentación oficial de Python |

La referencia definitiva para el lenguaje Python. Útil cuando dudas sobre una función o módulo.

---

## 6. Tabla resumen

| Categoría | Herramienta | Precio | Imprescindible |
|-----------|-------------|--------|----------------|
| **Editor de código** | VS Code | Gratis | ⭐⭐⭐ |
| **Editor de código** | Thonny | Gratis | ⭐⭐ |
| **Editor de código** | PSeInt | Gratis | ⭐⭐⭐ |
| **Navegador** | Chrome / Firefox | Incluido | ⭐⭐⭐ |
| **Terminal** | PowerShell / Terminal | Incluido | ⭐⭐⭐ |
| **Control de versiones** | Git | Gratis | ⭐⭐⭐ |
| **Plataforma de código** | GitHub | Gratis | ⭐⭐⭐ |
| **Git GUI** | GitHub Desktop | Gratis | ⭐⭐ (Opcional) |
| **IDE online** | Replit | Gratis | ⭐⭐ |
| **Documentación** | Python docs | Gratis | ⭐⭐⭐ |

**Leyenda:** ⭐⭐⭐ Obligatorio · ⭐⭐ Útil · ⭐ Opcional

---

## Kit mínimo para el curso

Estas son las herramientas que necesitas tener instaladas:

| # | Herramienta | Por qué |
|---|-------------|---------|
| 1 | **PSeInt** | Editor de pseudocódigo del curso |
| 2 | **VS Code** | Editor de código para Python y más |
| 3 | **Python 3** | El lenguaje de programación del curso |
| 4 | **Navegador** | Chrome o Firefox para pruebas web |
| 5 | **Git** | Control de versiones (se usa al final del curso) |
| 6 | **GitHub** | Plataforma para guardar proyectos online |
| 7 | **GitHub Desktop** *(Opcional)* | Interfaz gráfica para Git |

---

*Última actualización: Abril 2026 — FPY1101 Fundamentos de Programación*