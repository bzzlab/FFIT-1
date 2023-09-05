/*
Thema: Verschachtelte if-then-else mit logischen (boolschen) Operatoren
 */
/*
Beispiel 1 - Wetterberater
 */

//Argumente auslesen (parsen)
let args = process.argv.slice(2);
console.log("Argumente: ", args);
let temp = args[0];
console.log("Temperatur: ", temp);

if (temp === undefined){
    console.log(`You need to define the temperature! Try again.`);
} else {
    // Logical And Operator '&&' - True if both sides are true. False otherwise
    // Logical Or Opeartor '||' - True if at least one side is true. False otherwise
    if (10 <= temp && temp <= 20) {
        console.log('Das Wetter ist kühl!');
    }
    else if (20 <= temp && temp <= 30) {
        console.log('Das Wetter ist angenehm warm!');
    } else if (temp <= 0 || temp >= 40) {
        console.log('Bleib zuhause. Es ist super kalt oder sehr heiss!');
    } else {
        console.log('Eine Empfehlung fehlt. Am besten selber programmieren!');
    }

}

