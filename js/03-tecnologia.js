// ALUMNO 3 - Filtros, búsqueda, orden, favoritos, detalles, estrellas y cuotas
(() => {
  const CUOTAS = 12;               // número de cuotas sin intereses
  const ENVIO_GRATIS_DESDE = 1000; // soles
  const MAS_VENDIDOS = 3;          // cuántos productos llevan la insignia
  const CLAVE_FAV = 'a3-favoritos';

  const seccion = document.getElementById('tecnologia');
  const grid = document.getElementById('a3-grid');
  const productos = Array.from(grid.querySelectorAll('.producto'));
  const ordenOriginal = productos.slice();
  const buscar = document.getElementById('a3-buscar');
  const orden = document.getElementById('a3-orden');
  const contador = document.getElementById('a3-contador');
  const vacio = document.getElementById('a3-vacio');

  let categoria = 'todo';

  const normalizar = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ---------- Favoritos (guardados en el navegador) ----------
  let favoritos = new Set();
  try { favoritos = new Set(JSON.parse(localStorage.getItem(CLAVE_FAV)) || []); } catch (e) {}
  const guardarFav = () => {
    try { localStorage.setItem(CLAVE_FAV, JSON.stringify([...favoritos])); } catch (e) {}
  };

  // Botón de filtro "Favoritos" creado por JS
  const btnFav = document.createElement('button');
  btnFav.className = 'filtro';
  btnFav.dataset.filtro = 'favoritos';
  seccion.querySelector('.filtros').appendChild(btnFav);
  const actualizarBtnFav = () => { btnFav.textContent = '♥ Favoritos (' + favoritos.size + ')'; };
  actualizarBtnFav();

  const filtros = seccion.querySelectorAll('.filtro');

  // ---------- Mostrar/ocultar según categoría + búsqueda ----------
  function actualizar() {
    const q = normalizar(buscar.value.trim());
    let visibles = 0;
    productos.forEach(p => {
      const marca = p.querySelector('.producto-marca').textContent;
      const texto = normalizar(p.dataset.nombre + ' ' + marca);
      const enCategoria =
        categoria === 'todo' ||
        (categoria === 'favoritos' ? favoritos.has(p.dataset.nombre) : p.dataset.categoria === categoria);
      const coincide = enCategoria && texto.includes(q);
      p.classList.toggle('oculto', !coincide);
      if (coincide) visibles++;
    });
    contador.textContent = 'Mostrando ' + visibles + ' de ' + productos.length + ' productos';
    vacio.textContent = categoria === 'favoritos' && !q
      ? '♡ Aún no tienes favoritos. Toca el corazón de un producto para guardarlo.'
      : '😕 No encontramos productos con esa búsqueda.';
    vacio.hidden = visibles !== 0;
  }

  // ---------- Ordenar ----------
    function ordenar() {
    const lista = ordenOriginal.slice();
    const precio = p => Number(p.dataset.precio);
    const estrellas = p => Number(p.querySelector('.a3-rating').dataset.estrellas);
    const esFav = p => favoritos.has(p.dataset.nombre);
    switch (orden.value) {
      case 'favoritos':   lista.sort((a, b) => esFav(b) - esFav(a)); break; // el resto mantiene su orden original
      case 'precio-asc':  lista.sort((a, b) => precio(a) - precio(b)); break;
      case 'precio-desc': lista.sort((a, b) => precio(b) - precio(a)); break;
      case 'rating':      lista.sort((a, b) => estrellas(b) - estrellas(a) || Number(b.dataset.opiniones) - Number(a.dataset.opiniones)); break;
      case 'nombre':      lista.sort((a, b) => a.dataset.nombre.localeCompare(b.dataset.nombre, 'es')); break;
    }
    lista.forEach(p => grid.appendChild(p));
  }

  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      categoria = boton.dataset.filtro;
      actualizar();
    });
  });
  buscar.addEventListener('input', actualizar);
  orden.addEventListener('change', ordenar);

  // ---------- Feedback del botón "Agregar" ----------
  function feedbackAgregado(boton) {
    const textoOriginal = boton.textContent;
    boton.textContent = '✓ Agregado';
    boton.classList.add('a3-agregado');
    setTimeout(() => {
      boton.textContent = textoOriginal;
      boton.classList.remove('a3-agregado');
    }, 1500);
  }

  // ---------- Más vendidos: los de más opiniones (leer ANTES de redibujar estrellas) ----------
  productos.forEach(p => {
    p.dataset.opiniones = Number(p.querySelector('.a3-rating span').textContent.replace(/\D/g, '')) || 0;
  });
  const masVendidos = productos
    .slice()
    .sort((a, b) => Number(b.dataset.opiniones) - Number(a.dataset.opiniones))
    .slice(0, MAS_VENDIDOS);

  // ---------- Datos de cada producto ----------
  productos.forEach(p => {
    const precioNum = Number(p.dataset.precio);
    const foto = p.querySelector('.producto-foto');
    const info = p.querySelector('.producto-info');

    // Estrellas según data-estrellas
    const rating = p.querySelector('.a3-rating');
    const n = Number(rating.dataset.estrellas);
    const opiniones = rating.querySelector('span').outerHTML;
    rating.innerHTML = '★'.repeat(n) + '☆'.repeat(5 - n) + ' ' + opiniones;

    // Cuotas
    const cuotas = p.querySelector('.a3-cuotas');
    cuotas.textContent = 'o ' + CUOTAS + ' cuotas de ' + formatoSoles(precioNum / CUOTAS) + ' sin intereses';

    // Precio anterior tachado (opcional)
    if (p.dataset.precioAntes) {
      const antes = document.createElement('span');
      antes.className = 'a3-precio-antes';
      antes.textContent = formatoSoles(Number(p.dataset.precioAntes));
      p.querySelector('.producto-precio').after(antes);
    }

    // Envío gratis
    if (precioNum > ENVIO_GRATIS_DESDE) {
      const envio = document.createElement('p');
      envio.className = 'a3-envio';
      envio.textContent = '🚚 Envío gratis';
      cuotas.after(envio);
    }

    // Insignia "Más vendido"
    if (masVendidos.includes(p)) {
      const insignia = document.createElement('span');
      insignia.className = 'a3-mas-vendido';
      insignia.textContent = '🔥 Más vendido';
      foto.appendChild(insignia);
    }

    // Corazón de favoritos
    const corazon = document.createElement('button');
    corazon.type = 'button';
    corazon.className = 'a3-fav';
    const pintarCorazon = () => {
      const activo = favoritos.has(p.dataset.nombre);
      corazon.textContent = activo ? '♥' : '♡';
      corazon.classList.toggle('a3-fav-activo', activo);
      corazon.setAttribute('aria-pressed', activo);
      corazon.setAttribute('aria-label', activo ? 'Quitar de favoritos' : 'Agregar a favoritos');
    };
    pintarCorazon();
        corazon.addEventListener('click', () => {
      const nombre = p.dataset.nombre;
      favoritos.has(nombre) ? favoritos.delete(nombre) : favoritos.add(nombre);
      guardarFav();
      pintarCorazon();
      actualizarBtnFav();
      if (orden.value === 'favoritos') ordenar(); // <-- línea nueva
      actualizar();
    });
    foto.appendChild(corazon);

    // Botón "Ver detalles"
    const btnDetalles = document.createElement('button');
    btnDetalles.type = 'button';
    btnDetalles.className = 'a3-btn-detalles';
    btnDetalles.textContent = 'Ver detalles';
    btnDetalles.addEventListener('click', () => abrirDetalles(p));
    info.querySelector('.btn-agregar').before(btnDetalles);
  });

  // ---------- Ventana de detalles ----------
  const modal = document.createElement('div');
  modal.className = 'a3-modal';
  modal.hidden = true;
  modal.innerHTML =
    '<div class="a3-modal-caja" role="dialog" aria-modal="true" aria-labelledby="a3-modal-titulo">' +
      '<button type="button" class="a3-modal-cerrar" aria-label="Cerrar">✕</button>' +
      '<div class="a3-modal-contenido"></div>' +
    '</div>';
  document.body.appendChild(modal);
  const contenidoModal = modal.querySelector('.a3-modal-contenido');

  function abrirDetalles(p) {
    const img = p.querySelector('.producto-foto img');
    const desc = p.dataset.descripcion || 'Producto de tecnología. Pregunta por disponibilidad y características en tienda.';
    const envio = p.querySelector('.a3-envio') ? '<p class="a3-envio">🚚 Envío gratis</p>' : '';

    contenidoModal.innerHTML =
      '<div class="a3-modal-foto"><img src="' + esc(img.getAttribute('src')) + '" alt="' + esc(img.alt) + '"></div>' +
      '<div class="a3-modal-datos">' +
        '<p class="producto-marca">' + esc(p.querySelector('.producto-marca').textContent) + '</p>' +
        '<h3 id="a3-modal-titulo">' + esc(p.dataset.nombre) + '</h3>' +
        '<p class="a3-rating">' + p.querySelector('.a3-rating').innerHTML + '</p>' +
        '<p class="a3-modal-precio">' + esc(formatoSoles(Number(p.dataset.precio))) + '</p>' +
        '<p class="a3-cuotas">' + esc(p.querySelector('.a3-cuotas').textContent) + '</p>' +
        envio +
        '<p class="a3-modal-desc">' + esc(desc) + '</p>' +
        '<button type="button" class="btn-agregar a3-modal-agregar">Agregar al carro</button>' +
      '</div>';

    contenidoModal.querySelector('.a3-modal-agregar').addEventListener('click', e => {
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
      feedbackAgregado(e.currentTarget);
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.a3-modal-cerrar').focus();
  }

  function cerrarDetalles() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  modal.querySelector('.a3-modal-cerrar').addEventListener('click', cerrarDetalles);
  modal.addEventListener('click', e => { if (e.target === modal) cerrarDetalles(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) cerrarDetalles(); });

  // ---------- Agregar al carro (tarjetas) ----------
  grid.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
      feedbackAgregado(boton);
    });
  });

  actualizar();
})();