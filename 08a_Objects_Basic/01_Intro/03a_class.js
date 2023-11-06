/*
Class person
*/

module.exports = class Person {
    //fields, attributes, properties
    firstName;
    lastName;
    //protected fields with _field
    //private fields with #field

    constructor(firstName, lastName) {
        //Properties - Eigenschaften/Attribute einer Klasse
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

//export default Person;
