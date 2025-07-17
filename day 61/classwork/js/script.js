const button = document.getElementById('btn');
const divBox = document.getElementById('number-box');

const numberCheck = function (num) {
  return num % 2 === 0 ? 'ლუწი' : 'კენტი';
};

button.addEventListener('click', function () {
  const firstNum = parseInt(prompt('Enter First Number'));
  const secondNum = parseInt(prompt('Enter Second Number'));

  const sum = firstNum + secondNum;

  divBox.innerHTML = `
  <p>ჯამი - ${sum}</p>
  <p>${firstNum} - ${numberCheck(firstNum)}</p>
  <p>${secondNum} - ${numberCheck(secondNum)}</p>
  `;
});

// 2

for (let i = 0; i < 10; i++) {
  console.log('merabi');
}

for (let i = 10; i > 0; i--) {
  console.log('merabi');
}

// 3

function filter(number) {
  let filterArr = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      filterArr.push(number[i]);
    }
  }

  return filterArr;
}

console.log(filter([4, 9, 6, 7, 12, 6, 18]));

// 4

function sumNumber(numers) {
  sum = 0;

  for (let i = 0; i < numers.length; i++) {
    sum += numers[i];
  }

  return sum;
}

console.log(sumNumber([50, 50, 3, 3, 12]));

// 5

function realFriends(names) {
  let myFriends = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length >= 4) {
      myFriends.push(names[i]);
    }
  }

  return myFriends;
}

console.log(realFriends(['girogi', 'irakli', 'data']));
