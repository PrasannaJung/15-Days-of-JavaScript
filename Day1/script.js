//SELECTING THE REQUIRED HTML ELEMENTS USING THE QUERY SELECTOR

const btnGenerate = document.querySelector('.reset-generate');
const score = document.querySelector('.score');
const btnGuess = document.querySelector('.check');

const message = document.querySelector('.message');
const count = document.querySelector('.count-number');
const guessNum = document.querySelector('.guess');

//LISTENING TO THE CLICK EVENT AND GENERATING A RANDOM NUMBER
btnGenerate.addEventListener('click', function () {
  const randomNum = Math.trunc(Math.random() * 15) + 1;
  count.innerHTML = `Generated : Start Guessing`;
  count.style.fontSize = '3.2rem';

  //LISTENING TO THE CLICK EVENT TO GUESS THE RANDOM NUMBER WHICH WAS GENERATED ABOVE
  btnGuess.addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value);
    console.log('clicked');
    if (guessNum === randomNum) {
      // CHECKING IF THE NUMBER GUESSED WAS CORRECT
      count.innerHTML = `Number was ${randomNum}`;
      message.innerHTML = 'You have won!';
      message.innerHTML.style.fontSize = '3.2rem';
      console.log('Hello');
    } else if (!guessNum) {
      // CHECKING IF THE NUMBER IS INVALID
      count.innerHTML = 'Enter a Valid Number!';
    } else if (guessNum !== randomNum) {
      //CHECKING IF THE NUMBER IS NOT EQUAL TO THE RANDOM NUMBER GENERATED
      message.innerHTML =
        guessNum > randomNum ? `Guess is high!` : `Guess is low!`; // CONDITION FOR WHEN THE GUESSED NUMBER IS HIGHER OR LOWER
      if (score.innerHTML > 1) {
        score.innerHTML--;
      } else {
        score.innerHTML = 0;
        count.innerHTML = `Number was ${randomNum}`;
        message.innerHTML = `You've lost!`;
      }
    }
  });
});
