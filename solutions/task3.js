function crasher(a) {
  // eslint-disable-next-line no-param-reassign
  delete a.bla;
}

const a = {
  bla: 'bla',
};

Object.defineProperty(a, 'bla', {
  configurable: false,
});
crasher(a);

console.log(a);
