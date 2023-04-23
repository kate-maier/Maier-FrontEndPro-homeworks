/*1. Створити клас Людина.

Властивості:
імʼя;
стать.
Методи:
конструктор, який приймає два параметри: імʼя та стать.

2. Створити клас Квартира.

Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

3. Створити клас Будинок.

Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, 
додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.*/


// Клас Людина
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const mary = new Person('Mary', 'female');
const john = new Person('John', 'male');
const alice = new Person('Alice', 'female');
const tom = new Person('Tom', 'male');
console.log(mary);

// Клас Квартира
class Flat {
    flatResidents = [];

    addResident(resident) {
        this.flatResidents.push(resident);
    }
}

const flat1 = new Flat();
flat1.addResident(mary);
flat1.addResident(john);
console.log(flat1);

const flat2 = new Flat();
flat2.addResident(alice);

const flat3 = new Flat();
flat3.addResident(tom);

// Клас Будинок
class House {
    flatsInHouse = [];

    constructor(maxFlatsAmount) {
        this.maxFlatsAmount = maxFlatsAmount;
    }

    addFlat(flat) {
        if (this.flatsInHouse.length < this.maxFlatsAmount) {
            this.flatsInHouse.push(flat);
        } else {
            console.log('Квартира не була додана до будинку. Перевищена максимальна кількість квартир у будинку.')
        }
    }
}

const house1 = new House(2);
house1.addFlat(flat1);
house1.addFlat(flat2);
console.log(house1);

const house2 = new House(1);
house2.addFlat(flat3);
