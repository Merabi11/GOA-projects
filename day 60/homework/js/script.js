let fruits = ['watermelon', 'banana'];
fruits.push('mango', 'ananas', 'orange'); //push მეთოდს არამარტო ერთი არამედ რამდენიმე ელემენტის ჩამატება შეუძლია მასივში.

console.log(fruits);

// 2

// let films = ['spiderman', 'batman', 'ironman', 'superman'];

// let removedElement = films.splice(0, 1);

// removedElement.pop();

// console.log(films);

// 3

let numbers = [1, 2, 3, 4, 5];
let deleted = numbers.pop(); // pop შლის ავტომატურად სიაში მყოფ ბოლო ელემენტს მას არანაირი არგუმენტი არ გადაეცემა ის აბრუნებს წაშლილ ელემენტს

console.log(numbers);
console.log(deleted);

//

let numbers2 = [1, 2, 3, 4];
let deleted2 = numbers2.push(5); // push ამატებს ავტომატურად სიის ბოლოში ელემენტს მას შეგვიძლია გადავცეთ არგუმენტი თუ რაუნდა ჩაამადოს და ასევე შეგვიძლია რამდენიმე რამ დავამატოდ ერთად

console.log(numbers2);
console.log(deleted2);

//

let numbers3 = [2, 3, 4, 5];
let deleted3 = numbers3.unshift(1); // unshift ამატევს სიის დასაწყისში ელემენტს შეგვიძლია რამდნიმე ელემენტი დავამატოთ გადაეცემა არგუმენტი

console.log(numbers3);
console.log(deleted3);

//

let numbers4 = [0, 1, 2, 3, 4, 5];
let deleted4 = numbers4.shift(); // shift სიის დასაწყისში შლის ელემენტს ავტომატურად არშეგვიძლია მას გადავცეთ არგუმენტი ის ავტომატურად წაშლის სიის თავში ელემენტს

console.log(numbers4);
console.log(deleted4);

//

let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let deleted5 = numbers5.slice(0, 5); // slice აკეთებს მასივიდან ელემენტების ამოჭრას ანუ მასივიდან ელემენტების ამოღებას მას გადაეცემა არგუმენტი მაგ: start, end საიდან სადამდე ამოიღოს

console.log(numbers5);
console.log(deleted5);

//

let numbers6 = [1, 5, 3, 4];
let deleted6 = numbers6.splice(1, 1, 2); // splice გამოვიყენეთ როდესაც გვინდა რამდნიმე ელემენტის წასაშლელად ან რაიმე ელემენტის ჩანაცვლება ახლით
//splice(start, deleteCount, element)

console.log(numbers6);
console.log(deleted6);

//

let numbers7 = ['audi', 'BMW', 'mercedes', 'lamborghini'];
let deleted7 = numbers7.indexOf('BMW'); // indexOf ამ მეთოდის საშვალებით ჩვენ შეგვიძლია გავუგოთ მასივსი კონკრეტული ელემენტის ინდექსი ანუ მისამართი პოზიცია

console.log(numbers7);
console.log(deleted7);

//

let paragraph = document.getElementById('p1'); // HTML დან მოგვაქვს ელემენტი ID ის მეშვეობით ამ ფუნქციის მეშვეობით ჩვენ მხოლოდ აიდის მქონე ელემენტის წამოღება შეგვიძლია
let secondParagraphs = document.getElementsByClassName('p2'); // HTML დან მოგვაქვს ელემენტი მხოლოდ კლასის მქონდე ელემნტი მხოლოდ
let thirdParagraph = document.getElementsByTagName('p3'); // HTML დან მოგაქვს ელემენტი თეგის სახელით მაგ: h1, p, div, span, button და ასე შემდეგ

//

const firstButton = document.getElementById('btn-1');
const firstParagraph = document.getElementById('p-1');

firstButton.addEventListener('click', function () {
  firstParagraph.textContent = 'Hello World'; // textContent უბრალოდ ტექტს ცვლის მას არ შეუძლია თეგის დამატება ჩასმა HTML ში ის უბრალოდ შიგთავს ცვლის და ამატებს
});

const secondButton = document.getElementById('btn-2');
const secondParagraph = document.getElementById('p-2');

secondButton.addEventListener('click', function () {
  secondParagraph.innerHTML += ' <b>Georgia</b>'; // innterHTML შეუძლია ჩაამასტოს ტქსტი და ასევე ჩავამატოთ ახალი თეგი
  //   secondParagraph.innerHTML + ' <b>Georgia</b>'; // + ' <b>Georgia</b>' და +=' <b>Georgia</b>' განსხვავება ისაა რომ + უბრალოდ ცვლის ყველაფერს შლის და ამატებს ახალს და += ეს ამატებს ტქსტს და ასევე თეგს ისერომ არაფერი წაიშალოს და ახალი ჩაემატოს
});
