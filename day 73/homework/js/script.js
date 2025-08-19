// new ქმნის ახალ პრომის ობიექტს
let myPromise = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10) + 1; // შემთხვევითი რიცხვის გენერაცია 1-დან 10-ის ჩათვლით

  if (randomNumber > 3) {
    // თუ შემთხვევითი რიცხვი მეტია 3-ზე
    resolve(`${randomNumber} is more than 3`); // პრომისი წარმატებით სრულდება და გადაეცემა შეტყობინება
  } else {
    // თუ შემთხვევითი რიცხვი ნაკლებია ან ტოლია 3-ზე
    reject(`${randomNumber} should be more than 3`); // პრომისი უარყოფილია და გადაეცემა შეტყობინება
  }
});

myPromise // ვიძახებთ პრომის ფუნქციას
  .then((trues) => console.log(trues)) // თუ პრომისი წარმატებით შესრულდა, console-ში გამოიტანს შეტყობინებას

  .catch((falses) => console.log(falses)); // თუ პრომისი უარყოფილია, console-ში გამოიტანს შეტყობინებას

// 2

let booleanPromise = new Promise((resolve, reject) => {
  let booleans = true;

  booleans === true
    ? resolve('Your order is ready')
    : reject('Your order got declined');

  //   if (booleans) {
  //     resolve('Your order is ready');
  //   } else {
  //     reject('Your order got declined');
  //   }
});

booleanPromise
  .then((trues) => console.log(trues))

  .catch((falses) => console.log(falses));

// 3

let agePromise = new Promise((resolve, reject) => {
  let myAge = 21;

  myAge >= 18 ? resolve('You are adult') : reject('You are not an adult');
});

agePromise
  .then((trues) => console.log(trues))

  .catch((falses) => console.log(falses));

// 4

// primise არის ობიექტი, რომელიც ასინქრონული ოპერაციის შედეგს წარმოადგენს
// მას აქვს სამი მდგომარეობა: pending (მოლოდინში), fulfilled (დასრულებულია) და rejected (უარყოფილია)
// ის არის ასინქრონული ოპერაცია, რომელიც შეიძლება დასრულდეს წარმატებით ან შეცდომით
