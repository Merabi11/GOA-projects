let dayInput = document.getElementById('dayinput');
let monthInput = document.getElementById('monthinput');
let yearInput = document.getElementById('yearinput');

let outputDay = document.getElementById('outputday');
let outputMonth = document.getElementById('outputmonth');
let outputYear = document.getElementById('outputyear');

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  event.preventDefault(); // ვაჩერებთ გადატვირთვას რომ შეტანილი ინფორმაცია არ გაქრეს მომენტალურად და საიტი არ დარეფრეშდეს

  // მოგვაქვს შემოტანილი ინფორმაცია
  let inputday = parseInt(dayInput.value);
  let inputMonth = parseInt(monthInput.value);
  let inputYear = parseInt(yearInput.value);

  // დღევანდელი თარიღი
  let today = new Date();
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  // დაბადების თარიღი
  let birthDate = new Date(inputYear, inputMonth - 1, inputday);

  // ასაკის გამოთვლა
  let ageCalculator = today - birthDate;

  if (ageCalculator < 0) {
    alert('მიუთითე სწორი თარიღი!');
  }

  let ageData = new Date(ageCalculator);

  let year = ageData.getUTCFullYear() - 1970;
  let month = ageData.getUTCMonth();
  let days = ageData.getUTCDay();

  outputYear.textContent = year;
  outputMonth.textContent = month;
  outputDay.textContent = days;
});
