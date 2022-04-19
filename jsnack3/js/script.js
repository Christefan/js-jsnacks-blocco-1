/*

Calcola la somma e la media dei primi 10 numeri.

*/
const Arr = [5,9,15,11,32,99,40,66,48,100];

let cont;
let tot=0;
let media;
let i;
for( i = 0; i < Arr.length; i++){
    console.log(Arr[i]);
    tot = Arr[i] + tot;
    console.log(tot);
}
media= tot/i;
console.log(media);

