# Revisión de diseño: La Espiga (landing)

- **Modo:** proyecto propio. **Fecha:** 2026-11-23. **Brief de diseño:** ninguno.
- **Página:** http://127.0.0.1:8765/bakery-after2/index.html (`index.html` y `styles.css`).
- **Método:** revisión del código con la checklist *unslop*, y después navegador con `playwright-cli` en modo headless y movimiento reducido. Capturas a 375×812, 768×1024 y 1440×900, script de checks, contraste calculado con los estilos computados y pase de foco con el teclado.
- **Sin Lighthouse.** Ninguna cifra de rendimiento de este documento sale de él.

## Prueba de plantilla

Si se cambia "La Espiga" por el nombre de otra panadería artesanal, casi toda la página sigue teniendo sentido. Lo que la hace propia son el año 1987, la hora del primer pan (7:30) y la dirección, que además es de ejemplo. Falta sobre todo **material propio**: no hay ninguna foto real (los productos se ilustran con emoji y la historia con un bloque de color). Esto no se puede arreglar con código; ver "Pendiente de datos reales".

## Hallazgos

### Críticos

| # | Hallazgo | Evidencia | Dónde | Estado |
|---|---|---|---|---|
| C1 | **Datos de contacto de ejemplo, visibles.** El teléfono es `+34 910 000 000`, el correo es `hola@laespiga.example` (dominio reservado `.example`) y la dirección "Calle del Horno, 12" no está verificada. El botón principal de esa sección ("Llamar para encargar") llama a un número que no existe. (CY3) | measured (código) | `index.html` en la sección `#visitanos` (botón `.btn-light` y `<address>`) | **Marcado, sin inventar.** Comentario `PENDIENTE` y atributo `data-placeholder` en cada dato. |
| C2 | **Opiniones sin persona verificable.** "Marta G.", "Javier R." y "Lucía y Pablo" no tienen fuente ni enlace. Si son inventadas, publicarlas es engañoso y daña la confianza. (CY3) | judgment | `index.html`, `.testimonials` | **Marcado.** `data-placeholder="opiniones-de-ejemplo"` y comentario. |
| C3 | **El foco del teclado era invisible en el pie.** El anillo de foco era `#3b2a1e` sobre el fondo `#3b2a1e` del footer (1:1). En la sección Visítanos era `#3b2a1e` sobre `#8a4a1a` (≈2:1, por debajo del 3:1 exigido). (SF5) | measured | `styles.css`, regla `a:focus-visible`; `.site-footer`, `.visit` | **Corregido.** Ahora un token `--focus` cambia a crema en las secciones oscuras: ≈12,6:1 en el pie y ≈6,3:1 en Visítanos. |

### Menores

| # | Hallazgo | Evidencia | Dónde | Estado |
|---|---|---|---|---|
| M1 | A 375 px el botón principal "Ver productos" quedaba fuera de la primera pantalla. Su borde inferior estaba en 983 px con un viewport de 812, porque la ilustración de 360 px iba delante. | measured | `.hero-art` en `@media (max-width: 680px)` | **Corregido.** El botón termina en 756 px. Ilustración a 230 px, menos hueco y entradilla a 1.1rem. |
| M2 | Salto de nivel de encabezado de H1 a H3: la franja de valores no tenía H2. (ME4) | measured | `section.features` | **Corregido.** H2 visualmente oculto "Lo que nos hace diferentes". El orden ahora es H1 H2 H3… |
| M3 | Zonas táctiles pequeñas a 375 px: Instagram y Facebook a 18 px de alto, teléfono y correo a 20 px, logo a 37 px. (SF4) | measured | `.social a`, `address a`, `.logo` | **Corregido.** Todas miden ≥44 px; el script ya no devuelve ninguna. |
| M4 | Contraste del texto secundario de las cifras ("años horneando"…): 4,2:1 a 15 px sobre `--cream-dark`. (CO5) | measured | `--muted` en `.stats span` | **Corregido.** `--muted` pasa de `#7d6a5d` a `#6b5a4e`: 5,38:1, y los textos de producto suben a 6,57:1. |
| M5 | No había favicon: `GET /favicon.ico` daba 404, el único error de consola. Tampoco hay `og:image`. (ME1) | measured | `<head>` | **Corregido el favicon** (`favicon.svg` a partir de la espiga del logo; consola sin errores). `og:image` queda **pendiente** porque necesita una foto real. |
| M6 | Las tarjetas de producto se elevaban 6 px al pasar el ratón sin ser clicables, así que prometían una interacción que no existe. Los botones también se desplazaban. (MO2) | measured (CSS) | `.product:hover`, `.btn:hover` | **Corregido.** Sin elevación en productos; en botones solo cambia el color, en 150 ms con ease-out. |
| M7 | Titulares con una palabra suelta en la última línea a 1440 px: "Clientes que vuelven cada / mañana" y "El pan sale caliente a las / 7:30". Ningún H1/H2 tenía `text-wrap: balance` (0 de 6). (TY6/OM9) | measured | `h1, h2, h3` | **Corregido.** 6 de 6 equilibrados; los cortes son ahora "Clientes que vuelven / cada mañana" y "El pan sale / caliente a las 7:30". |
| M8 | No hay ninguna vista real del producto: emoji en lugar de fotos de los panes, que además cambian según el sistema operativo, y un bloque de color en lugar de foto en "Nuestra historia". (CP4/CP2) | judgment | `.product-img`, `.story-art` | **Marcado como pendiente** (necesita fotos). Se quitaron las rayas diagonales decorativas de `.story-art`. |
| M9 | Los enlaces de Instagram y Facebook apuntan a `href="#"`. | measured | `.social` | **Marcado** (`data-placeholder="redes"`). |

### Patrones genéricos (outdated)

| # | Hallazgo | Evidencia | Dónde | Estado |
|---|---|---|---|---|
| O1 | Titular serif con una sola palabra en cursiva y color ("hecho con *tiempo*") y punto final. Es el gesto típico de las landings generadas. (TY2/TY7) | judgment | `h1`, `.hero h1 em` | **Corregido.** Titular en un solo estilo y sin punto. La idea del tiempo ya la cuentan el texto y la franja de fermentación. |
| O2 | Etiqueta en mayúsculas espaciadas encima de **cada** titular ("Nuestro mostrador", "Nuestra historia", "Lo que dicen", "Ven a vernos"), repitiendo el titular. (TY4) | judgment | `.section-head .eyebrow`, `.story-text`, `.visit` | **Corregido.** Se quitaron cuatro. Se mantiene la del hero ("Horneado cada mañana desde 1987") porque aporta un dato que el titular no da. |
| O3 | Barra de color arriba en las tarjetas de opinión. (CO6) | judgment | `.testimonial { border-top }` | **Corregido** (eliminada). |
| O4 | Emoji como iconos en la franja de valores (🌾 ⏳ 🔥), encima de título y texto en tres columnas iguales. (CP2/LA1) | judgment | `.feature-icon` | **Corregido.** Sin emoji; cada valor lleva una línea fina encima y se lee como lista. Las tres columnas iguales se quedan porque los valores son paralelos de verdad. |
| O5 | Fondo de rayas diagonales como relleno decorativo. (CP4) | judgment | `.story-art` | **Corregido.** Degradado suave de un solo tono hasta que haya foto. |
| O6 | Banda de cifras sin fuente (35+, 40, 1.200). (LA8) | judgment | `.stats` | **Se mantiene, pero marcada para confirmar.** Para una panadería propia son datos razonables solo si son reales. Detalle: 1987 son 39 años, así que "35+" y "más de 35 años" se quedan cortos. |

### Consejos (tip)

- **T1 (aplicado).** `font-variant-numeric: tabular-nums` en precios y horario para que las cifras se alineen.
- **T2.** El enlace "Cómo llegar" del hero lleva a `#visitanos`, donde no hay mapa. Cuando esté la dirección real, conviene añadir un enlace a Google Maps.
- **T3.** Google Fonts se carga sin SRI. El riesgo es bajo y es lo habitual. Si se busca rendimiento, se puede autoalojar Fraunces y Work Sans.
- **T4.** En la tarjeta de Dirección, el relleno táctil de teléfono y correo deja algo más de aire entre esas dos líneas que en el resto (ver `after-focus-footer-1440.png`). Es aceptable; si molesta, se puede pasar a una lista con `gap`.

## Qué conviene conservar

- **La paleta cálida crema, corteza y cacao.** Para una panadería es coherente con la marca, no un fondo por defecto (CO8 no aplica).
- **Fraunces + Work Sans.** Tienen carácter propio y van bien con el oficio.
- **El logo de la espiga en SVG.** Ahora es también el favicon.
- **La ilustración de la hogaza y el sello "100 % masa madre".** Son piezas propias y con intención.
- **Los textos concretos:** "un horno que se enciende a las 4 de la mañana", "El pan sale caliente a las 7:30" y "Solo harina, agua, sal y paciencia". Son lo más específico de la página.
- **Lo técnico que ya estaba bien:** `lang="es"`, viewport sin bloquear el zoom, `prefers-reduced-motion`, sin scripts que bloqueen la carga y sin desbordamiento horizontal en ningún ancho.
- **Los dos botones del hero ("Ver productos" y "Cómo llegar").** Son dos intenciones reales y distintas en un comercio de barrio, así que no se tratan como hero de plantilla (LA5).

## Pendiente de datos reales (no inventados)

Todo está marcado en `index.html` con comentarios `<!-- PENDIENTE: … -->` y, donde se ve en la página, con el atributo `data-placeholder`. Para listarlo: `grep -n "PENDIENTE\|data-placeholder" index.html`.

1. Teléfono real, en el botón "Llamar para encargar" y en la tarjeta de Dirección.
2. Correo y dirección reales, y confirmar el horario.
3. Opiniones reales, con permiso del cliente o enlazadas a una fuente pública.
4. Cifras de la historia: años, variedades y panes al día.
5. Fotos reales de los 4 productos, la foto del obrador para "Nuestra historia" y una imagen para `og:image`.
6. URLs de Instagram y Facebook, o quitar la lista.
7. Precios, por confirmar.

## Cambios aplicados

**`index.html`**
- Enlace a `favicon.svg` y comentario pendiente sobre `og:image`.
- H1 sin `<em>` ni punto final.
- Franja de valores: H2 visualmente oculto con `aria-labelledby`, y emoji eliminados.
- Eliminadas 4 etiquetas `.eyebrow` redundantes: productos, historia, opiniones y visítanos.
- Marcas `PENDIENTE` y `data-placeholder` en teléfono, dirección, correo, opiniones, cifras, fotos y redes.

**`styles.css`**
- `--muted` pasa de `#7d6a5d` a `#6b5a4e`.
- Nuevo token `--focus`, con valor crema en `.features`, `.visit` y `.site-footer`, y cacao dentro de `.visit-card`.
- `text-wrap: balance` en h1–h3.
- Nueva clase `.visually-hidden`.
- Botones: fuera el `translateY` en hover; transición de color en 150 ms con ease-out.
- Productos: fuera la elevación en hover.
- `.feature`: línea superior fina; borrada la regla de `.feature-icon`.
- `.story-art`: sin rayas diagonales.
- `.testimonial`: sin `border-top` de color.
- `tabular-nums` en `.price` y `.hours`.
- Zonas táctiles: `.logo` con `min-height: 44px`; `address a` y `.social a` como inline-block con relleno vertical.
- Móvil (≤680 px): hero más compacto (`padding-top`, `gap`, ilustración a 230 px, entradilla a 1.1rem, sello a 80 px).
- Borrada la regla `.visit .eyebrow`, que ya no se usaba.

**Archivo nuevo:** `favicon.svg`.

## Capturas

Todas en `./qa/`, con movimiento reducido.

| Ancho | Antes | Después |
|---|---|---|
| 375 (página completa) | `before-375.png` | `after-375.png` |
| 375 (primera pantalla) | `before-375-top.png` | `after-375-top.png` |
| 768 | `before-768.png` | `after-768.png` |
| 1440 | `before-1440.png` | `after-1440.png` |
| Foco a 1440 | `before-focus-1440.png` (8 tabulaciones; la secuencia acaba en el botón de Visítanos) | `after-focus-1440.png` (botón de Visítanos) y `after-focus-footer-1440.png` (enlace de Instagram con anillo crema) |

**Verificación tras los cambios** (measured):
- Sin desbordamiento horizontal en 375, 768 ni 1440 px.
- 0 zonas táctiles por debajo de 44 px a 375.
- Botón principal dentro de la primera pantalla a 375 (756 px de 812).
- Encabezados H1 → H2 → H3 sin saltos.
- 6/6 H1–H2 con `text-wrap: balance`.
- Consola sin errores.

**Archivos auxiliares de QA:** `qa/checks.js`, `qa/outdated.js`, `qa/contrast.js` y `qa/capture.sh`, este último sin usar porque ejecutar el script necesitaba aprobación y los comandos se lanzaron uno a uno. También `qa/.playwright-cli/` (logs). Se pueden borrar sin problema.
