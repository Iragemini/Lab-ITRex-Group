const MathOperations = require('./mathOperations');
const config = require('./config').ROMAN_TABLE;

class RomanNum extends MathOperations {
  constructor(num1, num2, sign) {
    super(num1, num2, sign);
    this.num1 = num1;
    this.num2 = num2;
    this.sign = sign;
  }

  convertToRoman(num) {
    if (num === 0) {
      return '';
    }
    for (let i = 0; i < config.length; i += 1) {
      if (num >= config[i][0]) {
        return config[i][1] + this.convertToRoman(num - config[i][0]);
      }
    }
    return '';
  }

  result() {
    const res = this.calculate();
    return this.convertToRoman(res);
  }
}

module.exports = RomanNum;
