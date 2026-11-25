# 05 · UX y arquitectura de la información (navegación, flujos, tipos de página)

Convenciones: ver `01-reasoning.md`. "md:" = `modern-design/references/`, "dr:" = `design-review/references/`.

## 1. Dónde está hoy

| Ruta | Encabezado (exacto) | Líneas | Qué decide | Tipo | Fuentes citadas |
|---|---|---|---|---|---|
| md:reasoning.md | `## 7. Which reference to open` | 143-181 | Mapa tipo de página→archivo; flujos: abrir todos los archivos que toca y razonar los relevos | regla | — |
| md:pages/entry-marketing.md | cinco entradas (Landing, Home, About us, Plans & pricing, Coming soon) | 15-248 | Momento, prueba, palancas, errores, cuándo se invierte | heurística + dato | Baymard, NN/g, Stanford, FTC |
| md:pages/content-navigation.md | `## Catalogue / Product listing` · `## Category / Collection` · `## Product page / Detail` · `## Search results` · `## Map` · `## Calendar / Booking / Schedule` | 15-63 · 64-103 · 104-154 · 155-200 · 201-238 · 239-278 | Filtros, carga, búsqueda, mapas, reservas | dato + heurística | Baymard, NN/g, Airbnb |
| md:pages/commerce-purchase.md | `## Cart` · `## Checkout / Payment` | 17-61 · 62-113 | Revisión del total, pago, invitado, errores | dato | Baymard, GOV.UK, FIDO |
| md:pages/commerce-after-purchase.md | `## Order confirmation` · `## Order history / Orders / Tracking / Returns` | 17-60 · 61-105 | Confirmación, seguimiento, devoluciones | dato | GOV.UK, Baymard |
| md:pages/authentication.md | `## Sign-up / Registration` · `## Login / Sign-in` · `## Password recovery / Reset` · `## Verification (email / SMS / 2FA)` · `## Onboarding` | 17-64 · 65-109 · 110-152 · 153-194 · 195-239 | Registro, acceso, recuperación, verificación, onboarding | dato | NIST, FIDO, NN/g, Baymard |
| md:pages/user-account.md | `## Profile` · `## Settings / Configuration` · `## Account & billing` · `## Notifications (preferences and permission requests)` | 15-55 · 56-100 · 101-147 · 148-187 | Control del usuario, confirmaciones, cancelación, permisos | dato | NN/g, FTC, Chrome |
| md:pages/interaction-creation.md | `## Form / Content creation` · `## Editor (documents, designs, code, listings)` · `## Messages / Chat` · `## Feed / Activity` | 15-64 · 65-110 · 111-155 · 156-196 | Formularios, editor, chat, feed | dato | GOV.UK, NN/g, HubSpot, Instagram |
| md:pages/management-admin.md | `## Dashboard / Panel` · `## Analytics / Reports` · `## Admin panel` · `## User / Team management` | 15-60 · 61-104 · 105-149 · 150-190 | Paneles operativos y analíticos, acciones masivas, roles | dato | NN/g, Few |
| md:pages/blog-resources.md | `## Article list / Blog index` · `## Article / Post` · `## Documentation` | 15-56 · 57-101 · 102-143 | Índices, artículo, documentación (Diátaxis) | dato | NN/g, Diátaxis |
| md:pages/support-contact.md | `## Contact` · `## FAQ / Help centre` · `## Support centre / Tickets` | 15-58 · 59-101 · 102-140 | Contacto, ayuda, tickets | heurística | NN/g, LSSI |
| md:pages/legal.md | tres entradas | 17-139 | Presentación del contenido legal | heurística | GDPR, EDPB, ICO |
| md:pages/states-system.md | `## Error 404 (page not found)` · `## Error 500 (server error)` · `## Maintenance` · `## Empty state` · `## Success / Thank-you page` | 15-59 · 60-102 · 103-144 · 145-185 · 186-225 | Estados del sistema y finales | dato | NN/g, Google Search Central, GOV.UK |
| md:direction.md | `### 2. Gather context` (tabla de trabajos de la página) · `### 4. Plan the structure from the content` | 26-56 · 75-93 | Persuadir, operar, leer, experimentar; regiones en lugar de secciones para "operar" | regla | — |
| md:sections/index.md | `## Which sections each page job needs` | 16-30 | Qué secciones usa cada trabajo | regla | — |
| md:sections/header.md | `## When it applies` · `## Content` · `## Layout per device` | 9-22 · 23-29 · 30-40 | Navegación según tipo de página; máximo de enlaces; menú en móvil | regla | field guide |
| md:responsive.md | `## Tablet` | 54-70 | Navegación entre 768 y 1024 px, tablas, tableros con columnas | regla | — |
| md:reasoning-examples.md | `## 3. Internal support console` | 60-75 | Cola de tickets, vista, acciones irreversibles | ejemplo | — |
| md:implementation.md | `## 3. Apps: kinds of state` | 68-90 | Estado en la URL (filtros, pestañas, rango) para compartir y volver | regla | — |

## 2. Cobertura

**Parcial.** La cobertura por tipo de página es amplia (unos 45 tipos en doce archivos) y bien fundamentada en Baymard, NN/g y GOV.UK. Lo que un arquitecto de información esperaría y falta: un modelo de navegación del sitio entero (mapa, niveles, migas, navegación local frente a global), criterios de etiquetado y agrupación (card sorting, árbol), patrones de navegación de app (barra lateral, pestañas, menú de comandos), y el catálogo de secciones para páginas que "operan" (lote C pendiente). Los "Layout & responsive" por tipo de página también están pendientes.

## 3. Duplicados y contradicciones

- **Confirmaciones frente a deshacer:** md:principles.md P17 (158), md:reasoning-examples.md 71, md:pages/user-account.md Settings (74), interaction-creation.md Editor (84), management-admin.md Admin (124-126), dr:copy-states-checklist.md SF3 (69-72). Coherentes.
- **Estados vacíos:** md:principles.md P29, md:pages/states-system.md `## Empty state`, md:implementation.md §3 (89), dr:copy-states-checklist.md SF2. Coherentes.
- **Paginación vs scroll infinito:** content-navigation.md 36 y 175 ("Load more"), implementation.md §3 (URL). Coherentes.
- **Enlaces de cabecera:** md:sections/header.md 25 ("At most 5 links") frente a md:pages/entry-marketing.md Home (routing por público, "Familiar structure"). No contradicción: la cabecera de sección es para páginas que persuaden; la home necesita rutas. Falta una regla para webs con muchas páginas.
- **Menú en tablet con 44 px:** md:responsive.md 66 y md:sections/header.md 35 piden enlaces en línea solo si caben con objetivos de 44 px. Coherente con `tokens.md` §5 como SHOULD.
- **Dial por página:** ver **CONTRADICCIÓN** en `03-psychology-persuasion.md` (gravedad alta).

## 4. Dueño propuesto

| Bloque | Dueño | Enlazan |
|---|---|---|
| Razonamiento por tipo de página | `modern-design`, `pages/` | `design-review` (ya los lee) |
| Navegación del sitio y de la app | sin dueño; candidato: `modern-design/references/navigation.md` (nuevo) | `sections/header.md`, `responsive.md` |
| Flujos entre páginas (relevos) | parte de diseño de `reasoning.md` | `pages/` |
| Revisión de UX de flujos | `design-review` (enlaza `pages/`) | — |

## 5. Huecos

- ¿Cuándo conviene una navegación por pestañas frente a un menú lateral o desplegable en una app?
- ¿Cómo se estructura la navegación de un sitio de más de cinco secciones (niveles, megamenú, migas, pie)?
- ¿Cómo se deciden y prueban las etiquetas de navegación con el vocabulario del usuario?
- ¿Cuándo un menú de comandos o atajos de teclado merece la pena?
- ¿Qué patrones de región (barra de app, tablas, paneles laterales, acciones por fila) necesita una página que opera (lote C)?
- ¿Cómo se diseña la búsqueda global del sitio (alcance, resultados mixtos de producto y ayuda)?
- ¿Qué cambia en la arquitectura cuando el sitio es multilingüe?

## 6. Fuentes candidatas

- **Conocidas:** impeccable `skill/reference/mode-operate.md`, `mode-read.md`; Vercel Web Interface Guidelines `AGENTS.md` (navegación, foco, URL como estado); `docs/research/implementation/02_page_type_matrix.md`; `docs/research/web-reasoning/02-page-type-matrix.md`; Hallmark `references/flow.md` § App screens (no leído entero) y `references/layout.md` (navs y footers; no leído).
- **Nueva (candidata):** GOV.UK Design System, https://design-system.service.gov.uk , contenido OGL v3.0 y código MIT (pie del sitio; `alphagov/govuk-design-system` LICENSE). Patrones de navegación, pasos y preguntas. Verificado 2026-11-25.
