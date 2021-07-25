function copy(n, x, y) {
  if (!n) {
    throw new Error('Incorrect input data');
  }
  if (n === 1) return Math.min(x, y);

  let seconds = 0;
  let min = 0;
  let max = Math.max(x, y) * n;

  const sum = (first, second, midpoint) => {
    if (first > second) {
      return Math.floor((midpoint - second) / first) + Math.floor(midpoint / second);
    }
    if (first < second) {
      return Math.floor(midpoint / first) + Math.floor((midpoint - first) / second);
    }
    return Math.floor(midpoint / first) + Math.floor(midpoint / second);
  };

  while (min <= max) {
    const midpoint = Math.floor((max + min) / 2);
    const sumCopies = sum(x, y, midpoint);
    if (sumCopies === n) {
      seconds = x === y ? midpoint + x : midpoint;
      break;
    }
    if (max - min === 1) {
      seconds = midpoint + Math.min(x, y);
      break;
    }
    if (sumCopies < n) {
      min = midpoint;
    } else {
      max = midpoint;
    }
  }
  return seconds;
}

console.log('answer: ', copy(4, 1, 1));
console.log('answer: ', copy(5, 1, 2));
