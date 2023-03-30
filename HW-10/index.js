// Завдання 1
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = '';
for (let i = 20; i < 30; i = i + 0.5) {
    numbers += i + ' ';
}

alert('Числа від 20 до 30 з кроком 0,5:\n' + numbers);


// Завдання 2
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollarRate = 27;
let dollarsCost = [];
for (let i = 10; i <= 100; i += 10) {
    dollarsCost.push(i * dollarRate);
}
alert('Дані з розрахунком вартості 10, 20, 30... 100 доларів по курсу ' + dollarRate + ' :\n' + dollarsCost);


// Завдання 3
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = 510;
let numbersResult = [];
for (let i = 1, j = 0; i < 100; i++) {
    j = i ** 2;
    if (j > N) {
        break;
    }
    numbersResult.push(i);
}
alert('Числа від 1 до 100, квадрат яких не перевищує числа ' + N + ':\n' + numbersResult);


// Завдання 4
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let number = 5;
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0 || number === 1) {
        isPrime = false;
        break;
    }
}
isPrime ? alert(number + ' - це просте число')
    : alert(number + '- це не просте число');


// Завдання 5
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let newNumber = 81;
let canGetNumber = false;
for (let i = 1, j = 0; i < newNumber; i++) {
     j = (3 ** i)
    if (j === newNumber) {
        canGetNumber = true;
        break;
    }
}
canGetNumber ? alert('Так. Ви можете одержати число ' + newNumber + ' шляхом зведення числа 3 у деякий ступінь')
    : alert('Ні. Ви не можете одержати число ' + newNumber + ' шляхом зведення числа 3 у деякий ступінь');

