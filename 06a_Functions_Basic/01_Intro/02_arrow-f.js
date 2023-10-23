/*
Topic: Arrow function
This is a more compact notation for functions in JavaScript by using
a arrow symbol.
Example 1 - Arrow function without parameters
 */
let greetUser = () => {
    console.log('Welcome user!')
}

//function call
greetUser();

//Arrow-function as one-liner
let greetUserShort = () => console.log('Welcome user too!');

//function call
greetUserShort();

/*
Beispiel 2 - Arrow-Funktion MIT einem Parameter
 */

//Arrow-Funktion als Mehrzeihler (empfohlen)
let square = (num) => {
    return num * num;
}

//Verkürzte Variante
let squareShort = (num) => num * num;



//Aufruf der Arrow-Funktion
let result1 = square(3);
//Ausgabe des Resultats
console.log(`3 hoch 2 gibt: ${result1}`);


//Aufruf der Arrow-Funktion
let param1 = 10;
let result2 = squareLong(param1);
//Ausgabe des Resultats
console.log(`${param1} hoch 2 gibt: ${result2}`);


/*
Beispiel 3 - Arrow-Funktion MIT mehr als einem Parameter
 */

let add = (a,b) => {
    return a + b;
}

//Aufruf von add
let paramA = 20;
let paramB = 10;
//Ausgabe des Resultats
console.log(`${paramA} + ${paramB} = ${add(paramA,paramB)}`);

