// ALUMNO 6 - Filtros y talla obligatoria (select)
(() => {
  const seccion = document.getElementById('calzado');
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

  // ---------- Agregar al carro: valida que haya talla ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      const select = p.querySelector('.a6-talla');
      if (select.value === '') {
        select.classList.add('a6-error');
        mostrarToast('⚠️ Elige tu talla de calzado');
        return;
      }
      select.classList.remove('a6-error');
      agregarAlCarrito(p.dataset.nombre + ' (Talla ' + select.value + ')', p.dataset.precio);
    });
  });

  // Quita el borde rojo cuando eligen una talla
  seccion.querySelectorAll('.a6-talla').forEach(s => s.addEventListener('change', () => s.classList.remove('a6-error')));
})();
