"use strict";

let question = generateQuestion();
let score = 0;
let highscore = 0;
let answerIsCorrect = true;
let correctAns = question[1];

presentScore(score);
setHighScore(highscore);
setQuestion(question[0]);

document.querySelector(".check").addEventListener("click", function () {
  let inputValue = Number(document.querySelector(".guess").value);
  if (inputValue === correctAns) {
    displayMessage("✅Correct!");
    score += 5;
  } else {
    displayMessage("🚫Wrong, you fucktard! GAME OVER");
    setBgColor("red");
  }
  presentScore(score);
  if (score > highscore) {
    highscore = score;
    setHighScore(highscore);
  }
});

// while (answerIsCorrect) {
//   document.querySelector(".check").addEventListener("click", function () {
//     let inputValue = Number(document.querySelector(".guess").value);
//     if (inputValue === question[1]) {
//       displayMessage("✅Correct!");
//       score += 5;
//       presentScore(score);
//       correctAns = goNextQn();
//     } else {
//       displayMessage("Wrong, Game Over!");
//       setBgColor("red");
//       answerIsCorrect = false;
//     }
//   });
// }

document.querySelector(".again").addEventListener("click", function () {
  question = generateQuestion();
  document.querySelector(".guess").value = "";
  displayMessage("answer the question");
  setBgColor("#222");
  setQuestion(question[0]);
  score = 0;
  presentScore(score);
});

function generateQuestion() {
  let x = Math.floor(Math.random() * 101);
  let y = Math.floor(Math.random() * 101);
  const correctAns = x + y;

  return [`${x} + ${y} = ?`, correctAns];
}

function setInput(setValue) {
  document.querySelector(".guess").value = setValue;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setQuestion(number) {
  document.querySelector(".number").textContent = number;
}

function setBgColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function presentScore(scoreValue) {
  document.querySelector(".score").textContent = String(scoreValue);
}

function setHighScore(scorevalue) {
  document.querySelector(".highscore").textContent = scorevalue;
}

function goNextQn() {
  document.querySelector(".guess").value = "";
  displayMessage("Answer the question");
  question = generateQuestion();
  setQuestion(question[0]);
  return question[1];
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
