const INPUT_STRING = 'Hello, world! 27-07-2021. This is task №1. Wonderful world. 28-07-2021';

const StringFormatter = require('./stringFormatter');
const StringFormatterByNumbers = require('./stringFormatterByNumbers');
const StringFormatterByDate = require('./stringFormatterByDate');
const StringFormatterByRegExp = require('./stringFormatterByRegExp');

const formattedString = new StringFormatter(INPUT_STRING);
const formattedStringByNumbers = new StringFormatterByNumbers(INPUT_STRING);
const formattedStringByDate = new StringFormatterByDate(INPUT_STRING);
const formattedStringByRegExp = new StringFormatterByRegExp(INPUT_STRING);

console.log('formattedString:', formattedString.removeNonUniqueChars());
console.log('formattedStringByNumbers:', formattedStringByNumbers.removeNonUniqueChars());
console.log('formattedStringByDate:', formattedStringByDate.removeNonUniqueChars());
console.log('formattedStringByRegExp:', formattedStringByRegExp.removeNonUniqueChars());
