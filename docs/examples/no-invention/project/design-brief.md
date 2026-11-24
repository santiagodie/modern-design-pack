# Design brief: web de una panadería de barrio

Fecha: 2026-11-24

## Contexto
- Producto: la web de una panadería de barrio cuyo nombre, ciudad, productos y horario aún no conocemos. Una sola página.
- Público: vecinos que viven o trabajan a pocas calles y miran el móvil antes de bajar ("¿está abierta?, ¿dónde está exactamente?, ¿qué tienen?, ¿puedo encargar?"); en segundo lugar, alguien nuevo en el barrio que llega desde Google Maps o una búsqueda de "panadería cerca".
- Trabajo principal: persuadir (que la visiten o llamen), pero con tráfico "caliente" y local: la página persuade dando los datos prácticos antes que nada.
- Tono: cercano, claro, de mostrador; evitar: lo "gourmet" o pretencioso.
- Marca y recursos: no existe nada todavía (ni logotipo, ni fotos, ni textos, ni datos). Todo lo que sea un hecho va como marcador (ver content-needed).
- Stack y restricciones: HTML y CSS estáticos, sin framework y sin JavaScript (no hace falta: una página, sin estado ni sesión). Fuente variable alojada en el propio sitio. Español. WCAG 2.2 AA. Presupuesto de rendimiento: LCP ≤ 2,5 s en móvil; sin scripts de terceros ni cookies, así que no hace falta banner de consentimiento mientras siga así.
- Decisiones existentes seguidas: ninguna (no hay PRODUCT ni DESIGN).

## Promesa central
Desde el móvil y en segundos, sabes si la panadería está abierta, dónde está, qué suele haber en el mostrador y cómo encargar, sin tener que llamar para preguntarlo.

(Es una promesa de la web, no del negocio: no afirma nada sobre el pan. La promesa del negocio la escribirá el usuario; ver `[LEMA]` en content-needed.)

## Suposiciones
- Es una sola tienda física, con obrador propio o no (no se dice en la página hasta confirmarlo).
- La mayoría de visitas llegan desde el móvil y desde Google Maps o una búsqueda local.
- No hay tienda online: la página no tiene carrito ni pagos. Si aceptan encargos, se hacen por teléfono o en tienda (método a confirmar; sección con marcador).
- Sin cookies ni analítica de terceros; si se añaden, hará falta consentimiento con rechazo tan fácil como aceptar.
- Estático sin framework porque hoy no hay contenido que justifique colecciones tipadas; cuando haya catálogo real, pasar productos a un archivo de datos (Astro u otro generador) es el siguiente paso.
- Modo claro por defecto y modo oscuro según el sistema (la gente consulta la web a primera hora o de noche).
- No se ha hecho búsqueda de reseñas ni del negocio porque no sabemos su nombre.

## Referencias
Capturas tomadas con `playwright-cli` del primer pantallazo a 1440 px y 375 px con movimiento reducido (sin captura de página completa; la estructura completa se leyó con WebFetch). Guardadas fuera del proyecto.

| Sitio | URL | Principios tomados |
|---|---|---|
| e5 Bakehouse (Londres) | https://www.e5bakehouse.com/ | Ritmo: carrusel de foto grande y luego mosaico de seis tarjetas; tipografía: palo seco en mayúsculas para la navegación, mucha; color: azul petróleo y blanco, fotos en blanco y negro; densidad: alta, muchas rutas (escuela, granja, tienda); movimiento: carrusel; específico: las fotos del obrador real. Lección: las direcciones y el horario quedan en el pie; para un vecino es lo primero. |
| Tartine (San Francisco) | https://tartinebakery.com/ | Ritmo: barra de aviso, cabecera centrada y foto a sangre; tipografía: monoespaciada espaciada (plantilla) con logotipo fino; color: neutro con un botón ocre para "Order"; densidad: baja; movimiento: vídeo; específico: el oficio en la foto. Lección: un único botón de acción con color propio funciona; la tipografía monoespaciada en mayúsculas es justo lo que queremos evitar. |
| Levadura Madre (Madrid) | https://www.levaduramadre.es/ | Ritmo: foto del escaparate real a la izquierda y titular a la derecha, luego "Productos del día" con precios con IVA; tipografía: monoespaciada de máquina para la marca, palo seco para el texto; color: blanco y verde del rótulo; densidad: media; movimiento: casi ninguno; específico: el rótulo de la fachada como imagen de marca. Lección: el rótulo y el escaparate son la identidad de una panadería; el horario sigue sin aparecer en portada. |
| Homestead Bakery + Cafe (Barrie, Canadá) | https://www.homesteadartisanbakery.com/ | Ritmo: foto a sangre con lema, intro, entradas de blog, sección de dirección con foto de fachada; tipografía: mayúsculas espaciadas y serifa ligera con interlineado enorme en móvil; color: neutro; densidad: baja; movimiento: ninguno; específico: la dirección como titular de sección. Lección: poner la dirección como titular es acertado; el horario solo en el pie y un aviso de la plataforma olvidado en la página restan confianza. |

Patrón común en las cuatro: el horario nunca está en el primer pantallazo. Es la duda principal del vecino, así que aquí va arriba.

## Estructura
### Inicio (página única)
- Momento del recorrido: el vecino tiene el móvil en la mano y está a punto de bajar, o alguien nuevo acaba de ver la panadería en un mapa. Ya cree que existe y que está cerca; no sabe si está abierta ni qué encontrará.
- Duda principal: "¿está abierta ahora y dónde está exactamente?"; después, "¿qué tienen y puedo encargar?".
- Dial de persuasión: bajo — es tráfico local y caliente que busca datos; persuadir aquí es dar el horario y la dirección sin rodeos. El poco tono de marca vive en el estilo visual y en el lema que escriba el usuario.

1. Cabecera: nombre y dos accesos (Horario y dirección, Llamar) — `[NOMBRE DE LA PANADERÍA]`, `[TELÉFONO]` — marcador. Resuelve "¿cómo los contacto?" sin bajar.
2. Portada "letrero de la puerta": nombre, lema, y el cartel del horario con los siete días, la dirección y los botones Cómo llegar y Llamar — `[NOMBRE]`, `[LEMA]`, `[HORARIO]`, `[DIRECCIÓN]`, `[FOTO: fachada o mostrador]` 4:3 — marcador. Resuelve la duda principal en el primer pantallazo.
3. En el mostrador: lo que suelen tener, por familias (pan, bollería, por encargo), 3–6 productos con foto, nombre, una línea y precio — `[FOTO: producto]`, `[NOMBRE DEL PRODUCTO]`, lorem de una línea, `[PRECIO]` — marcador. Resuelve "¿qué tienen?". Sin "productos del día" ni disponibilidad mientras no haya un dato real que lo sostenga.
4. Encargos: cómo se encarga, con cuánta antelación y cómo se recoge — `[CÓMO ENCARGAR]`, `[ANTELACIÓN]`, `[TELÉFONO]` — marcador. Resuelve "¿puedo reservar mi pan o una tarta?". Si no aceptan encargos, el usuario la descarta.
5. Quiénes somos: quién hornea, en 60–120 palabras, con foto real — lorem de esa longitud, `[FOTO: panaderos en el obrador]` — marcador. Resuelve "¿quién está detrás?" para el vecino nuevo.
6. Visítanos: dirección, cómo llegar, horario de festivos, teléfono y mapa — `[DIRECCIÓN]`, `[CÓMO LLEGAR]`, `[HORARIO: festivos]`, `[TELÉFONO]`, `[MAPA]` caja 16:9 — marcador. Resuelve "¿cómo llego y qué pasa en festivos?". El horario semanal vive solo en el cartel de la portada, sin repetirlo.
7. Pie: nombre, dirección, teléfono, redes, datos legales mínimos y enlaces a aviso legal y privacidad — `[RAZÓN SOCIAL]`, `[NIF]`, `[RED SOCIAL]` — marcador.

Comparado con la secuencia por defecto (hero, tres ventajas, cifras, testimonios, CTA): no hay ventajas, ni cifras, ni testimonios, ni CTA final de marketing. Sin reseñas reales no hay sección de opiniones; si el usuario tiene reseñas que puede mostrar, se añade.

## Dirección
- Nombre: "letrero de puerta y papel de estraza".
- Por qué: en una panadería de barrio lo que mira el vecino es el cartel de horario colgado en la puerta, el rótulo esmaltado de la fachada y la bolsa de papel de estraza. La web toma esos tres objetos: el horario como cartel, el nombre como rótulo, las superficies como papel de bolsa.
- Tipografía: una sola familia variable con eje de anchura (Archivo, OFL), alojada en el sitio. Rótulo: Archivo muy estrecha y negra, en mayúsculas solo en el nombre, a tamaño grande (clamp hasta ~6rem). Texto: Archivo normal 1rem–1.125rem, interlineado 1.55. Escala corta: 5 tamaños.
- Color: base blanco harina (no crema) y tinta casi negra; color gastado en dos sitios: el rótulo y la acción principal.
  - Harina: fondo.
  - Tinta: texto.
  - Rótulo (verde botella esmaltado): solo la acción principal ("Cómo llegar") y el cordel del cartel. El nombre y los enlaces van en tinta, para que el botón sea lo único verde.
  - Estraza (kraft): superficie del cartel del horario y de las tarjetas.
  - Miga: superficie secundaria y separadores.
  - Horno (rojo ladrillo, poco): solo el estado "cerrado" cuando haya horario real.
- Layout: una columna en móvil; en escritorio, portada en dos columnas (letrero y cartel a la izquierda, foto a la derecha), contenido en rejilla de 12 con medida máxima de 70ch para texto.

```
 ┌────────────────────────────────────────────┐
 │ [NOMBRE]                 Horario · Llamar  │
 ├───────────────────────┬────────────────────┤
 │ [NOMBRE] (rótulo)     │                    │
 │ [LEMA]                │  [FOTO: fachada]   │
 │ ┌───────────────────┐ │       4:3          │
 │ │ HORARIO (7 días)  │ │                    │
 │ │ [DIRECCIÓN]       │ │                    │
 │ │ Cómo llegar Llamar│ │                    │
 │ └───────────────────┘ │                    │
 └───────────────────────┴────────────────────┘
```
- Imágenes: todas son marcadores con su proporción final (fachada 4:3, productos 1:1, obrador 4:5, mapa 16:9). Nada de fotos de stock ni generadas.
- Densidad y movimiento: densidad media-baja; movimiento solo funcional (estados de foco y hover). Nada de entradas al hacer scroll.
- Claro u oscuro: claro por defecto, oscuro si el sistema lo pide ("obrador de madrugada").
- Elemento audaz: el cartel del horario de la puerta, en papel de estraza con un cordel dibujado en CSS, como pieza central del primer pantallazo. Sin JavaScript no se resalta el día de hoy; cuando haya horario real, un script mínimo puede marcar "hoy" y "abierto o cerrado" como mejora progresiva.

## Evitar
- Crema + titulares con serifa + acento terracota (la combinación "panadería artesana" por defecto).
- Mayúsculas espaciadas o monoespaciadas en etiquetas y botones (Tartine, Homestead).
- Carruseles en la portada (e5).
- Frases sobre el pan que nadie ha confirmado ("pan de masa madre hecho cada mañana", "harinas ecológicas", "desde 1980").
- "Productos del día" o "quedan pocas" sin un dato real detrás.
- Esconder el horario y la dirección en el pie.

## Prueba de plantilla
Si cambias el nombre por el de otra panadería con otro horario, la estructura sigue sirviendo, pero el elemento audaz es el horario y la dirección de esta tienda en su puerta: en cuanto el usuario rellene los marcadores, la portada solo puede ser de esta panadería. Mientras falten esos datos, la página es deliberadamente un molde con huecos marcados.
