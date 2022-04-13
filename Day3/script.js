'use strict';

const days = document.querySelector('.days');
const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.mins');
const seconds = document.querySelector('.secs');

setInterval(() => {
  const now = Date.now();
  const newYear = new Date(2023, 0, 1).getTime();

  const timeLeft = (newYear - now) / 1000;
  console.log(timeLeft);

  const daysLeft = Math.floor(timeLeft / (60 * 60 * 24));
  days.textContent = String(daysLeft).padStart(2, 0);

  const hoursLeft = Math.floor((timeLeft % (60 * 60 * 24)) / 3600);
  hours.textContent = String(hoursLeft).padStart(2, 0);

  const minutesLeft = Math.floor((timeLeft % (60 * 60)) / 60);
  minutes.textContent = String(minutesLeft).padStart(2, 0);

  const secondsLeft = Math.floor(timeLeft % 60);
  seconds.textContent = String(secondsLeft).padStart(2, 0);
}, 1000);
