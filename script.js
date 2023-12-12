'use strict';

const rNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const bodyStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const stileSize = function (size) {
  document.querySelector('.number').style.width = size;
};
const fontSize = function (size) {
  document.querySelector('.number').style.fontSize = size;
};
const textScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let sNumber = rNumber();
let score = 10;
let highscore = 0;

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🚫 No number');
  } else if ((guess < 1, guess > 20)) {
    displayMessage('Please insert a number between 1 - 20');
  } else if (guess === sNumber && score > 1) {
    displayMessage('Winner 🏆');
    if (score > highscore && score > 1) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    displayNumber(sNumber);
    bodyStyle('#60b347');
    styleSize('30rem');
    fontSize('8rem');
  } else if (guess !== sNumber) {
    if (score > 1) {
      displayMessage(guess > sNumber ? 'Lower 👇' : 'Higher ☝');
      score--;
      textScore(score);
    } else {
      bodyStyle('#800000');
      displayMessage('You lost 💥');
      textScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', checkGuess);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    checkGuess();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  sNumber = rNumber();
  document.querySelector('.guess').value = '';
  bodyStyle('rgb(0, 87, 87)');
  displayMessage('Start guessing...');
  textScore(score);
  displayNumber('?');
  styleSize('15rem');
  fontSize('6rem');
});
