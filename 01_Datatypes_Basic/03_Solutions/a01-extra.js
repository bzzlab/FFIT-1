'use strict'
/*
Tasks: Declare variables and constants correctly
Declare and print variables, constants correctly based on the given comments below.
*/
/* -------------------------------------------- */
//Assign to variable 'Stadt' a French town
let Stadt='Paris'
//Assign to constant 'Land' the corresponding Land
const Land = 'France'
//print 'Land' and 'Stadt' to the console
console.log(Stadt)
console.log(Land)
//concatenate 'Land' and 'Stadt' and assign it to variable 'Ort'
let Ort = Land + ', '+ Stadt;
let Ort2 = `${Land}, ${Stadt}`;
//print 'Ort' to the console
console.log(Ort)
console.log(Ort2)
//Reassign a new French town to variable Stadt
Stadt = 'Orleans'
//concatenate 'Land' and 'Stadt' and reassign it to variable 'Ort'
Ort2 = `${Land}, ${Stadt}`;
//print 'Ort' to the console
console.log(Ort2)
//Change the value of Land. Guess what is going to happen.
const Land2 = 'Schweiz'
//What is the workaround in order to have a second country (Land)?
Stadt = 'Bern'
Ort2 = `${Land2}, ${Stadt}`;
//print 'Ort' to the console
console.log(Ort2)
