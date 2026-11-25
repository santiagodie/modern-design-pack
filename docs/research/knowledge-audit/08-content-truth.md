# 08 · Verdad del contenido (content-truth, rellenos, content-needed)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:content-truth.md | `# Content truth: no invention (hard limit)` | 1-6 | Límite duro al nivel de `ethics.md`; orden de autoridad | regla | — |
| md:content-truth.md | `## The rule` | 7-18 | Qué no se inventa; cómo declinar; tres fuentes permitidas por texto; hechos implícitos; servicio no confirmado como pregunta; país y jurisdicción | regla (MUST) | — |
| md:content-truth.md | `## Placeholders` | 19-37 | Tres tipos de relleno, dos niveles de marca visible, lugares que leen las máquinas limpios, botones con destino pendiente, secciones sin datos | regla | — |
| md:content-truth.md | `## content-needed.md` | 38-43 | Dos tipos de fila; "assumption: confirm" y "proposal: confirm" | regla | — |
| md:templates/content-needed.md | `## Rules` · `## Template` | 5-18 · 19-34 | Filas, tipos, secciones dependientes, estado (pending, confirmed, discarded) | regla | — |
| md:direction.md | `### 1. Read what already exists` · `### 2. Gather context` | 13-25 · 26-56 | Pedir la documentación del negocio antes que nada; cuándo no hay respuestas: supuestos de diseño sí, hechos del negocio no | regla | — |
| md:direction.md | `### 7. Write design-brief.md` (bloque `## Business facts` de la plantilla) | 120-176 (144-145) | El brief no asume hechos del negocio | regla | — |
| md:sections/index.md | `## Shared rules` | 54-64 | Contenido real o relleno marcado; una sección planificada no se elimina sin el usuario | regla | — |
| md:sections/social-proof.md | `## Content` · `## Critical errors` | 13-32 · 54-58 | Prueba social solo real; rellenos para cifras, logos y citas | regla | — |
| md:sections/footer.md | `## Content` | 13-32 | Datos legales del pie como rellenos | regla | — |
| md:sections/cta.md | `## Content` (destino pendiente, línea 18) | 13-21 | Botón cuyo destino falta: ancla a la sección o relleno no enlazado | regla | — |
| md:tokens.md | `### Placeholders` | 134-141 | Los dos estilos de relleno son tokens visibles en todo tema | regla (MUST) | — |
| md:tokens-color.md | `## 13. When the user has no brand colors` | 181-188 | Paleta elegida sin marca = supuesto de diseño | regla (MUST) | — |
| md:ethics.md | `## 4. Blacklist (never propose)` (línea 52) | 42-56 | Testimonios, logos o cifras inventadas en la lista negra | regla | — |
| design-review/SKILL.md | `## Process` (Mode 1, pasos 5 y 7) | 28-62 (36, 38) | No arreglar contenido escribiéndolo; "Before publishing" bloqueante | regla | — |
| dr:copy-states-checklist.md | `### CY3. Invented content and unverifiable claims` | 17-22 | Rellenos medidos y bloqueantes; revisión de afirmaciones en texto visible, `<head>`, `og:*`, `lang`, `hreflang`, datos estructurados y en lo que la propia revisión añade | regla | — |
| dr:audit-report.md | `## Section guide` (fila Before publishing) · `## Template` (`## Before publishing (blocking)`) | 18-30 (29) · 51-140 (121-123) | Lista bloqueante de rellenos en el informe | regla | — |
| dr:unslop-checklist.md | `### CP2. Mixed icons, and emoji standing in for icons or images` | 230-235 | Foto o ilustración ausente = caja con etiqueta y `data-placeholder` | regla | — |
| docs/ARCHITECTURE.md | `## Project files` ("No invention") | 40-52 | Resumen del límite y de cómo lo comprueba design-review | regla | — |
| docs/research/tokens-sources.md | `### 1.6 Other rejections (outside tokens, recorded so nothing is copied)` | 251-264 | X1-X10: datos "realistas", stock, horarios plausibles, testimonios por sector, rechazados | dato | impeccable, ui-ux-pro-max, taste-skill |

## 2. Cobertura

**Completa** para lo que el plugin construye: regla, fuentes permitidas, hechos implícitos, servicios no confirmados, país, rellenos visibles, archivo de seguimiento, comprobación en revisión y en informe, y casos probados en `docs/examples/no-invention*`. Falta lo que aparecerá con las skills nuevas: cómo aplica la regla al **contenido optimizado** (reescribir copy y metadatos sin añadir afirmaciones), al **SEO** (datos estructurados, FAQ, reseñas agregadas) y a las **imágenes generadas** o de biblioteca.

## 3. Duplicados y contradicciones

- **La regla en sí:** md:content-truth.md `## The rule`, ambos `SKILL.md` (modern-design 33; design-review paso 5), md:direction.md `## Rules` (183-184), md:sections/index.md 62-63, md:sections/social-proof.md 21, md:sections/footer.md 31, md:ethics.md 52, docs/ARCHITECTURE.md 52, CLAUDE.md. Coherentes; es duplicación deliberada del límite.
- **Botón con destino pendiente:** md:content-truth.md 35 y md:sections/cta.md 18. Coherentes (cta.md remite).
- **Lorem ipsum:** content-truth.md 26 lo usa como relleno de texto corrido; CY3 lo trata como medido y bloqueante. Coherente (bloquea publicar, no construir).
- **Sin contradicciones internas.** Fuera del plugin hay choques que importan al adoptar fuentes:
  - `docs/research/landing-field-guide/02_IMPORTANT.md` 134 pide mostrar el producto "con datos realistas, nombres reales, sin lorem ipsum" (solo investigación; `tokens-sources.md` X1-X3 lo rechaza).
  - Hallmark `references/imagery.md` §2-§3 coloca fotos de biblioteca como sustitutos y prohíbe etiquetas visibles de relleno ("No visible placeholder labels"), y gate 68 limita los huecos vacíos. Nuestro `content-truth.md` 29-33 exige marca visible y prohíbe fotos presentadas como propias. **CONTRADICCIÓN** con una fuente candidata (no interna). Gravedad **alta** si se adopta su política de fotos.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Regla de no invención, rellenos, `content-needed` | núcleo común, `content-truth.md` | las cinco skills |
| Plantilla `content-needed.md` | núcleo común (hoy en `modern-design/references/templates/`) | las cinco |
| Comprobación en revisión (CY3, Before publishing) | `design-review` | `content-web-optimizer`, `seo-geo-optimizer` (misma comprobación de afirmaciones en metadatos) |
| Estilo visual de los rellenos | `modern-design`, `tokens.md` §5 | — |

## 5. Huecos

- ¿Cómo reescribe `content-web-optimizer` un texto sin añadir hechos, y cómo marca lo que propone?
- ¿Qué datos estructurados puede generar `seo-geo-optimizer` cuando falta un dato (precio, horario, valoración)?
- ¿Qué pasa con las imágenes generadas por IA o tomadas de bibliotecas con licencia abierta: son relleno, ilustración o afirmación?
- ¿Cómo se trata una cifra que el usuario aporta sin fuente (por ejemplo "líderes del sector")?
- ¿Qué se hace con afirmaciones ya publicadas en un sitio auditado por URL (solo se informa, pero ¿con qué grado de certeza)?
- ¿Dónde vive la plantilla `content-needed.md` cuando la usan cinco skills?

## 6. Fuentes candidatas

- **Conocidas:** Hallmark gate 46a (métricas, testimonios o logos inventados; Floor), gate 70 (formulario que confirma un envío inexistente; Floor) y `redesign.md` "What a redesign keeps" (conservar las afirmaciones encontradas y listarlas para verificar); taste-skill `SKILL.md` paso 2 (rechazado, X4); impeccable `mode-operate.md` (rechazado, X1).
- **Nuevas:** ninguna verificada para esta rama.
