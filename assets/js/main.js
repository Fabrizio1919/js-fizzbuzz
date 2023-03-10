/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//Scrivere in console.log numeri da 1 a 100
const ulElement = document.createElement("ul");
let fizz = "";
let buzz = "";
let fizzbuzz = "";
const liElement = document.createElement("li")

for (let i = 1; i < 101; i++) {

    if (i % 3 == 0) {
        fizz = 'fizz';
        buzz = ""
        fizzbuzz = ""
    } else if (i % 5 == 0) {
        buzz = 'buzz';
        fizz = ""
        fizzbuzz = ""
    } else if (i % 3 == 0 , i % 5 == 0) {
        fizzbuzz = 'fizzbuzz';
        fizz = "";
        buzz = "";
    }
    else if (i % 3 != 0 && i % 5 != 0) {
        fizz = "";
        buzz = "";
        fizzbuzz = "";
    }
    liElement.append(`${i}${fizz}${buzz}${fizzbuzz}`);
}


ulElement.append(liElement)

console.log(ulElement);




