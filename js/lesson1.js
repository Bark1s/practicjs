// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// let username = "Галина";
// let age = 35;
// let subject = "JAVASCRIPT";

// console.log(`ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${username}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${subject}`);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть своє імʼя");
// const email = prompt("Введіть свою пошту");
// const tel = prompt("Введіть свій телефон");

// alert(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОЧТУ І ${tel} ТЕЛЕФОН`);

// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА ТОВАР, ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ВИВЕСТИ ЇХ ЗАГАЛЬНУ ЦІНУ

// let price1 = Number(prompt("Вкажіть ціну на телевізор"))
// let price2 = Number(prompt("Вкажіть ціну на телефон"))
// let price3 = Number(prompt("Вкажіть ціну на лептоп"))

// alert(`Загальна сума ${price1 + price2 + price3}`)

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// let monthNumber = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));

// if (monthNumber === 12) {
//     console.log("Вірно");
// }
// else {
//     console.log("НЕ ЗНАЄТЕ? 12");
// }

// let someVar = monthNumber === 12 ? "Вірно" : "НЕ ЗНАЄТЕ? 12";
// console.log(someVar);

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// let numder = Number(prompt("Введіть число"));

// if (numder % 2 === 0) {
//     alert(`Число парне`)
// } else {
//     alert(`Число не парне`)
// }

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// let monthOfBirth = Number(prompt("МІСЯЦЬ НАРОДЖЕННЯ"));

// if (monthOfBirth === 12 || monthOfBirth === 1 || monthOfBirth === 2) {
//   console.log("Ти народився зимою");
// } else if (monthOfBirth >= 3 && monthOfBirth <= 5) {
//   console.log("Ти народився весною");
// } else if (monthOfBirth >= 6 && monthOfBirth <= 8) {
//   console.log("Ти народився літом");
// } else if (monthOfBirth >= 9 && monthOfBirth <= 11) {
//   console.log("Ти народився восени");
// } else {
//   console.log("Ти ввів невірні данні");
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// let login = "blabla"
// let password = "lala"

// const userlogin = prompt("Введіть ваш логін")
// const userpassword = prompt("Введіть ваш пароль")

// if (userlogin === login && userpassword === password) {
//     console.log("Вітаю")
// }
// else {
//     console.log("Невірні дані")
//  }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const period = prompt("Який період підписки").toUpperCase();

// switch (period) {
//     case "ДЕНЬ":
//         console.log("Ціна 1.99")
//         break;
    
//         case "НЕДІЛЯ":
//         console.log("Ціна 5.99")
//         break;
    
//         case "МІСЯЦЬ":
//         console.log("Ціна 10.99")
//         break;
    
//         case "РІК":
//         console.log("Ціна 100.99")
//         break;
    
//     default:
//         console.log("Невірний період")
// }

// ЗАДАЧА 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// let a = 2
// let b = 100

// for (let i = a; i <= b; i += 10) {
//     console.log(i)
// }

// for (let i = a; i <= b; i++) {
//     if (i % 10 === 0) {
//         console.log(i)
//     }
//     break
// }

// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// let userName = prompt("Введіть своє ім'я");

// if (userName.length > 7) {
//     console.log("Wow, you  have a REALLY long name!");
// }
// else {
//     console.log("Your name isn't very long");
// }