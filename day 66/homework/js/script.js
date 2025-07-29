let numersArr = [5, 12, 9, 19, 30, 3, 7];

let newNumbers = numersArr.filter((num) => num > 10);

console.log(newNumbers);

// 2

let numbersArr2 = [-10, 40, -50, -100, 122, 500, -2];

let positionNumbers = numbersArr2.filter((num) => num > 0);

console.log(positionNumbers);

// 3

let fruitsArr = ['anans', 'lemon', 'watermelon', 'coconut', 'orange'];

let newFruits = fruitsArr.filter((fruit) => fruit.includes('a'));

console.log(newFruits);

// 4

let animals = ['cat', 'frog', 'dog', 'giraffe'];

let newAnimals = animals.filter((animal) => animal.length === 3);

console.log(newAnimals);

//  5

let booleanNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers2 = booleanNumbers.map((num) => num % 2 === 0);

console.log(newNumbers2);

// 6

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let toStringNumbers = numArr.map((num) => num.toString()); // toString()-გადააქცევს მონაცემს სტრინგად იგივეა რაც String()

console.log(toStringNumbers);

//  7

// forEach - ამ მეთოდს გამოვიყენებთ მასივებისთვის რომ გადავუაროთ და რაიმე მოქმედებები შევასრულოთ მასზე მაგრამ ის არ აბრუნებს ახალ მასივს ის აკეთებს მოქმედებებს იმ მასივზე
// map - მაპი გადაუვლის მასივს და აკეთებეს რაღაც მოქმედებებს და აბრუნებს ყოველ ქმედებაზე ახალ მასივს
// filter - ფილტერი გამოიყენება მასივის გასაფიტრად და აბრუნებს ახალ მასივს მაგ: მასივიდან გვინდა გავფილტროთ ისეთი რიცხვები რომლებიცაა კენტი და დავტოვოთ ლუწები
