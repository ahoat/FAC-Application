const targetNum = document.querySelector('.target');
const largeNumBtn = document.querySelector("#large");
const smallNumBtn = document.querySelector('#small');
const generate = document.querySelector('#generate');
const startTimerBtn = document.querySelector('#start');
const selected = document.querySelector('.numberList');
const timer = document.querySelector(".timer");

//create a function that generates a 3 digit random number between 100 and 999
function randomNumber(min, max) {
    min = Math.ceil(100);
    max = Math.floor(999);
    return Math.floor(Math.random() * (max - min) + min);
}
 //button to generate random number
generate.addEventListener("click", function () {
    targetNum.innerText = randomNumber();
});

//timer countdown

const countdown = document.querySelector(".seconds");
let seconds = 30;

function updateCountdown () {
    if (seconds > 0) {
    countdown.innerText = `${seconds}` + " Seconds"
    seconds--;
    } else {
    clearInterval(myTimer);
    countdown.innerText = "Time Up";
    startTimerBtn.innerText="Restart Timer";
    // startTime();      
    } 
}

let myTimer;

startTimerBtn.addEventListener("click", function () {
    startTimerBtn.innerText="Reset Timer";
    if (!myTimer) {
        startTime();
    } else {  
        seconds = 30;
    }    
});

function startTime() {  
    myTimer = setInterval(updateCountdown, 1000); 
}

//Create arrays for the numbers that can be selected

let largeNumber = [25, 50, 75, 100];
let smallNumber = [1,2,3,4,5,6,7,8,9];
let randomLargeNumber = Math.floor(Math.random() * largeNumber.length);
let randomSmallNumber = Math.floor(Math.random() * smallNumber.length);



//when a user clicks the large button, a random large number is generated
//and put into the first list item, when pressed again, replaces 2nd list item etc.


function selectedLarge () {
    let large = largeNumber[randomLargeNumber];
   
    let li = document.createElement("li");
    let listNum = document.createTextNode(large);
    li.appendChild(listNum);
    selected.appendChild(li);
}

function selectedSmall() {
    
    let small = (smallNumber[randomSmallNumber]);
    let li = document.createElement("li");
    let listNum = document.createTextNode(small);
    li.appendChild(listNum);
    selected.appendChild(li);
    
}
console.log(selectedSmall());
console.log(selectedLarge());

//Need to add additional rules.  Large numbers can only be selected once.
//so if 25 is chosen, it can't be chosen again, but can choose 50, 75 or 100
//maybe use splice() to choose number then remove from array?

//small numbers can be selected multiple times
//Can only choose up to 6 numbers.  Max 4 large as only 4 large numbers available


//add event listener for buttons

largeNumBtn.addEventListener("click", selectedLarge);
 
smallNumBtn.addEventListener("click", selectedSmall);