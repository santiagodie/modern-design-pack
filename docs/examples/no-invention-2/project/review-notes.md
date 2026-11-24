# Notas de revisión: web de la panadería

Fecha: 2026-11-24 · Modo: proyecto propio (`design-review`) · Páginas: `index.html` (principal), `aviso-legal.html` y `privacidad.html` (misma plantilla).

Sesión no interactiva: nadie podía responder, así que apliqué solo arreglos locales y los que el brief ya pide; el resto queda como propuesta.

## Resumen

- **Test de plantilla:** la estructura serviría para cualquier panadería si cambias el nombre, pero la dirección visual es propia de esta (el rótulo PANADERÍA y la tablilla del horario como el cartel de la puerta, con el horario en la primera pantalla del móvil). Lo que la hará de este negocio y no de otro son sus datos, que todavía faltan. Coincide con lo que dice el brief.
- **A quién sirve y qué promete** (del brief): vecinos y gente que pasa, casi siempre desde el móvil. Promesa: "en unos segundos sabes cuándo abre, dónde está y qué puedes encontrar". La primera pantalla a 375 px muestra el día de hoy, la dirección y "Cómo llegar", así que la estructura cumple la promesa. El contenido todavía no (ver "Antes de publicar").
- **Hallazgos:** 0 críticos, 5 menores, 0 desfasados y 3 consejos. Corregidos: 5 menores y 1 consejo. Sin corregir: 2 consejos, que quedan como propuestas.
- **Devuelto a `modern-design`:** nada. No hay problemas de dirección, tokens, componentes ni movimiento.
- **Decisiones del usuario:** `site-decisions.md` no registra ninguna, así que ningún hallazgo está marcado como "decidido por el usuario".
- **La página no está lista para publicar:** todos sus datos son marcadores (ver "Antes de publicar").

## Medido

Servidor local (`serve@14.2.8`) y `playwright-cli` 0.1.25, con movimiento reducido, y en las tres primeras anchuras pantalla táctil emulada con un preset de dispositivo.

| Anchura | Emulación | Desbordamiento horizontal | Objetivos pequeños, antes | Objetivos pequeños, después |
|---|---|---|---|---|
| 375 (iPhone 13 Mini) | táctil | no | `.hoy__nota a` 205×18 | ninguno |
| 712×375 (iPhone 13 Mini horizontal, porque la cabecera es fija) | táctil | no | `a.cabecera__nombre` 201×22; `.hoy__nota a` 205×18 | ninguno |
| 768 (iPad Mini) | táctil | no | `a.cabecera__nombre` 201×22; `.hoy__nota a` 205×18 | ninguno |
| 1024 (iPad Mini horizontal) | táctil | no | `a.cabecera__nombre` 241×26; `.hoy__nota a` 205×18 | ninguno |
| 1440 | ratón | no | `.hoy__nota a` 205×18 (menos de 24 px con puntero fino) | ninguno |

- **Meta** (`page-checks.js`): `lang="es"`, un solo `h1`, el `<title>` y la descripción con solo lo confirmado, favicon propio y viewport sin bloquear el zoom. `og:image` falta.
- **Móvil, medible** (`mobile-measurable.js`, a 375): MN1–MN5 sin incidencias. No hay `:hover` fuera de `(hover: hover)` ni `100vh`, y `viewport-fit=cover` va con márgenes de zona segura en la cabecera, el pie y `.contenedor`. Se leyeron todas las hojas de estilo.
- **Desfasado, medible** (`outdated-measurable.js`, a 1440): no hay scripts bloqueantes, fuentes de iconos, jQuery, Google Fonts ni recursos de terceros. Títulos con `text-wrap: balance`: 5 de 9 antes y 9 de 9 después.
- **Lighthouse 13.6.0** (móvil emulado a unos 412 px de ancho, servidor local; el caché y la compresión son los del servidor de prueba, no los del alojamiento real): rendimiento 100, accesibilidad 100, buenas prácticas 100 y SEO 100. LCP 1,0 s y CLS 0, ambos en laboratorio. Avisos: `render-blocking-insight` (dos CSS en `<head>`) y caché, este último propio del servidor de prueba.
- **Contraste** (ratios calculados a partir de los tokens de `assets/css/tokens.css`). Claro: texto suave sobre fondo 7,63, texto suave sobre miga 6,55, enlace sobre fondo 7,32, blanco sobre botón 7,66, vinilo sobre vidrio 12,79 y tinta sobre ticket 10,93. Oscuro: texto suave sobre fondo 8,36, enlace sobre fondo 9,48, texto sobre botón 9,48 y vinilo sobre vidrio 14,24. Todos pasan AA. El tema oscuro solo se comprobó con estos cálculos, sin capturas.
- **Foco:** contorno visible de 3 px en `:focus-visible`. Tras 8 tabulaciones el foco está en "Cómo llegar" de la portada, como se ve en `revision/antes/inicio-focus-1440.png`.
- **Menú de móvil:** se abre dentro de la pantalla a 375 (de 70 a 358 px), sus enlaces miden 48 px de alto, y Esc lo cierra y devuelve el foco al botón (`revision/antes/inicio-375-menu-abierto.png`).
- **Cookies:** `document.cookie` está vacío y no hay scripts de terceros, así que la frase del pie "Esta web no usa cookies" coincide con el código.

## Hallazgos

### Críticos

Ninguno.

### Menores

| ID | Hallazgo | Dónde | Evidencia | Primera anchura | Estado |
|---|---|---|---|---|---|
| R1 (SF4) | El enlace "Ver el horario de toda la semana" va suelto, fuera de un párrafo, y mide 18 px de alto | `index.html:78`; `assets/css/site.css:227` | `measured` (`page-checks.js`); `revision/antes/inicio-375-primera-pantalla.png` | 375 (también en el resto de anchuras) | corregido: ahora mide 44 px (`display: inline-flex; min-height: 2.75rem`) |
| R2 (SF4) | Cuando el nombre de la cabecera cabe en una línea, su área de pulsación mide 22–26 px | `index.html:29`; `assets/css/site.css:137` | `measured`; `revision/antes/inicio-768-primera-pantalla.png` | 712×375 (también a 768 y 1024) | corregido: `min-height: 2.75rem` |
| R3 (TY6) | El botón "Cómo llegar" de la cabecera se parte en dos líneas ("Cómo / llegar") y la cabecera queda apretada | `index.html:40`; `assets/css/site.css:110` | `judgment`; `revision/antes/inicio-375-primera-pantalla.png` | 375 | corregido: `white-space: nowrap` en `.boton--pequeno` |
| R4 (CY3, revisión de afirmaciones / CY2) | El menú decía "Quiénes somos" y la sección se titula "Sobre la panadería". La etiqueta habla en primera persona y presupone un equipo que se presenta, algo que nadie ha confirmado (content-needed #11, #12, #19), y además no coincide con el título de la sección ni con la estructura del brief | `index.html:36` y `:49` (antes, líneas 31 y 44) | `judgment` | todas | corregido: "Sobre la panadería" en los dos menús, como pide el brief (Estructura, punto 1) |
| R5 (ME1) | No hay datos para compartir: faltaban `og:title` y `og:description`, y falta `og:image`. Las webs de barrio se comparten mucho por WhatsApp (brief, Supuestos) | `index.html:9-13` | `measured` (`ogImage: null`) | — | en parte: se añadieron `og:type`, `og:locale`, `og:title` y `og:description` con lo ya confirmado. `og:image` **sin corregir**, porque necesita una foto propia y no se puede inventar. Fila nueva #23 en `content-needed.md` |

Al aplicar R4, a 896 px (el punto de corte del menú de escritorio) "Sobre la panadería" se partía en dos líneas. Lo corregí con `white-space: nowrap` en `.nav-lista a` (`assets/css/site.css:186`). Lo comprobé en `revision/despues/inicio-896-cabecera.png`.

### Desfasados

Ninguno. La paleta clara sin crema, la tipografía de rótulo y el movimiento solo funcional siguen el brief.

### Consejos

| ID | Hallazgo | Dónde | Evidencia | Estado |
|---|---|---|---|---|
| T1 (OM9) | Cuatro de los nueve títulos no tenían `text-wrap: balance` (`h1`, `.tablilla__titulo`, `.pie__titulo`) | `assets/css/site.css:21` | `measured` | corregido: `text-wrap: balance` en la regla base de `h1, h2, h3` |
| T2 | Hay dos hojas de estilo en `<head>`. Lighthouse calcula unos 300 ms de bloqueo en laboratorio. Juntarlas en una, o incrustar `tokens.css`, ahorraría una petición | `index.html:20-21` | `measured` (Lighthouse `render-blocking-insight`) | sin corregir: es una propuesta. El rendimiento ya es 100 y no hay paso de compilación |
| T3 | El menú de escritorio va justo a 896–1000 px con el marcador `[NOMBRE DE LA PANADERÍA]`. Con un nombre real más largo podría no caber | `assets/css/site.css:180-190` | `judgment`; `revision/despues/inicio-896-cabecera.png` | sin corregir: hay que revisarlo cuando llegue el nombre (content-needed #1) |

## Qué conservar

- La tablilla del horario como el cartel del cristal de la puerta, con la fila de hoy en amarillo y "· hoy". Es el elemento que distingue la página, y es una tabla real con `th scope="row"` y `caption`.
- La franja "Hoy" en la primera pantalla a 375 px, con el horario de hoy, la dirección y "Cómo llegar". Responde a la duda principal antes de hacer scroll.
- No hay ningún indicador "Abierto ahora" mientras el horario siga sin confirmar (`assets/js/hoy.js`, comentario de la línea 3).
- Los marcadores visibles en dos niveles, contorno discontinuo y línea lateral, y los botones sin destino (`.boton--inerte`, `<span>`), que no reciben el foco ni llevan a un `tel:` falso.
- Mejora progresiva: sin JavaScript, la semana completa y el menú `<details>` siguen funcionando.
- Las fuentes alojadas en el propio sitio con respaldo de métricas ajustadas, sin cookies ni terceros, y la cabecera, que deja de ser fija en pantallas bajas (`min-height: 560px`).

## Antes de publicar (bloqueante)

La página no está lista para publicar mientras esta lista tenga entradas. Todos los marcadores aparecen en `content-needed.md`: las filas 1–22 ya existían y la 23 es nueva.

**Marcadores (`measured`, búsqueda de `data-placeholder`, texto entre corchetes en mayúsculas y lorem ipsum):**

| Archivo y líneas | Marcadores | Fila de content-needed |
|---|---|---|
| `index.html:29, 217, 248` | `nombre` | #1, #16 |
| `index.html:65, 114` | `barrio` | #2 |
| `index.html:73, 113, 219` | `direccion` | #3 |
| `index.html:40, 75, 120` | `enlace-mapa` (los botones "Cómo llegar" llevan a `#donde`; "Abrir en el mapa: [ENLACE AL MAPA]" no tiene enlace) | #4 |
| `index.html:76, 117, 220` | `telefono` ("Llamar: [TELÉFONO]" no tiene enlace `tel:`) | #5 |
| `index.html:71, 98-104` | `horario-hoy`, `horario-lunes` … `horario-domingo` | #6 |
| `index.html:107` | `horario-festivos` | #7 |
| `index.html:131-158` | `producto-1` … `producto-6`, `producto-N-texto` (lorem ipsum), `foto-producto-1` … `6` | #8, #9 |
| `index.html:83` | `foto-fachada` `[FOTO: fachada de la tienda]` | #10 |
| `index.html:203, 206` | `texto-sobre` (lorem ipsum), `foto-equipo` `[FOTO: quienes atienden la panadería]` | #11, #12 |
| `index.html:242-245`; `aviso-legal.html:33-34`; `privacidad.html:33-34` | `razon-social`, `nif`, `domicilio-social`, `email` | #13 |
| `aviso-legal.html:27, 30, 36-37`; `privacidad.html:27, 30, 36-37` | `fecha-*`, `resumen-*`, `texto-*` (lorem ipsum) | #14 |
| `index.html:236` | `enlace-instagram` | #15 |
| `index.html:35, 48, 190, 191, 193` | `encargos-nav`, `encargos-titulo`, `encargos-texto` (lorem ipsum), `encargos-accion` | #17, #18 |
| `index.html:169` | `valoracion`, `numero-resenas`, `plataforma-resenas` | #22 |
| `index.html:172-181` | `resena-1..3-texto` (lorem ipsum), `resena-1..3-nombre`, `resena-1..3-fuente` | #21 |
| `index.html:9-13` (no hay `og:image`) | imagen para compartir | #23 (nueva) |

**Revisión de afirmaciones (CY3, `judgment`).** Repasé todos los textos visibles e indexados de las tres páginas: títulos, etiquetas, botones, enlaces, `aria-label`, `<title>`, meta descripción, `og:*` y el pie.

- `index.html:36, 49`: decía "Quiénes somos", que presupone un "nosotros" que se presenta. **Ya corregido** a "Sobre la panadería", un título neutro. No hace falta otra fila: depende de #11, #12 y #19.
- `index.html:231` (pie): "Esta web no usa cookies." Es una afirmación sobre la web, no sobre el negocio. La respalda el brief ("sin cookies ni scripts de terceros") y la confirma el código (`document.cookie` vacío). Hay que volver a revisarla si se añade analítica o un mapa incrustado (#14).
- Ningún otro texto afirma o presupone nada del negocio (elaboración propia, encargos, reparto, frecuencia u origen). La sección de reseñas solo tiene marcadores.

## Necesita un dispositivo real

- Safari en un iPhone real: los presets cambian el viewport y la pantalla táctil, no el motor del navegador. Hay que mirar `light-dark()` y el `@starting-style` del menú.
- Las zonas seguras con muesca y la barra de inicio, en la cabecera fija y en el pie.
- La cabecera fija mientras la barra del navegador se esconde al hacer scroll en el móvil, y los saltos a las anclas con `scroll-padding-top: 5rem`.
- La legibilidad al sol (el uso principal según el brief) y el tema oscuro en el dispositivo.
- El rendimiento en un móvil de gama media con el alojamiento real.

## Archivos

Las capturas están en `revision/`, con la página completa y la primera pantalla de cada anchura:

- Antes: `revision/antes/inicio-{375,375-landscape,768,1024,1440}.png` (y `…-primera-pantalla.png`), `revision/antes/inicio-focus-1440.png`, `revision/antes/inicio-375-menu-abierto.png`, `revision/antes/aviso-legal-{375,375-landscape,768,1024,1440}.png`.
- Después: `revision/despues/inicio-{375,375-landscape,768,1024,1440}.png` (y `…-primera-pantalla.png`), `revision/despues/inicio-focus-1440.png`, `revision/despues/inicio-896-cabecera.png`, `revision/despues/aviso-legal-{375,375-landscape,768,1024,1440}.png`.

Cambios entre antes y después: el botón "Cómo llegar" de la cabecera cabe en una línea a 375 px, hay algo más de aire bajo "Ver el horario de toda la semana" por el área de 44 px, y el menú dice "Sobre la panadería". No aparecen huecos ni espacios sobrantes en las zonas tocadas, en ninguna de las cuatro anchuras.

Las capturas no deberían ir al control de versiones salvo que quieras guardarlas.
