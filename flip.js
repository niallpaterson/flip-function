const flip = (f, n = 2, m = 0) => (...a) => f(
  ...a.filter((x, i) => i < m), 
  ...a.filter((x, i) => i >= m  && i < n + m).reverse(),
  ...a.filter((x, i) => i >= n + m),
);

module.exports = (f, n = 2, m = 0) => {
  if (typeof f !== 'function') {
    throw new TypeError(`Expected function but recieved ${typeof f}.`);
  } 

  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError(`Expected number but recieved ${typeof n}.`);
  }

  if (typeof m !== 'number' || isNaN(m)) {
    throw new TypeError(`Expected number but recieved ${typeof m}.`);
  }

  return flip(f, n, m);
};
