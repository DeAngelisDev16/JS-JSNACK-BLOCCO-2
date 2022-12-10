/* / Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array. */

/* let array=[];
let question;

for(let i = 0; i < 6; i++){
    question = parseInt(prompt('Inserisci un numero')), 10;
    if(question % 2 === 1){
        array.push(question);
    }
    
}

console.log(array); */

//==================================================================================================================

/* // Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */
/* const inserisciNumero = parseInt(prompt('Inserisci un numero'));
if(inserisciNumero % 2 === 0){
    console.log(inserisciNumero);
}else{
    console.log(inserisciNumero + 1);


} */

//==========================================================================================================================
/* // Calcola la somma dei primi 10 numeri di un array.

// Calcola la somma e la media dei primi 10 numeri di un array.

// Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array. */

/* const array = [5,7,34,44,75,99,6,78,87];

let somma = 0;

for (i=0; i < array.length; i++){
    somma+= array[i];
    
}

console.log(somma);

//Calcolo media:
let media = somma / (array.length -1);
console.log(media);


//Calcolo valore massimo:
let valoreMassimo = 0;

for(let i=0; i < array.length; i++){
    if(valoreMassimo < array[i]){
        valoreMassimo = array[i];
    }else{
        console.log(valoreMassimo);
     

    }
        
} */

//========================================================================================================================

// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

let question = parseInt(prompt('Inserisci un numero compreso tra 1 e 10'));

while(question < 1 || question > 10){
   question = parseInt(prompt('Inserisci un numero corretto'));


}
