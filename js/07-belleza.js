// ALUMNO 7 - Filtros, favoritos y carro
(() => {
  const seccion = document.getElementById('belleza');
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

  // ---------- Favoritos ----------
  let favoritos = 0;
  const contador = document.getElementById('a7-favoritos');
  
  seccion.querySelectorAll('.a7-fav').forEach(corazon => {
    corazon.addEventListener('click', () => {
      corazon.classList.toggle('activo');
      const marcado = corazon.classList.contains('activo');
      
      // Cambiar el icono (corazón vacío vs lleno)
      const icono = corazon.querySelector('.material-icons-round');
      icono.textContent = marcado ? 'favorite' : 'favorite_border';
      
      favoritos += marcado ? 1 : -1;
      contador.textContent = favoritos;
      
      // RETO EXTRA: Mensaje al agregar o quitar de favoritos
      if (marcado) {
        mostrarToast('❤️ Agregado a favoritos');
      } else {
        mostrarToast('💔 Quitado de favoritos');
      }
    });
  });

  // ---------- Agregar al carro ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
    });
  });
})();