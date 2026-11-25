# 10 · SEO y GEO (SEO técnico, metadatos, datos estructurados, idiomas, preparación para agentes)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:implementation.md | `## 2. Static sites` | 54-67 | HTML semántico legible sin JavaScript (para buscadores y agentes); códigos de estado reales (404, 410, 301; soft 404); sitemap, feeds, datos estructurados e imágenes para compartir en el build; `llms.txt` y Markdown por página en documentación | regla | Google, llms.txt |
| md:implementation.md | `## 10. Summary by page type` (columna Indexed) | 164-201 | Qué tipos de página se indexan | dato | — |
| md:pages/entry-marketing.md | `### Implementation` (About us) | 150-154 | Datos estructurados de organización | regla | — |
| md:pages/content-navigation.md | `### Implementation` de Catalogue, Category, Product, Search | 56-60 · 96-100 · 147-151 · 193-197 | URL por filtro y página, migas con datos estructurados, datos de producto, búsqueda interna no indexada | regla | Baymard |
| md:pages/blog-resources.md | `### Implementation` de Article list, Article, Documentation | 49-53 · 94-98 · 139-143 | RSS, datos de artículo, URL canónica, anclas estables, `llms.txt`, redirecciones al renombrar | regla | llms.txt, Diátaxis |
| md:pages/states-system.md | `### Specifics` de 404 y Maintenance | 32-36 · 119-122 | 404 real; 503 con `Retry-After` en mantenimiento, no más de 1-2 días | dato | Google Search Central |
| md:pages/management-admin.md · user-account.md · commerce-*.md · authentication.md | `### Implementation` | varias | Páginas privadas no indexadas | regla | — |
| md:content-truth.md | `## The rule` (líneas 12 y 16) · `## Placeholders` (línea 34) | 7-18 · 19-37 | `title`, meta description y datos estructurados son contenido; sin afirmaciones ni rellenos en lugares que leen las máquinas; país antes de `og:locale` y `hreflang` | regla (MUST) | — |
| dr:copy-states-checklist.md | `### CY3. Invented content and unverifiable claims` (revisión de afirmaciones, 20) | 17-22 | Revisar `title`, meta, `og:*`, `lang`, `hreflang` y datos estructurados | regla | — |
| dr:copy-states-checklist.md | `### ME1. Default favicon and missing meta` · `### ME3. Missing language attribute` · `### ME4. Skipped heading levels` | 136-139 · 146-149 · 151-154 | Meta básica, idioma, jerarquía de encabezados | regla | — |
| design-review/scripts/page-checks.js | objeto devuelto | 1-35 | `title`, `description`, `ogImage`, `lang`, `favicon`, `h1Count` | dato (script) | — |
| design-review/SKILL.md | `## Process` (Mode 2, paso 3: leer el HTML) | 28-62 (52) | Estructura, encabezados, meta, scripts, atributos de imagen | regla | — |
| dr:audit-report.md | `## Template` (apéndice Lighthouse con columna SEO) | 51-140 (133-139) | Puntuación SEO de laboratorio | dato | Lighthouse |
| md:sections/footer.md | `## Level-up` (línea 70) | 65-71 | Enlaces internos del pie según tipo de página | heurística | field guide |
| md:sections/index.md | `## Priority matrix (persuade pages)` (línea 41) | 31-42 | "SEO basics" como necesidad transversal, sin desarrollo | — | — |

## 2. Cobertura

**Escasa.** Hay buenas reglas técnicas sueltas (estado HTTP, HTML sin JavaScript, datos estructurados generados en el build, `llms.txt`) y una regla de verdad muy útil para metadatos, pero no hay un tratamiento de SEO ni de GEO como disciplina. Un profesional esperaría: estrategia de palabras clave e intención de búsqueda, `title` y meta description (longitud, contenido), URL y canónicas, indexación (`robots`, `noindex`, sitemap), enlazado interno, datos estructurados por tipo con sus requisitos, imágenes para buscadores, internacionalización (`hreflang`, URL por idioma), SEO local (perfil de empresa, NAP), rendimiento como señal, y para GEO: cómo escribir para que los motores de respuesta extraigan y citen datos correctos. El field guide (`04_CROSS_CUTTING.md` §8 "SEO & AI-Search Foundations") tiene parte de esto y no se ha portado.

## 3. Duplicados y contradicciones

- **Códigos de estado:** md:implementation.md 63 y md:pages/states-system.md (404 35, 500 97, mantenimiento 120). Coherentes.
- **Datos estructurados:** md:implementation.md 64 (generarlos en el build), cinco entradas de `pages/` (Organization, BreadcrumbList, Product, Article) y md:content-truth.md 34 (nada sin confirmar en ellos). Coherentes y complementarios, sin un dueño que diga qué tipos y qué campos.
- **Indexación de la búsqueda interna:** md:implementation.md tabla (178: "Usually not") y md:pages/content-navigation.md 196 ("internal search pages not indexed"). Coherentes.
- **Sin contradicciones internas.** Una con investigación propia: `docs/research/landing-field-guide/04_CROSS_CUTTING.md` 211 propone una meta description con "the promise + a reason to click", mientras md:content-truth.md 34 limita la meta a lo confirmado hasta que llegan los datos. Gravedad **media** si se porta el field guide sin pasar por `content-truth.md`.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| SEO técnico (estado, indexación, canónicas, sitemap, `robots`) | `seo-geo-optimizer` (nueva) | `modern-design` `implementation.md` §2 |
| Metadatos (`title`, meta, Open Graph) y su verdad | `seo-geo-optimizer`, con la regla en `content-truth.md` | `design-review` ME1, CY3 |
| Datos estructurados por tipo de página | `seo-geo-optimizer` | `pages/` Implementation |
| Idiomas y regiones (`lang`, `hreflang`, `og:locale`) | `seo-geo-optimizer`, con la regla de país en `content-truth.md` | `design-review` ME3 |
| Preparación para agentes (`llms.txt`, Markdown, hechos en HTML) | `seo-geo-optimizer` | `implementation.md` §2, `blog-resources.md` |
| Medición de SEO en una auditoría de diseño | `design-review` solo ME1-ME4 y la puntuación de Lighthouse | `seo-geo-optimizer` |

## 5. Huecos

- ¿Cómo se elige la intención de búsqueda de cada página y cómo se refleja en `title`, H1 y URL sin cambiar la promesa?
- ¿Cuándo una página debe ser `noindex` (variantes de campaña, búsqueda interna, filtros) y cuándo canónica a otra?
- ¿Qué tipos de datos estructurados aplican a cada tipo de página del plugin y qué campos son obligatorios?
- ¿Qué hacer con `FAQPage`, `Review` o `AggregateRating` cuando no hay datos reales?
- ¿Cómo se organizan las URL y `hreflang` de un sitio en varios idiomas o países?
- ¿Qué necesita un negocio local para aparecer en búsquedas locales sin inventar datos (nombre, dirección, teléfono)?
- ¿Cómo se escribe para que un motor de respuesta extraiga y cite hechos correctos (GEO)?
- ¿Qué debe contener `llms.txt` y cuándo tiene sentido fuera de la documentación?
- ¿Cómo se audita el SEO de una URL pública en modo de solo lectura sin herramientas de pago?

## 6. Fuentes candidatas

- **Conocidas:** `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §8; `docs/research/implementation/01_foundations_architecture.md` (static, `llms.txt`) y su registro de fuentes en `docs/SOURCES.md` (Google HTTP status y soft 404, llms.txt); Modern Web Guidance (indexación de HTML semántico, no auditado para SEO); Vercel Web Interface Guidelines (metadatos en `AGENTS.md`). Impeccable, taste-skill, ui-ux-pro-max, emilkowalski, unslop y Hallmark no cubren SEO (Hallmark F23 solo exige `lang`, `<title>` y meta description).
- **Nuevas (candidatas, verificadas 2026-11-25):**
  - Google Search Central documentation, https://developers.google.com/search/docs , contenido CC BY 4.0, código Apache 2.0 (pie de página, site policies).
  - schema.org, https://schema.org , vocabulario CC BY-SA 3.0 (`/docs/terms.html`), repo Apache-2.0; la licencia de la prosa no está confirmada. Share-alike si se adapta.
  - llms.txt, https://llmstxt.org , repo `AnswerDotAI/llms-txt` Apache-2.0; el sitio no declara licencia propia.
