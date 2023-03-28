// Завдання 1
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let j = 10;
let numbers = [];
while (j < 20) {
    numbers.push(j);
    j++;
}
alert("Числа від 10 до 20 (не включно):\n" + numbers);

// Завдання 2
// Вивести квадрати чисел від 10 до 20.
j = 10;
let k = 0;
let squaresNumbers = [];
while (j < 20) {
    k = j ** 2;
    squaresNumbers.push(k);
    j++;
}
alert("Квадрати чисел від 10 до 20 (не включно):\n" + squaresNumbers);

//Завдання 3
// Вивести таблицю множення на 7.
j = 1;
k = 0;
let tableMult = [];
while (j <= 10) {
    k = "7 * " + j + " = " + (j * 7);
    tableMult.push(k);
    j++;
}
alert("Таблиця множення на 7:\n" + tableMult.join("\n"));

// Задання 4
// Знайти суму всіх цілих чисел від 1 до 15.
j = 1;
let sumNumbers = 0;
while (j < 15) {
    sumNumbers += j;
    j++;
}
alert("Сума цілих чисел від 1 до 15(не включно):\n" + sumNumbers);

// Завдання 5
// Знайти добуток усіх цілих чисел від 15 до 35.
j = 15;
let productNumbers = 1;
while (j < 35) {
    productNumbers *= j;
    j++;
}
alert("Добуток усіх цілих чисел від 15 до 35(не включно):\n" + productNumbers);

// Завдання 6
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
j = 1;
k = 0;
let averageValue = 0;
while (j < 500) {
    k += j;
    averageValue = k / j;
    j++;
}
alert("Середнє арифметичне всіх цілих чисел від 1 до 500(не включно):\n" + averageValue);

// Завдання 7
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEvenNumbers = 0;
for (let i = 30; i < 80; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sumEvenNumbers = sumEvenNumbers + i;
}
alert("Сума лише парних чисел в діапазоні від 30 до 80(не включно):\n" + sumEvenNumbers);

// Завдання 8 
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let numbersDivThree = [];
for (let i = 100; i < 200; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    numbersDivThree.push(i);
}
alert("Всі числа в діапазоні від 100 до 200 кратні 3:\n" + numbersDivThree.join(", "));

// Завдання 9
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let N = 24;
let divisors = [];
for (let i = 0; i <= N; i++) {
    if ((N % i) !== 0) {
        continue;
    }
    divisors.push(i);
}
alert("Дільники натурального числа «" + N + "»:\n" + divisors);

// Завдання 10
// Визначити кількість його парних дільників.
let evenDivisors = [];
for (let i = 0; i <= N; i++) {
    if ((N % i !== 0) || (i % 2 !== 0)) {
        continue;
    }
    evenDivisors.push(i);
}
alert("Кількість парних дільників натурального числа «" + N + "»:\n" + evenDivisors.length);

// Завдання 11
// Знайти суму його парних дільників.
evenDivisors = [];
let sumEvenDivisors = 0;
let l = 0;
for (let i = 0; i <= N; i++) {
    if ((N % i !== 0) || (i % 2 !== 0)) {
        continue;
    }
    evenDivisors.push(i);
    while (l < evenDivisors.length) {
        sumEvenDivisors += evenDivisors[l];
        l++;
    }
}
alert("Сума парних дільників натурального числа «" + N + "»:\n" + sumEvenDivisors);


// Завдання 9, 10, 11. 
// Варіант 2: коли число задається на початку і подальші цикли прораховують значення враховуючі, результати попередніх циклів.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
divisors = [];
for (let i = 0; i <= N; i++) {
    if ((N % i) !== 0) {
        continue;
    }
    divisors.push(i);
}
alert("Дільники натурального числа «" + N + "»:\n" + divisors);
// Визначити кількість його парних дільників.
evenDivisors = [];
for (let i = 0; i <= divisors.length; i++) {
    if (divisors[i] % 2 !== 0) {
        continue;
    }
    evenDivisors.push(divisors[i]);
}
alert("Кількість парних дільників числа «" + N + "»:\n" + evenDivisors.length);
// Знайти суму його парних дільників.
sumEvenDivisors = 0;
for (let i = 0; i < evenDivisors.length; i++) {
    sumEvenDivisors += evenDivisors[i];
}
alert("Сума парних дільників натурального числа «" + N + "»:\n" + sumEvenDivisors);


// Завдання 12
// Надрукувати повну таблицю множення від 1 до 10.
let multTable = [];
for (let i = 1; i <= 10; i++) {
    for (let n = 1; n <= 10; n++) {
        multTable.push(i + "*" + n + "=" + (i * n));
    }
};
alert("Повна таблиця множення:\n" + multTable.join("; "));
