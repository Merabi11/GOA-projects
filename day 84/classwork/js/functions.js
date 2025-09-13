const greetUser = (user) => `hello ${user}`;

const secterNumber = 5;

const guessNumber = (num) => {
  if (num === secterNumber) {
    return 'გამოიცანი';
  } else {
    return 'ვერ გამოიცანი';
  }
};

module.exports = {
  greetUser,
  guessNumber,
};

// export { greetUser, guessNumber };
