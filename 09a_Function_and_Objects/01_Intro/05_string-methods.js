/*
Thema: Methoden zu String-Objekten
*/

let name = '  Andrew Mead ';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Trim (Leerzeichen löschen)
console.log(name.trim());

//Argumente auslesen (parsen)
let args = process.argv.slice(2);
let password = args[0];

/*
Includes method: Überprüft ob die Zeichenkette in der Variable
enthalten ist.
*/
let result = "====\nPassword incorrect.\n====";
if (password.includes('hello')){
    result = "====\nSuccessful login\n====";
}
console.log(result);
