# Auditoría de diseño: linear.app

| | |
|---|---|
| URL | https://linear.app |
| Páginas revisadas | https://linear.app/ (home) · https://linear.app/pricing · https://linear.app/build |
| Fecha | 2026-11-23 |
| Viewports | 375 px, 768 px, 1440 px (reduced motion activado) |
| Herramientas usadas | Playwright (`playwright-cli`): capturas a página completa y de primer pantallazo, script de checks, script "Outdated, measurable" y pase de foco con Tab; lectura del DOM y de estilos computados; Lighthouse 13.6.0 (móvil simulado, datos de laboratorio) |
| Herramientas no disponibles | Ninguna |
| Notas | No ha hecho falta cerrar ningún banner de cookies. No se rellenaron formularios ni se inició sesión. El navegador de la auditoría estaba en `es-ES`: el formato "10 US$" de pricing depende de ese idioma y no es un hallazgo. |

Capturas en `linear.app-2026-11-23/`: `<página>-<ancho>.png` (página completa), `<página>-<ancho>-fold.png` (primer pantallazo) y `<página>-focus-1440.png`. JSON de Lighthouse: `lighthouse-<página>.json`.

**Test de plantilla:** la página es específica de este producto. El hero de la home muestra la interfaz real de Linear (issue DRV-8852, panel del agente, actividad); /build enseña diffs, ciclos y revisiones reales, y el texto habla de issues, triage, ciclos y agentes con nombre propio. Si se cambia "Linear" por el nombre de un competidor, el contenido deja de tener sentido.

## Resumen

1. **Accesibilidad de la navegación móvil:** el botón del menú hamburguesa no tiene nombre accesible en ninguna de las 3 páginas (Lighthouse `button-name`). Con un `aria-label` se arregla.
2. **Rendimiento en móvil (laboratorio):** la home saca 33 en Performance, con un LCP de 18,2 s y unos 100 CSS que bloquean el renderizado. Es la mayor diferencia entre lo bien que se ve la web y lo que tarda en mostrarse en un móvil lento.
3. **Interfaces de demo que se pueden enfocar y pequeños fallos de contraste:** el mock del hero de la home mete 11 botones en el orden de Tab, y hay textos secundarios y enlaces por debajo del contraste mínimo (3,45:1, 3,04:1, 1,77:1).

## Problemas críticos

### C1. El botón del menú móvil no tiene nombre accesible

- **Qué:** el botón que abre la navegación en móvil y tablet es un `<button>` con solo un SVG, sin `aria-label` ni texto oculto. Un lector de pantalla lo anuncia como "botón" a secas.
- **Dónde:** `home-375-fold.png`, `pricing-375.png`, `build-768-fold.png`; selector `button.TZTsQG_mobileMenuTrigger` (`header … li.TZTsQG_mobileItem > button`).
- **Por qué importa:** es la única forma de llegar a la navegación principal por debajo del breakpoint de escritorio. Quien usa un lector de pantalla no sabe que ese botón abre el menú.
- **Cómo arreglarlo:** añadir `aria-label="Abrir menú"` (o `"Open menu"`, en el idioma del sitio) y, si se quiere, cambiarlo a "Cerrar menú" mientras `aria-expanded="true"`.
- **Evidencia:** medido (auditoría `button-name` de Lighthouse suspendida en home, pricing y build; `aria-label` = null en el DOM).

## Problemas menores

### M1. Rendimiento móvil bajo en la home y en /build (datos de laboratorio)

- **Qué:** con Lighthouse en móvil simulado, la home saca Performance 33 (LCP 18,2 s, TBT 1.630 ms, Speed Index 7,8 s, 9,1 s de trabajo en el hilo principal) y /build saca 51 (LCP 11,8 s). Pricing va mejor: 67, con un LCP de 3,4 s. CLS es 0 en las tres.
- **Dónde:** `lighthouse-home.json`, `lighthouse-build.json`; el hero de la home (mock de producto `div.WS84WW_frame`) y el vídeo del hero de /build (`BUILD-REVIEW-SHIP…av1.mp4`, el recurso más pesado de la página).
- **Por qué importa:** en un móvil de gama media con mala conexión, el hero tarda mucho en pintarse. El contenido acaba apareciendo y no queda oculto, así que no es crítico.
- **Cómo arreglarlo:** ver O1 (CSS que bloquea el renderizado) y P1. Además, recortar los 436 KiB de JS sin usar en la home (los chunks `D6AmjISp.js` y `CPx4T5b5.js` y `surveys.js` cargados al inicio) y aplazar `surveys.js` hasta que haya interacción.
- **Evidencia:** medido (Lighthouse 13.6, laboratorio, móvil simulado).

### M2. El mock del hero de la home entra en el orden de tabulación

- **Qué:** la interfaz de demostración del hero tiene 16 `<button>` reales (Pulse, Inbox, My issues, Search workspace…), y 11 de ellos se pueden enfocar con Tab. No tienen `inert` ni `aria-hidden`.
- **Dónde:** `home-1440-fold.png`, selector `nav.Mmx1Wq_sidebar button.Mmx1Wq_navItem`, `button.Mmx1Wq_searchButton`, `button.Mmx1Wq_newIssueButton`.
- **Por qué importa:** quien navega con teclado o con lector de pantalla tiene que pasar por botones que no hacen nada antes de llegar al contenido. Lighthouse además los marca como objetivos táctiles de 14 px de alto (`target-size`).
- **Cómo arreglarlo:** poner `inert` en el contenedor del mock (`div.WS84WW_frame`) y darle un `aria-label` o un texto oculto que lo describa ("Vista de la app Linear: issue Faster app launch"). Si se quiere que sea interactivo, que lo sea de verdad, con objetivos de al menos 24 × 24 px.
- **Evidencia:** medido (recuento en el DOM; `target-size` suspendida en Lighthouse en la home).

### M3. Texto secundario y enlaces por debajo del contraste mínimo

- **Qué:**
  - El texto "POWERING THE COMPANIES BUILDING THE FUTURE" está en `#62666d` sobre `#08090a` a 12 px: **3,45:1**.
  - En las tarjetas de testimonio de color de la vista móvil, el autor y el cargo quedan en **3,04:1** (`#103b63` sobre `#1c85e8`, home) y en **3,85:1** (`#124f58` sobre `#20b8cd`, /build).
  - En pricing, el enlace "View docs" de la nota "** Requires AI credits" solo se diferencia del texto que lo rodea por el color, con **1,77:1** (WCAG pide 3:1 o un subrayado).
- **Dónde:** `home-375.png`/`home-1440.png` (franja de logos bajo el hero, selector `div._7bwwmq_root > p`); `div.Ey56KW_mobileCard … div.Ey56KW_authorInfo > span` en home y /build; `pricing-1440.png`, nota al pie de la tabla comparativa (`a.I_mUeq_root.I_mUeq_variant-dimmed`).
- **Por qué importa:** es texto secundario y no bloquea el uso, pero se lee peor con luz ambiente o en pantallas de poco brillo. El enlace de pricing puede pasar desapercibido.
- **Cómo arreglarlo:** subir la línea de logos a `#8a8f98` (el gris secundario que ya usa el sitio, 6,1:1 sobre `#08090a`). En las tarjetas de color, oscurecer el texto del autor hasta 4,5:1 (por ejemplo `#0a2540` sobre `#1c85e8`) o usar texto blanco/negro puro según el fondo. Subrayar el enlace "View docs".
- **Evidencia:** medido (Lighthouse `color-contrast` y `link-in-text-block`).

### M4. Objetivos táctiles de la cabecera de 32 px de alto en móvil

- **Qué:** a 375 px, "Log in" (62 × 32), "Sign up" (73 × 32) y el botón del menú están por debajo de los ~44 px recomendados para tocar con el dedo.
- **Dónde:** `home-375-fold.png`; selectores `a.TZTsQG_anchor`, `a.S36ykG_root.S36ykG_variant-invert`, `button.TZTsQG_mobileMenuTrigger`. Pasa lo mismo en pricing y /build. En el pie, los enlaces de sección miden 28 px de alto (`a.Jmh1Wq_sectionLink`, "AI" 12 × 28).
- **Por qué importa:** "Sign up" es la acción principal en móvil. Con 32 px cuesta poco acertar, pero está justo al lado del menú.
- **Cómo arreglarlo:** ampliar la zona táctil a 44 px de alto con padding o un pseudo-elemento `::before` con `inset: -6px`, sin cambiar el tamaño visual del botón.
- **Evidencia:** medido (script de checks a 375 px).

### M5. Encabezados duplicados en el carrusel de /build y saltos de nivel

- **Qué:**
  - En /build, el carrusel de integraciones duplica sus `<h3>` ("Claude Code", "ChatGPT Deep Research", "Figma" aparecen dos veces) y ninguna copia está oculta con `aria-hidden`.
  - En la home, el mock del hero inserta un `h3` y un `h4` ("Faster app launch", "Activity") justo después del `h1`.
  - En pricing se pasa de `h1` ("Pricing") directamente a `h3` (Free, Basic…).
- **Dónde:** `build-1440.png`, sección "Streamline work across tools"; `home-1440-fold.png` (`div.KFZpfa_title > h3`); `pricing-1440-fold.png` (`section#free > hgroup > h3`).
- **Por qué importa:** el índice de encabezados que usan los lectores de pantalla queda con elementos repetidos y niveles que faltan.
- **Cómo arreglarlo:** marcar con `aria-hidden="true"` (o `inert`) las copias del carrusel que sirven para el bucle. Pasar los títulos del mock a `<div>` o a texto dentro del contenedor `inert` de M2. En pricing, convertir los nombres de plan en `h2`, o añadir un `h2` oculto tipo "Planes".
- **Evidencia:** medido (Lighthouse `heading-order` en home y pricing; DOM en /build).

### M6. El vídeo del hero de /build se reproduce en bucle sin control de pausa

- **Qué:** el fondo del hero es un `<video autoplay loop>` sin `controls` ni botón de pausa, y sin `poster`. En la sesión de la auditoría, con reduced motion emulado, seguía reproduciéndose.
- **Dónde:** `build-1440-fold.png`, `build-768-fold.png`; `video` en el hero de /build.
- **Por qué importa:** WCAG 2.2.2 pide poder pausar el movimiento automático que dura más de 5 s. A quien pide menos movimiento, un fondo animado en bucle le molesta. Además, sin `poster`, el hero queda vacío mientras carga el vídeo (es el recurso más pesado de la página).
- **Cómo arreglarlo:** con `prefers-reduced-motion: reduce`, no reproducir el vídeo y mostrar un fotograma fijo. Añadir un `poster` ligero (AVIF o WebP) y un botón de pausa discreto en la esquina del hero.
- **Evidencia:** medido (atributos del DOM: `autoplay: true`, `loop: true`, `controls: false`, `poster: false`, `paused: false`). Que no respete reduced motion es la observación de esta sesión; conviene confirmarlo en un navegador real con la preferencia del sistema activada.

## Desfasado

> Primero, técnicas antiguas medidas; después, criterio de diseño frente a las convenciones actuales.

### O1. CSS que bloquea el renderizado, troceado en unos 100 archivos (medido: OM3)

- **Qué:** no hay scripts que bloqueen en el `<head>` (`blockingScripts: []`), pero la página carga en torno a 100 hojas `/_next/static/css/*.css` desde `static.linear.app`. Lighthouse calcula un ahorro de 2.200 ms en la home, 1.780 ms en pricing y 1.890 ms en /build si dejaran de bloquear el renderizado.
- **Dónde:** `lighthouse-home.json` (`render-blocking-insight`), las `<link rel="stylesheet">` del `<head>` en las tres páginas.
- **Por qué importa:** es lo que más pesa en el FCP de 3,4–3,9 s (laboratorio) y deja la pantalla en negro antes del hero.
- **Cómo arreglarlo:** inyectar en línea el CSS crítico del primer pantallazo (cabecera y hero), agrupar los módulos en menos archivos por ruta y cargar el resto con `media="print" onload` o con la carga diferida de estilos del framework.
- **Evidencia:** medido (Lighthouse, laboratorio; recuento de `<link>` en el DOM).

### O2. Imágenes sin `srcset` y servidas más grandes de lo necesario (medido: OM5, solo la parte de tamaño)

- **Qué:** las imágenes grandes no tienen `srcset` ni `<picture>` (7 de 7 en la home, 33 de 33 en /build). Lighthouse calcula 214 KiB de ahorro en la home (144 KiB vienen de la textura de grano del mock, `div.SPbJba_grain`) y 139 KiB en /build. El formato no es un problema: las URL usan `f=auto` de Cloudflare Images, que negocia WebP o AVIF, y Lighthouse no marca `modern-image-formats`.
- **Dónde:** `div.WS84WW_frame > div.SPbJba_grain` (home), `div.JFAyQW_small img.VfJKka_image` (/build).
- **Por qué importa:** son bytes de más en móvil sin que se vea mejor.
- **Cómo arreglarlo:** generar `srcset` con `width=` de Cloudflare Images (por ejemplo 400/800/1200) y `sizes` acorde a la columna. Sustituir la textura de grano por un PNG pequeño en mosaico o por un filtro SVG `feTurbulence`.
- **Evidencia:** medido (script "Outdated, measurable" a 1440 px; Lighthouse `image-delivery-insight`).

### O3. Patrones estéticos desfasados (criterio)

- **Qué:** no he encontrado ninguno claro. La web es oscura, con Inter y una tipografía mono para el código, sin degradados morados, sin glassmorphism decorativo, sin badges de relleno y sin aparecer por secciones al hacer scroll. Los patrones de la checklist que sí aparecen están usados con intención (ver Consejos T3–T4).
- **Evidencia:** criterio.

## Consejos

### T1. Añadir `text-wrap: balance` a los encabezados que no lo tienen

- **Qué:** el balanceo está en 5 de 8 `h1/h2` en la home y en 8 de 9 en /build. En las capturas no se ven cortes feos, así que es una medida preventiva.
- **Dónde:** `h2` de la home sin balancear (por ejemplo "A new species of product tool…").
- **Cómo arreglarlo:** `h1, h2, h3 { text-wrap: balance; }` en la base tipográfica.
- **Evidencia:** medido (script OM9).

### T2. Cifras tabulares en los precios

- **Qué:** los precios ("$0", "10 US$", "16 US$") usan `font-variant-numeric: normal`. Al alternar facturación anual o mensual, los dígitos cambian de ancho.
- **Dónde:** `pricing-1440-fold.png`, cabeceras de plan.
- **Cómo arreglarlo:** `font-variant-numeric: tabular-nums` en los precios y en la tabla comparativa.
- **Evidencia:** medido (estilo computado).

### T3. Una etiqueta en mayúsculas sobre los logos (caso límite)

- **Qué:** "POWERING THE COMPANIES BUILDING THE FUTURE" es una etiqueta en mayúsculas con tracking. Aparece una sola vez y da contexto a la franja de logos, así que encaja en el "Fine when" de TY4. Lo único a corregir es su contraste (M3).
- **Dónde:** `home-1440.png`, bajo el hero.
- **Cómo arreglarlo:** mantenerla en el gris secundario `#8a8f98`, o pasarla a sentence case si se quiere un tono menos de plantilla.
- **Evidencia:** criterio.

### T4. Tres tarjetas iguales en "A new species of product tool" (caso límite)

- **Qué:** "Purpose-built / Powered by agents / Designed for speed" son tres tarjetas del mismo tamaño con ilustración isométrica, título y dos líneas de texto: el patrón LA1. La ejecución es cuidada y los tres puntos son paralelos de verdad, así que no lo cuento como desfasado.
- **Dónde:** `home-1440.png`, primera sección tras los logos.
- **Cómo arreglarlo:** si se rehace la sección, dar más peso visual al argumento principal (agentes) o sustituir las ilustraciones por una vista real del producto, como hacen las demás secciones.
- **Evidencia:** criterio.

### T5. El hero de la home no tiene acción principal propia

- **Qué:** el primer pantallazo de la home solo ofrece "Sign up" en la cabecera y el enlace de novedad "New Loops →". El hero no tiene botón. En /build tampoco hay CTA ni subtítulo en el primer pantallazo a 1440 px (`build-1440-fold.png`).
- **Por qué importa:** encaja con una marca que ya es conocida y prefiere enseñar el producto, pero un visitante nuevo tiene que buscar la acción en la cabecera.
- **Cómo arreglarlo:** si los datos de conversión lo justifican, añadir un único botón "Get started" junto al subtítulo de la home, sin un segundo botón al lado.
- **Evidencia:** criterio.

## Propuestas de mejora

### P1. Hero de la home: el mismo diseño, con una carga más ligera

- **Qué:** el mock del hero es lo mejor de la página y también lo que más pesa en el LCP (18,2 s en laboratorio) y en el orden de Tab (M2).
- **Dónde:** `home-1440-fold.png`, `div.WS84WW_frame`.
- **Cómo arreglarlo:** servir el primer pantallazo del mock como HTML estático e `inert`, con el CSS crítico en línea, e hidratar las partes animadas (panel del agente, actividad) con `requestIdleCallback` o cuando entren en pantalla. Quitar la textura de grano de 144 KiB y precargar la fuente Inter, que ya es de los recursos más pesados.
- **Por qué importa:** mantiene la identidad visual y probablemente recorta varios segundos de LCP en móvil.
- **Evidencia:** medido (Lighthouse) y criterio para la solución.

### P2. Un pase de accesibilidad sobre los componentes "vitrina"

- **Qué:** los hallazgos M2, M5 y M6 vienen del mismo sitio: componentes de demostración (mocks, carruseles en bucle, vídeo de fondo) que se comportan como contenido real ante el teclado y el lector de pantalla.
- **Cómo arreglarlo:** definir una regla del sistema de diseño: todo componente decorativo o de demo lleva `inert`, una descripción accesible y respeta `prefers-reduced-motion`, y las copias que sirven para el bucle llevan `aria-hidden`. Aplicarla en las páginas de producto (/plan, /build, /ai…).
- **Evidencia:** medido (DOM y Lighthouse).

## Alternativas

### A1. Hero de /build con texto en primer plano

- **Cómo:** sustituir el vídeo de código desenfocado por una captura nítida de la vista de review de Linear, con el subtítulo y una acción visibles en el primer pantallazo.
- **Contrapartida:** se pierde algo de atmósfera, pero se gana claridad (qué es y qué hacer) y carga, ya que el vídeo es el recurso más pesado de la página.

### A2. Tema claro opcional en las páginas de marketing

- **Cómo:** respetar `prefers-color-scheme: light` en las páginas de marketing, igual que hace la app.
- **Contrapartida:** la oscuridad es parte reconocible de la marca y el doble tema duplica el QA visual. Ayudaría a leer en exteriores y a quien tiene astigmatismo, pero no es necesario.

## Qué conservar

- **Producto real en lugar de decoración:** el hero de la home y todas las secciones enseñan la interfaz de Linear con datos creíbles, en vez de ilustraciones genéricas (`home-1440.png`).
- **Foco visible y coherente:** las 8 paradas de Tab tienen `:focus-visible` con un contorno de 1 px `#5e69d1` (unos 4,2:1 sobre el fondo) y un enlace "Skip to content" al principio (`home-focus-1440.png`).
- **Movimiento responsable:** hay entre 70 y 77 reglas `prefers-reduced-motion` por página y nada queda oculto con reduced motion activado.
- **Responsive limpio:** no hay scroll horizontal a 375, 768 ni 1440 px en ninguna página, y la tabla de precios se convierte en móvil en tarjetas más una comparativa con selector de plan (`pricing-375.png`).
- **Básicos sólidos:** `lang="en"`, un solo `h1`, título y descripción específicos en cada página, Open Graph generado por página, zoom permitido, todas las imágenes con `alt`, CLS 0 y SEO 100.
- **Pricing claro:** cuatro planes realmente paralelos, con una sola acción destacada (Business, "Get started" en claro) y CTAs alineados abajo (`pricing-1440-fold.png`).

## Anexo: Lighthouse (datos de laboratorio, móvil simulado)

| Página | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| home | 33 | 85 | 96 | 100 |
| pricing | 67 | 90 | 96 | 100 |
| build | 51 | 89 | 96 | 100 |

LCP (laboratorio): home 18,2 s · pricing 3,4 s · build 11,8 s. CLS: 0 en las tres.
