const StringFormatter = require('./stringFormatter');

class StringFormatterByRegExp extends StringFormatter {
  constructor(str) {
    super(str);
    this.str = str;
    this.subStr = 'world';
  }

  removeNonUniqueChars() {
    const pattern = `${this.subStr}`;
    const regexp = new RegExp(pattern, 'ig');
    return this.str.replace(regexp, '');
  }
}
module.exports = StringFormatterByRegExp;
