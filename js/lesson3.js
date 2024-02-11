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
