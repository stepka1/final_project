// const form = document.querySelector('#word-form');
// const output = document.querySelector('#word-output');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const wordCount = document.querySelector('#word-count').value;
//   const wordText = document.querySelector('#word-text').value;
//   const words = wordText.split(' ');
//   const timee = 60 / wordCount;
//   let outputText = '';

//   for (let i = 0; i < words.length; i++) {
//     setTimeout(function() {
//       outputText += words[i] + ' ';
//       output.innerHTML = outputText;
//     }, timee * i * 1000);
//   }
// });



// const form = document.querySelector('#word-form');
// const output = document.querySelector('#word-output');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const wordCount = document.querySelector('#word-count').value;
//   const wordText = document.querySelector('#word-text').value;
//   const words = wordText.split(' ');
//   const timee = 60 / wordCount;

//   function printWord() {
//     if (words.length === 0) {
//       return;
//     }

//     output.textContent = words[0];
//     words.shift();
    
//     setTimeout(function() {
//       printWord();
//     }, timee * 1000);
//   }

//   printWord();
// });





// const form = document.querySelector('#word-form');
// const output = document.querySelector('#word-output');
// const stopBtn = document.querySelector('#stop-btn');

// let timerId;

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const wordCount = document.querySelector('#word-count').value;
//   const wordText = document.querySelector('#word-text').value;
//   const words = wordText.split(' ');
//   const timee = 60 / wordCount;

//   function printWord() {
//     if (words.length === 0) {
//       return;
//     }

//     output.textContent = words[0];
//     words.shift();
    
//     timerId = setTimeout(function() {
//       printWord();
//     }, timee * 1000);
//   }

//   printWord();
// });

// stopBtn.addEventListener('click', function() {
//   clearTimeout(timerId);
// });





// const form = document.querySelector('#word-form');
// const output = document.querySelector('#word-output');
// const stopBtn = document.querySelector('#stop-btn');

// let timerId;
// let currentIndex = 0;

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const wordCount = document.querySelector('#word-count').value;
//   const wordText = document.querySelector('#word-text').value;
//   const words = wordText.split(' ');
//   const timee = 60 / wordCount;

//   function printWord() {
//     if (currentIndex >= words.length) {
//       return;
//     }

//     output.textContent = words[currentIndex];
//     currentIndex++;
    
//     timerId = setTimeout(function() {
//       printWord();
//     }, timee * 1000);
//   }

//   printWord();
// });

// stopBtn.addEventListener('click', function() {
//   clearTimeout(timerId);
//   currentIndex--; // переходим на предыдущее слово
// });





const form = document.querySelector('#word-form');
const output = document.querySelector('#word-output');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('button[type="reset"]');

let timerId;
let currentIndex = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const wordCount = document.querySelector('#word-count').value;
  const wordText = document.querySelector('#word-text').value;
  const words = wordText.split(' ');
  const timee = 60 / wordCount;

  function printWord() {
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