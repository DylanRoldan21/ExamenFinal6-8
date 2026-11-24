// ALUMNO 9 - Cuenta regresiva, % de descuento y stock limitado
(() => {
  const seccion = document.getElementById('cyber');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Descuento, precios y stock inicial ----------
  productos.forEach(p => {
    const antes = Number(p.dataset.antes);
    const ahora = Number(p.dataset.precio);
    p.querySelector('.a9-descuento').textContent = '-' + Math.round((1 - ahora / antes) * 100) + '%';
    p.querySelector('.a9-antes').textContent = formatoSoles(antes);
    p.querySelector('.a9-ahora').textContent = formatoSoles(ahora);
    p.dataset.stockInicial = p.dataset.stock;
    pintarStock(p);
  });

  function pintarStock(p) {
    const stock = Number(p.dataset.stock);
    const inicial = Number(p.dataset.stockInicial);
    p.querySelector('.a9-stock-barra').style.width = (stock / inicial * 100) + '%';
    const texto = p.querySelector('.a9-stock-texto');
    const boton = p.querySelector('.btn-agregar');
    if (stock === 0) {
      texto.textContent = 'AGOTADO';
      boton.disabled = true;
      boton.textContent = 'Agotado';
    } else {
      texto.textContent = stock === 1 ? '¡Queda 1 unidad!' : '¡Quedan ' + stock + ' unidades!';
    }
  }

  // ---------- 2. Agregar al carro: descuenta 1 de stock ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      if (Number(p.dataset.stock) <= 0) return;
      p.dataset.stock = Number(p.dataset.stock) - 1;
      agregarAlCarrito(p.dataset.nombre + ' (Cyber)', p.dataset.precio);
      pintarStock(p);
    });
  });

  // ---------- 3. Cuenta regresiva ----------
  const contador = seccion.querySelector('.a9-contador');
  const fin = new Date(contador.dataset.fin).getTime();
  const dos = n => String(n).padStart(2, '0');
  function actualizar() {
    const falta = fin - Date.now();
    if (falta <= 0) {
      contador.innerHTML = '<p style="font-size:1.2rem;font-weight:900">⏰ ¡El Cyber terminó!</p>';
      seccion.querySelectorAll('.btn-agregar').forEach(b => { b.disabled = true; b.textContent = 'Oferta terminada'; });
      clearInterval(intervalo);
      return;
    }
    document.getElementById('a9-dias').textContent = dos(Math.floor(falta / 86400000));
    document.getElementById('a9-horas').textContent = dos(Math.floor(falta / 3600000) % 24);
    document.getElementById('a9-min').textContent = dos(Math.floor(falta / 60000) % 60);
    document.getElementById('a9-seg').textContent = dos(Math.floor(falta / 1000) % 60);
  }
  const intervalo = setInterval(actualizar, 1000);
  actualizar();
})();
