//Aufgaben zu Funktionen
//'function expression' -> Funktionsname wird weggelassen
/*
let greetUser = function () {
    console.log('Welcome user!')
}

//Aufruf der Funktion
greetUser();

//'function declaration' -> Funktionsname wird hinzugefügt.
function greetUser2() {
    console.log('Welcome user too!')
}
//Aufruf der Funktion
greetUser2();

//Arrow-Funktion als Mehrzeihler (empfohlen)
let square = (num) => {
    return num * num;
}

//Aufruf der Arrow-Funktion
let result1 = square(3);
//Ausgabe des Resultats
console.log(`3 hoch 2 gibt: ${result1}`);
*/


//Ausgabe der Namen mit einem for-Loop und mit einer 'function expression'
/*
let getStudentFromMe21e = function (){
    let me21e = ['Heidi', 'Johannes', 'Jonas', 'Cedric'];
    for (let i=0;i<me21e.length;i++){
        console.log(`${me21e[i]} ist ein/eine Mediamatiker*in der Klasse ME21e.`);
    }
}
getStudentFromMe21e();
*/



/*
let me21e = ['Heidi', 'Johannes', 'Jonas', 'Cedric'];
let i=0;
while (i<me21e.length){
    console.log(`${me21e[i]} ist ein/eine Mediamatiker*in der Klasse ME21e.`);
    i++;
}
*/

//Geben Sie die Zahlen von 0 bis 100 mit einem Loop und einer Arrow-Funktion auf der Konsole aus.
//Bsp. countUp(100)
let countUp = (max) => {
    for (let i = 0; i <= max; i++) {
        console.log(i);
    }
}
//countUp(100);


//Schreiben Sie eine Funktion welche 2 Parameter miteinander summiert
//Bsp. console.log(add(2,100)) -> 102
let add = (a,b) => {
    return a + b;
}
let x=2000,y=100;
console.log(`Die Summe von ${x} und ${y} ist ${add(x,y)}!`);


/*
let i=100;
while(i>-1){
    console.log(i);
    i--;
}
 */
