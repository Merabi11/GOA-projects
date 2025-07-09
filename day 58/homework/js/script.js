let score = parseInt(prompt('შეიყვანეთ რიცხვი (0-დან 100-მდე)'));

switch (score) {
  case score < 0 || score > 100:
    alert('Invalid Score');
    break;

  case score === 100:
    alert('A+');
    break;

  case score >= 90:
    alert('A');
    break;

  case score >= 80:
    alert('B');
    break;

  case score >= 70:
    alert('C');
    break;

  case score >= 60:
    alert('D');
    break;

  case score >= 40:
    alert('E');
    break;

  default:
    alert('F');
    break;
}

// 2

let films = 'ironman';

let myFavoriteFilms = ['batman', 'halk', 'ironman', 'gooblin'];

myFavoriteFilms.includes(films)
  ? alert('The Film That You Chose Is In The List')
  : alert('The Film That You Chose Is Not In The List');

// 3

let role = 'admin';

switch (role) {
  case 'admin':
    alert('You Have Full Access');
    break;

  case 'moderator':
    alert('You Can Manage The Content');
    break;

  case 'user':
    alert('You Can View The Content');
    break;

  default:
    alert('Access Denied or Invalid Role');
    break;
}

// 4

function checkNum(a, b, c) {
  let sum = 0;

  if (a % 2 !== 0) {
    sum += a;
  }

  if (b % 2 !== 0) {
    sum += b;
  }

  if (c % 2 !== 0) {
    sum += c;
  }

  return sum > 15;
}

console.log(checkNum(7, 7, 3));

// 5

function evenOrOdd(num) {
  num % 2 === 0 ? console.log('Even') : console.log('The Number Is Odd');
}

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(6);
evenOrOdd(9);

// 6

let firstButton = document.getElementById('headsBtn');
let secondButton = document.getElementById('tailsBtn');
let paragraph = document.getElementById('changeText');

firstButton.addEventListener('click', function () {
  paragraph.style.color = 'white';
  paragraph.style.fontSize = '32px';
  paragraph.style.fontFamily = 'arial';
  paragraph.textContent = 'heads.';
});

secondButton.addEventListener('click', function () {
  paragraph.textContent = 'tails.';
});
