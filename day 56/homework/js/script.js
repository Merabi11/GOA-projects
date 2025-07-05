let messageBtn = document.getElementById('btn');
let headingText = document.getElementById('heading');

messageBtn.addEventListener('click', function () {
  let messagePrompt = prompt('What send message?');

  headingText.innerHTML = messagePrompt;
});
