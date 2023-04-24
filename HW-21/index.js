/*1. Створити сутність "Людина".
Властивості:
імʼя;
вік.
Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.

2. Створити сутність "Автомобіль".
Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, 
якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getPersonInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}
const mary = new Person('Mary', 20);
const john = new Person('John', 17);

class Car {
    owner;
    constructor(brand, model, prodYear, color) {
        this.brand = brand;
        this.model = model;
        this.prodYear = prodYear;
        this.color = color;
    }

    addOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else { console.log('Людині ще нема 18. Вкажіть іншого влаcника.') }
    }

    getCarInfo() {
        if (this.owner) {
            this.owner.getPersonInfo();
        }
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year of production: ${this.prodYear}, Color: ${this.color}`);
    }
}
const car1 = new Car('Ferrari', '250 GTO', 1962, 'red');
car1.addOwner(mary);
car1.getCarInfo();
console.log(car1);

const car2 = new Car('Audi', 'Q5', 2022, 'black');
car2.addOwner(john);
car2.getCarInfo();
console.log(car2);
