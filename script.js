'use strict';

const playeroEl = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const image = document.querySelector('img');

const btnRoll = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
image.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  image.src = `dice-${dice}.png`;
  image.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});
