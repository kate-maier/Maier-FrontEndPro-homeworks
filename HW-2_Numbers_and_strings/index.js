// В якості ДЗ, необхідно вирішити дві наступні задачі:
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

// TASK 1
let userName = prompt("What is your name?");
let userSurname = prompt("What is your surname?");
let userFavouriteColor = prompt("What is your favourite color?");
let greeting = "Hello " + userName + " " + userSurname + ". My favourite color is also " + userFavouriteColor;
alert(greeting);


// TASK 2

// Variant-1
let number = 12345;
let digits = number.toString().split("").map(Number);
console.log(digits.join(" "));


// Variant-2
let newNumber = 56789;
let digitsResult = [];
let stringDigits = newNumber.toString();
for (let i = 0; i < stringDigits.length; i += 1) {
    digitsResult.push(+stringDigits.charAt(i));
};
console.log(digitsResult.join(" "));
 