const targetNum = document.querySelector('.target');
const largeNum = document.querySelector("#large");
const smallNum = document.querySelector('#small');
const generate = document.querySelector('#generate');
const startTimer = document.querySelector('#start');
const selected = document.querySelectorAll('.num');


//create a function that generates a 3 digit random number between 100 and 999
function randomNumber(min, max) {
    min = Math.ceil(100);
    max = Math.floor(999);
    return Math.floor(Math.random() * (max - min) + min);
}

//timer countdown


//Create arrays for the numbers that can be selected

let largeNumber = [25, 50, 75, 100];
let smallNumber = [1,2,3,4,5,6,7,8,9];
let randomLargeNumber = Math.floor(Math.random() * largeNumber.length);
let randomSmallNumber = Math.floor(Math.random() * smallNumber.length);
let num = [];



//when a user clicks the large button, a random large number is generated
//and put into the first list item, when pressed again, replaces 2nd list item etc.


function selectedLarge () {
    if (largeNumber.length === 0) {
        return "Max";
    }
    // for (let i = 4; i > largeNumber.length; i--)
    // {
    num = largeNumber.push(randomLargeNumber,1);
    console.log(num);
    //  }
    
}



function selectedSmall() {
    return smallNumber[randomSmallNumber];
}
console.log (selectedSmall());

//Need to add additional rules.  Large numbers can only be selected once.
//so if 25 is chosen, it can't be chosen again, but can choose 50, 75 or 100
//maybe use splice() to choose number then remove from array?

//small numbers can be selected multiple times
//Can only choose up to 6 numbers.  Max 4 large as only 4 large numbers available


//add event listener for buttons

generate.addEventListener("click", function () {
    targetNum.innerText = randomNumber();
});

startTimer.addEventListener("click", function() {
    console.log("timer click");
});

largeNum.addEventListener("click", selectedLarge);

smallNum.addEventListener("click", function() {
    console.log("Small number click");  
});