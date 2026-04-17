# 🌐 Capítulo 5 — Internet y la Web: El Mundo Conectado

> **Período:** 1969 — 2003  
> **Pregunta central:** ¿Cómo pasamos de computadoras aisladas a un mundo donde toda la información está a un clic de distancia?

---

## Dos inventos distintos que la gente confunde

Antes de empezar: **Internet** y la **Web** son cosas diferentes.

```
Internet  → la infraestructura (cables, routers, protocolos de comunicación)
            Es la "autopista" — existe desde 1969

Web (WWW) → una aplicación que corre sobre Internet
            Son los "vehículos" (páginas web, hiperlinks, HTTP)
            Existe desde 1991

Analógía:
  Internet = red eléctrica nacional
  Web = los electrodomésticos que se enchufan a ella
```

Puedes usar Internet sin usar la Web (email, FTP, SSH). Pero no puedes usar la Web sin Internet.

---

## 1969 — ARPANET: los cuatro nodos que empezaron todo

ARPANET (Advanced Research Projects Agency Network) fue financiada por el Departamento de Defensa de EE.UU. con un objetivo concreto: crear una red de comunicación que pudiera **sobrevivir un ataque nuclear**.

La clave conceptual: **conmutación de paquetes**, propuesta por **Paul Baran** (RAND Corporation, 1962). En lugar de una línea dedicada entre dos puntos, los datos se dividen en paquetes que viajan de forma independiente por distintas rutas y se reensamblan en el destino.

```
Conmutación de paquetes vs. conmutación de circuitos:

  Teléfono (circuito):  A ——————————————————> B
                        Línea dedicada para toda la llamada
                        Si se corta, se corta la comunicación

  ARPANET (paquetes):   A → [paquete 1] → nodo X → nodo Z → B
                        A → [paquete 2] → nodo Y → nodo W → B
                        A → [paquete 3] → nodo X → nodo W → B
                        Los paquetes van por rutas distintas y llegan igual
                        Si cae un nodo, los paquetes buscan otra ruta
```

### 29 de octubre de 1969 — El primer mensaje

El primer mensaje en ARPANET fue enviado desde la **Universidad de California, Los Ángeles (UCLA)** hacia el **Stanford Research Institute**:

- El equipo de la UCLA tecleó: `LOGIN`
- El sistema remoto recibió: `LO` — y se cayó

El primer mensaje transmitido por la red que eventualmente se convertiría en Internet fue `"LO"` — un crash.

ARPANET creció lentamente. En 1971 tenía 15 nodos, en 1972 tenía 37, y en 1973 empezó a conectarse con redes en Europa.

---

## 1972–1983 — Los protocolos: el idioma común de la red

Para que computadoras distintas, de distintos fabricantes, pudieran comunicarse, necesitaban un lenguaje común: **protocolos**.

### Email (1971)

**Ray Tomlinson** inventó el email y eligió el símbolo `@` para separar el nombre de usuario del host. El primer email fue enviado por Tomlinson a sí mismo entre dos computadoras PDP-10 adyacentes.

El email fue tan popular que rápidamente dominó el tráfico de ARPANET — mucho más que la transferencia de archivos que era el objetivo original.

### TCP/IP (1974–1983)

**Vint Cerf** y **Bob Kahn** publicaron en 1974 el paper *"A Protocol for Packet Network Intercommunication"* — describiendo **TCP/IP**.

```
TCP/IP = dos protocolos complementarios:

  IP  (Internet Protocol):
      Direcciona paquetes — cada dispositivo tiene una "dirección IP"
      Define cómo enviar un paquete de A a B pasando por múltiples redes

  TCP (Transmission Control Protocol):
      Garantiza la entrega — si un paquete se pierde, se retransmite
      Reensambla los paquetes en el orden correcto
      Controla la velocidad para no saturar la red
```

El 1 de enero de 1983, ARPANET adoptó TCP/IP como protocolo estándar. Ese día se considera el **nacimiento oficial de Internet** — el día en que todas las redes conectadas a ARPANET empezaron a hablar el mismo idioma.

### DNS (1983)

Con miles de computadoras en la red, recordar direcciones IP numéricas (192.168.1.1) era imposible. **Paul Mockapetris** diseñó el **Sistema de Nombres de Dominio (DNS)** — un directorio distribuido que traduce nombres legibles (`google.com`) a direcciones IP.

```
DNS en acción:
  Tú escribes: www.google.com
  Tu computador pregunta al DNS: ¿cuál es la IP de google.com?
  DNS responde: 142.250.80.46
  Tu computador conecta con esa IP

  Es como una guía telefónica automática y distribuida para Internet.
```

---

## 1989–1991 — Tim Berners-Lee y la World Wide Web

En marzo de 1989, **Tim Berners-Lee**, investigador del **CERN** (el laboratorio de física de partículas más grande del mundo) en Suiza, presentó una propuesta a su jefe titulada *"Information Management: A Proposal"*.

Su jefe escribió al margen: *"Vago pero emocionante"*.

Ese documento fue la propuesta de la **World Wide Web**.

### El problema que Berners-Lee quería resolver

En el CERN trabajaban miles de investigadores de todo el mundo. Cuando alguien se iba, su conocimiento se perdía — los documentos no estaban organizados ni eran fácilmente accesibles para otros.

Berners-Lee propuso un sistema de **hipertexto** — documentos que se pueden enlazar entre sí con clics — distribuido en servidores de Internet.

### Los tres inventos de Berners-Lee (1991)

```
1. HTML (HyperText Markup Language)
   El lenguaje para escribir páginas web
   <h1>Título</h1>
   <p>Párrafo con un <a href="otra-pagina.html">enlace</a></p>

2. HTTP (HyperText Transfer Protocol)
   El protocolo para transferir páginas web entre servidor y navegador
   GET /index.html HTTP/1.0  →  el cliente pide la página
   200 OK + contenido HTML   ←  el servidor la entrega

3. URL (Uniform Resource Locator)
   La "dirección" de cualquier recurso en la Web
   https://info.cern.ch/hypertext/WWW/TheProject.html
```

El **6 de agosto de 1991**, Berners-Lee publicó la primera página web de la historia en `http://info.cern.ch`. Describía qué era la World Wide Web. Esa página (restaurada) sigue accesible hoy.

Berners-Lee no patentó ninguna de estas tecnologías. Las donó libremente al mundo. Esta decisión es probablemente el acto de generosidad tecnológica más impactante de la historia.

> 💬 *"Si hubiera patentado la Web, hoy sería billonario pero habría destruido el mayor proyecto colaborativo de la humanidad."* — Tim Berners-Lee

---

## 1993 — Mosaic: la Web se vuelve visual

La Web de 1991-1992 era solo texto. El primer navegador con imágenes integradas en la página fue **Mosaic**, creado por **Marc Andreessen** y **Eric Bina** en el NCSA (National Center for Supercomputing Applications).

```
Mosaic (1993):
  ✅ Mostraba imágenes dentro del texto (antes las imágenes se abrían aparte)
  ✅ Interfaz gráfica con botones de navegación
  ✅ Disponible para Windows, Mac y Unix
  ✅ Gratis
  ➡  200.000 descargas en su primer año
  ➡  El número de servidores web creció de 50 a 500 en 1993
```

Mosaic convirtió la Web de herramienta técnica en medio de comunicación popular.

Marc Andreessen fundó **Netscape Communications** en 1994, creando el **Netscape Navigator** — el navegador dominante hasta que Internet Explorer lo aplastó en la "Guerra de Navegadores" de finales de los 90s.

---

## 1994–2000 — El Big Bang del comercio en internet

Los años 1994-2000 fueron la explosión de Internet como plataforma comercial y cultural.

### Las empresas fundacionales

| Año | Empresa | Fundador | Historia |
|-----|---------|----------|---------|
| 1994 | **Amazon** | Jeff Bezos | Empezó vendiendo libros online desde un garaje en Bellevue, Washington |
| 1994 | **Yahoo!** | Jerry Yang y David Filo | El primer directorio web popular — la guía de Internet |
| 1994 | **Netscape** | Marc Andreessen | El navegador que masificó la Web |
| 1995 | **eBay** | Pierre Omidyar | El primer gran marketplace de subasta online |
| 1995 | **Amazon lanza su tienda** | — | $20.000 de ventas en la primera semana |
| 1996 | **Hotmail** | Sabeer Bhatia, Jack Smith | Email gratuito en el navegador — vendido a Microsoft por $400M |
| 1998 | **Google** | Larry Page, Sergey Brin | Empezaron en el garage de Susan Wojcicki en Menlo Park |
| 1999 | **Napster** | Shawn Fanning | P2P de música — cambió la industria musical para siempre |

### 1995 — El año de los lenguajes para la Web

1995 fue el año más prolífico en la creación de lenguajes de programación web:

| Lenguaje | Creador | Empresa | Propósito |
|----------|---------|---------|-----------|
| **Java** | James Gosling | Sun Microsystems | "Write once, run anywhere" — apps multiplataforma |
| **JavaScript** | Brendan Eich | Netscape | Programar el navegador — creado en ¡10 días! |
| **PHP** | Rasmus Lerdorf | — | Páginas web dinámicas — powers WordPress hoy |
| **Ruby** | Yukihiro Matsumoto | — | Productividad del programador primero |

> 📖 **Historia de JavaScript**: Brendan Eich creó JavaScript en 10 días en 1995 para Netscape. El nombre fue un truco de marketing — Java era popular y Netscape quería el reconocimiento del nombre. Java y JavaScript no tienen relación técnica real. La prisa de su creación explica algunas de sus "particularidades" que siguen causando confusión hoy.

### La burbuja de las punto-com (1995–2001)

El acceso masivo a Internet generó una euforia inversora sin precedentes. Cualquier empresa que añadiera ".com" a su nombre podía salir a bolsa y multiplicar su valor en semanas, sin importar si tenía clientes, ingresos o un plan de negocio.

```
Ejemplos del exceso de la burbuja punto-com:

  Pets.com: gastó $11.8M en publicidad antes de tener ventas relevantes
  Webvan: entrega de comida online — levantó $800M y quebró en 18 meses
  Boo.com: tienda de ropa — gastó $135M en 18 meses, luego liquidó todo
  eToys: alcanzó una valuación de $7.8B — más que Toys R Us — antes de ir a quiebra

El NASDAQ llegó a 5.048 puntos en marzo de 2000.
En octubre de 2002 había caído a 1.114 — una pérdida del 78%.
```

### Los sobrevivientes

Las empresas que sobrevivieron al crash de 2001 son hoy los gigantes de Internet:
- **Amazon** — que usó la crisis para optimizar, crecer y reinventarse
- **Google** — que salió a bolsa en 2004 con ingresos reales
- **eBay** — marketplace con modelo probado

El crash enseñó algo importante: **el negocio real importa**. Una tecnología no vale sin un modelo de monetización.

---

## 1991–2003 — La Web crece: de texto a multimedia

```
Evolución de la Web:

  Web 1.0 (1991–2003):
    ├── Páginas estáticas — solo para leer, no para interactuar
    ├── HTML puro, sin estilos CSS
    ├── Sin bases de datos detrás (archivos HTML estáticos)
    ├── El usuario es receptor, no creador
    └── Velocidad: modems de 14.4 kbps a 56 kbps

  Hitos:
    1994 → Netscape Navigator
    1995 → JavaScript (animaciones en el navegador)
    1995 → CSS 1.0 (estilos separados del contenido)
    1996 → Flash (animaciones y multimedia interactiva)
    1998 → Google (búsqueda inteligente)
    2001 → Wikipedia (el conocimiento colaborativo)
    2003 → MySpace (primer gran red social)
```

---

## El protocolo HTTP: la base de tu API

Aquí es donde la historia conecta directamente con el curso:

**HTTP** (HyperText Transfer Protocol), inventado por Berners-Lee en 1991, es el protocolo de comunicación que usa tu API REST con Spring Boot.

```
GET /api/v1/tickets HTTP/1.1
Host: localhost:8080

↓ Tu @GetMapping en Spring Boot responde:

HTTP/1.1 200 OK
Content-Type: application/json

[{"id": 1, "title": "Error en login"}, ...]
```

HTTP evolucionó:
- **HTTP/1.0** (1996) — una conexión por petición
- **HTTP/1.1** (1997) — conexiones persistentes, caché, hosts virtuales
- **HTTP/2** (2015) — multiplexación, compresión de headers, más rápido
- **HTTP/3** (2022) — sobre QUIC (UDP), aún más rápido

---

## Resumen del capítulo

| Año | Hito | Legado |
|-----|------|--------|
| 1969 | ARPANET — 4 nodos | La semilla de Internet |
| 1971 | Email (Ray Tomlinson) | El primer "killer app" de Internet |
| 1974 | TCP/IP (Cerf y Kahn) | El idioma universal de Internet |
| 1983 | DNS | Nombres legibles para IPs — google.com en lugar de 142.250.80.46 |
| 1989 | Propuesta de la WWW (Berners-Lee) | La idea que conectó el mundo |
| 1991 | Primera página web | HTML + HTTP + URL — el trío fundacional |
| 1993 | Mosaic | La Web se vuelve visual y accesible |
| 1994 | Amazon, Yahoo!, Netscape | El comercio entra a Internet |
| 1995 | Java, JavaScript, PHP | Los lenguajes de la Web |
| 1998 | Google | El conocimiento organizado |
| 2000 | Crash punto-com | El mercado corrige — sobreviven los mejores |

---

→ Siguiente capítulo: [La era móvil y la nube (2000–2015)](./06_era_movil_y_cloud.md)

*Última actualización: Marzo 2026 — DSY1103 Fullstack I Backend*

