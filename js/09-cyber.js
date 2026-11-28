(() => {
  const seccion = document.getElementById('cyber');
  const productos = seccion.querySelectorAll('.producto');

  // 1. Configuración de productos
  productos.forEach(p => {
    const antes = Number(p.dataset.antes);
    const ahora = Number(p.dataset.precio);

    p.querySelector('.a9-descuento').textContent =
      '-' + Math.round((1 - ahora / antes) * 100) + '%';

    p.querySelector('.a9-antes').textContent = formatoSoles(antes);
    p.querySelector('.a9-ahora').textContent = formatoSoles(ahora);

    const ahorro = antes - ahora;
    const etiquetaAhorro = p.querySelector('.a9-ahorro');
    if (etiquetaAhorro) {
      etiquetaAhorro.textContent = 'Ahorras ' + formatoSoles(ahorro);
    }

    p.dataset.stockInicial = p.dataset.stock;
    pintarStock(p);
  });

  // 2. Función de stock (Con efecto Agotado)
  function pintarStock(p) {
    const stock = Number(p.dataset.stock);
    const inicial = Number(p.dataset.stockInicial);
    p.querySelector('.a9-stock-barra').style.width = (stock / inicial * 100) + '%';

    const texto = p.querySelector('.a9-stock-texto');
    const boton = p.querySelector('.btn-agregar');

    if (stock === 0) {
      texto.textContent = 'AGOTADO';
      texto.style.color = '#000';
      boton.disabled = true;
      boton.textContent = 'Agotado';
      p.classList.add('a9-agotado'); // Aplica el filtro gris y el sello
    } else if (stock < 5) {
      texto.textContent = '¡ÚLTIMAS ' + stock + ' UNIDADES!';
      texto.style.color = 'var(--rojo)';
      texto.style.fontWeight = '900';
    } else {
      texto.textContent = '¡Quedan ' + stock + ' unidades!';
    }
  }

  // 3. Agregar al carro
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      if (Number(p.dataset.stock) <= 0) return;
      p.dataset.stock = Number(p.dataset.stock) - 1;
      agregarAlCarrito(p.dataset.nombre + ' (Cyber)', p.dataset.precio);
      pintarStock(p);
    });
  });

  // 4. Cuenta regresiva automática (2 días desde hoy)
  const contador = seccion.querySelector('.a9-contador');
  const hoy = new Date();
  const finDelDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + 2, 23, 59, 59).getTime();
  const fin = finDelDia;
  
  const dos = n => String(n).padStart(2, '0');
  let intervalo;

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

  intervalo = setInterval(actualizar, 1000);
  actualizar();

  // 5. Ventana Modal (Descripción del producto)
  const modal = document.getElementById('a9-modal');
  const modalImg = document.getElementById('a9-modal-img');
  const modalTitulo = document.getElementById('a9-modal-titulo');
  const modalDesc = document.getElementById('a9-modal-desc');
  const modalPrecio = document.getElementById('a9-modal-precio');
  const btnCerrar = document.getElementById('a9-cerrar-modal');

  productos.forEach(p => {
    const img = p.querySelector('.producto-foto img');
    const nombre = p.querySelector('.producto-nombre').textContent;
    const marca = p.querySelector('.producto-marca').textContent;
    const precio = p.dataset.precio;
    const desc = "Producto de alta calidad. Oferta Cyber exclusiva con stock limitado. Aprovecha antes de que se agote.";

    img.style.cursor = 'pointer'; 
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalTitulo.textContent = marca + ' - ' + nombre;
      modalDesc.textContent = desc;
      modalPrecio.textContent = formatoSoles(precio);
      modal.showModal();
    });
  });

  btnCerrar.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
})();