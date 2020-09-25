const flip = (f, n = 2, m = 0) => (...a) => f(
  ...a.filter((x, i) => i < m), 
  ...a.filter((x, i) => i >= m  && i < n + m).reverse(),
  ...a.filter((x, i) => i >= n + m),
);

module.exports = flip;
