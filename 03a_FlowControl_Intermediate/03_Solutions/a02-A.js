/*
Task: Compute discounted price
A. Using if-then-else, determine discounts on a given price correctly based on comments below.
B. Check with different values for variable 'price and 'age' that discounts
are computed correctly.

Sample output
$ node a01-A.js
You need to define the price and the age! Try again.

$ node a01-A.js 50 5
With 5: Free entrance!

$ node a01-A.js 50 7
With 7: You will get a 50.00% discount!Pay CHF 25.00

$ node a01-A.js 50 15
With age 15: You will get a 50.00% discount! Pay CHF 25.00.

$ node a01-A.js 50 21
With age 21: NO discount! Pay CHF 50.00.

$ node a01-A.js 50 21 true
With age 21: You will get a 33.33% discount! Pay CHF 16.67.

$ node a01-A.js 50 65
With age 65: You will get a 33.33% discount! Pay CHF 16.67.
 */
'use strict';
//Argumente auslesen (parsen)
let args = process.argv.slice(2);//??
let price = args[0];//??
let age = args[1];//??
let isStudent = args[2];//??

//message variable
let message;
//if age and price is undefined ...
if ((age === undefined) || (price === undefined)){//??
    //show message
    message = `You need to define the price and the age! Try again.`;//??
//else
} else {//??
    let discount;
    // If 6 under print message free entrance
    if (age < 6) {//??
        //show message
        message = `With ${age}: Free entrance!`;//??
    }//??
    //else if age between 6 and 16 then set discount to 50%
    else if ((6 <= age) && (age < 16)) {//??
        //set discount
        discount = 1/2;//??
        //show message
        message = //??
            `With age ${age}: You will get a ${(discount * 100).toFixed(2)}% discount!`+//??
            ` Pay CHF ${(price*discount).toFixed(2)}.`;//??
    }//??
    //else if 65 or older or student then set discount to 33%
    else if (age >= 65 || isStudent) {//??
        //set discount
        discount = 1/3;//??
        //show message
        message =//??
            `With age ${age}: You will get a ${(discount * 100).toFixed(2)}% discount!`+//??
            ` Pay CHF ${(price*discount).toFixed(2)}.`;//??
    //else
    } else {//??
        //else no discount
        discount = 1;//??
        //show message
        message= `With age ${age}: NO discount! Pay CHF ${(price*discount).toFixed(2)}.`;//??
    }//??
}//??
//Output what the customer has to pay
console.log(message);//??




