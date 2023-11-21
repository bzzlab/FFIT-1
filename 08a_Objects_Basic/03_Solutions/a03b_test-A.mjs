/*
Task: Create an object list as an array of objects with class Employee
and filter by criteria
*/
//Import class Employee with ES6 standard
import Employee from './a03-A.mjs'//??
//empty array
let employeeArray = [];
//create three person objects and push them to employee array
employeeArray.push(
    new Employee("Hans", "Muster", "männlich", "1973-11-30"));//??
employeeArray.push(new Employee("Anna", "Muster", "weiblich", "2002-03-01"));//??
employeeArray.push(new Employee("Greta", "Thunberg", "weiblich", "2003-03-01"));//??

//Filtering the object list for female people
console.log(employeeArray.filter((person) => person.gender === 'weiblich'));//??
//Filter the object list by last name
console.log(employeeArray.filter((person) => person.lastName === 'Muster'));//??


/* Sample output
[
  Employee {
    firstName: 'Anna',
    lastName: 'Muster',
    gender: 'weiblich',
    birthday: '2002-03-01',
    profession: 'No profession set!',
    _salary: 0
  },
  Employee {
    firstName: 'Greta',
    lastName: 'Thunberg',
    gender: 'weiblich',
    birthday: '2003-03-01',
    profession: 'No profession set!',
    _salary: 0
  }
]
[
  Employee {
    firstName: 'Hans',
    lastName: 'Muster',
    gender: 'männlich',
    birthday: '1973-11-30',
    profession: 'No profession set!',
    _salary: 0
  },
  Employee {
    firstName: 'Anna',
    lastName: 'Muster',
    gender: 'weiblich',
    birthday: '2002-03-01',
    profession: 'No profession set!',
    _salary: 0
  }
]
 */
