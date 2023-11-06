/*
    Thema: JavaScript classes
    Import with CommonJS convention (Node.js module)
    https://dev.to/abbeyperini/tldr-commonjs-vs-esm-47dk
*/
let Person = require('./03a_class');
//import Person from './03a_class';
let person1 = new Person("Hans", "Muster");
//Output
console.log(`Full name: ${person1.fullName}`);
person1.firstName = "Johannes";
console.log(`Full name: ${person1.getFullName()}`);

//Use methods
let person2 = new Person("Anna", "Müller");
//Output
console.log(`Full name: ${person2.fullName}`);
person2.lastName = "Muster";
console.log(`Full name: ${person2.getFullName()}`);
