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