// Mejora progresiva: resalta en la tablilla la fila del día de hoy y pone el nombre del día
// en la franja "Hoy" de la portada. Sin JavaScript, la página muestra la semana completa igual.
// No calcula "abierto ahora": el horario aún no está confirmado (design-brief.md, Evitar).
(function () {
  var hoy = new Date().getDay(); // 0 = domingo … 6 = sábado
  var nombres = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  var fila = document.querySelector('.tablilla__tabla tr[data-dia="' + hoy + '"]');
  if (fila) {
    fila.classList.add("es-hoy");
    fila.setAttribute("aria-current", "date");
  }

  var dia = document.querySelector("[data-hoy-dia]");
  if (dia) dia.textContent = nombres[hoy];

  // La franja de portada muestra el horario de hoy copiando la celda de la tablilla.
  var horas = document.querySelector("[data-hoy-horas]");
  var celda = fila && fila.querySelector("td");
  if (horas && celda) horas.innerHTML = celda.innerHTML;
})();

// Menú de móvil (<details>): con JavaScript se cierra al elegir un enlace y con Esc,
// devolviendo el foco al botón. Sin JavaScript sigue abriéndose y cerrándose igual.
(function () {
  var menu = document.querySelector(".menu-movil");
  if (!menu) return;
  var boton = menu.querySelector("summary");
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) menu.open = false;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      boton.focus();
    }
  });
})();
