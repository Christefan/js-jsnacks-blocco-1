/*
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
*/
// Array vuoto
const Arr = [];

// Variabili da utilizzare nel ciclo for
let valore;
let c=0;
for(let i=0 ; i < 6 ; i++){ // Chiedi per 6 volte all'utente di inserire un numero
    valore= prompt('Inserire valore',i+1); 
    console.log(valore,i+1);
    if(valore%2 === 1){ //Se è dispari inseriscilo nell'array
        Arr[c]=valore;
        console.log('Array',Arr[c]);
        c++;
        
    }
}