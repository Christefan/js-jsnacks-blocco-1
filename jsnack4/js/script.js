/*
Chiedi un numero di 4 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
//Utente inserisce valore
let cifre = prompt('Inserire valore a 4 cifre');
let sum= 0;
let rem = 0;

//Ciclo while per calcolare ogi cifra che compongono il numero
while(cifre)
{
    rem = cifre%10;
    console.log(rem);
    sum = sum+rem;
    cifre = Math.floor(cifre/10);
}



//Stampa risultato
console.log(sum);