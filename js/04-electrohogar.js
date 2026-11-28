
// ALUMNO 4 - Filtros, contador de productos y ordenar por precio
(() => {
  const seccion = document.getElementById('electro');
  const grid = document.getElementById('a4-grid');
  const filtros = seccion.querySelectorAll('.filtro');
  const cantidad = document.getElementById('a4-cantidad');

  function actualizarCantidad() {
    const visibles = grid.querySelectorAll('.producto:not(.oculto)').length;
    cantidad.textContent = visibles + (visibles === 1 ? ' producto' : ' productos');
  }

  // ---------- 1. Filtrar ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      grid.querySelectorAll('.producto').forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
      actualizarCantidad();
    });
  });

  // ---------- 2. Ordenar ----------
  document.getElementById('a4-orden').addEventListener('change', (e) => {
    const opcion = e.target.value;
    const lista = [...grid.querySelectorAll('.producto')];
    lista.sort((a, b) => {
      if (opcion === 'menor') return a.dataset.precio - b.dataset.precio;
      if (opcion === 'mayor') return b.dataset.precio - a.dataset.precio;
      if (opcion === 'nombre') return a.dataset.nombre.localeCompare(b.dataset.nombre);
      return a.dataset.orden - b.dataset.orden;
    });
    lista.forEach(p => grid.appendChild(p));
  });

  // ---------- 3. Agregar al carro ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
    });
  });

  actualizarCantidad();
})();