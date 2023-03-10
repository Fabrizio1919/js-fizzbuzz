/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//Scrivere in console.log numeri da 1 a 100
const ulElement = document.createElement("ul");
let fizz = 'fizz';
let buzz = 'buzz';
let fizzbuzz = 'fizzbuzz';

for (let i = 1; i < 100; i++) {
    const liElement = document.createElement("li")
    ulElement.append(liElement)

    if (i % 3 == 0 && i % 5 == 0) {
        liElement.innerHTML = `${fizzbuzz}`
        liElement.classList.add('fizzbuzz')
    } else if (i % 3 == 0) {

        liElement.innerHTML = `${fizz}`
        liElement.classList.add('fizz')
    } else if (i % 5 == 0) {
        liElement.innerHTML = `${buzz}`
        liElement.classList.add('buzz')
    }
    else{
        liElement.innerHTML = `${i}`
    }
}
console.log(ulElement);
document.body.prepend(ulElement)




