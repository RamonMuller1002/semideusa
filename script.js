// Data alvo: 13 de abril de 2025 (formato: ano, mês (0-11), dia)
const targetDate = new Date(2025, 3, 13, 14); // mês 3 = abril
function updateCounter() {
    const hora = Date.now();
    const now = new Date();
    const diff = now - targetDate;
    const totalMinutes = Math.floor(diff / (1000 * 60));
    let days = Math.floor(totalMinutes / (60 * 24));
    let hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    let minutes = totalMinutes % 60;
    let seconds = Math.floor((diff / 1000) % 60);
    
    document.getElementById('counter').innerHTML = `${days} dias, ${hours} horas, ${minutes < 10 ? '0' : ''}${minutes} minutos e ${seconds < 10 ? '0' : ''}${seconds} segundos de namoro!`;
}
updateCounter(); // Chama a função uma vez para inicializar
setInterval(updateCounter, 1000); // Atualiza a cada segundo
