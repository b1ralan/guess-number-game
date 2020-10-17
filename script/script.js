'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const getUserInputAsNumber = function (question) {
  let n;
  do {
    if (n === null) {
      return null;
    }
    if (n !== undefined) {
      alert('Введи число!');
    }
    n = prompt(question);
  } while (!isNumber(n));
  return +n;
};

const randomNumber = Math.floor(Math.random() * 99) + 1;

function randomGame(question) {
  let answer = getUserInputAsNumber(question);
  if (answer === null) {
    alert('Игра окончена');
  } else if (answer > randomNumber) {
    randomGame('Загаданое число меньше');
  } else if (answer < randomNumber) {
    randomGame('Загаданое число больше');
  } else {
    alert('Поздравляю, Вы угадали!!!');
  }
}
randomGame('Угадай число от 1 до 100');
