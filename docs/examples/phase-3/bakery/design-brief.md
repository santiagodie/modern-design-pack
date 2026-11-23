# Design brief: Miga Lenta (panadería de barrio)

Date: 2026-11-23

## Context
- Product: una panadería de masa madre con obrador propio en un barrio de Madrid, que vende pan del día en mostrador y acepta encargos para recoger.
- Audience: vecinos del barrio que pasan a diario (móvil, de camino) y gente de fuera que busca "pan de masa madre cerca". Saben qué es la masa madre; no saben a qué hora sale cada pan ni cómo encargar.
- Main job: persuade (venir a la tienda o encargar).
- Tone: honesto, madrugador, artesano; avoid: rústico de catálogo (tablas de madera, trigo dorado, "como el de la abuela").
- Brand and assets: no hay nada. Sin logo, sin fotos, sin textos, sin colores previos.
- Stack and constraints: HTML y CSS estáticos, sin framework ni build. Español. WCAG 2.2 AA. Una sola petición externa (Google Fonts). Sin JavaScript.
- Existing decisions followed: ninguna (no hay PRODUCT.md ni DESIGN.md).

## Assumptions
- Nombre "Miga Lenta": inventado como provisional. Sustituir por el real.
- Ciudad Madrid; barrio sin definir → `[barrio]`.
- Dirección, teléfono, WhatsApp, horario, precios: placeholders visibles entre corchetes. No se inventan.
- Tabla "Sale del horno hoy" (horas y panes): contenido de EJEMPLO para mostrar el formato. Las horas y la lista deben sustituirse por las reales; está marcado en comentarios del HTML.
- Variedades de pan (hogaza de trigo, centeno, espelta, chapata, pan de molde, brioche): genéricas de una panadería de masa madre; ajustar a la carta real.
- Encargos: por teléfono/WhatsApp con un día de antelación, recogida en tienda. Supuesto razonable; confirmar plazos.
- Sin reseñas, premios ni cifras: no existen datos reales.
- Afirmaciones del texto a confirmar con la panadería: cierre los lunes, fermentación en frío durante la noche, "la masa madre es la misma desde que abrimos", "respondemos el mismo día", varias hornadas cada mañana.
- Fotos: no hay. Huecos de foto marcados con lo que debe fotografiarse.

## References
Visual comparison skipped: the browser was not permitted in this session; pages were read as text with WebFetch, so type and color could not be extracted.

| Site | URL | Principles taken |
|---|---|---|
| Dobleuve Obrador | https://www.dobleuveobrador.com/ | Ritmo: anuncio, vídeo de obrador, superventas, proceso, visita con horario y dirección completos, FAQ. Densidad media. Movimiento: vídeo en bucle con control de pausa. Específico: barrio (Retiro), proceso de 5 pasos y datos de visita completos en la home. → La información práctica (horario, dirección) merece sección propia y visible. |
| Madreamiga | https://madreamiga.com/ | Primera pantalla de una línea ("Pan artesano y otras delicias") con dos acciones: ver menú / encargar. Texto escaso, mucha foto de proceso. Específico: recogida en tienda en 72 h. → Dos acciones claras desde el primer pantallazo; el encargo se explica con su plazo. |
| Cientotreinta Grados | https://www.cientotreintagrados.com/ | Tienda-ecommerce: carrusel, productos, espacios por barrio. Densidad media, mucho pie. → Lo que NO queremos: horarios y direcciones escondidos tras navegación; carruseles. |
| Tartine | https://www.tartinebakery.com/ | Página por ubicación, pedidos con plazo explícito (7 días para tartas), historia y libros al final. → La historia va después de lo práctico; los plazos de encargo se dicen en cifras. |
| Obrador San Francisco | https://www.obradorsanfrancisco.com/ | No cargó (error TLS). Sin principios extraídos. |

## Structure
1. Cabecera: nombre, enlaces (Hoy, El pan, Encargos, Dónde), botón "Encargar" — real.
2. Primera pantalla: qué es y dónde ("Pan de masa madre, hecho de madrugada en [barrio]") + horario de hoy + **pizarra "Sale del horno hoy"** con hora y pan — horario/horas placeholder.
3. El pan: la carta como fichas de mostrador (nombre, harina, fermentación, precio) en lista, no tarjetas — nombres de ejemplo, precios placeholder.
4. El obrador: un párrafo sobre la masa madre y la madrugada + un hueco de foto (manos formando hogazas) — texto real genérico, foto placeholder.
5. Encargos: tres pasos con plazo (pide antes de las [hora] → recoge al día siguiente) + botones teléfono/WhatsApp — placeholders.
6. Dónde: dirección, horario semanal en tabla, enlace a mapa — placeholders.
7. Pie: nombre, dirección corta, aviso de alérgenos.

Comparado con la secuencia por defecto: no hay "tres features", ni estadísticas, ni testimonios (no hay datos). El hero se sustituye por la pizarra de hornadas, que es información útil.

## Direction
- Name: "pizarra de hornadas"
- Why: en una panadería de masa madre la pregunta real es "¿a qué hora sale el pan?". Las tiendas lo resuelven con una pizarra junto al mostrador y con el sello en tinta sobre la bolsa de papel. La página toma esas dos piezas: la tabla de horas y el sello.
- Typography: una sola familia, Archivo (variable, eje de anchura). Display en anchura condensada (wdth 62–75) y peso 800 para titulares y horas de la pizarra, cifras tabulares; texto en anchura normal, 400/500. Escala: 0.875 / 1 / 1.25 / 1.75 / 2.75 / clamp hasta 5.5rem para el titular principal.
- Color: base "harina" (blanco grisáceo frío, no crema). Nombrados:
  - harina `#F3F2EE` fondo
  - corteza `#231A14` texto y pizarra
  - sello `#2346A0` acento: tinta azul de sello, solo en acciones, el sello y la hora "siguiente"
  - kraft `#D2B48A` superficie secundaria (banda de papel de bolsa), nunca para texto
  - centeno `#6A5443` texto secundario
  - miga `#FBFAF7` superficies elevadas
- Layout: rejilla de 12 columnas, alineación a la izquierda, max 1200 px. Primera pantalla en dos columnas: texto (7) + pizarra (5); en móvil la pizarra va justo debajo del titular.
  ```
  [Miga Lenta]            Hoy  El pan  Encargos  Dónde  [Encargar]
  Pan de masa madre,            ┌ SALE DEL HORNO HOY ──────┐
  hecho de madrugada            │ 07:30  Hogaza de trigo   │
  en [barrio].                  │ 08:15  Centeno 100 %     │
  Abierto hoy [8:00–14:00]      │ 09:00  Espelta           │
  [Encargar] [Ver el pan]       │ 11:30  Chapata  ...      │
                                └──────────────────────────┘
  ```
- Imagery: 1 hueco de foto (obrador) con relación de aspecto fija y leyenda que dice qué fotografiar. Sin fotos de stock. Un sello SVG con el nombre (circular, tinta azul).
- Density and motion: densidad media, mucho aire entre secciones. Movimiento solo funcional: transiciones de hover/focus de 150 ms; nada con `prefers-reduced-motion: reduce`.
- Light or dark: claro por defecto (se consulta por la mañana, en la calle). Tema oscuro vía `prefers-color-scheme` ("las 5 de la mañana en el obrador").
- Bold element: la pizarra "Sale del horno hoy": un bloque oscuro con horas enormes en condensada, como la pizarra del mostrador.

## Avoid
- Crema + serif + terracota; trigo dorado, madera, tipografía caligráfica.
- Tarjetas redondeadas idénticas con sombra para la carta.
- Etiquetas en mayúsculas espaciadas encima de cada título; flechas en todos los enlaces.
- Reseñas, premios, "desde 19XX" o cifras inventadas.
- Carruseles y vídeos de fondo.

## Template test
Cambiando "Miga Lenta" por otra panadería, la pizarra de horas y los plazos de encargo serían falsos: la página está construida sobre el horario de horno y el barrio de esta tienda, no sobre adjetivos.
