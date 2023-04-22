// // TASK 1
// let userName = prompt("What is your name?");
// let userSurname = prompt("What is your surname?");
// let userFavouriteColor = prompt("What is your favourite color?");
// let greeting = "Hello " + userName + " " + userSurname + ". My favourite color is also " + userFavouriteColor;
// alert(greeting);


// // TASK 2

// // Variant-1
// let number = 12345;
// let digits = number.toString().split("").map(Number);
// console.log(digits.join(" "));


// // Variant-2
// let newNumber = 56789;
// let digitsResult = [];
// let stringDigits = newNumber.toString();
// for (let i = 0; i < stringDigits.length; i += 1) {
//     digitsResult.push(+stringDigits.charAt(i));
// };
// console.log(digitsResult.join(" "));
 
function deleteLetters( string, array) {
    array = [];
    let item = "";
    while (item !== null) {
    item = prompt("Введіть символ який треба видалити, або нажміть Скасувати");
    if (item === null) {
        continue;
    }
    array.push(item);
    }
    string = prompt("введіть строку");
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (string.charAt(i) === array[j]) {
                continue;
            }
            newString += string.charAt(i);
        }}
        console.log(newString);
    }
    deleteLetters(); 