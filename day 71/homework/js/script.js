// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `animal name: ${this.name}, animal age: ${this.age} years`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, energy) {
//     super(name, age);
//     this.energy = energy;
//   }

//   set updateEnergy(newEnergy) {
//     if (newEnergy > 50) {
//       this.energy = newEnergy;
//     }
//   }
// }

// let dog1 = new Dog('Buddy', 3, 40);

// console.log(dog1.describe());

// console.log('energy is:', dog1.energy);

// 2

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `hello ${this.name}`;
//   }
// }

// class Student extends Person {
//   constructor(name, grade) {
//     super(name);
//     this.grade = grade;
//   }

//   grades() {
//     console.log(
//       `${this.name} is studying and ${this.name}'s grade is ${this.grade}`
//     );
//   }
// }

// let person1 = new Student('Merab', 100);

// person1.grades();

// 3

// super() -  არის ფუნქცია, რომელიც გამოიყენება მშობლის კლასის კონსტრუქტორის გამოძახებისთვის. ის მიუთითებს მშობელი კლასის კონსტრუქტორს.
// localStorage - არის ვებსაიტის მონაცემების შენახვის მექანიზმი, რომელიც საშუალებას იძლევა მონაცემები შეინახოს მომხმარებლის ბრაუზერში. მხოლოდ ლოკალურ ვებსაიტზეა ხელმისაწვდომი მონაცემები ის მხოილოდ იმავე ბებსაიტზე ინახება არ გადაეცემა სერვერს ის არის მხოლოდ ლოკარული სანახი.
