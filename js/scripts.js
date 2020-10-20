let currentTotal = 0;
let operator = '';
let currentNumber = 0;
let previousNumber = 0;

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
    "+": function( a, b) {return a + b},
    "-": function( a, b) {return a - b},
    "*": function( a, b) {return a * b},
    "/": function( a, b) {return a / b}
}

function clearScreen() {
    currentNumberArray = [];
    currentNumber = 0;
    updateScreen();
}

function joinNumbers() {
    currentNumber = currentNumberArray.join("");
    updateScreen();
}

function updateScreen() {
    document.getElementById("screen-text").textContent = currentNumber; 
}

function inputNumbers(button) {
    currentNumberArray.push(numbersDict[button]);
    joinNumbers();
    console.log(currentNumberArray)
    console.log(currentNumber)
}

function inputMathSymbol(button) {
    operator = button;
    previousNumber = currentNumber;
    currentNumber = 0;
    currentNumberArray = [];
    updateScreen();
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

document.getElementById("addition").addEventListener("click", () => inputMathSymbol('+'));
document.getElementById("subtract").addEventListener("click", () => inputMathSymbol('-'));
document.getElementById("multiply").addEventListener("click", () => inputMathSymbol('*'));
document.getElementById("divide").addEventListener("click", () => inputMathSymbol('/'));



document.getElementById("compute").addEventListener("click", function() {
    calculateExpression(); 
});


function calculateExpression() {
    currentNumber = operators[operator](parseFloat(previousNumber), parseFloat(currentNumber));
    updateScreen();
}