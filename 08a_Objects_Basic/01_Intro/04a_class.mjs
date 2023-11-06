/*
Class person
*/

class Person {
    //fields, attributes, properties
    firstName;
    lastName;
    //protected fields with _field
    //private fields with #field

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /* method alias function/procedure of class */
    getFullName(){
        return `${this.firstName}, ${this.lastName}.`
    }

    /* Getter - without parameter */
    get fullName(){
        return `${this.firstName}, ${this.lastName}.`
    }

    /* Setter - without return */
    set firstName(firstName) {
        this.firstName = firstName;
    }
    set lastName(lastName) {
        this.lastName = lastName;
    }
}

//variant 1 - named export
export { Person } ;
//variant 2 - default export
//export default Person;
