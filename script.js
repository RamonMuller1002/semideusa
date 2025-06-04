// Data alvo: 13 de abril de 2025 (formato: ano, mês (0-11), dia)
const targetDate = new Date(2025, 3, 14); // mês 3 = abril
function updateCounter() {
    hora = Date.now();
    const now = new Date(hora - (3600000 * 3));
    const diff = now - targetDate;
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor((diff / 1000) % 60);
    
    document.getElementById('counter').innerHTML = `${days} dias, ${hours} horas, ${minutes < 10 ? '0' : ''}${minutes} minutos e ${seconds < 10 ? '0' : ''}${seconds} segundos de namoro!`;
}
updateCounter(); // Chama a função uma vez para inicializar
setInterval(updateCounter, 1000); // Atualiza a cada segundo
