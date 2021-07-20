function closure() {
  let num = 0;
  let k = 2;
  return function () {
    if (num !== 0) {
      if (num % 5 === 0) {
        k = 3;
        num /= 5;
        return num;
      }
      if (num % 7 === 0) {
        k = 1;
        num -= 7;
        return num;
      }
    }
    num += k;
    return num;
  };
}

const answer = closure();

for (let i = 0; i <= 10; i += 1) {
  console.log(answer());
}
