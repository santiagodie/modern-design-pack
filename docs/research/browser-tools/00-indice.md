# Herramientas de navegador y ECC: índice, decisiones y propuesta

Fase A, solo investigación (2026-11-26). No cambia nada de `skills/`, `agents/` ni la configuración del plugin. La fase B se decide después de la prueba no-invention 3.

**Convenciones.** **[comprobado]**: medido en esta máquina o leído en la fuente, con cita o archivo. **[no comprobado]**: deducido o documentado por terceros sin prueba nuestra. Las citas literales de la documentación de Claude Code están en inglés, tienen menos de 15 palabras y enlazan a su página. Las demás fuentes se resumen con nuestras palabras. "CDT" = Chrome DevTools for agents (`chrome-devtools-mcp`). "dr:" = `skills/design-review/references/`.

**Entorno de las pruebas.** Windows 11 Pro 10.0.26100, Git Bash y PowerShell 5.1, Node v24.22.0, Claude Code 2.1.332, modelo claude-opus-5-5 (ventana de 1M). Pruebas en carpetas temporales fuera del repo, con una página de prueba propia servida con `serve@14.2.8` en 127.0.0.1. Al terminar se cerraron el servidor y el navegador, y se comprobó que el puerto quedaba libre.

## Archivos

| Archivo | Contenido |
|---|---|
| `00-indice.md` | Este archivo: fuentes, tabla de decisiones BT, propuesta, riesgos de la fase B, otros MCP candidatos, lo no comprobado |
| `01-cobertura-y-huecos.md` | Preguntas 1 (cobertura) y 2 (huecos) |
| `02-mcp-cli-privacidad-versiones.md` | Preguntas 3 (MCP o CLI, con medición de contexto), 4 (privacidad y seguridad) y 5 (versiones y Windows) |
| `03-empaquetado-y-subagentes.md` | Preguntas 6 (empaquetar o detectar) y 7 (subagentes) |
| `04-ecc.md` | Pregunta 8: inventario de ECC (E1…) |

## Fuentes

| Fuente | URL | Versión o commit | Licencia | Cómo se leyó |
|---|---|---|---|---|
| chrome-devtools-mcp (Chrome DevTools for agents) | https://github.com/ChromeDevTools/chrome-devtools-mcp | commit `9a83b1b36a96075c8fa86f7637f5b338bc629c0c` (2026-11-26), `package.json` 1.14.0; probada la 1.13.0 de npm | Apache-2.0 (`LICENSE`) | Clonado en `../_sources/chrome-devtools-mcp`. Leídos enteros: README, `docs/tool-reference.md`, `docs/slim-tool-reference.md`, `docs/cli.md`, `docs/configuration.md`, `docs/design-principles.md`, `LICENSE`. Leídas también las secciones de Windows y Claude Code de `troubleshooting.md`, `advanced-usage.md` y `client-configurations.md`. Para los interruptores de privacidad se revisaron `src/tools/performance.ts`, `src/utils/check-for-updates.ts` y `src/config/ServerConfig.ts` |
| ECC (antes everything-claude-code) | https://github.com/affaan-m/ECC | commit `4adeee6732a12d1540f49a4d50a38ce8c97f9a53` (2026-11-19), versión 2.2.3; instalada aquí la 2.2.1 (commit `5064474d`) | MIT, "Copyright (c) 2026 Affaan Mustafa" | Repositorio canónico comprobado con la API de GitHub: `affaan-m/everything-claude-code` responde como `affaan-m/ECC`, no es un fork. Clonado en `../_sources/ecc`. Detalle en `04-ecc.md` |
| Documentación de Claude Code | https://code.claude.com/docs/en/mcp · /plugins-reference · /sub-agents · /chrome | descargada el 2026-11-26 (versión `.md` de cada página) | Documentación de Anthropic sin licencia de reutilización declarada en la página: solo citas cortas | Descargada con `curl` en una carpeta temporal, sin subagente |
| Playwright agent CLI (`@playwright/cli`) | https://playwright.dev/agent-cli | 0.1.25 (la nuestra) y 0.1.24 | Apache-2.0 (metadatos de npm; `LICENSE` no leído) | `npm view` y `playwright-cli --help` de la 0.1.25 instalada |

## Tabla de decisiones

Formato de `knowledge-audit/13-review-method.md` (tabla de Hallmark): adoptar, adaptar, rechazar, enlazar. La "sección 21" que pedía el encargo no existe en `docs/ARCHITECTURE.md` ni en `docs/research/`, así que se usa este formato.

| ID | Idea | Herramienta | Regla nuestra | Decisión | Motivo |
|---|---|---|---|---|---|
| BT1 | Leer los errores de consola al cargar, en cada ancho | `playwright-cli console` (ya instalada); CDT `list_console_messages` | SF9 (su "Look for" ya pide errores de consola, pero `visual-qa.md` no tiene ningún paso que los lea) | **adoptar** | Cierra el hueco de una regla que ya existe, sin dependencia nueva. Probado con CDT; el comando de playwright-cli aparece en `--help` pero no se ejecutó |
| BT2 | Comprobar si un envío de formulario sale a la red | `playwright-cli route` + `requests` en el servidor local; CDT `list_network_requests` | SF10, Floor; solo en proyecto propio | **adaptar** | Pasa SF10 de leer código a `measured`. Probado con CDT: la página dijo "Sent" y la única petición fue el GET de carga. El envío de prueba bloquea las peticiones salientes (ver "Riesgos de la fase B"). En auditorías por URL sigue prohibido enviar |
| BT3 | Captura en modo oscuro cuando el sitio declara `prefers-color-scheme: dark` | `playwright-cli set-color-scheme dark`; CDT `emulate colorScheme` | tokens de color oscuro (`modern-design`), CO | **adoptar** | Hoy solo se revisa el tema claro. Probado con CDT: fondo `rgb(17, 17, 17)` con el oscuro emulado |
| BT4 | Emular `forced-colors` y `prefers-contrast` | `playwright-cli set-forced-colors` / `set-contrast`; CDT `emulate` | futura `accessibility-review` | **enlazar** (aplazar) | Pertenece a la rama de accesibilidad de `knowledge-audit` |
| BT5 | CPU y red lentas con traza de rendimiento (LCP, CLS y desglose) | Solo CDT: `emulate cpuThrottlingRate` y `networkConditions`, `performance_start_trace` | `implementation.md` (rendimiento), OM, "Needs a real device" | **adaptar** como paso opcional | playwright-cli no lo permite: solo tiene `network-state-set` online/offline. Probado con 4× CPU y Slow 4G: traza en 10 s, LCP 929 ms con desglose. No sustituye a un móvil real |
| BT6 | Categoría Lighthouse "Agentic Browsing" y herramientas WebMCP | CDT `lighthouse_audit` (incluye Lighthouse 13.6.0); `playwright-cli webmcp-list` | futura `seo-geo-optimizer` | **enlazar** (aplazar) | Probado: auditorías `agent-accessibility-tree`, `webmcp-*`, `llms-txt`, `ard-schema`. Sirve para esa skill, no para la revisión de diseño |
| BT7 | Ejecutar nuestros scripts desde un archivo | CDT `evaluate_script --sourcePath` | `visual-qa.md` "How to run the scripts" | **rechazar** por ahora | Evita el heredoc (probado con `page-checks.js`), pero solo compensa si se cambia de herramienta (BT8) |
| BT8 | Sustituir playwright-cli por CDT | CDT CLI o MCP | todo `visual-qa.md` | **rechazar** | Da el mismo resultado en capturas, scripts e inventario; obliga a reescribir un proceso ya probado y se pierden los presets de dispositivo. Su Lighthouse no mide rendimiento |
| BT9 | Incluir el servidor MCP en el plugin | `.mcp.json` del plugin | configuración del plugin | **rechazar** | Arrancaría en todas las sesiones, duplicaría el de ECC o el del plugin oficial y fijaría opciones que el usuario no ve. Ver `03-empaquetado-y-subagentes.md` |
| BT10 | Usar el servidor MCP del usuario si ya lo tiene | `mcp__*chrome-devtools*` de otro plugin | — | **rechazar** como camino por defecto | No controlamos sus opciones: el de ECC instalado usa `@latest`, estadísticas activadas, CrUX activado y perfil persistente |
| BT11 | CDT CLI bajo demanda con versión fijada y privacidad apagada | `npx` con `chrome-devtools-mcp@1.13.0`, como ya se hace con Lighthouse | `visual-qa.md`, `SKILL.md` de `design-review` | **adoptar** (propuesta), solo para BT5 | Mismo patrón que `lighthouse@13.6.0`: no se instala nada de forma permanente, las opciones son nuestras y no añade definiciones de herramientas al contexto |
| BT12 | Cambiar la lista `tools` de `design-reviewer` | — | `agents/design-reviewer.md` | **rechazar** | Con la CLI basta `Bash`, que ya tiene. Solo haría falta con MCP (BT9, BT10) |
| BT13 | Claude in Chrome para revisar | extensión + `claude --chrome` | modo URL, privacidad | **rechazar** | Comparte la sesión iniciada del navegador del usuario, la ventana es visible y no se puede activar desde un proyecto. Ver pregunta 4 |
| BT14 | Versión fijada de playwright-cli | `@playwright/cli@0.1.25` | `visual-qa.md`, regla de 14 días | **decidido:** se mantiene 0.1.25 | Ya estaba en uso. Salió el 2026-11-18 y cumple 14 días el 2026-12-02, antes de la fase B. La regla de 14 días se aplica desde ahora a cada subida de versión |
| BT15 | Nota de privacidad para quien ya tenga CDT por ECC u otro plugin | README | README | **adaptar** | Explicar qué opciones apagan el envío de datos y que nuestra skill no usa ese servidor |
| BT16 | Licencia de Playwright CLI en `docs/SOURCES.md` | — | `docs/SOURCES.md` | **adoptar** | Pasa de "TO VERIFY" a Apache-2.0 (npm); falta leer su `LICENSE` |

Las ideas que vienen de ECC llevan su propio ID (E1…) en `04-ecc.md`.

## Propuesta

**Propuesta, pendiente de revisión.**

1. **Base: seguir con playwright-cli** (opción a, ampliada). Añadir a `visual-qa.md` tres pasos con comandos que ya tenemos: consola (BT1), red tras un envío de prueba en proyecto propio (BT2) y una captura en oscuro cuando el sitio lo declara (BT3). Antes hay que ejecutar esos comandos en una prueba, porque aquí solo se probó su equivalente en CDT.
2. **CDT solo como CLI bajo demanda** (BT11), para la traza de rendimiento con CPU y red lentas (BT5). Se trata como Lighthouse: es opcional, usa la versión exacta (`1.13.0`) y se lanza siempre con `--no-usage-statistics`, `--no-performance-crux`, `--redact-network-headers` y `--workspace=<carpeta de la auditoría>`, sin perfil persistente, en modo headless y con `CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS=1`. Si falla o no hay Chrome, se dice en el informe y se sigue.
3. **Ningún servidor MCP en el plugin** (BT9) y ningún uso del servidor del usuario (BT10). `design-reviewer` no cambia (BT12).
4. **ECC:** no se copia nada. Se adaptan dos ideas con nuestras palabras (E1, E4): lo que no se pudo probar se marca "no probado", no "no aplica", y sin línea base no hay aprobado. El resto se rechaza (ver `04-ecc.md`).
5. **WebMCP, agentic browsing y la emulación de accesibilidad** quedan enlazados para `seo-geo-optimizer` y `accessibility-review` (BT4, BT6).
6. **Versiones:** se mantiene `@playwright/cli@0.1.25` (BT14). `chrome-devtools-mcp@1.13.0` salió el 2026-11-11 y hoy tiene 15 días, así que cumple la regla **[comprobado, `npm view chrome-devtools-mcp time`]**. La 1.14.0 (2026-11-24) todavía no la cumple.

## Riesgos de la fase B

- **El envío de prueba de SF10 puede llegar a un servicio real.** En proyecto propio, el formulario puede estar conectado a un CRM, a un servicio de correo o a un pago, incluso en local. Antes de enviar hay que bloquear todas las peticiones salientes (`playwright-cli route <patrón>` con abort, o el equivalente de la herramienta) y registrar solo el intento: método, URL de destino y que hubo petición, sin cuerpo ni cabeceras. Sin ese bloqueo, el paso no se ejecuta y SF10 se juzga leyendo el código, como hoy. Falta comprobar que `route` de playwright-cli aborta peticiones a otros orígenes y que `requests` sigue mostrando el intento bloqueado.
- **Consola y red introducen texto de la página en el contexto.** Los mensajes de consola y las URL los escribe el sitio. Se tratan como datos (`review-method.md` §10), igual que el HTML.
- **CrUX envía a Google la URL auditada.** Se apaga siempre. Si un día se quiere el dato de campo de una URL pública, se pide permiso al usuario antes.
- **La traza con CPU y red lentas es de laboratorio.** Los "needs a real device" siguen en el informe.
- **`npx` descarga el paquete la primera vez.** En una red cerrada o sin Chrome, el paso opcional falla y se anota.

## Otros MCP candidatos (sin estudiar)

**Propuesta no verificada.** Esta clasificación se basa en la lista que dio el usuario. No se ha leído la documentación ni la licencia de ninguno, y sus comandos de instalación pueden haber cambiado. Cada uno se estudia aparte antes de mencionarlo en una skill.

| Servidor | Para qué | Clasificación preliminar | Motivo |
|---|---|---|---|
| Figma Dev Mode MCP (servidor remoto de Figma) | Leer los tokens, variables y componentes que el usuario ya tiene en Figma | **estudiar** | Encaja con "el contexto manda": parte de decisiones reales del usuario en lugar de inventarlas. Requiere un plan de pago de Figma; revisar qué datos salen y cómo se autentica |
| Context7 | Documentación al día de librerías (Motion, GSAP, Tailwind…) | **estudiar** | Puede evitar API desfasadas en `implementation.md` y `motion.md`. Revisar privacidad: qué consultas y qué código se envían a su servicio |
| shadcn MCP | Buscar e instalar componentes de registros shadcn | **enlazar** | Solo cuando el proyecto ya usa shadcn; nunca como punto de partida del diseño |
| Framer MCP | Trabajar con proyectos de Framer | **enlazar** | Solo cuando el usuario diseña en Framer |
| Magic UI MCP | Componentes animados React + Tailwind | **rechazar** | Componentes genéricos de catálogo: van contra la anti-convergencia |
| 21st.dev Magic MCP | Secciones de landing generadas desde un catálogo | **rechazar** | Anti-convergencia, componentes genéricos y clave de pago |
| AI Canvas | Componentes React animados, experimental | **rechazar** | Anti-convergencia y componentes genéricos; experimental |
| Playwright MCP | El agente abre la página y la revisa con capturas | **rechazar** | Duplica playwright-cli, que ya usamos sin coste de contexto |

**En ningún caso el plugin instala servidores en la configuración del usuario.** Como mucho, una skill o el README explica qué servidor existe y cómo lo instalaría el propio usuario.

## Qué no se comprobó

- `playwright-cli console`, `requests`, `route` y `set-color-scheme`: aparecen en el `--help` de la 0.1.25, pero no se ejecutaron. Todo lo de BT1 a BT3 se probó con CDT.
- El modo MCP de CDT dentro de un plugin: solo se midió su coste de contexto con `--mcp-config`. No se probó si un comodín `mcp__plugin_<plugin>_<servidor>__*` resuelve en la lista `tools` de un agente de plugin.
- Que `--no-performance-crux` evite el envío: se vio en el código (`src/tools/performance.ts`, `isCruxEnabled()`), no en una captura de red.
- INP: necesita interacción y no se midió.
- Si el Lighthouse 13.6.0 independiente (`npx lighthouse@13.6.0`) incluye también la categoría "Agentic Browsing". Solo se vio a través de CDT.
- Windows 10 (la nota de `cmd /c` del troubleshooting de CDT), el sandbox de Claude Code en Windows y las rutas POSIX de Git Bash en `--filePath` (se usaron rutas Windows).
- Las diferencias entre ECC 2.2.1 instalado y 2.2.3: siete archivos relevantes difieren (`frontend-design-direction` en 79 líneas). El inventario se basa en la 2.2.3.
- La licencia de Playwright CLI se tomó de npm, sin leer su `LICENSE`.
- Todos los servidores de "Otros MCP candidatos".
