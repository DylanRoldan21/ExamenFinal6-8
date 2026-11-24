// ALUMNO 3 - Filtros, estrellas y cuotas sin intereses
(() => {
  const CUOTAS = 12; // número de cuotas sin intereses
  const ENVIO_GRATIS_DESDE = 1000; // soles
  const seccion = document.getElementById('tecnologia');
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

  productos.forEach(p => {
    // ---------- Estrellas según data-estrellas ----------
    const rating = p.querySelector('.a3-rating');
    const n = Number(rating.dataset.estrellas);
    const opiniones = rating.querySelector('span').outerHTML;
    rating.innerHTML = '★'.repeat(n) + '☆'.repeat(5 - n) + ' ' + opiniones;

    // ---------- Cuotas: precio / CUOTAS ----------
    const cuota = Number(p.dataset.precio) / CUOTAS;
    p.querySelector('.a3-cuotas').textContent = 'o ' + CUOTAS + ' cuotas de ' + formatoSoles(cuota) + ' sin intereses';

    // ---------- Reto: Envío gratis si el precio supera S/ 1000 ----------
    if (Number(p.dataset.precio) > ENVIO_GRATIS_DESDE) {
      const envio = document.createElement('p');
      envio.className = 'a3-envio';
      envio.textContent = '🚚 Envío gratis';
      p.querySelector('.a3-cuotas').after(envio);
    }
  });

  // ---------- Agregar al carro ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
    });
  });
})();