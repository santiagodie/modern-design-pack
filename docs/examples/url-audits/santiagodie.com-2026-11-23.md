# Auditoría de diseño: santiagodie.com

| | |
|---|---|
| URL | https://santiagodie.com/graduate-salary-predictor/ |
| Páginas revisadas | `/graduate-salary-predictor/` (inicio), `/graduate-salary-predictor/formulario.html` (formulario, la tarea principal), `/graduate-salary-predictor/info.html` (información del modelo) |
| Fecha | 2026-11-23 |
| Viewports | 375 px, 768 px, 1440 px (movimiento reducido activado) |
| Herramientas usadas | Capturas con Playwright (`playwright-cli`), script de comprobaciones, script "Outdated, measurable", lectura del HTML, pase de foco con Tab, Lighthouse (móvil simulado) en las 3 páginas |
| Herramientas no disponibles | Ninguna. **No revisado:** la pantalla de resultados, porque solo aparece al enviar el formulario y la auditoría es de solo lectura. No había banner de cookies. |

Capturas y datos en `audits/santiagodie.com-2026-11-23/` (`<página>-<ancho>.png`, `<página>-focus-1440.png`, `checks.json`, `lighthouse-*.json`).

## Resumen

1. **El formulario se queda bloqueado unos 10 s en móvil.** Lighthouse mide 9.950 ms de Total Blocking Time y 13,2 s hasta que es interactivo. La causa es el runtime de Tailwind CDN (24,6 s de CPU) más 3,4 MB del modelo ONNX descargados al cargar la página. Para arreglarlo, compila el CSS y carga el modelo más tarde.
2. **La cabecera se desborda a 375 px en las tres páginas,** con scroll horizontal y el selector de idioma cortado. En móvil, la navegación principal se ve rota.
3. **Los campos del formulario no tienen etiqueta accesible** (las `<label>` no tienen `for`) y los selectores de moneda e idioma no tienen nombre. Además, el foco del teclado pasa por tres controles ocultos de la barra lateral cerrada.

## Problemas críticos

### C1. El formulario no responde durante unos 10 s en móvil

- **Qué:** en `formulario.html`, Lighthouse (móvil simulado) mide Total Blocking Time de 9.950 ms, Time to Interactive de 13,2 s y 25,8 s de trabajo en el hilo principal. El 93 % de ese tiempo (24.085 ms de *bootup*) es `https://cdn.tailwindcss.com/3.4.17`: el compilador de Tailwind se ejecuta en el navegador y regenera el CSS cuando el script cambia el DOM. Además, la página pesa 3.625 KiB porque descarga al cargar `ort-wasm-simd-threaded.wasm` (1.843 KiB) y `model/salary_rf.onnx.gz` (1.544 KiB).
- **Dónde:** `formulario-375.png`; `<script src="https://cdn.tailwindcss.com/3.4.17">` en `<head>`; los recursos de onnxruntime-web y el modelo.
- **Por qué importa:** es la página de la tarea principal. En un móvil medio, los campos no responden a los toques ni a la escritura durante segundos, y el usuario puede pensar que la web está rota.
- **Cómo arreglarlo:** (1) Sustituye el CDN de Tailwind por un CSS compilado con la CLI de Tailwind (`npx tailwindcss -i input.css -o css/tailwind.css --minify`) y enlázalo con `<link rel="stylesheet">`. Con eso desaparece casi todo el bloqueo. (2) Descarga el runtime ONNX y el modelo al llegar al paso 2, o en `requestIdleCallback`, en lugar de al cargar la página. El aviso "Modelo listo" ya sirve de estado para esa carga.
- **Evidencia:** measured (Lighthouse formulario: Performance 57, TBT 9.950 ms, TTI 13,2 s, total 3.625 KiB; consola: "cdn.tailwindcss.com should not be used in production")

### C2. La cabecera desborda el ancho a 375 px

- **Qué:** a 375 px la cabecera no se adapta. "SalaryPredict" se parte en dos líneas, con el emoji encima, y los dos `<select>` quedan en parte fuera de la pantalla, así que aparece scroll horizontal. Pasa en las tres páginas. A 768 px ya no ocurre.
- **Dónde:** `home-375.png`, `formulario-375.png`, `info-375.png`; selectores `header div.flex.items-center` (contenedor derecho), `select#currencySelector`, `select#languageSelector`.
- **Por qué importa:** el selector de idioma, lo primero que busca un visitante que no habla español, se ve cortado, y toda la página se mueve de lado al hacer scroll. La primera impresión en móvil es de web rota.
- **Cómo arreglarlo:** a menos de 640 px, deja en la cabecera solo el icono de Historial, sin texto (`<span class="sr-only">`), y el logo en una línea (`whitespace-nowrap`, `text-xl`). Mueve moneda e idioma a una segunda fila (`flex-wrap`) o a un menú. Comprueba que `document.documentElement.scrollWidth` es igual a 375.
- **Evidencia:** measured (script de comprobaciones: `horizontalOverflow: true` a 375 px en las 3 páginas)

### C3. Campos del formulario sin etiqueta accesible

- **Qué:** las `<label>` del formulario son hermanas del campo pero no tienen `for`, y los campos no tienen `id`. Los lectores de pantalla anuncian "edit text" sin nombre, y hacer clic en la etiqueta no enfoca el campo. Afecta a `nombre`, `edad`, `pais`, `titulacion`, `campoEstudio`, `nivelIngles`, `regionEstudio` y `notaMedia`. Los selectores de moneda e idioma de la cabecera tampoco tienen nombre, en las tres páginas. Los grupos de radio (Género, Ranking universidad) no están en un `<fieldset>` con `<legend>`.
- **Dónde:** `formulario-1440.png`; `div#step1 input[name="nombre"]`, `input[name="edad"]`, `select[name="pais"]` y equivalentes en `#step2`; `select#currencySelector`, `select#languageSelector`.
- **Por qué importa:** con un lector de pantalla no se puede completar el formulario sabiendo qué se rellena, y es la única tarea del sitio.
- **Cómo arreglarlo:** añade un `id` a cada campo y el `for` correspondiente a su `<label>`. Envuelve cada grupo de radio en `<fieldset><legend>Género *</legend>…</fieldset>`. Añade `aria-label="Moneda"` y `aria-label="Idioma"` a los selectores de la cabecera.
- **Evidencia:** measured (Lighthouse: `label` y `select-name` fallan en formulario; `select-name` falla en las 3 páginas; Accessibility 84 / 86 / 89)

### C4. El foco del teclado pasa por controles invisibles

- **Qué:** con la barra lateral de historial cerrada (`#historySidebar` con `w-0 overflow-hidden`), sus controles siguen en el orden de tabulación. Después del enlace "ver repositorio", las pulsaciones 6, 7 y 8 de Tab van a `button#closeSidebar`, `div#emptyHistory` y `button#clearHistory`, que no se ven. Esto pasa en las tres páginas antes de llegar al contenido principal.
- **Dónde:** `home-focus-1440.png` (el foco sí se ve en los controles de la cabecera); `aside#historySidebar`.
- **Por qué importa:** un usuario de teclado pulsa Tab tres veces sin saber dónde está, y uno de esos controles es "Limpiar todo", una acción destructiva.
- **Cómo arreglarlo:** con la barra cerrada, pon `inert` (o `hidden`/`visibility:hidden`) en `#historySidebar` y quítalo al abrirla. Añade `aria-expanded` y `aria-controls="historySidebar"` a `#historyToggle`.
- **Evidencia:** measured (pase de foco: pulsaciones 6–8 en elementos dentro de un contenedor de ancho 0)

## Problemas menores

### M1. Cifras sin fuente o que no cuadran

- **Qué:** la banda de estadísticas dice "5,000+ Predicciones Realizadas", "8 Países Analizados" y "85% Precisión Media". Es una demo estática que se ejecuta en el navegador, así que no está claro de dónde sale el recuento. "Precisión media" no dice qué métrica es (¿R²? ¿error porcentual?). En `info.html` los pesos de los factores suman 100,5 % (90 + 5 + 2,5 + 1,5 + 1,5), y se citan "más de 300,000 graduados" sin fuente.
- **Dónde:** `home-1440.png` (banda inferior, `div.grid.grid-cols-3`); `info-1440.png` (`h3` de los factores y el párrafo de Metodología).
- **Por qué importa:** una herramienta que predice salarios vive de la confianza. Cifras redondas sin fuente, y porcentajes que no suman 100, hacen dudar de la predicción.
- **Cómo arreglarlo:** sustituye la banda por datos verificables con enlace (tamaño del dataset y fuente, métrica exacta, por ejemplo "MAE ±X € en test"), o quítala. Corrige los porcentajes para que sumen 100 % o indica que están redondeados.
- **Evidencia:** judgment (las cifras vienen del HTML; la suma 100,5 % es aritmética sobre el texto publicado)

### M2. Orden de encabezados roto

- **Qué:** en inicio, el `h1` salta directamente a `h3` en las tarjetas. En formulario no hay `h1` y la página empieza en `h2: Datos Personales`.
- **Dónde:** `home-1440.png`, `div.grid > div.bg-white > h3`; `formulario-1440.png`, `#step1 h2`.
- **Por qué importa:** quien navega por encabezados con un lector de pantalla pierde la estructura, y el SEO de la página del formulario es más débil.
- **Cómo arreglarlo:** cambia los `h3` de las tarjetas a `h2`. En formulario, añade un `h1` ("Calcula tu salario estimado"), visible o encima de la barra de progreso.
- **Evidencia:** measured (Lighthouse `heading-order` en inicio; checks `h1Count: 0` en formulario)

### M3. Objetivos táctiles pequeños en móvil

- **Qué:** a 375 px, los selectores de moneda e idioma miden 85×31 y 82×31 px, y el botón Historial 124×32 px. Los radios del formulario miden 13×13 px, aunque la etiqueta los amplía al envolverlos.
- **Dónde:** `home-375.png`; `select#currencySelector`, `select#languageSelector`, `button#historyToggle`, `input.mr-2` (radios).
- **Por qué importa:** son controles de navegación y están por debajo de los 44 px recomendados, así que es fácil fallar el toque.
- **Cómo arreglarlo:** da a los controles de cabecera una altura mínima de 44 px en móvil (`min-h-[44px] py-2`). Da a cada etiqueta de radio padding vertical (`py-2`) y al radio `w-5 h-5`.
- **Evidencia:** measured (script de comprobaciones a 375 px)

### M4. Emoji como iconos; las banderas no se ven en Windows

- **Qué:** la marca (💼), las tarjetas (📊 🌍 ⚡), el estado vacío (📭), el botón de borrar (🗑️) y los idiomas (🇪🇸 🇬🇧 🇫🇷) usan emoji, mientras el reloj de Historial es un SVG de trazo fino. En Windows los emoji de bandera se muestran como las letras "ES", y el selector queda "ES ES".
- **Dónde:** `home-1440.png` (selector de idioma y tarjetas); `select#languageSelector option`.
- **Por qué importa:** la mezcla de estilos resta coherencia. "ES ES" parece un error y no ayuda a elegir idioma.
- **Cómo arreglarlo:** usa un solo set de iconos SVG (el del reloj ya es de trazo). En el selector, pon el nombre del idioma ("Español", "English", "Français") en lugar de bandera + código.
- **Evidencia:** measured para las banderas (visible en la captura de Windows); judgment para la mezcla de iconos

### M5. El aviso "Modelo listo" tapa el formulario en móvil

- **Qué:** a 375 px, el toast verde "✓ Modelo listo" queda fijo abajo a la izquierda, encima de la tarjeta del formulario, a la altura del botón "Siguiente".
- **Dónde:** `formulario-375.png`.
- **Por qué importa:** tapa parte del formulario mientras se rellena. El aviso es útil, pero aquí estorba.
- **Cómo arreglarlo:** haz que se oculte solo a los 3 s, o colócalo como texto de estado junto a la barra de progreso ("Paso 1 de 2 · Modelo listo") con `aria-live="polite"`.
- **Evidencia:** judgment

### M6. Sin meta description ni imagen para compartir

- **Qué:** ninguna de las tres páginas tiene `meta name="description"` ni `og:image`.
- **Dónde:** `<head>` de las 3 páginas.
- **Por qué importa:** al compartir el enlace (LinkedIn, Slack, portfolio) sale sin descripción ni imagen, y Google genera el fragmento a su criterio.
- **Cómo arreglarlo:** añade una descripción por página (por ejemplo, "Estima tu salario como recién graduado con un modelo de machine learning que se ejecuta en tu navegador") y una imagen OG de 1200×630.
- **Evidencia:** measured (Lighthouse `meta-description`; checks `description: null`, `ogImage: null`)

## Obsoleto

> Primero, las técnicas antiguas medidas en la página. Después, criterio de diseño frente a las convenciones actuales, marcado como tal.

### O1. Scripts que bloquean el renderizado en `<head>` (measured: OM3)

- **Qué:** `cdn.tailwindcss.com/3.4.17` y `chart.umd.min.js` se cargan en `<head>` sin `defer`, en las tres páginas. Chart.js no se usa en inicio ni en info.
- **Dónde:** `<head>` de las 3 páginas.
- **Por qué importa:** retrasan el primer pintado. FCP y LCP están entre 2,9 y 3,2 s, y Lighthouse estima entre 1.970 y 2.270 ms de ahorro.
- **Cómo arreglarlo:** CSS compilado (ver C1). Chart.js solo en la página de resultados, con `defer`.
- **Evidencia:** measured (script OM: `blockingScripts`; Lighthouse `render-blocking-insight`)

### O2. Titulares sin ajuste equilibrado (measured: OM9)

- **Qué:** ningún `h1`/`h2` usa `text-wrap: balance` (0 de 1, 0 de 2 y 0 de 3). A 375 px, el `h1` de info deja "Modelo" sola en la última línea.
- **Dónde:** `info-375.png`, `h1`.
- **Cómo arreglarlo:** `h1, h2 { text-wrap: balance; }` en el CSS global.
- **Evidencia:** measured

### O3. Sin `prefers-reduced-motion` (measured: OM10)

- **Qué:** la hoja de estilos no tiene reglas `prefers-reduced-motion` (0). Hay un spinner (`.animate-spin`) y transiciones de 300 ms en la barra lateral. El impacto es bajo porque el movimiento es poco.
- **Dónde:** `formulario.html` (`div.animate-spin`), `#historySidebar`.
- **Cómo arreglarlo:** `@media (prefers-reduced-motion: reduce) { #historySidebar { transition: none } }`. El spinner puede seguir girando.
- **Evidencia:** measured

### O4. Recursos de terceros sin SRI (measured: OM8)

- **Qué:** 2–3 scripts de jsDelivr y del CDN de Tailwind sin `integrity`.
- **Dónde:** `<head>` de las 3 páginas.
- **Cómo arreglarlo:** añade `integrity` + `crossorigin="anonymous"` a los scripts de jsDelivr, o alójalos tú. Al compilar Tailwind (C1) desaparece uno.
- **Evidencia:** measured (mantenimiento, riesgo bajo)

### O5. Hero de plantilla sobre degradado azul-morado (judgment)

- **Qué:** el hero de inicio sigue el patrón más común de las landings generadas: titular centrado, subtítulo y dos botones iguales, dentro de una caja con degradado `from-blue-50 to-purple-50`. Debajo hay tres tarjetas idénticas con emoji ("Análisis Inteligente", "Perspectiva Global", "Resultados Instantáneos") y una banda de tres cifras.
- **Dónde:** `home-1440.png`; `.bg-gradient-to-br.from-blue-50.to-purple-50`, `div.grid.md:grid-cols-3`.
- **Por qué importa:** pasa la prueba de la plantilla. Con otro nombre, las tarjetas valdrían para cualquier producto. No se ve qué devuelve la herramienta (una cifra, un rango, un gráfico) hasta que la usas.
- **Cómo arreglarlo:** ver P2.
- **Evidencia:** judgment (comparado con las landings genéricas de Tailwind de 2024–26)

### O6. Barras laterales de color en los factores (judgment)

- **Qué:** cada factor de `info.html` lleva una barra de color distinta (azul, ámbar, verde, morado, gris) que no codifica nada más.
- **Dónde:** `info-1440.png`, bloques `border-l-4`.
- **Cómo arreglarlo:** sustituye los colores por una barra horizontal proporcional al peso de cada factor. Así el color pasa a ser dato (ver P3).
- **Evidencia:** judgment

## Consejos

### T1. Mayúsculas de titular en inglés

- **Qué:** "Predice tu Salario como Graduado", "Cómo Funciona Realmente Nuestro Modelo", "Datos Personales". En español se usa mayúscula solo en la primera palabra.
- **Dónde:** `h1`/`h2`/`h3` de las 3 páginas.
- **Cómo arreglarlo:** "Predice tu salario como graduado", "Cómo funciona nuestro modelo".
- **Evidencia:** judgment

### T2. Texto de enlace poco descriptivo

- **Qué:** "Más Información" no dice a dónde lleva.
- **Dónde:** `home-1440.png`, `a[href="info.html"]`.
- **Cómo arreglarlo:** "Cómo funciona el modelo".
- **Evidencia:** measured (Lighthouse `link-text`)

### T3. Cifras tabulares

- **Qué:** las cifras de la banda y, previsiblemente, el salario resultante usan dígitos proporcionales.
- **Cómo arreglarlo:** `font-variant-numeric: tabular-nums` (`tabular-nums` en Tailwind) en cifras que cambian o se comparan, sobre todo al cambiar de moneda.
- **Evidencia:** judgment

### T4. Botón "Limpiar todo" con degradado y emoji

- **Qué:** el único botón con degradado (`from-red-500 to-red-600`) y sombra es la acción destructiva. Se lleva más peso visual que la acción principal.
- **Dónde:** `button#clearHistory`.
- **Cómo arreglarlo:** botón secundario (texto rojo, borde neutro) y una opción de deshacer en lugar de borrar sin más.
- **Evidencia:** judgment

### T5. Etiqueta "Paso" separada de "1 de 2"

- **Qué:** la barra de progreso pone "Paso" a la izquierda y "1 de 2" a la derecha, separados por todo el ancho.
- **Dónde:** `formulario-1440.png`.
- **Cómo arreglarlo:** "Paso 1 de 2: Datos personales" juntos, a la izquierda.
- **Evidencia:** judgment

### T6. Pie de página genérico

- **Qué:** "© 2025 Predicción Salarial - Proyecto Profesión" no enlaza al autor, al repositorio ni a la fuente de datos.
- **Cómo arreglarlo:** año actual, enlace al repositorio y a la fuente del dataset.
- **Evidencia:** judgment

## Propuestas de mejora

### P1. Montaje de producción en lugar de CDN

- **Qué:** compilar Tailwind, quitar Chart.js de las páginas que no lo usan y cargar ONNX y el modelo solo cuando hagan falta.
- **Dónde:** `<head>` de las 3 páginas; carga del modelo en `js/demo.js`.
- **Por qué importa:** resuelve C1 y O1, y debería bajar el TBT del formulario de ~10 s a casi cero. La cifra exacta hay que medirla después del cambio.
- **Cómo arreglarlo:** CLI de Tailwind con `content: ['*.html','js/*.js']` → `css/tailwind.css`. `import()` dinámico de onnxruntime-web al entrar en el paso 2.
- **Evidencia:** measured (diagnóstico); el resultado esperado hay que verificarlo con Lighthouse

### P2. Mostrar el resultado en el hero

- **Qué:** sustituir las tres tarjetas genéricas por un ejemplo real de salida: "Máster · Ingeniería · Ranking top 100 → 42.000–48.000 €/año", con el mismo componente de la página de resultados. Dejar un solo botón principal ("Calcular mi salario") y convertir "Más información" en enlace de texto.
- **Dónde:** `home-1440.png`, hero y `div.grid.md:grid-cols-3`.
- **Por qué importa:** el visitante ve en un segundo qué obtiene y la página deja de parecer una plantilla.
- **Evidencia:** judgment

### P3. Convertir "Factores" en un gráfico de importancia

- **Qué:** la página de información ya es lo más diferencial del sitio: explica con franqueza que el modelo pesa casi todo en el nivel de estudios. Un gráfico de barras horizontales con los pesos (Chart.js ya está cargado) lo contaría mejor que cinco bloques con barras de color.
- **Dónde:** `info-1440.png`.
- **Evidencia:** judgment

## Alternativas

### A1. El formulario como portada

- **Qué / Cómo:** eliminar la landing y abrir directamente en el paso 1, con una línea de contexto encima. **Ventaja:** un clic menos para la única tarea del sitio, y el hero genérico desaparece. **Inconveniente:** se pierde el espacio para explicar la herramienta a quien llega sin contexto (por ejemplo, desde un portfolio).
- **Evidencia:** judgment

### A2. Dirección "modelo transparente"

- **Qué / Cómo:** construir la identidad en torno a la explicabilidad: portada con el gráfico de importancia de variables y la frase "Tu nivel de estudios explica el 85 % de la predicción", y el formulario a continuación. **Ventaja:** honesto y memorable, y encaja con un proyecto de portfolio de datos. **Inconveniente:** pone en primer plano una limitación del modelo, lo que reduce el atractivo para quien solo quiere una cifra rápida.
- **Evidencia:** judgment

### A3. Herramienta minimalista de una sola pantalla

- **Qué / Cómo:** una columna con todos los campos visibles, sin pasos ni barra lateral, y el resultado actualizándose en vivo al cambiar cada campo (el modelo ya corre en el navegador). **Ventaja:** la inferencia local se vuelve una ventaja que se nota. **Inconveniente:** hay que cargar el modelo al principio, así que la optimización de P1 pasa a ser obligatoria, y la página se alarga en móvil.
- **Evidencia:** judgment

## Qué conservar

- El **aviso de demo estática** con enlace al repositorio es claro y honesto.
- La **página de información** explica con franqueza qué pesa en el modelo. Es el contenido más valioso del sitio.
- **Foco visible** en los controles de la cabecera (outline de 2–3 px), `lang="es"` correcto, viewport correcto, **CLS 0** en las tres páginas y Best Practices 100 en inicio e info.
- El formulario en **dos pasos con barra de progreso** y estado de carga (spinner) es razonable para la cantidad de campos.

## Anexo: Lighthouse

Móvil simulado, ejecutado el 2026-11-23.

| Página | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Inicio | 89 | 86 | 100 | 82 |
| Formulario | 57 | 84 | 81 | 91 |
| Info | 87 | 89 | 100 | 91 |

Métricas clave: LCP 2,9 s / 3,2 s / 3,1 s; CLS 0 en las tres; TBT del formulario 9.950 ms (TTI 13,2 s). Best Practices 81 en el formulario por un aviso de deprecación de `SharedArrayBuffer` en onnxruntime-web.
