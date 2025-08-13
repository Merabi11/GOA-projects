function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  if (this.year < 2000) {
    console.log('This is an old car');
  } else {
    console.log('This is a modern car');
  }

  this.getDescription = function () {
    console.log(
      `Car brand is: ${this.make} Car model is: ${this.model} Car year is: ${this.year} Car color is: ${this.color}`
    );
  };
}

let car1 = new Car('BMW', 'f36', 2017, 'Black');
let car2 = new Car('Mercedes', 'CLS63s', 2015, 'Black');
let car3 = new Car('Ford', 'Mustang', 1899, 'Black');
let car4 = new Car('Supra', 'Mk6', 1999, 'Orange');

car1.getDescription();
car2.getDescription();
car3.getDescription();
car4.getDescription();

// 2

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;

  if (typeof this.year === 'number' && this.title.length >= 3) {
    console.log(
      `The book name is ${title} its author is ${author} and the book was released in ${year}`
    );
  } else {
    console.log('Error!');
  }
}

let book1 = new Book(
  'crime And Punishment',
  'fyodor Dostoevski',
  1885,
  'killer'
);

let book2 = new Book('It', 'Stephen King', 1986, 'Horror');

// 3

class Movie {
  constructor(title, director, rating, releaseYear) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.releaseYear = releaseYear;
  }

  isHit() {
    return this.rating > 8;
  }
}

let movie1 = new Movie('Inception', 'Christopher Nolan', 8.8, 2010);
let movie2 = new Movie('Justice League', 'Zack Snyder', 6.3, 2017);

console.log(
  `Movie Title is: ${movie1.title}, more than eight? ${movie1.isHit()}`
);
console.log(
  `Movie Title is: ${movie2.title}, more than eight? ${movie2.isHit()}`
);

// 4

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions(value) {
    if (typeof value === 'number' && value > 1) {
      this.width = value;
      this.height = value;
    } else {
      console.log('Invalid dimensions');
    }
  }
}

let rect1 = new Rectangle(10, 10);
let rect2 = new Rectangle(7, 5);

console.log(`rect1 area is: ${rect1.area}`);
console.log(`rect2 area is: ${rect2.area}`);

rect1.dimensions = 10;

console.log(`rect1 new Area is: ${rect1.area}`);

rect2.dimensions = 5;

console.log(`rect2 new area is: ${rect2.area}`);

// 5

// function constructor - არის ძველი მეტოდის ობიექტების შესაქმნელად სანამ ახალ მეთოდი შეიქმნებოდა, მას შეგვიძლია გადავცეთ ჩვეულებრივ და გვაძლევს საშვალებას properties და method თითოეულ ობიექტს.

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`My name is: ${this.name} My age is: ${this.age}`);
  };
}

// ახალი ობიექტის შესაქმნელად ვიყენებთ new ამის გამოყენებით იქმნება ახალი ობიექტი
// მეთოდები თითოეულ ობიქტში ცალ ცალკე იქმნება რაც უფრო მეტ მეხსიერებას იკავებს ეს კი დაბრკოლებას იძლევა.

let person1 = new Person('merab', 21); // ობიექთის შექმნის გზა რთითაც იქმნება ობიექტი.
let person2 = new Person('tako', 18); // მეოერე ობიქტის შექმნა

person1.greet(); // My name is: merab My age is: 21
person2.greet(); // My name is: tako My age is: 18

// 6

// Class - ესარის ახალი სინტაქსი ES6-ვერსიაში function constructor-ს ცვლის უფრო უკეთ
// function constructor-ების ზუსტი ანალოგი. მაგრამ კოდის წერა უფრო გასაგებია

class PersonSecond {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My Name is: ${this.name} My Age is: ${this.age}`);
  }
}

// იგივე პრინციპით იქმნება ობიქტი new-ს გამოყენებით

let person3 = new PersonSecond('Tako', 18);
let person4 = new PersonSecond('Merab', 21);

person3.greet(); // My Name is: Tako My Age is: 18
person4.greet(); // My Name is: Merab My Age is: 21

// Class internally - იყენებს prototype-ს ამიტომ მეთოდები არ წყდება
// function constructor-სგან განსხვავებით თითოეულ ობიექტში მეხსიერებას იშორებს ამიტომ მეხსიერებასთან არ გვაქვს შეფერხება
