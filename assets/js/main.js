/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

// Scrivo il ciclo che creerà i numeri i console e che restituirà le stringhe richieste se si verificano le condizioni

let fizz = "Fizz";
let buzz = "Buzz";
// Creo la variabile per poter riportare gli elementi in pagina
const ulElement = document.querySelector('.lista');
let liItem = document.createElement('li');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 == 0) {

        liItem = document.createElement('li');
        liItem.append(fizz + buzz);
        liItem.classList.add("fizzbuzz");

    } else if (i % 3 === 0) {

        liItem = document.createElement('li');
        liItem.append(fizz);
        liItem.classList.add("fizz");

    } else if (i % 5 === 0) {

        liItem = document.createElement('li');
        liItem.append(buzz);
        liItem.classList.add("buzz");

    } else {

        liItem = document.createElement('li');
        liItem.append(i);

    }


    ulElement.append(liItem);
    liItem.classList.add("col-2", "d-flex");

}





