'use strict';

let score = 20;
let highScore = 0;

// Number generator
let secretNumbers = () => Math.trunc(Math.random() * 20 + 1);
let secretNumber = secretNumbers();

// Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Again reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore('20');
  secretNumber = secretNumbers();
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    // When a player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number Bro');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '🏎️ Slow Down Bro' : '🚎 Speed Up Bro'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost The Game Bro');
      displayScore(0);
    }
  }
});
