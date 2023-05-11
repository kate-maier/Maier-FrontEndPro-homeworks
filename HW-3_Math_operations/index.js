// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
// //Користувач ввів 2 і 2:

// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1


let firstNumberString = prompt("Please, enter the first number");
let secondNumberString = prompt("Please, enter the second number");
let firstNumber = Number(firstNumberString);
let secondNumber = Number(secondNumberString);
let addition = firstNumber + "+" + secondNumber + "=" + (firstNumber + secondNumber);
let subtraction = firstNumber + "-" + secondNumber + "=" + (firstNumber - secondNumber);
let multiplication = firstNumber + "*" + secondNumber + "=" + (firstNumber * secondNumber);
let division = firstNumber + "/" + secondNumber + "=" + (firstNumber / secondNumber);
alert(addition + "\n" + subtraction + "\n" + multiplication + "\n" + division);