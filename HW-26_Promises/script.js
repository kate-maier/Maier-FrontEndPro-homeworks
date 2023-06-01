// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

let postId = +prompt('Введіть цифру від 1 до 100');


function getPost(id = postId) {

  let postPromise = new Promise((resolve, reject) => {

    if (id > 0 && id <= 100 && Number.isFinite(id)) {
      fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(post => {
          resolve(post);
        })
        .catch(
          (error) => {
            console.log(error)
          }
        )
    } else {
      reject(new Error('Введено невірне значення. Номер посту повинен бути цифрою від 1 до 100'));
    }

  })

  postPromise
    .then(
      (post) => {
        alert(`Title: ${post.title}. Body: ${post.body}`);
        getAnswer();
      }
    )
    .catch((error) => {
      alert(error);
    })
}

getPost()


function getAnswer() {
  let answer = confirm('Чи хочете Ви побачити коментарі до посту?');

  if (answer) {
    getPostComent(postId);
  }
}


function getPostComent(id = postId) {

  let postCommentsPromise = new Promise((resolve, reject) => {

    fetch(`${apiUrl}/${id}/comments`)
      .then(response => response.json())
      .then(comments => {
        resolve(comments);
      })
      .catch(
        (error) => {
          console.log(`Error: ${error}`);
        }
      )

  })

  postCommentsPromise
    .then(
      (comments) => {
        comments.forEach(comment => {
          alert(`Name: ${comment.name}. Body: ${comment.body}`);
        });
      }
    )
}
