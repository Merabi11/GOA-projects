const numbers = [3, 3, 4, 8, 12, 11, 15];

const newNumbersArr = [];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    newNumbersArr.push(i);
  }
}

console.log(newNumbersArr);
