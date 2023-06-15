// Є текстове поле на сторінці. 
//Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає

const textField = document.getElementById('textField');

textField.addEventListener('focus', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New block!';
    newDiv.id = 'newDiv';

    const container = document.querySelector('body');
    container.appendChild(newDiv);
}
)

textField.addEventListener('blur', () => {
    const element = document.getElementById('newDiv');
    element.remove();
})