# Auditoría de diseño: berkshirehathaway.com

| | |
|---|---|
| URL | https://www.berkshirehathaway.com |
| Páginas revisadas | `/` (portada), `/letters/letters.html` (cartas de Buffett a los accionistas), `/news/2026news.html` (notas de prensa 2026) |
| Fecha | 2026-11-23 |
| Viewports | 375 px, 768 px, 1440 px. A 375 px hay dos capturas: ventana redimensionada (`*-375.png`) y emulación móvil real con `isMobile` (`*-375-mobile.png`), porque sin meta viewport los dos casos se comportan distinto |
| Herramientas | Capturas con Playwright (movimiento reducido), script de comprobaciones y script "Outdated, measurable", pasada de foco con Tab, HTML fuente (curl y DOM), Lighthouse 13.6.0 (móvil) |
| Herramientas no disponibles | Ninguna. El enlace a la SEC devolvió 403 a una petición automatizada, probablemente por la política de bots de la SEC, así que no se ha podido comprobar si funciona |

No hay banner de cookies ni formularios. Solo se han hecho lecturas: no se ha pulsado ni enviado nada.

## Resumen

1. **En el móvil la web no se puede leer.** No hay `<meta name="viewport">`, así que el teléfono pinta las tres páginas a 980 px y las reduce al 38 %. El texto queda en unos 6 px. Se arregla con una línea, porque el maquetado ya se adapta a 375 px.
2. **Accesibilidad básica.** Los enlaces rojos de las cartas tienen un contraste de 4,00:1, todos los enlaces miden 17 px de alto, no hay `lang`, ni `h1`, ni `<main>`, y hay 48 viñetas GIF sin `alt`. Lighthouse da 57 en accesibilidad a la página de cartas.
3. **Limpieza técnica sin tocar la estética.** La portada y las noticias se renderizan en *quirks mode* (el script de Analytics va antes del DOCTYPE), se carga dos veces Google Analytics (uno es un ID Universal Analytics `UA-`) con 142–149 KiB de JS sin usar, y falta el favicon, que da un 404 en cada página.

**Qué conservar.** La web pasa la prueba de plantilla sin discusión: no se puede confundir con ninguna otra, y su austeridad es una decisión de marca coherente con la compañía. Es muy rápida (LCP 0,8–1,0 s, CLS 0, rendimiento 97–99), no tiene animaciones ni adornos, el foco del teclado se ve (el `outline` por defecto no se ha quitado, ver `home-focus-1440.png`), no hay desbordamiento horizontal a ningún ancho y las fechas de "Updated" junto a cada sección son útiles. Ninguna propuesta de este informe pide quitar esa identidad.

## Problemas críticos

### C1. Sin meta viewport: en el móvil el texto se ve a unos 6 px

- **Qué:** ninguna de las tres páginas declara `<meta name="viewport">`. Con emulación móvil real el ancho de maquetado es de 981 px y el navegador lo escala a 0,383. El cuerpo, de 16 px CSS, se ve a unos 6,1 px, y los enlaces a unos 6 px de alto.
- **Dónde:** `home-375-mobile.png`, `letters-375-mobile.png`, `news-375-mobile.png`. Falta en `<head>` de las tres páginas.
- **Por qué importa:** cualquier visita desde el teléfono (accionistas, periodistas, inversores que buscan la carta anual o una nota de resultados) tiene que hacer zoom y moverse de lado para leer o pulsar algo. Los enlaces quedan imposibles de acertar con el dedo.
- **Cómo arreglarlo:** añadir `<meta name="viewport" content="width=device-width, initial-scale=1">` en las tres plantillas. Las capturas `home-375.png` y `news-375.png` (ventana de 375 px sin escalar) muestran que el contenido ya se adapta bien, así que el cambio casi no necesita CSS. Revisar después la tabla de dos columnas de la portada (ver P1).
- **Evidencia:** medido (`visualViewport.scale` = 0,383, `innerWidth` = 981; Lighthouse `viewport-insight` 0,5 en las tres páginas; `viewport: null` en el script de comprobaciones)

### C2. Los enlaces a las cartas no llegan al contraste mínimo

- **Qué:** los 48 enlaces de año y "this link" usan `#FF0000` sobre blanco, con un contraste de 4,00:1 en texto de 16 px. El mínimo es 4,5:1. Son la acción principal de la página.
- **Dónde:** `letters-1440.png`, selector `tr > td > p > a` (de `1977.html` a `2024.pdf`)
- **Por qué importa:** es la página más consultada del sitio y su único contenido son esos enlaces. A quien tenga baja visión o lea en una pantalla con reflejos le costará distinguirlos.
- **Cómo arreglarlo:** oscurecer el rojo a `#C00000` (unos 6,5:1 según la fórmula WCAG). Así se mantiene la intención cromática y se cumple AA.
- **Evidencia:** medido (Lighthouse `color-contrast` falla; accesibilidad 57; script propio: 49 elementos a 4,00:1)

## Problemas menores

### M1. Enlaces de 17 px de alto: objetivos táctiles demasiado pequeños

- **Qué:** los 49 enlaces de la página de cartas miden 32 × 17 px. En noticias, las fechas enlazadas miden 17 px de alto, y en la portada los enlaces "Legal Disclaimer" y "WWW.GEICO.COM" miden 15 y 11 px.
- **Dónde:** `letters-375.png` (`tr > td > p > a`), `news-768.png` (`menu > dl > dt > a`), `home-375.png` (pie)
- **Por qué importa:** cuando el viewport esté arreglado (C1), en el móvil seguirá siendo fácil pulsar el año de al lado, porque están apilados sin separación.
- **Cómo arreglarlo:** `letters a, dt a { display:inline-block; padding:12px 0; }` o un `line-height` de 2,5–2,75 en esas listas, para llegar a 44 px de alto a 375 px.
- **Evidencia:** medido (Lighthouse `target-size` falla en cartas y noticias; script: 49 de 49 objetivos por debajo del mínimo en cartas)

### M2. Portada y noticias en *quirks mode*, con un charset que no existe

- **Qué:** en la portada, el fragmento de Google Analytics va **antes** del `<!DOCTYPE>`, y eso pone el documento en modo de compatibilidad (`document.compatMode = "BackCompat"`). Noticias usa un DOCTYPE HTML 4.0 Transitional sin URL, que también activa ese modo, y la página de cartas no tiene DOCTYPE. La portada y noticias declaran `charset=unicode`, que no es un valor válido, y el servidor envía `Content-Type: text/html` sin charset.
- **Dónde:** primeras líneas de `home-raw.html` y `news-raw.html`; `letters-raw.html` (sin DOCTYPE)
- **Por qué importa:** en *quirks mode* los navegadores aplican reglas antiguas de tamaño de caja, de herencia de fuente en tablas y de altura de líneas. Por eso cualquier CSS que se añada (C1, M1) puede comportarse de forma imprevisible. Con un charset inválido, las comillas tipográficas y los acentos dependen de lo que adivine el navegador.
- **Cómo arreglarlo:** poner `<!DOCTYPE html>` como primera línea de cada página, mover el `<script>` de Analytics dentro de `<head>`, declarar `<meta charset="windows-1252">` (o convertir a UTF-8) y añadir `charset` a la cabecera `Content-Type` del servidor.
- **Evidencia:** medido (Lighthouse `doctype` falla en las tres; `compatMode: BackCompat` en las tres; cabecera HTTP)

### M3. Falta el idioma del documento

- **Qué:** `<html>` no tiene `lang` en ninguna de las tres páginas.
- **Dónde:** `<html>` de las tres páginas
- **Por qué importa:** los lectores de pantalla pueden elegir mal la voz y la pronunciación, y los traductores automáticos tienen que adivinar el idioma.
- **Cómo arreglarlo:** `<html lang="en">`.
- **Evidencia:** medido (Lighthouse `html-has-lang` falla en las tres)

### M4. Sin estructura: ni `h1` ni landmarks

- **Qué:** ninguna página tiene `h1`. "SHAREHOLDER LETTERS" es un párrafo en negrita, y noticias empieza en `h2`. No hay `<main>`, `<nav>`, `<header>` ni `<footer>`. En la portada, una `<dl>` envuelve párrafos en lugar de términos y definiciones.
- **Dónde:** las tres páginas. En `home-raw.html`, `<dl><p>…Legal Disclaimer`
- **Por qué importa:** quien navega con lector de pantalla no puede saltar al contenido ni oír de qué trata la página. Los buscadores y los agentes también reciben menos señales (la portada saca 50 en la categoría *agentic browsing* de Lighthouse por el árbol de accesibilidad).
- **Cómo arreglarlo:** envolver el nombre de la empresa o el título de la sección en `<h1>`, el contenido en `<main>` y el pie en `<footer>`, y cambiar la `<dl>` del pie por un `<p>`. No cambia nada visual.
- **Evidencia:** medido (Lighthouse `landmark-one-main` falla en las tres y `definition-list` en la portada; `h1Count: 0`)

### M5. 48 viñetas GIF sin `alt` en la página de cartas

- **Qué:** cada año lleva delante un `bullet.gif` de 14 × 14 px sin atributo `alt`. Es HTML exportado desde Word (`id="_x0000_i1073"`).
- **Dónde:** `letters-1440.png`, `td > p > span > img`
- **Por qué importa:** algunos lectores de pantalla anuncian el nombre del archivo 48 veces antes de cada año. Además se marca como fallo de SEO.
- **Cómo arreglarlo:** convertir las columnas en `<ul>` con `list-style` CSS, o como mínimo poner `alt=""` a cada viñeta.
- **Evidencia:** medido (Lighthouse `image-alt` falla en accesibilidad y SEO; `imagesWithoutAlt: 48`)

### M6. En noticias el enlace es la fecha, no el título

- **Qué:** cada nota enlaza solo su fecha ("November 16, 2026"), y el título va debajo como texto sin enlace. Una de las notas se titula "News Release", sin más.
- **Dónde:** `news-1440.png`, `menu > dl > dt > a` y `dd`. La entrada del 14 de julio de 2026
- **Por qué importa:** el objetivo de clic es la parte menos informativa. En una lista de enlaces de un lector de pantalla solo aparecen 14 fechas sin contexto, y el título, que es lo que el usuario busca, no se puede pulsar.
- **Cómo arreglarlo:** enlazar el título y dejar la fecha como `<time datetime="2026-11-16">`. Dar a la nota del 14 de julio un título descriptivo.
- **Evidencia:** medido (texto de los enlaces en el DOM) y juicio (jerarquía)

### M7. La página de cartas no tiene salida

- **Qué:** sus 49 enlaces son 48 años más la tienda del libro. No hay vuelta a la portada ni enlace a las cartas de Greg Abel (2025 en adelante), así que la lista acaba en 2024 sin explicación. Noticias sí tiene una pestaña "Home".
- **Dónde:** `letters-1440.png`
- **Por qué importa:** quien llega desde un buscador, que es lo habitual en esta página, no puede llegar al resto del sitio ni a la carta más reciente.
- **Cómo arreglarlo:** añadir arriba "Home" y, después de 2024, "2025 en adelante: cartas de Greg Abel" enlazando a `gealetters.html`.
- **Evidencia:** medido (número de enlaces) y juicio

### M8. Texto secundario de 10 px

- **Qué:** las fechas "Updated…", el bloque de GEICO (en mayúsculas) y el pie usan `<font size=1>`, que da 10 px. Hay 7 elementos en la portada.
- **Dónde:** `home-1440.png`, `<font size=1>` debajo de cada enlace y en el pie
- **Por qué importa:** las fechas de actualización son información útil y cuesta leerlas, sobre todo a la audiencia de mayor edad que es habitual en esta web.
- **Cómo arreglarlo:** como mínimo 13–14 px (`font-size: .875rem`) y el bloque de GEICO en caja normal.
- **Evidencia:** medido (tamaños calculados: 10 px × 7)

### M9. Favicon inexistente: un 404 en cada página

- **Qué:** cada carga pide `/favicon.ico` y recibe 404, que queda como error en la consola.
- **Dónde:** las tres páginas. Lighthouse `errors-in-console`
- **Por qué importa:** la pestaña y los marcadores salen sin icono, y es el único error en consola que impide una nota más alta en buenas prácticas (88–92).
- **Cómo arreglarlo:** subir un `favicon.ico`, o mejor un SVG con las iniciales "BH" en el azul marino del sitio, y declararlo con `<link rel="icon">`.
- **Evidencia:** medido

### M10. Tres convenciones de color de enlace distintas

- **Qué:** en la portada los enlaces sin visitar son morados (`#800080`, el color que los navegadores usan para "visitado") y los visitados son rojos (`vlink="#ff0000"`). En cartas los enlaces son rojos (`#FF0000`) y en noticias morados (`#990099`).
- **Dónde:** `home-1440.png`, `letters-1440.png`, `news-1440.png`
- **Por qué importa:** quien vuelve no sabe qué ha visitado ya, y la portada invierte la convención. Es justo lo que más importa en un archivo de cartas y notas que la gente recorre año a año.
- **Cómo arreglarlo:** un único par de colores para todo el sitio, por ejemplo el azul marino del texto (`#000080`) para los enlaces sin visitar y un morado oscuro para los visitados. Se define con dos líneas de CSS compartido.
- **Evidencia:** medido (colores calculados) y juicio (convención)

## Desfasado

> Primero las técnicas antiguas comprobadas en la página (medido); después el criterio de diseño, marcado como tal.

### O1. Sin viewport ni maquetado adaptable declarado (medido: OM1)

- **Qué:** es la señal OM1 de la tabla de técnicas medibles. Se detalla en C1.
- **Dónde:** las tres páginas
- **Por qué importa:** ver C1.
- **Cómo arreglarlo:** ver C1.
- **Evidencia:** medido

### O2. Google Analytics cargado dos veces, una con un ID Universal Analytics (medido: OM3 / rendimiento)

- **Qué:** cada página carga `gtag.js?id=UA-136883390-1` y otro `gtag.js?id=G-Q43X1ML4PE`. Las propiedades Universal Analytics (`UA-`) dejaron de procesar datos en 2024 según el anuncio de Google, así que esa carga probablemente no aporta nada (es un hecho conocido, no algo comprobado en esta auditoría). Lighthouse estima 142–149 KiB de JavaScript sin usar por página, en un sitio cuyo HTML ocupa unos pocos KB.
- **Dónde:** `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136883390-1">` al principio de cada página
- **Por qué importa:** es casi todo el peso y el trabajo de CPU de la web: TBT 140–200 ms y Time to Interactive 3,8–3,9 s, cuando el contenido se pinta en 0,8–1,0 s.
- **Cómo arreglarlo:** quitar el fragmento `UA-` y dejar solo la etiqueta GA4 (o ninguna, si no se usa).
- **Evidencia:** medido (Lighthouse `unused-javascript` lista las dos URL; `total-blocking-time`, `interactive`)

### O3. HTML de presentación y exportado desde Word (medido)

- **Qué:** la portada usa 22 elementos `<font>`/`<center>` y una tabla de maquetación, y noticias usa 7 `<font>`. La página de cartas es una exportación de Microsoft Word 15 (`<meta name=Generator content="Microsoft Word 15">`, tres tablas de maquetación, archivos `letters_files/*.xml` y una referencia a la plantilla local `C:\Program Files\Microsoft Office\Office\html.dot`). Lo moderno es HTML semántico con una hoja de estilos pequeña y compartida.
- **Dónde:** `home-raw.html`, `letters-raw.html`, `news-raw.html`
- **Por qué importa:** por sí solo no se ve, pero es la raíz de M2, M4, M5 y M10. Cada página tiene sus propios colores y estructura porque no hay una hoja de estilos común, y la exportación de Word expone una ruta interna del equipo de quien la editó.
- **Cómo arreglarlo:** ver P2. No hace falta cambiar el aspecto.
- **Evidencia:** medido (`fontTags: 22`, `layoutTables: 1/3`, meta Generator)

### O4. La estética: se mantiene, falla la ejecución (juicio)

- **Qué:** tipografía Times por defecto, enlaces subrayados, separadores `<hr>`, el anuncio de GEICO en el pie y la falsa versalita del nombre ("B" a `size=6` + "ERKSHIRE" a `size=4`). Comparado con las webs de relación con inversores de otras grandes cotizadas, es de otra época. Pero es intencionado y coherente con el discurso de austeridad de la compañía, y su sencillez es la mejor parte de la web. Según el criterio de la checklist, un patrón elegido a propósito no es un fallo. Lo que sí envejece la web es la ejecución: tamaños hechos a mano con `<font>`, tres paletas de enlaces y una versalita falsa que se descuadra.
- **Dónde:** cabecera de `home-1440.png`
- **Por qué importa:** cuando solo se corrige lo técnico, el carácter se mantiene y lo que se percibe como dejadez desaparece.
- **Cómo arreglarlo:** mantener la dirección. Pasar la versalita a `font-variant: small-caps` y unificar los tamaños con 3 o 4 pasos de CSS.
- **Evidencia:** juicio

## Consejos

### T1. Añadir meta description

- **Qué:** ninguna de las tres páginas la tiene. SEO de Lighthouse: 91, 82 y 90.
- **Dónde:** `<head>` de las tres páginas
- **Por qué importa:** los buscadores muestran un fragmento escogido al azar, como "3555 Farnam Street Omaha…".
- **Cómo arreglarlo:** una frase por página, por ejemplo para cartas: "Warren Buffett's annual letters to Berkshire Hathaway shareholders, 1977–2024."
- **Evidencia:** medido (Lighthouse `meta-description`)

### T2. Indicar qué enlaces son PDF

- **Qué:** 21 de los 49 enlaces de cartas y 14 de 42 de noticias abren un PDF sin avisarlo. En cartas, los años hasta 2003 son HTML y desde 2004 son PDF (`2004ltr.pdf`…).
- **Dónde:** `letters-1440.png`, `news-1440.png`
- **Por qué importa:** en el móvil un PDF inesperado cambia de contexto y descarga cientos de KB (el de la nota del 16 de noviembre pesa unos 207 KB).
- **Cómo arreglarlo:** añadir "(PDF)" detrás del enlace o en la cabecera de la columna.
- **Evidencia:** medido (número de enlaces `.pdf`)

### T3. Logo de GEICO en SVG

- **Qué:** `geicoimg.gif` mide 75 × 15 px y se ve borroso en pantallas de alta densidad.
- **Dónde:** `home-1440.png`, `body > p > a > img`
- **Por qué importa:** es la única imagen de la portada y se nota a simple vista.
- **Cómo arreglarlo:** SVG, o un PNG a 2x con `width="75" height="15"`.
- **Evidencia:** medido (Lighthouse `image-size-responsive`)

### T4. Enlaces en HTTPS y URL actuales de EDGAR

- **Qué:** "Link to SEC Filings" apunta a `http://www.sec.gov/cgi-bin/browse-edgar?company=berkshire+hathaway…` (búsqueda por nombre, en HTTP), y GEICO a `http://www.geico.com/`. La SEC devolvió 403 a la petición automatizada, así que no se ha podido confirmar si el enlace funciona.
- **Dónde:** portada, cuarto enlace y pie
- **Por qué importa:** una búsqueda por nombre puede devolver varias entidades. Un enlace directo por CIK es más estable.
- **Cómo arreglarlo:** `https://www.sec.gov/edgar/browse/?CIK=1067983` y `https://www.geico.com/`.
- **Evidencia:** medido (atributos `href`); el estado del enlace no se ha verificado

### T5. SRI en scripts de terceros

- **Qué:** 2 scripts de `googletagmanager.com` sin `integrity`.
- **Dónde:** `<script async src="https://www.googletagmanager.com/…">`
- **Por qué importa:** el riesgo es bajo y es lo habitual con Analytics. Se resuelve casi solo al aplicar O2.
- **Cómo arreglarlo:** quitar la etiqueta `UA-`. Para GA4 no es práctico usar SRI, porque el script cambia.
- **Evidencia:** medido (`thirdPartyWithoutSri: 2`)

## Propuestas de mejora

### P1. Arreglo móvil sin rediseño (unas 30 líneas de CSS)

- **Qué:** un `brk.css` compartido que, junto con el viewport (C1), haga legible la web en el teléfono sin cambiar su aspecto en escritorio.
- **Dónde:** las tres plantillas
- **Por qué importa:** resuelve C1, M1, M8 y M10 a la vez.
- **Cómo arreglarlo:** `body{max-width:72ch;margin:0 auto;padding:0 16px;line-height:1.5}`; por debajo de 600 px, la tabla de la portada en una columna (`td{display:block;width:auto}`); enlaces de lista con `padding:12px 0`; tamaño mínimo `.875rem`; un solo par de colores de enlace. Conserva Times, el azul marino, los `<hr>` y el anuncio de GEICO.
- **Evidencia:** juicio, apoyado en `home-375.png` (sin escalar), que muestra que el contenido ya cabe

### P2. Plantilla semántica común

- **Qué:** sustituir el HTML de Word y los `<font>` por una plantilla mínima: `<!DOCTYPE html>`, `lang`, `charset`, `<header>` con `<h1>` y enlace "Home", `<main>` y `<footer>`, listas `<ul>` y `<time>`.
- **Dónde:** las tres páginas (y por extensión el resto del sitio)
- **Por qué importa:** resuelve M2–M7 y O3, y hace que cada página nueva salga bien por defecto en lugar de depender de la herramienta con la que se exporte.
- **Cómo arreglarlo:** una plantilla estática de unas 40 líneas. Las cartas pasan a ser una lista de años con "(PDF)" y un enlace de continuidad a las cartas de Greg Abel. Las noticias, una lista de títulos enlazados con la fecha al lado.
- **Evidencia:** juicio

### P3. Índice de cartas único y continuo

- **Qué:** las cartas de Buffett (1977–2024) y las de Greg Abel (2025 en adelante) están en páginas distintas que no se enlazan entre sí.
- **Dónde:** `letters-1440.png`; en la portada, "Warren Buffett's Letters…" y "Greg Abel's Letters…" en celdas separadas
- **Por qué importa:** la pregunta habitual es "¿dónde está la carta de este año?", y ahora la respuesta depende de saber quién la firmó.
- **Cómo arreglarlo:** un índice por año con el firmante entre paréntesis, o como mínimo enlaces cruzados entre las dos páginas.
- **Evidencia:** juicio

## Alternativas

### A1. Mantenerla tal cual y aplicar solo C1–C2 y M2–M3

- **Qué:** la intervención mínima.
- **Dónde:** `<head>` de cada página, más el color de enlace en cartas
- **Por qué importa:** se arregla lo que impide leer, con un coste de horas.
- **Cómo arreglarlo:** a favor: no cambia nada visible y conserva intacto el símbolo de que "aquí no se gasta en webs". En contra: la estructura (M4–M7) sigue fallando a lectores de pantalla y buscadores, y cada página nueva vuelve a heredar los problemas.
- **Evidencia:** juicio

### A2. Austeridad moderna: el mismo contenido con un sistema tipográfico

- **Qué:** la misma página única, sin imágenes ni JavaScript propio, pero con una serif de texto pensada para pantalla a 18 px, una escala de 3 tamaños, un solo color de acento y una columna de lectura.
- **Dónde:** todo el sitio
- **Por qué importa:** daría una presencia digna en el móvil y en pantallas grandes sin dejar de ser la web más sobria del sector.
- **Cómo arreglarlo:** a favor: mejor legibilidad y accesibilidad, y sigue siendo inconfundible. En contra: se pierde parte del efecto "esto no ha cambiado desde 1999", que forma parte del mito de la marca y que la prensa comenta.
- **Evidencia:** juicio

### A3. Portal de relación con inversores convencional

- **Qué:** biblioteca de documentos con buscador, filtros por tipo y año, y suscripción a avisos, como en otras grandes cotizadas.
- **Dónde:** todo el sitio
- **Por qué importa:** facilitaría encontrar documentos de un archivo de casi 50 años.
- **Cómo arreglarlo:** a favor: búsqueda y descubrimiento. En contra: coste y mantenimiento, rompe con el discurso de frugalidad, envejece más rápido que el HTML plano y añadiría el JavaScript y el peso que hoy no tiene. Para lo que pide este sitio, A2 o P2 dan casi todo el beneficio.
- **Evidencia:** juicio

## Anexo: Lighthouse

Lighthouse 13.6.0, perfil móvil.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Portada | 97 | 82 | 88 | 91 |
| Cartas | 97 | 57 | 88 | 82 |
| Noticias | 99 | 78 | 92 | 90 |

LCP 0,8 / 0,9 / 1,0 s; CLS 0 en las tres. Lighthouse también da una categoría *agentic browsing*: 50 en la portada y 100 en cartas y noticias.

Archivos: capturas, `checks.json`, `lighthouse-*.json` y el HTML fuente (`*-raw.html`) en `audits/berkshirehathaway.com-2026-11-23/`. Scripts: `tools/audit-brk.js` y `tools/audit-brk-mobile.js`.
