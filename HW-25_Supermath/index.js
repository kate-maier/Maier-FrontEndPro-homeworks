/* Створити клас SuperMath.

Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
Якщо хоче, зробити математичну дію znak (яка описана в прототипі), 
інакше - запитати введення нових даних через метод input() класу SuperMath.

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує */

class SuperMath {
    static obj = { x: 12, y: 3, znak: '/' };
    
    result;
    x;
    y;
    znak;

    calcOperation() {
        switch (this.znak) {
            case '+':
                this.result = this.x + this.y;
                break;
            case '-':
                this.result = this.x - this.y;
                break;
            case '/':
                this.result = this.x / this.y;
                break;
            case '*':
                this.result = this.x * this.y;
                break;
            case '%':
                this.result = this.x % this.y;
                break;
        }
    }

    check(obj) {
        let answer = confirm(`Чи хочете Ви зробити операцію ${obj.znak} зі значеннями ${obj.x} та ${obj.y}?`);
        if (answer === true) {
            this.x = obj.x;
            this.y = obj.y;
            this.znak = obj.znak;
            this.calcOperation();
            alert(this.result);
        } else { this.input() }
    };

    getValue() {
        let value;
        value = prompt('Введіть знак операціїї: можливі варіанти znak +, -, /, *, %');
        while (value !== '+'
            && value !== '-'
            && value !== '/'
            && value !== '*'
            && value !== '%') {
            alert('Ви ввели не коректне значення');
            value = prompt('Введіть знак операціїї: можливі варіанти znak +, -, /, *, %');
        };
        return value;
    };

    input() {
        this.znak = this.getValue();
        this.x = +prompt('Введіть першу цифру для розрахунку операції');
        this.y = +prompt('Введіть другу цифру для розрахунку операції');

        this.calcOperation();

        alert(this.result);
    }
}

const p = new SuperMath();
let obj = SuperMath.obj;
p.check(obj);