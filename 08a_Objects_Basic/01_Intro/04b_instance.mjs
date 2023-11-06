/*
    Topic: JavaScript classes
    Import with ES6 standard (ECMAScript module)
    https://dev.to/abbeyperini/tldr-commonjs-vs-esm-47dk
*/
//variant 1 - named import
import { Person } from './04a_class.mjs';
//variant 2 - default import
//import Person from './04a_class.mjs';

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
