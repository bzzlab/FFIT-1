/*
 Examples - print array-elements with alternative loops
*/

//Array definieren
let cars = ['Ferrari', 'Pagani', 'BMW', 'Mercedes'];


//Array mit while-Loop ausgeben
let i = 0;
while (i < cars.length){
    console.log(`${i}. car ${cars[i]}`);
    i++;
}


let numbers = [1, 2, 3, 4, 5];
//with forEach and function declaration
numbers.forEach(function(element) {
    console.log(element);
});


//Same forEach with an arrow function
cars.forEach(element =>{
    console.log(`car ${element}`);
})

//More JavaScript loops i.e. https://www.w3schools.com/js/js_loop_while.asp
