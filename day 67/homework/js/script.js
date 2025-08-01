let numbersArr = [40, 30, 21, 30, 28, 50, 35];

let nwNumers = numbersArr.findIndex((num) => num % 7 === 0);

console.log(nwNumers);

// 2

let names = ['merabi', 'tako', 'luka'];

let nameIndex = names.findIndex((nam) => nam.includes('m'));

console.log(nameIndex);

// 3

let numbersArr2 = [1, 5, 7, 10, 20];

let result = numbersArr2.reduce((acc, num) => acc + num, 0);
console.log(result);

// 4

let numbersArr3 = [10, 20, 30, 40, 50];

let bigNumbers = numbersArr3.reduce((num1, num2) =>
  num1 > num2 ? num1 : num2
);

console.log(bigNumbers);

// 5

let stringArr = ['phone', 'computer', 'car', 'printer'];

let stingLength = stringArr.reduce((count, str) => count + str.length, 0);

console.log(stingLength);

// 6

let words = ['warning', 'error', 'info'];

let newWords = words.map((char) => char + '!');

console.log(newWords);

// 7

let numbersArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let stringNum = numbersArr4.map((char) => String(char));

console.log(stringNum);

// 8

let booleanArr = [true, true, false, false, true, true];

let newBoolean = booleanArr.map((anwser) => (anwser === true ? 'Yes' : 'No'));

console.log(newBoolean);

// 9

let mixedArr = [
  'javaScript',
  true,
  [1, 2, 3, 4, 5],
  { firstName: 'merabi' },
  111,
  'hello world',
  false,
  'kutaisi',
];

let StringsArr = mixedArr.filter((item) => {
  return typeof item === 'string';
});

console.log(StringsArr);

// 10

let stringArr2 = ['sky', 'rain', 'phone', 'teddy', 'car', 'cloudy'];

let endY = stringArr2.filter((word) => word[word.length - 1] === 'y');

console.log(endY);

// 11

// some() - მეთოდია რომელიც ამოწმებს ჩვენს მიერ დაწერილ პირობაში არის თუ არა ერთი ელემენტი მაინც თუ არის აბრუნებს ბულიან მნიშვნელობას true ან false

let nameArr = ['merabi', 'tako', 'luka'];

let nameResult = nameArr.some((nam) => {
  return nam.length === 4;
});

console.log(nameResult); // თუ მასივში არის 4 სიმბოლოსგან შემდგარი სტრინგი მინიმუმ ერთი მაინ მაშინ დამიბრუნებს true

// 12

let fruitArr = ['banana', 'apple', 'melon', 'ananas'];

let fruitResult = fruitArr.some((fruit) => fruit[0] === 'a');

console.log(fruitResult);

// 13

let numbers = [10, 20, 15, 50, 100];

let numberResult = numbers.some((num) => num >= 50);

console.log(numberResult);

// 14

let negativeNumbers = [-1, -10, 22, -40, 33];

let positionNumbers = negativeNumbers.some((num) => num > 0);

console.log(positionNumbers);

// 15

// every() - პირობაში არსებული ყველა ელემენტი უნდა აკმაყოდილბდეს პრიობას

let numbers2 = [2, 4, 6, 17, 8, 10]; // შევმქმენი მასივი სადაც შევინახე შიგნით ლუწი რიცხვები და მხოლოდ 1 კენტი

let numberResult2 = numbers2.every((num) => num % 2 === 0); // every - მეთოდი ითხოვს რომ ყველა რიცხვი უნდა გაიყოს ისე რომ ნაშთი 0 იყოს მაგრამ რადგან მასში არის ერთი კენტი დაირქვა პირობა და დააბრუნა false

console.log(numberResult2);

// 16

let fruitArr2 = ['apple', 'ananas', 'melon', 'avocado'];

let fruitResult2 = fruitArr2.every((fruit) => fruit[0] === 'a');

console.log(fruitResult2);

// 17

let negativeNumbers2 = [-10, -100, 5, -20, -33];

let negativeNumbersResult = negativeNumbers2.every((num) => num < 0); // every - მეთოდი ითხოვს მკაცრად რომ მასივში არსებული ყველა ელემენტი უნდა იყოს 0-ზე ნაკლრბი მაგრამ ერთ ერთი არის მასში დადებითი ამიტომ პირობამ დააბრუნა false

console.log(negativeNumbersResult);
