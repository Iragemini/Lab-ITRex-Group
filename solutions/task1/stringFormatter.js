class StringFormatter {
  constructor(str = '') {
    this.str = str;
  }

  removeNonUniqueChars() {
    const arr = this.str.split('');
    return [...new Set(arr)].join('');
  }
}

module.exports = StringFormatter;
