/* Завдання 1
Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/
let array = [5, 8, 15, 'Hellow', 'Hi', 3, true];
let calcAverageValue = function (arr) {
    let sumOfNumbers = 0;
    let j = 0;
    let averageValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            continue;
        }
        sumOfNumbers += arr[i];
        j++;
    }
    averageValue = sumOfNumbers / j;
    return averageValue;
};
calcAverageValue(array);

/* Завдання 2
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.*/
let doMath = function () {
    x = prompt('Введіть перше число');
    znak = prompt('Введіть знак операції +, -, *, /, %, ^ (ступінь )');
    y = prompt('Введіть друге число');
    x = Number(x);
    y = Number(y);
    let resultOperation;
    switch (znak) {
        case '-':
            resultOperation = x - y;
            break;
        case '+':
            resultOperation = x + y;
            break;
        case '*':
            resultOperation = x * y;
            break;
        case '/':
            resultOperation = x / y;
            break;
        case '%':
            resultOperation = x % y;
            break;
        case '^':
            resultOperation = x ** y;
            break;
    }
    return resultOperation;
}
doMath();



/* Завдання 3
Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.*/
function checkValues(...names) {
    let isValidValue = true;
    for (let i = 0; i < names.length; i++) {
        if (names[i] === null || names[i] === '' || isNaN(+names[i])) {
           isValidValue = false;
           break;
        }
    }
    if (isValidValue === false) {
        alert('Ви не вказали довжину для одного або для декількох масивів')
    };
}
function buildArray () {
    mainArrayLength = prompt('Введіть довжину основного масиву');
    innerArrayLength = prompt('Введіть довжину внутрішніх масивів');
    checkValues(mainArrayLength, innerArrayLength);
    let userArray = [];
    for (let i = 0; i < mainArrayLength; i++) {
        userArray.push([]);
        for (let j = 0; j < innerArrayLength; j++) {
            userArray[i][j] = prompt('Додайте елемент в масив');
        }
    }
    return userArray;
}
buildArray();


/*Завдання 4
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.*/
function getValuesToArray () {
    let userArray = [];
    let arrayItem;
    while (arrayItem !== null) {
        arrayItem = prompt('Введіть символ який треба видалити, або натисніть Скасувати');
        userArray.push(arrayItem);
    }
    return userArray;
}
function deleteLetters() {
    let userString = prompt('Введіть рядок, в якому потрібно видалити символи');
    let userLetters = getValuesToArray();
    let newString = '';
    for (let i = 0; i < userString.length; i++) {
        let hasLetter = false;
        for (let j = 0; j < userLetters.length; j++) {
            if (userString[i] === userLetters[j]) {
                hasLetter = true;
                break;
            } 
        }
        if (hasLetter === false) {
        newString += userString[i];
        }
    }
    console.log(newString);
}
deleteLetters()
