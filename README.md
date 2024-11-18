Mail e Dadi
===
## Consegna
- Mail
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo. 
Non è necessario provvedere alla validazione delle email

- Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

BONUS
Consentire solo l’inserimento di dati validi

## Svolgimento 
- Mail
1. creare un'array mailVerificate, con all'interno un numero X di email
2. prompt con richiesta inserimento mail 
    - IF l'email è all'interno della lista mailVerificate -> stampo messaggio positivo (l'email da lei inserita è valida)
    - ELSE stampo messaggio negativo (l'email da lei inserita NON è valida)
    - o loop do... while(?)

- Dadi 
1. Creo due variabili vuote, una per il giocatore e l'altra per il PC
2. con il ciclo for genero un numero random da 1 a 6. Uno per il giocatore e uno per il pc
3. messaggio di vittoria o perdita in base a chi ha estratto il numero più alto
