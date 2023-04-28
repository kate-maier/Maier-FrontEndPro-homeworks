/* Мережа фастфудів пропонує кілька видів гамбургерів:
маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).


Можна додати добавки:
посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

Приклад роботи коду:
// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(“Calories: “ + hamburger.calculate ());

// скільки коштує
console.log("Price: “ + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: “ + hamburger.calculatePrice()); */

class Hamburger {
    money;
    calories;
    toppingMayo;
    toppingSauce;

    static SIZE_SMALL = {
        size: "маленький",
        money: 50,
        calories: 20
    }

    static SIZE_BIG = {
        size: "великий",
        money: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        stuffing: "сир",
        money: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        stuffing: "салат",
        money: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        stuffing: "картопля",
        money: 15,
        calories: 10
    }

    static TOPPING_MAYO = {
        sauce: "майонез",
        money: 20,
        calories: 5
    }

    static TOPPING_SAUCE = {
        sauce: "приправа",
        money: 15,
        calories: 0
    }

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }


    addTopping(topping) {
        if (topping === Hamburger.TOPPING_MAYO) {
            this.toppingMayo = Hamburger.TOPPING_MAYO;
        } else if (topping === Hamburger.TOPPING_SAUCE) {
            this.toppingSauce = Hamburger.TOPPING_SAUCE;
        }
    }

    calcCalories() {
        this.calories = this.size.calories + this.stuffing.calories;
        if (this.toppingMayo) {
            this.calories += this.toppingMayo.calories;
        };

        if (this.toppingSauce) {
            this.calories += this.toppingSauce.calories;
        }
        return this.calories;
    }

    calcPrice() {
        this.money = this.size.money + this.stuffing.money;
        if (this.toppingMayo) {
            this.money += this.toppingMayo.money;
        };

        if (this.toppingSauce) {
            this.money += this.toppingSauce.money;
        }
        return this.money;
    }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories: ' + hamburger.calcCalories());

// скільки коштує
console.log('Price: ' + hamburger.calcPrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log('Price with sauce: ' + hamburger.calcPrice());
