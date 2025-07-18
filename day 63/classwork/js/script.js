// function numbers(num) {
//   for (let i = num.length - 1; i >= 0; i--) {
//     console.log(num[i]);
//   }
// }

// numbers([5, 10, 5, 6]);

// 2

// const strings = function (str) {
//   let spaceCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       spaceCount++;
//     }
//   }
//   console.log(spaceCount);
// };

// strings('i am merab 20 years old');

// 3

// 3

// 4

const greet = () => 'Hello World';

console.log(greet());

// 5

const gretName = (name) => `Hello ${name}`;

console.log(gretName('merabi'));

// 6

const arrAndNumbers = (arr, num) => {
  let numArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      numArr.push(arr[i]);
    }
  }

  return numArr;
};

let resultArr = arrAndNumbers([5, 6, 5, 10, 5], 5);

console.log(resultArr);
