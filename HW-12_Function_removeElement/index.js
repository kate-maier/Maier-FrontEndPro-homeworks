/*Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
Результат: [1, 2, 3, 4, 6, 7]*/

const array = [1, 2, 3, 4, 5, 6, 7];
let removeElement = function (array, item) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        if (array[0] === item) {
            array.shift();
            continue;
        }
        array.push(array[0]);
        array.shift();
    }
    return array;
}
removeElement(array, 5);
console.log(array);
