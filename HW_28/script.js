// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

function createTable() {
    let counter = 1;
    const table = document.getElementById("table");

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow(i);

        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell(j);
            cell.innerHTML = counter;
            counter++;
        }
    }
}
