const country = ['USA', 'italy', 'Georgia', 'dubai'];
let num = 0;

while (num < country.length) {
  console.log(country[num]);
  num++;
}

// 2

let secretNum = 11;

do {
  console.log(`Number is ${secretNum}`);
  secretNum--;
} while (secretNum > 0);

// 3

let num2 = 1;

while (num2 <= 30) {
  if (num2 % 3 === 0) {
    console.log(num2);
  }
  num2++;
}

// 4

const names = 'meraba';
let index = 0;
let count = 0;

while (index < names.length) {
  if (names[index] === 'a') {
    count++;
  }

  index++;
}

console.log(count);
