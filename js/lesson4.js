// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement
import cars from "./date/cars.js";

const carList = document.querySelector(".js-goods");

function addProds({ name, img, price, description }) {
  const cardProduct = document.createElement("li");
  const carName = document.createElement("h2");
  const carImage = document.createElement("img");
  const carPrice = document.createElement("p");
  const carDiscrip = document.createElement("p");

  carName.textContent = name;
  carImage.src = img;
  carImage.alt = name;
  carImage.width = "300";
  carPrice.textContent = price;
  carDiscrip.textContent = description;

  cardProduct.append(carName, carImage, carPrice, carDiscrip);
  return cardProduct;
}

const listMarkup = cars.map(addProds);
// console.log(listMarkup);
carList.append(...listMarkup);
