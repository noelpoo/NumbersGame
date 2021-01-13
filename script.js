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
    presentScore(score);

    setTimeout(function () {
      prepareNextQn();
    }, 1 * 1000);
  } else {
    displayMessage("🚫GAME OVER");
    setBgColor("red");
  }
  presentScore(score);
  if (score > highscore) {
    highscore = score;
    setHighScore(highscore);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  question = generateQuestion();
  correctAns = question[1];
  document.querySelector(".guess").value = "";
  displayMessage("answer the question");
  setBgColor("#222");
  setQuestion(question[0]);
  score = 0;
  presentScore(score);
});

function generateQuestion() {
  let correctAns = 0;
  let x = 0;
  let y = 0;
  const operators = ["-", "+", "x"];
  let op = operators[Math.floor(Math.random() * 3)];

  if (op === "-") {
    x = Math.floor(Math.random() * 101);
    y = Math.floor(Math.random() * 101);
    correctAns = x - y;
  } else if (op === "+") {
    x = Math.floor(Math.random() * 101);
    y = Math.floor(Math.random() * 101);
    correctAns = x + y;
  } else if (op === "x") {
    x = Math.floor(Math.random() * 11);
    y = Math.floor(Math.random() * 21);
    correctAns = Math.floor(x * y);
  }

  return [`${x} ${op} ${y} = ?`, correctAns];
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

function prepareNextQn() {
  question = generateQuestion();
  correctAns = question[1];
  document.querySelector(".guess").value = "";
  setQuestion(question[0]);
  displayMessage("answer the question");
}
