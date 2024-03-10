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

// ======task 3-========
// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// const form = document.querySelector("#form");
// form.addEventListener("submit", submitHendler);
// const listItem = document.querySelector(".list-input");

// function submitHendler(event) {
//   event.preventDefault();

//   const input = event.target.elements.question.value;
//   const itemElem = document.createElement("li");
//   itemElem.textContent = input;
//   listItem.appendChild(itemElem);
//   const unParse = JSON.parse(localStorage.getItem("listItems")) || [];
//   unParse.push(input);
//   saveLS(unParse);
//   form.reset();
// }

// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН ЗА ДОПОМОГОЮ КРЕЙТЕЛЕМЕНТ

// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ
// function saveLS(item) {
//   localStorage.setItem("listItems", JSON.stringify(item));
// }

// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
// function listView() {
//   const getInfo = localStorage.getItem("listItems");
//   if (getInfo) {
//     const parseArr = JSON.parse(getInfo);
//     for (const elem of parseArr) {
//       const itemElem = document.createElement("li");
//       itemElem.textContent = elem;
//       listItem.appendChild(itemElem);
//     }
//   }
// }
// listView();

// 5) СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ

// const btn = document.querySelector(".btn-clear");
// btn.addEventListener("click", fooClear);

// function fooClear() {
//   localStorage.removeItem("listItems");
//   listItem.innerHTML = "";
// }

// ЗАДАЧА 1
// Створити сторінку з двома кнопками: "Старт" та "Стоп". При кліці на кнопку "Старт" розпочинається безперервний цикл, який кожну секунду змінює фоновий колір сторінки на випадковий шестнадцятковий колір та вимикає кнопку "Старт" до завершення циклу. Коли натискається кнопка "Стоп", цикл зупиняється, і кнопка "Старт" стає доступною для подальших кліків. Для реалізації використовується HTML для створення сторінки з кнопками та JavaScript код для взаємодії з цими елементами та виконання зазначених функцій.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const start = document.querySelector("button[data-start]");
// const stop = document.querySelector("button[data-stop]");

// let timerID = null;

// start.addEventListener("click", startInterval);

// function startInterval() {
//   timerID = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//     start.disabled = true;
//   }, 1000);
// }

// stop.addEventListener("click", stopInterval);

// function stopInterval() {
//   clearInterval(timerID);
//   start.disabled = false;
// }
