let currentTotal = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let inputCounter = 0;
let currentNumber = 0;

let currentNumberArray = [];

let numbersDict = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0
};

let operators = {
    "+": function( a, b) {return a + b}
}

function clearScreen() {
    currentNumberArray = [];
    currentNumber = 0;
    inputCounter = 0;
    document.getElementById("screen-text").textContent = currentNumber;
}

function joinNumbers() {
    currentNumber = currentNumberArray.join("");
    document.getElementById("screen-text").textContent = currentNumber;
}

function inputNumbers(button) {
    currentNumberArray.push(numbersDict[button]);
    joinNumbers();
    console.log(currentNumberArray)
    console.log(currentNumber)
}

document.getElementById("one").addEventListener("click", () => inputNumbers("one"));
document.getElementById("two").addEventListener("click", () => inputNumbers("two"));
document.getElementById("three").addEventListener("click", () => inputNumbers("three"));
document.getElementById("four").addEventListener("click", () => inputNumbers("four"));
document.getElementById("five").addEventListener("click", () => inputNumbers("five"));
document.getElementById("six").addEventListener("click", () => inputNumbers("six"));
document.getElementById("seven").addEventListener("click", () => inputNumbers("seven"));
document.getElementById("eight").addEventListener("click", () => inputNumbers("eight"));
document.getElementById("nine").addEventListener("click", () => inputNumbers("nine"));
document.getElementById("zero").addEventListener("click", () => inputNumbers("zero"));

document.getElementById("clear").addEventListener("click", () => clearScreen());



document.getElementById("addition").addEventListener("click", () => operator = '+');
document.getElementById("compute").addEventListener("click", function() {
    calculateExpression(); 
});


function calculateExpression() {
    currentTotal = operators[operator](firstNumber, secondNumber)
}