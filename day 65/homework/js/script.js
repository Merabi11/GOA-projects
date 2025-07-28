let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((num) => {
  console.log(num);
});

// 2

let names = ['tako', 'merabi', 'luka', 'lika'];

names.forEach((nam) => {
  console.log(`hello ${nam}`);
});

// 3

let words = ['Georgia', 'america', 'dubai'];

words.forEach((word) => {
  let reversedWord = word.split('').reverse().join('');

  console.log(reversedWord);
});

// 4

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = [];
let even = [];

numbers2.forEach((num2) => {
  if (num2 % 2 === 0) {
    even.push(num2);
  }

  if (num2 % 2 !== 0) {
    odd.push(num2);
  }
});

console.log(`ლუწები ${even} კენტები ${odd}`);

// 5

let cities = ['italy', 'turkey', 'korea', 'china'];

cities.forEach((citi) => {
  console.log(`ქალაქი: ${citi} ასოების რაოდენობა: ${citi.length}`);
});

// 6

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers3.map((num) => {
  console.log(num * 2);
});

// 7

let names2 = ['merabi', 'tako', 'lika', 'luka'];

names2.map((nam) => {
  console.log(nam.toUpperCase());
});

// 8

let fruits = ['watermelon', 'mango', 'ananas'];

fruits.map((fruit) => {
  console.log(`ხილის სახელია (${fruit}) მისი პირველი ასო არის (${fruit[0]})`);
});

// 9

let plusNumbers = [1, 2, 3, 4, 5];

plusNumbers.map((num) => {
  console.log(num + 5);
});

// 10

let carModels = ['BMW', 'Mercedes', 'Lamborghini'];

carModels.map((car, indexs) => {
  console.log(
    `მანქანის მოდელია (${car}) მანქანის ბოლო ასო არის (${car[car.length - 1]})`
  );
});

// 11

// map და forEach შორის ორივე გამოიყენება მასივებს რომ გადავუაროთ მაგრამ map აბრუნებს ახალ მასივს და არ ეხება ძველ მასივს და forEach კი აკეთებს ცვლილებას ძველ მასივში
// მაპი აბრუნებს ახალ მასივს და არ ეხება ძვლელს
// ფორიჩი კი არ აბრუნებს ახალ მასივს ის აკეთებს ძველ მასივში ცვლილებას
