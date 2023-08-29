/*
Thema: Vergleichsoperatoren und Boolean (Wahrheitswerte)
 */
// == - equality operator value
// === - equality operator value AND type!
// !== - no equal opeartor
// < - less than operator
// > - greater than opeartor
// <= - less than or equal to operator
// >= - greater than or equal to opeartor

/*
Beispiel 1 - Werte miteinander vergleichen und ausgeben
 */

let a = 5;
let b = 5;
console.log(a == b);

a = 5; b = '5';
console.log(a == b);
console.log(a === b);

a = 5; b = 5;
console.log(a != b);

a = 5; b = '5';
console.log(a != b);
console.log(a !== b);


/*
Beispiel 2 - Datentyp überprüfen mit typeof
 */

//Datentyp mit typeof überprüfen
let city = 'Zürich';
console.log(typeof city == 'string');
console.log(`city ist vom Typ ${typeof city}`);

let zahl1 = 5;
console.log(typeof zahl1 == 'number');

let zahl2 = '5';
console.log(typeof zahl2 == 'string');

let object1 = undefined;
console.log(typeof object1 == "undefined");
console.log(`object1 ist vom Typ ${typeof object1}`);
