function numbers() {
  let num = 11; // ეს ცვლადი შექმნილია ფუნქციის შიგნით და მიეკუთვნება ფუქნცია მაქ ჩვენ ვერ გავიტანთ ფუნქციის გარეთ
}

// console.log(num); // აქ გამოიწვევს ერორს რადგან ფუქნციის გარეთ გატანა არშიეძლება ლოკალურია

// 2

function numbers2() {
  let num2 = 10;

  console.log(num2);
}

let resultNum = numbers2();

console.log(resultNum);
