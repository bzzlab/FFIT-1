/*
Task: Create a guess game with a dice 1 to 6.
Sample run:

=========================================
Guess Game v0.1
=========================================

(S)art game or (E)xit? s
What number to you guess (1 to 6)? 6
You guessed right! You: 6 and Computer: 6
(S)art game or (E)xit? s
What number to you guess (1 to 6)? 3
You guessed wrong! You: 3 and Computer: 4
(S)art game or (E)xit? s
What number to you guess (1 to 6)? 4
You guessed wrong! You: 4 and Computer: 3
(S)art game or (E)xit? e
Exit game ..
 */


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

let title = '=========================================\n' +
    `Guess Game v0.1\n` +
    '=========================================\n';
/**
 * draw guess
 * @param guess: my guess
 * @returns {{number: number, guess: boolean}}
 */
//??
    //set min, max
//??
    //compute random number
//??
    //return object
//??
//??
/**
 * check guess
 * @param me: my guess
 * @returns {string}
 */
//??
//??
//??
//??
//??
//??
//??
//??

console.log(title);

function menu() {
    //Calculate or Exit
//??
//??
//??
//??
        //switch
//??
            //case S
//??
                //ask for max. points
//??
//??
//??
                    //draw and check guess
//??
                    // call menu again
//??
//??
//??
            //case E
//??
//??
//??
//??
            //case default
//??
//??
//??
//??
//??
//??
}

//call menu
menu();
