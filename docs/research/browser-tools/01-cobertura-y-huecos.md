# 01 · Cobertura y huecos

Convenciones: ver `00-indice.md`. Probado con `chrome-devtools-mcp@1.13.0` (CLI) y la página de prueba descrita en el índice.

## Pregunta 1. Cobertura: qué mide hoy design-review y qué haría CDT

| Medición actual | Herramienta hoy | CDT | Comparación |
|---|---|---|---|
| Capturas a 375, 768 y 1024 con táctil y puntero grueso | `playwright-cli open --device 'iPhone 13 Mini'` / `'iPad Mini'` / `'iPad Mini landscape'`; hay que reabrir la sesión para cada preset | `emulate --viewport "375x812x3,mobile,touch"` en la misma sesión | **Igual en resultado [comprobado]**: con CDT, `matchMedia('(pointer: coarse)')` dio `true` y `innerWidth` 375. **Peor en ergonomía**: no hay presets con nombre y hay que escribir las medidas y el DPR. **Mejor** en que no hace falta reabrir. El agente de usuario solo cambia si se pasa `userAgent` |
| Captura a 1440 con ratón | `open` + `resize 1440 900` | `resize_page` o `emulate --viewport` | Igual |
| Movimiento reducido antes de capturar | `set-reduced-motion reduce` | `emulate --prefersReducedMotion reduce` | Igual, con una trampa: cada llamada a `emulate` **sustituye** toda la emulación anterior (`tool-reference.md`, `emulate`). Hay que pasar a la vez el viewport, el movimiento reducido y el esquema de color. Es fácil perder el movimiento reducido sin darse cuenta |
| Captura de página completa | `screenshot --full-page` | `take_screenshot --fullPage` | Igual [comprobado: PNG de 375 px guardado] |
| Scripts en la página (`scroll-check`, `page-checks`, `mobile-measurable`, `outdated-measurable`, `inventory`) | `playwright-cli --raw eval` con el contenido pegado mediante heredoc | `evaluate_script --sourcePath <archivo>` | **Mejor** en CDT: lee el archivo directamente, sin heredoc ni escapes [comprobado con `page-checks.js`: JSON correcto]. Necesita `--workspace` para leer fuera de la carpeta temporal |
| Pase de foco (Tab ×8 y captura) | `press Tab` | `press_key Tab` | Igual |
| Código fuente HTML | `--raw eval` con `outerHTML`, o WebFetch | `evaluate_script` | Igual |
| Lighthouse (4 categorías, móvil a unos 412 px) | `npx lighthouse@13.6.0` | `lighthouse_audit` (Lighthouse 13.6.0 incluido [comprobado en `report.json`]) | **Distinto**: CDT **excluye el rendimiento** y añade "Agentic Browsing". El rendimiento se mide aparte con `performance_start_trace`. Para nuestras cuatro puntuaciones, el comando actual es mejor. CDT tardó 6 s en modo navegación con una página mínima |
| Inventario antes y después (`inventory.js` + `inventory-diff.js` con Node) | `eval` + Node | `evaluate_script` + Node | Igual |
| Captura extra a 1920 (LA14) y móvil en horizontal | `resize` / preset `landscape` | `emulate --viewport "…,landscape"` | Igual |
| Consola | no se lee (el comando `console` existe pero no está en el proceso) | `list_console_messages` con trazas mapeadas a la fuente | Ver hueco H1 |

**Conclusión:** CDT no mide mejor nada de lo que ya hacemos, salvo que ejecuta scripts desde un archivo. Su ventaja está en lo que hoy no medimos.

## Pregunta 2. Huecos: qué podríamos medir y qué regla afecta

| # | Hueco | Herramienta | Regla afectada | Resultado de la prueba |
|---|---|---|---|---|
| H1 | Errores de consola | playwright-cli `console [min-level]` (existe; no ejecutado); CDT `list_console_messages` | **SF9** ya cita errores de consola al cargar. Lighthouse lo cubre en parte (`errors-in-console`), y solo cuando se ejecuta | **[comprobado, CDT]** Devolvió `[error] boom-test` y un 404 del favicon. Habrá ruido (favicon, analítica, extensiones): la regla tendrá que decir qué cuenta como hallazgo |
| H2 | Peticiones de red al enviar un formulario | playwright-cli `requests` y `route` (no ejecutados); CDT `list_network_requests` | **SF10** (Floor). Hoy es `measured` en código y `judgment` cuando solo se lee el script servido | **[comprobado, CDT]** Tras `fill` y `click`, la página mostró "Sent" y la única petición fue `GET /page [304]`. Es la señal exacta de SF10. Solo en proyecto propio y con las salidas bloqueadas (ver "Riesgos de la fase B" en el índice). En auditorías por URL no se envía nada |
| H3 | Modo oscuro emulado | playwright-cli `set-color-scheme dark` (existe; no ejecutado); CDT `emulate --colorScheme dark` | Tokens de color oscuro de `modern-design` y la familia CO (contraste y paletas) | **[comprobado, CDT]** Fondo `rgb(17, 17, 17)` y captura en oscuro. Solo tiene sentido cuando el CSS declara `prefers-color-scheme` o el brief pide modo oscuro |
| H4 | CPU y red lentas | Solo CDT: `emulate --cpuThrottlingRate 4 --networkConditions "Slow 4G"`. playwright-cli solo tiene `network-state-set` online/offline, sin CPU [comprobado en `--help`]. Con `run-code` y una sesión CDP quizá se podría [no comprobado] | `implementation.md` (rendimiento), OM; "performance on a mid-range phone" en "Needs a real device" de `visual-qa.md` | **[comprobado, CDT]** Funciona. Da una aproximación de laboratorio; el elemento sigue en "Needs a real device" |
| H5 | Árbol de accesibilidad | playwright-cli `snapshot`; CDT `take_snapshot` (con `--verbose` para todo el árbol) | Futura `accessibility-review`. Hoy `inventory.js` lee los landmarks y las etiquetas de los campos desde el DOM, no desde el árbol | **[comprobado, CDT]** Lista `heading "Test" level="1"`, `form`, `textbox` sin nombre y `button "Send"`. El campo sin nombre es justo lo que señaló Lighthouse (`label`) |
| H6 | Trazas de rendimiento con Core Web Vitals | Solo CDT: `performance_start_trace --reload --autoStop` y `performance_analyze_insight` | `implementation.md` (LCP, CLS, INP), OM | **[comprobado, CDT]** LCP 929 ms con desglose (TTFB 587 ms, retraso de renderizado 341 ms) y CLS 0,00. La parte de campo (CrUX) salió "n/a" porque estaba apagada. INP no aparece sin interacción. La salida incluye un bloque largo que explica el formato del árbol de llamadas: conviene guardar la traza en un archivo y leer solo el resumen |
| H7 | WebMCP y agentic browsing | CDT `lighthouse_audit` (categoría `agentic-browsing`); las herramientas `list_webmcp_tools` y `execute_webmcp_tool` requieren `--categoryExperimentalWebmcp` y Chrome 150+ con `--enable-features=WebMCP` (`configuration.md`); playwright-cli `webmcp-list` / `webmcp-call` | Futura `seo-geo-optimizer` | **[comprobado, CDT]** Puntuación 50; auditorías `agent-accessibility-tree` (falló por el campo sin etiqueta), `webmcp-form-coverage`, `webmcp-registered-tools`, `webmcp-schema-validity`, `cumulative-layout-shift`, `llms-txt` y `ard-schema` (sin puntuación en esta página). `webmcp-list` de playwright-cli no se probó |

**Más huecos vistos, no pedidos:**

- `forced-colors` y `prefers-contrast` (playwright-cli y CDT): para `accessibility-review` (BT4).
- `get_css_styles` (CDT) da la cascada con el valor resuelto de cada `var()`. Serviría para comprobar si los tokens del brief llegan al CSS final. Queda como idea, sin decisión.
- `--blockedUrlPattern` / `--allowedUrlPattern` (CDT) limitan la red a ciertos orígenes. Es otra forma de bloquear las salidas del envío de prueba de SF10 [no comprobado].
