const StringFormatter = require('./stringFormatter');

class StringFormatterByNumbers extends StringFormatter {
  removeNonUniqueChars() {
    return this.str.replace(/\d/gi, '');
  }
}
module.exports = StringFormatterByNumbers;
