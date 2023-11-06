/*
    Topic: JavaScript object literals
*/

/*
Example object 'person',
with properties Hans Müller, male, born on the 12th November 1973
 */
let person1 = {
    firstName: "Hans",
    lastName: "Muster",
    gender: "männlich",
    birthday: new Date("1973-11-30"),
    getFullName(){
        return `Ich heisse ${this.firstName} ${this.lastName}.`;
    }
}
//output
console.log(person1.gender);
console.log(person1.birthday);
console.log(person1.getFullName());
