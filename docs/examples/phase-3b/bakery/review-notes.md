# Revisión de diseño: Miga Lenta (index.html + styles.css)

Fecha: 2026-11-24 · Modo: proyecto propio · Brief: `design-brief.md` (dirección "pizarra de hornadas")

## Resumen

- **Prueba de plantilla:** la página es específica de este negocio. Si se cambia "Miga Lenta" por otra panadería, la pizarra de hornadas, el plazo de encargo y el horario dejan de ser ciertos.
- **Sin problemas críticos de diseño.** Los placeholders visibles entre corchetes los pide el brief: no cuentan como fallo de diseño, pero hay que sustituirlos antes de publicar (ver "Pendiente antes de publicar").
- **Corregido:** 8 hallazgos (4 menores y 4 consejos). **Sin corregir:** 4 consejos, por los motivos que se dan abajo.
- **Nada se devuelve a modern-design.** Todas las correcciones eran locales, y el único cambio de layout (la pizarra bajo el titular en móvil) ya lo pide el brief.

## Medido

| Prueba | 375 (iPhone 13 Mini) | 375 apaisado (712) | 768 (iPad Mini) | 1024 (iPad Mini apaisado) | 1440 (ratón) |
|---|---|---|---|---|---|
| Puntero grueso (táctil) | sí | sí | sí | sí | no |
| Desbordamiento horizontal | no | no | no | no | no |
| Objetivos táctiles pequeños, antes | 5 | 5 | 5 | 3 | 1 |
| Objetivos táctiles pequeños, después | 0 | 0 | 0 | 0 | 0 |

- **Checks MN (375):** zoom permitido; `viewport-fit=cover` con safe-area aplicado; sin inputs; ningún `:hover` fuera de `(hover: hover)`; sin `100vh`. Una hoja de estilos no se pudo leer (Google Fonts, de otro dominio).
- **OM (1440):** sin scripts bloqueantes, sin fuentes de iconos ni imágenes; 5 de 5 titulares con `text-wrap: balance`. Una hoja de terceros va sin SRI (Google Fonts).
- **Meta:** tiene `title`, `description`, `lang="es"`, favicon SVG y un solo h1. Falta `og:image`.
- **Lighthouse 13.6.0 (móvil, emulación a 412 px, datos de laboratorio, servidor local, antes de las correcciones):** Rendimiento 100, Accesibilidad 100, Buenas prácticas 100, SEO 100. LCP 1,4 s, CLS 0,007. Avisos: la hoja de Google Fonts bloquea el renderizado (unos 650 ms estimados) y el servidor local no da caché ni compresión. Eso último es un efecto del servidor de pruebas, no del sitio.
- **Contraste (calculado a partir de los tokens):** centeno sobre harina 6,33:1; blanco sobre sello 8,55:1; corteza sobre kraft 8,65:1; en tema oscuro todo supera 6,9:1. **El anillo de foco sello sobre el pie oscuro daba 2,00:1** (ver M1).
- **Ancla con cabecera fija (1024):** al saltar a `#encargos`, el h2 queda en y=173 y la cabecera termina en y=65, así que no lo tapa.

## Hallazgos

### Críticos
Ninguno.

### Menores

| ID | Hallazgo | Dónde | Evidencia | Aparece desde | Estado |
|---|---|---|---|---|---|
| M1 | Foco casi invisible en el pie: anillo azul a 2,00:1 sobre corteza (SF5/1.4.11) | `styles.css` `:focus-visible` (l.110) + `.site-footer` | measured · `qa-tmp/before/footer-focus-1440.png` → `qa-tmp/after/footer-focus-1440.png` | todas las anchuras (tema claro) | **Corregido:** el anillo usa `--on-board` en el pie |
| M2 | Enlaces del menú de menos de 44 px de ancho en táctil ("Hoy" 26 px, "El pan" 39, "Dónde" 42) (SF4) | `.nav a` (l.231) | measured · checks script | 375; se repite en 768 y 1024 (29 px) | **Corregido:** `min-width: 44px` y padding lateral, con el hueco compensado para que el texto no se mueva |
| M3 | En los pasos de encargo, los h3 quedan a alturas distintas en las tres columnas: las filas de la rejilla se estiran en los pasos cortos | `.steps li` (l.453) | measured/visual · `qa-tmp/before/encargos-768.png` → `qa-tmp/after/encargos-768.png` | 700 px (rejilla de 3 columnas); se repite en 1024 y 1440 | **Corregido:** `align-content: start` |
| M4 | En móvil la pizarra quedaba debajo de la entradilla, el horario, los dos botones y la nota, fuera de la primera pantalla. El brief dice "en móvil la pizarra va justo debajo del titular", y es el elemento distintivo de la página | `.hero-grid` / `.hero-copy` | judgment (contra el brief) · `qa-tmp/before/index-375-fold.png` → `qa-tmp/after/index-375-fold.png` | 375 hasta 899 px | **Corregido:** por debajo de 900 px, `.hero-copy { display: contents }` con `order`. El orden del DOM no cambia, así que la lectura y el foco tampoco. El botón "Encargar" sigue visible en la cabecera de la primera pantalla |

### Desfasados
Ninguno. Los patrones del checklist que aparecen están elegidos por el brief: dos acciones en el hero (referencia Madreamiga), pasos 1-2-3 (es un proceso real) y fondo claro cálido (harina fría, panadería).

### Consejos

| ID | Hallazgo | Dónde | Estado |
|---|---|---|---|
| T1 | El teléfono del pie como enlace de 59×15 px en móvil | `.site-footer a[href^="tel:"]` | **Corregido:** área táctil de 44 px con padding y margen negativo, sin mover el texto |
| T2 | El enlace "Abrir en el mapa" medía 43,99 px de alto | `.text-link` (l.189) | **Corregido:** `min-height: 44px` |
| T3 | El punto azul del horario quedaba centrado entre dos líneas cuando el texto salta de línea a 375 px | `.hours-today` (l.283) | **Corregido:** alineado con la primera línea |
| T4 | Tracking negativo (−0,01em) en los h3 de los pasos a 20 px (TY5) | `.steps h3` | **Corregido:** `letter-spacing: 0` |
| T5 | Falta `og:image` (ME1) | `<head>` | Sin corregir: no hay ninguna imagen de marca (el brief dice "sin fotos"). Añadirla junto con la foto del obrador |
| T6 | Año del copyright escrito a mano | `index.html` l.230 | Sin corregir: el brief prohíbe JavaScript y ya hay un comentario que lo avisa |
| T7 | Google Fonts bloquea el renderizado y va sin SRI | `index.html` l.16 | Sin corregir: el brief permite esta única petición, y el CSS de Google Fonts cambia según el navegador, así que no admite SRI. Si se quiere quitar el bloqueo, alojar Archivo en el propio servidor |
| T8 | El sello SVG hereda la fuente, y su texto circular mide unos 7 px a 375 | `.stamp` | Sin corregir: es decorativo (`aria-hidden`) y se lee bien en las capturas |

## Qué conservar
- La pizarra: horas en condensada a gran tamaño, cifras tabulares y tabla real con `caption` y `th scope="row"`. Funciona como información y como identidad.
- La carta en lista de mostrador, sin tarjetas, que pasa de 1 a 3 y luego a 4 columnas sin romperse.
- Los estados táctiles (`:active`), el hover limitado a `(hover: hover)`, el foco visible en las zonas claras y el `scroll-padding` con cabecera fija.
- El tema oscuro "5 de la mañana": contraste holgado en todas las combinaciones.
- La información práctica (horario semanal, dirección, plazo de encargo) está visible y en cifras.

## Pendiente antes de publicar (contenido, no diseño)
Placeholders visibles que pide el brief y que hay que sustituir: `[barrio]`, horarios, `[hora]` límite de encargo, precios `[0,00 €]`, dirección, metro, teléfono y WhatsApp, cuyos enlaces `wa.me/[…]` y `tel:` no funcionan ahora, enlaces legales `[aviso-legal]`…, razón social y NIF, la foto del obrador y las horas de ejemplo de la pizarra. También hay que confirmar con la panadería las afirmaciones listadas en el brief.

## Necesita un dispositivo real
- Safari real en iPhone. Los presets cambian el viewport y el tacto, no el motor del navegador, y `font-stretch` con Archivo variable conviene verlo allí.
- Las safe areas con notch en apaisado (el padding de `.wrap` y el pie usan `env()`).
- La sensación al pulsar los botones (`translateY(1px)`) y que los enlaces `tel:` y `wa.me` abran la app correcta.
- El rendimiento con 4G real: el coste de la hoja de Google Fonts.

## Archivos
- Antes: `qa-tmp/before/index-{375,375-landscape,768,1024,1440}.png`, `-fold`, `index-focus-1440.png` y recortes por sección.
- Después: `qa-tmp/after/index-{375,375-landscape,768,1024,1440}.png`, `-fold`, `hero-375.png`, `hero-768.png`, `encargos-768/1024/1440.png`, `footer-focus-1440.png`.
- CSS original: `qa-tmp/styles.before.css`. Lighthouse: `qa-tmp/lighthouse-before.json`.
