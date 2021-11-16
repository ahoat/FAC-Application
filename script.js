const targetNum = document.querySelectorAll(".target");
const buttons = document.querySelectorAll("btn");


//create a function that generates a 3 digit random number between 100 and 999
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)+min);
}

console.log(randomNumber(100, 999));
//Create arrays for the numbers that can be selected

let largeNumber = [25, 50, 75, 100];
let smallNumber = [1,2,3,4,5,6,7,8,9];
let randomLargeNumber = Math.floor(Math.random() * largeNumber.length);
let randomSmallNumber = Math.floor(Math.random() * smallNumber.length);
//Need to add additional rules.  Large numbers can only be selected once.
//so if 25 is chosen, it can't be chosen again, but can choose 50, 75 or 100
//maybe use pop() to choose number then remove from array?
//small numbers can be selected multiple times
//Can only choose up to 6 numbers.  Max 4 large as only 4 large numbers available


//add event listener when clicked to generate random number in the output p tag