# Revisión de diseño: landing Miga Lenta

Fecha: 2026-11-23 · Modo: proyecto propio · Archivos: `index.html`, `styles.css` · Brief: `design-brief.md`

Navegador: Playwright (Chromium) contra `http://127.0.0.1:5173/`, con movimiento reducido. Capturas a 375 × 812, 768 × 1024 y 1440 × 900, más foco con teclado (8 tabuladores) y tema oscuro a 1440 y 375 px. Lighthouse no se ejecutó (es opcional en modo proyecto propio).

## Prueba de plantilla

La página es específica de esta panadería. La pizarra de hornadas, el plazo de encargo ("hoy para mañana") y el horario por días no tendrían sentido si se cambia el nombre por el de otra panadería. No hay hero de plantilla, tarjetas idénticas, cifras ni testimonios.

## Lo que conviene mantener

- **La pizarra "Sale del horno hoy".** Es el elemento fuerte: horas grandes en condensada con cifras tabulares. Es información útil, no decoración.
- **La carta como lista con filetes, no tarjetas.** Encaja con el brief y se lee bien en las tres anchuras.
- **El foco visible en todo el recorrido** (`:focus-visible` de 3 px en el color del sello), el enlace para saltar al contenido, `lang="es"`, un solo h1 y un esquema de encabezados continuo.
- **Contraste correcto en claro y oscuro.** El escaneo de contraste no encontró ningún texto por debajo de 4,5:1 (o 3:1 en texto grande) a ninguna anchura.
- **Tema oscuro cuidado.** La pizarra conserva el borde kraft y el acento se aclara a `#9db2f4` para mantener el contraste.
- **Huecos marcados en lugar de inventados.** Precios, dirección, teléfono y horario aparecen como `.ph` entre corchetes, y la foto como hueco con la leyenda de qué fotografiar.

## Hallazgos

### Críticos

| # | Hallazgo | Dónde | Evidencia | Estado |
|---|---|---|---|---|
| C1 | **Datos de ejemplo presentados como reales.** Las horas de la pizarra (07:30 hogaza, 08:15 centeno…) y la carta ("Seis panes fijos", descripciones) solo estaban marcadas en comentarios del HTML. Un visitante las leería como horario real (CY3). | `index.html` pizarra `.board`, `#pan .menu` | judgment (el código muestra que no había marca visible) | **Corregido:** se añadió una marca visible `.ph` en la pizarra ("[Horas y panes de ejemplo: poner los reales]") y encima de la carta ("[Carta de ejemplo: confirmar panes, descripciones y precios]"). |
| C2 | **Hay huecos visibles por toda la página:** barrio, horario, precios, teléfono, dirección y código postal (CY3: crítico cuando son visibles). | `.ph` en todo `index.html` | measured | **No corregido, a propósito.** Faltan datos reales y no se inventan. Hay que rellenarlos antes de publicar. |
| C3 | **Los enlaces de acción apuntan a destinos falsos:** `https://wa.me/34000000000`, `tel:+34000000000` y `https://maps.google.com/` genérico. Al tocar "Encargar por WhatsApp" se abre un número inexistente. | `index.html` `.order-actions`, `.visit .btn` | measured (los `href` están en el código) | **No corregido:** hace falta el teléfono y la URL de mapa reales. Ya están marcados con un comentario PLACEHOLDER. |

### Menores

| # | Hallazgo | Dónde | Evidencia | Estado |
|---|---|---|---|---|
| M1 | **Horario contradictorio.** El hero decía "Martes a domingo [8:00 – 14:30]", pero la tabla da sábado 8:30–14:30 y domingo 8:30–14:00. Al rellenar los datos quedarían dos versiones distintas. | `index.html` `.open-line` frente a `table.hours` | measured | **Corregido:** el hero dice ahora "Abierto de martes a domingo · Lunes cerrado · Horario por días" (enlace a `#donde`). El horario detallado queda en un solo sitio. |
| M2 | **Afirmaciones sin confirmar** en el texto: fermentación en frío toda la noche, "la masa madre es la misma desde que abrimos", "respondemos el mismo día", "la que se lleva casi todo el mundo", "suele acabarse antes del mediodía". | `#pan`, `.workshop`, `#encargos` | judgment | **Marcado:** comentarios `CONFIRMAR` en el HTML. El texto no cambia hasta que la panadería lo confirme. |
| M3 | **El plazo de encargo "antes de las [19:00]" no cuadra con un horario que cierra a las 14:30.** Puede valer si el encargo es por WhatsApp. | `.steps li:first-child` | judgment | Pendiente de confirmar con la panadería; no se cambió. |
| M4 | **El hueco de foto ocupa una pantalla entera en una columna:** 4:3 a todo el ancho, unos 540 px de bloque vacío a 768 px. | `.photo-slot` | judgment, `before/index-768.png` | **Corregido:** por debajo de 60rem pasa a 3:2 (480 px a 768 px). |

### Desfasados

No hay ninguno. El script "Outdated, measurable" a 1440 px dio:

- 0 scripts bloqueantes, sin fuente de iconos, 0 imágenes y 0 formularios.
- `text-wrap: balance` en 6 de 6 encabezados.
- 1 hoja de terceros sin SRI: Google Fonts. Es habitual y de bajo riesgo, y el brief permite esa única petición externa.

Los patrones del checklist que aparecen están elegidos con intención y se mantienen:

- **Pasos 1-2-3 (LA7):** es un proceso real que el usuario sigue.
- **Fondo claro (CO8):** es un "harina" frío, no crema, y es una panadería.
- **Dos botones en el hero (LA5):** el principal y el secundario se distinguen bien, y la composición es asimétrica.
- **El sello SVG (CP4):** es la pieza de marca que pide el brief.

### Consejos

| # | Hallazgo | Estado |
|---|---|---|
| T1 | Faltaban las etiquetas Open Graph de título, descripción, tipo e idioma (ME1). `og:image` sigue pendiente de una foto real. | **Corregido** (`og:title`, `og:description`, `og:type`, `og:locale`). |
| T2 | El enlace para saltar al contenido medía 163 × 41 px a 375 px (measured). | **Corregido:** `min-height: 44px`. |

## Cambios aplicados

`index.html`
- `<head>`: metaetiquetas Open Graph (sin imagen).
- `.open-line`: se quitó la hora duplicada y se añadió el enlace "Horario por días" a `#donde`.
- La pizarra lleva el aviso visible `.sample-flag` de horas de ejemplo.
- La carta lleva el aviso visible `.sample-flag` de carta de ejemplo, con comentario `CONFIRMAR`.
- `.workshop`: comentario `CONFIRMAR` sobre las afirmaciones del obrador.

`styles.css`
- `.open-line a`: color del sello y área táctil de 44 px en móvil.
- `.sample-flag`: el texto puede partir línea (evita el desbordamiento a 375 px) y tiene un fondo `.ph` atenuado sobre la pizarra.
- `.skip`: alto mínimo de 44 px.
- `.photo-slot`: `aspect-ratio: 3 / 2` por debajo de 60rem.

Verificación tras los cambios: sin desbordamiento horizontal ni objetivos táctiles pequeños, y sin problemas de contraste en claro ni en oscuro, a 375, 768 y 1440 px. La primera recaptura detectó dos problemas creados por los propios cambios: la marca larga desbordaba a 375 px por el `nowrap` de `.ph`, y el enlace nuevo medía 25 px de alto. Ambos se corrigieron antes de la captura final.

## Capturas

| Vista | Antes | Después |
|---|---|---|
| 375 página completa | `before/index-375.png` | `after/index-375.png` |
| 375 primera pantalla | `before/index-fold-375.png` | `after/index-fold-375.png` |
| 768 página completa | `before/index-768.png` | `after/index-768.png` |
| 768 primera pantalla | `before/index-fold-768.png` | `after/index-fold-768.png` |
| 1440 página completa | `before/index-1440.png` | `after/index-1440.png` |
| 1440 primera pantalla | `before/index-fold-1440.png` | `after/index-fold-1440.png` |
| Foco a 1440 | `before/index-focus-1440.png` | `after/index-focus-1440.png` |
| Oscuro a 1440 | `before/index-dark-1440.png` | `after/index-dark-1440.png` |
| Oscuro a 375 | `before/index-dark-375.png` | `after/index-dark-375.png` |

## Antes de publicar

1. Rellenar todos los `.ph`: barrio, horario, precios, dirección, código postal, metro y teléfono.
2. Poner los `href` reales de WhatsApp, teléfono y mapa.
3. Sustituir las horas de la pizarra y la carta por las reales, y después borrar los dos `.sample-flag`.
4. Confirmar las afirmaciones marcadas con `CONFIRMAR` y el plazo de encargo.
5. Añadir la foto del obrador como `<img>` con `alt`, `width` y `height`, y usarla también como `og:image`.
