// ALUMNO 10 - Newsletter con validación, botón "volver arriba" y año
(() => {
  // ---------- 1. Newsletter ----------
  document.getElementById('a10-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('a10-correo');
    const acepto = document.getElementById('a10-acepto');
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim());
    if (!valido) { mostrarToast('⚠️ Escribe un correo válido'); return; }
    if (!acepto.checked) { mostrarToast('⚠️ Debes aceptar la política de privacidad'); return; }
    mostrarToast('🎉 ¡Listo! Revisa tu correo: tienes un cupón de bienvenida');
    e.target.reset();
  });

  // ---------- 2. Botón volver arriba (aparece al bajar 600px) ----------
  const arriba = document.getElementById('a10-arriba');
  window.addEventListener('scroll', () => arriba.classList.toggle('visible', window.scrollY > 600));
  arriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---------- 3. Año automático ----------
  document.getElementById('a10-anio').textContent = new Date().getFullYear();
})();
