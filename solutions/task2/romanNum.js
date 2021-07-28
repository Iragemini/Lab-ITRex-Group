const MathOperations = require('./mathOperations');
const symbolsMap = require('./symbolsMap').ROMAN_TABLE;

class RomanNum extends MathOperations {
  convertToRoman(num) {
    let converted = '';
    if (num === 0) {
      return '';
    }
    for (let i = 0; i < symbolsMap.length; i += 1) {
      const [arabNum, romNum] = symbolsMap[i];
      if (num >= arabNum) {
        converted = romNum + this.convertToRoman(num - arabNum);
        break;
      }
    }
    return converted;
  }

  result() {
    const res = this.calculate();
    return this.convertToRoman(res);
  }
}

module.exports = RomanNum;
