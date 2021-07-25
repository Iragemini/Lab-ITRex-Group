function lightBulbs(n, p) {
  const bulbs = new Array(n);
  bulbs.fill(false);
  const filtered = p.filter((item) => item <= n);
  const inversion = (index) => {
    bulbs[index] = !bulbs[index];
  };
  const len = filtered.length;
  for (let i = 0; i < len; i += 1) {
    bulbs.forEach((item, index) => {
      const num = index + 1;
      if (num % filtered[i] === 0) {
        inversion(index);
      }
    });
  }
  const amount = bulbs.reduce((acc, item) => (item ? acc + 1 : acc), 0);
  return amount;
}

console.log('bulbs', lightBulbs(20, [2, 3, 8, 33]));
console.log('bulbs', lightBulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
