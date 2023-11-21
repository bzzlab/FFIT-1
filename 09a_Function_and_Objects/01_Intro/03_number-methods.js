/*
Thema: Methoden zu Zahlen-Objekten
*/

let num = 103.941;
/* Anzahl Stellen nach dem Komma begrenzen.
In diesem Beispiel auf 2 Stellen
*/
console.log(num.toFixed(2));

/*
Runden aufgrund der Dezimalstelle
Ist Dezimalstelle >=.5 -> Aufrunden
Ist Dezimalstelle <=.4 -> Abrunden
 */
console.log(Math.round(num));

/*
Abrunden aufgrund der Dezimalstelle
Ist Dezimalstelle <=.9 -> Abrunden
 */
console.log(Math.floor(num));

/*
Aufrunden aufgrund der Dezimalstelle
Ist Dezimalstelle >=.1 -> Aufrunden
 */
console.log(Math.ceil(num));

