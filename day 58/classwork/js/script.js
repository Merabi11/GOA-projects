let age = parseInt(prompt('Enter your age'));

let ageMessage =
  age >= 18 ? console.log('You are adult') : console.log('You are teenage');

// 2

let days = parseInt(prompt('შეიყვანეთ დღე'));

switch (days) {
  case 1:
    alert('ორშაბათი');
    break;

  case 2:
    alert('სამშაბათი');
    break;

  case 3:
    alert('ოთხშაბათი');
    break;

  case 4:
    alert('ხუთშაბათი');
    break;

  case 5:
    alert('პარასკევი');
    break;

  case 6:
    alert('შაბათი');
    break;

  case 7:
    alert('კვირა');
    break;

  default:
    alert('თქვენს მიერ შეყავინი დღე არ არსებობს');
    break;
}

// 3

function rectangleArea(width, height) {
  console.log(width * height);
}

rectangleArea(5, 2);
rectangleArea(10.5, 5.2);

// 4

// რა არის პარამეტრი და რა არის არგუმენტი!

// მაგ: შევქმენით ფუნქცია და დავარქვით რაიმე სახელი და მას ფრჩხილებში გადავეცით firstName, lastName ფუნქვიის სახელს რასაც ფრჩხილებსი გადავცემთ ის არის პარამეტრი შემდეგ ეგ პარამეტრი მიიღებს რაღაც მნიშვნელობას ეგ წარმოვიდგინოთ როგორც ფუნქციის სახელის ცვლადები
// არგუმენტი არის უკვე ფუნქციას გარედან რას მივაწვდით პარამეტში გარედან რასაც ჩვენ მივაწვდით ის ჩაჯდება ავტომატურად პარამეტში ანუ იმ მნიშვნელობას მიიღებს

function sayHello(firstName, lastName) {
  console.log(`hello ${firstName}. your last name is ${lastName}`);
}

sayHello('merabi', 'jiqidze');
