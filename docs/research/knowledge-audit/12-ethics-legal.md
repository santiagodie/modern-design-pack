# 12 · Ética y legal

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:ethics.md | `# Ethical and legal limits, and quality of evidence` | 1-10 | Límite duro; cuándo cargarlo; "no es asesoría legal"; estado regulatorio a noviembre de 2026 | regla | — |
| md:ethics.md | `## 1. Decision rule: legitimate persuasion vs dark pattern` | 11-19 | Verdad, simetría, interés alineado | regla (MUST) | — |
| md:ethics.md | `## 2. Real reference cases (2019–2026)` | 20-29 | Amazon Prime/FTC, CMA y webs de hoteles, Which?/Booking, Epic/FTC, Airbnb | dato | FTC, CMA, Which?, Jurist, Airbnb |
| md:ethics.md | `## 3. Regulatory framework relevant to sites operating in the EU/Spain (status as of Nov. 2026)` | 30-41 | EAA, Digital Fairness Act (propuesta), DSA art. 25, GDPR y ePrivacy, FTC (ROSCA, tasas) | dato | Bird & Bird, Euronews, A&O Shearman |
| md:ethics.md | `## 4. Blacklist (never propose)` | 42-56 | Doce patrones prohibidos | regla (MUST) | — |
| md:ethics.md | `## 6. Minimum compliance checklist by page type (for the skill)` | 72-78 | Mínimo por tipo de página | regla | — |
| dr:dark-patterns-checklist.md | `## Deceptive patterns` (DP1-DP10, `### Minimum by page type` 83-91) | 5-91 | Hallazgos de patrones engañosos con evidencia y gravedad; describir, no juzgar legalmente | regla | `ethics.md` |
| md:pages/legal.md | `## Terms & conditions` · `## Privacy policy` · `## Cookie policy and consent banner` | 17-57 · 58-99 · 100-139 | Presentación del contenido legal, capas, paridad aceptar/rechazar, registro de cookies | regla + dato | GDPR Art. 12, WP29/EDPB, ICO, CJEU Planet49, CNIL/AEPD (sin verificar) |
| md:sections/footer.md | `## Content` | 13-32 | Mínimo legal en la UE y España (LSSI-CE, privacidad, cookies, términos, declaración de accesibilidad) | regla | LSSI-CE, GDPR, EAA |
| md:implementation.md | `## 8. Legal minimum` | 144-150 | MUST: nada no esencial antes del consentimiento; precio total desde una fuente; versionado de documentos | regla (MUST) | `ethics.md`, `pages/legal.md` |
| md:pages/user-account.md | `## Account & billing` (`### Specifics` 118-122) | 101-147 | Cancelación simétrica; DFA (propuesta); fecha y cifra del próximo cargo | dato | FTC, Comisión Europea |
| md:pages/commerce-purchase.md | `## Checkout / Payment` (`### 🔴 Critical errors` 88-92) | 62-113 | Extras preseleccionados ilegales (consentimiento) o objetivo de la DFA (extras) | regla | GDPR, DFA |
| md:pages/authentication.md | `### Specifics` de Sign-up y Verification | 34-38 · 169-172 | NIST SP 800-63B-4 (contraseñas, SMS "restricted": verificar) | dato | NIST |
| md:pages/support-contact.md | `## Contact` (`### Specifics` 32-35) | 15-58 | Identificación y contacto accesibles (LSSI, Directiva de comercio electrónico) | dato | LSSI |
| md:principles.md | P11 (riesgo, 118), P13, P14, P23, P24, P25 | 112-211 | Límite ético de cada palanca | regla + dato | CMA, FTC, Which?, DFA |
| md:sections/social-proof.md | `## Content` (línea 21) · `## Critical errors` | 13-32 · 54-58 | Reseñas falsas y logos no autorizados, ilegales en la UE y EE. UU. | regla | — |
| md:sections/forms.md | `## Critical errors` (línea 57) | 53-60 | Consentimiento de marketing preseleccionado, ilegal según el GDPR | regla | GDPR |
| dr:outdated-checklist.md | `## Outdated, measurable` (párrafo OM13, línea 29) | 5-30 | Google Fonts y el GDPR: un caso alemán, no una prohibición general | dato | LG München I, 20.01.2022 |
| md:content-truth.md | `## The rule` (país y jurisdicción, línea 16) | 7-18 | La ley aplicable es una pregunta de negocio | regla | — |
| docs/ROADMAP.md | `## Phase 3: modern-design references` (verificar antes de citar, 142) | 130-160 | CNIL/AEPD, NIST SMS y EDPB 2026 pendientes | — | — |

## 2. Cobertura

**Parcial.** La ética de la persuasión, los patrones engañosos y el marco de la UE y España (más referencias de EE. UU.) están bien cubiertos y fechados. Lo que un jurista o un DPO esperaría y falta: otras jurisdicciones (Reino Unido post-GDPR, California y otros estados de EE. UU., Latinoamérica) aunque sea como "pregunta de negocio"; **menores** (verificación de edad, diseño apropiado: solo menciones); **contratación a distancia** (derecho de desistimiento, información precontractual en tiendas); **precios** con IVA para consumidores (solo en el field guide); **publicidad comparativa**; **IA** (identificar contenido o asistentes generados: solo una línea en chat); **propiedad intelectual** de imágenes y fuentes (solo licencias de fuentes). Tres afirmaciones siguen marcadas "verify before citing".

## 3. Duplicados y contradicciones

- **Lista negra:** md:ethics.md §4, dr:dark-patterns-checklist.md DP1-DP10, md:principles.md (P13, P14, P23-P26), md:pages/* (errores críticos), `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §15. Coherentes.
- **Paridad en el banner de cookies:** md:pages/legal.md 117 ("Not verified by search in this research; confirm before citing") y md:ethics.md 37 (remite a la nota de verificación) frente a md:implementation.md 146 ("MUST: … make rejecting as easy as accepting") y dr:dark-patterns-checklist.md DP7 (crítico). **CONTRADICCIÓN** de certeza: el mismo requisito es "sin verificar" en un archivo y MUST en otro. Gravedad **baja** (el resultado construido es el mismo; cambia cómo se cita).
- **Declaración de accesibilidad:** md:sections/footer.md 21 ("recommended, and increasingly expected") frente a md:ethics.md 34 (impacto de la EAA: "Accessibility statement"). **CONTRADICCIÓN** de nivel. Gravedad **baja**.
- **Mínimo legal del pie:** md:sections/footer.md 15-21 lista el mínimo para la UE y España, mientras md:content-truth.md 16 hace del país una pregunta de negocio. Coherente si se lee el encabezado como condición; ningún archivo dice qué hacer fuera de la UE. Gravedad baja.
- **WCAG 2.1 en el mínimo por página:** ver **CONTRADICCIÓN** en `09-accessibility.md` (media).
- **Digital Fairness Act:** md:principles.md 209, md:ethics.md 35, md:pages/user-account.md 120, md:pages/interaction-creation.md 175, md:pages/commerce-purchase.md 91. Coherentes (propuesta del 11-11-2026).

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Regla de decisión, lista negra, casos, marco regulatorio | núcleo común, `ethics.md` (dividir casos y marco si crece) | las cinco skills |
| Comprobación de patrones engañosos | `design-review`, `dark-patterns-checklist.md` | `content-web-optimizer` (copy de rechazo, urgencia) |
| Presentación de páginas legales y banner | `modern-design`, `pages/legal.md` | `implementation.md` §8 |
| Mínimo legal de implementación | `modern-design`, `implementation.md` §8 | `sections/footer.md` |
| Accesibilidad como obligación legal | núcleo común, `ethics.md` §3 | `accessibility-review` |
| Privacidad en SEO y analítica (Google Fonts, consentimiento) | `ethics.md` §3 y `outdated-checklist.md` OM13 | `seo-geo-optimizer` |

## 5. Huecos

- ¿Qué hace cada skill cuando el negocio no está en la UE o la ley aplicable es desconocida?
- ¿Qué cambia en el diseño cuando los usuarios pueden ser menores?
- ¿Qué información precontractual y qué derecho de desistimiento debe mostrar una tienda online, y dónde?
- ¿Cómo se identifican el contenido generado por IA y los asistentes conversacionales?
- ¿Qué licencia necesitan las imágenes, fuentes e iconos que el plugin propone, y cómo se registra?
- ¿Qué afirmaciones pendientes de verificar pueden citarse ya y cuáles no (CNIL/AEPD, NIST, EDPB)?
- ¿Cómo informa una auditoría por URL de un posible incumplimiento sin calificarlo de ilegal?

## 6. Fuentes candidatas

- **Conocidas:** `docs/research/web-reasoning/03-ethical-legal-limits-and-evidence.md` (origen de `ethics.md`); `docs/research/landing-field-guide/04_CROSS_CUTTING.md` §9 y §15; Hallmark gates 46a y 70 (invención y envío falso) y su política de créditos de fotos (`references/imagery.md` §2); impeccable, taste-skill, ui-ux-pro-max (rechazos de contenido en `tokens-sources.md` §1.6).
- **Nueva (candidata):** Deceptive Patterns, https://www.deceptive.design , sin licencia abierta (términos en /legal/terms-and-conditions/): solo resumir. Verificado 2026-11-25.
