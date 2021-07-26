/**
 * @param {number} n - amount of bulbs
 * @param {number[]} p - array of P's
 * @returns number - amount of burning light bulb
 */
function lightBulbs(n, p) {
  const bulbs = new Array(n);
  bulbs.fill(false);
  const filtered = p.filter((item) => item <= n);

  for (let i = 0; i < filtered.length; i += 1) {
    for (let j = 0; j < bulbs.length; j += 1) {
      const num = j + 1;
      if (num % filtered[i] === 0) {
        bulbs[j] = !bulbs[j];
      }
    }
  }

  return bulbs.filter((item) => item).length;
}

console.log('bulbs', lightBulbs(20, [2, 3, 8, 33]));
console.log('bulbs', lightBulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
