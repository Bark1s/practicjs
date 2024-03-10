// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

// const header = document.querySelector(".header");
// const headerHeight = header.clientHeight;
// const navigation = document.querySelector(".nav");

// window.addEventListener("scroll", function () {
//   if (scrollY > headerHeight) {
//     navigation.classList.add("fixed-nav");
//   } else {
//     navigation.classList.remove("fixed-nav");
//   }
// });

// task-2
// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// localStorage.setItem("themes", "dark");
// const checkBox = document.querySelector(".checkbox");

// document.addEventListener("DOMContentLoaded", function () {
//   const whyThem = localStorage.getItem("themes");
//   // console.log(whyThem);
//   document.body.classList.add(whyThem);
//   checkBox.addEventListener("change", function () {
//     localStorage.setItem("themes", this.checked ? "light" : "dark");
//     document.body.classList.toggle("dark", !this.checked);
//     document.body.classList.toggle("light", this.checked);
//   });
// });
