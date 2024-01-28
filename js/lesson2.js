// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Реп» і «Реггі» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл


// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);

// styles.splice(1, 1, "Классика")

// console.log(styles);

// const deletOne = styles.shift();
// console.log(deletOne);
// console.log(styles);

// styles.unshift("Реп", "Реггі");

// console.log(styles);

// ЗАДАЧА 2
// використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const array =  ['Mango', 'Poly', 'Ajax']

// for (let i = 0; i < array.length; i += 1){
//     console.log(`${i +1} ${array[i]}`)
// }


// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [2, 17, 94, 1, 23, 37];

// function findSmallestNumber(numbers) {
//   let smallNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallNumber) {
//       smallNumber = numbers[i];
//     }
//   }
//   return smallNumber;
// }


// ЗАДАЧА 4
// Провірте , чи являється рядок полідромом
// const str = "ротатор"; //true
// const newString = "Hello"; //false

// const str = "ротатор";
// const newString = "Hello";

// const strReverse = newString.split("").reverse().join("");

// console.log(newString === strReverse);


// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27.6, 43, 2.1, 8, 36));// 23.2

// function calculateAverage() {
//     console.log(arguments)
//     let numbersList = Array.from(arguments)
//     console.log(numbersList)
//     let sumNum = 0
//     for (let i = 0; i < numbersList.length; i += 1){
//         sumNum += numbersList[i]
//     }

//     return  (sumNum / numbersList.length).toFixed(1)
// }


// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// function greet(name = "гість") {
//   return `Привіт ${name}`;
// }


// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію


// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = function (a, b) {
//       if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;

// console.log(checkNumbers(20, 50));


// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '

// const capitalize = function (someString) {
//     let minString = someString.split(" ")
//     let finishString = []
//     for (let word1 of minString) {
//         let wordUp = word1[0].toUpperCase()
//         let wordProbDone = word1.slice(1)
//         // console.log(wordProbDone)
//         let wordDone = wordUp + wordProbDone
//         // console.log(wordDone)
// finishString.push(wordDone)
//     }
// return finishString.join(" ")
// }

// console.log(capitalize('the quick brown fox'))

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);


// const addCourse = function (name) {
//   if (courses.includes(name)) {
//     return "У вас уже є такий курс";
//   } else {
//     courses.push(name);
//     return courses;
//   }
// };

// console.log(addCourse("Express")); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'У вас уже є такий курс'

// const removeCourse = function (name) {
//   if (courses.indexOf(name) === -1) {
//     return "Курс з таким іменем не найдено";
//   } else {
//     courses.splice(courses.indexOf(name), 1);
//     return courses;
//   }
// };

// console.log(removeCourse("React"));
// console.log(removeCourse("Vue"));

// const updateCourse = function (oldName, newName) {
//   if (courses.indexOf(oldName) === -1) {
//     return `Курсу не існує`;
//   } else {
//     courses.splice(courses.indexOf(oldName), 1, newName);
//     return courses;
//   }
// };

// console.log(updateCourse("Express", "NestJS"));
// console.log(updateCourse("CSS", "Express"));

//==================OBJECT=====================

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// user.mood = "happy"
// user.hobby = 'skydiving'
// user.premium = false

// let obgKeys = Object.keys(user)

// for (let key of obgKeys) {
//     console.log(`${key} ${user[key]}`)
// }


// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function summary(salaries) {
//   let sum = 0;
//   for (i = 0; i < Object.values(salaries).length; i++) {
//     sum += Object.values(salaries)[i];
//   }
//   return sum;
// }

// console.log(summary(salaries));

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень; 
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//      read() {
//          this.a = prompt("give a number 1")
//          this.b = prompt("number 2")
//   },

//      sum() {
//       return Number(this.a) + Number(this.b)
//   },

//      mult() {
//       return this.a * this.b
//   },
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());