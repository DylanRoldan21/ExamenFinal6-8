// ALUMNO 7 - Filtros, favoritos y carro
(() => {
  const seccion = document.getElementById('belleza');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. FILTRAR POR CATEGORÍA ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      // 1. Quitar la clase 'activo' a todos los botones
      filtros.forEach(b => b.classList.remove('activo'));
      
      // 2. Poner la clase 'activo' al botón que acabamos de hacer clic
      boton.classList.add('activo');
      
      // 3. Obtener la categoría del botón (ej: "maquillaje", "todo")
      const categoriaSeleccionada = boton.dataset.filtro;
      
      // 4. Recorrer todos los productos
      productos.forEach(p => {
        const categoriaProducto = p.dataset.categoria;
        
        // Si el botón es "todo" O la categoría del producto coincide con el botón...
        if (categoriaSeleccionada === 'todo' || categoriaProducto === categoriaSeleccionada) {
          p.classList.remove('oculto'); // Mostrar el producto
          p.style.display = 'flex';     // Asegurar que se muestre como tarjeta
        } else {
          p.classList.add('oculto');    // Ocultar el producto
          p.style.display = 'none';     // Ocultarlo visualmente
        }
      });
    });
  });

  // ---------- 2. FAVORITOS ----------
  let favoritos = 0;
  const contador = document.getElementById('a7-favoritos');
  
  seccion.querySelectorAll('.a7-fav').forEach(corazon => {
    corazon.addEventListener('click', () => {
      corazon.classList.toggle('activo');
      const marcado = corazon.classList.contains('activo');
      
      // Cambiar el símbolo del corazón
      corazon.textContent = marcado ? '♥' : '♡';
      
      favoritos += marcado ? 1 : -1;
      contador.textContent = favoritos;
      
      // Mensaje flotante
      if (marcado) {
        mostrarToast('❤️ Agregado a favoritos');
      } else {
        mostrarToast('💔 Quitado de favoritos');
      }
    });
  });

  // ---------- 3. AGREGAR AL CARRO ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const p = boton.closest('.producto');
      
      // Enviamos el producto al carrito global (función del profesor)
      agregarAlCarrito(p.dataset.nombre, p.dataset.precio);
      
      // Efecto visual en el botón
      const textoOriginal = boton.textContent;
      boton.textContent = '¡Agregado! ✓';
      boton.classList.add('btn-exito'); 
      
      // Después de 1.5 segundos, vuelve a la normalidad
      setTimeout(() => {
        boton.textContent = textoOriginal;
        boton.classList.remove('btn-exito');
      }, 1500);
    });
  });
})();