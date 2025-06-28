const secretNumber = 11;

let button = document.getElementById('guessGameBtn');

button.addEventListener('click', function () {
  let guessGameInput = parseInt(prompt('Enter Guess Num'));

  if (guessGameInput === secretNumber) {
    alert('You have guessed the secret number');
  } else if (guessGameInput > secretNumber) {
    alert('Your number is too high, try again');
  } else if (guessGameInput < secretNumber) {
    alert('Your number is too low try again');
  } else if (guessGameInput !== Number) {
    alert('is not number, try again');
  }
});

// homework - 2

let fullName = 'merab jiqidze';

for (let i = 0; i < fullName.length; i++) {
  console.log(fullName[i]);
}

// homework - 3

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
}
