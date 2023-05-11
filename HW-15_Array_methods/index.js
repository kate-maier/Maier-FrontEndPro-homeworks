/*Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.*/

let arrLength = prompt('Введіть довжину масиву');
let array = [];
while (array.length < arrLength) {
    array.push(prompt('Введіть елемент масиву'));
}
alert(array);
array.forEach((item) => {
    if (typeof item === 'number') {
        return array.sort((a, b) => a - b);
    } else {
        return array.sort();
    }
}
)
alert(array);
array.splice(1, 3);
alert(array);
