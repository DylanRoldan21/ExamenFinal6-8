// ALUMNO 1 - Buscador, carro, usuario y banner deslizante
(() => {
  // ---------- 1. Buscador ----------
  // Busca el texto en el data-nombre de TODOS los productos de la página
  document.getElementById('a1-buscador').addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('a1-busqueda').value.trim().toLowerCase();
    if (texto.length < 2) { mostrarToast('Escribe al menos 2 letras'); return; }

    document.querySelectorAll('.a1-encontrado').forEach(p => p.classList.remove('a1-encontrado'));
    const encontrados = [...document.querySelectorAll('.producto')]
      .filter(p => (p.dataset.nombre || '').toLowerCase().includes(texto));

    if (encontrados.length === 0) { mostrarToast('😕 No encontramos "' + texto + '"'); return; }
    encontrados.forEach(p => { p.classList.remove('oculto'); p.classList.add('a1-encontrado'); });
    encontrados[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    mostrarToast('🔍 ' + encontrados.length + ' resultado(s) para "' + texto + '"');
    setTimeout(() => encontrados.forEach(p => p.classList.remove('a1-encontrado')), 4000);
  });

  // ---------- 2. Usuario ----------
  document.getElementById('a1-usuario').addEventListener('click', () => mostrarToast('👤 Inicio de sesión: próximamente'));

  // ---------- 3. Menú (en celular lleva a las categorías) ----------
  document.querySelector('.a1-menu-btn').addEventListener('click', () => {
    document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
  });

  // ---------- 4. Carro ----------
  const panel = document.getElementById('a1-panel');
  document.querySelector('.a1-carrito-btn').addEventListener('click', () => panel.classList.add('abierto'));
  panel.querySelector('.a1-cerrar').addEventListener('click', () => panel.classList.remove('abierto'));
  panel.querySelector('.a1-comprar').addEventListener('click', () => panel.classList.remove('abierto'));

  document.addEventListener('carrito-actualizado', (evento) => {
    const productos = evento.detail;
    document.getElementById('a1-contador').textContent = productos.length;
    document.getElementById('a1-lista').innerHTML = productos
      .map(p => `<li><span>${p.nombre}</span><b>${formatoSoles(p.precio)}</b></li>`).join('');
    const total = productos.reduce((suma, p) => suma + p.precio, 0);
    document.getElementById('a1-total').textContent = formatoSoles(total);
  });

  // ---------- 5. Banner deslizante ----------
  const VELOCIDAD = 5000; // 5000 = 5 segundos
  const slides = document.querySelectorAll('.a1-slide');
  const puntos = document.querySelector('.a1-puntos');
  let actual = 0, temporizador;

  slides.forEach((s, i) => {
    const punto = document.createElement('button');
    punto.setAttribute('aria-label', 'Banner ' + (i + 1));
    punto.addEventListener('click', () => { irA(i); reiniciar(); });
    puntos.appendChild(punto);
  });
  function irA(n) {
    slides[actual].classList.remove('activo');
    puntos.children[actual].classList.remove('activo');
    actual = (n + slides.length) % slides.length;
    slides[actual].classList.add('activo');
    puntos.children[actual].classList.add('activo');
  }
  function reiniciar() { clearInterval(temporizador); temporizador = setInterval(() => irA(actual + 1), VELOCIDAD); }
  document.querySelector('.a1-prev').addEventListener('click', () => { irA(actual - 1); reiniciar(); });
  document.querySelector('.a1-next').addEventListener('click', () => { irA(actual + 1); reiniciar(); });
  irA(0); reiniciar();
})();
