// ALUMNO 2 - Copiar cupón
(() => {
  document.getElementById('a2-copiar').addEventListener('click', () => {
    const codigo = document.getElementById('a2-codigo').textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codigo)
        .then(() => mostrarToast('✅ Cupón ' + codigo + ' copiado'))
        .catch(() => mostrarToast('Tu cupón es: ' + codigo));
    } else {
      mostrarToast('Tu cupón es: ' + codigo);
    }
  });
})();
