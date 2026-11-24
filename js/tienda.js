// =====================================================================
// NO TOCAR (profesor). FUNCIONES COMPARTIDAS POR TODA LA TIENDA.
//
//   agregarAlCarrito('Laptop HP 15"', 2499.00);   -> agrega un producto
//   mostrarToast('Mensaje para el cliente');      -> aviso flotante abajo
//   formatoSoles(2499)                             -> "S/ 2,499.00"
//
// Cada vez que el carrito cambia se dispara el evento 'carrito-actualizado'
// (el Alumno 1 lo escucha para actualizar el contador y el panel).
// =====================================================================
window.carrito = [];

window.formatoSoles = function (numero) {
  return 'S/ ' + Number(numero).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

window.agregarAlCarrito = function (nombre, precio) {
  window.carrito.push({ nombre: nombre, precio: Number(precio) });
  document.dispatchEvent(new CustomEvent('carrito-actualizado', { detail: window.carrito }));
  mostrarToast('🛒 ' + nombre + ' agregado al carro');
};

window.mostrarToast = function (texto) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = texto;
  toast.classList.add('visible');
  clearTimeout(toast.temporizador);
  toast.temporizador = setTimeout(() => toast.classList.remove('visible'), 2200);
};
