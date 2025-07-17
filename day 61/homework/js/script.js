let cars = ['mercedes', 'bmw', 'audi', 'porche'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// 2

let numbers1 = [10, 20, 30, 40, 50];

let sums = 0;

for (let i = 0; i < numbers1.length; i++) {
  sums += numbers1[i];
}

console.log(sums);

// 3

const fruits = ['ananas', 'watermelon', 'ananas', 'mango', 'ananas'];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
  fruits[i] === 'ananas' ? count++ : 'Not Count';
}

alert(count);

// 4

const numbers2 = [10, 20, 40, 5];

for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i] ** 2);
}

// 5

const names = ['merabi', 'lika', 'nino'];

for (let i = 0; i < names.length; i++) {
  console.log(`hello ${names[i]}`);
}
