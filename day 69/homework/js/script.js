// getter - მეთოდის მთავარი დანიშნულება ისარის რომ მივწვდეთ ობიექტში კუთვნილებებს და დავაბრუნოთ მისი მნიშვნელობები.
// getter - მეთოდის დახმარებით ჩვენ არ ვარღვევთ სტანდარტებს რომელიც ეხება პირადულ ინფორმაციებს private information.
// private - კუთვნილებების გამოყენება შეგვიძლია ობიექტის შიგთნით და არა ობიექტის გარეთ.

// setter - მეთოდის დახმარებით შეგვიძლია ობიქტში კუთვნილებების მნიშვნელობების შეცვლა
// setter - მეთოდს მხოლოდ ერთი პარამეტრი გადაეცემა რაც წარმოადგენს ახალ მნიშვნელობას
// setter - მეთოდი საშვალებას გვაძლევს შევცვალოთ ობიქტში პირადი ინფორმაციები

// 2

let user = {
  name: 'merabi',
  surname: 'jiqidze',
  age: 20,
  country: 'georgia',

  get myInfo() {
    return `my name is ${this.name}, my surname is ${this.surname}, i from ${this.country} `;
  },

  set ageInfo(newAge) {
    if (newAge >= 18) {
      this.age = newAge;
      console.log(`my age is ${newAge}`);
    } else {
      console.log('The person is not an adult');
    }
  },
};

console.log(user.myInfo);

user.ageInfo = 21;

// 3

// destructing - ნიშნავს ობიქტიდან ან მასივიდან ამოვიღოთ სასურველი ელემენტები და კუთვნილებები და შევინახოთ ცვლადებში.
// ყოველ ჯერზე რომარ მოგვიწიოს მაგ: user.name, user.age და ასე შემდეგ
// ასევე შეგვიძლია კუთვნილების სახელის შეცვლა და სხვა სახელით შენახვა ცვლადში

// მაგ:
let testObj = {
  // შევქვენით ობიექთი 3 კუთვნილებით ეხლა შევქმნი ცვლდს და შევინახავ მაგ: 2 კუთვნილებას
  name: 'joni',
  age: 30,
  country: 'germany',
};

let { name, age } = testObj; // შევინახე იგივე ობიექტის ცვლადში აწი ყოველ ჯერზე რამდენჯერაც დამჭირდება სახელის ან ასაკის გამოტანა ესე არ მომიწევს testObj.name ან testObj.age აწი უბრალოდ დავწერ ესე console.log(name),

// 4

let myInfo = {
  name: 'merab',
  surname: 'jiqidze',
  age: 21,
  country: 'georgia',
};

let { name: firstName, surname: lastName } = myInfo;
// name-კუთვნილებას შევუცვალე სახელი და დავარქვი firstName და ასევე surname-შევუცვალე კუთვნილება და დავარქვი lastName

console.log(firstName, lastName);

// 5

// constructor - ესარის ფუნქცია რომლის საშვალებითად ვქმნით ახალ ობიექტს ფუნქციის განსხვავება ისარის რომ მის სახელს პირველი დიდი ასო უნდა ქონდეს

function Person(name, surname, age, country) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;

  if (this.name.length >= 4) {
    console.log(`my name is: ${this.name}`);
  } else {
    console.log("The person's name should contain at least 4 characters");
  }

  this.aboutThePerson = function () {
    console.log(
      `The person's name is ${name}, surname ${surname}, the person's age is ${age} and person lives in ${country}`
    );
  };
}

let person1 = new Person('Merabi', 'Jiqidze', 21, 'Georgia');

person1.aboutThePerson();
