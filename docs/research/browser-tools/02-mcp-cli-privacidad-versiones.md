# 02 · MCP o CLI, privacidad y versiones

Convenciones: ver `00-indice.md`.

## Pregunta 3. MCP o CLI

### Coste de contexto [comprobado]

**Método.** Se ejecutó `claude -p "/context"` desde una carpeta temporal fuera del repo, con `--strict-mcp-config --mcp-config <archivo>`, para que solo cargara el servidor de prueba (`chrome-devtools-mcp@1.13.0`, con nombre `cd`). Cada configuración se midió con tool search activado (por defecto) y desactivado (`ENABLE_TOOL_SEARCH=false`). En Git Bash hace falta `MSYS_NO_PATHCONV=1`: sin esa variable, `/context` se convierte en una ruta de Windows. Los plugins del usuario (ECC y otros) siguieron cargados, pero suman lo mismo en todas las filas.

| Configuración | Herramientas | Tool search activado: total | Fila MCP | Tool search desactivado: total | Fila MCP |
|---|---|---|---|---|---|
| Sin servidor | 0 | 25,2k | — | 41,7k | — |
| Completo | 33 | 25,2k | 11,7k diferidos | 53,4k | 11,7k |
| `--slim` | 3 (`navigate`, `evaluate`, `screenshot`) | 25,2k | 198 diferidos | 41,9k | 198 |
| Sin input, memoria, red ni rendimiento | 18 | 25,2k | 7k diferidos | 48,7k | 7k |

- **Con tool search, el coste inicial es cero.** Las definiciones quedan diferidas y solo se cargan las que Claude busca. La documentación lo dice así: "Tool search keeps MCP context usage low by deferring tool definitions" y "Tool search is enabled by default" ([mcp](https://code.claude.com/docs/en/mcp)).
- **Sin tool search** (proveedores que no lo admiten, o `ENABLE_TOOL_SEARCH=false`), el servidor completo suma 11,7k tokens en cada sesión, aunque no se use. Las herramientas más caras son `emulate` (926), `set_logpoints` (803), `evaluate_script` (769) y `list_console_messages` (588).
- `--slim` no sirve para nosotros: no emula viewport, táctil, esquema de color ni movimiento reducido.
- **La CLI añade cero definiciones.** Solo entra en el contexto lo que se imprime. Algunas salidas son largas: la de la traza de rendimiento explica el formato del árbol de llamadas, así que conviene escribirla en un archivo y leer el resumen.
- El aviso del README de ECC ("~70k" de una ventana de 200k con todos los MCP) no refleja tool search: es anterior o supone que está desactivado.

### Qué permite la CLI de CDT sin MCP [comprobado salvo indicación]

- Se instala con `chrome-devtools-mcp` y se llama `chrome-devtools`. Es un cliente de un proceso de fondo: en Windows usa tuberías con nombre (`docs/cli.md`).
- Admite todas las herramientas, también las que en MCP necesitan una opción, salvo `wait_for` y `fill_form`, que no se generan (`docs/cli.md`). Ejemplos: `chrome-devtools <herramienta> <pageId> [args] [--opciones]`; `--output-format=json` para leer la salida desde un script.
- **Por defecto es headless y usa un perfil aislado**: `start --help` muestra `--headless [default: true]` e `--isolated [default: true unless userDataDir…]`. En MCP los dos vienen desactivados.
- **Por defecto tiene acceso ilimitado al sistema de archivos** (`docs/cli.md`). Hay que limitarlo con `--workspace=<carpeta>`; en la prueba se limitó a la carpeta temporal.
- El proceso de fondo vive hasta `chrome-devtools stop` o hasta `--idleTimeout`. Mantiene las páginas abiertas y las cookies entre llamadas.
- Tiempos en esta máquina, con el paquete ya en caché: `start` 1,6 s; primera navegación 5,1 s (incluye arrancar Chrome); traza con recarga, 4× CPU y Slow 4G, 10 s; Lighthouse en modo navegación, 6 s.
- Mensaje de aviso al arrancar: la herramienta expone el contenido del navegador al cliente.

### Cuál encaja con cómo usamos playwright-cli

La CLI. El proceso de `visual-qa.md` ya está construido sobre comandos de shell con `Bash`, guarda archivos en la carpeta de la auditoría y no ocupa contexto con definiciones. La CLI de CDT encaja igual: el agente `design-reviewer` la usaría sin cambiar su lista `tools` (ver `03-empaquetado-y-subagentes.md`). El MCP no aporta ninguna medición que la CLI no tenga. Añade un servidor que arranca en cada sesión, opciones que fija quien lo configura y nombres de herramientas que dependen de quién lo instaló.

## Pregunta 4. Privacidad y seguridad

| Punto | Por defecto | Cómo se apaga | Qué haría el plugin |
|---|---|---|---|
| Estadísticas de uso para Google (éxito, latencia, entorno) | **activadas** (README, "Usage statistics") | `--no-usage-statistics`, o las variables `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` o `CI` [comprobado en `src/config/ServerConfig.ts`] | Pasar siempre la opción y la variable |
| Envío de las URL de las trazas a la API de CrUX | **activado** (README; `--performanceCrux` con valor por defecto `true`) | `--no-performance-crux` [comprobado en el código: `populateCruxData` solo se llama si `isCruxEnabled()`] | Apagarlo siempre. En proyecto propio la URL es local; en auditorías por URL revela a Google qué sitio se audita |
| Comprobación de actualizaciones en npm | **activada** | Solo con la variable `CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS` [comprobado en `src/utils/check-for-updates.ts`]; no hay opción de línea de comandos | Poner la variable. Con versión fijada, el aviso no sirve |
| Perfil del navegador | MCP: perfil persistente en `%USERPROFILE%\.cache\chrome-devtools-mcp\chrome-profile`, reutilizado entre ejecuciones y usable por un solo navegador a la vez (`advanced-usage.md`). CLI: aislado | `--isolated` (MCP) | Siempre aislado: las cookies de una auditoría no pasan a la siguiente |
| Ventana visible | MCP: visible (`--headless` con valor por defecto `false`). CLI: headless | `--headless` | Siempre headless |
| Cabeceras sensibles (Cookie, Set-Cookie, Authorization) | se devuelven (`--redactNetworkHeaders` con valor por defecto `false`; `get_network_request` está pensado para leer cookies) | `--redact-network-headers` | Activarla |
| Archivos locales | MCP: limitado a la carpeta temporal si el cliente no negocia "roots". CLI: sin límite | `--workspace=<carpeta>` | Limitarlo a la carpeta de la auditoría |
| Conectarse al Chrome del usuario | apagado | no usar `--autoConnect` ni `--browserUrl` | Nunca: con `--autoConnect`, el servidor accede a todas las ventanas abiertas del perfil (`advanced-usage.md`) |
| Archivo de configuración descubierto | se lee `%LOCALAPPDATA%/Google/cd4a/config.json` si existe (`configuration.md`) | `CHROME_DEVTOOLS_MCP_NO_CONFIG_DISCOVERY` | Las opciones de la línea de comandos tienen prioridad sobre el archivo. Mencionarlo en el informe solo si cambia algo que no fijamos |
| JavaScript del llamante | activado | `--no-javascript-evaluation` | No se puede apagar: lo necesitan nuestros scripts |

**Qué datos del navegador quedan expuestos.** Todo lo que haya en esa instancia: DOM, consola, red con sus cuerpos de respuesta, almacenamiento y capturas. Con perfil aislado y headless, eso se reduce a lo que carga la auditoría. Con el perfil persistente que usa el MCP por defecto (y el de ECC instalado), las cookies y el almacenamiento se acumulan entre sesiones y sitios.

**Claude in Chrome** ([chrome](https://code.claude.com/docs/en/chrome)) es otra cosa: Claude Code se conecta a la extensión del navegador del usuario.

- Claude "shares your browser's login state".
- Las acciones se ven en una ventana real.
- Requiere iniciar sesión con `/login` en un plan directo de Anthropic. Con una clave de API o un token largo se queda apagado.
- No está disponible en WSL, con proveedores externos ni con retención cero de datos.
- "a project can't turn on Claude in Chrome".
- La misma página avisa: "Enabling Chrome by default increases context usage".

Para una auditoría eso es lo contrario de lo que queremos: entraría la sesión iniciada del usuario y no habría aislamiento. Se rechaza (BT13).

**Qué diría el plugin.** Una línea en la cabecera del informe con la herramienta, la versión y "estadísticas, CrUX y actualizaciones apagadas, perfil aislado". En el README, una nota para quien ya tenga CDT por ECC u otro plugin: qué opciones apagan cada envío, y que nuestras skills no usan ese servidor (BT15).

## Pregunta 5. Versiones y Windows

### Versiones [comprobado con `npm view … time` el 2026-11-26]

| Paquete | La que usamos | Más reciente | Más reciente con 14 días o más | Decisión |
|---|---|---|---|---|
| `chrome-devtools-mcp` | — | 1.14.0 (2026-11-24, 2 días) | **1.13.0** (2026-11-11, 15 días) | Fijar `1.13.0` si se adopta BT11 |
| `@playwright/cli` | 0.1.25 (2026-11-18, 8 días) | 0.1.25 | 0.1.24 (2026-11-10, 16 días) | Se mantiene 0.1.25: ya estaba en uso y cumple el 2026-12-02, antes de la fase B. La regla de 14 días se aplica desde ahora a cada subida |
| Lighthouse | 13.6.0 | — | — | CDT 1.13.0 trae Lighthouse 13.6.0: la misma versión [comprobado en `report.json`] |

- CDT pide Node LTS, Chrome estable o más reciente y npm (README). Usa el Chrome instalado, no descarga uno propio como playwright-cli.
- El plugin oficial de CDT fija su propia versión (`chrome-devtools-mcp@1.14.0`) e instala en `--prefix ${CLAUDE_PLUGIN_DATA}` (su `.claude-plugin/plugin.json`).
- ECC instalado (2.2.1) usa `chrome-devtools-mcp@latest`. Su repositorio fija `1.10.1` desde el commit `62bf2b29`.

### Windows

- **[comprobado]** La CLI funciona en Windows 11 desde Git Bash: tubería con nombre, Chrome headless, capturas, trazas y Lighthouse. Se usaron rutas Windows (`pwd -W`) en `--workspace`, `--filePath`, `--sourcePath` y `--outputDirPath`. Las rutas POSIX no se probaron.
- **[comprobado]** El MCP lanzado con `"command": "npx"` conectó desde `claude -p` en Windows 11: `/context` listó sus 33 herramientas.
- **[no comprobado]** En Windows 10, el troubleshooting de CDT documenta un error de conexión con `npx` que se resuelve con `cmd /c npx …` o con la ruta absoluta de `npx`.
- **[comprobado en el texto]** Git Bash convierte en rutas los argumentos que empiezan por `/` (`MSYS_NO_PATHCONV=1` lo evita). Afecta a comandos como `/context`; las URL con `http://` no se ven afectadas.
- **Sandbox [no comprobado en Windows]**: según el troubleshooting de CDT, con sandbox del sistema (Seatbelt en macOS, contenedores en Linux) Chrome no puede arrancar; la alternativa es conectarse a un Chrome lanzado fuera. No dice nada de Windows y no se probó con el sandbox de Claude Code.
- WSL: CDT necesita Chrome instalado dentro de Linux (troubleshooting). Claude in Chrome no funciona en WSL.
- Tiempo de arranque: ver la pregunta 3 (1,6 s + 5,1 s en la primera navegación).
