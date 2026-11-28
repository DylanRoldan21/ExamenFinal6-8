// ALUMNO 6 - Filtros (categoría + público) y talla obligatoria
(() => {
  const seccion = document.getElementById('calzado');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const filtro = boton.dataset.filtro;

      productos.forEach(p => {
        let mostrar = false;
        if (filtro === 'todo') mostrar = true;
        else if (filtro === 'ninos') mostrar = p.dataset.publico === 'nino';
        else mostrar = p.dataset.categoria === filtro;
        p.classList.toggle('oculto', !mostrar);
      });
    });
  });

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

  seccion.querySelectorAll('.a6-talla').forEach(s => {
    s.addEventListener('change', () => s.classList.remove('a6-error'));
  });
})();