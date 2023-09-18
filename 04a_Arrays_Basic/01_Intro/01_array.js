/*
Topic: Arrays and their built-in methods
Important:
First element starts always with index = 0
Last element is always located at index = array length minus 1
 */

/*
 Example 1 - Arrays with different data types

 more examples:
 https://www.w3schools.com/jsref/jsref_obj_array.asp
 */

//Array with strings
let stringArray = [ 'John', 'Bob', 'Mary'];
//Print all elements
console.log(stringArray);
//Print first element
console.log(stringArray[0]);
//Print array length
console.log(`array length is ${stringArray.length}`);
//Print last element
let lastElement = stringArray.length-1;
console.log(`last element is ${stringArray[lastElement]}`);

//Alternative declaration of arrays
let arr = new Array('red','orange','green');
console.log(arr);


//Array of numbers
let numberArray = [ 0,1,2,3,4 ];
console.log(numberArray);
//Boolean-Array
let boolArray = [ true,false ];

















