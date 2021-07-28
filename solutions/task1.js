/**
 * @param {number} n - amount of bulbs
 * @param {number[]} p - array of P's
 * @returns number - amount of burning light bulb
 */

/* оптимальный по памяти */
function lightBulbs1(n, p) {
  const bulbs = new Set();
  const filtered = p.filter((item) => item <= n);

  for (let i = 0; i < filtered.length; i += 1) {
    for (let j = 1; j <= n; j += filtered[i]) {
      if (bulbs.has(j)) {
        bulbs.delete(j);
      } else {
        bulbs.add(j);
      }
    }
  }
  return bulbs.size;
}

/* оптимальный по времени */
function lightBulbs2(n, p) {
  const bulbs = new Array(n);
  bulbs.fill(false);
  const filtered = p.filter((item) => item <= n);

  for (let i = 0; i < filtered.length; i += 1) {
    let j = filtered[i] - 1;
    while (j < bulbs.length) {
      bulbs[j] = !bulbs[j];
      j += filtered[i];
    }
  }

  return bulbs.reduce((acc, item) => (item ? acc + 1 : acc), 0);
}

console.log('bulbs1', lightBulbs1(20, [2, 3, 8, 33]));
console.log('bulbs1', lightBulbs1(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
console.log('bulbs2', lightBulbs2(20, [2, 3, 8, 33]));
console.log('bulbs2', lightBulbs2(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));

module.exports = { lightBulbs1, lightBulbs2 };
