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
