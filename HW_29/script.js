// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

window.addEventListener('load', () => {
    let randomNumber = Math.ceil(Math.random() * 9);

    const img = document.createElement('img');
    img.setAttribute('src', `images/${randomNumber}.jpg`);

    let container = document.querySelector('body');
    container.appendChild(img);
})