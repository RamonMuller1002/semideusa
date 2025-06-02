// Data alvo: 13S de abril de 2025 (formato: ano, mês (0-11), dia)
const targetDate = new Date(2025, 3, 14); // mês 3 = abril
let hora = Date.now();
// Data atual (ajustada para GMT-3)
const now = new Date(hora - (3600000 * 3));

// Calcula a diferença em milissegundos
const diffMs = targetDate - now;

// Converte para dias (arredondando para cima)
const daysLeft = Math.ceil((diffMs / (1000 * 60 * 60 * 24))* -1);


document.getElementById('counter').innerHTML = `${daysLeft} dias de namoro.`;