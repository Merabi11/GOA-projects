const firstUpperString = (string) => {
  if (string === '') {
    return 'ცარიელიე!';
  }
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const upperCaseString = (string) => {
  return string.toUpperCase();
};

const toLowerCaseString = (string) => {
  return string.toLowerCase();
};

module.exports = {
  firstUpperString,
  reverseString,
  upperCaseString,
  toLowerCaseString,
};
