let firstNumberString = prompt("Please, enter the first number");
let secondNumberString = prompt("Please, enter the second number");
let firstNumber = Number(firstNumberString);
let secondNumber = Number(secondNumberString);
let addition = firstNumber + "+" + secondNumber + "=" + (firstNumber + secondNumber);
let subtraction = firstNumber + "-" + secondNumber + "=" + (firstNumber - secondNumber);
let multiplication = firstNumber + "*" + secondNumber + "=" + (firstNumber * secondNumber);
let division = firstNumber + "/" + secondNumber + "=" + (firstNumber / secondNumber);
alert(addition + "\n" + subtraction + "\n" + multiplication + "\n" + division);