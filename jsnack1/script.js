/*
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/
const l1 = prompt('Inserire parola 1');
console.log(l1,l1.length);
const l2 = prompt('Inserire parola 2');
console.log(l2,l2.length);

if(l1.length > l2.length){
    console.log('Prima parola e` maggiore di seconda parola =',l1, '>' ,l2);

}else if(l2.length > l1.length){
    console.log('Seconda parola e` maggiore di prima parola =',l2, '>',l1);
}else{
    console.log('Dimensioni uguali')
} 
