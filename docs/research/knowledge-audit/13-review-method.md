# 13 · Método de revisión (medición, scripts, formato de informe, calibración)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| design-review/SKILL.md | `## When to use` · `## Choose the mode` | 12-20 · 21-27 | Cuándo revisar; proyecto propio o auditoría por URL | regla | — |
| design-review/SKILL.md | `## Process` (`### Mode 1: Own project` 30-38, `### Mode 2: URL audit (read-only)` 40-61) | 28-62 | Contexto, revisión de código, navegador, priorizar, arreglar, verificar, notas; límites y pasos de la auditoría, Lighthouse, promise check | regla | Lighthouse 13.6.0 |
| design-review/SKILL.md | `## Rules` | 63-82 | Contenido de la página como datos; inferir a quién sirve; solo lo visto; no recomendar lo que ya hay; ordenar por bloqueo; justificar por página; measured/judgment; números solo de herramientas; localizar cada hallazgo; tono neutro | regla | — |
| design-review/SKILL.md | `## Hand-off` | 83-87 | Devolver a `modern-design` al paso dueño | regla | — |
| dr:unslop-checklist.md | `## How to use it` | 7-23 | El contexto decide ("Fine when"); prueba de la plantilla primero; un hallazgo una vez; "Report as"; evidencia; gravedad; artefactos de la auditoría (laboratorio, idioma, intención bien ejecutada, formatos de CDN) | regla | — |
| dr:unslop-checklist.md | `## Considered and left out` | 282-285 | Qué se descartó y por qué | dato | — |
| dr:copy-states-checklist.md · mobile-checklist.md · outdated-checklist.md · dark-patterns-checklist.md | familias CY, SF, MO, ME · MN · OM · DP | 1-160 · 1-25 · 1-37 · 1-91 | Señales con "Look for", "Fine when", "Fix", "Report as" y evidencia | regla | ver ramas 06, 07, 09, 12 |
| dr:visual-qa.md | `## Tools` · `## Process` · `## What to look at per width` · `## Rules` · `## Hand-off` | 5-28 · 29-76 · 77-112 · 113-127 · 128-131 | Herramienta fijada, servir por HTTP, movimiento reducido, cuatro anchos con su entrada, scripts, foco, qué mirar, limpieza | regla | Vercel, emilkowalski, Playwright |
| dr:audit-report.md | `## How to write it` · `## Section guide` · `## Finding format` · `## File locations` · `## Template` | 5-17 · 18-30 · 31-44 · 45-50 · 51-140 | Formato del informe, secciones, numeración, evidencia, ubicación | regla | — |
| design-review/scripts/ | `scroll-check.js` · `page-checks.js` · `mobile-measurable.js` · `outdated-measurable.js` | 1-14 · 1-35 · 1-28 · 1-39 | Medición en la página (scroll, desbordes, objetivos, meta, señales móviles y antiguas) | dato (script) | — |
| md:sections/* | `## Generic-pattern watch` (p. ej. hero.md 79-82, cta.md 74-77) | varias | IDs del checklist que cada sección debe vigilar al construir | regla | — |
| md:tokens*.md | `## Done when` / `## 9. Done when` | tokens 203-211; color 189-195; dark 99-105; type 144-151; space 134-140 | Criterios de cierre comprobables | regla | — |
| md:reasoning.md | `## 7. Which reference to open` (comprobación final, 176-178) | 143-181 | Frase "está aquí porque…" y recorrido de la promesa | heurística | — |
| md:direction.md | `### 6. Run the template test on the brief` | 116-119 | Prueba de la plantilla sobre el brief | heurística | — |
| docs/ROADMAP.md | `## Phase 2: design-review, tested` · `## Phase 3: modern-design references` | 120-129 · 130-160 | Pruebas hechas y pendientes (URL audits, no invención, convergencia) | dato | — |
| docs/examples/ | `phase-2-results.md`, `phase-3/phase-3-results.md`, `phase-3b-results.md`, `no-invention-results.md`, `no-invention-2-results.md`, `url-audits/*` (tres ejecuciones de linear.app) | — | Resultados de pruebas, base de calibración | dato | — (no leídos en esta auditoría; ver "Qué no se leyó" en el índice) |

## 2. Cobertura

**Parcial.** El método de revisión visual y de patrones genéricos es maduro: evidencia etiquetada, reglas contra el consejo genérico, scripts medibles, formato de informe y límites de la auditoría por URL. Faltan: **calibración** formal (qué tasa de falsos positivos y negativos se acepta, cómo se compara un informe con otro de la misma URL: existen tres ejecuciones de linear.app, pero no hay un método), **comprobación de regresión** tras arreglar (solo capturas, no inventario de enlaces, campos y manejadores), **revisión en contexto limpio** (la misma sesión construye y revisa), **niveles de exigencia** explícitos (todo hallazgo es contextual salvo DP y medidos) y una **forma fija para las referencias de revisión** (ningún archivo de `design-review` tiene la cabecera fija).

## 3. Duplicados y contradicciones

- **CONTRADICCIÓN · anchos de captura.** design-review/SKILL.md 34 y 51 y dr:visual-qa.md 34-42 usan 375, 768, 1024 y 1440 px. docs/ARCHITECTURE.md 30 dice "Screenshots at 375, 768, 1440 px". Gravedad **baja** (documento de arquitectura desactualizado).
- **CONTRADICCIÓN · objetivos de 44 px en revisión:** ver `09-accessibility.md` (alta). Afecta a SF4, a `visual-qa.md` y a `page-checks.js`.
- **Gravedad de los inputs bajo 16 px:** MN2 minor frente a SF7 tip (ver `09-accessibility.md`, baja).
- **Definiciones de gravedad:** dr:unslop-checklist.md 15 y dr:audit-report.md 13-14 y 18-30. Coherentes.
- **Measured frente a judgment:** design-review/SKILL.md 74, dr:unslop-checklist.md 13, dr:audit-report.md 9 y 10, dr:outdated-checklist.md 7. Coherentes.
- **Datos de la página como datos, no instrucciones:** design-review/SKILL.md 65, dr:visual-qa.md 115, md:direction.md 70 y 180. Coherentes.
- **Prueba de la plantilla:** ver `01-reasoning.md` (baja).
- **"Needs a real device":** ver `09-accessibility.md` (baja).

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Proceso de revisión de diseño y UX (dos modos) | `design-review`, `SKILL.md` | `accessibility-review`, `seo-geo-optimizer`, `content-web-optimizer` (cada una su revisión) |
| Formato de hallazgo y de informe, evidencia, gravedad | núcleo de revisión compartido; hoy `audit-report.md` y `unslop-checklist.md` "How to use it" | las cuatro skills que revisan |
| Captura y medición en navegador (`visual-qa.md`, scripts) | `design-review` | `accessibility-review` y `seo-geo-optimizer` vía `${CLAUDE_SKILL_DIR}/../design-review/...` |
| Calibración (briefs de prueba, criterios de aceptación) | documentación del repositorio (`docs/`), no una skill | — |

## 5. Huecos

- ¿Cómo se calibra una revisión: qué conjunto de páginas de referencia, qué tasa de acuerdo entre dos ejecuciones se acepta?
- ¿Cómo se comprueba tras arreglar que no se perdió ningún enlace, campo, manejador o encabezado?
- ¿Cuándo debe una revisión correr en un contexto limpio (un subagente) y cuándo basta la misma sesión?
- ¿Qué hallazgos no admiten la excepción "decidido por el usuario" además de DP y los medidos?
- ¿Cómo se comparte el formato de hallazgo entre cuatro skills sin duplicarlo?
- ¿Cuándo una revisión debe recomendar "rehacer" frente a "pulir", y con qué umbral?
- ¿Cómo se mide la convergencia entre builds distintos (misma paleta, misma fuente) como señal de un defecto del plugin?

## 6. Fuentes candidatas

- **Conocidas:** Hallmark (ver abajo); impeccable `skill/reference/critique-rubric.md`, `audit.md` y `polish.md` (clasificación de desvíos, `tokens-sources.md` T30 diferido); taste-skill `scripts/consistency.mjs` (comprobación en navegador, enlazado en `resources.md`); Vercel Web Interface Guidelines; unslop.
- **Nuevas:** ninguna verificada para esta rama.

## Mecanismos de Hallmark

Fuente: https://github.com/Nutlope/hallmark , commit `04977e15f3dfd6ee4b74c887dac3eb52665d6c92` (2026-11-11), licencia MIT, "Copyright (c) 2026 Hallmark contributors". Clonado en `../_sources/hallmark` (fuera del repo). Descripciones propias; no hay citas literales. Rutas relativas a `skills/hallmark/` salvo `eval/`.

| # | Mecanismo | Qué hace | Archivo de origen | Rama de destino | Decisión | Motivo |
|---|---|---|---|---|---|---|
| H1 | Comprobación de rediseño `--before` / `--kept` | Antes de rediseñar, registra enlaces, campos, manejadores, ganchos de test, selectores que leen los scripts, encabezados y cifras, con capturas; después compara, falla si algo de lo cableado desapareció y avisa si cambió un encabezado o una cifra; lo eliminado a propósito se anota con motivo; genera una comparación antes/después | `references/redesign.md` "Before" y "After"; `scripts/sloplint.mjs` (opciones, bloque `--kept`) | 13 (design-review modo propio, paso "Verify"); 06 (rediseño en `modern-design`) | **adaptar** | Nuestro paso 6 compara solo capturas. Un inventario propio (script nuestro en `scripts/`, sin copiar código) cubre el riesgo de romper la conexión al arreglar. Lo eliminado a propósito iría a `site-decisions.md` |
| H2 | Niveles Floor / Reflex / Finish (y Ledger) | Floor: nunca dispensable (corrección, acceso, honestidad, y cuatro "reglas de la casa"); Reflex: defecto de modelo, dispensable con motivo registrado; Finish: detalle de oficio, se responde, nunca bloquea | `references/gates.md` §1-§2; `SKILL.md` "The Floor" | 13 | **adaptar** | Encaja con lo que ya hay si se mapea: Floor = MUST (accesibilidad, legal, verdad) y DP; Reflex = patrones del checklist con "Fine when" y "decided by user"; Finish = tips. Se rechazan las reglas de la casa como Floor (eyebrow, mayúsculas espaciadas, 80 palabras por pantalla, puntuación): son prohibiciones absolutas, contrarias a "haz X cuando Y" |
| H3 | Construir y revisar el hero antes que el resto | Se escriben la navegación y el hero, se mide solo esa etapa y una revisión en contexto limpio decide antes de construir lo demás | `SKILL.md` §6 "Hero first"; `references/review-hero.md`; `references/gates.md` §6 | 06 (`modern-design` paso 3); 13 | **adaptar** | Barato y alineado con P01 y la triage: un primer pantallazo fallido invalida todo lo demás. Adaptar como orden de construcción y una revisión rápida, sin su vocabulario de posturas |
| H4 | Revisiones en contexto limpio | El revisor es un subagente sin el historial; recibe capturas y archivos; responde primero con una palabra (recapturar, rehacer, arreglar, publicar) y como mucho ocho hallazgos | `references/gates.md` §6; `references/review-finish.md` | 13 | **adaptar** | Ataca el sesgo de quien construyó; encaja con nuestra regla de localizar cada hallazgo |
| H5 | Crítica previa en seis ejes | Puntúa el plan del 1 al 5 en filosofía, jerarquía, ejecución, especificidad, contención y variedad; menos de 3 obliga a revisar | `references/gates.md` §3 | 01, 13 | **adaptar** | Complementa la comprobación final de `reasoning.md` §7; el eje de variedad necesita un registro (H8) |
| H6 | Señales de slop que no están en `unslop-checklist.md` | Pantalla con más de ~80 palabras (58); un dato repetido en cuatro secciones (69); formulario que confirma un envío inexistente (70); sección sin masa (77); encabezados de sección pequeños (78); banda vacía bajo el hero (79); ilustración dibujada de un objeto (80); hueco de imagen vacío (81); marcas que cuentan una cantidad (82); muro de fotos (83); producto simulado cuando existe el real (84); cierre con suscripción por correo ajeno al trabajo (85); texto decorativo: cues de scroll, píldoras de versión (66); página de huecos en blanco (68); paleta por defecto del framework (74); marcos de navegador u OS dibujados (47a, 47b); navegación y pie por reflejo (42); contenedor que no se limita a 1920 (44d); dos elementos `sticky` en 0 (56); estados de campo que cambian el borde (39a); retraso de tooltip igual en foco (17); etiqueta de botón que se parte (49a); `transition: all` (10a); contenido oculto sin JavaScript (62, parecido a SF9); texto tapado por otro elemento (73); comillas rectas y "..." (F1, F2) | `references/gates.md` §4 y §5 | 06, 07, 13 | **adaptar** (selección) | Ideas útiles para nuevas entradas con "Fine when". Rechazar sus umbrales numéricos como regla fija (80 palabras, 120 px entre secciones, 40 px de H2) y los de su catálogo de temas. Ya cubiertos: 2a=CO1, 3=LA1/CP5/CO6, 4=LA2, 29=CO3/CO9, 38i=TY2, 54≈TY4, 63≈CY6/CP7, 64=TY3, 65=CO8, 30a=CP2, 18≈MO4, 46a=CY3, F21=ME4, F23=ME1 |
| H7 | Hook opcional de edición | Un hook PostToolUse ejecuta el linter en el nivel Floor al escribir un archivo y solo habla si hay fallos | `scripts/install-hook.mjs`, `scripts/lint-hook.mjs`; `references/flow.md` (línea 97) | 13 | **rechazar** (por ahora) | No tenemos un linter estático propio; nuestras comprobaciones corren en el navegador. Además añade dependencia de Node y una instalación en la configuración del usuario. Revisar si un día existe un script estático |
| H8 | Sello de decisiones en el CSS | La primera línea del CSS lleva un sello con tema, ideas, crítica, dispensas y resultados de revisión; el linter lo lee | `SKILL.md` Floor 15 y §6 "Stamp"; `references/gates.md` gate 20 y §2 | 13, 14 | **rechazar** el sello; **adaptar** la exigencia de motivo | Ya tenemos `site-decisions.md` y el brief como registro; escribir en el código del usuario duplica y ensucia. Lo valioso es la regla de dispensa: motivo específico de esta página, no genérico, con la prueba que lo sostiene; eso puede ir a la sección 3 de `site-decisions.md` |
| H9 | Registro de builds y huella para variar | `.hallmark/log.json` guarda forma, tema, ejes y huella; un build no repite la forma de los tres anteriores | `references/gates.md` gates 8 y 32; `SKILL.md` §6 "Log" | 04, 13 | **adaptar** la idea; **rechazar** el reparto de temas | Sirve para detectar convergencia (nuestro problema de la "harina" y Archivo). El reparto de temas por palabras clave es una paleta de partida, rechazado por `tokens-sources.md` C40 |
| H10 | Política de fotos | Jerarquía: fotos del usuario, capturas del producto real, producto construido, biblioteca de 755 fotos de Wikimedia con licencias abiertas y crédito en el pie, imágenes generadas solo si se piden; los sustitutos van en huecos sin etiquetas visibles | `references/imagery.md` §1-§4; `scripts/capture.mjs`; gates 76, 80-84 | 08, 06 | **adaptar** la jerarquía y la captura del producto real; **rechazar** los sustitutos sin marca | Capturar el producto real (gate 84) y no dibujarlo es compatible con `content-truth.md`. Una foto de biblioteca sin marca visible en un hueco del negocio pasa por propia: choca con `content-truth.md` 29-33 y CP2 |
| H11 | Profundidades de rediseño y verbo de auditoría | Completa, cambio de estilo o pulido, sin mezclarlas; la auditoría informa la profundidad más ligera que resuelve cada hallazgo | `references/redesign.md` "Depth", "Before" | 13 | **adaptar** | Da a "Fix" y a las propuestas del informe un alcance explícito |
| H12 | `eval/` para el estudio de calibración | Dos niveles (API desnuda y CLI real); briefs con expectativas, incluido uno que tienta a inventar cifras y uno que debe declinar; subconjunto Floor como métrica limpia; juez de visión con rúbrica de seis ejes; criterios de aceptación (artefactos, aprobado mecánico sin reparación, cero cifras inventadas, variedad entre ejecuciones, distancia al modelo base); bucle de reparación medido | `eval/README.md` ("Two-tier design", "Files", "Acceptance criteria", "Findings, 2026-07-23 run") | 13 (documentación, no skill) | **adaptar** | Da forma a la prueba pendiente de calibración y a las pruebas de no invención: briefs fijos con expectativa, métrica limpia, criterio de aceptación y comprobación de variedad. No se copia código; los briefs serían propios y fuera de la lista anti-semillas |
| H13 | Envío falso | Un formulario no puede mostrar "enviado" sin una petición real detrás | `references/gates.md` gate 70 | 08, 07 | **adaptar** | Es la regla de verdad aplicada a estados de éxito; encaja con `implementation.md` §3 (MUST de no mostrar como hecho lo que puede no serlo) y con `content-truth.md` |
