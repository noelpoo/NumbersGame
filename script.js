'use strict';

let dice = Math.floor(Math.random() * 21);
let score = 20;

console.log(dice);

presentScore(score);

document.querySelector('.check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);
  if (inputValue === dice) {
    displayMessage('Correct!');
    document.querySelector('.number').textContent = String(dice);
    setBgColor('#60b347');
    score += 5;
  } else if (!inputValue) {
    displayMessage('🚫 No Number!');
  } else if (inputValue > dice) {
    displayMessage(`${inputValue} is too high!`);
    setInput('');
    score -= 1;
  } else if (inputValue < dice) {
    displayMessage(`${inputValue} is too low!`);
    setInput('');
    score -= 1;
  }
  presentScore(score);
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  setBgColor('#222');
  setNumber('?');
  dice = Math.floor(Math.random() * 21);
  console.log(dice);
});

function setInput(setValue) {
  document.querySelector('.guess').value = setValue;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setNumber(number) {
  document.querySelector('.number').textContent = number;
}

function setBgColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function presentScore(scoreValue) {
  document.querySelector('.score').textContent = String(scoreValue);
}
