# 07 · Contenido: copywriting, UX writing y microcopy

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:sections/hero.md | `## Content` | 15-29 | Eyebrow solo con información real, titular de resultado (4-12 palabras), subtítulo, CTA, reaseguro, prueba de la plantilla | regla | field guide |
| md:sections/cta.md | `## Content` | 13-21 | Verbo más resultado (2-5 palabras), la etiqueta predice la pantalla siguiente, microcopia que tranquiliza sin nombrar el miedo, flechas solo en el principal | regla | field guide |
| md:sections/benefits.md | `## Content` | 13-21 | Titular de beneficio, una frase de mecanismo, prueba; prueba "so that"; vocabulario del cliente | regla | field guide |
| md:sections/forms.md | `## Content` · `## States and interaction` | 13-23 · 34-45 | Etiqueta de envío con resultado, qué pasa después, mensajes de error que dicen cómo arreglar | regla | field guide |
| md:sections/final-cta.md | `## Content` | 13-23 | Reformular la promesa sin repetir el titular; sin información nueva | regla | field guide |
| md:sections/social-proof.md | `## Content` | 13-32 | Formatos de prueba con origen | regla | field guide |
| md:sections/header.md | `## Content` | 23-29 | Palabras del visitante, no jerga interna | regla | field guide |
| md:principles.md | `#### P07 · Specificity: numbers, names and dates instead of categories` | 82-88 | Número, nombre o fecha en vez de resumen genérico (solo si es verdad) | heurística | Stripe, Airbnb |
| md:principles.md | `#### P17 · Prevent errors and help recovery (heuristics 5 and 9)` | 154-160 | Guía de mensajes de error | dato | NN/g, Expedia |
| md:pages/blog-resources.md | cabecera (7) y `## Article list / Blog index` · `## Article / Post` · `## Documentation` | 1-14 · 15-56 · 57-101 · 102-143 | Principios de escritura, títulos honestos, pirámide invertida, Diátaxis | heurística + dato | NN/g, Diátaxis |
| md:pages/support-contact.md | `## FAQ / Help centre` · `## Support centre / Tickets` | 59-101 · 102-140 | Preguntas en palabras del usuario, respuesta en la primera frase; estados de ticket en lenguaje llano | heurística | NN/g |
| md:pages/states-system.md | `## Error 404 (page not found)` · `## Error 500 (server error)` · `## Empty state` | 15-59 · 60-102 · 145-185 | Lenguaje de error sin culpa ni jerga | dato | NN/g |
| md:pages/authentication.md | `### Specifics` de Sign-up, Recovery y Verification | 34-38 · 126-130 · 169-172 | Reglas de contraseña visibles antes; mensaje idéntico si la cuenta existe; explicar por qué se verifica | heurística | NIST |
| md:pages/legal.md | `## Terms & conditions` (`### Specifics` 32-35) · `## Privacy policy` | 17-57 · 58-99 | Resumen en lenguaje llano y capas | heurística | GDPR Art. 12, WP29 |
| md:reasoning.md | `## 8. How to present design work` | 182-187 | Explicar en términos de la duda del usuario | regla | — |
| md:direction.md | `### 2. Gather context` (fila Tone) | 26-56 | Tres adjetivos y uno a evitar | regla | — |
| dr:copy-states-checklist.md | `## Copy` (CY1-CY8) | 5-56 | Titulares genéricos, etiquetas redundantes, contenido inventado, tono hype, fórmulas, puntos entre palabras, "real" y "quiet", frases de dos palabras | regla | unslop, IG |
| dr:copy-states-checklist.md | `## States and feedback` (SF2) | 57-103 (64-67) | Errores que dicen qué falló y cómo recuperarse | regla | — |
| dr:unslop-checklist.md | `## Typography` (TY4, TY7) | 24-99 | Etiquetas sobre encabezados; puntos finales en titulares | regla | unslop, IG |

## 2. Cobertura

**Parcial.** Hay buena microcopia por sección (CTA, formularios, errores) y un detector sólido de copy genérico (CY1-CY8). Lo que un redactor o un UX writer esperaría y falta: **voz y tono** como sistema (más allá de tres adjetivos), nivel de lectura, "tú" frente a "nosotros", encabezados que se sostienen solos, guía de estilo (mayúsculas, puntuación, números, fechas), **localización** (idiomas, longitud del texto traducido, formatos), copy de estados vacíos y notificaciones como familia, y un método para escribir desde datos del cliente (reseñas, tickets). El field guide tiene parte de esto (`04_CROSS_CUTTING.md` §4) sin portar.

## 3. Duplicados y contradicciones

- **Etiquetas sobre encabezados (eyebrows):** md:sections/hero.md 19 (usar solo con información real), dr:unslop-checklist.md TY4 (47-52, "outdated"), md:direction.md 112 (cromo de plantilla). Coherentes. Hallmark es más estricto (gate 54, Floor, siempre prohibido): conflicto con nuestra regla contextual si se adopta tal cual.
- **Flechas en botones:** md:sections/cta.md 20 (solo en el principal y si avanza) y dr:unslop-checklist.md CP7 (261-266). Coherentes. El field guide (`01_MANDATORY.md` 204) recomienda flecha animada; la skill no lo copia.
- **"Learn more" como acción principal:** md:sections/hero.md `## Common errors` y md:sections/cta.md `## Content`. Coherentes.
- **Mensajes de error:** md:principles.md P17, md:sections/forms.md `## States and interaction`, md:pages/interaction-creation.md (GOV.UK), md:pages/states-system.md 404/500, SF2. Coherentes, repetidos en cinco sitios sin dueño.
- **Contenido inventado:** CY3 es a la vez regla de copy y de verdad; dueño en `content-truth.md` (rama 08).

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Voz, tono, estilo, nivel de lectura, localización | `content-web-optimizer`, archivo nuevo de voz y estilo | `modern-design` `sections/`, `design-review` CY |
| Microcopia por sección (CTA, formulario, reaseguro) | `modern-design`, `sections/` (cada sección su contenido) | `content-web-optimizer` |
| Mensajes de error, vacío y confirmación como familia | `content-web-optimizer`, archivo nuevo de UX writing | `pages/states-system.md`, `sections/forms.md`, SF2 |
| Detección de copy genérico | `design-review`, `copy-states-checklist.md` (familia CY), o `content-web-optimizer` si se separa | — |
| Escritura editorial y documentación | `content-web-optimizer` | `pages/blog-resources.md` |

## 5. Huecos

- ¿Cómo se define y se registra la voz de un sitio para que todas las secciones la mantengan?
- ¿Cuándo conviene "tú" y cuándo "usted" (o "you" formal e informal) según idioma y público?
- ¿Qué nivel de lectura pide cada tipo de página y cómo se comprueba?
- ¿Cómo se escribe un encabezado que se entienda solo, para quien solo lee los H2?
- ¿Qué reglas de estilo (mayúsculas, números, fechas, monedas) cambian por idioma?
- ¿Cómo se diseña el copy para que resista la traducción (longitud, orden, plurales)?
- ¿Cómo se convierten reseñas, tickets y llamadas en copy sin inventar ni citar sin permiso?
- ¿Qué tono corresponde a un error, un vacío, una confirmación y una cancelación?

## 6. Fuentes candidatas

- **Conocidas:** `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §4 (sistema de copy) y `02_IMPORTANT.md` §1, §4, §7 (dolor, testimonios, FAQ); impeccable `skill/reference/` (no auditado para copy); Hallmark `references/craft.md` §6 (copy: no leído) y gate 19 en `references/gates.md` (copy tells), 63 (puntuación de plantilla), 69 (eco de un dato); unslop (ya fuente de CY); Vercel Web Interface Guidelines (sección de contenido y copy en `AGENTS.md`).
- **Nueva (candidata):** GOV.UK style guide A to Z, https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/ , OGL v3.0 salvo indicación (pie de página). La URL antigua `gov.uk/guidance/style-guide` redirige con 301. Verificado 2026-11-25.
