const MathOperations = require('./mathOperations');
const config = require('./config').MORSE_TABLE;

class MorseNum extends MathOperations {
  constructor(num1, num2, sign) {
    super(num1, num2, sign);
    this.num1 = num1;
    this.num2 = num2;
    this.sign = sign;
  }

  result() {
    const res = `${this.calculate()}`;
    return res
      .split('')
      .map((item) => config[item])
      .join('');
  }
}

module.exports = MorseNum;
