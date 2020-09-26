const it = require('ava');
const flip = require('./flip');

const func = (a, b, c, d, e) => [a, b, c, d, e];

it('flips the first two parameters if passed no arguments', (t) => {
  const flipped = flip(func);
  const actual = flipped(1, 2, 3, 4, 5);
  const expected = [2, 1, 3, 4, 5];
  t.deepEqual(actual, expected, 
    'should flip first two parameters'
  );
});

it('flips nothing if passed 0 as second argument', (t) => {
  const flipped = flip(func, 0);
  const actual = flipped(1, 2, 3, 4, 5);
  const expected = func(1, 2, 3, 4, 5);
  t.deepEqual(actual, expected, 
    'should flip first three parameters'
  );
});

it('flips nothing if passed 1 as second argument', (t) => {
  const flipped = flip(func, 1);
  const actual = flipped(1, 2, 3, 4, 5);
  const expected = func(1, 2, 3, 4, 5);
  t.deepEqual(actual, expected, 
    'should flip first three parameters'
  );
});

it('flips the first three parameters if passed 3 as second argument', (t) => {
  const flipped = flip(func, 3);
  const actual = flipped(1, 2, 3, 4, 5);
  const expected = [3, 2, 1, 4, 5];
  t.deepEqual(actual, expected, 
    'should flip first three parameters'
  );
});

it('flips the second and third parameters if passed 2 as second and 1 as third argument', (t) => {
  const flipped = flip(func, 2, 1);
  const actual = flipped(1, 2, 3, 4, 5);
  const expected = [1, 3, 2, 4, 5];
  t.deepEqual(actual, expected, 
    'should flip second and third parameters'
  );
});

it('throws a typeError if passed non-function as first argument', (t) => {
  const errorTypes = [{}, [], 'string', 1, true, NaN, undefined, null];
  const correctTypes = [func];
  t.plan(errorTypes.length + correctTypes.length);

  errorTypes.forEach((type) => {
    t.throws(() => { 
      flip(type)
    }, { 
      instanceOf: TypeError, 
      message: `Expected function but received ${typeof type}.` 
    }, 
    `should throw TypeError if passed ${typeof type}`);
  
  });

  correctTypes.forEach((type) => {
    t.notThrows(() => { 
      flip(type)
    },
    `should not throw TypeError if passed ${typeof type}`);
  })
});

it('throws a typeError if not passed number or undefined as second argument', (t) => {
  const correctFirstParam = func;

  const errorTypes = [{}, [], 'string', () => { }, true, NaN, null];
  const correctTypes = [1, undefined];

  t.plan(errorTypes.length + correctTypes.length);

  errorTypes.forEach((type) => {
    t.throws(() => { 
      flip(correctFirstParam, type);
    }, { 
      instanceOf: TypeError, 
      message: `Expected number but received ${typeof type}.` 
    }, 
    `should throw TypeError if passed ${typeof type}`);
  });

  correctTypes.forEach((type) => {
    t.notThrows(() => { 
      flip(correctFirstParam, type);
    },
    `should not throw TypeError if passed ${typeof type}`);
  })
});

it('throws a typeError if not passed number or undefined as third argument', (t) => {
  const correctFirstParam = func;
  const correctSecondParam = 2;

  const errorTypes = [{}, [], 'string', () => { }, true, NaN, null];
  const correctTypes = [1, undefined];

  t.plan(errorTypes.length + correctTypes.length);

  errorTypes.forEach((type) => {
    t.throws(() => { 
      flip(correctFirstParam, correctSecondParam, type);
    }, { 
      instanceOf: TypeError, 
      message: `Expected number but received ${typeof type}.` 
    }, 
    `should throw TypeError if passed ${typeof type}`);
  
  });

  correctTypes.forEach((type) => {
    t.notThrows(() => { 
      flip(correctFirstParam, correctSecondParam, type);
    },
    `should not throw TypeError if passed ${typeof type}`);
  });
});

it('throws a rangeError if required to flip non-existent parameters', (t) => {
  t.plan(2);

  t.throws(() => {
    flip(func, 6);
  }, {
    instanceOf: RangeError,
    message: 'Attempting to flip 6 parameters from index 0, but function has only 5 parameters.'
  },
  'should throw RangeError if required to flip non-existant parameters');

  t.throws(() => {
    flip(func, 4, 3);
  }, {
    instanceOf: RangeError,
    message: 'Attempting to flip 4 parameters from index 3, but function has only 5 parameters.'
  },
  'should throw RangeError if required to flip non-existant parameters');
});

