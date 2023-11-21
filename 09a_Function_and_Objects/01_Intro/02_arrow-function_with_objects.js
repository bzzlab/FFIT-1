/*
Topic: Filtering objects (properties, attributes)
*/

let log = console.log;

//person as array of objects
const personen = [{
    name: 'Andrew',
    age: 27
}, {
    name: "Fritz",
    age: 31
}, {
    name: "Anna",
    age: 22
}];

//filter all person with age < 30
let age=30;
log(`filter all person with age < ${age}?`);
let filter1 =
    personen.filter((person) =>
        person.age < 30
);
log(filter1);

log(`find all person with age < ${age}?`);
filter1 =
    personen.find((person) =>
        person.age < 30
);
log(filter1);



age=22;
log(`find all person with age equal ${age} (arrow function)`);
filter1 =
    personen.find((person) =>
        person.age === age
);
console.log(filter1);

log(`find all person with age equal ${age} (function declaration)`);
filter1 =
    personen.find(function(person) {
        return person.age === 22;
    }
);
console.log(filter1);
