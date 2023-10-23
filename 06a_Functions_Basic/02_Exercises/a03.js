/*
Task: Mark Tool for linear grade calculation
a) Program a function that determines a grade based
on the achieved points with a linear grade scale. The formula is
     Grade = (points achieved / max points) * 5 + 1
b) Add a text to the grade as follows:
If the grade is >= 4.0, then the grade is 'sufficient',
otherwise 'unsatisfactory'.
c) Implement the tool user friendly, i.e.

λ node a03-A.js
=========================================
Mark tool
=========================================

(C)alculate or (E)xit? c
What are maximum achievable points? 21
How many points has achieved the student? 9
You achieved 9 of 21 points and an insufficient mark 3.14!
(C)alculate or (E)xit? c
What are maximum achievable points? 11
How many points has achieved the student? 18
You achieved 18 of 11 points and a sufficient mark 9.18!
(C)alculate or (E)xit? e
Exit manager ..

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
    `Mark tool\n` +
    '=========================================\n';

//??
//??
//??
    //determine text if sufficient or insuffcient mark
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
            //case C
//??
                //ask for max. points
//??
//??
//??
                    //ask for achieved points by the student
//??
//??
//??
//??
                        //call menu again
//??
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
