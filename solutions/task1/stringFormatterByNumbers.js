const StringFormatter = require('./stringFormatter');

class StringFormatterByNumbers extends StringFormatter {
  constructor(str) {
    super(str);
    this.str = str;
  }

  removeNonUniqueChars() {
    return this.str.replace(/\d/gi, '');
  }
}
module.exports = StringFormatterByNumbers;
