/*
Task - Extend the car manager by removing a car based on the car model.
Test:
    node a03.js
    [ 'Ferrari' ]
    (A)dd or (R)emove a car or (E)xit? a
    What's the car model? Lamborgini
    [ 'Ferrari', 'Lamborgini' ]
    (A)dd or (R)emove a car or (E)xit? r
    What car model should be removed? Ferrari
    [ 'Lamborgini' ]
    (A)dd or (R)emove a car or (E)xit? e
    Exit manager ..
 */
const readline = require('readline');
let autos = ['Ferrari'];

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

let title = '=========================================\n' +
    `Car Manager\n` +
    '=========================================\n';
console.log(title);
console.log(autos)

function menu() {
    let ans = askQuestion("(A)dd or (R)emove a car or (E)xit? ");
    ans.then(data => {
        let msg = 'Unknown operation!';
        let value = data.toUpperCase();
        switch (value) {
            case 'A':
                msg = 'Add car ..';
                ans = askQuestion("What's the car model? ");
                ans.then(data => {
                    if (data.toString().length > 2) {
                        autos.push(data);
                    }
                    console.log(autos);
                    menu();
                });
                break;
            //remove case
//??
//??
//??
//??
//??
                        //Remove an element of a certain value with filter
                        //see i.e. https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/
//??
//??
//??
//??
//??
//??
//??
//??
            case 'E':
                msg = 'Exit manager ..';console.log(msg); return 0;
            default:
                value = 'n/a'; console.log(msg); return 2;
        }
    });
}

menu();















