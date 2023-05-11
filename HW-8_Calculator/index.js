// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

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
