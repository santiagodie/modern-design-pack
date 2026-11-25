# 09 · Accesibilidad

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:implementation.md | `## 7. Accessibility` | 133-143 | Objetivo WCAG 2.2 AA; MUST de semántica, foco, movimiento reducido, formularios, contraste y objetivos; regiones vivas | regla (MUST) | WCAG 2.2, EAA |
| md:implementation.md | `## 5. Platform features and agent mistakes` | 109-123 | `dialog`, `popover`, `details`; foco al cambiar de vista; `:user-invalid`, `aria-invalid` | regla | MWG |
| md:tokens.md | `### Focus` · `### Targets` · `### Reduced motion` | 112-121 · 122-133 · 142-149 | Tokens de foco, objetivos (MUST 24 px, SHOULD 44 px primarios táctiles), movimiento reducido en un solo sitio | regla (MUST) | WCAG 2.4.7, 1.4.11, 2.4.11, 2.4.13, 2.5.5, 2.5.8; Apple HIG; MWG |
| md:tokens-color.md | `## 7. Contrast` (`### Color is never the only signal` 121-126) · `## 9. The focus color` · `## 10. User preferences and forced colors` | 102-126 · 148-157 · 158-165 | Contraste por par real, color nunca única señal, foco 3:1 en toda superficie, `prefers-contrast`, `forced-colors` | regla (MUST) | WCAG 1.4.1, 1.4.3, 1.4.6, 1.4.11; MWG |
| md:tokens-color-dark.md | `### Check every theme` | 41-44 | Contraste en cada tema | regla (MUST) | — |
| md:tokens-type.md | `## 5. Units and fluid sizes` | 82-98 | Texto redimensionable al 200 %; `rem`; `clamp()` con término en `rem` | regla (MUST) | WCAG 1.4.4, MWG |
| md:tokens-space.md | `### Safe areas and fixed bars` · `## 6. Target sizes` | 78-84 · 85-98 | `scroll-padding` bajo barras fijas; tamaño de controles desde los tokens; excepción de espaciado | regla (MUST) | WCAG 2.4.11, 2.5.8; Apple HIG |
| md:responsive.md | `## Phone (up to about 600 px)` (línea 43) · `## Baseline` | 40-53 · 19-30 | Objetivos; nunca desactivar el zoom | regla | WCAG 2.5.8 |
| md:sections/header.md · hero.md · cta.md · social-proof.md · benefits.md · forms.md · final-cta.md · footer.md | `## Accessibility` | 48-54 · 52-57 · 49-54 · 49-53 · 51-55 · 46-52 · 40-45 · 48-52 | Requisitos por sección (salto al contenido, un `h1`, nombres accesibles, `alt`, etiquetas, resumen de errores, landmarks) | regla | WCAG 2.2 |
| md:principles.md | `#### P18 · Accessibility as trust (and as a legal obligation)` | 161-166 | Accesibilidad como confianza y obligación; WCAG 2.1 AA mínimo | regla + dato | EAA, Bird & Bird |
| md:ethics.md | `## 3. Regulatory framework…` (fila EAA, 34) · `## 6. Minimum compliance checklist by page type…` (76) | 30-41 · 72-78 | EAA y EN 301 549 (WCAG 2.1 AA); mínimo por tipo de página | dato + regla | Bird & Bird |
| md:pages/* | errores críticos con accesibilidad (p. ej. content-navigation.md 223 mapa solo visual; management-admin.md 40 color como única señal; legal.md P18) | varias | Accesibilidad por tipo de página | regla | WCAG/EAA |
| dr:copy-states-checklist.md | `### SF4. Small touch targets` · `### SF5. Missing focus states` · `### MO4. Motion that ignores the user` · `### ME2. Zoom disabled` · `### ME3. Missing language attribute` · `### ME4. Skipped heading levels` | 74-77 · 79-82 · 123-126 · 141-144 · 146-149 · 151-154 | Hallazgos de accesibilidad en revisión | regla | Vercel, unslop |
| dr:unslop-checklist.md | `### CO5. Low text contrast` | 128-132 | Contraste bajo, crítico en cuerpo y CTA | regla | — |
| dr:mobile-checklist.md | `## Mobile, measurable` (MN1) | 5-20 | Zoom desactivado | regla | emilkowalski |
| dr:dark-patterns-checklist.md | `### Minimum by page type` (fila Checkout/login/forms, 89) | 83-91 | WCAG 2.1 AA o superior en formularios y pago | regla | `ethics.md` |
| dr:visual-qa.md | `## Process` (paso 5, foco) · `## What to look at per width` | 29-76 (45) · 77-112 | Pasada de foco con Tab; objetivos y contraste por ancho | regla | Vercel |
| design-review/scripts/page-checks.js | comentario de cabecera y `minTarget` | 1-35 (13) | Objetivos pequeños: 44 px con puntero grueso, 24 px con fino | dato (script) | — |

## 2. Cobertura

**Parcial.** Para lo visual (contraste, foco, objetivos, movimiento, zoom, formularios) la cobertura es buena y está citada con criterios WCAG verificados. Lo que un especialista en accesibilidad esperaría y falta: **teclado y lector de pantalla** como método (orden de foco, trampas, anuncios, nombres y roles más allá de formularios), **patrones ARIA** de componentes (pestañas, menús, combos, diálogos), **contenido** (texto alternativo de calidad, subtítulos, lenguaje claro, idioma de partes), **cognición** (tiempo, consistencia de ayuda 3.2.6, autenticación accesible solo citada), **declaración de accesibilidad**, **pruebas con tecnología de apoyo** y límites de las herramientas automáticas, y un mapa de criterios WCAG 2.2 completo con nivel.

## 3. Duplicados y contradicciones

- **CONTRADICCIÓN · tamaño de objetivo en revisión.** Construcción: md:tokens.md 124-126, md:tokens-space.md 87-89, md:implementation.md 141, md:responsive.md 43 y md:sections/cta.md 53: MUST 24 × 24 CSS px; SHOULD 44 px solo para acciones primarias con puntero grueso. Revisión: dr:copy-states-checklist.md SF4 (75: "smaller than about 44 × 44 px at 375 px wide", crítico si la navegación o el CTA cuesta pulsar), dr:visual-qa.md 82 y 98 ("Tap targets under about 44 px") y `page-checks.js` 13 (umbral 44 px para **todos** los enlaces, botones y campos con puntero grueso). Gravedad **alta**: la revisión marca como hallazgo objetivos de 24-43 px que el build permite (secundarios, enlaces del pie, controles densos), y el ciclo build→revisión→build no converge. Es el mismo tipo de fallo que el antiguo 44 frente a 48.
- **CONTRADICCIÓN · versión de WCAG.** md:implementation.md 135, md:sections/index.md 41 y todos los `tokens*.md` apuntan a WCAG 2.2 AA (con 2.4.11 y 2.5.8, que solo existen en 2.2). md:principles.md P18 (164: "WCAG 2.1 AA as a minimum (aim for 2.2)"), md:ethics.md §6 (76: "WCAG 2.1 AA") y dr:dark-patterns-checklist.md 89 ("WCAG 2.1 AA or better") fijan 2.1. md:ethics.md 34 dice correctamente que EN 301 549 remite a 2.1 (hecho legal), pero el mínimo de revisión queda en 2.1. Gravedad **media**: la revisión por página puede aceptar como "mínimo" lo que el build exige más alto (objetivos, foco no tapado).
- **Severidad de inputs bajo 16 px:** dr:mobile-checklist.md MN2 (12: minor) frente a dr:copy-states-checklist.md SF7 (92: tip) para la misma señal. Gravedad **baja**.
- **Zoom desactivado:** ME2, MN1, OM2 (outdated-checklist.md 12), md:responsive.md 23. Coherentes; triple duplicado con "same as".
- **Movimiento reducido:** md:tokens.md 144 (evitar la anulación global de `0.01ms`), md:implementation.md 115 y 139, md:sections/hero.md 48, MO4, OM10 (outdated-checklist.md 21). Coherentes.
- **Foco no tapado por barras fijas:** md:tokens.md 114, md:tokens-space.md 81, md:sections/header.md 53, SF8 (`scroll-margin-top`). Coherentes en el fondo; `scroll-padding` frente a `scroll-margin` (ver `06-ui.md`).
- **"Needs a real device":** md:responsive.md 77-88, dr:visual-qa.md 119, dr:audit-report.md 127 (plantilla). Tres listas casi iguales (la de `responsive.md` añade el modo app instalada). Gravedad baja.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Requisitos de accesibilidad al construir (MUST) | `modern-design`, `implementation.md` §7 y `tokens.md` §5 (objetivos y foco: un solo dueño, `tokens.md`) | `sections/*` Accessibility |
| Auditoría de accesibilidad en profundidad (criterios WCAG, teclado, lector de pantalla, ARIA, declaración) | `accessibility-review` (nueva) | `design-review` (solo lo visible y medible: SF4, SF5, CO5, MO4, ME2-ME4) |
| Umbrales de revisión (objetivos, contraste) | `accessibility-review`, archivo de criterios, enlazado por `design-review` y por `page-checks.js` | — |
| Marco legal (EAA, EN 301 549) | núcleo común, `ethics.md` §3 | `accessibility-review` |

## 5. Huecos

- ¿Qué umbral de objetivo aplica la revisión a un control secundario y a uno primario, con puntero fino y grueso?
- ¿Cómo se prueba una página con teclado y con lector de pantalla en una auditoría por URL de solo lectura?
- ¿Qué patrones ARIA necesita cada componente del lote D (pestañas, menús, acordeones, combos, diálogos)?
- ¿Cuándo es correcto un texto alternativo vacío y cómo se escribe uno bueno para un gráfico o una captura?
- ¿Qué pide WCAG 2.2 en cognición y autenticación (3.3.7, 3.3.8, 3.2.6) para los tipos de página del plugin?
- ¿Cuándo debe una web publicar una declaración de accesibilidad y qué debe incluir?
- ¿Qué parte de una auditoría pueden hacer las herramientas automáticas y qué parte no?
- ¿Cómo se reporta un fallo medido que el usuario decidió ("decided by user") en una auditoría de accesibilidad?

## 6. Fuentes candidatas

- **Conocidas:** Modern Web Guidance `guides/accessibility/` (CC BY 4.0, adaptar con "changes made"); Vercel Web Interface Guidelines (MIT, `AGENTS.md`: foco, formularios, teclado); impeccable `skill/reference/harden.md`; ui-ux-pro-max `data/ux-guidelines.csv` (filas de accesibilidad); Hallmark gates 26a, 27, 33, 40, 41, 62, 73 en `references/gates.md` (foco, movimiento, decorativos, contraste, texto oculto en reposo, texto tapado); `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §7.
- **Nuevas (candidatas, verificadas 2026-11-25):**
  - WAI-ARIA Authoring Practices Guide, https://www.w3.org/WAI/ARIA/apg/ , W3C Software and Document License (`w3c/aria-practices` LICENSE.md).
  - The A11Y Project checklist, https://www.a11yproject.com/checklist/ , Apache-2.0 (archivo `LICENSE-APLv2` del repo `a11yproject/a11yproject.com`).
  - GOV.UK Design System (accesibilidad de componentes y patrones), https://design-system.service.gov.uk , contenido OGL v3.0, código MIT.
