// ALUMNO 8 - Filtros, elegir color y carro
(() => {
  const seccion = document.getElementById('deporte');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- Filtrar por categoría ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      productos.forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
    });
  });

  // ---------- Elegir color ----------
  productos.forEach(p => {
    const bolitas = p.querySelectorAll('.a8-color');
    const texto = p.querySelector('.a8-color-texto');
    bolitas.forEach(b => b.addEventListener('click', () => {
      bolitas.forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
      texto.textContent = 'Color: ' + b.dataset.color;
    }));
  });

  // ---------- Agregar al carro con el color ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      const color = p.querySelector('.a8-color.activo');
      agregarAlCarrito(p.dataset.nombre + (color ? ' - ' + color.dataset.color : ''), p.dataset.precio);
    });
  });
})();
