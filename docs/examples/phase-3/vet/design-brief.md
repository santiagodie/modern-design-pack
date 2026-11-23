# Design brief: tablero interno de una clínica veterinaria

Date: 2026-11-23

## Context
- Product: the internal screen of a small-animal veterinary clinic. It shows where every animal in the building is right now (waiting room, consultation, tests, hospitalization, ready for discharge), which treatments are due or overdue, which lab results are pending, and what is left on today's schedule.
- Audience: reception staff, vet technicians (ATV) and vets. They know the clinical vocabulary and use the screen dozens of times per shift, on a desktop at reception, on a tablet in the hospitalization area and on a wall TV in the corridor.
- Main job: operate
- Tone: calm, legible, clinical; avoid: playful (no paw prints, no cartoon pets)
- Brand and assets: none supplied. No logo, colors, fonts or real data.
- Stack and constraints: static HTML, CSS and JavaScript with no build step or framework. Interface in Spanish (Spain). Readable from 2–3 m on a wall TV. WCAG 2.2 AA. Fully usable by keyboard. Works offline apart from the web font.
- Existing decisions followed: none (no PRODUCT.md or DESIGN.md)

## Assumptions
- Small-animal clinic (dogs, cats, rabbits, exotics) with 3 vets on shift and a small hospitalization area. No emergency triage ER flow.
- Spanish UI, 24-hour time, date format "lunes, 23 de noviembre".
- No backend. All patients, owners, staff and treatments are **demo data** and say so on screen. State (stage moves, treatments marked done, theme) is kept in `localStorage` and can be reset.
- Clinic name, logo and staff names are placeholders: "[Nombre de la clínica]" and generic initials.
- Daytime use is the default; a dark "night shift" theme is for overnight hospitalization staff.

## References
Visual comparison was skipped: no browser was available in this session (both `playwright-cli` and Chrome DevTools were blocked by permissions). The pages were read as text only.

| Site | URL | Principles taken |
|---|---|---|
| Shepherd – dashboard | https://www.shepherd.vet/clinical-tools/intuitive-dashboard | Layout: per-patient rows filtered by location, service, status and doctor. Type and color: "soothing colors for tired eyes", so a low-glare neutral base. Density: dense, with tabs for diagnostics. Specific: pending lab work and Rx refills sit next to today's appointments. |
| Instinct – treatment sheet | https://instinct.vet/blog/digital-veterinary-hospital-treatment-sheet/ | Layout: time-based treatment list. Color strategy: status carries the meaning (scheduled / due / completed / overdue). Motion: real-time updates only. Specific: dose warnings and timers inside the workflow. Taken: one status vocabulary used everywhere. |
| ezyVet – whiteboard | https://www.ezyvet.com/blog/what-is-veterinary-whiteboard-software-and-why-would-you-use-it | Layout: patient cards on a board, from check-in to discharge. Density: built for TV and mobile. Specific: it replaces the dry-erase board and the paper travel sheet. Taken: the board metaphor as the main region. |
| IDEXX Neo – features | https://software.idexx.com/products/neo/features | Layout: dashboard as a task list (callbacks, results, remaining appointments) rather than charts. Taken: put what needs action first; no vanity KPIs. |
| Provet – digital whiteboard | https://provet.cloud/digital-whiteboard | Not read (it redirects to another domain). Known only from the search summary: triage board plus active-patient view. |

## Structure
Regions, not sections (operate page):
1. Top bar: orientation. Holds the clinic name (placeholder), live date and clock, patient search (shortcut `/`), the vet filter, the theme toggle and the "Demo data" label. All real UI except the name.
2. Status line under the bar: one sentence of counts ("12 pacientes en clínica · 3 tratamientos vencidos · 2 resultados por revisar"), with each count acting as a filter. No KPI cards.
3. **Patient flow board** (primary area, about two thirds of the width): five columns — Sala de espera, En consulta, Pruebas, Hospitalizado, Listo para alta. Each card shows the species, the animal's name, the owner, the reason for the visit, the vet's initials, the time in this stage and alert flags (muerde, alergia, en ayunas, contagioso). Each card has one button to move it to the next stage. Demo data.
4. Right rail, "Tratamientos" panel: the hospitalized patients' next doses as a time-ordered list, with overdue / due now / scheduled states and a "Hecho" button. Demo data.
5. Right rail, "Laboratorio" panel: pending results and arrived results to review. Demo data.
6. Right rail, "Agenda de hoy" panel: remaining appointments, with a "Registrar llegada" (check-in) action that puts the patient in the waiting room. Demo data.
7. Toasts: short confirmations with an "Deshacer" (undo) action.

## Direction
- Name: **pizarra de pasillo** (corridor whiteboard)
- Why: every clinic already runs on a dry-erase board in the corridor, written with four marker colors (black, blue, red, green). The digital version keeps that grammar: a white board, ink-colored text and marker colors used only for meaning. Staff already read it without training.
- Typography: Atkinson Hyperlegible Next for the whole UI. It was designed by the Braille Institute for legibility, and it distinguishes 1/l/I and 0/O, which matters for doses and names read from across a corridor. Atkinson Hyperlegible Mono is used only for clock times, durations and doses, so numbers line up. Scale: 13 / 15 / 17 / 20 / 28 px. Animal names are 17 px bold, the largest text on a card; there is no display headline.
- Color: neutral base "pizarra" (a slightly cool, low-glare white board) with "tinta" for text. Four marker colors, each with one job:
  - Tinta (ink, near-black blue): text and default lines.
  - Rotulador azul (blue marker): the interactive color — links, focus, primary buttons, the selected filter.
  - Rotulador rojo (red marker): overdue treatments, safety flags such as bites and allergies, waits over the limit.
  - Rotulador verde (green marker): done and ready for discharge.
  - Ámbar (amber): due now, and waits getting long.
  - Gris de borrado (eraser grey): borders, secondary text and empty states.
- Layout: 12-column fluid grid, with the board taking 8–9 columns and a 360 px rail. Under 1100 px the rail moves below the board. Under 720 px the board becomes a stage selector with one column at a time.
  ```
  ┌ Clínica · lun 23 nov · 10:42 ─────── [/ Buscar] [Vet ▾] [◐] Demo ┐
  │ 12 en clínica · 3 vencidos · 2 resultados por revisar               │
  ├──────────────────────────────────────────────┬──────────────────────┤
  │ Espera │ Consulta │ Pruebas │ Hospit. │ Alta │ Tratamientos (hora)  │
  │ ▌card  │ ▌card    │ ▌card   │ ▌card   │      │ Laboratorio          │
  │ ▌card  │          │         │ ▌card   │      │ Agenda de hoy        │
  └──────────────────────────────────────────────┴──────────────────────┘
  ```
- Imagery: none. Species are shown with small line icons (dog, cat, rabbit, bird) drawn inline as SVG. No photos and no illustrations.
- Density and motion: dense but calm. Motion is functional only: a card's move between columns (about 200 ms), a toast in and out, and focus rings. Reduced motion is respected. Nothing loops or decorates.
- Light or dark: light by default (bright rooms, a shared TV, daytime reception). Dark "turno de noche" follows `prefers-color-scheme` and has a toggle, for the overnight hospitalization area.
- Bold element: the **marker edge and time-in-stage clock on each patient card**. A thick left edge in marker color shows urgency, and only urgency: ink when on time, amber when the wait is getting long, red when it is over the limit, green when the animal is ready to go home. For hospitalized patients the edge follows their next dose: amber when it is due now, red when it is overdue. Safety flags (bites, allergies, contagious) never share that channel; they are red labelled chips at the top of the card. A live clock ("18 min") ages with the patient, and amber or red always come with a word ("Espera larga", "Dosis vencida"). You read the whole building at a glance, like the corridor board.

## Avoid
- A row of four KPI cards with sparklines and a "Welcome back, Dr." greeting.
- A gradient logo sidebar with a dozen fake nav items that go nowhere.
- Paw-print decoration, cartoon pets, pastel "friendly vet" palettes.
- Using color without text: every status also has a word and/or icon.
- Tracked uppercase eyebrow labels above every panel.
- Charts that answer no question a technician has during a shift.

## Template test
A generic clinic or SaaS dashboard has no stage board, no "en ayunas / muerde" flags, no overdue doses beside a waiting room, and no marker-color grammar borrowed from the corridor whiteboard. Swap in a dental or human clinic and the species icons, the flags and the hospitalization treatment flow stop making sense.
