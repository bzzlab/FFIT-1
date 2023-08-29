/*
Thema: if-then-else ("wenn-dann-sonst", conditional statements)
    und switch-case
 */
/*
Beispiel 1a - Traffic Light
 */

//Input
let color = 'orange';
console.log(`Traffic light is ${color}`);
//Verarbeitung
if (color === 'red'){
    console.log(`DON'T WALK`);
}
else if (color === 'orange'){
    console.log(`ATTENTION`);
}
else if (color === 'green'){
    console.log(`WALK`);
}
else {
    console.log(`OUT OF ORDER`);
}

/*
Beispiel 1b - Traffic Light with switch case
 */

//Input
color = 'red';
console.log(`Traffic light is ${color}`);
//Verarbeitung
switch (color){
    case 'red':
        console.log(`DON'T WALK`);
        break;
    case 'orange':
        console.log(`ATTENTION`);
        break;
    case 'green':
        console.log(`WALK`);
        break;
    default:
        console.log(`OUT OF ORDER`);
}


/*
Beispiel 2 - Ist der Benutzeraccount gesperrt?
 */

//Vorbedingungen
let isAccountLocked = false;
let userRole = 'user';

//unabhängige Überprüfungen und Steuerung
if (isAccountLocked) {
    console.log('========\nYour account is locked! Wait 5 minutes.\n========\n');
}
if (userRole === 'admin') {
    console.log('Welcome Admin');
}
if (userRole === 'user') {
    console.log('Welcome User');
}

//abhängige Überprüfungen und deshalb effizienter
if (isAccountLocked) {
    console.log('========\nYour account is locked! Wait 5 minutes.\n========\n');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome User!');
}


/*
Beispiel 3 - Ist es kalt oder warm?
 */

//Input
let temp = 4;

//Überprüfung + Steuerung
if (temp <= 4) {
    console.log('It is freezing outside');
} else if (temp >= 40) {
    console.log('It is hot outside');
} else {
    console.log('Go for it. It is pretty nice out');
}


