class MathOperations {
  constructor(num1, num2, sign) {
    this.num1 = num1;
    this.num2 = num2;
    this.sign = sign;
  }

  sum() {
    return this.num1 + this.num2;
  }

  sub() {
    return this.num1 - this.num2;
  }

  mul() {
    return this.num1 * this.num2;
  }

  div() {
    if (this.num2 === 0) {
      throw new Error('Error! Division by zero.');
    }
    return this.num1 / this.num2;
  }

  calculate() {
    let res = '';
    switch (this.sign) {
      case '+':
        res = this.sum();
        break;
      case '-':
        res = this.sub();
        break;
      case '*':
        res = this.mul();
        break;
      case '/':
        res = this.div();
        break;
      default:
        res = 'Operation not specified';
        break;
    }
    return res;
  }

  result() {
    return this.calculate();
  }
}

module.exports = MathOperations;
