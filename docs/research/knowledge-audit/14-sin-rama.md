# 14 · Sin rama

Lo que no encaja en ninguna de las trece ramas: el mecanismo de archivos de proyecto, el flujo entre skills, el catálogo de recursos, el gobierno de fuentes y las erratas anotadas. Convenciones: ver `01-reasoning.md`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| modern-design/SKILL.md | `## Project files` · `## Order of authority` · `## Process` · `## Rules` · `## Hand-off` · `## References` | 18-27 · 28-38 · 39-52 · 53-56 · 57-60 · 61-80 | Tres archivos del proyecto, orden de autoridad, pasos, reglas (TODO), relevo, carga bajo demanda | regla | — |
| md:templates/site-decisions.md | `## Where it sits` · `## When to read and write it` · `## Rules per section` · `## Template` | 7-10 · 11-16 · 17-22 · 23-58 | Estándares (nombres de token, nunca valores), inventario, decisiones del usuario con la guía que anulan | regla | — |
| design-review/SKILL.md | `## Hand-off` · `## References` | 83-87 · 88-99 | Relevo a `modern-design`; rutas con `${CLAUDE_SKILL_DIR}` | regla | — |
| md:resources.md | `# Resources` … `## Entry format` | 1-57 | Catálogo de enlaces; cuatro apartados en TODO | dato | — |
| docs/ARCHITECTURE.md | `## Skill flow` · `## Project files` · `## Levels` · `## How new references are written` · `## URL audit mode` · `## How the direction step researches references` | 5-38 · 40-52 · 54-65 · 67-80 · 91-95 · 97-104 | Arquitectura, archivos, niveles, forma fija de referencias, auditoría, investigación de referencias | regla | — |
| docs/SOURCES.md | `## Source table` · `## Working notes for phase 3` | 11-62 · 223-308 | Registro de fuentes, licencias, notas sin reescribir | dato | — |
| .claude/CLAUDE.md | todo | — | Convenciones del repositorio, lista anti-semillas, escáner | regla | — |

## 2. Cobertura

**Parcial.** El mecanismo de archivos del proyecto (`site-decisions.md`, `design-brief.md`, `content-needed.md`) está bien definido para dos skills. Para cinco skills falta decidir quién crea y quién actualiza cada archivo, qué secciones son de quién, y si las skills nuevas añaden archivos propios (por ejemplo un registro de SEO o de accesibilidad). `resources.md` tiene cuatro apartados vacíos y la sección `## Rules` de `modern-design/SKILL.md` está en TODO.

## 3. Duplicados y contradicciones

- **Estándares en `site-decisions.md`:** plantilla (19: nombres, no valores) y md:tokens.md §7 (184-186). Coherentes.
- **Desajuste código/registro:** plantilla (19: preguntar; en ejecución no interactiva, seguir el código y anotar en "Assumptions") y md:tokens.md 185 (anotar en "Design assumptions"). Nombre de la sección distinto. Gravedad baja.
- **`docs/ARCHITECTURE.md` 30** (anchos sin 1024): ver `13-review-method.md`.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Archivos del proyecto y su plantilla | núcleo común (plantillas en una ubicación que lean las cinco skills) | las cinco |
| Orden de autoridad | núcleo común; repetido como exige CLAUDE.md | todas |
| Catálogo de recursos | `modern-design`, `resources.md` | — |
| Gobierno de fuentes | repositorio (`docs/SOURCES.md`, `THIRD_PARTY_NOTICES.md`) | — |

## 5. Huecos

- ¿Qué skill crea `site-decisions.md` si la primera en ejecutarse no es `modern-design`?
- ¿Añaden las skills nuevas secciones a `site-decisions.md` o archivos propios?
- ¿Dónde viven las plantillas cuando las usan cinco skills y una puede faltar?
- ¿Qué reglas van en `## Rules` de `modern-design/SKILL.md`?

## 6. Fuentes candidatas

- **Conocidas:** impeccable `document.md` (DESIGN.md como registro); Hallmark `references/design-md.md` (bloquear el sistema en un archivo) y su `.hallmark/` (preflight, log, before).
- **Nuevas:** ninguna.

## Erratas y notas anotadas (sin corregir)

- `modern-design/references/reasoning.md` 165: "(pending: `motion.md`)", aunque el archivo existe como esqueleto. 166: "(pending: styles.md)", archivo inexistente. 172: "P18 accessibility.." con doble punto.
- `modern-design/references/sections/index.md` 58: "see `../tokens.md` when it has content"; `tokens.md` ya tiene contenido.
- `modern-design/references/pages/legal.md` 119: "(pending: tokens.md / styles.md)" para el detalle de consentimiento, que ya está en `implementation.md` §8 y en la propia entrada (`### Implementation`).
- `modern-design/references/pages/entry-marketing.md` 34 y 179: secciones del lote B pendientes (correcto, pero conviene revisar cuando existan).
- `modern-design/references/implementation.md` 93 y 204: un archivo de skill remite a `docs/ARCHITECTURE.md` y `docs/SOURCES.md` (documentos del repositorio). Los archivos de `design-review` lo hacen con URL absolutas de GitHub en "Attribution".
- `modern-design/references/motion.md`: esqueleto con TODO y "Sources to merge"; `resources.md`: cuatro TODO; `modern-design/SKILL.md` 55: `## Rules` en TODO.
- `modern-design/references/pages/interaction-creation.md` 37: el análisis de HubSpot (datos de empresa) se marca [A]; por la escala de `principles.md` sería [B].
- `modern-design/references/pages/content-navigation.md` 7: la cabecera del grupo dice "medium to low", pero Product page es "high".
- `modern-design/references/pages/commerce-purchase.md` 9 y `commerce-after-purchase.md` 9: cabecera de grupo duplicada (intencionado).
- Archivos sin la cabecera fija: ver `00-index.md` §5.
