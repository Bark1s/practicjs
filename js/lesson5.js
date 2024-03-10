// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

const header = document.querySelector(".header");
const headerHeight = header.clientHeight;
const navigation = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (scrollY > headerHeight) {
    navigation.classList.add("fixed-nav");
  } else {
    navigation.classList.remove("fixed-nav");
  }
});
