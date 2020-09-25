# 🙃 Flip-function

Given a function, returns an analagous function with some parameters reversed. Inspired by Haskell's `flip`. Grants flexibility for partial application.

## API

### Syntax

````JavaScript
flip(func[, flipCount[, startIndex]])
````

### Parameters

`func`

Required. A function, the parameters of which are to be reversed.

`flipCount`

Optional. A number specifying the number of parameters to reverse. Defaults to 2.

`startIndex`

Optional. A number specifying the index of the parameter at which to start the reverse. Indexing is zero-based and inclusive. Defaults to 0.

### Return

A variant of the argument function with the specified parameters reversed.

## Examples

````JavaScript
const myFunc = (a, b, c, d) => [a, b, c, d];

// only passing function

const flipIt = flip(myFunc);

flipIt(1, 2, 3, 4) // [ 2, 1, 3, 4 ];

// passing flip count

const flipItAgain = flip(myFunc, 4);

flipItAgain(1, 2, 3, 4) // [ 4, 3, 2, 1 ];

// passing flip count and start index

const flipItOnceMore = flip(myFunc, 2, 2);

flipItOnceMore(1, 2, 3, 4) // [ 1, 2, 4, 3];
````

## Test

Tested with [AVA](https://www.npmjs.com/package/ava).

````shell
npm test
````

or

````shell
npx ava
````
