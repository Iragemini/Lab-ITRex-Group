const StringFormatter = require('./stringFormatter');

class StringFormatterByRegExp extends StringFormatter {
  constructor(str, subStr = '') {
    super(str);
    this.subStr = subStr;
  }

  removeNonUniqueChars() {
    const regexp = new RegExp(this.subStr, 'ig');
    return this.str.replace(regexp, '');
  }
}
module.exports = StringFormatterByRegExp;
