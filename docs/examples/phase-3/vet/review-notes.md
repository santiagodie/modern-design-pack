# Revisión de diseño: tablero de pacientes (clínica veterinaria)

Fecha: 2026-11-23 · Modo: proyecto propio · Alcance: `index.html`, `css/app.css`, `css/tokens.css`, `js/app.js`, `js/data.js`. Se usó `design-brief.md` como referencia: lo que el brief eligió a propósito no se cuenta como hallazgo.

Navegador: playwright-cli 0.1.25 en modo headless, con movimiento reducido, sirviendo la carpeta en `http://127.0.0.1:4173` (`npx serve`). Se capturó a 375 × 812, 768 × 1024 y 1440 × 900, más el tema noche y el modo Pantalla (TV) a 1440. Lighthouse no se ejecutó: en proyecto propio no es obligatorio. Las cifras de abajo salen de scripts de medición en el navegador.

## Test de plantilla

La página es específica de este producto. El tablero por etapas, los avisos "Muerde / En ayunas / Contagioso · aislar", las dosis vencidas junto a la sala de espera y el código de colores de rotulador no tendrían sentido en un SaaS genérico ni en una clínica humana.

## Hallazgos

### Críticos

**C1. En modo Pantalla (TV) la columna "Listo para alta" queda fuera de la vista** (`measured`)
- Dónde: `css/app.css`, el punto de corte de la maquetación era `@media (max-width: 1280px)`; el modo TV escala `font-size` al 125 % (`css/tokens.css:88`).
- Evidencia: a 1440 px con modo TV, `#board` mide `scrollWidth` 1150 frente a `clientWidth` 918, y `.col[data-stage=alta]` empieza en x = 951 con el borde del tablero en 950. Captura: `before/dashboard-tv-1440.png` (solo se ven 4 columnas).
- Por qué es crítico: el modo TV es de solo lectura (oculta los botones) y está pensado para la pantalla del pasillo, donde nadie hace scroll. Los animales listos para irse a casa, como Simba con "Avisar al propietario", no se ven.
- Lo mismo, en leve, sin modo TV: entre unos 1281 y 1340 px el tablero también se recortaba (a 1320 px: 920/902, 18 px de la quinta columna ocultos).

### Menores

**M1. Los estados de las filas se parten a mitad de frase** (`judgment`, visible en capturas)
- Dónde: `.row-state` en `css/app.css`.
- Evidencia: "Vencida hace / 40 min", "Toca / ahora" y "Enviado hace 1 h 30 / min" en `before/dashboard-1440.png` y `before/dashboard-768.png`. Es justo el texto que el personal lee para decidir.

**M2. El resumen superior en el móvil: una cifra se separa de su etiqueta y los enlaces son pequeños** (`measured`)
- Dónde: `.summary` y `renderSummary()` en `js/app.js`.
- Evidencia: a 375 px el "2" queda al final de una línea y "resultados por revisar" en la siguiente (`before/dashboard-375.png`). Los enlaces miden 117×20 y 111×20 px: funcionan como atajos sueltos a los paneles, así que necesitan unos 44 px. "Hechas hoy (1)" mide 309×27 px.

**M3. A 768 px queda un hueco grande en el rail** (`judgment`)
- Dónde: `.rail` con `repeat(auto-fit, minmax(18rem, 1fr))`.
- Evidencia: Tratamientos y Laboratorio en la primera fila; Agenda baja sola a la segunda y deja vacío el espacio bajo Laboratorio (`before/dashboard-768.png`). Página de 2273 px de alto.

### Desfasados

Ninguno. No hay degradados, glows, tarjetas KPI, etiquetas en mayúsculas sobre cada panel, emojis ni animaciones de aparición. Del bloque "Outdated, measurable":
- No hay scripts que bloqueen el renderizado.
- No hay iconos con fuente.
- Ningún `input` va sin `autocomplete`.
- Movimiento reducido gestionado.
- Menús con `<details>` (no `div role=dialog`).

### Consejos

- **T1. `text-wrap: balance` en los encabezados** (`measured`: 0 de 9). Los títulos son cortos y ya cortaban bien; se añadió porque es barato. **Aplicado.**
- **T2. Google Fonts sin SRI** (`measured`: 1 hoja de terceros). Google Fonts sirve CSS dinámico, así que SRI no es viable. El riesgo es bajo y hay alternativa del sistema si no hay red. No se cambia.
- **T3. A 768 px la quinta columna solo se ve con scroll horizontal.** Está hecho a propósito ("una quinta columna parcial sugiere el scroll"), pero en realidad la que asoma es la cuarta y "Listo para alta" queda oculta del todo (`before/dashboard-768.png`). Propuesta: mostrar también a 721–1280 px los botones de etapa (`.stage-tabs`) como saltos a cada columna. Es un cambio de componente: corresponde a `modern-design`, paso 3. **No aplicado.**
- **T4. "Listo para revisar" en Laboratorio usa el borde azul.** El brief reserva el azul para lo interactivo. Es dudoso: también es "acción pendiente". Si se quiere ser estricto, usar el borde de tinta y dejar el azul para el texto. **No aplicado.**
- **T5. A 1440 × 900 el rail mide 1685 px y "Agenda de hoy" queda por debajo de la parte visible.** En modo TV, tras C1, el rail pasa entero por debajo del tablero. Es un intercambio aceptado: en la pantalla del pasillo manda ver el tablero completo. Si la pantalla también debe mostrar tratamientos, haría falta una vista de TV propia (corresponde a `modern-design`).

## Datos pendientes (no inventados, siguen marcados)

- **"[Nombre de la clínica]"** aparece en la barra superior y en el `<title>`. Es un marcador de posición visible: sería **crítico antes de ponerlo en producción**, pero en esta demo es intencional y va marcado.
- Todos los pacientes, propietarios, dosis, resultados y las iniciales del personal (AG, JM, LP) son **datos de demostración**. Lo dicen `js/data.js` y la etiqueta "Datos de demostración" en pantalla. No se cambió ningún dato.

## Qué conservar

- **El borde de rotulador con el reloj de etapa.** Se lee el estado del edificio de un vistazo y el color siempre va con una palabra ("Espera larga", "Dosis vencida", "Sin recoger").
- **Contraste AA medido en ambos temas.** Diurno: 5,6–6,95:1. Noche: 6,35–8,4:1, y el botón primario 8,1:1. El único elemento bajo 3:1 es el separador "·", que es decorativo y lleva `aria-hidden`.
- **Foco visible.** Anillo azul de 3 px con separación en botones, enlaces y campos (`before/dashboard-focus-1440.png`); la navegación con Tab recorre toda la página.
- **Funcionamiento sólido.** Deshacer en cada acción, atajo `/` para buscar, mensaje propio para cada columna y panel vacíos, movimiento reducido respetado y 0 errores en consola.
- **Tipografía y números.** Atkinson Hyperlegible, con mono solo para horas y cifras tabulares.

## Cambios aplicados

| # | Archivo | Cambio | Resuelve |
|---|---|---|---|
| 1 | `css/app.css` (body) | `container: page / inline-size` | Base para C1 |
| 2 | `css/app.css` (Responsive) | `@media (max-width: 1280px)` pasa a `@container page (max-width: 84rem)`. En rem, el rail baja bajo el tablero cuando las 5 columnas no caben a su lado, y en modo TV (125 %) el punto de corte crece solo. | C1 |
| 3 | `css/app.css` | `@container page (45.0625rem–59rem)`: rail a 2 columnas con `#p-trat { grid-row: span 2 }` | M3 |
| 4 | `css/app.css` | `.row-state { white-space: nowrap }` | M1 |
| 5 | `css/app.css` y `js/app.js` (`renderSummary`) | Cada enlace del resumen con `nowrap`; espacios alrededor del separador "·" para que la línea pueda partirse entre cifras (sin ellos, el `nowrap` desbordaba a 375 px; detectado y corregido en la verificación); margen del separador reducido a `--space-1` | M2 |
| 6 | `css/app.css` (≤720 px) | `.summary { line-height: 2.75rem }`, `.summary a { padding-block: .75rem }`, `.done-group summary { padding-block: var(--space-3) }` | M2 |
| 7 | `css/app.css` | `h1, h2, h3 { text-wrap: balance }` | T1 |

## Verificación (después)

| Comprobación | Antes | Después |
|---|---|---|
| TV 1440: tablero `scrollWidth/clientWidth` | 1150 / 918 (Alta oculta) | 1378 / 1378 (5 columnas visibles) |
| Normal 1320: tablero | 920 / 902 | 1270 / 1270 (el rail baja) |
| Normal 1440: tablero / rail al lado | 1022 / 1022, sí | 1022 / 1022, sí (sin cambios) |
| 375: desbordamiento horizontal | no | no |
| 375: enlaces del resumen | 117×20, 111×20 | ≥ 44 px de alto (ya no salen como objetivos pequeños) |
| 375: "Hechas hoy" | 309×27 | 309×43 |
| 768: posición de Agenda | sola en la fila 2 | bajo Laboratorio (x 392, y 1532); página de 2273 → 2015 px |
| Encabezados equilibrados | 0 de 9 | 9 de 9 |
| Consola | — | 0 errores, 0 avisos |

Se revisaron las zonas tocadas a las tres anchuras: no quedan huecos, paneles vacíos ni restos de estilos. A 375 px el resumen ocupa ahora tres líneas más altas: es el precio de unos objetivos de 44 px, y se acepta.

## Capturas

| Vista | Antes | Después |
|---|---|---|
| 375 px | `before/dashboard-375.png` | `after/dashboard-375.png` |
| 768 px | `before/dashboard-768.png` | `after/dashboard-768.png` |
| 1440 px | `before/dashboard-1440.png` | `after/dashboard-1440.png` |
| Modo TV 1440 | `before/dashboard-tv-1440.png` | `after/dashboard-tv-1440.png` |
| Tema noche 1440 | `before/dashboard-dark-1440.png` | `after/dashboard-dark-1440.png` |
| Foco 1440 | `before/dashboard-focus-1440.png` | sin cambios (los estilos de foco no se tocaron) |

## Para `modern-design`

- **Paso 3 (componentes y maquetación):** T3, navegación por etapas en tableta; T5, si hace falta una vista de TV que incluya Tratamientos.
- **Paso 2 (color):** T4, decidir si "pendiente de revisar" debe usar el azul.
