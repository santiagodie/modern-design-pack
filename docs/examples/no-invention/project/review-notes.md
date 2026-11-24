# Notas de revisión: web de la panadería de barrio

Fecha: 2026-11-24 · Modo: proyecto propio · Página revisada: `index.html` (página única)

## Resumen

- **A quién sirve y qué promete** (del design-brief): vecinos que miran el móvil antes de bajar. Promesa: saber en segundos si está abierta, dónde está, qué suele haber y cómo encargar.
- **Prueba de plantilla:** hoy la página podría ser de cualquier panadería, porque todos los datos del negocio son marcadores, tal como el brief decidió ("un molde con huecos marcados"). La estructura y el elemento audaz, el cartel del horario en el primer pantallazo, sí son propios de esta dirección. La página solo será de esta panadería cuando se rellenen los marcadores.
- **Hallazgos:** 1 crítico, 3 menores, 2 propuestas de maquetación y 5 consejos. **Arreglados:** 1 crítico y 3 menores. **Sin arreglar:** 2 propuestas y 5 consejos (motivos en las tablas).
- **Se devuelve a `modern-design`, paso 3 (maquetación):** el hueco de la portada a 768 px y el hueco bajo la foto de portada a 1024 y 1440 px (P1 y P2). Ninguno se ha aplicado porque cambian la dirección visual y esta ejecución no podía preguntar.
- **La página no está lista para publicar:** quedan 59 marcadores y 7 bloques de lorem ipsum (ver "Antes de publicar").
- **Patrones engañosos (DP):** se revisaron porque la página muestra precios. No hay hallazgos. Los precios son marcadores y content-needed pide el precio final con IVA (DP4). No hay escasez ni urgencia (DP2 y DP3). No hay cookies ni scripts, así que no hace falta banner (DP7).
- **Comprobación de promesa entre páginas:** no se aplica, porque solo hay una página.

## Medido

Navegador: `playwright-cli` 0.1.25 con movimiento reducido. Servidor local `serve@14.2.8` en 127.0.0.1:4173, ya detenido y con el puerto libre.

| Ancho | Emulación | Desbordamiento horizontal | Objetivos pequeños (script) | Cabecera | `scroll-padding-top` antes → después |
|---|---|---|---|---|---|
| 375 | iPhone 13 Mini, táctil | no | `a` 105×25 (enlace "cartel de arriba", dentro de una frase: correcto) | 106 px, fija (17 % de 629 px) | 80 → 128 px |
| 768 | iPad Mini, táctil | no | antes: `a.cabecera__nombre` 587×24 y el enlace en frase; después: solo el enlace en frase | 105 px, fija | 80 → 128 px |
| 1024 | iPad Mini apaisado, táctil | no | antes: `a.cabecera__nombre` 263×26; después: solo el enlace en frase | 61 px, fija | 80 → 80 px |
| 1440 | escritorio, ratón | no | ninguno | 61 px, fija | 80 → 80 px |
| 712×327 (móvil apaisado) | iPhone 13 Mini apaisado | no | antes: `a.cabecera__nombre` 533×24; después: solo el enlace en frase | no es fija (alto < 560 px) | — |

- **Meta (todas las anchuras):** `lang="es"`, un solo `h1`, viewport sin bloqueo de zoom y con `viewport-fit=cover`, título y descripción presentes. Sin favicon y sin `og:image`.
- **Móvil (script, 375 px):** sin zoom bloqueado, sin campos de formulario, sin `:hover` fuera de `(hover: hover)`, sin `100vh`. Usa `env(safe-area-inset-*)` y tiene `viewport-fit=cover`. 0 hojas de estilo omitidas.
- **Desfasado (script, 1440 px):** sin scripts que bloqueen, sin fuente de iconos, sin imágenes, sin jQuery, sin terceros y sin Google Fonts (la fuente está alojada en el sitio). `text-wrap: balance` en 5 de 6 `h1`/`h2` (falta en `.cartel__titulo`, ver T1).
- **Foco (1440 px, 8 tabulaciones):** el contorno verde de 3 px se ve (`antes/index-focus-1440.png`). El orden es saltar al contenido, nombre, 3 enlaces del menú, "Cómo llegar" de la cabecera, "Cómo llegar" de la portada y "cartel de arriba". El falso botón "Llamar" no recibe el foco, y es lo correcto.
- **Contraste,** calculado a partir de los valores de `css/tokens.css`:

  | Par | Claro | Oscuro |
  |---|---|---|
  | texto sobre fondo | 16,78:1 | 16,18:1 |
  | texto suave sobre fondo | 9,03:1 | 9,75:1 |
  | texto suave sobre superficie | 7,94:1 | 8,63:1 |
  | texto sobre cartel | 10,18:1 | 11,21:1 |
  | botón principal | 8,07:1 | 8,45:1 |
  | foco sobre superficie | 6,86:1 | 8,52:1 |

  `--color-cerrado` sobre el cartel da 3,86:1 en claro. site-decisions ya limita su uso a texto grande, y hoy no se usa en ningún sitio.
- **Lighthouse:** no se ejecutó, porque es opcional y ni el rendimiento ni la accesibilidad estaban en duda (página estática, sin imágenes reales ni scripts). Conviene ejecutarlo cuando lleguen las fotos reales, por el LCP de ≤ 2,5 s que pide el brief.

## Hallazgos

### Críticos

| ID | Hallazgo | Dónde | Evidencia | Primer ancho | Estado |
|---|---|---|---|---|---|
| C1 (CY3) | Las 6 descripciones de producto eran lorem ipsum visible sin `data-placeholder`, así que no tenían borde de marcador y podían pasar por texto real en una captura. Los demás marcadores sí lo tenían. | `index.html:88, 96, 104, 118, 126, 134` (`.producto__desc`) | `measured`; `antes/index-375.png` frente a `despues/index-375.png` | todos | **Arreglado:** `data-placeholder="producto-N-desc"` en cada una. Fila 12 de content-needed actualizada con ese nombre. No se ha escrito ningún texto. |

### Menores

| ID | Hallazgo | Dónde | Evidencia | Primer ancho | Estado |
|---|---|---|---|---|---|
| M1 (SF8) | Con la cabecera en dos filas (106 px), `scroll-padding-top: 5rem` (80 px) se queda corto. El enlace "cartel de arriba" dejaba el título "HORARIO" tapado por la cabecera: título en y = 80, cabecera hasta y = 106. | `css/styles.css:11–15` (antes, línea 9) | `measured`; `antes/index-375-ancla-cartel.png` (título tapado) frente a `despues/index-375-ancla-cartel.png` (título en y = 128, visible) | 375 (también 768) | **Arreglado:** 8rem por debajo de 52rem y 5rem desde 52rem, donde la cabecera ocupa una fila de 61 px. |
| M2 (SF4) | El enlace del nombre en la cabecera medía 24–26 px de alto con puntero táctil. | `css/styles.css:151` (`.cabecera__nombre`) | `measured` (script de comprobaciones) | 768 (también 1024 y 712 apaisado) | **Arreglado:** `inline-flex` con `min-height: 2.75rem` y `justify-self: start`. La altura de la cabecera no cambia (105 y 61 px). |
| M3 (accesibilidad) | El cartel era un `<div>` con `aria-labelledby`. ARIA no permite poner nombre a un elemento genérico, así que el nombre "Horario" se perdía. | `index.html:43` y `59` | `measured` (código) | todos | **Arreglado:** ahora es `<section>`, una región con nombre "Horario" que se alcanza desde la lista de regiones del lector de pantalla. No hay cambio visual. |

### Propuestas de maquetación (enviadas a `modern-design`, paso 3)

| ID | Hallazgo | Dónde | Evidencia | Primer ancho | Estado |
|---|---|---|---|---|---|
| P1 | A 768 px la portada sigue en una columna. El cartel (máximo 26rem) deja vacía casi la mitad derecha y, debajo, la foto 4:3 ocupa todo el ancho (unos 720×540 px). Para ver los productos hay que pasar mucho espacio. | `css/styles.css:192` y `306–312` (dos columnas solo desde 56rem) | `judgment`; `antes/index-768.png` | 768 | **Sin arreglar:** cambia la maquetación de la portada. Opciones: limitar el ancho de la foto en ese tramo o pasar a dos columnas antes. |
| P2 | A 1024 y 1440 px la foto de portada termina hacia un tercio de la altura de la portada, y debajo queda un hueco junto al cartel. El esquema del brief dibuja la foto acompañando a toda la columna. | `css/styles.css:306–312` | `judgment`; `antes/index-1440.png` y `antes/index-1024.png` | 1024 | **Sin arreglar:** es una decisión visual. Conviene revisarlo con la foto real, que quizá pida otra proporción o `position: sticky`. |

### Consejos

| ID | Hallazgo | Dónde | Evidencia | Estado |
|---|---|---|---|---|
| T1 (OM9) | `.cartel__titulo` no tiene `text-wrap: balance`. | `css/styles.css:248` | `measured` (script) | Sin arreglar: es una sola palabra ("Horario") y no cambia nada. |
| T2 (ME1) | No hay favicon ni `og:image`. | `index.html` `<head>` | `measured` | Sin arreglar: no hay logotipo ni fotos. La imagen para compartir ya está retenida en content-needed. Hace falta un logotipo o un monograma del usuario. |
| T3 | El "botón" "Llamar: [TELÉFONO]" parece un botón con borde pero es un `<p>`, así que al tocarlo no pasa nada. | `index.html:64`; `css/styles.css:114` | `judgment` | Sin arreglar: está pensado así mientras no haya teléfono (comentario en el código), y desaparece al pasar a `<a href="tel:…">`. Ver "Antes de publicar". |
| T4 | `container-type: inline-size` en `.producto` sin ninguna consulta de contenedor. | `css/styles.css:347` | `measured` | Sin arreglar: no tiene efecto visible. Se puede quitar al limpiar. |
| T5 | Año escrito a mano en el pie. | `index.html:222` | `measured` | Sin arreglar: el comentario del código ya lo avisa. Hay que actualizarlo en 2027. |

## Qué conservar

- El cartel del horario en papel de estraza en el primer pantallazo a todas las anchuras: responde a la duda principal del vecino, que las cuatro referencias dejaban en el pie.
- Marcadores bien hechos: borde discontinuo visible, cajas de imagen con su proporción final, y ningún marcador en `tel:`, mapas, meta descripción ni datos estructurados.
- Fuente variable alojada en el sitio, con un respaldo de métricas ajustadas, `preload` y `font-display: swap`. Sin Google Fonts ni terceros.
- `:hover` siempre dentro de `(hover: hover) and (pointer: fine)` y respuesta `:active` en táctil. Duraciones a 0 con movimiento reducido y desplazamiento suave solo sin él.
- Enlace para saltar al contenido, foco visible con buen contraste en claro y oscuro, tabla de horario con `<th scope="row">` y `caption`, y un esquema de títulos continuo (h1 → h4).
- Contraste muy holgado en ambos temas (todos los pares de texto por encima de 7:1).
- La frase "Esta web no usa cookies ni analítica" es cierta hoy: no hay ningún script ni recurso de terceros.

## Antes de publicar (bloqueante)

Todos son `measured` en `index.html` y todos tienen su fila en content-needed. La página no está lista para publicar mientras esta lista tenga entradas.

| Marcador (`data-placeholder`) | Líneas | Fila de content-needed |
|---|---|---|
| `nombre` | 21, 40, 204 (y `<title>`, línea 10) | 1 |
| `lema` | 41 | 2 |
| `horario-lunes` … `horario-domingo` | 49–55 | 3 |
| `horario-festivos` | 188 | 4 |
| `direccion` | 58, 184, 205 | 5 |
| Enlace del mapa de "Cómo llegar" (hoy `#visitanos`) | 30, 62 | 6 |
| `telefono` | 64, 161, 189, 206 | 7 |
| `como-llegar` | 187 | 8 |
| `mapa` | 194 | 9 |
| `foto-fachada` | 68 | 10 |
| `familia-1`, `familia-2` | 82, 112 | 11 |
| `foto-producto-1…6`, `producto-1…6-nombre`, `producto-1…6-desc` (lorem), `producto-1…6-precio` | 85–89, 93–97, 101–105, 115–119, 123–127, 131–135 | 12 |
| `encargos-como`, `encargos-antelacion`, `encargos-recogida` | 150, 154, 158 | 13 |
| `historia` (lorem de unas 90 palabras) | 170 | 14 |
| `nombres-panaderos` | 171 | 15 |
| `foto-obrador` | 173 | 16 |
| `red-social` | 210 | 17 |
| `razon-social`, `nif` | 214 | 18 |
| `email` | 215 | 19 |
| `enlace-aviso-legal`, `enlace-privacidad` | 217, 218 | 20 |

- Total: 59 elementos con `data-placeholder`, 53 textos entre corchetes en mayúsculas (todos dentro de esos elementos) y 7 bloques de lorem ipsum (líneas 88, 96, 104, 118, 126, 134 y 170). No queda ningún marcador sin marcar.
- **Datos que confirmar con el dueño:**
  - Que aceptan encargos. Si no, quitar la sección (fila 13).
  - Que la frase "Pregunta en la tienda por lo que queda cada día" (línea 78) describe bien cómo funciona la tienda.
  - Que la web sigue sin cookies ni analítica. Si se añade un mapa incrustado o analítica, hay que cambiar la frase de la línea 220 y añadir consentimiento.
- Al llegar los datos: convertir "Llamar" en `<a href="tel:…">`, apuntar "Cómo llegar" al mapa, y añadir los datos estructurados, la meta descripción con nombre y barrio y la imagen para compartir (retenidos en content-needed).

## Necesita un dispositivo real

- Safari en iPhone: la emulación cambia el viewport y el modo táctil, no el motor. Comprobar el cartel girado (`rotate`) y la fuente variable con `font-stretch: 68%`.
- La cabecera fija bajo la muesca (`env(safe-area-inset-top)`) y el pie sobre el indicador de inicio.
- La sensación al pulsar "Cómo llegar" (el `:active` con `translateY`) y que no quede ningún estado pegado tras tocar.
- El salto a las anclas con la barra del navegador mostrándose y ocultándose (la nueva `scroll-padding-top` de 128 px).

## Archivos

Capturas fuera del proyecto, en `D:\Users\santiago.morejon\AppData\Local\Temp\claude\daa0d80509e11f76\abae509c-f81f-4a4b-8e45-4d0807416a6e\scratchpad\review-panaderia\`:

| Antes | Después |
|---|---|
| `antes/index-375.png` | `despues/index-375.png` |
| `antes/index-768.png` | `despues/index-768.png` |
| `antes/index-1024.png` | `despues/index-1024.png` |
| `antes/index-1440.png` | `despues/index-1440.png` |
| `antes/index-375-landscape.png` | `despues/index-375-landscape.png` |
| `antes/index-focus-1440.png` | `despues/index-focus-1440.png` |
| `antes/index-375-ancla-cartel.png` | `despues/index-375-ancla-cartel.png` |

Archivos del proyecto modificados: `index.html` (C1, M3), `css/styles.css` (M1, M2) y `content-needed.md` (fila 12).
