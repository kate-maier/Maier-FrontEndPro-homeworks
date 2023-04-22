/*Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — це властивості. 
Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() 
на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
Масив – це властивість, present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, 
створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.*/

class Student {
    studentAttendance = new Array(25);

    constructor(name, surname, yearOfBirth, grades) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.grades = grades;
    }

    getStudentAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    getAverageGrade() {
        const sum = this.grades.reduce((accum, grade) => accum + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        let index = this.studentAttendance
            .findIndex(item =>
                item === undefined
            );
        if (index !== -1) {
            this.studentAttendance[index] = true;
        }
    }

    absent() {
        let index = this.studentAttendance
            .findIndex(item =>
                item === undefined
            );
        if (index !== -1) {
            this.studentAttendance[index] = false;
        }
    }

    summary() {
        const amountsAttend = this.studentAttendance
            .reduce((acc, value) => {
                if (value === true) {
                    acc++;
                }
                return acc;
            }, 0
            )
        const averageAttend = amountsAttend / this.studentAttendance.length;
        console.log('Середнє відвідування: ' + averageAttend);
        if (averageAttend > 0.9 && this.getAverageGrade() > 90) {
            console.log("Молодець!")
        } else if (averageAttend > 0.9 || this.getAverageGrade() > 90) {
            console.log("Добре, але можна краще")
        } else { console.log("Редиска") };
    }
}

//  Функція для заповнення масиву значеннями true або false (для зручності)
function fillArray(amountTrue, amountFalse, student) {
    for (let i = 1; i <= amountTrue; i++) {
        student.present();
    }
    for (let i = 1; i <= amountFalse; i++) {
        student.absent();
    }
}

const student1 = new Student('Mary', 'Smit', 1995, [85, 80, 90]);
console.log('Вік студента ' + student1.name + ': ' + student1.getStudentAge());
console.log('Середня оцінка: ' + student1.getAverageGrade());
fillArray(15, 10, student1);
student1.summary();

const student2 = new Student('John', 'Smiles', 1990, [90, 80, 70, 75]);
console.log('Вік студента ' + student2.name + ': ' + student2.getStudentAge());
console.log('Середня оцінка: ' + student2.getAverageGrade());
fillArray(23, 2, student2)
student2.summary();

const student3 = new Student('Alice', 'Leach', 1989, [90, 90, 95, 95]);
console.log('Вік студента '+ student3.name + ': ' + student3.getStudentAge());
console.log('Середня оцінка: ' +student3.getAverageGrade());
fillArray(23, 2, student3);
student3.summary();
