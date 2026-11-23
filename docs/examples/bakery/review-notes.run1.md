# Revisión de diseño · La Espiga (landing)

- **Fecha:** 2026-11-23
- **Modo:** own project (`index.html`, `styles.css`). Sin brief de diseño.
- **URL:** http://127.0.0.1:8765/bakery-after/index.html

## Límites de esta revisión (léelo primero)

- **No hay capturas.** No tenía permiso para usar la herramienta de navegador (chrome-devtools) y un hook bloqueaba la terminal (PowerShell), así que tampoco pude usar Playwright ni Lighthouse. No se hizo la pasada visual a 375 / 768 / 1440 px ni la de foco con teclado, y `./qa/` solo contiene este archivo.
- Las referencias del skill (`unslop-checklist.md`, `visual-qa.md`) estaban fuera de los permisos de lectura. La revisión sigue criterios generales de diseño y de WCAG 2.2.
- Por tanto, **measured** aquí quiere decir "se ve en el código o lo calculé a partir del código": los contrastes salen de la fórmula de luminancia de WCAG aplicada a los hex del CSS. No hay ninguna cifra de herramientas de navegador.
- **Pendiente:** tomar las capturas a 375 / 768 / 1440 con reduced motion, hacer el recorrido con Tab y comprobar los puntos marcados como "sin verificar en navegador".

## Lo que conviene mantener

- La pareja tipográfica Fraunces + Work Sans y la paleta crema / corteza / cacao encajan con una panadería artesanal y no parecen de plantilla.
- El pan dibujado en SVG del hero y el sello girado "100% masa madre" tienen personalidad. Es mejor eso que una foto de stock.
- La estructura semántica es correcta: `lang="es"`, landmarks, `<address>`, `<dl>` para el horario, `<figure>/<blockquote>` en las opiniones, `aria-hidden` en lo decorativo y `prefers-reduced-motion` ya contemplado.
- El texto es concreto y con voz propia ("un horno que se enciende a las 4 de la mañana").

## Hallazgos

### Critical

| # | Hallazgo | Ubicación | Evidencia | Estado |
|---|---|---|---|---|
| C1 | **Datos ficticios presentados como reales:** teléfono `910 000 000` / `tel:+34910000000`, dirección "Calle del Horno, 12 · 28001 Madrid", email `hola@laespiga.example`. Publicado así, un cliente llamaría a un número que no existe. | `index.html` ~178, ~192-196 | measured (código) | **Marcado**, sin inventar el dato real |
| C2 | **Opiniones sin origen comprobable** ("Marta G.", "Javier R.", "Lucía y Pablo"). Publicar reseñas inventadas daña la confianza y puede ser una práctica comercial engañosa. | `index.html` sección `#opiniones` | measured (código) | **Marcado** con un aviso visible |
| C3 | **Foco invisible en el footer:** el contorno de foco es `var(--cocoa)` sobre el fondo `var(--cocoa)` (contraste 1:1). En `.visit` (cacao sobre `--crust-dark`) es ≈2,6:1, por debajo del 3:1 que pide WCAG 1.4.11 / 2.4.7. | `styles.css:78`, `.site-footer`, `.visit` | measured (cálculo de contraste) | **Corregido** |
| C4 | **Enlaces sociales muertos** (`href="#"`): saltan al principio de la página. | `index.html` footer | measured (código) | **Marcado** (no conozco las URLs reales) |

### Minor

| # | Hallazgo | Ubicación | Evidencia | Estado |
|---|---|---|---|---|
| M1 | El texto `--muted` (#7d6a5d) sobre `--cream-dark` (#f3e7d4) da ≈4,2:1, por debajo de 4,5:1 para texto normal (`.stats span`, 0,95rem). | `styles.css:9`, `.stats span` | measured (cálculo de contraste) | **Corregido**: el token pasa a #6e5b4e (≈5,3:1 sobre cream-dark, ≈6:1 sobre blanco) |
| M2 | **Cursiva sintética:** el `<em>` del h1 usa Fraunces en cursiva, pero la URL de Google Fonts no pedía el eje `ital`, así que el navegador inclinaba la redonda. | `index.html:10`, `styles.css` `.hero h1 em` | measured (código) | **Corregido**: se cargan ital 500/700 |
| M3 | **Salto de encabezados h1 → h3:** la banda de valores tenía h3 sin un h2 previo. | `index.html` `.features` | measured (código) | **Corregido**: h2 oculto visualmente con `aria-labelledby` |
| M4 | **Falsa señal de clic:** las tarjetas de producto se elevaban al pasar el ratón (`translateY(-6px)`) sin ser enlaces ni botones. | `styles.css` `.product:hover` | measured (código) + judgment | **Corregido**: se quitó el hover |
| M5 | **Tarjetas de visita estrechas entre 901 y ~1000 px:** con `1fr 1fr` dentro de media columna, cada tarjeta queda en ~160 px útiles y "Lun – Vie / 7:00 – 20:00" probablemente se parte o se desborda. | `styles.css` `.visit-cards` | judgment (sin verificar en navegador) | **Corregido**: `repeat(auto-fit, minmax(220px, 1fr))` |
| M6 | **Cifras de negocio sin verificar:** "desde 1987", "35+ años", "40 variedades", "1.200 panes al día", "tres generaciones". | `index.html` hero, `#historia` | judgment | **Marcado** con un comentario `POR VERIFICAR` en el HTML (sin marca visible, porque son afirmaciones de marca y no datos de contacto) |
| M7 | **Navegación en móvil:** por debajo de 680 px se ocultan todos los enlaces menos "Visítanos" y no hay menú. Es aceptable en una landing de una sola página, pero se pierde el acceso directo a Productos y Opiniones. | `styles.css` `@media (max-width: 680px)` | measured (código) | No se cambió (decisión de diseño). Ver T1 |

### Outdated (todos judgment)

| # | Patrón | Ubicación | Comentario |
|---|---|---|---|
| O1 | **Esqueleto de plantilla de landing:** hero partido → banda oscura con 3 valores e iconos → 4 tarjetas → historia con estadísticas → 3 testimonios → banda de CTA. Cada bloque está bien hecho, pero la secuencia es la de cualquier plantilla. | toda la página | Para darle carácter, que alguna sección rompa el ritmo, por ejemplo productos como un "mostrador" o una lista con precios estilo pizarra en vez de tarjetas iguales. Es un cambio de dirección: corresponde a `modern-design`. |
| O2 | **Antetítulo en mayúsculas (eyebrow) en las 5 secciones** + h2 centrado. | `.eyebrow` ×5 | Al repetirse pierde fuerza. Lo dejaría en 1 o 2 secciones. |
| O3 | **Emojis como iconos e imágenes de producto** (🌾⏳🔥, 🥖🥐🍞🥧). Cambian según el sistema operativo y delatan un prototipo. | `.feature-icon`, `.product-img` | Lo que más gana es la fotografía real del producto. Hasta entonces, iconos SVG con el mismo trazo que el logo. No se tocó: requiere material real o una decisión visual. |
| O4 | **Todas las tarjetas iguales:** mismo radio de 18 px, misma sombra suave y borde superior de color en los testimonios. | `.product`, `.testimonial`, `.visit-card` | Es correcto pero genérico. Bastaría con variar la jerarquía (un producto destacado más grande). |

### Tips

- **T1:** en móvil, un enlace "Menú" con `<details>` o una fila de anclas con scroll horizontal recuperaría la navegación sin JavaScript.
- **T2:** falta favicon (el navegador pedirá `/favicon.ico` y dará 404) y `<meta name="theme-color">`. El SVG de la espiga sirve como favicon.
- **T3:** faltan etiquetas Open Graph (`og:title`, `og:image`…) para que el enlace se vea bien al compartirlo por WhatsApp o redes.
- **T4:** cuando haya dirección real, añadir el enlace a mapas en el botón "Cómo llegar" (hoy solo baja a `#visitanos`) y datos estructurados `schema.org/Bakery` con horario y dirección.
- **T5:** "Visítanos", el botón de la cabecera, lleva al mismo sitio que "Cómo llegar". Si el objetivo es el encargo, el CTA principal podría ser "Encargar".

## Cambios aplicados

**`index.html`**
1. Google Fonts: Fraunces carga ahora `ital,opsz,wght@0,…500;0,…700;1,…500;1,…700` (M2).
2. `.features`: `aria-label` sustituido por un `<h2 class="visually-hidden" id="features-title">` + `aria-labelledby` (M3).
3. Opiniones: comentario `PLACEHOLDER`, aviso visible "Opiniones de ejemplo: sustituir por reseñas reales antes de publicar." y `data-placeholder` en la rejilla (C2).
4. Botón "Llamar para encargar" y `<address>`: comentario `PLACEHOLDER` + `data-placeholder` (C1).
5. Redes del footer: comentario `PLACEHOLDER` + `data-placeholder` (C4).
6. Estadísticas: comentario `POR VERIFICAR` (M6).

**`styles.css`**
1. `--muted`: #7d6a5d → #6e5b4e (M1).
2. Contorno de foco en crema dentro de `.visit` y `.site-footer` (C3).
3. Eliminados `.product:hover` y su `transition` (M4).
4. `.visit-cards`: `repeat(auto-fit, minmax(220px, 1fr))` (M5).
5. Nueva utilidad `.visually-hidden`.
6. Bloque `PLACEHOLDER`: borde discontinuo rojo en `[data-placeholder]` (amarillo en las secciones oscuras) y estilo `.placeholder-note`. **Borrar este bloque, la nota y los atributos `data-placeholder` cuando estén los datos reales.**

## Pendiente

- Capturas antes/después a 375 / 768 / 1440 px y pasada de foco con teclado. No se hicieron por falta de permisos; se necesita habilitar el navegador (chrome-devtools o Playwright) y volver a ejecutar la revisión.
- Comprobar en el navegador M5 y que los bordes de placeholder no tapen nada.
- Sustituir todos los datos marcados por los reales (teléfono, dirección, email, reseñas, redes, cifras).
- O1–O4: si quieres esa dirección, continuar con `modern-design` (dirección visual y componentes) y repetir esta revisión.
