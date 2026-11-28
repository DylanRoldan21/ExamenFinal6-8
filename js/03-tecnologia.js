// ALUMNO 3 - Tecnología: filtros, búsqueda, orden, favoritos, detalles,
// estrellas, cuotas y animaciones
(() => {
  const CUOTAS = 12;               // número de cuotas sin intereses
  const ENVIO_GRATIS_DESDE = 1000; // soles
  const MAS_VENDIDOS = 3;          // cuántos productos llevan la insignia
  const CLAVE_FAV = 'a3-favoritos';

  const seccion = document.getElementById('tecnologia');
  if (!seccion) return;
  const grid = document.getElementById('a3-grid');
  if (!grid) return;

  const productos = Array.from(grid.querySelectorAll('.producto'));
  const ordenOriginal = productos.slice();

  // Funciones compartidas del proyecto (con respaldo por si no cargaron)
  const dinero = n => (typeof formatoSoles === 'function') ? formatoSoles(n) : 'S/ ' + Number(n).toFixed(2);
  const agregar = (nombre, precio) => { if (typeof agregarAlCarrito === 'function') agregarAlCarrito(nombre, precio); };

  const normalizar = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ---------- Título: separa el emoji para que no se pinte con el degradado ----------
  const titulo = seccion.querySelector('.depto-titulo');
  if (titulo && !titulo.querySelector('.a3-titulo-texto')) {
    const partes = titulo.textContent.trim().split(/\s+/);
    if (partes.length > 1) {
      const emoji = partes.shift();
      titulo.textContent = '';
      const sEmoji = document.createElement('span');
      sEmoji.className = 'a3-emoji';
      sEmoji.textContent = emoji;
      const sTexto = document.createElement('span');
      sTexto.className = 'a3-titulo-texto';
      sTexto.textContent = partes.join(' ');
      titulo.append(sEmoji, ' ', sTexto);
    }
  }

  // ---------- Buscador, orden, contador y mensaje vacío (se crean si faltan) ----------
  let buscar = document.getElementById('a3-buscar');
  let orden = document.getElementById('a3-orden');
  let contador = document.getElementById('a3-contador');
  let vacio = document.getElementById('a3-vacio');

  if (!buscar || !orden) {
    const barra = document.createElement('div');
    barra.className = 'a3-herramientas';
    grid.before(barra);
    if (!buscar) {
      buscar = document.createElement('input');
      buscar.type = 'search';
      buscar.id = 'a3-buscar';
      buscar.className = 'a3-buscar';
      buscar.placeholder = '🔍 Buscar producto o marca...';
      buscar.setAttribute('aria-label', 'Buscar producto');
      barra.appendChild(buscar);
    }
    if (!orden) {
      orden = document.createElement('select');
      orden.id = 'a3-orden';
      orden.className = 'a3-orden';
      orden.setAttribute('aria-label', 'Ordenar productos');
      orden.innerHTML =
        '<option value="original">Ordenar por</option>' +
        '<option value="favoritos">♥ Favoritos primero</option>' +
        '<option value="precio-asc">Precio: menor a mayor</option>' +
        '<option value="precio-desc">Precio: mayor a menor</option>' +
        '<option value="rating">Mejor calificados (estrellas)</option>' +
        '<option value="nombre">Nombre A-Z</option>';
      barra.appendChild(orden);
    }
  }
  if (!Array.from(orden.options).some(o => o.value === 'favoritos')) {
    const op = document.createElement('option');
    op.value = 'favoritos';
    op.textContent = '♥ Favoritos primero';
    orden.insertBefore(op, orden.options[1] || null);
  }
  if (!contador) {
    contador = document.createElement('p');
    contador.id = 'a3-contador';
    contador.className = 'a3-contador';
    contador.setAttribute('aria-live', 'polite');
    grid.before(contador);
  }
  if (!vacio) {
    vacio = document.createElement('p');
    vacio.id = 'a3-vacio';
    vacio.className = 'a3-vacio';
    vacio.hidden = true;
    grid.after(vacio);
  }

  let categoria = 'todo';

  // ---------- Animaciones ----------
  function rebotar(el) {
    if (!el) return;
    el.classList.remove('a3-rebote');
    void el.offsetWidth; // reinicia la animación
    el.classList.add('a3-rebote');
  }

  function animarEntrada() {
    let i = 0;
    productos.forEach(p => {
      if (p.classList.contains('oculto')) return;
      p.style.setProperty('--a3-i', i++);
      p.classList.remove('a3-entra');
      void p.offsetWidth;
      p.classList.add('a3-entra');
    });
  }

  // ---------- Favoritos (guardados en el navegador) ----------
  let favoritos = new Set();
  try { favoritos = new Set(JSON.parse(localStorage.getItem(CLAVE_FAV)) || []); } catch (e) {}
  const guardarFav = () => {
    try { localStorage.setItem(CLAVE_FAV, JSON.stringify([...favoritos])); } catch (e) {}
  };

  // Botón de filtro "Favoritos" creado por JS
  const contFiltros = seccion.querySelector('.filtros');
  const btnFav = document.createElement('button');
  btnFav.type = 'button';
  btnFav.className = 'filtro';
  btnFav.dataset.filtro = 'favoritos';
  if (contFiltros) contFiltros.appendChild(btnFav);
  const actualizarBtnFav = () => { btnFav.textContent = '♥ Favoritos (' + favoritos.size + ')'; };
  actualizarBtnFav();

  const filtros = seccion.querySelectorAll('.filtro');

  // ---------- Mostrar/ocultar según categoría + búsqueda ----------
  function actualizar() {
    const q = normalizar(buscar.value.trim());
    let visibles = 0;
    productos.forEach(p => {
      const marcaEl = p.querySelector('.producto-marca');
      const marca = marcaEl ? marcaEl.textContent : '';
      const texto = normalizar((p.dataset.nombre || '') + ' ' + marca);
      const enCategoria =
        categoria === 'todo' ||
        (categoria === 'favoritos' ? favoritos.has(p.dataset.nombre) : p.dataset.categoria === categoria);
      const coincide = enCategoria && texto.includes(q);
      p.classList.toggle('oculto', !coincide);
      if (coincide) visibles++;
    });

    const textoContador = 'Mostrando ' + visibles + ' de ' + productos.length + ' productos';
    if (contador.textContent !== textoContador) {
      contador.textContent = textoContador;
      rebotar(contador);
    }
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
    const opin = p => Number(p.dataset.opiniones) || 0;
    const esFav = p => favoritos.has(p.dataset.nombre);
    switch (orden.value) {
      case 'favoritos':   lista.sort((a, b) => esFav(b) - esFav(a)); break;
      case 'precio-asc':  lista.sort((a, b) => precio(a) - precio(b)); break;
      case 'precio-desc': lista.sort((a, b) => precio(b) - precio(a)); break;
      case 'rating':      lista.sort((a, b) => estrellas(b) - estrellas(a) || opin(b) - opin(a)); break;
      case 'nombre':      lista.sort((a, b) => a.dataset.nombre.localeCompare(b.dataset.nombre, 'es')); break;
    }
    lista.forEach(p => grid.appendChild(p));
    animarEntrada();
  }

  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      categoria = boton.dataset.filtro;
      actualizar();
      animarEntrada();
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
    const sp = p.querySelector('.a3-rating span');
    p.dataset.opiniones = sp ? (Number(sp.textContent.replace(/\D/g, '')) || 0) : 0;
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
    const n = Math.max(0, Math.min(5, Number(rating.dataset.estrellas) || 0));
    const spanOp = rating.querySelector('span');
    const opiniones = spanOp ? spanOp.outerHTML : '';
    rating.innerHTML = '★'.repeat(n) + '☆'.repeat(5 - n) + ' ' + opiniones;

    // Cuotas
    const cuotas = p.querySelector('.a3-cuotas');
    cuotas.textContent = 'o ' + CUOTAS + ' cuotas de ' + dinero(precioNum / CUOTAS) + ' sin intereses';

    // Precio anterior tachado (opcional, con data-precio-antes)
    if (p.dataset.precioAntes) {
      const antes = document.createElement('span');
      antes.className = 'a3-precio-antes';
      antes.textContent = dinero(Number(p.dataset.precioAntes));
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
      rebotar(corazon);
      rebotar(btnFav);
      if (orden.value === 'favoritos') ordenar();
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
  // Estilos esenciales en línea: así funciona aunque falte algo en el CSS
  modal.style.cssText =
    'position:fixed;inset:0;display:none;align-items:center;justify-content:center;' +
    'padding:16px;background:rgba(3,6,14,.8);z-index:99999;';
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
        '<p class="a3-modal-precio">' + esc(dinero(Number(p.dataset.precio))) + '</p>' +
        '<p class="a3-cuotas">' + esc(p.querySelector('.a3-cuotas').textContent) + '</p>' +
        envio +
        '<p class="a3-modal-desc">' + esc(desc) + '</p>' +
        '<button type="button" class="btn-agregar a3-modal-agregar">Agregar al carro</button>' +
      '</div>';

    contenidoModal.querySelector('.a3-modal-agregar').addEventListener('click', e => {
      agregar(p.dataset.nombre, p.dataset.precio);
      feedbackAgregado(e.currentTarget);
    });

    // Zoom que sigue al mouse
    const fotoModal = contenidoModal.querySelector('.a3-modal-foto');
    const imgModal = fotoModal.querySelector('img');
    fotoModal.addEventListener('mousemove', e => {
      const r = fotoModal.getBoundingClientRect();
      imgModal.style.transformOrigin =
        ((e.clientX - r.left) / r.width * 100) + '% ' + ((e.clientY - r.top) / r.height * 100) + '%';
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.querySelector('.a3-modal-cerrar').focus({ preventScroll: true });
  }

  function cerrarDetalles() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  modal.querySelector('.a3-modal-cerrar').addEventListener('click', cerrarDetalles);
  modal.addEventListener('click', e => { if (e.target === modal) cerrarDetalles(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.style.display === 'flex') cerrarDetalles(); });

  // ---------- Agregar al carro (tarjetas) ----------
  grid.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      agregar(p.dataset.nombre, p.dataset.precio);
      feedbackAgregado(boton);
    });
  });

  // ---------- Botón flotante "volver arriba" ----------
  const btnArriba = document.createElement('button');
  btnArriba.type = 'button';
  btnArriba.className = 'a3-arriba';
  btnArriba.textContent = '↑';
  btnArriba.setAttribute('aria-label', 'Volver al inicio de la sección');
  document.body.appendChild(btnArriba);
  btnArriba.addEventListener('click', () => seccion.scrollIntoView({ behavior: 'smooth', block: 'start' }));

  const mostrarArriba = () => {
    const r = seccion.getBoundingClientRect();
    btnArriba.classList.toggle('a3-arriba-visible', r.top < -200 && r.bottom > 300);
  };
  window.addEventListener('scroll', mostrarArriba, { passive: true });
  mostrarArriba();

  // ---------- Inicio: contador + efecto "skeleton" y entrada escalonada ----------
  actualizar();
  grid.classList.add('a3-cargando');
  setTimeout(() => {
    grid.classList.remove('a3-cargando');
    animarEntrada();
  }, 700);
})();