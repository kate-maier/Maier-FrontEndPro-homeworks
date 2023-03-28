// Завдання 1
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let i = 10;
let result = [];
while (i < 20) {
    result.push(i);
    i++;
}
alert("Числа від 10 до 20 (не включно):\n" + result);


// Завдання 2
// Вивести квадрати чисел від 10 до 20.
i = 10;
let n = 0;
result = [];
while (i < 20) {
    let n = i ** 2;
    result.push(n);
    i++;
}
alert("Квадрати чисел від 10 до 20 (не включно):\n" + result);

//Завдання 3
// Вивести таблицю множення на 7.
i = 1;
n = 0;
result = [];
while (i <= 10) {
    n = "7 * " + i + " = " + (i * 7);
    result.push(n);
    i++;
}
alert("Таблиця множення на 7:\n" + result.join("\n"));

// Задання 4
// Знайти суму всіх цілих чисел від 1 до 15.
i = 1;
result = 0;
while (i < 15) {
    result += i;
    i++;
}
alert("Сума цілих чисел від 1 до 15(не включно):\n" + result);

// Завдання 5
// Знайти добуток усіх цілих чисел від 15 до 35.
i = 15;
result = 1;
while (i < 35) {
    result *= i;
    i++;
}
alert("Добуток усіх цілих чисел від 15 до 35(не включно):\n" + result);

// Завдання 6
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
i = 1;
n = 0;
result = 0;
while (i < 500) {
    n += i;
    result = n / i;
    i++;
}
alert("Середнє арифметичне всіх цілих чисел від 1 до 500(не включно):\n" + result);

// Завдання 7
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
i = 30;
result = 0;
for (; i < 80; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    result = result + i;
}
alert("Сума лише парних чисел в діапазоні від 30 до 80(не включно):\n" + result);

// Завдання 8 
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
i = 100;
result = [];
for (; i < 200; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    result.push(i);
}
alert("Всі числа в діапазоні від 100 до 200 кратні 3:\n" + result.join(", "));

// Завдання 9
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
i = 0;
let N = 24;
let divisors = [];
for (; i <= N; i++) {
    if ((N % i) !== 0) {
        continue;
    }
    divisors.push(i);
}
alert("Дільники натурального числа «" + N + "»:\n" + divisors);

// Завдання 10
// Визначити кількість його парних дільників.
N = 24;
let evenDivisors = [];
for (let x = 0; x <= N; x++) {
    if ((N % x !== 0) || (x % 2 !== 0)) {
        continue;
    }
    evenDivisors.push(x);
}
alert("Кількість парних дільників натурального числа «" + N + "»:\n" + evenDivisors.length);

// Завдання 11
// Знайти суму його парних дільників.
N = 24;
n = 0;
evenDivisors = [];
let sumEvenDivisors = 0;
for (let x = 0; x <= N; x++) {
    if ((N % x !== 0) || (x % 2 !== 0)) {
        continue;
    }
    evenDivisors.push(x);
    for (; n < evenDivisors.length; n++) {
        sumEvenDivisors += evenDivisors[n];
}
}
alert("Сума парних дільників натурального числа «" + N + "»:\n" +sumEvenDivisors);


// Завдання 12
// Надрукувати повну таблицю множення від 1 до 10.
i = 1;
n = 1;
let multTable = [];
for(; i <= 10; i++) {
for (n = 1; n <= 10; n++) {
    multTable.push(i + "*" + n +"=" + (i*n));  
}};
alert("Повна таблиця множення:\n" +multTable.join("; "));

// Завдання 9, 10, 11. 
// Варіант 2: коли число задається на початку і подальші цикли прораховують значення враховуючі, результати попередніх циклів.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
i = 0;
N = 24;
divisors = [];
for (; i <= N; i++) {
    if ((N % i) !== 0) {
        continue;
    }
    divisors.push(i);
}
alert("Дільники натурального числа «" + N + "»:\n" + divisors);
// Визначити кількість його парних дільників.
evenDivisors = [];
for (let x = 0; x <= divisors.length; x++) {
    if (divisors[x] % 2 !== 0) {
        continue;
    }
    evenDivisors.push(divisors[x]);
}
alert("Кількість парних дільників числа «" + N + "»:\n" + evenDivisors.length);
// Знайти суму його парних дільників.
sumEvenDivisors = 0;
for(let y = 0; y < evenDivisors.length; y++) {
    sumEvenDivisors += evenDivisors[y];
}
alert("Сума парних дільників натурального числа «" + N + "»:\n" +sumEvenDivisors);