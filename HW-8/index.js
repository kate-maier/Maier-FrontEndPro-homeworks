let operation = prompt("Please, enter the name of one of the operations: addition, subtraction, multiplication, division");
let firstNumberString = prompt("Please, enter the first number");
let secondNumberString = prompt("Please, enter the second number");
let firstNumber = Number(firstNumberString);
let secondNumber = Number(secondNumberString);
switch (operation) {
    case "addition":
        alert(firstNumber + "+" + secondNumber + "=" + (firstNumber + secondNumber));
        break;
    case "subtraction":
        alert(firstNumber + "-" + secondNumber + "=" + (firstNumber - secondNumber));
        break;
    case "multiplication":
        alert (firstNumber + "*" + secondNumber + "=" + (firstNumber * secondNumber));
        break;
    case "division":
        alert (firstNumber + "/" + secondNumber + "=" + (firstNumber / secondNumber))
        break;
}
