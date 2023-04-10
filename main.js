// timer inicial em segundos
let timeLeft = 30 * 60;

// Seleciona cronômetro
const timer = document.getElementById("timer");

// Atualiza segundo
setInterval(() => {

  // minutos e segundos restantes
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Adiciona um zero à esquerda dos segundos
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Atualiza cronômetro
  timer.textContent = `${minutes}:${formattedSeconds}`;

  // Diminui o tempo restante em um segundo
  timeLeft--;

  // Encerra o cronômetro
  if (timeLeft < 0) {
    clearInterval();
    timer.textContent = "TEMPO ESGOTADO";
  }
}, 1000);
