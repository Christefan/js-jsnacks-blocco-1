let cifre = prompt('Inserire valore a 4 cifre');
let sum= 0;
let rem = 0;
while(cifre)
{
    rem = cifre%10;
    sum = sum+rem;
    console.log(sum);
    cifre = Math.floor(cifre/10);
}