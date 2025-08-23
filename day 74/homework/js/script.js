const clockPromise = new Promise((resolve, reject) => {
  const myHours = 18;
  const hours = new Date().getHours();

  if (myHours === hours) {
    resolve('Your time matches my current local time');
  } else {
    reject('Your time does not match to my current local time');
  }
});

clockPromise
  .then((trues) => console.log(trues))
  .catch((falses) => console.log(falses));

// 2

const oddNumers = new Promise((resolve, reject) => {
  const number = 12;

  if (number % 2 === 0) {
    resolve('The Number is even');
  } else {
    reject('The Number is odd');
  }
});

oddNumers
  .then((trues) => console.log(trues))
  .catch((falses) => console.log(falses));

// 3

setTimeout(() => {
  // ასრილებს წამზომის ფუნქციას გადავცემთ რაიმე დავალებას და ის განსაზღვრული დროის შემდეგ შესრულდება მხოლოდ ერთხელ.
  console.log('შესვენებაა!');
}, 2000);

setInterval(() => {
  // სეთინტერვალი ასრულებს ბულილნიკის მას გადავცემთ რაიმე დავალებას და დროს მაგ 2 წამი ის ყოველ 2 წამში გამოიტანს შეტყობინებას მუდმივად იმუშავებს while-ის მსგავსათ.
  console.log('პროგრამირების დროა!');
}, 2000);

// 4

setTimeout(() => {
  console.log('Hello after 5 seconds!');
}, 5000);

// 5

setInterval(() => {
  console.log('Hello every 4 seconds!');
}, 4000);
