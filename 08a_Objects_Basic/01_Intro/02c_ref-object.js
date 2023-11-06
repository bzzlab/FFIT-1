/*
    Topic difference reference vs. copy
*/

let person1 = require('./02a_object');

//The object is referenced (and not copied)
//What do you expect as output?
let personRef = person1;
personRef.firstName = "Fritz";
console.log(person1.getFullName());
console.log(personRef.getFullName());
