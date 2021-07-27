const MathOperations = require('./mathOperations');
const MorseNum = require('./morseNum');
const RomanNum = require('./romanNum');

function init(num1, num2, sign) {
  const sum = new MathOperations(num1, num2, sign);
  const morse = new MorseNum(num1, num2, sign);
  const roman = new RomanNum(num1, num2, sign);
  console.log('Arabic numerals: ', sum.result());
  console.log('Morse code: ', morse.result());
  console.log('Roman numerals: ', roman.result());
}

init(21, 21, '+');
