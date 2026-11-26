# 04 · ECC: inventario

Convenciones: ver `00-indice.md`.

**Fuente.** https://github.com/affaan-m/ECC, commit `4adeee6732a12d1540f49a4d50a38ce8c97f9a53` (2026-11-19), versión 2.2.3. Licencia MIT, "Copyright (c) 2026 Affaan Mustafa". El nombre antiguo, `affaan-m/everything-claude-code`, redirige a este repositorio, que no es un fork [comprobado con la API de GitHub el 2026-11-26]. Clonado en `../_sources/ecc` (fuera del repo).

**Instalada aquí:** 2.2.1 (commit `5064474d`, instalada el 2026-09-09). Siete archivos relevantes difieren de la 2.2.3: `browser-qa` (4 líneas), `canary-watch` (2), `frontend-design-direction` (79), `design-system` (2), `gan-evaluator` (2), `e2e-runner` (25) y `.mcp.json` (2). El inventario se basa en la 2.2.3.

Resúmenes con nuestras palabras; no hay citas literales. Rutas relativas a la raíz de ECC.

## Configuración MCP y ahorro de contexto

- `.mcp.json` (lo que arranca el plugin): un solo servidor, `chrome-devtools`. La 2.2.1 instalada usa `chrome-devtools-mcp@latest`; el repositorio fija `1.10.1` desde el commit `62bf2b29` (2026-09-23). Ninguna de las dos pasa opciones de privacidad, headless ni perfil aislado.
- `mcp-configs/mcp-servers.json`: catálogo de referencia que el usuario copia a mano. Navegador: `@playwright/mcp` sin versión, Browserbase y browser-use (en la nube, con clave).
- README, "Context window management": recomienda no activar todos los MCP a la vez (menos de 10 por proyecto y 80 herramientas), desactivar los que no se usan en `/mcp`, y la variable `ECC_DISABLED_MCPS` para filtrar sus configuraciones al instalar. La cifra de "~70k" de 200k no tiene en cuenta tool search (ver `02-mcp-cli-privacidad-versiones.md`).

## Inventario

| ID | Elemento | Qué es | Licencia | Decisión | Motivo |
|---|---|---|---|---|---|
| E1 | `skills/browser-qa` | Verificación tras desplegar en cuatro fases: humo (consola, 4xx/5xx, capturas, CWV con umbrales fijos), interacción (enlaces, formularios válidos e inválidos, login), regresión visual a 375, 768 y 1440 contra capturas base, y accesibilidad con axe-core. Acaba con un veredicto SHIP / DO NOT SHIP | MIT | **adaptar** dos ideas; **rechazar** el resto | Ideas útiles: sin línea base, el resultado es "no concluyente", nunca un aprobado (encaja con `regression-check.md`); y un pase automático de accesibilidad es necesario pero no suficiente. Se rechazan el veredicto con umbrales fijos (contra "haz X cuando Y"), enviar formularios con datos válidos (choca con el modo URL de solo lectura y con el riesgo de SF10) y preferir el Chrome del usuario con su sesión (BT13) |
| E2 | `skills/canary-watch` | Vigilancia periódica de una URL tras desplegar: estado HTTP, consola, red, CWV contra una base, avisos por notificación o webhook, registro en `~/.claude` | MIT | **rechazar** | Fuera de alcance (operaciones, no diseño). Escribe fuera del proyecto y usa umbrales fijos |
| E3 | `.mcp.json` (chrome-devtools) | Servidor MCP de CDT incluido en el plugin | MIT | **rechazar** como modelo | Sin privacidad ni aislamiento, y `@latest` en la versión instalada. Es el caso de servidor duplicado de la opción (c) |
| E4 | `skills/frontend-design-direction` | Dirección de diseño "propia de ECC" con un contrato de evidencias: superficie, tarea, acción principal, viewports y la referencia que justifica cada decisión. Pide estados (cargando, vacío, error, parcial, éxito, permiso) con su disparador y la siguiente acción. Tiene una "puerta" que exige revisar en el navegador y un script `scripts/check-evidence.js` que valida el registro JSON | MIT | **adaptar** una idea; **rechazar** el resto | Idea útil: cuando no se pudo acceder a un estado, se marca "no probado", no "no aplica". Encaja con `content-truth.md` y con "measured"/"judgment". Se rechaza la dirección de diseño (anti-convergencia: es una dirección de casa) y el formato JSON con su comprobador (ya tenemos `site-decisions.md` y las notas de revisión). Es el archivo que más cambió entre la 2.2.1 y la 2.2.3 |
| E5 | `skills/design-system` (modo 3) | Lista de "AI slop": degradados, morado a azul, glassmorphism, esquinas redondeadas, animaciones de scroll, hero centrado, tipografía sin personalidad | MIT | **rechazar** | Son prohibiciones sin "Fine when", contrarias a "el contexto manda". Nuestras listas `unslop-*` ya cubren cada punto con su excepción |
| E6 | `agents/gan-evaluator` | Evaluador que prueba la app con Playwright MCP, puntúa con una rúbrica y aprueba desde 7,0, con la consigna de ser muy estricto | MIT | **rechazar**; anotar el precedente | La nota y su umbral van contra nuestro sistema de niveles (Floor, Reflex, Finish). Sirve como precedente de agente de plugin con nombres MCP en `tools` (pregunta 7) |
| E7 | `agents/e2e-runner` | Pruebas E2E con Vercel Agent Browser (`npm install -g agent-browser` sin versión) y Playwright o `npx e2e` como alternativa | MIT | **rechazar** | Otra herramienta de navegador sin versión fijada. Escribe tests en el proyecto: fuera de la revisión de diseño |
| E8 | `skills/click-path-audit` | Recorre cada botón a través de los estados de la app (stores, efectos de React) para encontrar acciones que se anulan entre sí | MIT | **rechazar** | Depuración de lógica de estado, no de diseño |
| E9 | `skills/accessibility`, `skills/frontend-a11y`, `agents/a11y-architect` | WCAG 2.2 AA en web y móvil; patrones de React y Next.js | MIT | **enlazar** (aplazar) | Revisar cuando se escriba `accessibility-review`. Hoy no aportan medición en navegador |
| E10 | `skills/seo`, `agents/seo-specialist` | Lista de SEO técnico y on-page, datos estructurados, CWV | MIT | **enlazar** (aplazar) | Revisar cuando se escriba `seo-geo-optimizer`. No mide nada en el navegador |
| E11 | `skills/ui-demo` | Grabar vídeos de demostración con Playwright | MIT | **rechazar** | Fuera de alcance |
| E12 | README, gestión del contexto | Consejos para no saturar la ventana con MCP | MIT | **rechazar** como fuente | Cifra superada por tool search; nuestra medición la sustituye |
| E13 | Bloque "Prompt Defense Baseline" de sus agentes | Instrucciones de defensa frente a inyección en los agentes | MIT | **rechazar** (ya cubierto) | Ya tenemos la regla de que el contenido de la página son datos (`review-method.md` §10, `design-reviewer.md`) |

**Criterios.** Se rechazó todo lo que choca con `content-truth.md` o `ethics.md` (enviar formularios, sesión real del usuario), con "el contexto manda" (umbrales y listas sin excepción) o con la anti-convergencia (dirección de casa), y todo lo que añade dependencias sin versión fijada (`@latest`, `agent-browser`, `@playwright/mcp`).

**Qué pasaría a `skills/`, si se aprueba:** solo E1 y E4, reescritas con nuestras palabras. Por ser ideas y no texto, no hace falta copiar el aviso de licencia; se citarían como fuente en `docs/SOURCES.md` al usarlas.
