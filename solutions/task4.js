function genMagicSquare(n) {
  if (!n || n % 2 === 0) {
    throw new Error(`Impossible value: ${n}. Enter an odd number more than 0`);
  }
  const matrix = [];
  for (let i = 0; i < n; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = 0;
    }
  }
  let lastLineIndex = n - 1;
  let middleColumnIndex = Math.floor(n / 2);

  for (let i = 1; i <= n * n; i += 1) {
    matrix[lastLineIndex][middleColumnIndex] = i;
    lastLineIndex += 1;
    middleColumnIndex += 1;
    if (i % n === 0) {
      lastLineIndex -= 2;
      middleColumnIndex -= 1;
    } else {
      lastLineIndex = Math.floor(lastLineIndex % n);
      middleColumnIndex = Math.floor(middleColumnIndex % n);
    }
  }
  return matrix;
}
function init() {
  try {
    console.log('magic square', genMagicSquare(7));
  } catch (e) {
    console.log(e);
  }
}

init();
