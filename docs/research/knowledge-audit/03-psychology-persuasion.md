# 03 · Psicología y persuasión

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:reasoning.md | `## 3. The four mechanisms underneath everything` | 73-110 | Atención como triage, confianza como predicción, decidir como balance valor/coste/riesgo, memoria por picos y final | heurística | — |
| md:reasoning.md | `## 4. Context changes everything: persuasion has a dial` | 111-116 | Cuanto más cerca del dinero, los datos o lo irreversible, menos persuasión | regla | — |
| md:reasoning.md | `## 5. When principles collide` | 117-136 | Urgencia/confianza, marca/claridad, fricción/seguridad, defaults/autonomía, persuasión/contexto, novato/experto | heurística | — |
| md:principles.md | `## 2. Catalogue of principles` (`### CAPTURE BLOCK` P01-P10, `### CONFIDENCE (TRUST) BLOCK` P11-P18, `### CONVERSION BLOCK` P19-P25, `### ACTIVATION, CONTINUITY AND MEMORY BLOCK` P26-P31) | 35-249 | 31 mecanismos con evidencia graduada, aplicación, límite y páginas donde pesan | dato + heurística | NN/g, Lindgaard, Stanford/Fogg, Deloitte/Google, Scheibehenne, Cialdini, Baymard, CMA, FTC, Ariely/Huber, Dashlane, Which?, Duolingo, Nunes & Drèze, Slack, Kahneman, FIDO |
| md:principles.md | `## 3. Level of persuasion allowed by context (general rule)` | 250-257 | Lista de páginas por nivel de persuasión | regla | — |
| md:ethics.md | `## 1. Decision rule: legitimate persuasion vs dark pattern` | 11-19 | Verdad, simetría, interés alineado | regla | — |
| md:ethics.md | `## 5. Quality of evidence (so as not to repeat myths)` | 57-71 | Qué efectos son robustos y cuáles no | dato | ver rama 01 |
| md:pages/* | `### Levers` de cada entrada (p. ej. entry-marketing.md 26, 77, 126, 169) | varias | Qué principio aplica en ese momento y por qué | heurística | P-IDs |
| md:pages/* | `**Persuasion dial:**` en cada entrada y "Persuasion dial for this group" en la cabecera | varias | Nivel por defecto por página y grupo | regla | — |
| md:tokens.md | `## 3. From the brief to the tokens` | 58-85 | Del dial a densidad, ritmo entre secciones y presupuesto de movimiento | regla | — |
| md:sections/social-proof.md | `## Content` | 13-32 | Tipos de prueba social, números precisos, desconfianza del 5.0 | heurística | — |
| md:sections/cta.md | `## Content` | 13-21 | Microcopia que reduce la ansiedad sin nombrar el miedo; primera persona como hipótesis | heurística | — |
| md:sections/forms.md | `## Content` · `## Level-up` | 13-23 · 69-76 | Coste por campo; opt-in en dos pasos como micro-compromiso | heurística | — |
| md:reasoning-examples.md | los tres ejemplos | 16-75 | El dial en tres posiciones | ejemplo | — |
| dr:dark-patterns-checklist.md | `## Deceptive patterns` (DP2, DP3, DP6, DP9) | 5-91 | Cuándo urgencia, escasez, vergüenza o pérdida cruzan la línea | regla | `ethics.md` |

## 2. Cobertura

**Completa en mecanismos, parcial en aplicación.** El catálogo P01-P31 es amplio, con evidencia graduada y límites, y la regla ética está bien trazada. Falta lo que un especialista pediría para aplicarlo con precisión: cómo se combinan principios en una sección concreta (hoy solo implícito en `pages/`), efectos de presentación de precios más allá del ancla, carga cognitiva en formularios largos, y cómo se ve la ausencia de persuasión en páginas de dial cero.

## 3. Duplicados y contradicciones

- **CONTRADICCIÓN · dial por página.** md:principles.md §3 (252-255) frente a las entradas de `pages/`:

  | Página | principles.md §3 | pages/ |
  |---|---|---|
  | Login | LOW | none (authentication.md 67) |
  | Verification | LOW | none (authentication.md 155) |
  | Settings | LOW | none (user-account.md 58) |
  | Documentation | LOW | none (blog-resources.md 104) |
  | Support | LOW | none (support-contact.md 104) |
  | Catalogue | MEDIUM | medium-low (content-navigation.md 17) |
  | Cart | MEDIUM | medium-low (commerce-purchase.md 19); cabecera del grupo: low (9) |
  | Success page | MEDIUM | low-medium (states-system.md 188) |
  | About us | no listado | medium (entry-marketing.md 117) |
  | Product page | HIGH | high (content-navigation.md 106); cabecera del grupo: "medium to low" (7) |

  Gravedad **alta**: `tokens.md` §3 traduce el dial en densidad y movimiento, y `direction.md` lo pide por página en el brief. Además, `tokens.md` §3 tiene tres filas (alto; medio; bajo o ninguno) y `pages/` usa valores intermedios ("medium-low", "none-low", "low-medium") sin fila propia.
- **Escasez y urgencia:** P24 (198-204), ethics.md §4 (45-46), DP2-DP3, reasoning.md §5 (121). Coherentes.
- **Prueba social:** P11 (112-120), social-proof.md `## Content`, DP3. Coherentes; social-proof.md 31 afirma que los números precisos parecen más creíbles sin grado de evidencia (viene del field guide).
- **Defaults:** P23 (192-197), reasoning.md §5 (127), legal.md cookies, DP1. Coherentes.
- **Aversión a la pérdida:** P25 (205-211), ethics.md §4 (54), DP9, interaction-creation.md Feed. Coherentes.

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Cuatro mecanismos y choques | núcleo común, `reasoning.md` (parte general) | todas |
| Catálogo P01-P31 | `modern-design`, `principles.md` (dividir por bloque si pasa de ~300 líneas; hoy 257) | `pages/`, `content-web-optimizer`, `design-review` |
| Dial: valores por página | un solo dueño, `pages/`; la regla del dial en la parte de diseño de `reasoning.md`; `principles.md` §3 pasaría a enlazar | `tokens.md` §3, `direction.md` |
| Límite ético de la persuasión | núcleo común, `ethics.md` | `principles.md`, DP |

## 5. Huecos

- ¿Qué fila de `tokens.md` §3 corresponde a los valores intermedios del dial?
- ¿Cómo se combinan dos o tres principios en una misma sección sin que compitan?
- ¿Qué efectos de presentación de precios son robustos (centro, ancla, finales de precio, mensual frente a anual) y cuáles son mito?
- ¿Cómo se diseña una página de dial cero para que transmita confianza sin persuadir?
- ¿Qué cambia en la persuasión cuando el público son menores o personas en situación vulnerable?

## 6. Fuentes candidatas

- **Conocidas:** `docs/research/landing-field-guide/00_README.md` "Psychology cheat-sheet" y `02_IMPORTANT.md` §5; `docs/research/web-reasoning/01-web-psychology-marketing-principles.md` (origen de `principles.md`); impeccable `skill/reference/mode-persuade.md`, `mode-operate.md`; ui-ux-pro-max `data/ux-guidelines.csv` (solo referencia).
- **Nueva (candidata):** Deceptive Patterns, https://www.deceptive.design , sin licencia abierta ("©2026 Testimonium Ltd."; términos en /legal/terms-and-conditions/): solo resumir. Verificado 2026-11-25.
