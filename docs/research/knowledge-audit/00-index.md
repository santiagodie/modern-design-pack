# Auditoría de conocimiento: índice y propuesta global

Rama `knowledge-audit`, 2026-11-25, sobre `main` en `381cbb3` (PR #8 tokens fusionado). Trabajo solo de análisis: nada en `skills/` ha cambiado. Cada archivo de rama tiene seis secciones fijas (dónde está hoy, cobertura, duplicados y contradicciones, dueño propuesto, huecos, fuentes candidatas). "md:" = `skills/modern-design/references/`, "dr:" = `skills/design-review/references/`.

## 1. Matriz de cobertura

| # | Rama | Nivel | Archivo |
|---|---|---|---|
| 1 | Razonamiento (método general) | parcial | [01-reasoning.md](01-reasoning.md) |
| 2 | Estrategia y marketing | parcial | [02-strategy-marketing.md](02-strategy-marketing.md) |
| 3 | Psicología y persuasión | completa en mecanismos, parcial en aplicación | [03-psychology-persuasion.md](03-psychology-persuasion.md) |
| 4 | Marca e identidad visual | escasa | [04-brand-identity.md](04-brand-identity.md) |
| 5 | UX y arquitectura de la información | parcial | [05-ux-information-architecture.md](05-ux-information-architecture.md) |
| 6 | UI (tokens, componentes, secciones, motion, estilos) | parcial (tokens: completa; motion, componentes y estilos: ninguna) | [06-ui.md](06-ui.md) |
| 7 | Contenido: copywriting, UX writing, microcopy | parcial | [07-content-copywriting.md](07-content-copywriting.md) |
| 8 | Verdad del contenido | completa | [08-content-truth.md](08-content-truth.md) |
| 9 | Accesibilidad | parcial | [09-accessibility.md](09-accessibility.md) |
| 10 | SEO y GEO | escasa | [10-seo-geo.md](10-seo-geo.md) |
| 11 | Ingeniería y rendimiento | parcial | [11-engineering-performance.md](11-engineering-performance.md) |
| 12 | Ética y legal | parcial | [12-ethics-legal.md](12-ethics-legal.md) |
| 13 | Método de revisión (con "Mecanismos de Hallmark") | parcial | [13-review-method.md](13-review-method.md) |
| 14 | Sin rama (archivos de proyecto, recursos, fuentes, erratas) | parcial | [14-sin-rama.md](14-sin-rama.md) |

## 2. Contradicciones, por gravedad

Alta = cambia lo que se construye o lo que la revisión exige; media = puede cambiarlo según quién lea; baja = solo redacción o documentos.

| # | Gravedad | Contradicción | Sitios | Rama |
|---|---|---|---|---|
| 1 | alta | Tamaño de objetivo: el build exige MUST 24 px y SHOULD 44 px solo en acciones primarias con puntero grueso; la revisión marca todo lo que baje de ~44 px | build: md:tokens.md 124-126, md:tokens-space.md 87-89, md:implementation.md 141, md:responsive.md 43, md:sections/cta.md 53 · revisión: dr:copy-states-checklist.md 75 (SF4), dr:visual-qa.md 82 y 98, `design-review/scripts/page-checks.js` 13 | 09 |
| 2 | alta | Dial de persuasión: `principles.md` §3 y las entradas de `pages/` dan valores distintos a diez páginas; `tokens.md` §3 no tiene fila para los valores intermedios | md:principles.md 252-255 · md:pages/* (`**Persuasion dial:**`) · md:tokens.md 62-66 | 03 |
| 3 | alta (con fuente candidata) | Política de fotos de Hallmark (sustitutos de biblioteca sin etiqueta visible) frente a `content-truth.md` (relleno marcado; nada que pase por propio) | Hallmark `references/imagery.md` §2-§3, gate 68 · md:content-truth.md 29-33, dr:unslop-checklist.md CP2 | 08, 13 |
| 4 | media | Versión de WCAG: 2.2 AA en build; 2.1 AA como mínimo en principios, ética y en la comprobación por tipo de página | md:implementation.md 135, md:sections/index.md 41, tokens · md:principles.md 164, md:ethics.md 76, dr:dark-patterns-checklist.md 89 | 09 |
| 5 | media | Rangos en px en las secciones frente a "solo pasos de la escala" en tokens | md:sections/hero.md 35 y 38, benefits.md 40 y 42, final-cta.md 30-31, header.md 34, footer.md 39 · md:tokens.md 205, md:tokens-type.md §4 | 06 |
| 6 | media | CO8 acepta el fondo crema por categoría ("food-related"); tokens prohíbe elegir por asociación con el sector | dr:unslop-checklist.md 150 · md:tokens.md 96, md:tokens-type.md §1 | 04 |
| 7 | media (investigación) | El field guide propone una meta description persuasiva; `content-truth.md` la limita a lo confirmado | `docs/research/landing-field-guide/04_CROSS_CUTTING.md` 211 · md:content-truth.md 34 | 10 |
| 8 | baja | Medida del texto: 45-75 frente a 65-75 caracteres | md:tokens-type.md 103 · md:responsive.md 38, dr:unslop-checklist.md 77, dr:visual-qa.md 103 | 06 |
| 9 | baja | Valores de tiempo de motion en cuatro sitios mientras `motion.md` está vacío | md:sections/cta.md 41-42, md:sections/header.md 37, dr:copy-states-checklist.md 61 y 119 | 06 |
| 10 | baja | Texto del pie a 13-14 px frente a cuerpo de 1rem salvo rol denso | md:sections/footer.md 39 · md:tokens-type.md 93, dr:unslop-checklist.md 76 | 06 |
| 11 | baja | P10 da tres planes como aplicación sin remitir al caso en que confunden | md:principles.md 107 · md:reasoning-examples.md 25, md:pages/entry-marketing.md 191 | 02 |
| 12 | baja | Paridad del banner de cookies: "sin verificar" en un archivo, MUST en otro | md:pages/legal.md 117, md:ethics.md 37 · md:implementation.md 146, DP7 | 12 |
| 13 | baja | Declaración de accesibilidad: "recomendada" frente a impacto de la EAA | md:sections/footer.md 21 · md:ethics.md 34 | 12 |
| 14 | baja | Inputs bajo 16 px: minor en MN2, tip en SF7 | dr:mobile-checklist.md 12 · dr:copy-states-checklist.md 92 | 09 |
| 15 | baja | Anchos de captura sin 1024 en la arquitectura | docs/ARCHITECTURE.md 30 · design-review/SKILL.md 34 y 51 | 13 |

**Resueltas en la rama `fix-contradictions`:**

- 1, tamaño de objetivo: `e10a69f` (`fix(review): align target-size checks with tokens`).
- 2, dial de persuasión: `3d8dcd3` (`fix(dial): single scale and single owner per page`). Tabla de decisiones en `03-psychology-persuasion.md`, "Resolución del dial".
- 4, versión de WCAG: `77ec831` (`fix: target WCAG 2.2 AA everywhere`).
- 6, CO8 y fondo crema: `4c600be` (`fix(review): CO8 follows the brief, not the sector`).
- Erratas de `14-sin-rama.md`: `ec19d13` (`fix: typos from knowledge audit`).

**Resuelta en la rama `modern-design-tree`:**

- 5, rangos en px en las secciones: `b7dab7b` (`fix(sections): express sizes as tokens`). Espaciado, objetivos, alturas de control y tamaños de texto pasan a nombres de token; los anchos que no son de la escala, a `rem` con su motivo. Quedan en px dos hechos que no son medidas de diseño: el umbral de 16 px de iOS (`forms.md`, igual que MN2) y la descripción de una pantalla de 768 px (`hero.md`). La 10 (texto del pie a 13-14 px) queda resuelta de paso: el pie usa `--text-small`.

**Resuelta en la rama `design-review-tree`:**

- 15, anchos de captura sin 1024 en la arquitectura: `bec63a2` (`docs: design-review tree (partial)`). La fila de la auditoría por URL de `docs/ARCHITECTURE.md` dice 375, 768, 1024 y 1440 px.
- 3, política de fotos de Hallmark: no se adopta. `THIRD_PARTY_NOTICES.md` (entrada Hallmark) la deja fuera porque choca con `content-truth.md`; manda `content-truth.md`.

**Nota sobre rutas.** Desde la rama `modern-design-tree`, las referencias de `modern-design` están en carpetas por rama (`strategy/`, `ux/pages/`, `ui/`, `ui/sections/`, `engineering/`); el núcleo común sigue en la raíz. Los archivos de esta auditoría citan las rutas de antes del movimiento ("md:tokens.md" es hoy `md:ui/tokens.md`); el árbol vigente está en `docs/ARCHITECTURE.md`, "Reference tree".

## 3. Árbol propuesto para las cinco skills

Presupuesto: menos de unas 300 líneas por archivo. Estado: **existe** (se queda), **mover** (cambia de sitio o de skill), **dividir**, **nuevo**. Entre paréntesis, líneas actuales.

### Núcleo común (leído por las cinco; dueño físico: `modern-design`)

| Archivo | Cubre | Estado |
|---|---|---|
| `modern-design/references/ethics.md` | Regla de decisión, lista negra, casos, marco regulatorio, mínimo por página | existe (78); sin §5 si se mueve a `evidence.md` |
| `modern-design/references/content-truth.md` | No invención, rellenos, `content-needed.md` | existe (43) |
| `modern-design/references/reasoning.md` | Parte general del método: postura, seis preguntas, cuatro mecanismos, choques, comprobación final, presentar conclusiones, priors | **hecho** en la rama `core-reasoning`: dividido (198 → 147 con cabecera; añade "When the usual advice flips", texto nuevo). Se quedan la promesa central, los cuatro mecanismos, la escala del dial, los choques y priors; las seis preguntas, la comprobación final y cómo presentar el trabajo pasan a `design-reasoning.md` |
| `modern-design/references/evidence.md` | Calidad de evidencia, grados A/B/C, mitos | **hecho** en la rama `core-reasoning`: grados A/B/C movidos de `principles.md`, qué cuenta como verificado y cómo citar (texto nuevo). Los mitos siguen en `ethics.md` §5 |
| `modern-design/references/templates/site-decisions.md`, `content-needed.md` | Plantillas de los archivos del proyecto | existen (58, 34); decidir secciones por skill |

### `modern-design` (construir)

| Archivo | Cubre | Estado |
|---|---|---|
| `SKILL.md` | Pasos, orden de autoridad, reglas | existe (80); `## Rules` por escribir |
| `references/direction.md` | Paso 1, brief, antidefectos | existe (196) |
| `references/design-reasoning.md` | Seis preguntas por pantalla, ejemplos trabajados, tabla página→archivo, comprobación final | **hecho** en la rama `core-reasoning`, dividido de `reasoning.md` (86 con cabecera). La promesa central y la escala del dial se quedaron en `reasoning.md` |
| `references/reasoning-examples.md` | Ejemplos trabajados | existe (75) |
| `references/principles.md` | P01-P31 | existe (257); dividir por bloque si crece; §3 pasa a enlazar el dial |
| `references/pages/*.md` (13) | Razonamiento por tipo de página | existen; añadir "Layout & responsive" |
| `references/navigation.md` | Navegación del sitio y de la app, etiquetas, búsqueda global | **nuevo** |
| `references/tokens.md`, `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md` | Paso 2 | existen (210, 195, 105, 151, 140) |
| `references/components/` (`button.md`, `field.md`, `choice.md`, `card.md`, `badge.md`, `table.md`, `dialog.md`, `tabs-menu.md`) | Piezas reutilizables con todos sus estados | **nuevo** (lote D) |
| `references/sections/` (9 actuales) | Secciones de páginas que persuaden | existen |
| `references/sections/` lote B (`problem.md`, `how-it-works.md`, `demo.md`, `testimonials.md`, `pricing.md`, `trust.md`, `faq.md`, `where-when.md`) | Secciones importantes | **nuevo** |
| `references/sections/` lote C (`app-bar.md`, `board.md`, `data-table.md`, `side-panel.md`, `row-actions.md`, `read-only-display.md`) | Regiones de páginas que operan | **nuevo** |
| `references/responsive.md` | Teléfono, tablet, escritorio | existe (101) |
| `references/motion.md` | Cuándo animar, valores de los nombres reservados, movimiento reducido; dueño único de tiempos | existe como esqueleto (32): escribir |
| `references/styles.md` | Cómo cambia cada sección por estilo declarado | **nuevo** |
| `references/implementation.md` | Renderizado, estado, reutilización, plataforma, accesibilidad y legal mínimos, límites | existe (204) |
| `references/performance.md` | Presupuestos, imágenes, terceros, medición de campo | **nuevo** (sale de `implementation.md` §6 si se amplía) |
| `references/resources.md` | Enlaces | existe (57) con cuatro TODO |

### `design-review` (diseño y UX, proyecto propio o URL)

| Archivo | Cubre | Estado |
|---|---|---|
| `SKILL.md` | Modos, proceso, reglas | existe (99) |
| `references/review-method.md` | Formato de hallazgo, evidencia (`measured`/`judgment`), gravedad, niveles, dispensas, artefactos de auditoría; compartido por las cuatro skills que revisan | **hecho** en la rama `design-review-tree` (`dc689d7`): movido de `unslop-checklist.md` "How to use it" y `audit-report.md` "How to write it", con los niveles Floor, Reflex y Finish y la revisión en contexto limpio (Hallmark) |
| `references/unslop-checklist.md` | TY, CO, LA, CP | **hecho** en la rama `design-review-tree`: dividido en tres, no en dos, sin cambiar ningún ID: `unslop-type-color.md` (TY, CO), `unslop-layout.md` (LA) y `unslop-components.md` (CP) |
| `references/copy-states-checklist.md` | CY, SF, MO, ME | existe (160); SF4 enlaza el umbral de objetivos del dueño (`tokens.md` o `accessibility-review`) |
| `references/mobile-checklist.md`, `outdated-checklist.md`, `dark-patterns-checklist.md` | MN, OM, DP | existen (25, 37, 91) |
| `references/visual-qa.md` | Capturas, scripts, foco, qué mirar | existe (134) |
| `references/regression-check.md` | Inventario antes y después de arreglar (Hallmark H1, adaptado) | **hecho** en la rama `design-review-tree` (`d2f77f7`) |
| `references/audit-report.md` | Formato del informe | existe (140) |
| `scripts/` (4) + `scripts/inventory.js` | Medición en la página | existen; **hecho** en la rama `design-review-tree`: `inventory.js` (en la página) e `inventory-diff.js` (con Node, compara dos inventarios) |

### `accessibility-review`

| Archivo | Cubre | Estado |
|---|---|---|
| `SKILL.md` | Cuándo, modos (proyecto, URL), proceso, límites | **nuevo** |
| `references/wcag-map.md` | Criterios WCAG 2.2 A/AA con nivel, qué se mide y cómo; dueño de los umbrales de revisión | **nuevo** |
| `references/keyboard-screen-reader.md` | Método de teclado y lector de pantalla, también en solo lectura | **nuevo** |
| `references/aria-patterns.md` | Patrones de componentes accesibles | **nuevo** |
| `references/content-access.md` | Texto alternativo, subtítulos, idioma, lenguaje claro, cognición | **nuevo** |
| `references/accessibility-statement.md` | Declaración y marco legal (enlaza `ethics.md` §3) | **nuevo** |
| `references/a11y-report.md` | Formato (extiende `review-method.md`) | **nuevo** |
| `scripts/a11y-checks.js` | Comprobaciones propias | **nuevo** |

### `seo-geo-optimizer`

| Archivo | Cubre | Estado |
|---|---|---|
| `SKILL.md` | Cuándo, modos, proceso | **nuevo** |
| `references/technical-seo.md` | Estado HTTP, indexación, canónicas, sitemap, `robots` | **nuevo** (recoge `implementation.md` §2 y `pages/` por enlace) |
| `references/metadata.md` | `title`, meta, Open Graph, con la regla de verdad | **nuevo** |
| `references/structured-data.md` | Tipos y campos por tipo de página | **nuevo** |
| `references/international.md` | `lang`, `hreflang`, `og:locale`, URL por idioma; país como pregunta de negocio | **nuevo** |
| `references/local-seo.md` | Negocio local sin inventar datos | **nuevo** |
| `references/geo-agents.md` | Hechos extraíbles, `llms.txt`, Markdown para agentes | **nuevo** |
| `references/seo-report.md` | Formato (extiende `review-method.md`) | **nuevo** |
| `scripts/seo-checks.js` | Comprobaciones en la página | **nuevo** |

### `content-web-optimizer`

| Archivo | Cubre | Estado |
|---|---|---|
| `SKILL.md` | Cuándo, proceso (revisar y reescribir sin añadir hechos) | **nuevo** |
| `references/voice-tone.md` | Voz, tono, registro (tú/usted) | **nuevo** |
| `references/ux-writing.md` | Errores, vacíos, confirmaciones, notificaciones | **nuevo** |
| `references/style-localisation.md` | Estilo por idioma, traducción, formatos | **nuevo** |
| `references/editorial.md` | Artículos, documentación, FAQ (enlaza `pages/blog-resources.md`, `support-contact.md`) | **nuevo** |
| `references/positioning-measurement.md` | Posicionamiento, segmentos, temperatura del tráfico, medición y experimentación | **nuevo** |
| `references/content-report.md` | Formato (extiende `review-method.md`) | **nuevo** |

## 4. Núcleo común

- **Cómo lo leerían.** Cada `SKILL.md` nuevo nombra en su "Order of authority" `${CLAUDE_SKILL_DIR}/../modern-design/references/ethics.md`, `.../content-truth.md` y `.../reasoning.md` (solo la parte general tras la división), los carga cuando los necesita, y sigue funcionando si faltan (un párrafo en el propio `SKILL.md` resume los dos límites duros). El orden de autoridad se copia igual en los cinco `SKILL.md`, `docs/ARCHITECTURE.md` y cada cabecera que lo declare.
- **¿Sirve el patrón actual?** Sí, con condiciones. `design-review` ya lo usa (`design-review/SKILL.md` 33, 71 y 72; `dark-patterns-checklist.md` 7) y CLAUDE.md lo permite como excepción al escáner. Las tres skills nuevas serán hermanas en `skills/` dentro del mismo plugin, que se copia entero a la caché, así que `../modern-design/` resuelve igual. Condiciones: (1) el escáner seguirá informando `reference_missing`, que no bloquea; (2) si el núcleo cambia de carpeta, cambian todas las rutas a la vez; (3) no comprobado en ejecución en esta auditoría, solo por estructura. Mover el núcleo a una carpeta de `skills/` sin `SKILL.md` no se ha verificado con `claude plugin validate`.
- **Plantillas.** `site-decisions.md` y `content-needed.md` siguen en `modern-design/references/templates/`; cada skill nueva necesita poder crearlas si es la primera en ejecutarse (ver `14-sin-rama.md`).

## 5. Cabeceras

Solo cinco archivos tienen la cabecera fija (Covers / Read when / Not here / Owner / Sources): `tokens.md`, `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md`.

No la tienen (42): `modern-design/SKILL.md`; en `modern-design/references/`: `content-truth.md`, `direction.md`, `ethics.md`, `implementation.md`, `motion.md`, `principles.md`, `reasoning.md`, `reasoning-examples.md`, `resources.md`, `responsive.md`, los trece `pages/*.md`, los nueve `sections/*.md`, `templates/content-needed.md`, `templates/site-decisions.md`; `design-review/SKILL.md` y las siete referencias de `design-review` (`audit-report.md`, `copy-states-checklist.md`, `dark-patterns-checklist.md`, `mobile-checklist.md`, `outdated-checklist.md`, `unslop-checklist.md`, `visual-qa.md`). Los `SKILL.md` y las plantillas probablemente no la necesitan; el resto sí según `docs/ARCHITECTURE.md` "How new references are written".

Ningún archivo de `skills/` pasa de 300 líneas; el más cercano es `unslop-checklist.md` (297).

**Hecho para `modern-design`** (ramas `core-reasoning` y `modern-design-tree`): todas sus referencias tienen la cabecera fija, salvo las dos plantillas de `templates/`, que se copian al proyecto del usuario y no la llevan. Ninguna lleva "(moves to …)": según §3 y las secciones "Dueño propuesto", ningún archivo actual de `modern-design` cambia de skill; las skills nuevas recogen partes por enlace. Quedan sin cabecera `modern-design/SKILL.md`, `design-review/SKILL.md` y las siete referencias de `design-review`.

**Hecho para `design-review`** (rama `design-review-tree`, `8f50517`): sus once referencias tienen la cabecera fija. Los dos `SKILL.md` siguen sin ella. Tras la división de `unslop-checklist.md`, el archivo más largo de `skills/` es `ux/pages/content-navigation.md` (284).

## 6. Límites de activación (borrador)

- **modern-design:** diseña, construye o rediseña interfaces (dirección, tokens, componentes, secciones, motion); no revisa interfaces terminadas ni audita accesibilidad, SEO o contenido en profundidad.
- **design-review:** revisa diseño y UX de una interfaz (proyecto propio o URL pública) y arregla o informa; no audita accesibilidad más allá de lo visible y medible (eso es `accessibility-review`), ni SEO (`seo-geo-optimizer`), ni reescribe contenido (`content-web-optimizer`).
- **accessibility-review:** audita y corrige accesibilidad según WCAG 2.2 AA (teclado, lector de pantalla, ARIA, contraste, contenido accesible, declaración); no opina sobre estética ni sobre conversión.
- **seo-geo-optimizer:** audita y mejora indexación, metadatos, datos estructurados, idiomas y preparación para motores de respuesta y agentes; no cambia el diseño visual ni escribe afirmaciones nuevas del negocio.
- **content-web-optimizer:** revisa y reescribe textos (voz, claridad, microcopia, estructura editorial, posicionamiento) a partir de hechos aportados; no inventa contenido, no cambia el diseño visual ni la estructura técnica.

## 7. Orden de trabajo propuesto

1. **Resolver las contradicciones altas** en las skills actuales: umbral de objetivos en revisión (1) y dial único (2). Luego las medias (4, 5, 6). No dependen de nada.
2. **Dividir `reasoning.md`** en parte general y `design-reasoning.md`, y mover la calidad de evidencia a `evidence.md`. Requisito de las tres skills nuevas. **Hecho** en la rama `core-reasoning` (cabeceras fijas en los seis archivos del núcleo y de razonamiento; `ethics.md` §5 se queda donde está).
3. **Extraer `review-method.md`** de `unslop-checklist.md` y `audit-report.md`, y dividir `unslop-checklist.md`. Requisito de las tres skills que revisan. **Hecho** en la rama `design-review-tree`.
4. **Decidir los archivos del proyecto** para cinco skills (quién crea `site-decisions.md`, qué secciones son de quién, dónde viven las plantillas).
5. **Poner la cabecera fija** a cada referencia cuando se revise (no en bloque). **Hecho para `modern-design`** en la rama `modern-design-tree` y **para `design-review`** en la rama `design-review-tree` (ver §5).
6. **`accessibility-review`:** depende de 2, 3 y de decidir el dueño de los umbrales (objetivos, contraste). `design-review` pasa a enlazarla para lo que no sea visible.
7. **`seo-geo-optimizer`:** depende de 2, 3 y de la regla de metadatos de `content-truth.md`; recoge por enlace `implementation.md` §2 y las `### Implementation` de `pages/`.
8. **`content-web-optimizer`:** depende de 2, 3 y de decidir si la familia CY se queda en `design-review` o pasa a esta skill.
9. **Descripciones y pruebas de activación** de las cinco skills en inglés y español (fase 4), con los límites de §6.
10. **En paralelo, huecos de `modern-design`:** `motion.md` (dueño único de tiempos), `components/`, secciones de los lotes B y C, `styles.md`, `navigation.md`.
11. **Mecanismos de Hallmark** (ver `13-review-method.md`): el inventario antes/después (H1) con el paso 3; el hero primero (H3) con `modern-design` paso 3; la calibración (H12) antes de probar las skills nuevas. H1 **hecho** en la rama `design-review-tree` (`regression-check.md`, `inventory.js`, `inventory-diff.js`), junto con los niveles y la revisión en contexto limpio (`review-method.md` §8 y §11) y 24 señales adaptadas como entradas de las listas; H3 y H12, pendientes.

## Qué no se leyó o no se verificó

- `docs/examples/` (resultados de pruebas, auditorías y sitios de ejemplo): fuera de la lista de lectura del encargo; citado solo por nombre.
- `docs/research/web-reasoning/` y `docs/research/implementation/`: fuera de la lista; citados como origen según `docs/SOURCES.md`.
- Hallmark: no se leyeron los temas (por instrucción), ni `anatomy.md`, `layout.md`, `craft.md`, `patterns.md`, `fonts.md`, `brand-truth.md`, `macrostructures.md`, `flow.md` (salvo el hook), `microinteractions.md`, `interaction-and-states.md`; de `sloplint.mjs` (4426 líneas) solo las opciones, la cabecera y el bloque `--kept`; de `eval/` solo `README.md` (no los scripts ni el contenido de `briefs.json`, salvo sus identificadores b1-b9).
- No se verificó en ejecución que `${CLAUDE_SKILL_DIR}/../modern-design/` funcione desde una skill nueva; la conclusión es estructural.
- Afirmaciones que siguen sin verificar en las skills: las de `docs/ROADMAP.md` "Pending verification" y las tres "verify before citing" (CNIL/AEPD, NIST SMS, EDPB 2026), más Next.js 16.4 y TanStack Start 1.0.
- Fuentes nuevas: licencias comprobadas en la web el 2026-11-25 por un subagente (sin leer su contenido): WAI-ARIA APG, A11Y Project, GOV.UK Design System, GOV.UK style guide, Google Search Central, schema.org (licencia de la prosa no confirmada), llms.txt (el sitio no declara licencia; se toma la del repo), Deceptive Patterns (sin licencia abierta), web.dev.
