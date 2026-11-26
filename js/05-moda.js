// ALUMNO 5 - Filtros, talla obligatoria, guía y favoritos
(() => {
  const seccion = document.getElementById('moda');
  if (!seccion) return;
  
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Filtrar por categoría ----------
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

  // ---------- 2. Elegir talla ----------
  seccion.querySelectorAll('.a5-tallas').forEach(grupo => {
    const botones = grupo.querySelectorAll('button');
    botones.forEach(b => b.addEventListener('click', () => {
      botones.forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
    }));
  });

  // ---------- 3. Agregar al carro (obliga a elegir talla) ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      const talla = p.querySelector('.a5-tallas button.activo');
      
      if (!talla) { 
          // Si tienes SweetAlert (Swal), puedes usar esto:
          if(typeof Swal !== 'undefined') {
            Swal.fire({
              icon: 'warning',
              title: '¡Falta la talla!',
              text: 'Por favor, selecciona una talla antes de agregar el producto.',
              confirmButtonColor: '#6c5ce7'
            });
          } else {
            alert('⚠️ Primero elige una talla'); 
          }
          return; 
      }
      
      // Llama a la función global del carrito
      agregarAlCarrito(p.dataset.nombre + ' (Talla ' + talla.textContent + ')', p.dataset.precio);
    });
  });

  // ---------- 4. RETO EXTRA: Guía de Tallas ----------
  const btnGuia = document.getElementById('btn-guia-tallas');
  if (btnGuia) {
    btnGuia.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (typeof Swal !== 'undefined') {
          Swal.fire({
            title: 'Guía de Tallas',
            html: `
              <table style="width:100%; text-align:center; border-collapse: collapse; margin-top: 10px;">
                <tr style="background:#f4f4f4; border-bottom: 2px solid #ddd;">
                  <th style="padding:10px;">Talla</th>
                  <th style="padding:10px;">Pecho (cm)</th>
                  <th style="padding:10px;">Cintura (cm)</th>
                </tr>
                <tr><td>S</td><td>86 - 91</td><td>71 - 76</td></tr>
                <tr style="background:#fafafa;"><td>M</td><td>96 - 101</td><td>81 - 86</td></tr>
                <tr><td>L</td><td>106 - 111</td><td>91 - 96</td></tr>
                <tr style="background:#fafafa;"><td>XL</td><td>116 - 121</td><td>101 - 106</td></tr>
              </table>
              <p style="font-size:0.8rem; margin-top:15px; color:#666;">* Medidas referenciales en centímetros.</p>
            `,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#fd79a8'
          });
      } else {
          alert("Tabla de tallas:\nS: Pecho 86-91 cm\nM: Pecho 96-101 cm\nL: Pecho 106-111 cm\nXL: Pecho 116-121 cm");
      }
    });
  }

  // ---------- 5. Botón de Favoritos ----------
  seccion.querySelectorAll('.btn-favorito').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        btn.textContent = '❤️'; 
        // Opcional: Mostrar un mini mensaje
        if(typeof Swal !== 'undefined') {
          const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1500 });
          Toast.fire({ icon: 'success', title: 'Añadido a favoritos' });
        }
      } else {
        btn.textContent = '🤍'; 
      }
    });
  });

})();
