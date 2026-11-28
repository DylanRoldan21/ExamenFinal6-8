// ALUMNO 10 - Newsletter con validación, botón "volver arriba" y año
(() => {
  document.getElementById('a10-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('a10-correo');
    const acepto = document.getElementById('a10-acepto');
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim());
    
    if (!valido) { 
      mostrarToast('⚠️ Por favor, ingresa un correo electrónico válido'); 
      return; 
    }
    if (!acepto.checked) { 
      mostrarToast('⚠️ Debes aceptar nuestra política de privacidad para continuar'); 
      return; 
    }
    
    mostrarToast('🎉 ¡Gracias por unirte al club! Revisa tu correo para recibir tu cupón.');
    e.target.reset();
  });

  const arriba = document.getElementById('a10-arriba');
  window.addEventListener('scroll', () => arriba.classList.toggle('visible', window.scrollY > 600));
  arriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.getElementById('a10-anio').textContent = new Date().getFullYear();
})();