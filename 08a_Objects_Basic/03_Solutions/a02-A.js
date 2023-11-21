/*
Task:
1. Create an object-literal person1 with attributes
first/lastname Hans Müller, gender male (from genderType-Array),
born on November 12, 1973.
2. Add four methods: getFullName returns first- and lastname,
getGender returns the gender of the person, getBirthday returns the birthday
and getAge returns the actual of the person.

See sample output in the caller/instance a02_test.js
*/
//Gender type
const genderType = ["female","male"];//??
//Object literal person
module.exports = {//??
    //first name
    firstName: "Fritz",//??
    //last name
    lastName: "Muster",//??
    gender: genderType[1],//??
    birthday: new Date("1973-11-30"),//??
    //methods
    getFullName(){//??
        return `${this.firstName} ${this.lastName}`//??
    },//??
    getGender(){//??
        return `${this.getFullName()} is ${this.gender}.`//??
    },//??
    getBirthday(){//??
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString//??
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };//??
        return `${this.getFullName()} is born on ` +//??
            `${this.birthday.toLocaleDateString('de-CH',options)}.`//??
    },//??
    getAge(){//??
        let ageDifMs = Date.now() - this.birthday;//??
        let ageDate = new Date(ageDifMs); // miliseconds from epoch//??
        return  `${this.getFullName()} is ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old.`//??
    }//??
}//??

