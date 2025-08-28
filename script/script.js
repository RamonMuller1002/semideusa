// Torne a função global e chamável via onclick no HTML
function mySpan({ titulo = 'Informações da música', texto = 'Detalhes indisponíveis.', imagem = null, link = null } = {}) {
    // Remove um popup existente (se houver)
    const existente = document.querySelector('.popup-overlay');
    if (existente) existente.remove();

    // Cria overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    // Cria modal
    const modal = document.createElement('div');
    modal.className = 'popup-modal';

    modal.innerHTML = `
    <div class="mySpan">
    <button class="popup-close" aria-label="Fechar">&times;</button>
    <h3 class="popup-title">${titulo}</h3>
    <div class="popup-content">
      ${imagem ? `<img src="${imagem}" alt="" class="popup-image">` : ''}
      <p>${texto}</p>
      ${link ? `<a class="popup-link" href="${link}" target="_blank" rel="noopener noreferrer">Abrir música</a>` : ''}
    </div></div>
  `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Fechar modal
    const closeBtn = modal.querySelector('.popup-close');

    function fechar() {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
        if (e.key === 'Escape') fechar();
    }

    // Clique fora do modal fecha
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) fechar();
    });

    // Botão fechar
    closeBtn.addEventListener('click', fechar);

    // ESC fecha
    document.addEventListener('keydown', onKey);
}