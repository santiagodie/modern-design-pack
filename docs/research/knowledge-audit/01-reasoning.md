# 01 · Razonamiento (método general, transversal)

Auditoría de la rama `knowledge-audit`, 2026-11-25, sobre `main` en `381cbb3`. Solo describe: no propone texto de reglas. Rutas relativas a `skills/` salvo que se indique otra cosa. "md:" abrevia `modern-design/references/`, "dr:" abrevia `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:reasoning.md | `# Reasoning about web design from the user's mind` | 1-12 | Para qué sirve el archivo, orden de autoridad, qué produce (promesa central, momento y duda por página) | regla | — |
| md:reasoning.md | `## Why this method exists` | 13-16 | Justifica el método con el fallo de auditorías hechas por un modelo que aplica patrones | dato | Baymard, GPT-4 UX audit (2023) |
| md:reasoning.md | `## The stance: think, don't fill in` | 17-34 | Señales de "modo lista" y qué hacer al detectarlas | heurística | — |
| md:reasoning.md | `## 1. A website is a single story, not a collection of pages` | 35-52 | La promesa central y su supervivencia de extremo a extremo | regla | — |
| md:reasoning.md | `## 2. The six questions you ask on every screen` | 53-72 | Las seis preguntas por pantalla y los cuatro tipos de duda | heurística | — |
| md:reasoning.md | `## 3. The four mechanisms underneath everything` (con `### Attention is triage` 77-84, `### Trust is a prediction about the future` 85-92, `### Deciding is weighing value against cost under uncertainty` 93-100, `### Memory summarises by peaks and by the ending` 101-110) | 73-110 | Los cuatro hechos de la mente que navega de los que se derivan los principios | heurística | — (remite a `principles.md`) |
| md:reasoning.md | `## 4. Context changes everything: persuasion has a dial` | 111-116 | El dial de persuasión (alto, medio, bajo, ninguno) y su registro en el brief | regla | — |
| md:reasoning.md | `## 5. When principles collide` | 117-136 | Seis choques entre principios y cómo desempatar | heurística | — |
| md:reasoning.md | `## 6. Worked examples` | 137-142 | Remite a `reasoning-examples.md` | — | — |
| md:reasoning.md | `## 7. Which reference to open` | 143-181 | Tabla página→archivo, papel de cada referencia, cinco principios siempre activos, comprobación final por elemento y por flujo | regla | — |
| md:reasoning.md | `## 8. How to present design work` | 182-187 | Cómo explicar decisiones (en términos de la duda, no de marcos) | regla | — |
| md:reasoning.md | `## Treat all of this as priors, not rules` | 188-190 | Todo lo anterior son priors, no reglas | heurística | — |
| md:reasoning-examples.md | `# Worked reasoning examples` | 1-15 | Cómo leer los ejemplos (de dónde salen las decisiones, no copiarlas) | regla | — |
| md:reasoning-examples.md | `## 1. SaaS for small dental clinics` · `## 2. Online running-shoe store` · `## 3. Internal support console` | 16-38 · 39-59 · 60-75 | El método aplicado a tres puntos del dial | ejemplo | — |
| md:principles.md | `## 0. How to use this document (instructions for the LLM)` | 9-16 | Principios como mecanismos, no componentes; prioridad de evidencia A>B>C; prueba de cambiar el producto | regla | — |
| md:ethics.md | `## 5. Quality of evidence (so as not to repeat myths)` | 57-71 | Estado real de afirmaciones populares y cómo usarlas | dato | Scheibehenne 2010, Lindgaard 2006, Liu/White/Dumais, Huber/Payne/Puto, Bohner & Schlüter, Expedia, Duolingo, Deloitte/Google, FIDO |
| md:sections/index.md | `## Statistics` | 50-53 | Usar la dirección de un efecto, no su tamaño, salvo estándares | regla | — |
| md:direction.md | `### 4. Plan the structure from the content` (dentro de `## Process`) | 75-93 | Orden del paso 1: razonar, leer `pages/`, consultar principios y ética, escribir el brief | regla | — |
| md:direction.md | `### 6. Run the template test on the brief` | 116-119 | Prueba de la plantilla sobre el brief | heurística | — |
| design-review/SKILL.md | `## Rules` | 63-82 | Antes de criticar, averiguar a quién sirve la página; comentar solo lo visto; no recomendar lo que ya hay; ordenar por bloqueo; evitar consejo genérico repetido | regla | — |
| docs/ARCHITECTURE.md | `## Context over rules` | 82-89 | "Haz X cuando Y"; desempates por `site-decisions.md` y el brief | regla | — |

## 2. Cobertura

**Parcial.** El método para diseñar páginas es sólido y está bien argumentado (promesa, seis preguntas, cuatro mecanismos, dial, choques, comprobación final). Lo que un profesional esperaría de un método *general*, útil también para auditar accesibilidad, SEO o contenido, está mezclado con lo específico de diseñar: no hay un método de "cuándo se invierte el consejo" fuera de los `pages/`, los criterios de calidad de evidencia viven en `ethics.md` §5, y no hay una forma de razonar sobre requisitos que no son de persuasión (cumplimiento, indexación, lectura).

## 3. Duplicados y contradicciones

- **Dial de persuasión:** definido en md:reasoning.md §4 (111-116), md:principles.md §3 (250-257), en la cabecera y en cada entrada de los doce `pages/`, y traducido a densidad y movimiento en md:tokens.md §3 (58-85). **CONTRADICCIÓN** entre la lista de md:principles.md §3 y las entradas de `pages/` (detalle en `03-psychology-persuasion.md`). Gravedad **alta**: el dial decide densidad, ritmo y presupuesto de movimiento en `tokens.md` §3.
- **"Si funciona cambiando el producto, es plantilla":** md:reasoning.md 23-31, md:principles.md 15, md:direction.md §6 (116-119), dr:unslop-checklist.md 10, md:sections/hero.md 27. Coherentes; redacción distinta. Gravedad baja.
- **Cinco principios que aplican a toda página:** solo en md:reasoning.md 172 (sin eco en `principles.md`). No es contradicción; es una lista sin dueño claro.
- **Orden de autoridad:** repetido literalmente en `reasoning.md`, `reasoning-examples.md`, `principles.md`, `ethics.md`, `content-truth.md`, `implementation.md`, `tokens.md`, `sections/index.md`, los doce `pages/`, la plantilla de `site-decisions.md`, ambos `SKILL.md` y `docs/ARCHITECTURE.md`. Coherente; es la duplicación que exige CLAUDE.md. Falta en `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md`, `direction.md`, `responsive.md`, los ocho archivos de sección y las referencias de `design-review` (no es obligatorio, pero es desigual).
- **Uso de estadísticas:** md:sections/index.md `## Statistics` (50-53), md:ethics.md §5, md:pages/entry-marketing.md 180 y la advertencia de `docs/research/landing-field-guide/00_README.md` 154. Coherentes. Gravedad baja.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Método general: postura, señales de modo lista, seis preguntas en forma general, contexto manda, choques, priors no reglas, cómo presentar conclusiones | núcleo común, `reasoning.md` (parte general) | las cinco skills |
| Método de diseño de páginas: promesa central de extremo a extremo, dial como instrumento, tabla página→archivo | `modern-design`, archivo propio (ver propuesta de división) | `design-review` (promise check, dial) |
| Calidad de evidencia (mitos) | núcleo común; hoy en `ethics.md` §5, candidato a ir con el método general | `principles.md`, `pages/` |
| Ejemplos trabajados | `modern-design`, `reasoning-examples.md` | — |

## 5. Huecos

- ¿Cómo razona una skill de auditoría (accesibilidad, SEO, contenido) cuando un requisito normativo choca con lo que el brief pide?
- ¿Qué cuenta como evidencia suficiente para afirmar algo en un informe, y cómo se gradúa (A/B/C) fuera de `principles.md`?
- ¿Cuándo debe una skill que no diseña pedir datos al usuario y cuándo suponer (país para SEO local, público para el tono)?
- ¿Qué parte del brief es común a todas las skills y qué parte es solo de diseño?
- ¿Qué hace el método cuando la página no tiene una "duda" clara (páginas legales, documentación de referencia)?

## 6. Fuentes candidatas

- **Conocidas:** impeccable `skill/reference/critique-rubric.md` y `new-work.md` (crítica y compromiso con un mundo); taste-skill `references/gate.md` (puerta previa a construir); Hallmark `skills/hallmark/references/gates.md` §3 (crítica previa en seis ejes) y `references/direction.md` "Before the first line of code" (apartar la página que harías de todos modos). Modern Web Guidance, unslop, Vercel y ui-ux-pro-max no aportan método general.
- **Nuevas:** ninguna verificada para esta rama.

## Propuesta de división de `reasoning.md`

Sin cambiar el archivo. Rangos de `modern-design/references/reasoning.md`.

| Encabezado | Líneas | Parte general (cinco skills) | Parte de diseño de páginas | Nota |
|---|---|---|---|---|
| `# Reasoning about web design from the user's mind` | 1-12 | 3 (cómo usarlo) y 9 (no es una lista) | 7 (qué produce para el brief) | El título y la línea 7 son de diseño |
| `## Why this method exists` | 13-16 | todo | — | Sirve igual para auditar |
| `## The stance: think, don't fill in` | 17-34 | 21-31 (señales de modo lista) | 19 (ejemplo de la página de precios) | Las señales valen para cualquier revisión |
| `## 1. A website is a single story, not a collection of pages` | 35-52 | — | todo | La promesa central es de diseñar flujos; design-review la usa en su promise check |
| `## 2. The six questions you ask on every screen` | 53-72 | 57-67 en forma abstracta | 63 (cada elemento resuelve una duda) y 69 (remite a `pages/`) | Las preguntas son generales; su uso para decidir elementos es de diseño |
| `## 3. The four mechanisms underneath everything` | 73-110 | 77-110 | 75 (remite a los 31 principios) | Útiles para contenido y accesibilidad |
| `## 4. Context changes everything: persuasion has a dial` | 111-116 | 113, primera frase (cerca del dinero, los datos o lo irreversible: menos persuasión) | 113 resto (cuatro niveles, registro en el brief, densidad y movimiento) | El principio es general; el dial como instrumento es de diseño |
| `## 5. When principles collide` | 117-136 | 119, 123, 125, 127, 131, 133 | 121 y 129 (urgencia y persuasión, ligados al dial) | Todos reutilizables salvo dos |
| `## 6. Worked examples` | 137-142 | — | todo | — |
| `## 7. Which reference to open` | 143-181 | 176-178 (comprobación final por elemento y por flujo) | 145-174 (tabla, papel de cada referencia, cinco principios) | La tabla es de `modern-design` |
| `## 8. How to present design work` | 182-187 | todo, como "cómo presentar conclusiones" | ejemplo de la línea 184 | Aplica a un informe de auditoría |
| `## Treat all of this as priors, not rules` | 188-190 | todo | — | General |

**Orientativo:** unas 95 líneas generales y unas 70 de diseño de páginas. `ethics.md` §5 (calidad de evidencia) encaja con la parte general.
