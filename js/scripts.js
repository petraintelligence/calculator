let currentTotal = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function updateScreen() {
    const screenText = document.getElementById("screen-text");
    screenText.textContent= currentTotal;
}

function clearScreen() {
    currentTotal = 0;
    firstNumber = 0;
    secondNumber = 0;
    updateScreen();
}



document.getElementById("one").addEventListener("click", function() {
    firstNumber = 1;
    currentTotal = 1;
    updateScreen();
})

document.getElementById("clear").addEventListener("click", () => clearScreen());
