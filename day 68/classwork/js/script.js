let peopleArr = [
  {
    name: 'merab',
    age: '21',
    talk: () => {
      console.log('Hello');
    },

    friend: ['gio', 'irakli'],
    adderss: {
      city: 'kitaisi',
      street: 'maisuradze',
    },
  },

  {
    name: 'rezi',
    age: '15',
    talk: () => {
      console.log('Hello');
    },

    friend: ['gocha', 'levan'],
    adderss: {
      city: 'kitaisi',
      street: 'wavwavadze',
    },
  },

  {
    name: 'nika',
    age: '30',
    talk: () => {
      console.log('Hello');
    },
    friend: ['sandro', 'saba'],
    adderss: {
      city: 'tbilisi',
      street: 'gldani',
    },
  },

  {
    name: 'beso',
    age: '10',
    talk: () => {
      console.log('Hello');
    },
    friend: ['beqa', 'ika'],
    adderss: {
      city: 'batumi',
      street: 'wavwavadze',
    },
  },

  {
    name: 'saba',
    age: '25',
    talk: () => {
      console.log('Hello');
    },
    friend: ['gio', 'irakli'],
    adderss: {
      city: 'kitaisi',
      street: 'maisuradze',
    },
  },
];

let filterArr = (arr) => {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];

    if (person.age > 18 && person.friend.length >= 2) {
      resultArr.push(person);
    }
  }

  return resultArr;
};

let filtered = filterArr(peopleArr);

console.log(filtered);

// 2

let nameArr = ['merabi', 'saba', 'luka'];

for (let name in nameArr) {
  console.log(nameArr[name]); // გვაძლევს მნიშვნელობას
  console.log(name); // გვაძლევს ინდექს
}

// 3

let objects = {
  name: 'merab',
  lastName: 'jiqidze',
  age: 21,
};

for (let keys in objects) {
  console.log(keys); // გვაძლევს ობიექტში არსებულ key
  console.log(objects[keys]); // გვაძლევს ობიექტში არსებულ მნიშვნელობას
}

// 4

let namesArr = ['merabi', 'merab'];

for (let nam of namesArr) {
  console.log(nam); // for of აბრუნებს პირდაპირ მნიშვნელობას ის ვერ გადაუვლის ობიექტს იმიტორომ ის არარის დალაგებული კოლექცია თანმიმდევრობით
}
//5

let person = {
  firstName: 'merabi',
  lastName: 'jiqidze',

  introduce() {
    console.log(this.firstName, this.lastName);
  },
};

person.introduce();

//for in - გამოიყენება მასივებზე და ობიექტებზე გადასავლელად ის აბრუნებს ინდექს, და ებიექტის კუთვნილებას ანუ key
