let clickBtn = document.getElementById('btn'); // getElementById - მეშვეობით HTML-დან მოგვაქვს აიდის მეშვეობით ელემენტი ვქმნით ნებისმიერ ემენტს HTML- ში აიდად გადვცემთ რაიმეს და აიდის მეშვეობით წამოვიღებთ ელემენტს
let h1Heading = document.getElementById('heading');

clickBtn.addEventListener('click', function () {
  h1Heading.style.color = 'black';
  h1Heading.style.fontFamily = 'arial';
  h1Heading.style.display = 'block';
  h1Heading.innerHTML = 'Hello World';
});

let deleteBtn = document.getElementById('btn2');

deleteBtn.addEventListener('click', function () {
  h1Heading.style.display = 'none';
});
