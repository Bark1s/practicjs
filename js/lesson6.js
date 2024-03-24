// Використовуй публічний https://thecatapi.com/. Для початку роботи необхідно зареєструватися й отримати унікальний ключ доступу, щоб прикріплювати його до кожного запиту. Заходимо на головну сторінку та натискаємо нижче кнопку Signup for free, дотримуємося інструкції, ключ буде надіслано на вказану пошту.

// Колекція порід
// Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

// Напиши функцію fetchBreeds(), яка виконує HTTP - запит і повертає проміс із масивом порід - результатом запиту.

// Інформація про кота
// Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
// Ось як буде виглядати URL-запит для отримання повної інформації про собаку за ідентифікатором породи:
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту.

// const KEY_URL =
//   "live_jbUMIwOA8CBPgQMqNqPuD9CMD0Pi3BGGnqTo2QsII8aJ5k88zOYCc00Gcb7BeuIT";
// const URL = "https://api.thecatapi.com/v1";

// const selectCat = document.querySelector(".breed-select");
// const catInfo = document.querySelector(".cat-info");

// function fetchBreeds() {
//   return fetch(`${URL}/breeds?api_key=${KEY_URL}`).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
// fetchBreeds()
//   .then((date) => (selectCat.innerHTML = renderCats(date)))
//   .catch((error) => console.log(error));

// function renderCats(info) {
//   const markup = info.map(
//     ({ id, name }) => `<option value="${id}">${name}</option>`
//   );
//   return markup.join("");
// }

// function fetchCatByBreed(breedId) {
//   return fetch(
//     `${URL}/images/search?api_key=${KEY_URL}&breed_ids=${breedId}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// selectCat.addEventListener("change", getCat);

// function getCat(e) {
//   const id = e.target.value;
//   fetchCatByBreed(id)
//     .then((date) => (catInfo.innerHTML = renderCat(date)))
//     .catch((error) => console.log(error));
// }

// function renderCat(cats) {
//   const { url, breeds } = cats[0];
//   const { temperament, name } = breeds[0];
//   const markupCat = `<h2>${name}</h2>
//   <img src="${url}" alt="${name}" width="300" heigth="250">
//   <p>${temperament}</p>`;
//   return markupCat;
// }

// ++++++++++======================================
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

// const div = document.querySelector("#root")
// const form = document.querySelector("#form")
// const moreBtn = document.querySelector("#more")
// let inputInfo
// let page = 1

// form.addEventListener("submit", doSubmit)
// moreBtn.addEventListener("click", doSubmit)

// function doSubmit(event) {
//     event.preventDefault()
//     inputInfo = inputInfo ?? event.target.elements.name.value.trim()
//     const BASE_URL = "https://api.github.com/search/users"


//     const gotInfo = axios.get(`${BASE_URL}?q=${inputInfo}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&per_page=5&page=${page}`)

//     gotInfo.then(obj => {
//         if (obj.data.items.length > 0) {
//             results(obj.data.items)
//             page++
//         }
      
//     }).catch(err => console.log(err))
// }



// function renderInfo(info) {
//     const murkUp = `<div>
//       <h2>${info.login}</h2>
//       <img width="200" src="${info.avatar_url}" alt="${info.login}" />
//       <a href="${info.html_url}"><span>Git Page</span></a>
//     </div>`
//     div.insertAdjacentHTML("beforeend", murkUp)
// }

// function results(infoFrom) {
//     infoFrom.map((elem) => renderInfo(elem))
// }

// homework tasks (additional)

// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ , 
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())


// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

//   <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
//   </div>
