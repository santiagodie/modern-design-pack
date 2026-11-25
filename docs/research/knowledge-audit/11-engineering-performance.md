# 11 · Ingeniería y rendimiento (renderizado, estado, Core Web Vitals, límites de seguridad)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:implementation.md | `# Implementation` | 1-10 | Fuerza de las reglas (MUST solo seguridad, accesibilidad, legal y verdad); fechas y "verify before citing" | regla | — |
| md:implementation.md | `## 1. Rendering, decided per route` (`### Static site or app` 34-39, `### Frameworks (November 2026)` 40-53) | 11-53 | Modo de renderizado por ruta y componente; estático o app; tabla de frameworks fechada | regla + dato | Astro, Next.js 16/16.4, Nuxt, SvelteKit, React Router 7, TanStack Start |
| md:implementation.md | `## 2. Static sites` | 54-67 | HTML legible sin JS, colecciones tipadas, bloques de sección, formularios sin JS, secretos, estados HTTP, bfcache, view transitions | regla | — |
| md:implementation.md | `## 3. Apps: kinds of state` | 68-90 | Tipos de estado y su fuente; URL; cookies de sesión; optimistic UI solo en acciones reversibles | regla (MUST en secretos, sesión y dinero) | — |
| md:implementation.md | `## 4. Reuse layers` | 91-108 | Capas y reutilización; DTCG; shadcn; container queries; un solo catálogo de negocio | regla | DTCG, shadcn/ui |
| md:implementation.md | `## 5. Platform features and agent mistakes` | 109-123 | Elementos nativos y comprobación antes de entregar | regla | MWG, Search Engine Journal |
| md:implementation.md | `## 6. Performance` | 124-132 | Core Web Vitals p75; LCP en el HTML con `fetchpriority`; dimensiones; fuentes propias; tareas largas; terceros | regla | web.dev |
| md:implementation.md | `## 9. Boundaries` | 151-163 | Qué no revisa el plugin (seguridad de backend) | regla | OWASP |
| md:implementation.md | `## 10. Summary by page type` | 164-201 | Estático, renderizado, JS e indexación por tipo | dato | — |
| md:pages/* | `### Implementation` en cada entrada (p. ej. entry-marketing.md 58, 107, 150, 201, 244; content-navigation.md 56, 96, 147, 193, 231, 274) | varias | Estático, renderizado, datos y estado, anti-patrones por tipo | regla | `implementation.md` |
| md:principles.md | `#### P03 · Speed is persuasion (Doherty threshold, perceived performance)` | 56-61 | La velocidad como persuasión | dato | Deloitte/Google |
| md:tokens.md | `## 6. Format` | 150-181 | Un CSS de custom properties; capas; `@property`; DTCG; Tailwind v4 | regla | DTCG, Tailwind |
| md:tokens-type.md | `## 2. Before choosing a face` · `## 3. Fallback fonts with matched metrics` | 37-50 · 51-60 | Autoalojar fuentes, presupuesto de archivos, `size-adjust` contra CLS | regla | MDN, webstatus.dev, MWG |
| md:responsive.md | `## Baseline` | 19-30 | Meta viewport, `theme-color`, `touch-action`, `overscroll-behavior` | regla | emilkowalski |
| md:sections/hero.md | `## Critical errors` · `## Level-up` | 58-64 · 72-78 | LCP del hero, nunca `lazy`, `fetchpriority` | regla | field guide |
| dr:outdated-checklist.md | `## Outdated, measurable` (OM1-OM13) | 5-30 | Señales técnicas antiguas medibles | regla | MWG, LG München I |
| dr:copy-states-checklist.md | `### SF1. No loading state` · `### SF6. Layout shift from media` · `### SF9. Broken on load` | 59-62 · 84-87 · 99-102 | Estados de carga, CLS, fallos al cargar | regla | — |
| dr:visual-qa.md | `## Process` (párrafo Lighthouse, 50) | 29-76 | Lighthouse emula ~412 px; datos de laboratorio | regla | Lighthouse |
| design-review/SKILL.md | `## Process` (Mode 2, paso 4) | 28-62 (53-57) | Lighthouse 13.6.0 fijado; no inventar puntuaciones | regla | Lighthouse |
| design-review/scripts/ | `outdated-measurable.js`, `page-checks.js`, `mobile-measurable.js`, `scroll-check.js` | 1-39 · 1-35 · 1-28 · 1-14 | Comprobaciones ejecutadas en la página | dato (script) | — |

## 2. Cobertura

**Parcial.** Renderizado, estado, capas de reutilización y Core Web Vitals están bien tratados, con fechas y marcas de verificación. Lo que un ingeniero de frontend esperaría y falta: **presupuesto de rendimiento** (peso, JS) y su comprobación, **imágenes** (formatos, `srcset`, `sizes`; hoy solo en OM5 y en hero), **medición de campo** (RUM, CrUX) frente a laboratorio como método, **caché y CDN**, **terceros** (fachadas, carga diferida) como patrón, **internacionalización técnica** (formatos `Intl`, dirección del texto: solo menciones), **pruebas** (tipado, tests, regresión visual), y la **seguridad de frontend** más allá de "Boundaries" (CSP aparece solo como límite).

## 3. Duplicados y contradicciones

- **LCP del hero:** md:implementation.md 127, md:sections/hero.md (crítico y Level-up), OM6 (outdated-checklist.md 16), md:pages/content-navigation.md 150. Coherentes.
- **Fuentes autoalojadas:** md:implementation.md 129, md:tokens-type.md §2, OM13 (outdated-checklist.md 23 y 29). Coherentes.
- **Optimistic UI:** md:implementation.md 87-88 (MUST no en dinero o irreversible), md:pages/commerce-purchase.md 56 (pendiente por línea), md:pages/interaction-creation.md 151. Coherentes.
- **Movimiento reducido en la plataforma:** md:implementation.md 66, 115 y 139; md:tokens.md 144. Coherentes.
- **Estado en la URL:** md:implementation.md 83 y casi todas las entradas de `pages/` (filtros, rangos, pestañas). Coherentes, repetido en unas quince entradas.
- **CONTRADICCIÓN · afirmaciones de frameworks sin verificar.** md:implementation.md 50-51 (Next.js 16.4 y TanStack Start 1.0, "verify before citing") siguen pendientes en `docs/ROADMAP.md` 153. No es contradicción entre archivos, pero son hechos datados sin confirmar en un archivo de referencia. Gravedad **baja**.
- **Rendimiento en revisión:** dr:unslop-checklist.md 19 (un tiempo de laboratorio por sí solo no es crítico) y dr:audit-report.md 11 ("lab"). Coherentes.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Renderizado, estado, reutilización, plataforma | `modern-design`, `implementation.md` (dividir por familia si crece: hoy 204 líneas) | `pages/` Implementation |
| Rendimiento (CWV, imágenes, fuentes, terceros) | `modern-design`, archivo propio si se amplía (`performance.md`) | `design-review` OM, SF6; `seo-geo-optimizer` (señal de ranking) |
| Señales técnicas antiguas | `design-review`, `outdated-checklist.md` | — |
| Seguridad de backend | fuera de alcance; `implementation.md` §9 | — |

## 5. Huecos

- ¿Qué presupuesto de peso y de JavaScript conviene por tipo de página, y cómo se comprueba en el build?
- ¿Cuándo usar `srcset` con `sizes`, `<picture>` o un servicio de imágenes, y qué formato por defecto?
- ¿Cómo se mide en campo (RUM) cuando el sitio tiene tráfico, y cómo se informa la diferencia con laboratorio?
- ¿Qué terceros (chat, analítica, A/B, mapas) necesitan fachada o carga tras interacción?
- ¿Qué cabeceras de caché y qué estrategia de CDN corresponden a cada modo de renderizado?
- ¿Qué comprobaciones automáticas (tipos, build, tests) debe pasar una entrega de `modern-design`?
- ¿Qué seguridad de frontend (CSP, SRI, sanitizado) entra en el alcance y cuál no?

## 6. Fuentes candidatas

- **Conocidas:** Modern Web Guidance (guías de rendimiento y plataforma; CC BY 4.0); `docs/research/implementation/01_foundations_architecture.md` y `03_real_world_case_studies.md`; `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §6 (presupuesto, LCP/INP/CLS); Vercel Web Interface Guidelines (rendimiento en `AGENTS.md`); Hallmark gates 10a, 28a, 28b, 76 y `scripts/capture.mjs` (capturas del producto real); emilkowalski `emil-design-eng` "Performance Rules" (T29, diferido a motion).
- **Nueva (candidata):** web.dev, https://web.dev , contenido CC BY 4.0, código Apache 2.0 (pie de cada artículo; el repo antiguo archivado dice CC BY 3.0, desactualizado). Verificado 2026-11-25.
