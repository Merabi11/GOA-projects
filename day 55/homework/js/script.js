// +

console.log(5 + 5);
console.log(0 + 5);
console.log(-5 + 6);
console.log(2 + 0);
console.log(0 + 0);

// -

console.log(5 - 2);
console.log(0 - 5);
console.log(-5 - 6);
console.log(10 - 5);
console.log(0 - 0);

// *

console.log(8 * 2);
console.log(0 * 5);
console.log(-2 * 6);
console.log(10 * 5);
console.log(0 * 0);

// /

console.log(10 / 2);
console.log(5 / 5);
console.log(-10 / 2);
console.log(10 / 10);
console.log(0 / 0);

// %

console.log(9 % 3);
console.log(5 % 5);
console.log(10 % 2);
console.log(-4 % 2);
console.log(0 % 0);

// Math - ობიექტი არის ჩაშენებული ფუნქცია რომლიც გვეხმარება მათემატიკური ოპერაციების შესრულებაში

console.log(Math.random()); // Math.random() ის ბეჭდავს 0-დან 1-ამდე (შემტხვევითობით ყველა ჯერზე ახალ ახალ რიცხვებს ყოველ ახალ გამოძახებაზე დაიბეჭდება ახალ ახალი რიცხვები
console.log(Math.random() * 100); // თუ ჩვენ მას გადავცემთ გამრავლებული 100-ზე ის 0-დან 100-ამდე დაბეჭდავს ყველა ახალ გამოძახებაზე ახალ ახალ რიცხევებს ნებისმიერი რიცხვი შეგვიძლია გადავცეთ
console.log(Math.floor(5.9)); //Math.floor() თუ მას გადაეცემა ათწილადი მაგ: 5.9 ის არ დაამრგვალებს 6-ად ის ჩამოაშორებს მთელს და დატოვებს 5ს
console.log(Math.ceil(5.1)); //Math.ceil() თუ მას გადაეცემა ათწილადი მაგ: 5.1 ან 5.8 ის დაამრგავლებს უახლოეს რიცხვად ანუ 6 ად
