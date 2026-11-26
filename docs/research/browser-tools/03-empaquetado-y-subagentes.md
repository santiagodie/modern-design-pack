# 03 · Empaquetar o detectar, y subagentes

Convenciones: ver `00-indice.md`.

## Cómo declara un plugin servidores MCP y cómo se llaman sus herramientas [comprobado en la documentación]

- "Plugins define MCP servers in `.mcp.json` at the plugin root or inline in `plugin.json`" ([mcp](https://code.claude.com/docs/en/mcp)). `mcpServers` en `plugin.json` también admite rutas a `.json`, paquetes `.mcpb` y URL ([plugins-reference](https://code.claude.com/docs/en/plugins-reference)).
- Arrancan solos al activar el plugin. El usuario puede desactivarlos en `/mcp`, pero no quitarlos sin desinstalar el plugin.
- Nombres: las herramientas de un servidor de plugin "include both the plugin name and the server key in their callable name", con la forma `mcp__plugin_<plugin-name>_<server-name>__<tool-name>` ([mcp](https://code.claude.com/docs/en/mcp)). Para nosotros sería `mcp__plugin_modern-design-pack_chrome-devtools__take_screenshot`. El de ECC aparece en esta sesión como `mcp__plugin_ecc_chrome-devtools__*` (33 herramientas) [comprobado].
- Variables útiles: `${CLAUDE_PLUGIN_ROOT}` y `${CLAUDE_PLUGIN_DATA}`, el directorio de estado persistente del plugin.

## Pregunta 6. Empaquetar o detectar

| Opción | A favor | En contra |
|---|---|---|
| **(a) No usarlo** | Nada nuevo que fijar, auditar ni explicar. El proceso actual ya está probado | Se quedan sin medir la CPU y red lentas y la traza con LCP y CLS. Lo demás (consola, red, oscuro) se puede medir con playwright-cli |
| **(b) Usarlo solo si el usuario ya lo tiene** | No instalamos nada | No controlamos la versión ni la privacidad: el de ECC instalado usa `@latest`, estadísticas y CrUX activados, ventana visible y perfil persistente. El nombre de las herramientas cambia según quién lo instaló (`mcp__chrome-devtools__*`, `mcp__plugin_ecc_chrome-devtools__*`, `mcp__plugin_chrome-devtools-mcp_chrome-devtools__*`). Los resultados no serían comparables entre usuarios. Habría que poner en la lista `tools` del revisor cada nombre posible |
| **(c) Incluirlo en el plugin, con versión fijada y privacidad apagada** | Controlamos versión y opciones; nombres de herramientas estables | El servidor arranca en **todas** las sesiones en que el plugin está activo, aunque nunca se revise nada. Con tool search, sus 11,7k tokens van diferidos; sin tool search, se pagan siempre. Si el usuario ya tiene ECC o el plugin oficial, habría **dos servidores**: dos Chrome, el doble de herramientas diferidas y nombres casi iguales que confunden al modelo. Sin `--isolated`, los dos usarían el mismo perfil persistente, que "solo puede usar un navegador a la vez" (`advanced-usage.md`). Además, el plugin cambia la configuración visible del usuario, que es justo lo que queremos evitar |
| **(c') CLI bajo demanda con `npx` y versión fijada** (variante propuesta, BT11) | Mismo patrón que `npx lighthouse@13.6.0`: nada permanente, opciones nuestras, cero definiciones en el contexto, sin conflicto con servidores ajenos (perfil aislado propio) | La primera vez descarga el paquete y necesita Chrome instalado. Hay que documentar los comandos en `visual-qa.md`. La salida de algunas herramientas es larga |
| **(d) Sustituir playwright-cli** | Una sola herramienta; scripts desde archivo | Reescribir un proceso probado; se pierden los presets de dispositivo; su Lighthouse no da rendimiento; depende del Chrome del sistema. No aporta nada que la opción (c') no dé |

**Caso de quien ya lo tiene por ECC u otro plugin.** Con (c) aparece el problema de los servidores duplicados descrito arriba. Con (c') no hay conflicto: la CLI arranca su propio proceso con perfil aislado, y el servidor del usuario sigue intacto, con sus opciones. Lo único que haría el plugin es avisar en el README de que ese servidor envía estadísticas si no se apagan (BT15).

**Propuesta:** (a) para lo que playwright-cli ya cubre, y (c') solo para la traza de rendimiento con CPU y red lentas.

## Pregunta 7. Subagentes

**`modern-design-pack:design-reviewer`** tiene `tools: Read, Glob, Grep, Bash, Write`.

- **Con la CLI (propuesta): no hay que cambiar nada.** Los comandos de CDT van por `Bash`, igual que playwright-cli y Lighthouse.
- **Con MCP no podría usarlo tal como está.** La documentación pone de ejemplo una lista `Read, Grep, Glob, Bash` y dice: "The subagent has no Edit, Write, or MCP tools" ([sub-agents](https://code.claude.com/docs/en/sub-agents)). Una lista `tools` explícita es una lista blanca.
- **Qué habría que cambiar con MCP:**
  - Añadir a `tools` las herramientas del servidor, una a una o con el comodín de servidor que da la documentación para servidores normales: "Give the subagent every tool from one server", con `mcp__github__*`. Para el nuestro sería `mcp__plugin_modern-design-pack_chrome-devtools__*`. **[no comprobado]** que ese comodín resuelva con el prefijo `plugin_`.
  - Para usar el servidor del usuario (opción b), habría que listar cada nombre posible. La documentación dice que el agente solo deja de lanzarse cuando ninguna entrada de `tools` resuelve, así que añadir entradas que no existen no lo rompe. Aun así, un nombre que no esté en la lista se pierde sin aviso.
  - Precedente en ECC: `gan-evaluator` es un agente de plugin que pone nombres `mcp__playwright__browser_*` en su lista `tools`.
- **`mcpServers` en el frontmatter no sirve.** "plugin subagents don't support the `hooks`, `mcpServers`, or `permissionMode` frontmatter fields" ([sub-agents](https://code.claude.com/docs/en/sub-agents)). La documentación remite al `.mcp.json` del plugin, que es la opción (c).
- **Quitar `tools` y usar `disallowedTools`** daría al revisor todos los MCP de la sesión del usuario (en esta máquina, decenas de conectores). Eso va contra el contexto limpio del revisor. Se rechaza.
- `design-writer` y `design-explorer` no necesitan navegador.
