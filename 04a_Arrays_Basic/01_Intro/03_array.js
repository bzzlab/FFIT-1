/*
 Example 3 - Car Manager v0.1
 */
//Blackbox
const readline = require('readline');
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
//Carmanager
let autos = ['Ferrari'];

let title = '=========================================\n' +
    `Car Manager v0.1\n` +
    '=========================================\n';
console.log(title);
console.log(autos)

function menu() {
    let ans = askQuestion("(A)dd a car or (E)xit? ");
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
            case 'E':
                msg = 'Exit manager ..';console.log(msg); return 0;
            default:
                value = 'n/a'; console.log(msg); return 2;
        }
    });
}
//call menu
menu();
