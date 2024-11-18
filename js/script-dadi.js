// 2. Dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let playerNumber = 0;
let pcNumber = 0;
let message = '';

while (playerNumber < 1 && pcNumber < 1) {
  const playerNumber = Math.ceil(Math.random() * 6);
  console.log(playerNumber);
  const pcNumber = Math.ceil(Math.random() * 6);
  console.log(pcNumber);

  if (playerNumber > pcNumber) {
    message = 'hai vinto';
  } else if (playerNumber < pcNumber) {
    message = 'hai perso';
  } else {
    message = 'parità';
  }
  break
}
console.log(message);