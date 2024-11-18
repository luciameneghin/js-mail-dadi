// 2. Dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let playerNumber = 0;
let pcNumber = 0;
let endGame = false;
let message;

while (playerNumber < 1 && pcNumber < 1) {
  playerNumber = Math.ceil(Math.random() * 6);
  console.log(playerNumber);
  pcNumber = Math.ceil(Math.random() * 6);
  console.log(pcNumber);

  if (playerNumber > pcNumber) {
    message = 'hai vinto';
    endGame = true;
  } else if (playerNumber < pcNumber) {
    message = 'hai perso';
    endGame = true;
  } else {
    message = 'parità';
    endGame = true;
  }
}
console.log(message);

