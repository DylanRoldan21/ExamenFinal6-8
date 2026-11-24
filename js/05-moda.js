// ALUMNO 5 - Filtros, talla obligatoria y carro
(() => {
  const seccion = document.getElementById('moda');
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

  // ---------- Elegir talla ----------
  seccion.querySelectorAll('.a5-tallas').forEach(grupo => {
    const botones = grupo.querySelectorAll('button');
    botones.forEach(b => b.addEventListener('click', () => {
      botones.forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
    }));
  });

  // ---------- Agregar al carro (obliga a elegir talla) ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      const talla = p.querySelector('.a5-tallas button.activo');
      if (!talla) { mostrarToast('⚠️ Primero elige una talla'); return; }
      agregarAlCarrito(p.dataset.nombre + ' (Talla ' + talla.textContent + ')', p.dataset.precio);
    });
  });
})();
