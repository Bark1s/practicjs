// // ЗАДАЧА 1
// // Створіть карточки товару з масиву використовуючи createElement
// import cars from "./date/cars.js";

// const carList = document.querySelector(".js-goods");

// function addProds({ name, img, price, description }) {
//   const cardProduct = document.createElement("li");
//   const carName = document.createElement("h2");
//   const carImage = document.createElement("img");
//   const carPrice = document.createElement("p");
//   const carDiscrip = document.createElement("p");

//   carName.textContent = name;
//   carImage.src = img;
//   carImage.alt = name;
//   carImage.width = "300";
//   carPrice.textContent = price;
//   carDiscrip.textContent = description;

//   cardProduct.append(carName, carImage, carPrice, carDiscrip);
//   return cardProduct;
// }

// const listMarkup = cars.map(addProds);
// // console.log(listMarkup);
// carList.append(...listMarkup);

// task 2
// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/
// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// //
// const form = document.querySelector(".form")
// const total = document.querySelector(".text-right")
// const priceInput = document.querySelector("#price")
// const amountInput = document.querySelector("#quantity")
// const htmlAmount = document.querySelector(".amount")

// amountInput.addEventListener("input", doChange)

// function doChange(event) {
//   htmlAmount.textContent = event.target.value
// }

// form.addEventListener("submit", doCount)

// function doCount(event) {
//   event.preventDefault()
//   const formContainer = document.querySelector(".container")
//   formContainer.style.backgroundColor = randomRgbColor()
//   const price = priceInput.value
//   const amount = amountInput.value
//   total.textContent = price * amount
//   htmlAmount.textContent = amount

// }
// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>
// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// const instruments = [
//   {
//     id: 1,
//     img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//     name: "Молоток",
//     price: 150,
//   },
//   {
//     id: 2,
//     img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//     name: "Перфоратор",
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//     name: "Рівень",
//     price: 2000,
//   },
// ];

// const list = document.querySelector(".js-list");
// function createList() {
//   const markUp = instruments.map(
//     ({ id, img, name, price }) =>
//       `<li data-id="${id}">
//       <img src="${img}" alt=${name}">
//       <p>${name}</p>
//       <span>${price}</span>
//       <button type="button" class="buy-bttn">Buy</button>
//     </li>`
//   );
//   list.insertAdjacentHTML("afterbegin", markUp);
// }
// createList();

// const buyButton = document.querySelectorAll("button[data-id]");

// list.addEventListener("click", showShopList);

// function showShopList(event) {
//   if (!event.target.classList.contains("buy-bttn")) {
//     return;
//   }
//   const summary = event.target.closest("li");
//   const id = summary.dataset.id;
//   console.log(id);
//   const find = instruments.find((instrument) => instrument.id === Number(id));
//   console.log(find);
// }

// task4
// Задача 4
// Створити простий веб-додаток для управління списком завдань. Додаток повинен дозволяти користувачу додавати нові завдання, відзначати їх як виконані та видаляти завдання.
//    <h1>Список Завдань</h1>
//     <!-- Форма для введення нового завдання -->
//     <form id="taskForm">
//         <input type="text" id="newTask" placeholder="Нове завдання" required>
//         <button type="button" onclick="addTask()">Додати</button>
//     </form>
//     <!-- Список завдань -->
//     <ul id="taskList">
//         <!-- Сюди будуть додаватися завдання -->
//     </ul>
// {/* При введенні нового завдання і натисканні кнопки "Додати", це завдання повинно додаватися до списку завдань на сторінці.Додайте кнопку видалення завдань зі списку.
// Використовуй createElement */}

// const form = document.querySelector("#taskForm");
// const taskList = document.querySelector("#taskList");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const imput = document.getElementById("newTask");
//   const imputValue = imput.value.trim();
//   const listItem = document.createElement("li");
//   listItem.textContent = imputValue;
//   const btnDelete = document.createElement("button");
//   btnDelete.textContent = "Видалити";
//   listItem.append(btnDelete);

//   btnDelete.addEventListener("click", () => {
//     taskList.removeChild(listItem);
//   });

//   taskList.append(listItem);
//   form.reset();
// });
