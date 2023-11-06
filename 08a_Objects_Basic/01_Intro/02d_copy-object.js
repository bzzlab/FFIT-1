/*
    Topic difference reference vs. copy
*/
let person1 = require('./02a_object');

//Use Object.create for a copy
let personNew = Object.create(person1);
personNew.firstName = "Fritz";
console.log(personNew.getFullName());
console.log(person1.getFullName());
