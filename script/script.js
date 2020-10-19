'use strict';
const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};
const game = function () {
  const randomNumber = Math.floor(Math.random() * 99);
  return function repeat() {
    let answer = prompt('Угадай число от 1 до 100');
    if (isNumber(answer)) {
      if (answer > randomNumber) {
        alert('Загаданое число меньше');
        return repeat();
      } else if (answer < randomNumber) {
        alert('Загаданое число больше');
        return repeat();
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
    } else if (!isNumber(answer)) {
      answer = confirm('Введите число!');
      if (answer === false) {
        alert('Игра окончена');
      } else {
        return repeat();
      }
    }
  };
};
game()();
