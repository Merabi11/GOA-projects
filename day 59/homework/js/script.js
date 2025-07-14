let backgroundColor = document.getElementById('btn1');
let changeColor = document.getElementById('btn2');
let changeFontSize = document.getElementById('btn3');

let paragraph = document.getElementById('p1');

backgroundColor.addEventListener('click', function () {
  paragraph.style.backgroundColor = 'red';
  paragraph.style.display = 'block';
});

changeColor.addEventListener('click', function () {
  paragraph.style.color = 'blue';
});

changeFontSize.addEventListener('click', function () {
  paragraph.style.fontSize = '30px';
});

// 2

let countButton = document.getElementById('btn4');
let countParagraph = document.getElementById('p2');

let count = 0;

countButton.addEventListener('click', function () {
  count++;

  countParagraph.textContent = `Count : ${count}`;
});
