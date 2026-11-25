# 04 · Marca e identidad visual

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:direction.md | `### 1. Read what already exists` | 13-25 | Leer material de marca existente (logo, colores, fuentes, fotos) y pedir documentación del negocio | regla | — |
| md:direction.md | `### 2. Gather context` | 26-56 | Tono: tres adjetivos y uno a evitar; marca y activos | regla | — |
| md:direction.md | `### 3. Research live references` | 57-74 | Referencias vivas, extraer principios, no copiar | regla | frontend-design, taste-skill |
| md:direction.md | `### 5. Commit to a direction` | 94-115 | Dirección con nombre tomada del mundo del sujeto; un elemento audaz; combinaciones por defecto de los generadores | regla + heurística | frontend-design (Apache-2.0) |
| md:direction.md | `### 6. Run the template test on the brief` | 116-119 | Cambiar el nombre por el de un competidor | heurística | — |
| md:tokens.md | `## 4. The method against convergence` | 86-107 | Derivar paleta y caras de la promesa, el material real, referencias de otros sectores y una restricción | regla | impeccable `colorize.md`, `new-work.md` |
| md:tokens.md | `## 7. The record in site-decisions` | 182-191 | Describir colores con palabras en el brief; nombres de token en site-decisions | regla | impeccable `document.md`, emilkowalski `learn-taste` |
| md:tokens-color.md | `## 3. Strategy` | 53-65 | Estrategias restrained, committed, full palette, drenched; la psicología del color es débil | heurística | impeccable, field guide |
| md:tokens-color.md | `## 5. A brand color that fails a role` | 80-89 | Conservar el color de marca como valor base y derivar un tono que pase contraste | regla | taste-skill, ui-ux-pro-max |
| md:tokens-color.md | `## 13. When the user has no brand colors` | 181-188 | Paleta sin marca = supuesto de diseño, nunca colores del negocio | regla | — |
| md:tokens-type.md | `## 1. Choose by function` (`### Against the face of the season` 27-36) | 11-36 | Caras por función; nunca por asociación con el sector; sin lista de fuentes | regla | impeccable |
| md:tokens-color-dark.md | `## 1. Light, dark or both` | 11-24 | Claro u oscuro desde la escena de uso, o siguiendo la marca | regla | impeccable |
| md:sections/* | `## Style notes` (header 87-89, hero 83-85, cta 78-80, social-proof 75-77, benefits 80-82, forms 81-83, final-cta 67-69, footer 76-78) | varias | Cómo cambia cada sección según la dirección (minimal, editorial, oscura, brutalista) | heurística | field guide |
| dr:unslop-checklist.md | `## Typography` (TY1, TY2, TY11) · `## Color` (CO1, CO8) · `## Components` (CP3, CP9) | 24-99 · 100-161 · 222-281 | Señales de identidad genérica, con "Fine when" cuando la marca lo justifica | regla | unslop, Impeccable, taste-skill, IG |
| md:resources.md | `## Fonts` · `## Color and palettes` | 20-28 · 13-19 | Catálogos para comprobar, no para elegir | dato | — |
| md:templates/site-decisions.md | `## Template` | 23-58 | Registro de estándares de marca como nombres de token y decisiones del usuario | regla | — |

## 2. Cobertura

**Escasa.** El plugin trata la marca como un insumo que se lee y se respeta, y tiene un método fuerte contra la convergencia visual. Lo que un diseñador de marca esperaría no está: cómo leer y respetar un manual de marca, qué hacer con un logo débil o sin variantes, voz y tono de marca más allá de tres adjetivos, sistema de iconografía e ilustración propio, fotografía de marca (dirección, tratamiento), y cómo se mantiene la identidad entre páginas y canales.

## 3. Duplicados y contradicciones

- **Combinaciones por defecto de los generadores:** md:direction.md §5 (106-114), md:tokens.md §4 (88-96), dr:unslop-checklist.md CO1, CO8, TY2, TY11, CP7. Coherentes (direction lista, tokens remite a los IDs).
- **Crema y beige:** md:direction.md 108, md:tokens.md 96, md:tokens-color.md §6 (93), CO8 (147-152). CO8 "Fine when" pone como ejemplos un estudio de cerámica y una tienda de vinos ("warm, crafted or food-related"), mientras que `tokens.md` §4 exige que una parte del brief lo pida. **CONTRADICCIÓN** de criterio: CO8 lo da por bueno por categoría ("food-related"), y `tokens.md` §4 y `tokens-type.md` §1 prohíben elegir por asociación con el sector. Gravedad **media** (una revisión aceptaría lo que el paso de tokens rechaza).
- **Estilos:** cada sección tiene "Style notes" por estilo, y md:reasoning.md 166 apunta a un `styles.md` que no existe. El field guide (`05_DESIGN_STYLES.md`) asigna estilos por sector ("Best for"), contrario a `tokens.md`. Solo investigación; anotar antes de escribir `styles.md`.
- **Respetar `DESIGN.md` y `PRODUCT.md`:** modern-design/SKILL.md 26, direction.md 19 y 188, tokens.md 100. Coherentes.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Lectura de la marca existente y del material | `modern-design`, `direction.md` | `tokens.md` |
| Dirección visual y antidefectos | `modern-design`, `direction.md` (§5) | `tokens.md` §4, `design-review` |
| Voz y tono de marca | sin dueño; candidato: `content-web-optimizer` | `direction.md` (tono), copy de `sections/` |
| Estilos (minimalismo, editorial…) | `modern-design`, `styles.md` (pendiente) | `sections/*` Style notes |
| Señales de identidad genérica en revisión | `design-review`, `unslop-checklist.md` | — |

## 5. Huecos

- ¿Cómo se lee un manual de marca y qué partes son innegociables frente a las que el diseño puede interpretar?
- ¿Qué hacer cuando el logo no funciona en pequeño, en oscuro o en una sola tinta?
- ¿Cómo se define la voz de marca de forma que el copy de todas las secciones la mantenga?
- ¿Cuándo conviene un sistema propio de iconos o ilustración y cuándo una librería?
- ¿Qué dirección y tratamiento fotográfico se pide al usuario cuando aporta sus fotos?
- ¿Cómo se mantiene la identidad cuando el sitio tiene varias zonas (marketing, app, documentación)?
- ¿Cuándo un estilo reconocible (neo-brutalismo, oscuro tipo SaaS) es identidad y cuándo es la plantilla del momento?

## 6. Fuentes candidatas

- **Conocidas:** impeccable `skill/reference/new-work.md`, `colorize.md`, `document.md` (DESIGN.md como registro del sistema); taste-skill `references/system.md`; ui-ux-pro-max `brand/references/` (rechazados sus valores por sector, `tokens-sources.md` C29, C40); Hallmark `references/brand-truth.md` (no tematizar una marca real de memoria; no leído entero) y `references/design-md.md` (bloquear el sistema); `docs/research/landing-field-guide/05_DESIGN_STYLES.md`.
- **Nuevas:** ninguna verificada para esta rama.
