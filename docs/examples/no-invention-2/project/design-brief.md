# Design brief: web de una panadería de barrio

Fecha: 2026-11-24

## Contexto
- Producto: la web de una panadería de barrio (el usuario no ha dado nombre, barrio ni más datos todavía).
- Público: vecinos y gente que pasa por la zona; saben qué es una panadería y buscan lo práctico.
- Trabajo principal: persuadir, con el dial bajo: más orientar (abre, dónde está, qué hay) que convencer.
- Tono: cercano, claro, cotidiano; evitar: "artesano de catálogo" (palabras grandilocuentes sobre tradición y pasión).
- Marca y recursos: no existe nada. Faltan nombre, logotipo, fotos, textos, horario, dirección, teléfono y datos legales (`content-needed.md`, filas 1–16).
- Stack y restricciones: proyecto vacío. HTML y CSS estáticos sin framework ni paso de compilación, con un script mínimo de mejora progresiva (ver Supuestos). Idioma: español. Objetivo WCAG 2.2 AA. Presupuesto: LCP ≤ 2,5 s en móvil, fuentes alojadas en el propio sitio, ninguna cookie ni script de terceros.
- Decisiones previas seguidas: ninguna (no hay PRODUCT.md, DESIGN.md ni decisiones del usuario en `site-decisions.md`).

## Promesa central
Desde el móvil, en la calle, en unos segundos sabes cuándo abre, dónde está y qué puedes encontrar, sin tener que llamar para preguntarlo.

(Es una promesa de la web, no del negocio: no afirma nada sobre el pan, cómo se hace ni qué servicios ofrece.)

## Supuestos de diseño
- Público y dispositivo: la mayoría entra desde el móvil, a menudo de pie o caminando, con prisa y con sol. Se diseña primero para 375 px.
- Procedencia del tráfico: ficha de Google Maps o búsqueda "panadería cerca", y enlaces compartidos por WhatsApp o redes. Tráfico "caliente" y local: no hace falta educar, sino dar la información de inmediato (`pages/entry-marketing.md`, Home: "Hot traffic" y "single-audience").
- Una sola página (Inicio) más dos páginas legales mínimas (Aviso legal y Privacidad), que el pie necesita en España. Sin página 404 propia hasta saber dónde se aloja.
- Sitio estático: no hay sesiones, carrito ni pedidos en línea. Si la respuesta a `content-needed.md` #17/#18 es que hay pedidos en línea, se revisa esta decisión.
- Stack: HTML y CSS a mano, sin framework. Motivo: una página, contenido aún por llegar y nadie que mantenga una cadena de compilación. Se aparta del SHOULD de `implementation.md` §2 (bloques de sección tipados desde un registro); si el sitio crece a varias páginas o a un CMS, pasar a Astro.
- Sin cookies, analítica, mapas incrustados ni fuentes de terceros, así que no hace falta banner de consentimiento (`pages/legal.md`, cookies: "Sites using only strictly necessary cookies"; verificar para la jurisdicción). El mapa es un enlace externo.
- Tema claro por defecto (uso de día, en la calle, con mucha luz) y tema oscuro que sigue la preferencia del sistema.
- Tono cercano y tuteo en la interfaz (botones, etiquetas). Los textos del negocio los escribirá o confirmará el usuario.

## Hechos del negocio
Ninguno supuesto aquí. Las dudas sobre cómo funciona el negocio son filas de pregunta en `content-needed.md`: #17 encargos (sección de encargos, enlace del menú), #18 reparto a domicilio (sección de encargos, pie), #19 si se elabora en el propio local (sección "Sobre la panadería"), #20 si se muestran precios (tarjetas de producto).

## Referencias
Capturas tomadas con `playwright-cli` a 1440 px (primera pantalla y página completa) y 375 px, con movimiento reducido; guardadas fuera del proyecto.

| Sitio | URL | Principios extraídos |
|---|---|---|
| The Bench Bakehouse (Vancouver) | https://www.thebenchbakehouse.com/ | Ritmo: portada de foto a sangre con el nombre encima, luego tres productos en fila; dirección en la esquina superior derecha, siempre visible. Tipo: logotipo con serifa de rótulo, cuerpo pequeño y sin contraste. Color: blanco y negro; el color lo ponen las fotos. Densidad: muy baja, grandes huecos vacíos. Movimiento: parallax de fotos. Lo específico: fotos reales del pan. Lección: la dirección arriba es útil; el horario no aparece en la portada, y es lo que más se busca. |
| Cientotreinta grados (Madrid) | https://cientotreintagrados.com/ | Ritmo: bloques alternos foto/texto a dos columnas, cada uno con un botón. Tipo: una serifa de libro en mayúsculas espaciadas para títulos y cuerpo. Color: fondo blanco roto, gris pizarra en botones. Densidad: media. Movimiento: carrusel de productos. Lo específico: nombra sus calles y locales ("horneamos en Sánchez Pacheco"). Lección: la ubicación contada con nombres propios da confianza; los textos son del negocio, no genéricos. |
| Tartine (San Francisco) | https://tartinebakery.com/ | Ritmo: portada oscura con foto de obrador, luego bloques editoriales muy espaciados. Tipo: monoespaciada para todo, voz de marca fuerte. Color: casi monocromo con un acento ocre. Densidad: baja. Movimiento: vídeo y carrusel. Lo específico: voz editorial y citas de prensa reales. Lección: una marca conocida puede permitirse estilo sobre información; una panadería de barrio desconocida no. |
| Bread Ahead (Londres) | https://www.breadahead.com/ | Ritmo: foto cenital a pantalla completa con una palabra gigante. Tipo: serifa display enorme sobre la foto, sans en mayúsculas en el menú. Color: verde oscuro de marca, el resto lo ponen las fotos. Densidad: alta en navegación (dos filas de menú). Movimiento: poco. Lo específico: el producto estrella llenando la pantalla. Lección: en móvil, dos ventanas emergentes (avisos y cookies) tapan la portada entera; nada debe ocultar la información de la primera pantalla. |
| Pump Street (Orford, Reino Unido) | https://pumpstreetbakery.com/ (redirige a pumpstreetchocolate.com) | Ritmo: tienda en línea primero, la panadería física al final ("Visit us"). Tipo: sans espaciada en mayúsculas. Color: rosa de marca en bloques. Densidad: media. Movimiento: carrusel. Lo específico: el pie separa contacto y horario de la panadería y del obrador de chocolate, con días y horas concretos. Lección: el horario por días en texto plano es lo que resuelve la visita; aquí está escondido en el pie. |

Ninguna de las cinco pone el horario y la dirección en la primera pantalla del móvil. Esa es la oportunidad de esta web.

## Estructura
### Inicio (página única)
- Momento: viene de Maps, de una búsqueda o de un enlace; está cerca o va a pasar por allí. Ya sabe que es una panadería; quiere confirmar lo práctico.
- Duda principal: "¿está abierta ahora (o a la hora que puedo ir) y dónde está exactamente?"; la segunda, "¿qué tienen?".
- Dial de persuasión: bajo. Es tráfico local y con intención; persuadir aquí estorba. La confianza viene de que los datos sean concretos y estén a la vista.
1. Cabecera: identificar y dar el atajo — nombre `[NOMBRE DE LA PANADERÍA]`, menú de anclas (Horario, Productos, `[ENCARGOS]`, Sobre la panadería) y botón "Llamar" — marcador (teléfono #5; enlace del menú depende de content-needed #17).
2. Portada: decir qué es y responder la duda principal en la primera pantalla — "Panadería de barrio en `[BARRIO]`", franja con hoy (`[HORARIO: hoy]`), dirección y botones "Cómo llegar" y "Llamar"; foto de la fachada — "Panadería de barrio" real (lo dijo el usuario); barrio, horario, dirección, teléfono y foto marcadores (#2–#6, #10).
3. Horario y dirección: resolver "¿cuándo puedo ir?" sin ambigüedad — la tablilla semanal con el día de hoy resaltado, dirección, enlace a mapa, nota de festivos — marcadores (#3, #4, #6, #7).
4. Productos: resolver "¿qué tienen?" — 6 tarjetas con foto, nombre y una frase; sin precio — marcadores (#8, #9; precio depende de content-needed #20).
4b. Reseñas (añadida a petición del coordinador, 2026-11-24): resolver "¿está bueno, lo recomienda la gente del barrio?" — valoración con plataforma y tres reseñas — marcadores hasta tener reseñas reales con permiso (content-needed #21, #22); nunca inventadas.
5. Sección de encargos: resolver "¿puedo pedir algo para un día concreto?" — título neutro `[SECCIÓN DE ENCARGOS: título]`, texto lorem, botón "Llamar" — marcador; depende de content-needed #17 y #18; se elimina si la respuesta es no.
6. Sobre la panadería: resolver "¿quién está detrás?" (confianza de barrio: caras y nombres) — texto de 60–120 palabras y foto — marcadores (#11, #12; foto y título dependen de #19).
7. Pie: datos de contacto repetidos y mínimo legal — nombre, dirección, teléfono, horario resumido con enlace a la tablilla, razón social, NIF, enlaces a Aviso legal y Privacidad, redes — marcadores (#1, #3, #5, #13, #15).

Comparación con la secuencia por defecto (hero, tres ventajas, cifras, testimonios, CTA): no hay ventajas ni cifras. Las reseñas se añadieron después a petición, solo como hueco con marcadores hasta tener reseñas reales. No hay CTA final: el pie repite el teléfono y la dirección, que son la acción.

### Aviso legal y Privacidad
- Momento: casi nadie entra; quien entra busca un dato concreto (quién es el titular, qué se hace con sus datos).
- Duda principal: "¿quién es el responsable y cómo le contacto?".
- Dial de persuasión: ninguno.
1. Título, fecha de vigencia `[FECHA]`, resumen en una caja y texto completo — todo marcador (#13, #14). El texto lo debe validar un profesional.

## Dirección
- Nombre: "rótulo y cristal de la puerta".
- Por qué: en una panadería de barrio en España, lo que informa no es la web sino dos objetos: el rótulo de la fachada (la palabra PANADERÍA en letras grandes y estrechas) y el cartel del horario pegado en el cristal de la puerta, en vinilo blanco sobre el vidrio oscuro. La web traslada esos dos objetos: la voz tipográfica del rótulo y la información del cristal.
- Tipografía: una familia en dos anchuras. Barlow Condensed (600–700) para el rótulo, los títulos y las horas, por su parecido con la rotulación comercial estrecha; Barlow (400–500) para el texto, legible al sol. Escala corta: 5 tamaños; el rótulo de portada grande (clamp ~3–6 rem), el resto contenido.
- Color: base neutra "harina" (blanco casi puro, no crema) y "tinta" (casi negro cálido) para el texto. Colores con nombre:
  - Harina: fondo de página.
  - Tinta: texto y bordes.
  - Vidrio: verde muy oscuro, fondo de la tablilla del horario (el cristal de la puerta). Solo ahí y en el pie.
  - Vinilo: blanco sobre Vidrio, texto de la tablilla.
  - Toldo: azul intenso para acciones (botones y enlaces). Se gasta solo en lo que se pulsa.
  - Ticket: amarillo para resaltar la fila de hoy en la tablilla. Solo eso.
  - Miga: tono neutro cálido muy claro para cajas de foto pendiente y superficies secundarias.
- Disposición: una columna en móvil. En escritorio, rejilla de 12 columnas con portada a dos columnas (texto y datos a la izquierda, foto de fachada a la derecha). Esquema de la primera pantalla en móvil:

```
[NOMBRE]                     [Llamar]
PANADERÍA                (rótulo grande)
de barrio en [BARRIO]
┌ Hoy: [HORARIO: hoy] ─────────────┐
│ [DIRECCIÓN]                      │
│ [Cómo llegar]  [Llamar]          │
└──────────────────────────────────┘
[FOTO: fachada de la tienda]  (4:5, empieza aquí)
```

- Imágenes: fachada, productos, personas. Todas marcadores con su proporción final; ninguna foto de stock ni generada.
- Densidad y movimiento: densidad media-baja; movimiento solo funcional (estados de botones, foco, desplazamiento suave a las anclas si no hay movimiento reducido). Nada de parallax ni carruseles.
- Claro u oscuro: claro por defecto, porque se usa de día y en la calle; oscuro con la preferencia del sistema.
- Elemento audaz: la tablilla del horario como el cartel del cristal de la puerta (panel Vidrio, letras Vinilo en Barlow Condensed, días y horas alineados en tabla, la fila de hoy en Ticket). Todo lo demás es tranquilo.

## Evitar
- Fondo crema, titulares con serifa y acento terracota: la combinación de "panadería" por defecto.
- Palabras de catálogo artesano ("con amor", "tradición", "masa madre", "horneado cada mañana") mientras el usuario no las confirme.
- Foto de pan de stock en la portada; cualquier foto que no sea del negocio.
- Ventanas emergentes, banner de boletín o de cookies tapando la primera pantalla (Bread Ahead).
- Horario solo en el pie (Pump Street) o ausente (The Bench).
- Etiquetas en mayúsculas espaciadas sobre cada título, flechas en todos los enlaces, tarjetas idénticas con sombra suave.
- Un indicador "Abierto ahora" calculado: con el horario sin confirmar daría por cierto algo que no lo es. Se añade cuando el horario real esté confirmado.

## Test de plantilla
Si cambias el nombre por el de otra panadería, la estructura sigue sirviendo, pero la dirección no es genérica: parte del rótulo y del cartel de horario de la puerta, y pone el horario en la primera pantalla del móvil, algo que ninguna de las cinco referencias hace. Lo que la hará de este negocio y no de otro son sus datos, que faltan: hasta que lleguen, el test queda abierto (ver `content-needed.md`).
