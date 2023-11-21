/*
Task: Create an object-literal 'person' with the properties
Anna Muster, female, born on March 1, 2002?
In the next step: expand the existing example with a birthday edition
*/

//constant full months
const FullMonths = ["January", "February", "March", "April", "May", "June",//??
    "July", "August", "September", "October", "November", "December"];//??

let person2 = {
    //first name
    firstName: "Anna",//??
    //last name
    lastName: "Muster",//??
    //gender
    gender: "female",//??
    //birthday
    birthday: new Date("2002-03-01"),//??

    /**
     * method get full name
     * @returns {string}
     */
    getFullName(){//??
        return `${this.firstName} ${this.lastName}.`//??
    },//??
    /**
     * method get birthday
     * @returns {string}
     */
    getBirthday(){//??
        let day = this.birthday.getDate();//??
        let month = FullMonths[this.birthday.getMonth()];//??
        let year = this.birthday.getFullYear();//??
        return `Birthday on the ${day}. ${month} ${year}`;//??
    }//??
}
/*
Sample output
weiblich
2002-03-01T00:00:00.000Z
Der Name ist Anna Muster.
Geburtstag am 1. March 2002
 */
console.log(`Gender ${person2.gender}`);//??
console.log(`My name is ${person2.getFullName()}`);//??
console.log(`Birthday ${person2.birthday}`);//??
console.log(`Birthday ${person2.getBirthday()}`);//??
