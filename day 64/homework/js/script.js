let users = prompt('Choose (rock, paper, scissors)').toLocaleLowerCase();

let choices = ['rock', 'paper', 'scissors'];

let random = Math.floor(Math.random() * choices.length);
let computerRandom = choices[random];

let result = '';

if (users === computerRandom) {
  result = 'ფრეა';
} else if (
  (users === 'rock' && computerRandom === 'scissors') ||
  (users === 'paper' && computerRandom === 'rock') ||
  (users == 'scissors' && computerRandom === 'paper')
) {
  result = 'შენ მოიგე';
} else {
  result = 'შენ წააგე';
}

console.log(
  `შენ აირჩიე: ${users} კომპიუტერმა აირჩია: ${computerRandom} შედეგი: ${result}`
);

// 2

// Scope - არის ტერიტორია საიდანაც შეგვიძლია ცვლადზე წვდომის მოპოვება
// Scope pollution - არის შეცდომის გამოწვევას გადაწერას გლობალურ ცვლადზე გადაწერა ლოკალურ სკოუპში

let names = 'merab'; // გლობალური ცვლადი

function greet() {
  console.log(names); // გამოვიძახეთ გლობალური ცვლადი
}

greet(); // "merab"

function greet2() {
  let names2 = 'merab'; // ლოკალური ცვლადი ის არის ფუნქციის შიგნით მისი საძღვარია ფუნქცია მას ვერ გაცდება
  console.log(names2); // ვიძახებთ ფუნქციის შიგნითვე ის დაბეჭდავს სახელს
}

greet2(); // "merab"

console.log(names2); // Error ის გამოიტანს შეცდომას ჩვენ ვიძახებთ ლოკალურ ცვლადს ის ვერ გახდება გლობალური

// scope pillution - გლობალურ ცვლადზე გადაწერა ლოკალურ სკოუპში

let names3 = 'Tako';

function hello() {
  names3 = 'takks'; // გლობალური ცვლადი შემოვიტანეთ ლოკალურ სკოუპში და მასზე მოხდა გადაწერა ანუ მისი მნიშვნელობა იქნება "takks" თუ ჩვენ მას დასაწყისში დავუწერდით let მაშინ ის იქნებოდა ახალი ცვლადი და არ შეეხებოდა ბლობალურ ცვლადს
  console.log(names); // => "takks"
}

console.log(names3); // გლობალურ ცვლადზე მოხდა გადაწერა ამიტომ მისი მნიშვნელობა იქნება "takks"
