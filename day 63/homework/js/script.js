let namesArr = (name, namArr) => {
  let newNames = [];

  if (!namArr.includes(name)) {
    newNames.push(name);
  }

  return newNames;
};

let resultNames = namesArr('merabi', ['luka', 'giorgi', 'lika', 'irakli']);

console.log(resultNames);

// 2

let numbers = (numArr) => {
  let result = 0;

  for (let i = 0; i < numArr.length; i++) {
    result += numArr[i];
  }

  return result / numArr.length;
};

console.log(numbers([15, 5, 40]));

// 3

let checkPassword = (password) => {
  if (password.length < 6) {
    return 'Password is Too Short Try again';
  }

  let letterWord = false;
  let number = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= '0' && char <= '9') {
      number = true;
    }

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      letterWord = true;
    }
  }

  if (letterWord && number) {
    return 'Password Is strong';
  } else {
    return 'The Password Must Contain numbers and letters and it should be at least 6 characters long';
  }
};

console.log(checkPassword('merabi123'));
