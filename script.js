const form = document.querySelector('#word-form');
const output = document.querySelector('#word-output');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('button[type="reset"]');

let timerId;
let currentIndex = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const wordText = document.querySelector('#word-text').value;
  const words = wordText.split(' ');

  function printWord() {
      const wordCount = document.querySelector('#word-count').value;
      const timee = 60 / wordCount;
    if (currentIndex >= words.length) {
      return;
    }

    output.textContent = words[currentIndex];
    currentIndex++;
    
    timerId = setTimeout(function() {
      printWord();
    }, timee * 1000);
  }

  printWord();
});

stopBtn.addEventListener('click', function() {
  clearTimeout(timerId);
  currentIndex--;
});

resetBtn.addEventListener('click', function() {
  currentIndex = 0;
  output.textContent = '';
});
