# 🐙 Git y GitHub

## ¿Qué es Git?
Git es un **sistema de control de versiones distribuido** que permite registrar el historial de cambios de un proyecto, colaborar con otros desarrolladores y mantener múltiples versiones del código de forma organizada.

## ¿Qué es GitHub?
GitHub es una **plataforma en la nube** que aloja repositorios Git y ofrece herramientas para la colaboración: pull requests, issues, wikis, GitHub Actions (CI/CD), entre otros.

---

## Conceptos clave

| Concepto | Descripción |
|---|---|
| `repository` | Proyecto versionado con Git |
| `commit` | Instantánea de cambios registrada en el historial |
| `branch` | Rama de desarrollo independiente |
| `merge` | Integración de cambios entre ramas |
| `pull request` | Solicitud de revisión e integración de cambios (GitHub) |
| `clone` | Copia local de un repositorio remoto |
| `push` | Subir cambios locales al repositorio remoto |
| `pull` | Obtener y fusionar cambios del repositorio remoto |
| `.gitignore` | Archivo que indica a Git qué archivos ignorar |
| `HEAD` | Puntero al commit actual en la rama activa |
| `staging area` | Zona intermedia antes de confirmar un commit |
| `remote` | Referencia al repositorio remoto (ej. `origin`) |
| `tag` | Etiqueta fija a un commit, usada para versiones |

---

## Flujo de trabajo básico

```bash
# 1. Inicializar un repositorio
git init

# 2. Clonar un repositorio existente
git clone https://github.com/usuario/repositorio.git

# 3. Ver el estado de los archivos
git status

# 4. Agregar cambios al área de staging
git add .
git add src/archivo.java   # agregar un archivo específico

# 5. Crear un commit
git commit -m "feat: agrega endpoint de creación de tickets"

# 6. Subir cambios al repositorio remoto
git push origin main

# 7. Crear y cambiar a una nueva rama
git checkout -b feature/nueva-funcionalidad

# 8. Obtener cambios del repositorio remoto
git pull origin main

# 9. Ver el historial de commits
git log --oneline --graph
```

---

## Trabajo con ramas (branching)

Las ramas permiten desarrollar funcionalidades de forma aislada sin afectar la rama principal.

```bash
# Crear una nueva rama
git branch feature/login

# Cambiar a una rama existente
git checkout feature/login

# Crear y cambiar en un solo paso (forma moderna)
git switch -c feature/login

# Listar ramas
git branch -a

# Fusionar una rama en la rama actual
git merge feature/login

# Eliminar una rama local
git branch -d feature/login

# Eliminar una rama remota
git push origin --delete feature/login
```

### Estrategia de ramas recomendada (Git Flow simplificado)

```
main          → código estable y desplegado
develop       → integración de funcionalidades
feature/*     → nuevas funcionalidades
fix/*         → corrección de errores
```

---

## Resolución de conflictos

Un **conflicto** ocurre cuando dos ramas modifican las mismas líneas de un archivo.

```bash
# Git marcará los conflictos en el archivo:
<<<<<<< HEAD
    código de tu rama actual
=======
    código de la otra rama
>>>>>>> feature/login

# Pasos para resolver:
# 1. Editar el archivo manualmente y elegir qué código conservar
# 2. Marcar como resuelto
git add archivo-con-conflicto.java
# 3. Completar el merge
git commit
```

---

## Comandos útiles adicionales

```bash
# Ver diferencias entre archivos
git diff

# Deshacer cambios en un archivo (antes del staging)
git checkout -- archivo.java

# Quitar un archivo del staging
git reset HEAD archivo.java

# Modificar el último commit (solo si no fue pusheado)
git commit --amend -m "nuevo mensaje"

# Guardar cambios temporalmente sin commitear
git stash
git stash pop     # recuperar los cambios guardados

# Ver qué cambió en un commit específico
git show <hash-del-commit>

# Revertir un commit (sin borrar el historial)
git revert <hash-del-commit>
```

---

## Convención de commits (Conventional Commits)

Se recomienda usar el estándar [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial legible y compatible con herramientas de automatización (changelogs, versionado semántico, etc.).

### Formato

```
<tipo>(alcance opcional): descripción corta

[cuerpo opcional]

[footer opcional]
```

### Tipos comunes

| Tipo | Cuándo usarlo |
|------|--------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de un error |
| `docs` | Cambios en documentación |
| `refactor` | Refactorización sin cambio funcional |
| `test` | Agrega o modifica pruebas |
| `chore` | Tareas de mantenimiento, dependencias |
| `style` | Cambios de formato (espacios, punto y coma) |
| `perf` | Mejoras de rendimiento |
| `ci` | Cambios en pipelines de CI/CD |

### Ejemplos

```bash
git commit -m "feat(tickets): agrega endpoint para cerrar tickets"
git commit -m "fix(auth): corrige validación de token expirado"
git commit -m "docs: actualiza README con instrucciones de instalación"
git commit -m "refactor(service): extrae lógica de negocio al servicio"
```

---

## GitHub: funcionalidades clave

### Pull Request (PR)
Un PR es una solicitud para fusionar cambios de una rama a otra. Permite revisión de código antes de integrar.

**Buenas prácticas:**
- Títulos claros usando Conventional Commits
- Descripción del cambio y por qué se hace
- Al menos un revisor asignado
- PRs pequeños y enfocados en un solo tema

### Issues
Los issues permiten registrar tareas, bugs y mejoras. Se pueden vincular a PRs con palabras clave:

```
Closes #42
Fixes #15
Resolves #8
```

### GitHub Actions (CI/CD básico)
Permite automatizar tareas como compilar, testear y desplegar al hacer push o abrir un PR.

```yaml
# .github/workflows/build.yml
name: Build Java
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
      - run: ./mvnw test
```

---

## Archivo `.gitignore`

El `.gitignore` evita que archivos innecesarios o sensibles sean rastreados por Git.

```gitignore
# Compilados Java
target/
*.class

# IDE
.idea/
*.iml
.vscode/

# Variables de entorno
.env
*.env

# Logs
*.log
logs/
```

> 💡 Puedes generar `.gitignore` personalizados en [gitignore.io](https://www.toptal.com/developers/gitignore)

---

## ⚠️ Errores comunes (especialmente en laboratorio)

En equipos compartidos como los del laboratorio, es muy frecuente encontrarse con errores al usar Git y GitHub. Aquí están los más comunes y cómo resolverlos.

---

### ❌ `Please tell me who you are` / El push usa la cuenta de otro

**Síntoma:** Al hacer `git commit` o `git push`, Git dice que no sabe quién eres, o peor, usa el usuario y correo de otro estudiante que usó el equipo antes.

**Causa:** Git guarda la identidad del usuario de forma global en el equipo. En un PC compartido, esa configuración puede ser de otra persona.

**Solución:**
```bash
# Ver qué usuario está configurado actualmente
git config --global user.name
git config --global user.email

# Configurar TU identidad (hacerlo siempre al inicio del laboratorio)
git config --global user.name "Tu Nombre"
git config --global user.email "tu.correo@ejemplo.com"
```

> 💡 **Buena práctica en laboratorio:** siempre ejecuta `git config --global user.name` al comenzar para verificar que eres tú.

---

### ❌ `remote: Permission to usuario/repo.git denied`

**Síntoma:** Al hacer `git push`, GitHub rechaza la operación diciendo que no tienes permiso, aunque el repositorio es tuyo.

**Causa:** El equipo tiene guardadas las credenciales de otro usuario (token o contraseña). Git las usa automáticamente sin pedirte las tuyas.

**Solución:**
```bash
# En Linux/Mac: borrar las credenciales guardadas del sistema
git config --global --unset credential.helper

# O bien, forzar que Git te pida credenciales nuevamente
git config --global credential.helper ""
```

Si el repositorio usa HTTPS, también puedes cambiar el remote para incluir tu usuario:
```bash
git remote set-url origin https://TU_USUARIO@github.com/TU_USUARIO/tu-repo.git
```

> 💡 Lo más recomendable es usar **tokens de acceso personal (PAT)** de GitHub en lugar de contraseña. Se generan en: *GitHub → Settings → Developer settings → Personal access tokens*.

---

### ❌ `fatal: not a git repository`

**Síntoma:**
```
fatal: not a git repository (or any of the parent directories): .git
```

**Causa:** Estás ejecutando comandos de Git en una carpeta que no es un repositorio Git (no tiene la carpeta `.git`).

**Solución:**
```bash
# Verificar en qué carpeta estás
pwd

# Ir a la carpeta correcta de tu proyecto
cd /ruta/a/tu/proyecto

# Verificar que tiene la carpeta .git
ls -la

# Si es un proyecto nuevo y aún no tiene git, inicializarlo
git init
```

---

### ❌ `error: src refspec main does not match any`

**Síntoma:** Al hacer `git push origin main`, Git dice que la rama `main` no existe.

**Causa:** Nunca se hizo un primer `commit`, o la rama local tiene otro nombre (por ejemplo `master`).

**Solución:**
```bash
# Ver qué ramas existen localmente
git branch

# Si no aparece ninguna, aún no hay commits. Crear el primero:
git add .
git commit -m "feat: primer commit"

# Si la rama se llama 'master' en vez de 'main', renombrarla:
git branch -M main

# Luego hacer el push
git push -u origin main
```

---

### ❌ `Updates were rejected because the remote contains work`

**Síntoma:**
```
! [rejected] main -> main (fetch first)
error: failed to push some refs to 'https://github.com/...'
hint: Updates were rejected because the remote contains work that you do not have locally.
```

**Causa:** El repositorio remoto tiene commits que tú no tienes localmente. Puede pasar si trabajaste desde otro equipo o si GitHub tiene cambios (como el README creado al crear el repo).

**Solución:**
```bash
# Traer los cambios remotos primero y luego hacer push
git pull origin main --rebase

# Si hay conflictos, resolverlos y luego:
git push origin main
```

> ⚠️ No usar `git push --force` a menos que sepas exactamente lo que haces. Puedes borrar el trabajo de otros.

---

### ❌ `CONFLICT (content): Merge conflict in archivo.java`

**Síntoma:** Al hacer `git pull` o `git merge`, Git indica que hay conflictos y no puede fusionar automáticamente.

**Causa:** El mismo archivo fue modificado en dos lugares distintos (dos ramas, dos equipos, etc.).

**Solución:**
```bash
# 1. Ver los archivos con conflicto
git status

# 2. Abrir el archivo y buscar las marcas de conflicto:
# <<<<<<< HEAD
#     tu código
# =======
#     código del otro lado
# >>>>>>> origin/main

# 3. Editar el archivo manualmente, dejando solo el código correcto
# 4. Marcar como resuelto y continuar
git add archivo-con-conflicto.java
git commit
```

---

### ❌ `git` no se reconoce como comando / `command not found: git`

**Síntoma:** Al escribir cualquier comando de Git, la terminal responde `command not found`.

**Causa:** Git no está instalado en el equipo, o no está en el PATH del sistema.

**Solución:**
```bash
# Verificar si Git está instalado
git --version

# En Ubuntu/Debian (si no está instalado)
sudo apt install git

# Verificar que está en el PATH
which git
```

---

### ❌ `Your branch is ahead of 'origin/main' by N commits`

**Síntoma:** Git te dice que tu rama local está adelantada al remoto pero no hiciste `push`.

**Causa:** Hiciste commits localmente pero no los subiste a GitHub.

**Solución:**
```bash
# Simplemente hacer push
git push origin main
```

---

### ❌ `detached HEAD state`

**Síntoma:**
```
HEAD detached at a1b2c3d
```

**Causa:** Hiciste checkout a un commit directamente (no a una rama). En este estado, los commits que hagas no pertenecen a ninguna rama y pueden perderse.

**Solución:**
```bash
# Volver a la rama principal
git checkout main
# o
git switch main

# Si ya hiciste commits en este estado y no quieres perderlos, crear una rama primero:
git switch -c mi-rama-rescate
```

---

### ✅ Checklist para el laboratorio

Antes de comenzar a trabajar en un equipo compartido, ejecuta estos pasos:

```bash
# 1. Verificar identidad
git config --global user.name
git config --global user.email

# 2. Si no eres tú, configurar tu identidad
git config --global user.name "Tu Nombre"
git config --global user.email "tu.correo@ejemplo.com"

# 3. Clonar tu repositorio (si no está en el equipo)
git clone https://github.com/TU_USUARIO/tu-repo.git
cd tu-repo

# 4. Verificar en qué rama estás
git branch

# 5. Traer los últimos cambios
git pull origin main
```

---

## Recursos recomendados

| Recurso | Tipo | Enlace |
|---------|------|--------|
| Pro Git Book | 📖 Libro (gratis) | [git-scm.com/book/es](https://git-scm.com/book/es/v2) |
| Learn Git Branching | 🎮 Interactivo | [learngitbranching.js.org](https://learngitbranching.js.org/?locale=es_ES) |
| GitHub Docs | 📄 Documentación | [docs.github.com/es](https://docs.github.com/es) |
| Conventional Commits | 📄 Estándar | [conventionalcommits.org](https://www.conventionalcommits.org/es/v1.0.0/) |
| gitignore.io | 🛠️ Herramienta | [toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore) |

---

*[← Volver a Extras](../README.md)*

