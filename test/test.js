const benchmark = require('../utils/benchmark');
const { lightBulbs1, lightBulbs2 } = require('../solutions/task1');

console.log(benchmark(() => lightBulbs1(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9])));
console.log(benchmark(() => lightBulbs2(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9])));
