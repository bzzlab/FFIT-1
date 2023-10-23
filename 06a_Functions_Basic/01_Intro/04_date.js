/*
Thema: Datum Object (Date object)
Built-in Objekt in JavaScript, um Operationen mit Datum-Werten
zu erlauben.
 */

//Datum und Uhrzeit setzen
let date1 = new Date('January 20, 2020 10:14:00');
console.log(date1);

//aktuelles Datum und Uhrzeit ermitteln
let date2 = new Date();
console.log(date2);

//nur das Jahr ausgeben
let year = date2.getFullYear();
console.log(year);

//nur Monat als Zahl (beginnend mit 0=Januar) ausgeben
let month = date2.getMonth();
console.log(month);


let date3 = new Date();
//Jahr setzen
let myYear = date3.setFullYear(1990);
//January setzen
date3.setMonth(0);
//November setzen
date3.setMonth(10);
//Ausgabe
console.log(`Wir schreiben das Jahr ${date3}, es war ein kühler November!`);






















