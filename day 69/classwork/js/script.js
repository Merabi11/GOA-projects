let myAccount = {
  fullName: 'მერაბ ჯიქიძე',
  _email: 'example@gmail.com',
  _password: '123456',

  set password(newPassword) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
      console.log('წარმატებით შეიცვალა თქვენი პაროლი');
    } else {
      console.log('პაროლი უნდა შეიცავდეს მინიმუმ 6-სიმბოლოს.');
    }
  },

  get email() {
    return this._email;
  },

  greet() {
    console.log(`მე ვარ ${this.fullName}`);
  },
};

myAccount.greet();

console.log(myAccount.email);

myAccount.password = 'example123';

// 2

function car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.introduce = function () {
    console.log(
      `მანქანის ბრენდი: ${brand} მაქანის მოდელი: ${model} მანქანის გამომშვები წელი: ${year}`
    );
  };
}

const car1 = new car('BMW', 'F36', 2017);
const car2 = new car('Mercedes', 'w205', 2018);
const car3 = new car('CLS', 'w218', 2016);
const car4 = new car('Audi', 'RS8', 2022);

car1.introduce();
car2.introduce();
car3.introduce();
car4.introduce();
