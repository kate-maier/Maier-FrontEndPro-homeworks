// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let numberOneString = prompt("Please, enter the first number");
let numberTwoString = prompt("Please, enter the second number");
let numberThreeString = prompt("Please, enter the third number");
let numberOne = Number(numberOneString);
let numberTwo = Number(numberTwoString);
let numberThree = Number(numberThreeString);
let averageValue = (numberOne + numberTwo + numberThree)/3;
alert(averageValue);