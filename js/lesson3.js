// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const name = prompt("Ваше імʼя");
//     callback(name);
// }

// function greet(userName) {
//     console.log(`Привіт ${userName}`);
// }

// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, callback) {
//   const productId = { name, price, id: Date.now() };
//   callback(productId);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);

// task 3
// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;

// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     },

//     {
//       name: "Lise",
//       surname: "Meitner",
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: "Sarah E.",
//       surname: "Goode",
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: "Hanna",
//       surname: "Hammarström",
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
//   ];

// const newScien = scientists.filter((scientist) => (scientist.born < 1900) && (scientist.born > 1800)).map((scientist) => `${scientist.name} ${scientist.surname}`)

// console.log(newScien)

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const something = scientists.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0)

// console.log(something / scientists.length)

// 3) відсортувати по алфавіту;

// const sortName = scientists.toSorted((nameA, nameB) => nameA.name.localeCompare(nameB.name));
// console.log(sortName);

// const sort = [...scientists].sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(sort)

// 4)відсортувати по кількості прожитих років;

// const sortLifeOld = scientists.toSorted((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(sortLifeOld)

// / 5)відфільтрувати, хто народився в 15,16,17ст;

// const filteredPeople = scientists.filter(
//   (person) => person.born > 1400 && person.born < 1800
// );
// console.log(filteredPeople);

// 6)знайти рік народження Albert Einstein;

// 6)знайти рік народження Albert Einstein;
// const findName = scientists.find(
//   (name) => name.name === "Albert" && name.surname === "Einstein"
// );
// console.log(findName.born);

// Об'єкт: Масив цілих чисел.
// Умова: Знайти суму всіх елементів масиву. Використати метод reduce для обчислення суми елементів.
// arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce((total, num) => total + num, 0)
// console.log(sum)

// Об'єкт: Масив рядків.
// Умова: Знайти кількість рядків, які мають довжину менше 5 символів. Використати метод filter для відфільтрування рядків за умовою довжини.
// const stringsArray = ["apple", "banana", "kiwi", "grape", "pear"];

// console.log(stringsArray.filter((word) => word.length < 5))

// Об'єкт: Масив об'єктів з властивістю "вік".
// Умова: Знайти середній вік усіх об'єктів.Використати метод map для витягування властивостей "вік", а потім використати reduce для обчислення середнього значення.
// const peopleArray = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 22 },
//   { name: "Eve", age: 35 }
// ];

// const averege = peopleArray.map(person => person.age).reduce((acc, ageA) => acc + ageA, 0) / peopleArray.length;
// console.log(averege);

// Задача 4:
// Об'єкт: Масив чисел.
// Умова: Знайти максимальне число в масиві. Використати метод reduce для порівняння чисел та знаходження максимального.
// const numbersArray = [8, 4, 12, 6, 10];

// const maxNumber = numbersArray.reduce(
//   (max, current) => (current > max ? current : max),
//   numbersArray[0]
// );
// console.log(maxNumber);

// Задача 5:
// Об'єкт: Масив об'єктів з властивістю "площа".
// Умова: Знайти об'єкт з найбільшою площею.
// Використати метод reduce для порівняння площ об'єктів та знаходження об'єкта з найбільшою площею.
// const rectanglesArray = [
//   { width: 5, height: 10, area: 50 },
//   { width: 8, height: 6, area: 48 },
//   { width: 7, height: 5, area: 35 },
//   { width: 10, height: 3, area: 30 }
// ];

// const maxArea = rectanglesArray.reduce((maxAr, currentAr) => (currentAr.area > maxAr ? currentAr.area : maxAr), rectanglesArray[0].area)

// console.log(maxArea)

// Об'єкт: Масив об'єктів з властивістю "рейтинг".
// Умова: Знайти середній рейтинг об'єктів, які мають рейтинг вище за 4. Використати метод filter для відфільтрування об'єктів з рейтингом вище за 4, потім використати map для витягування рейтингу та reduce для обчислення середнього значення.
// const objectsArray = [
//   { name: "Object1", rating: 3 },
//   { name: "Object2", rating: 5 },
//   { name: "Object3", rating: 4 },
//   { name: "Object4", rating: 2 },
//   { name: "Object5", rating: 6 },
// ];

// const ratingFour = objectsArray.filter((ratin) => ratin.rating > 4);
// const ratinArr =
//   ratingFour
//     .map((ratin) => ratin.rating)
//     .reduce((acc, ratin) => acc + ratin, 0) / ratingFour.length;

// console.log(ratinArr);
