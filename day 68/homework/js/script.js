// რა არის javaScript?

// javaScript არის სკრიპტული ენა რომელიც გამოიყენება ვებგვერდებისთვის რომ ჩვენი ვებგვერდი გავხადოთ უფრო ფუნქციურიდა და მრავალფეროვანი
// მაგ: რილაკზე დაწერისას რაიმეს მოხდენა, ანიმაციები, კალკულაციების შექმნა, ფორმების გაგზავნა, და ნებისმიერი რამ რასაც დავაჭერთ და რაიმე მოქმედება ხდება ეს ჯავასკრიპტის მეშვეობით ხდება

// სკრიპტინ ენები არის პროგრამირების ენების ერთ ერთი ტიპი
// მთავარი სხვაობაა ისაა რომ სკრიპტინგ ენები უფრო ხშირად გამოიყენება არსებულ სისტემების შიგნით ავტომატიზაციისთვის ან ინტერფეისის გასაცოცხლებლად მაგ: ბრაუზერისთვის
//პროგრამირების ენები გამოიყენება ზოგადად გამოიყენება დამოუკიდებელ სისტემების პროგრამების ან აპლიკაციების შესაქმნელად.
// ყველა სკრუპტინგ ენა არის პროგრამირების ენა მაგრამ ყველა პრპგრამირების ენა არარის სკრიპტინგ ენა.

//მონაცემთა ტიპები javaScript - ძირითადი ტიპები

// number - რიცხვები (1,2,4, 5,5 5,2)
// string - ტესტქი ("მერაბი ჯიქიძე")
// boolean - ლოგიკური მნიშვნელობები (treu ან false)
// arr - ელემენტების სია ["merabo", 20, "jiqikidze", "kutaisi"]
// object - ობიექტის სტრუქტურა {firstName: "მერაბი", lastName: "ჯიქიძე"}
// undefind - ცვლადს არ გააჩნია მნიშვნელობა ცალიერ მდგომარეობაში
//null - ცალიერი მნიშვნელობა თუ ჩვენ შეგნებულად დავტოვებთ ცარიელს

// variables - ცვლადები

// let და const არის ახალი ES6-ში ახალი სინტაქსი რომლითაც ვქმნით ცვლადებს
// var - არის ძველი მეთოდი რომელაც ადრე იყენებდნენ და ხშირად შეიძლება ძველ საიტებში შეგვხვდეს მაგრამ ჩვენ დღეს დღეისობით მას არ ვიყენებთ მაგრამ დღეს ის ისევ არსებობს.

// let - არის ცვლადი რომლის შექმნის და მნიშვნელობის მინიჭების შემთხვევაში მას შეგვიძლია შენახული მნიშვნელობის შეცვლა მასზე

// const - ცვლადს ვერ ვუწოდებთ რადგან მასში რამე თუ შევინახეთ მისი მნიშვნელობის შეცვლა არ შეგვეძლება ვქმნით ერთხელ ვინახავთ და ვერ ვცლის სხვადროს

// მაგალითად

let names = 'merabi'; // იქმნება ცვლადი
names = 'luka'; // შემდეგ ვცვლით მის მნიშვნელობას

const names2 = 'lika'; // ვქმნით კონსტანტას
// names2 = tako; // ვცდილობთ მის მნიშვნელობის შეცვლას

// კონკატინაცია და string literals

// კონკადენაცია ეს არის ტექსტების შეერთება + - მეშვეობით

console.log('hello' + 'world'); // ერთი ტექსტი შეერთდა მეორეს პლიუსის მეშვეობით

// string literals ეს ახალი სინტაქსია ES6 - ში არის უკეთესი რომ ცვლადი და სტრინგი ჩავსვათ ერთად backtick-ებით => ``

// console.log(`My name is ${firstName} My last names is ${lastName}`);

// object - ობიექტი, კუთვნილებებიდა, მეთოდი
// ობიექტი არის მონაცემთა სტრუქტურა რომელიც შეიცავს კუთვნილებებს და მეთოდებს

let user = {
  firstName: 'merabo', // კუთვნილებები
  lastName: 'jiqidze',
  age: 20,

  greet: function () {
    // მეთოდი იბიექტში ფუნქცია
    console.log('hello bro');
  },
};

console.log(user.firstName); // ობიექტიდან გამოგვაქვს firstName კუთვნილება
user.greet(); // ობიექტიდან ვიძახებთ ფუნქციას ანუ მეთოდს

// მასივები Arrays მასივი არის ლემენტების სია სადაც ვინახავთ უამრავ ელემენტს ერთად

let cars = ['BMW', 'Mercedes', 'Lamborghini', 'Ferrari']; // შევქმენით მასივი სადაც შევინახეთ მანქანის მოდელები

console.log(cars[0]); // პირბელ ელემენტის გამოტანა
console.log(cars.pop()); // ბოლო ემენეტის წაშლა ავტომატურად არაფერს არ გადავცემთ ბოლოს შლის ავტომატურად
console.log(cars.push('audi')); // დაამატებს სიის ბოლოში ელემენტს
console.log(cars.shift()); // წაშლის ელენენტს სიის თავში ანუ პირველივეს
console.log(cars.unshift('audi')); // წასლის ელემენტს სიის თავში ანუ პირველივე ემენეტს

//ES6 - EcmaScript 2015 ესარის განახლებული ვერსია რომელმაც შემოიტანა სიახლეები

// let / const
// arrow function
// template literals
// classes
// destructuring
// spreaf / rest operators
// promises
// და სხვა მრავალი რამ....

//conditional statements - პირობითი ოპერატორები

// if, else if, else

let score1 = 100;

if (score1 >= 100) {
  // თუ პირობას აკმაყოფილებს შესრულდება if პირობა
  console.log('შენ გაიმარჯვე');
} else if (score1 < 100) {
  // თუ მეორე პირობას არ აკმაყოფილებს შესრულდება ეს if else პირობა
  console.log('შენ წააგე');
} else {
  // თუ შემოთ მოცემულ არცერთ პირობას არ აკმაყოფილებს მაშინ შესრულდება ეს else ბოლო პირობა
  console.log('შენ ვერ მიიღე ქულა');
}

// logical operators - ლოგიკური ოპერატორები

// && - და კავშირი (მკაცრი შემოწმება)
// || - ან კავშირი (არამკაცრი შემოწმება)
// ! - უარყოფა აბრუნებს პირობას რევერსულად

let score2 = 100;
let age = 20;

if (score2 === 100 && age === 20) {
  // და გავშირი && არის მკაცრი შემოწმება ის ამოწმრბს მკაცრად ოროვე პორობას თუ ერთი მაინც არ შესრულდა პირობა არ შესრულდება ან კავშირის შემთხვევაში ან ერთი უნდა შესრულდეს ან მეორე არამკაცრია
  console.log('გაიმარჯვე');
}

// truthy და falsy მნიშვნელობები

// true - ჭეშმარიტი რაც ითვლება სიმართლედ
// false - მცდარი რაც ითვლება მცარად

// ternary operator არის if else შემოკლებულუ ვერიანტი

let age2 = 18;

age >= 18 ? 'შენ სრულწლოვანიხარ' : 'შენ არასრურწლოვანი ხარ';

// 2

let userInput = parseInt(prompt('შეიყვანეთ დაბადების წელი'));

if ((userInput % 4 === 0 && userInput % 100 !== 0) || userInput % 400 === 0) {
  console.log(`The ${userInput} is leap year`);
} else {
  console.log(`The ${userInput} is not a leap year`);
}

// 3

let numberPrompt = parseInt(prompt('შეიყვანეთ რიცხვი'));

if (numberPrompt === 0) {
  console.log('შეყვანილი რიცხვი არის ნული');
} else if (numberPrompt > 0) {
  console.log('რიცხვი არის დადებითი');
} else {
  console.log('რიცხვი არის უარყოფითი');
}

if (Number.isInteger(numberPrompt)) {
  console.log('რიცხვი არის მთელი');
} else {
  console.log('რიცხვი არის ათწილადი');
}

// 4

const number1 = Number(prompt('შეიყვანე პირველი რიცხვი'));
const calculator = prompt('აირჩიე ოპერაცია: +, -, *, /');
const number2 = Number(prompt('შეიყვანე მეორე რიცხვი'));

let result;

switch (calculator) {
  case '+':
    result = number1 + number2;
    break;

  case '-':
    result = number1 - number2;
    break;

  case '*':
    result = number1 * number2;
    break;

  case '/':
    result = number1 / number2;
    break;
}

alert(result);

// 5

const oddOrEven = [2, 4, 7, 9, 8, 11, 6, 12, 15, 17, 22];

let oddCount = 0;
let evenCount = 0;

oddOrEven.forEach((num) => {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});

console.log(`კენტების რაოდენობა არის: ${oddCount}`);
console.log(`ლუწების რაოდენობა არის: ${evenCount}`);

// 6

const userInput2 = parseInt(prompt('sheiyvanet ricxvi'));

let isPrime = true;

if (userInput2 < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < userInput2; i++) {
    if (userInput2 % i === 0) {
      isPrime = false;
    }
  }
}

if (isPrime) {
  console.log(`${userInput2} არის მარტივი რიცხვი`);
} else {
  console.log(`${userInput2} არ არის მარტივი რიცხვი`);
}

// 7

const stringPrompt = prompt('შეიყვანე სიტყვა პალინდრომის შესამოწმებლად');
const reverse = stringPrompt.split('').reverse().join('');

if (stringPrompt === reverse) {
  console.log(`${stringPrompt} არის პალინდრომი`);
} else {
  console.log(`${stringPrompt} არ არის პალინდრომი`);
}

// 8

const isLOggedIn = [false];

isLOggedIn.forEach((num) => console.log(num ? 'Welcome' : 'Please Log In'));

// 9

const currentHours = new Date().getHours();

const greeting = currentHours < 12 ? 'Good Morning' : 'Good Evening';

console.log(greeting);

// 10

const color = prompt('Enter a color (red, yellow, green)').toLocaleLowerCase();

if (color === 'red') {
  console.log('Stop');
} else if (color === 'yellow') {
  console.log('Slow');
} else if (color === 'green') {
  console.log('Go');
} else {
  console.log('Ivnalid color');
}

// 11

const users = [
  { name: 'merabi', isActive: true },
  { name: 'luka', isActive: false },
  { name: 'tako', isActive: true },
  { name: 'lika', isActive: false },
];

let userActive = users.filter((user) => user.isActive === true);

console.log(userActive);

// 12

const fruits = ['apple', 'banana', 'ananas', 'apple', 'orange', 'coconut'];

let countFruit = fruits.filter((item, index) => {
  return fruits.indexOf(item) === index;
});

console.log(countFruit);

// 13

let words1 = ['LU KA', 'merabi ', 'L I K A', 'Gi oRGi'];

const cleanWords = words1.map((word) => {
  return word.toLowerCase().replaceAll(' ', ''); // წაშალე space-ები ყველგან პირველი არგუმენტი თუ რისი წაშლა გვინდა ანუ space და მეორე თუ რითი ჩანაცვლება
});

console.log(cleanWords);

// 14

const items = [
  'apple',
  'coconut',
  'ananas',
  'apple',
  'orange',
  'coconut',
  'ananas',
  'apple',
];

const itemCount = items.reduce((acc, item) => {
  if (acc[item]) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }

  return acc;
}, {});

console.log(itemCount);

// 15

const users2 = [
  { name: 'merabi', age: 20 },
  { name: 'luka', age: 14 },
  { name: 'lika', age: 19 },
  { name: 'data', age: 12 },
];

const hasAdult = users2.some((user) => user.age > 18);

console.log(hasAdult);

// 16

const items2 = [
  { name: 'merabi', city: 'kutaisi' },
  { name: 'luka', city: undefined },
  { name: 'lika', city: 'italy' },
];

const hasUndefindValues = items2.some((obj) => {
  return Object.values(obj).some((value) => value === undefined);
});

console.log(hasUndefindValues);

// 17

const users3 = [
  { name: 'merabi', age: 21 },
  { name: 'giorgi', age: 20 },
  { name: 'lika', age: 19 },
  { name: 'irakli', age: 18 },
  { name: 'luka', age: 14 },
  { name: 'tiko', age: 13 },
];

const ageSort = users3.reduce((acc, user) => {
  const start = Math.floor(user.age / 10) * 10;
  const key = `${start}-${start + 9}`;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(user);

  return acc;
}, {});

console.log(ageSort);

// 18

const person = {
  name: 'Merabi',
  age: 20,
  city: 'Kutaisi',
  isStudent: true,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 19

let person2 = {
  name: 'luka',
  age: 14,
};

person2.city = 'kutaisi';
person2.name = 'merabi';
delete person2.age;

console.log(person2);

// 20

let object1 = {
  name: 'luka',
  city: 'samtredia',
};

let object2 = {
  age: 21,
  hobby: 'football',
};

let mergedObject = {
  ...object1,
  ...object2,
};

console.log(mergedObject);

// 21

let people = [
  { name: 'Merabi', age: 21 },
  { name: 'Luka', age: 14 },
  { name: 'Tako', age: 18 },
];

let sortedObject = people.sort((obj1, obj2) => {
  return obj1.age - obj2.age;
});

console.log(sortedObject);

// 22

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseNumberArr = [];

for (let i = numberArr.length - 1; i >= 0; i--) {
  reverseNumberArr.push(numberArr[i]);
}

console.log(reverseNumberArr);

// 23

let numberArr2 = [10, 4, 6, 9, 21, 55];

let sum = 0;

for (let num of numberArr2) {
  sum += num;
}

console.log(`sum: ${sum}`);

// 24

let myText = 'programing is the best species';

let count1 = 0;

let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let letter of myText) {
  if (vowels.includes(letter)) {
    count1++;
  }
}

console.log(`ხვომნების რაოდენობა არის: ${count1}`);

// 25

let numObject = {
  num1: 100,
  num2: 90,
  num3: 80,
  num: 50,
};

const scores = Object.values(numObject);

const total = scores.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(total);

// 26

const obj = {
  first: 1,
  second: 2,
  third: 3,
};

const values = Object.values(obj); // მასივიდან იღებს რიცხვებს და ინახავს მასივში

const allNumbers = values.every((value) => {
  return typeof value === 'number';
});

console.log(allNumbers);

// 27

let locations = {
  country: 'georgia',
  city: 'kutaisi',
};

let secterCity = 'kutaisi';

if (secterCity === locations.city) {
  console.log(true);
} else {
  console.log(false);
}

// 28

let words2 = [
  'mercedesBenz',
  'bmwMperformance',
  'lamborghini',
  'audi',
  'opel',
  'tesla',
];

let longestWord = '';

for (let word of words2) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(`longest string is ${longestWord}`);

// 29

const numberArr3 = [1, 2, 3, 2, 4, 1, 5];

let uniqueNumbers2 = numberArr3.filter((num, index, array) => {
  return array.indexOf(num) === array.lastIndexOf(num);
});

console.log(uniqueNumbers2);

// 30

const button = document.getElementById('btn');
const p = document.getElementById('p');

let count = 0;

button.addEventListener('click', () => {
  count++;
  p.textContent = `Count: ${count}`;
});

// 31

const button2 = document.getElementById('btn2');
const div = document.getElementById('div');

button2.addEventListener('click', () => {
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = 'black';
  div.style.margin = '10px 0px 0px 0px';
});

// 32

const numberArr4 = [1, 2, 3, 2, 4, 1, 5];

let uniqueNumbers = numberArr4.filter((num, index, arr) => {
  return arr.indexOf(num) === arr.lastIndexOf(num);
});

console.log(uniqueNumbers);

// 33

const capitalize = (arr) => {
  return arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
};

const words = ['merabi', 'luka', 'lika'];

const resultCapitalize = capitalize(words);

console.log(resultCapitalize);

// 34

let countLetter = (str, letter) => {
  let count = 0;

  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }

  return count;
};

console.log(countLetter('banana', 'a'));
console.log(countLetter('hello', 'l'));

// 35

let numberArr5 = [1, 5, 10, 20, 11];

let numberResult = numberArr5.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(numberResult);

// 36

let numberArr6 = [2, 4, 6, 8, 9, 12, 3];

let booleanResult = numberArr6.every((num) => {
  return num % 2 === 0;
});

console.log(booleanResult);

// 37

let numberArr7 = [10, 100, 12, 6, 7, 9];

let biggestNumberIndex = numberArr7.reduce(
  (maxIndex, currentValue, currentIndex, array) => {
    return currentValue > array[maxIndex] ? currentIndex : maxIndex;
  },
  0
);

console.log(biggestNumberIndex);
