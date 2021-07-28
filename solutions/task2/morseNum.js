const MathOperations = require('./mathOperations');
const symbolsMap = require('./symbolsMap').MORSE_TABLE;

class MorseNum extends MathOperations {
  result() {
    const res = `${this.calculate()}`;
    return res
      .split('')
      .map((item) => symbolsMap[item])
      .join('');
  }
}

module.exports = MorseNum;
