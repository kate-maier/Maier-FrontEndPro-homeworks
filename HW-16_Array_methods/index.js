/*Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти суму та кількість позитивних елементів.
Знайти мінімальний елемент масиву та його порядковий номер.
Знайти максимальний елемент масиву та його порядковий номер.
Визначити кількість негативних елементів.
Знайти кількість непарних позитивних елементів.
Знайти кількість парних позитивних елементів.
Знайти суму парних позитивних елементів.
Знайти суму непарних позитивних елементів.
Знайти добуток позитивних елементів.
Знайти найбільший серед елементів масиву, остальні обнулити.*/

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.
let sumPosNumbers = 0;
let amountPosNumbers = 0;
array.forEach(number => {
    if (number > 0) {
        sumPosNumbers += number;
        amountPosNumbers++;
    }
})
console.log(sumPosNumbers);
console.log(amountPosNumbers);

// Знайти мінімальний елемент масиву та його порядковий номер.
let min = Math.min(...array);
let minSerNumber = array.indexOf(min) + 1;
console.log(min);
console.log(minSerNumber);


// Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max(...array);
let maxSerNumber = array.indexOf(max) + 1;
console.log(max);
console.log(maxSerNumber);


// Визначити кількість негативних елементів.
let amountNegNumbers = array
    .filter(number => number < 0)
    .length;
console.log(amountNegNumbers);

// Знайти кількість непарних позитивних елементів.
let amountOddPosNum = array
    .filter(number => number > 0 && number % 2 !== 0)
    .length;
console.log(amountOddPosNum);

// Знайти кількість парних позитивних елементів.
let amountEvenPosNum = array
    .filter(number => number > 0 && number % 2 === 0)
    .length;
console.log(amountEvenPosNum);

// Знайти суму парних позитивних елементів.  
let sumEvenPosNum = array
    .filter(number => number > 0 && number % 2 === 0)
    .reduce((accum, number) => {
        return accum += number;
    }, 0);
console.log(sumEvenPosNum);


// Знайти суму непарних позитивних елементів.
let sumOddPosNum = array
    .filter(number => number > 0 && number % 2 !== 0)
    .reduce((accum, number) => {
        return accum += number;
    }, 0);
console.log(sumOddPosNum);


// Знайти добуток позитивних елементів. 
let multPosNumbers = array
    .filter(number => number > 0)
    .reduce((accum, number) => {
        return accum *= number;
    }, 1);
console.log(multPosNumbers);


// Знайти найбільший серед елементів масиву, остальні обнулити.
let maxValue = Math.max(...array);
array.map((number, index, array) => {
    if (number !== maxValue) {
        array[index] = 0;
    }
});
console.log(maxValue);
console.log(array);
