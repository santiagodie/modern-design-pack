# 02 · Estrategia y marketing (posicionamiento, promesa, conversión)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:reasoning.md | `## 1. A website is a single story, not a collection of pages` | 35-52 | La promesa central nace en el primer contacto y debe sobrevivir hasta la cancelación | regla | — |
| md:principles.md | `## 1. Framework: from the 3Cs to a full funnel` | 17-34 | Embudo captación, confianza, conversión, activación, memoria, con los principios de cada fase | heurística | — (nota de origen: sin fuente canónica) |
| md:principles.md | `#### P01 · Clarity before cleverness (value proposition in 10 seconds)` | 39-47 | Propuesta de valor comprensible en segundos | dato + heurística | NN/g, Stripe, Linear |
| md:principles.md | `#### P04 · Value/time ratio: make value big and cost small` | 62-68 | Acotar el coste ("en 5 minutos") | heurística | NN/g, Baymard, Wise |
| md:principles.md | `#### P08 · Meaning and purpose (Golden Circle: "why" before "what")` | 89-96 | El "por qué" en Home y About, después del "qué" | heurística | Sinek, Walton College |
| md:principles.md | `#### P16 · Consistency of voice and promise across the journey (message match)` | 148-153 | El titular repite la promesa del anuncio | heurística | — (C) |
| md:principles.md | `#### P21 · Value before sign-up (gradual engagement / lazy registration)` | 180-185 | Valor antes del registro y sus límites | dato | Duolingo, ChatGPT, Shopify, Wise |
| md:principles.md | `#### P27 · Design toward the "aha" moment (activation metric)` | 220-224 | Diseñar hacia la acción que predice retención | dato | Slack/Amplitude |
| md:direction.md | `### 2. Gather context` | 26-56 | Producto, público, trabajo principal (persuadir, operar, leer, experimentar), tono, restricciones | regla | — |
| md:direction.md | `### 4. Plan the structure from the content` | 75-93 | Estructura desde el contenido, no desde la secuencia habitual | regla | — |
| md:direction.md | `### 7. Write design-brief.md` | 120-176 | Plantilla del brief: contexto, promesa central, estructura con momento, duda y dial | regla | — |
| md:pages/entry-marketing.md | `## Landing page` · `## Home / Start page` · `## About us` · `## Plans & pricing` · `## Coming soon / Waitlist` | 15-65 · 66-114 · 115-157 · 158-208 · 209-248 | Momento, qué debe probar, palancas, cuándo se invierte, señal de que funciona | heurística + dato | Baymard, NN/g, Stanford, Ariely, FTC, Airbnb, Robinhood |
| md:pages/* | `### Signal it's working` en cada entrada (por ejemplo entry-marketing.md 55, 104, 147, 198, 241) | varias | Qué métrica mirar por tipo de página | heurística | — |
| md:sections/index.md | `## Priority matrix (persuade pages)` | 31-42 | Secciones obligatorias, importantes y complementarias de una página que persuade | heurística | field guide |
| md:sections/index.md | `## Possible content, not a page structure` | 43-49 | Inventario largo como posible contenido; longitud según conocimiento y precio | heurística | field guide |
| md:sections/header.md | `## When it applies` | 9-22 | Cabecera según tipo de página (campaña, home, página larga, negocio local, app) | regla | — |
| md:sections/final-cta.md | `## Content` | 13-23 | Reformular la promesa, repetir la oferta, ninguna información nueva | regla | — |
| md:sections/benefits.md | `## Content` | 13-21 | Beneficio, mecanismo y prueba; orden por las preguntas del visitante | regla | — |
| md:pages/entry-marketing.md | `### Implementation` (Landing) | 58-62 | Variantes A/B servidas desde el servidor, no por un script que oculta la página | regla | — |
| design-review/SKILL.md | `## Process` (Mode 2, paso 5, promise check) | 28-62 (60) | La promesa de la primera página se mantiene en las demás | regla | — |
| md:reasoning-examples.md | `## 1. SaaS for small dental clinics` · `## 2. Online running-shoe store` | 16-38 · 39-59 | La promesa aplicada a un flujo completo | ejemplo | — |

## 2. Cobertura

**Parcial.** La promesa central, el message match, el valor antes del registro y la conversión por tipo de página están bien cubiertos. Faltan piezas que un estratega esperaría antes de diseñar: posicionamiento frente a alternativas, segmentación y propuesta por segmento, temperatura del tráfico como decisión explícita (solo aparece como "flip" y en el field guide), plan de medición y experimentación, y la página de comparación. La sección de precios del catálogo está pendiente (lote B).

## 3. Duplicados y contradicciones

- **Message match:** md:principles.md P16 (148-153), md:pages/entry-marketing.md Landing "Levers" (27), md:reasoning.md §1, md:sections/hero.md `## Content` (titular en palabras del visitante). Coherentes.
- **Número de planes:** md:principles.md P10 (107: "Application: 3 plans with one recommended") frente a md:reasoning-examples.md 25 ("A decoy third plan would be a mistake: she is comparing against the phone") y md:pages/entry-marketing.md 191 (si se compara con "no hacer nada", una estructura de tres niveles añade confusión). **CONTRADICCIÓN**: P10 lo da como aplicación sin condición y no remite al flip. Gravedad **baja** (cambia la redacción de P10, no lo que construye quien lee `pages/`).
- **CTA arriba vs conversiones abajo:** md:pages/entry-marketing.md 49 y `docs/research/landing-field-guide/01_MANDATORY.md` 142. Coherentes.
- **Medición:** "Signal it's working" en cada `pages/`, md:sections/forms.md `## Level-up` (inicios y fines por campo), md:sections/final-cta.md `## Level-up` (medir este CTA aparte). Dispersos y coherentes.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Promesa central y message match | `modern-design`, parte de diseño de `reasoning.md` | `design-review` (promise check), `content-web-optimizer` |
| Trabajo principal de la página y estructura desde el contenido | `modern-design`, `direction.md` | `sections/index.md` |
| Estrategia por tipo de página (momento, palancas, señal) | `modern-design`, `pages/` | `design-review` |
| Medición y experimentación | sin dueño hoy; candidato: archivo nuevo en `content-web-optimizer` | `pages/`, `implementation.md` |
| Posicionamiento y diferenciación | sin dueño hoy; candidato: `content-web-optimizer` | `direction.md` |

## 5. Huecos

- ¿Cómo se decide el posicionamiento frente a la alternativa real del usuario (competidor, hábito manual, no hacer nada) y dónde se registra?
- ¿Cuándo conviene una página por segmento o por campaña frente a una página con rutas por público?
- ¿Cómo cambia la estructura según la temperatura del tráfico, como decisión del brief y no solo como "flip"?
- ¿Qué plan mínimo de medición acompaña a una página que persuade, y qué exige en consentimiento?
- ¿Cuándo tiene sentido experimentar y cuándo aplicar buenas prácticas sin test?
- ¿Cuándo conviene una página de comparación y cómo se mantiene honesta y fechada?
- ¿Cómo se diseña la sección de precios en detalle (lote B pendiente)?

## 6. Fuentes candidatas

- **Conocidas:** `docs/research/landing-field-guide/00_README.md` "Variants by traffic temperature", `02_IMPORTANT.md` §5 Pricing, `03_NICE_TO_HAVE.md` §1 Comparison, `04_CROSS_CUTTING.md` §9 y §14; Hallmark `references/anatomy.md` (anatomía por trabajo del visitante; no leído en esta auditoría); impeccable `skill/reference/mode-persuade.md`; ui-ux-pro-max `data/landing.csv` (con cuidado: sus recetas por sector están rechazadas en `tokens-sources.md` C40).
- **Nuevas:** ninguna verificada para esta rama.
