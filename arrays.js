let grades = [4, 5, 3, 5, 2, 4, 5, 3];

const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Ср.балл: ", average.toFixed(2));

const filtered = grades.filter(grade => grade > 3);
const mapped = filtered.map(grade => `Оценка: ${grade}`);
console.log("Оценки выше 3: ", mapped);

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
const sorted = fruits.sort();
console.log("Фрукты по алфавиту: " + sorted.join(", "));

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];

const cheap = products.filter(p => p.price < 10000);
console.log("Товары ниже десяти тысяч: ", cheap);

const names = products.map(p => p.name);
console.log("Название товаров: ", names);

const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("Тотальная стоимость: ", total);

const numbers = [12, 45, 7, 33, 18];
const hasMoreThan40 = numbers.some(n => n > 40);
console.log("Есть ли число больше 40?", hasMoreThan40);

const allMoreThan5 = numbers.every(n => n > 5);
console.log("Все ли числа больше 5?", allMoreThan5);
