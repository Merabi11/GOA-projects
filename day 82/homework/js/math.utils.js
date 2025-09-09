const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiplication = (a, b) => a * b;

const division = (a, b) => (b === 0 ? '0-ზე გაყოფა შეუძლებელია' : a / b);

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
