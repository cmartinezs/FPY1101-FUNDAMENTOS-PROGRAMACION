# 📱 Capítulo 6 — La Era Móvil y la Nube

> **Período:** 2000 — 2015  
> **Pregunta central:** ¿Cómo la computación pasó del escritorio al bolsillo — y del servidor propio a la nube?

---

## El nuevo paradigma: siempre conectado, desde cualquier lugar

El siglo XXI trajo dos transformaciones simultáneas y complementarias:

1. **La computación se volvió móvil**: el smartphone puso una computadora más potente que el ENIAC en el bolsillo de 4.000 millones de personas.
2. **El software se fue a la nube**: en lugar de instalar programas, accedemos a servicios. En lugar de tener servidores propios, alquilamos capacidad de cómputo.

Estas dos transformaciones crearon el mundo digital en el que vivimos hoy.

---

## 2000–2006 — La Web 2.0: el usuario crea contenido

Después del crash de las punto-com, Internet resurgió transformado. La nueva Web no era solo para leer — era para **participar**.

El término **Web 2.0** fue popularizado por **Tim O'Reilly** en 2004, pero el fenómeno ya estaba en marcha.

```
Web 1.0 (1991–2003)         Web 2.0 (2003–2010)
─────────────────────────   ────────────────────────────────
Páginas estáticas           Páginas dinámicas e interactivas
El usuario lee              El usuario crea y comparte
Contenido de empresas       Contenido generado por usuarios
Sin comunidad               Redes sociales, comentarios, wikis
HTML puro                   AJAX, JavaScript, APIs REST
```

### Las plataformas que definieron la Web 2.0

| Año | Plataforma | Por qué importó |
|-----|-----------|----------------|
| 2001 | **Wikipedia** | El conocimiento construido en comunidad — 5 millones de artículos en inglés hoy |
| 2003 | **WordPress** | Cualquier persona puede tener un blog — democratiza la publicación |
| 2003 | **MySpace** | Primera red social masiva |
| 2004 | **Facebook** | Mark Zuckerberg desde su dormitorio en Harvard — hoy 3 billones de usuarios |
| 2005 | **YouTube** | Tres ex-empleados de PayPal — vendido a Google en 2006 por $1.650 millones |
| 2006 | **Twitter** | 140 caracteres — el pulso del mundo en tiempo real |
| 2006 | **AWS** (Amazon Web Services) | Amazon empieza a alquilar su infraestructura |
| 2007 | **Dropbox** | Almacenamiento en la nube para todos |
| 2008 | **GitHub** | Control de versiones social — el hub del software mundial |

### AJAX: la magia detrás de la Web 2.0

**AJAX** (Asynchronous JavaScript and XML) fue la tecnología que hizo posible la Web 2.0. Permitía que una página web **actualizara parte de su contenido sin recargar toda la página** — haciendo las apps web tan fluidas como las apps de escritorio.

```
Sin AJAX:
  Haces clic en "Me gusta" → la página entera se recarga → molestos 3 segundos

Con AJAX:
  Haces clic en "Me gusta" → JavaScript envía petición en background → 
  solo el contador cambia en la página → instantáneo
```

GMail (2004) y Google Maps (2005) fueron las demostraciones más impactantes de AJAX — mostraron que una app web podía ser tan fluida como una aplicación de escritorio.

---

## 2004–2007 — El smartphone: la computadora que cabe en el bolsillo

### La prehistoria del smartphone

Antes del iPhone, existían los **teléfonos inteligentes** pero eran complicados de usar:

| Año | Producto | Significado |
|-----|---------|-------------|
| 2000 | **Nokia 3310** | El teléfono más vendido — 126 millones de unidades |
| 2002 | **BlackBerry 5810** | Email en el teléfono — estándar en los negocios |
| 2003 | **Nokia N-Gage** | Gaming + teléfono — fracaso memorable |
| 2004 | **Motorola Razr** | El teléfono como objeto de deseo — 130 millones vendidos |
| 2005 | **Windows Mobile** | Microsoft intenta el smartphone — interfaz diseñada para dedos con stylus |

---

## 9 de enero de 2007 — El iPhone: el antes y el después

En la MacWorld Conference, **Steve Jobs** subió al escenario y dijo:

> *"Hoy Apple va a reinventar el teléfono."*

Y cumplió.

```
iPhone (primera generación, junio 2007):
  ├── Pantalla táctil capacitiva multi-touch (sin stylus, sin teclado físico)
  ├── CPU: Samsung ARM a 620 MHz
  ├── RAM: 128 MB
  ├── Almacenamiento: 4 GB o 8 GB
  ├── No soportaba aplicaciones de terceros (solo las de Apple)
  ├── No tenía 3G (solo EDGE)
  ├── Precio: $499 con contrato
  └── Se vendieron 1.4 millones en el primer trimestre
```

El iPhone no inventó el smartphone. Inventó el smartphone **usable** — con una pantalla táctil que respondía a los dedos de forma natural, sin stylus, sin menús incomprensibles.

### Lo que el iPhone cambió para siempre

```
Antes del iPhone (enero 2007):     Después del iPhone (enero 2008+):
──────────────────────────────     ─────────────────────────────────────
Teclado físico obligatorio         Pantalla táctil — el teclado aparece cuando lo necesitas
Apps del fabricante solamente      App Store — cualquier developer puede distribuir
WAP (web móvil limitada)           Web completa en el teléfono
Batería: días de autonomía         Batería: un día — pero con internet real
GPS: extra de pago                 GPS integrado
Cámara: básica, sin software       Cámara con software + internet = Instagram
```

La **App Store** abrió el 10 de julio de 2008 con 552 aplicaciones. Hoy tiene más de 1,8 millones. Creó una nueva industria: el **desarrollo de apps móviles**, donde un developer independiente podía ganar millones creando una aplicación.

---

## 2008 — Android: el iPhone para todos

**Google** compró **Android Inc.** en 2005 por $50 millones cuando Android era solo un startup con una idea.

En septiembre de 2008, se lanzó el **HTC Dream** (T-Mobile G1) — el primer teléfono Android. A diferencia del iPhone:

```
Android vs. iPhone (2008):

  iPhone (Apple):
  ├── Sistema operativo cerrado — solo en hardware Apple
  ├── App Store controlada — Apple aprueba cada app
  ├── Precio premium
  └── Un fabricante, un hardware

  Android (Google):
  ├── Sistema operativo abierto (open source, basado en Linux)
  ├── Play Store más permisiva — cualquier developer puede publicar
  ├── Disponible para cualquier fabricante (Samsung, LG, HTC, Motorola...)
  ├── Rango amplio de precios — desde gama baja hasta premium
  └── Personalizable
```

La estrategia de Google fue brillante: al dar Android gratis a los fabricantes, Google aseguró que **sus servicios (búsqueda, Gmail, Maps, YouTube) estuvieran en todos los smartphones del mundo**.

Resultado en 2026: Android tiene aproximadamente el 72% del mercado global de smartphones. iOS tiene el 27%. Juntos, el 99%.

---

## 2006–2010 — Cloud Computing: el servidor que no ves

### El problema que AWS resolvió

En los 2000s, si una startup quería lanzar un servicio web, necesitaba:
1. Comprar servidores físicos (cara, inversión inicial grande)
2. Alquilar espacio en un datacenter
3. Instalar y configurar el sistema operativo
4. Contratar un equipo de operaciones para mantenerlo
5. Esperar semanas o meses para tener todo listo

Si el servicio despegaba y necesitabas más capacidad, tardabas semanas en obtener más servidores. Si el tráfico caía, los servidores ociosos igualmente costaban dinero.

### Amazon Web Services (AWS, 2006)

**Amazon** había construido una infraestructura tecnológica masiva para su propia tienda online — con picos de tráfico enormes en Navidad y valles profundos el resto del año.

**Jeff Bezos** y sus ingenieros tuvieron una idea: **alquilar esa capacidad sobrante a otras empresas**.

En marzo de 2006 lanzaron **S3** (Simple Storage Service — almacenamiento) y en agosto de 2006 **EC2** (Elastic Compute Cloud — servidores virtuales).

```
Propuesta de valor de AWS:
  ✅ Sin inversión inicial — pagas por lo que usas por hora
  ✅ Escala en minutos — si necesitas 100 servidores, los tienes en 5 minutos
  ✅ Sin mantenimiento físico — Amazon se encarga del hardware
  ✅ Disponible globalmente — centros de datos en múltiples continentes
  ✅ Fiabilidad — SLAs del 99,99% de disponibilidad
```

AWS revolucionó cómo se construye software:

| Antes de AWS (pre-2006) | Con AWS (post-2006) |
|------------------------|---------------------|
| Servidor propio → semanas de setup | EC2 → servidor listo en 5 minutos |
| Inversión inicial de $50.000+ | $0 inicial — paga por uso |
| Capacidad fija | Escala automática con el tráfico |
| Un datacenter = un punto de fallo | Múltiples zonas de disponibilidad |
| Equipo de ops para mantener | Foco en el producto, no en el hardware |

Startups que usaron AWS desde el principio:
- **Airbnb** (2008) — desde su primer día
- **Dropbox** (2007) — empezó en S3
- **Netflix** (migró a AWS entre 2008 y 2016) — el mayor cliente de AWS

### El modelo Cloud: IaaS, PaaS, SaaS

```
Modelos de servicio en la nube:

  IaaS (Infrastructure as a Service):
    Alquilas hardware virtual (servidores, storage, red)
    Tú gestionas el SO, middleware y aplicaciones
    Ejemplo: AWS EC2, Google Compute Engine, Azure VMs

  PaaS (Platform as a Service):
    Alquilas una plataforma lista para desplegar tu app
    Tú solo subes el código — la plataforma gestiona el resto
    Ejemplo: Heroku, Google App Engine, AWS Elastic Beanstalk

  SaaS (Software as a Service):
    Usas una aplicación completa vía browser
    No instalas nada — accedes desde cualquier dispositivo
    Ejemplo: Gmail, Salesforce, Slack, Notion, GitHub

                    │ Gestionas tú  │ Gestiona el proveedor │
  On-Premise        │ Todo          │ Nada                  │
  IaaS              │ SO, App       │ Hardware, red         │
  PaaS              │ App, datos    │ SO, middleware        │
  SaaS              │ Datos         │ Todo lo demás         │
```

---

## 2008–2010 — El ecosistema móvil se consolida

```
2008:
  ├── App Store (julio) — 10 millones de descargas en el primer fin de semana
  ├── Android Market (octubre) — luego Google Play
  ├── GitHub lanza — el hub del código open source
  └── Spotify lanza en Europa (streaming legal de música)

2009:
  ├── WhatsApp fundado por ex-empleados de Yahoo! (vendido a Facebook en 2014 por $19B)
  ├── Bitcoin white paper (Satoshi Nakamoto) — criptomonedas
  └── Uber fundado (lanza en 2010)

2010:
  ├── Instagram lanzado (13 empleados, vendido a Facebook en 2012 por $1B)
  ├── iPad — Apple crea la categoría tablet
  ├── Pinterest lanzado
  └── El 5% del tráfico de Internet es móvil (en 2023 es el 58%)
```

---

## 2010–2015 — Big Data, DevOps y el software moderno

### Big Data

Con millones de usuarios generando datos constantemente, las bases de datos relacionales tradicionales empezaron a mostrar sus límites. Nació el movimiento **NoSQL** y el concepto de **Big Data**.

```
Bases de datos relacionales (SQL):
  ✅ Consistencia y transacciones (ACID)
  ✅ Consultas complejas (JOINs)
  ❌ Difíciles de escalar horizontalmente con terabytes de datos

Bases de datos NoSQL:
  ✅ Escalan horizontalmente con facilidad
  ✅ Esquema flexible (documentos, grafos, clave-valor)
  ❌ Sin transacciones complejas (eventualmente consistentes)

Ejemplos NoSQL:
  MongoDB (2009) — documentos JSON
  Redis (2009)   — clave-valor en memoria (ultra-rápido)
  Cassandra (2008, Apache) — columnar, enorme escala
  Neo4j (2007)   — grafos (relaciones complejas)
```

### DevOps

El movimiento **DevOps** nació de una frustración: los equipos de desarrollo (Dev) y de operaciones (Ops) trabajaban en silos, causando despliegues lentos, errores y "funciona en mi máquina" como excusa eterna.

```
Principios DevOps:
  ✅ Integración Continua (CI) — el código se integra y testea automáticamente
  ✅ Entrega Continua (CD) — el software se despliega automáticamente
  ✅ Infraestructura como código — los servidores se configuran con scripts
  ✅ Monitoreo y feedback — observar el sistema en producción en tiempo real

Herramientas DevOps que emergieron en esta época:
  Jenkins (2011)   → automatización de builds y deploys
  Docker (2013)    → contenedores — "funciona en mi máquina" resuelto
  Kubernetes (2014)→ orquestación de contenedores (Google)
  Ansible (2012)   → configuración de servidores como código
```

### Docker (2013): el "funciona en mi máquina" resuelto

**Solomon Hykes** presentó Docker en la PyCon de 2013 en una demo de 5 minutos que cambió la industria.

```
Sin Docker:
  "El servidor de producción tiene CentOS 6, mi máquina tiene Ubuntu 20"
  → La app funciona en desarrollo pero falla en producción

Con Docker:
  La app + todas sus dependencias se empaquetan en un contenedor
  El contenedor corre igual en desarrollo, staging y producción
  → "Construye una vez, corre en cualquier lugar"
```

Docker adoptó y popularizó el concepto de **contenedores Linux** (que existían desde 2006 con LXC) haciéndolos simples de usar.

---

## Resumen del capítulo

| Año | Hito | Legado |
|-----|------|--------|
| 2004 | Facebook | Las redes sociales cambian cómo nos comunicamos |
| 2005 | YouTube | Video democratizado — cualquiera puede publicar |
| 2006 | AWS lanza EC2 y S3 | La nube como infraestructura — cambia cómo se construye software |
| 2007 | iPhone | El smartphone usable — redefine la computación personal |
| 2008 | Android | El smartphone para todos — domina el mercado global |
| 2008 | GitHub | El hub del código — colaboración open source masiva |
| 2008 | App Store + Play Store | Nueva industria: el desarrollo de apps |
| 2010 | Instagram, iPad | La imagen y el contenido visual dominan |
| 2013 | Docker | Contenedores — el despliegue de software se estandariza |
| 2014 | Kubernetes (Google) | Orquestación de contenedores a escala |

---

→ Siguiente capítulo: [Inteligencia Artificial y el presente (1956–hoy)](./07_ia_y_el_futuro.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

