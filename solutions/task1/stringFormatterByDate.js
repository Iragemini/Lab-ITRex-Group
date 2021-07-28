const StringFormatter = require('./stringFormatter');

class StringFormatterByDate extends StringFormatter {
  removeNonUniqueChars() {
    return this.str.replace(/[0-9]{2}-[0-9]{2}-[0-9]{4}/gi, '');
  }
}
module.exports = StringFormatterByDate;
