const COUNT = 10000;

const benchmark = (fn) => {
  const begin = process.hrtime.bigint();
  for (let i = 0; i < COUNT; i += 1) {
    fn();
  }
  const end = process.hrtime.bigint();
  const time = `${Number.parseInt(end - begin, 10) / 1e9} seconds`;
  const { memoryUsage } = process;
  const heapUsed = `${(memoryUsage().heapUsed / (1024 * 1024)).toFixed(2)} MB`;
  const rss = `${(memoryUsage().rss / (1024 * 1024)).toFixed(2)} MB`;
  const heapTotal = `${(memoryUsage().heapTotal / (1024 * 1024)).toFixed(2)} MB`;

  return {
    time, heapUsed, heapTotal, rss,
  };
};

module.exports = benchmark;
