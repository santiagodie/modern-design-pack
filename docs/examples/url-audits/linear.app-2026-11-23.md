# Auditoría de diseño: linear.app

| | |
|---|---|
| URL | https://linear.app |
| Páginas revisadas | https://linear.app/ · https://linear.app/pricing · https://linear.app/customers |
| Fecha | 2026-11-23 |
| Viewports | 375 px, 768 px, 1440 px (con `prefers-reduced-motion: reduce`) |
| Herramientas usadas | Capturas con Playwright (playwright-cli), script de comprobaciones, script «Outdated, measurable» a 1440 px, pasada de foco con Tab, lectura del DOM, Lighthouse (CLI, Chrome headless) |
| Herramientas no disponibles | Ninguna. Limitaciones: la pasada de foco se hizo en home y customers, no en pricing (comparte cabecera y componentes de enlace con las otras dos). El navegador de la auditoría corría en `es-ES`, por eso los precios salen como «10 US$»; es formato local y no se reporta. |

No había banner de cookies ni hizo falta interactuar con formularios. No se inició sesión.

## Resumen

1. **El botón del menú móvil no tiene nombre accesible** en las tres páginas: un lector de pantalla anuncia un «botón» sin decir qué hace (C1).
2. **La maqueta interactiva del hero entra en el orden de tabulación** con 11 controles de 14 px de alto, y el texto gris más tenue (#62666d) no llega a 4.5:1 (M1, M2).
3. **Rendimiento en laboratorio flojo para una página de marketing:** home con 50 en Performance (LCP 4,7 s, TBT 620 ms) y customers con 17.226 KiB transferidos, casi todo vídeo (M5).

Prueba de plantilla: si se cambia «Linear» por un competidor, la página deja de tener sentido. Todas las visuales son la interfaz real del producto, con datos e issues concretos. La web es claramente propia de este producto.

## Problemas críticos

### C1. El botón del menú móvil no tiene nombre accesible

- **Qué:** el botón de hamburguesa de la cabecera móvil es un `<button>` que solo contiene un SVG, sin `aria-label`, sin `<title>` y sin texto oculto. Tiene `aria-haspopup="dialog"` y `aria-expanded`, pero no tiene nombre.
- **Dónde:** `home-375-viewport.png` (arriba a la derecha), selector `button.TZTsQG_mobileMenuTrigger`. Se repite en pricing y customers.
- **Por qué importa:** por debajo del ancho de tablet es la única entrada a la navegación principal (Product, Resources, Customers, Pricing…). Con VoiceOver o TalkBack se oye «botón, contraído», sin indicar que es el menú.
- **Cómo arreglarlo:** añadir `aria-label="Abrir menú"` (o el texto en inglés del sitio, «Open menu») y alternarlo a «Close menu» cuando `aria-expanded="true"`.
- **Evidencia:** medido (Lighthouse `button-name` falla en las tres páginas; outerHTML leído en el DOM).

## Problemas menores

### M1. La maqueta del hero entra en el orden de tabulación con objetivos de 14 px

- **Qué:** la maqueta de la app del hero contiene 28 elementos interactivos, 11 de ellos tabulables (Pulse, Inbox, My issues, Search workspace, New issue…). No está marcada con `inert` ni `aria-hidden`. Sus botones miden 104×14 px y 14×14 px.
- **Dónde:** `home-1440-viewport.png`, selector `div.WS84WW_frame nav.Mmx1Wq_sidebar button.Mmx1Wq_navItem`. A 768 y 1440 px también los botones de las tarjetas `button.qM9FAa_headerButton` («Add issue», «Open menu»), de 14×14 px.
- **Por qué importa:** quien navega con teclado tiene que pasar por una docena de controles de demostración antes de llegar al contenido. Además, un lector de pantalla anuncia «Inbox», «My issues»… como si fuera navegación real de la página.
- **Cómo arreglarlo:** si la maqueta es ilustrativa, poner `inert` en el contenedor y una descripción breve (`role="img"` + `aria-label`). Si la interacción es intencional, agruparla bajo una región etiquetada («Demo interactiva de Linear») con un enlace para saltarla.
- **Evidencia:** medido (Lighthouse `target-size` y `heading-order`; recuento de elementos tabulables en el DOM).

### M2. Texto secundario y enlaces por debajo del contraste mínimo

- **Qué:** el gris más tenue de la paleta, #62666d sobre #08090a, da 3.45:1 en texto de 12–14 px. Hay además dos casos sueltos: un nombre de autor sobre azul a 3.04:1 y un enlace que solo se distingue del texto que lo rodea por color, a 1.77:1.
- **Dónde:**
  - home: `p` «POWERING THE COMPANIES BUILDING THE FUTURE» bajo los logos (`home-1440.png`), 3.45:1;
  - home 375: `div.Ey56KW_mobileCard span` «Opendoor», #103b63 sobre #1c85e8, 3.04:1;
  - customers: «Your company» y «Make the switch» al final de la lista de logos (`customers-1440.png`), 3.45:1;
  - pricing: enlace «View docs» en la nota «** Requires AI credits» (`pricing-1440.png`), #8a8f98 frente al texto #62666d, 1.77:1 entre ambos.
- **Por qué importa:** es texto de apoyo, no el principal, pero el gris se usa como token y aparece en las tres páginas.
- **Cómo arreglarlo:** para texto, subir ese token hacia #8a8f98, el gris del cuerpo, que Lighthouse no marca en ninguna página. Para el enlace de pricing, añadir subrayado. En la tarjeta de Opendoor, poner el nombre en blanco o en un azul mucho más oscuro.
- **Evidencia:** medido (Lighthouse `color-contrast` en home y customers, `link-in-text-block` en pricing).

### M3. Esquema de encabezados con saltos y títulos que no son encabezados

- **Qué:**
  - home: tras el `h1` viene un `h3` («Faster app launch») y un `h4` («Activity») dentro de la maqueta, antes del primer `h2`;
  - pricing: los planes Free/Basic/Business/Enterprise son `h3` directamente bajo el `h1`, y los grupos de la tabla comparativa (Core, Integrations, Security…) son `span`;
  - customers: solo existe el `h1`; los títulos de los casos («The coding agent behind 75% of Ramp's merged PRs»…) no son encabezados.
- **Dónde:** home `div.KFZpfa_title > h3`; pricing `pricing-1440.png`, grupos `span.sc-KOGVz`; customers `a.zHhpsW_card`.
- **Por qué importa:** quien usa lector de pantalla navega por encabezados. En customers no puede saltar de caso en caso, y en pricing no puede ir directo a «Security».
- **Cómo arreglarlo:** planes como `h2`; grupos de la comparativa como `h3` (o `<th scope="rowgroup">`); títulos de las tarjetas de clientes como `h2`/`h3` dentro del enlace; encabezados de la maqueta como texto normal o fuera del árbol si se aplica M1.
- **Evidencia:** medido (Lighthouse `heading-order` en home y pricing; listado de encabezados en el DOM).

### M4. Objetivos táctiles pequeños a 375 px

- **Qué:** «Log in» (62×32) y «Sign up» (73×32) en la cabecera; los botones «Get started»/«Contact sales» de pricing miden 40 px de alto; las pestañas de categoría de customers (Featured, SaaS, AI…) miden 24 px de alto, y «AI» solo 13 px de ancho.
- **Dónde:** `home-375-viewport.png` (cabecera), `pricing-375.png`, `customers-375-viewport.png` (`a.Jbvjba_tab`).
- **Por qué importa:** son la acción principal y la navegación de la página en móvil. Por debajo de unos 44 px se falla más el toque, sobre todo con las pestañas juntas.
- **Cómo arreglarlo:** ampliar el área de toque con padding o un pseudo-elemento hasta 44 px de alto sin cambiar el aspecto: `a.Jbvjba_tab { padding-block: 10px }`; botones a `min-height: 44px` por debajo de 600 px.
- **Evidencia:** medido (script de comprobaciones a 375 px).

### M5. Peso y tiempo de carga altos en laboratorio

- **Qué:** home: Performance 50, FCP y LCP 4,7 s, TBT 620 ms, Time to Interactive 17,1 s, 2.752 KiB, 294 KiB de JS sin usar, ahorro estimado de 2.520 ms en CSS que bloquea el renderizado (6+ hojas de `static.linear.app`). customers: 17.226 KiB en total, sobre todo MP4 de las tarjetas (3.397, 2.084, 1.795 KiB…); el mismo archivo `e7800c83….mp4` aparece descargado dos veces (2.084 y 1.742 KiB).
- **Dónde:** `lighthouse-home.json`, `lighthouse-customers.json`; vídeos en `a.zHhpsW_card video`.
- **Por qué importa:** son datos de laboratorio en un móvil lento simulado, no lo que ven los visitantes reales. Aun así, 17 MB para una página de listado es mucho con datos móviles, y en home la maqueta en JS retrasa la interactividad.
- **Cómo arreglarlo:** en customers, mostrar un póster (imagen AVIF/WebP) y cargar el vídeo solo al pasar el ratón o al entrar en pantalla en escritorio, sin vídeo en móvil, y evitar la descarga duplicada. En home, cargar la maqueta interactiva después del primer render, con una captura estática como placeholder, y poner en línea el CSS crítico.
- **Evidencia:** medido (Lighthouse, laboratorio, móvil simulado).

### M6. Pricing a 768 px se queda en el diseño móvil estirado

- **Qué:** a 768 px los cuatro planes se apilan en una columna de unos 720 px de ancho, con listas cortas y mucho espacio vacío a la derecha. La comparativa muestra un solo plan cada vez, con un selector.
- **Dónde:** `pricing-768.png` (primeros ~2.300 px).
- **Por qué importa:** en tablet no se pueden comparar dos planes de un vistazo, que es justo la tarea de esta página, y hay que desplazarse mucho.
- **Cómo arreglarlo:** cuadrícula de 2×2 para los planes entre unos 640 y 1.024 px, y comparativa con dos columnas de plan (selector para cada una) en ese rango.
- **Evidencia:** juicio (a partir de la captura).

## Obsoleto

> Primero técnicas heredadas medidas; después juicio de diseño sobre convenciones actuales, marcado como tal. En general la web está al día: no hay scripts que bloqueen en `<head>` (OM3), ni fuentes de iconos (OM4), ni jQuery (OM7), ni modales hechos con `div role="dialog"` (OM12), y hay 75 reglas `prefers-reduced-motion` (OM10).

### O1. Imágenes grandes sin `srcset` ni formato moderno en home (medido: OM5)

- **Qué:** las 7 imágenes de más de 400 px de ancho natural en home no tienen `srcset` ni `<picture>`, y ninguna termina en `.webp`/`.avif`. Lighthouse estima 214 KiB de ahorro en la entrega de imágenes, entre ellas `img.Sz_9La_root` de las ilustraciones móviles y los avatares `img.qM9FAa_avatar`.
- **Dónde:** `home-375.png`, sección «Purpose-built / Powered by agents / Designed for speed» (`div.b-30Va_illustration img`).
- **Por qué importa:** en móvil se descargan imágenes más grandes de lo que se muestran.
- **Cómo arreglarlo:** servir `srcset` con 1x/2x por ancho real y AVIF/WebP. El CDN de customers ya usa `auto=format&dpr=2`, así que basta con aplicarlo también aquí. En customers, Lighthouse no marca problemas de imágenes; la comprobación por extensión no detecta la negociación de formato del CDN, así que no se reporta.
- **Evidencia:** medido (script OM5; Lighthouse `image-delivery-insight` 214 KiB en home).

Revisado y descartado: el script cuenta 103 recursos de terceros sin SRI (OM8), pero son casi todos de `static.linear.app` y `webassets.linear.app`, los CDN de la propia empresa. Se considera mantenimiento de bajo riesgo, no un problema de diseño.

### O2. Banda de cifras sin fuente ni periodo en customers (juicio)

- **Qué:** «2.0x Increase in filed issues · 3.3x Faster issue resolution · 50% Issues authored by agents», sin indicar de qué clientes salen, frente a qué base ni en qué periodo. Solo hay un «Learn more →» al lado.
- **Dónde:** `customers-1440.png`, bloque «Why teams switch to Linear».
- **Por qué importa:** en una página llena de casos concretos y con nombre, unas cifras sin contexto pesan menos que los titulares de las tarjetas, y el patrón de banda de estadísticas es de plantilla.
- **Cómo arreglarlo:** añadir una línea de fuente («Media de N clientes, 2025», o la que corresponda) o atribuir cada cifra a un caso real.
- **Evidencia:** juicio.

### O3. Fila de tres tarjetas iguales en home (juicio, límite)

- **Qué:** «Purpose-built / Powered by agents / Designed for speed»: tres columnas iguales, cada una con ilustración, título y dos líneas.
- **Dónde:** `home-1440.png`, bajo «A new species of product tool.»
- **Por qué importa:** es el único tramo de la home que no muestra el producto y que se lee como sección de características genérica. Las ilustraciones son propias y cuidadas, así que es un caso límite, no un error.
- **Cómo arreglarlo:** si se quiere mantener, está bien ejecutado. Si se quiere reforzar, sustituir las ilustraciones por un momento del producto que pruebe cada afirmación, por ejemplo la latencia real para «Designed for speed».
- **Evidencia:** juicio.

## Consejos

### T1. `text-wrap: balance` en los `h1`/`h2` que faltan

- **Qué:** 5 de 8 `h1`/`h2` de home lo tienen; pricing tiene los 2. Los titulares se ven bien partidos en las capturas, así que solo es cuestión de coherencia.
- **Dónde:** home, `h1, h2`.
- **Por qué importa:** protege los titulares frente a futuros cambios de texto.
- **Cómo arreglarlo:** `h1, h2 { text-wrap: balance; }` global.
- **Evidencia:** medido (script OM9).

### T2. Cifras tabulares en precios y estadísticas

- **Qué:** las cifras de customers (2.0x, 3.3x, 50%) usan `font-variant-numeric: normal`. En pricing no se pudo leer el estilo de los precios, pero conviene revisarlo porque cambian con el interruptor «Billed yearly».
- **Dónde:** `customers-1440.png`, bloque de estadísticas; `pricing-1440.png`, cabecera de planes.
- **Por qué importa:** con dígitos proporcionales, las cifras que cambian o se comparan en columna bailan y se alinean peor.
- **Cómo arreglarlo:** `font-variant-numeric: tabular-nums` en esos elementos.
- **Evidencia:** medido en customers (estilo calculado); sin verificar en pricing.

### T3. Logotipo de OpenAI poco legible en su miniatura

- **Qué:** el logotipo blanco va sobre un degradado lavanda claro.
- **Dónde:** `customers-focus-1440.png`, segunda tarjeta.
- **Por qué importa:** es decorativo, porque el título va debajo, pero es la única miniatura en la que la marca casi desaparece.
- **Cómo arreglarlo:** oscurecer el fondo de esa miniatura o usar el logotipo en negro.
- **Evidencia:** juicio.

## Propuestas de mejora

### P1. Dar al hero una acción propia

- **Qué:** el hero de home no tiene llamada a la acción. A la derecha del subtítulo solo está «New · Loops →», y el primer «Get started» aparece al final de la página. La única acción de alta visible arriba es el «Sign up» pequeño de la cabecera.
- **Dónde:** `home-1440-viewport.png`, `home-375-viewport.png`.
- **Por qué importa:** quien llega convencido no tiene un siguiente paso evidente junto al mensaje. El enlace de novedades ocupa el sitio visual donde se espera la acción.
- **Cómo arreglarlo:** bajo el subtítulo, un único «Get started» con el estilo invertido que ya usa la web, y «Loops →» como enlace secundario de texto, en ese orden. Así no se repite el patrón de dos botones iguales.
- **Evidencia:** juicio.

### P2. Separar «demo» y «contenido» en la maqueta del hero

- **Qué:** combinar M1 y M5. Una captura estática optimizada como primer render, y la maqueta interactiva activada después, aislada para teclado y lector de pantalla.
- **Dónde:** `div.WS84WW_frame`.
- **Por qué importa:** mejora a la vez la accesibilidad, el LCP y el TBT sin perder la demostración, que es el punto fuerte de la página.
- **Cómo arreglarlo:** `<img>` AVIF con `fetchpriority="high"` como placeholder; carga diferida de la maqueta; contenedor con `inert` o con una región etiquetada y un enlace de salto.
- **Evidencia:** juicio, apoyado en las medidas de M1 y M5.

### P3. Esquema de encabezados en pricing y customers

- **Qué:** convertir los planes, los grupos de la comparativa y los casos de cliente en encabezados (ver M3), y en pricing la comparativa en una tabla semántica (`<table>` o los roles ARIA que ya hay, con cabeceras de grupo).
- **Dónde:** `pricing-1440.png`, `customers-1440.png`.
- **Por qué importa:** son páginas de consulta, y navegar por encabezados es como se consultan con lector de pantalla.
- **Cómo arreglarlo:** ver M3.
- **Evidencia:** medido (M3).

## Alternativas

### A1. Hero con prueba concreta en lugar de categoría

- **Qué:** el titular actual («The product development system for teams and agents») define la categoría. La página de clientes tiene frases más fuertes, como «The coding agent behind 75% of Ramp's merged PRs».
- **Dónde:** `home-1440-viewport.png` frente a `customers-375-viewport.png`.
- **Por qué importa:** es una opción de posicionamiento, no un error.
- **Cómo arreglarlo:** *Dirección:* mantener el titular y añadir una línea de prueba con nombre bajo el subtítulo, o rotar un caso real. *Contrapartida:* más concreción y credibilidad inmediata, a cambio de un mensaje menos atemporal que habrá que actualizar.
- **Evidencia:** juicio.

### A2. Customers ligera: póster primero, vídeo bajo demanda

- **Qué:** la página es hoy una cuadrícula de miniaturas en vídeo.
- **Dónde:** `customers-1440.png`.
- **Por qué importa:** el movimiento da vida a la cuadrícula, pero cuesta unos 17 MB en laboratorio.
- **Cómo arreglarlo:** *Dirección:* imágenes fijas en blanco y negro (el tratamiento ya existe) y vídeo solo en la tarjeta destacada o al pasar el ratón. *Contrapartida:* menos sensación de vida al hacer scroll, a cambio de una carga varias veces menor y menos distracción mientras se leen los títulos.
- **Evidencia:** juicio.

## Qué conservar

- **El producto como imagen:** cada sección de la home enseña la interfaz real con datos concretos (issues DRV-8852, diffs, agentes). Ninguna decoración sustituye al producto.
- **Paleta contenida:** neutros oscuros y un único acento índigo (#5e69d1), reservado para foco y detalles. El botón invertido blanco marca la acción principal y el plan Business en pricing (`pricing-1440.png`).
- **Foco visible y coherente:** contorno de 1 px #5e69d1 en todos los enlaces probados (`home-focus-1440.png`, `customers-focus-1440.png`).
- **Movimiento reducido respetado:** 75 reglas `prefers-reduced-motion`; con movimiento reducido los vídeos de customers quedan en pausa y nada se oculta.
- **Estabilidad:** CLS 0 en las tres páginas y ningún desbordamiento horizontal a ninguna anchura.
- **Metadatos completos:** `title`, `description`, `og:image`, `lang="en"`, favicon propio y un único `h1` por página. SEO 100 en las tres.
- **Comparativa de pricing clara:** cabecera de columnas fija (`PDOlRq_sticky`), iconos uniformes y notas al pie.
- **Tipografía bien aplicada:** Inter Variable con tracking negativo solo en titulares grandes; Berkeley Mono reservada para código e identificadores dentro de la maqueta.

## Apéndice: Lighthouse (datos de laboratorio, móvil simulado)

| Página | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| home | 50 | 85 | 96 | 100 |
| pricing | 69 | 90 | 96 | 100 |
| customers | 62 | 91 | 77 | 100 |

LCP: home 4,7 s · pricing 3,2 s · customers 5,8 s. TBT: 620 / 700 / 320 ms. CLS: 0 en las tres. La versión de Lighthouse usada incluye además una categoría «agentic-browsing» (67 en las tres páginas), que no se valora aquí. El 77 de Best practices en customers se debe sobre todo a 3 cookies de terceros, que no es un tema de diseño.

Archivos: capturas y JSON de Lighthouse en `audits/linear.app-2026-11-23/`.
