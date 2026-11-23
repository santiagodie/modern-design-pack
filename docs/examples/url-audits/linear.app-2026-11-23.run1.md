# Auditoría de diseño: linear.app

| | |
|---|---|
| URL | https://linear.app |
| Páginas revisadas | https://linear.app/ (home), https://linear.app/pricing, https://linear.app/customers |
| Fecha | 2026-11-23 |
| Viewports | 375 px, 768 px, 1440 px |
| Herramientas usadas | Playwright (`playwright-cli`, movimiento reducido activado) para capturas, script de checks, script "Outdated, measurable" y paso de foco; lectura del HTML renderizado y del HTML del servidor (`curl`); Lighthouse 1 ejecución por página (configuración por defecto: móvil, throttling simulado) |
| Herramientas no disponibles | Ninguna. Nota: Lighthouse se ejecutó una sola vez por página, así que los tiempos son orientativos y no una media |

No apareció ningún banner de cookies, así que no hubo que cerrar nada. La auditoría ha sido solo de lectura: no se ha enviado ningún formulario ni se ha iniciado sesión.

Archivos de evidencia en `audits/linear.app-2026-11-23/`: capturas de página completa `<page>-<375|768|1440>.png`, recortes de primera pantalla (`*-fold.png`, `home-1440-species.png`, `pricing-1440-compare.png`), capturas de foco `*-focus-1440.png`, `checks.json`, `lighthouse-<page>.json` y el HTML del servidor (`home-raw.html`, `pricing-raw.html`).

## Resumen

1. **El titular de la home sale invisible desde el servidor** (`opacity:0; filter:blur(10px)`) y no aparece hasta que carga el JavaScript. El LCP de la home en Lighthouse móvil es de 18,9 s y el rendimiento, de 34/100.
2. **El botón del menú móvil no tiene nombre accesible** en las tres páginas: un lector de pantalla anuncia solo «botón» en la navegación principal en móvil.
3. **La maqueta del producto del hero es navegable con teclado y forma parte del esquema de encabezados.** Tiene 10 botones falsos tabulables, objetivos de 14×14 px y un h3/h4 antes del primer h2. Además, la animación de puntos sigue en bucle infinito con movimiento reducido activado.

En conjunto, el sitio tiene una identidad muy cuidada y nada genérica. Los problemas son de rendimiento y de accesibilidad, no de dirección visual (ver «Qué conservar» al final).

## Problemas críticos

### C1. El titular del hero depende del JavaScript para verse

- **Qué:** cada línea del `h1` llega en el HTML del servidor con `style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)"` (6 de 6 `span.QI8oKG_titleLine` en `home-raw.html`). El texto solo aparece cuando la hidratación ejecuta la animación de entrada. Lighthouse identifica ese `span` como el elemento LCP: 4,45 s de *element render delay* y 18,9 s de LCP simulado. Además mide un TBT de 1.400 ms y 2,1 s de ejecución de JS.
- **Dónde:** `home-raw.html`, selector `div.QI8oKG_container > h1 > span > span.QI8oKG_titleLine`; `lighthouse-home.json` (`lcp-breakdown-insight`).
- **Por qué importa:** es lo primero que se lee en la página. En un móvil medio con red lenta, el visitante ve el área del hero vacía durante segundos. Si el JS falla o tarda, el titular no aparece nunca.
- **Cómo arreglarlo:** renderiza el estado final en el servidor (`opacity:1`, sin blur) y aplica la animación solo cuando haya JS y `prefers-reduced-motion: no-preference`. Por ejemplo, con una clase en `<html>` que añade un script inline y una `@keyframes` en CSS que parta de `opacity:0`. Otra opción es animar solo `transform` y `opacity` desde 0.6 en vez de 0, y quitar el `filter: blur(10px)`, que también es caro de pintar.
- **Evidencia:** medido (Lighthouse home: Performance 34, LCP 18,9 s, FCP 3,9 s, TBT 1.400 ms; estilo inline en el HTML del servidor).

### C2. El botón del menú móvil no tiene nombre accesible

- **Qué:** el botón hamburguesa que abre la navegación en móvil es un `<button>` que solo contiene un icono, sin `aria-label`, `aria-labelledby` ni texto oculto. Lighthouse lo marca en `button-name` en las tres páginas.
- **Dónde:** `home-375-fold.png` (icono arriba a la derecha), selector `button.TZTsQG_mobileMenuTrigger` (`#base-ui-_R_tfpt9j6l5a_` en la home, `#base-ui-_R_7buf9j6l5a_` en pricing y customers).
- **Por qué importa:** es la única puerta a Product, Resources, Customers, Pricing, etc. en móvil. Con VoiceOver o TalkBack se anuncia como «botón, contraído», sin decir para qué sirve.
- **Cómo arreglarlo:** añade `aria-label="Abrir menú"` (o `"Menu"`, en el idioma del sitio) y deja que `aria-expanded` refleje el estado, como ya hace.
- **Evidencia:** medido (Lighthouse `button-name` en home, pricing y customers; HTML del servidor).

## Problemas menores

### M1. La maqueta del producto se puede tabular y entra en el esquema de encabezados

- **Qué:** la maqueta de la app en el hero usa botones reales. De 22 botones de la maqueta, 10 son tabulables, y ninguno está dentro de `inert` o de `aria-hidden`. También incluye un `h3` («Faster app launch») y un `h4` («Activity») que aparecen antes del primer `h2`. Lighthouse marca `heading-order` y `target-size` por esos mismos nodos (botones de 14×14 px como `button.qM9FAa_headerButton` y `button.Mmx1Wq_navItem` de 104×14 a 375 px).
- **Dónde:** `home-1440-fold.png` (maqueta), selectores `nav.Mmx1Wq_sidebar button.Mmx1Wq_navItem`, `button.qM9FAa_headerButton`, `h3.KFZpfa_titleText`.
- **Por qué importa:** quien navega con teclado tiene que atravesar una interfaz falsa que no hace nada antes de llegar al contenido. Los lectores de pantalla muestran «Faster app launch» como sección de la página.
- **Cómo arreglarlo:** pon `inert` en el contenedor de la maqueta (`div.WS84WW_frame`) y dale un `role="img"` con `aria-label` descriptivo, o usa `<div>` y `<p>` en lugar de `button` y `h3/h4` dentro de la ilustración.
- **Evidencia:** medido (script en el DOM; Lighthouse `heading-order` y `target-size`).

### M2. La animación de puntos no respeta el movimiento reducido

- **Qué:** con `prefers-reduced-motion: reduce` activo (confirmado con `matchMedia`), los `circle` de la cuadrícula de la sección «Planning and monitoring» siguen animándose (`grid-dot-*-upDown`, 2,8 s, `infinite`, `running`). El sitio tiene 77 reglas `reduced-motion`, así que el cuidado existe, pero esta animación se ha quedado fuera.
- **Dónde:** `home-1440.png` (cuadrícula de puntos verde/azul en «Planning and monitoring»), selector `circle[class*="grid-dot"]`.
- **Por qué importa:** un bucle infinito en una zona grande de la pantalla es justo lo que quien activa esa preferencia quiere evitar.
- **Cómo arreglarlo:** añade `@media (prefers-reduced-motion: reduce) { circle[class*="grid-dot"] { animation: none; } }` o pausa la animación hasta que haya hover o scroll.
- **Evidencia:** medido (estilo computado con movimiento reducido emulado).

### M3. Texto secundario por debajo de 4,5:1

- **Qué:** el gris `rgb(98,102,109)` sobre el fondo `rgb(8,9,10)` da 3,45:1 en texto de 12 a 15 px. Afecta a la nota «** Requires AI credits View docs» y a la etiqueta «Add-on» de pricing, a los enlaces legales del pie (Privacy, Terms, Other Policies, 13 px), a las flechas de «Read story →» y a las etiquetas del bloque de estadísticas de customers. Lighthouse marca `color-contrast` en la home (`p.Fzcv4W_mono`, «POWERING THE COMPANIES BUILDING THE FUTURE», y el autor del testimonio con `opacity:0.6` en `div.Ey56KW_authorInfo span`) y en customers (`div._9PBFba_root span`).
- **Dónde:** `home-1440-species.png` (etiqueta bajo los logos), `pricing-1440.png` (nota al pie de la tabla), `customers-1440.png` (estadísticas y pie).
- **Por qué importa:** es texto que informa: las condiciones de precio, quién firma el testimonio y qué miden las cifras. No es decoración.
- **Cómo arreglarlo:** sube ese gris a `#8A8F98` o más claro (unos 6:1 sobre `#08090A`) para el texto informativo, y deja el gris actual solo para separadores y decoración. En el testimonio, quita el `opacity:0.6` y usa un color sólido.
- **Evidencia:** medido (script de contraste y Lighthouse `color-contrast`).

### M4. Objetivos táctiles pequeños en móvil

- **Qué:** a 375 px, «Log in» mide 62×32 y «Sign up» 73×32 (`a.TZTsQG_anchor`, `a.S36ykG_variant-invert`). Las pestañas de categorías de customers miden 24 px de alto, y «AI» solo 13×24 (`a.Jbvjba_tab`). El selector de plan en pricing (`button.PDOlRq_select`) mide 68×40.
- **Dónde:** `home-375-fold.png`, `customers-375-fold.png`.
- **Por qué importa:** «Sign up» es la acción principal del sitio en móvil. Las pestañas, además de pequeñas, están muy juntas.
- **Cómo arreglarlo:** amplía el área de pulsación a 44 px de alto con padding vertical o un pseudo-elemento, sin cambiar el tamaño visual. En las pestañas, usa `padding-block: 10px` y un poco más de `gap`.
- **Evidencia:** medido (script de checks a 375 px).

### M5. Las historias de clientes no tienen encabezados

- **Qué:** en `/customers`, después del `h1` «Customers» el siguiente encabezado es el `h2` del CTA del pie. Las 12 tarjetas de historias («The coding agent behind 75% of Ramp's merged PRs»…) y la tabla de 20 empresas no tienen ningún `h2` ni `h3` (`headings=0` en cada `a.zHhpsW_card`). En pricing pasa lo contrario: los planes son `h3` directamente bajo el `h1` y se salta el nivel h2 (Lighthouse `heading-order`, `section#free > hgroup > h3`).
- **Dónde:** `customers-1440.png`, selector `main a[href^="/customers/"]`; `pricing-1440-fold.png`, `section#free h3`.
- **Por qué importa:** los usuarios de lectores de pantalla navegan por encabezados. En customers no pueden saltar de historia en historia.
- **Cómo arreglarlo:** marca el título de cada tarjeta como `h2` (o `h3` bajo un `h2` visualmente oculto, «Historias destacadas»). En pricing, añade un `h2` oculto («Planes») o sube los planes a `h2`.
- **Evidencia:** medido (DOM y Lighthouse `heading-order`).

### M6. Formato de precio incoherente según el idioma del navegador

- **Qué:** con el navegador de la auditoría en español, el plan Free se muestra como «$0» y Basic y Business como «10 US$» y «16 US$». Parte del precio se formatea con `Intl` según el idioma del navegador y parte está escrito a mano.
- **Dónde:** `pricing-1440-fold.png`, `pricing-375-fold.png` (cabecera de cada plan).
- **Por qué importa:** en la página de precios, la coherencia transmite confianza. Mezclar «$0» con «10 US$» en una misma fila parece un error.
- **Cómo arreglarlo:** formatea los tres precios con la misma función (`Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' })`) o fija todos en `en-US`.
- **Evidencia:** medido (captura con el idioma del navegador de la auditoría; en un navegador en inglés probablemente no se vea).

### M7. Peso de JavaScript y CSS en todas las páginas

- **Qué:** Lighthouse estima 436 KiB de JS sin usar en la home, 353 KiB en pricing y 507 KiB en customers. También mide un TBT de 710 a 1.400 ms y más de 1,4 s de CSS que bloquea el renderizado (ahorro estimado de 2.010 ms en home, 2.350 ms en pricing y 1.470 ms en customers). La consola registra unas 40 hojas CSS precargadas con `preload` que no se usan en los primeros segundos (incluida `tiempos-headline-regular.woff2`). Customers pesa 17.510 KiB, sobre todo por vídeos MP4 de las tarjetas.
- **Dónde:** `lighthouse-*.json` (`unused-javascript`, `render-blocking-insight`, `total-byte-weight`); consola en `checks.json`.
- **Por qué importa:** sostiene el problema de C1 y hace que pricing (Performance 59) y customers (51) tarden en ser interactivas en móvil (TTI de 14,9 y 15,7 s simulados).
- **Cómo arreglarlo:** quita los `preload` de CSS y fuentes que la página no usa. Divide el JS de la maqueta interactiva y cárgalo cuando entre en pantalla. En customers, usa `preload="none"` y un póster en los vídeos, y reprodúcelos solo cuando la tarjeta esté visible.
- **Evidencia:** medido (Lighthouse y consola).

## Desfasado

> Primero, las técnicas heredadas medidas en la página; después, criterio de diseño sobre convenciones actuales, marcado como tal.

Resultado del script «Outdated, measurable» a 1440 px: **ninguna técnica heredada relevante**. No hay scripts bloqueantes en `<head>` (OM3: 0), ni fuentes de iconos (OM4), ni jQuery (OM7), y hay viewport y zoom correctos (OM1 y OM2). Las imágenes grandes se sirven con `f=auto` desde Cloudflare Images (formato negociado por el servidor, así que el «0 de 7 en WebP/AVIF» del script es un falso negativo). El LCP de customers lleva `fetchpriority="high"` y `loading="eager"`, y las imágenes de más abajo usan `lazy` (32 de 39 en la home). Los 107 a 109 recursos «de terceros sin SRI» vienen de `static.linear.app`, el CDN propio, así que no son un riesgo real. Hay matices:

### O1. Siete imágenes grandes sin `srcset` en la home (medido: OM5)

- **Qué:** 7 imágenes de más de 400 px de ancho natural no tienen `srcset` ni `<picture>`. El formato ya es moderno (`f=auto`), pero se sirve el mismo tamaño a 375 que a 1440.
- **Dónde:** `home-375.png`, imágenes `img[src*="cdn-cgi/imagedelivery"]`.
- **Por qué importa:** son bytes de más en móvil, aunque Lighthouse no lo marca como fallo (`uses-responsive-images` pasa), así que el impacto es bajo.
- **Cómo arreglarlo:** genera `srcset` con variantes `width=` de Cloudflare Images y un `sizes` adecuado.
- **Evidencia:** medido (script OM5).

### O2. Monoespaciada en mayúsculas como etiqueta decorativa (criterio)

- **Qué:** «POWERING THE COMPANIES BUILDING THE FUTURE» y «FIG 0.1 / 0.2 / 0.3» usan Berkeley Mono en mayúsculas con tracking amplio. El patrón TY3/TY4 está asociado a landings genéricas.
- **Dónde:** `home-1440-species.png`, `p.Fzcv4W_mono`.
- **Por qué importa:** es un caso límite. Aquí tiene una intención clara (el lenguaje de «manual técnico» que Linear usa en Method y Brand), el público son desarrolladores y la ejecución es buena, así que **no se recomienda quitarlo**. El problema real es el contraste (ver M3), no el estilo.
- **Cómo arreglarlo:** mantener la fuente y subir el contraste de la etiqueta bajo los logos.
- **Evidencia:** criterio.

No se marcan como desfasados el tema oscuro, Inter como única sans (TY1: es la fuente de la marca y el producto es una herramienta), la cuadrícula de 3 columnas en «A new species of product tool» (las figuras son ilustraciones propias, no tarjetas con icono) ni los botones en píldora (sistema coherente). Ver «Qué conservar».

## Consejos

### T1. Cifras tabulares en los precios

- **Qué:** los precios (`$0`, `10 US$`, `16 US$`) usan `font-variant-numeric: normal`.
- **Dónde:** `pricing-1440-fold.png`, cabeceras de plan.
- **Por qué importa:** alinear cifras ayuda a comparar, sobre todo si el interruptor de facturación cambia los importes.
- **Cómo arreglarlo:** `font-variant-numeric: tabular-nums` en el precio.
- **Evidencia:** medido (estilo computado).

### T2. Añadir la fuente a las cifras de customers

- **Qué:** «2.0x Increase in filed issues», «3.3x Faster issue resolution» y «50% Issues authored by agents» aparecen sin decir de qué muestra ni de qué periodo salen. Solo hay un enlace «Learn more» al lado.
- **Dónde:** `customers-1440.png` (franja «Why teams switch to Linear»).
- **Por qué importa:** son cifras concretas y probablemente reales (LA8, «fine when»). Una línea con la fuente las hace verificables.
- **Cómo arreglarlo:** añade bajo la fila «Fuente: datos de N equipos, periodo X» o enlaza cada cifra a su origen.
- **Evidencia:** criterio.

### T3. Etiquetar los interruptores de facturación

- **Qué:** `input#basic-toggle` e `input#business-toggle` son `checkbox` ocultos visualmente que no tienen `label` asociado ni `aria-label`. El texto «Billed yearly» está al lado, pero no está vinculado al control. Lighthouse no lo marca, así que puede que tengan nombre por otra vía, pero el DOM no lo muestra.
- **Dónde:** `pricing-1440-fold.png`, selector `input#basic-toggle`.
- **Cómo arreglarlo:** envuelve el texto en `<label for="basic-toggle">` o añade `aria-label="Facturación anual"`, y usa `role="switch"`.
- **Evidencia:** medido (DOM), con impacto por confirmar con un lector de pantalla.

### T4. Una llamada a la acción visible en el hero

- **Qué:** en la primera pantalla de la home (1440×900), la única acción de registro es «Sign up» de la cabecera. El hero lleva el titular, la subtítulo y el enlace «New Loops →», pero ningún botón.
- **Dónde:** `home-1440-fold.png`.
- **Por qué importa:** parece una decisión deliberada (el producto se muestra en vez de venderse), y la cabecera es fija. Aun así, un «Get started» secundario junto al subtítulo apenas afectaría a la composición.
- **Cómo arreglarlo:** probar con un test A/B antes de cambiarlo.
- **Evidencia:** criterio.

### T5. Grosor del anillo de foco

- **Qué:** el foco es visible en todos los saltos de tabulación (bien hecho, ver `home-focus-1440.png`), pero es un `outline: 1px solid rgb(94,105,209)`, con un contraste de unos 4,2:1 sobre el fondo.
- **Cómo arreglarlo:** pasa a 2 px para cumplir con holgura el criterio de apariencia de foco de WCAG 2.2.
- **Evidencia:** medido (estilo computado).

## Propuestas de mejora

### P1. Hero «visible primero, animado después»

- **Qué:** rehacer la entrada del hero para que el texto y la maqueta se rendericen en el servidor en su estado final, y que la animación sea una capa opcional.
- **Dónde:** home, `div.QI8oKG_container` y `div.WS84WW_frame`.
- **Por qué importa:** resuelve C1 y gran parte de M7 en la página con más tráfico, sin perder el efecto.
- **Cómo arreglarlo:** (1) SSR con `opacity:1`; (2) animación en CSS bajo `@media (prefers-reduced-motion: no-preference)` y con una clase `.js`; (3) que la maqueta interactiva se hidrate cuando entre en pantalla (`IntersectionObserver`) o en `requestIdleCallback`; (4) objetivo: LCP de móvil por debajo de 2,5 s en Lighthouse.
- **Evidencia:** medido (C1 y M7).

### P2. Las ilustraciones del producto como imágenes accesibles

- **Qué:** tratar todas las maquetas de producto de la home (hero, Intake, Planning, AI, Build) como figuras: `inert`, `role="img"` y un `aria-label` que diga lo que muestran.
- **Dónde:** `home-1440.png`, todas las secciones con maqueta.
- **Por qué importa:** resuelve M1 y gran parte de los fallos de contraste y tamaño de objetivo que Lighthouse atribuye a texto de 12 px dentro de las maquetas (142 de los textos de bajo contraste de la home están en ellas).
- **Cómo arreglarlo:** un único envoltorio `<figure inert aria-label="…">` reutilizable para todas las maquetas.
- **Evidencia:** medido (script de contraste y DOM).

## Alternativas

### A1. Maquetas en vídeo o imagen en lugar de UI viva

- **Qué:** sustituir las maquetas en React por capturas o vídeos cortos (AVIF/WebM con póster).
- **Dónde:** secciones del producto en la home.
- **Por qué importa:** ahorraría la mayor parte del JS de la home y eliminaría de raíz M1 y M2.
- **Cómo arreglarlo:** a cambio, se pierden la nitidez en cualquier resolución, el texto real y la sensación de «producto vivo», que hoy son parte de la identidad. Tiene sentido solo si P1 y P2 no bastan para bajar el LCP.
- **Evidencia:** criterio.

### A2. Una página de precios con un plan recomendado más evidente

- **Qué:** hoy solo Business tiene el botón relleno, lo que ya indica el plan preferido. Una alternativa es destacar Business también con una etiqueta discreta y el texto «Most teams choose Business».
- **Dónde:** `pricing-1440-fold.png`.
- **Por qué importa:** puede orientar la decisión, a cambio de romper la sobriedad de cuatro columnas iguales, que encaja con el resto de la marca.
- **Cómo arreglarlo:** probarlo solo con datos de conversión. La versión actual es una opción válida.
- **Evidencia:** criterio.

## Qué conservar

- **Mostrar el producto real** en lugar de decoración. Las maquetas son la app, con datos plausibles (`DRV-8852 Faster app launch`), no ilustraciones genéricas. Aprueba la «prueba de plantilla»: el titular y las maquetas no funcionarían con el nombre de un competidor.
- **Foco visible y coherente** en toda la navegación, enlace «Skip to content» como primer salto de tabulación, `lang="en"`, un solo `h1` por página, títulos y Open Graph específicos por página, y ninguna imagen sin `alt`.
- **Sin desbordamiento horizontal** en ninguna de las tres páginas y en ninguno de los tres anchos. Las pestañas de customers hacen scroll horizontal con máscara de fundido a 375 px, bien resuelto.
- **CLS = 0** en las tres páginas, y `text-wrap: balance` en los titulares de pricing y customers (2 de 2).
- **Jerarquía de precios clara:** cuatro columnas paralelas (LA1 «fine when»), una sola acción principal rellena y una tabla de comparación con cabecera fija legible (`pricing-1440-compare.png`).

## Anexo: Lighthouse

Configuración por defecto (móvil, throttling simulado), una ejecución por página.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| home | 34 | 85 | 96 | 100 |
| pricing | 59 | 90 | 96 | 91 |
| customers | 51 | 91 | 77 | 100 |

| Página | LCP | FCP | TBT | CLS |
|---|---|---|---|---|
| home | 18,9 s | 3,9 s | 1.400 ms | 0 |
| pricing | 4,1 s | 4,1 s | 710 ms | 0 |
| customers | 5,7 s | 2,8 s | 1.140 ms | 0 |

Notas:

- El SEO 91 de pricing se debe a que Lighthouse marcó `meta-description` como ausente. Sin embargo, la etiqueta está en el HTML del servidor (`pricing-raw.html`) y en el DOM renderizado, así que se trata como un falso positivo de esta ejecución y no se incluye como hallazgo.
- Las buenas prácticas de customers (77) bajan por tres cookies de terceros de `px.ads.linkedin.com`, y en todas las páginas por la falta de *source maps* y por avisos de CSP en el inspector. No son problemas de diseño.
