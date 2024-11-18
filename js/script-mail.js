// 1. Mail

const validMail = ['nathan.smith@example.com', 'ed.jones@example.com', 'fabio.rossi@example.com', 'phil.brown@example.com', 'carlo.bianchi@example.com'];
const addMail = prompt('Inserisci qui la tua mail');
let checkedMail = false;
let message = 'la tua mail NON è valida';

for (let i = 0; i < validMail.length; i++) {
  if (validMail[i] === addMail) {
    checkedMail = true;
    message = 'la tua mail è valida';
    // alert('La tua mail è valida');
  }
  // else {
  //   message = 'la tua mail NON è valida';
  // }
}
console.log(message);

// for (let i = 0; i < validMail.length; i++) {
//   if (addMail.includes(validMail)) {
//     alert('La tua mail è valida');
//   } else {
//     alert('La tua mail NON è valida');
//   }
// }


