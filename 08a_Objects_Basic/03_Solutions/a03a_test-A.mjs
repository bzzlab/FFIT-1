//Import with ES6 standard
import Employee from './a03-A.mjs'//??
let person1 = new Employee("Hans", "Muster", "männlich", "1973-11-30");//??
console.log(`Full name: ${person1.getFullName()}`);//??
console.log(`Gender: ${person1.gender}`);//??
console.log(`Birthday: ${person1.birthday}`);//??
console.log(`Profession: ${person1.profession}`);//??
person1.profession = "Applikationsentwickler";//??
console.log(`Profession: ${person1.profession}`);//??

/*
Sample-Output
Full name: Hans, Muster.
Gender: männlich
Birthday: 1973-11-30
Profession: No profession set!
Profession: Applikationsentwickler
 */
