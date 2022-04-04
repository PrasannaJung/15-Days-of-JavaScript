
// SELECTION OF VARIABLES FOR DOM MANIPULATION

const inputVal = document.querySelector('.word-input');

const checkBtn = document.querySelector('.check-btn');

const msg = document.querySelector('.message');

// WOOMOOW

checkBtn.addEventListener('keydown', 'click', function (e) {
   const word = inputVal.value;
   const lenWord = word.length;
   const wordStart = word.slice(0, Math.floor(lenWord / 2));
   const wordEnd = word.slice(Math.ceil(lenWord / 2));

   const wordRevEnd = wordEnd.split('').reverse().join('');

   if (wordStart === wordRevEnd) {
      msg.innerHTML = 'It is indeed a palindrome!';
   } else {
      msg.innerHTML = 'It is not a palindrome!';
   }
});

// document.addEventListener('keydown', function (e) {
//    console.log(e);
//    const word = inputVal.value;
//    const lenWord = word.length;
//    const wordStart = word.slice(0, Math.floor(lenWord / 2));
//    const wordEnd = word.slice(Math.ceil(lenWord / 2));

//    const wordRevEnd = wordEnd.split('').reverse().join('');

//    if (e.code === 'Enter' && wordStart === wordRevEnd) {
//       msg.innerHTML = 'It is indeed a palindrome!';
//    } else {
//       msg.innerHTML = 'It is not a palindrome!';
//    }
// });

