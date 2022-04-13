'use strict'

const playerArr = ['rock', 'paper', 'scissors'];
const compArr = ['rock', 'paper', 'scissors'];
const playerMsg = document.querySelector('.player-choice');
const computerMsg = document.querySelector('.computer-choice');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const rockEmPlayer = document.querySelector('.rock-em-l');
const paperEmPlayer = document.querySelector('.paper-em-l');
const scissorsEmPlayer = document.querySelector('.scissors-em-l');
const rockEmComputer = document.querySelector('.rock-em-r');
const paperEmComputer = document.querySelector('.paper-em-r');
const scissorsEmComputer = document.querySelector('.scissors-em-r');

let randomSelection;


const computerChoice = function () {
   document.querySelector(`.${compArr[randomSelection]}-em-r`).classList.remove('hidden');
   setTimeout(() => document.querySelector(`.${compArr[randomSelection]}-em-r`).classList.add("hidden"), 1000)
   document.querySelector(`.${compArr[randomSelection]}-em-r`).classList.add('right-ems');
   setTimeout(() => document.querySelector(`.${compArr[randomSelection]}-em-r`).classList.remove("right-ems"), 1000);
}


rockBtn.addEventListener('click', function () {
   // console.log("clicked");
   playerMsg.textContent = playerArr[0];
   rockEmPlayer.classList.remove('hidden');
   setTimeout(() => rockEmPlayer.classList.add("hidden"), 1000);
   rockEmPlayer.classList.add('left-ems');
   setTimeout(() => rockEmPlayer.classList.remove("left-ems"), 1000);

   randomSelection = Math.trunc(Math.random() * 3); // 0 or 1 0r 2
   computerMsg.textContent = compArr[randomSelection];
   computerChoice();


   if (randomSelection === 1) {
      computerScore.innerHTML++;
   } else if (randomSelection === 2) {
      playerScore.innerHTML++;
   }
});


paperBtn.addEventListener('click', function () {
   // console.log("clicked");
   playerMsg.textContent = playerArr[1];
   paperEmPlayer.classList.remove('hidden');
   setTimeout(() => paperEmPlayer.classList.add("hidden"), 1000)
   paperEmPlayer.classList.add('left-ems');
   setTimeout(() => paperEmPlayer.classList.remove("left-ems"), 1000)

   randomSelection = Math.trunc(Math.random() * 3);
   computerMsg.textContent = compArr[randomSelection];
   computerChoice();

   if (randomSelection === 2) {
      computerScore.innerHTML++;
   } else if (randomSelection === 0) {
      playerScore.innerHTML++;
   }
});


scissorsBtn.addEventListener('click', function () {
   // console.log("clicked");
   playerMsg.textContent = playerArr[2];
   scissorsEmPlayer.classList.remove('hidden');
   setTimeout(() => scissorsEmPlayer.classList.add("hidden"), 1000)
   scissorsEmPlayer.classList.add('left-ems');
   setTimeout(() => scissorsEmPlayer.classList.remove("left-ems"), 1000)

   randomSelection = Math.trunc(Math.random() * 3);
   computerMsg.textContent = compArr[randomSelection];
   computerChoice();

   if (randomSelection === 0) {
      computerScore.innerHTML++;
   } else if (randomSelection === 1) {
      playerScore.innerHTML++;
   }
});