/*
 Examples - print array-elements with alternative loops
*/
//https://www.npmjs.com/package/chalk
import chalk from 'chalk';
const log = console.log;

let cars = ['Ferrari', 'Pagani', 'BMW', 'Mercedes'];
//print elements with while-Loop
let i = 0;
while (i < cars.length){
    log(chalk.blue(`${i}. car ${cars[i]}`));
    i++;
}


let numbers = [1, 2, 3, 4, 5];
//with forEach and function declaration
numbers.forEach(function(element,index) {
    log(`Index ${chalk.yellow(index)}: value ${chalk.red(element)}`);
});


//Same forEach with an arrow function
cars.forEach((element, index) =>{
    log(`Index ${chalk.hex('#DEADED')(index)}: value ${chalk.green(element)}`);
})

//More JavaScript loops i.e. https://www.w3schools.com/js/js_loop_while.asp
