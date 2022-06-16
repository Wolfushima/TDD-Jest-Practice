# TDD-Jest-Practice

Assigment to practice **Test Driven Development** using JavaScript testing framework **Jest**.

## Capitalize

Function that takes a string and returns it with the first character capitalized.

> capitalize.js

```javascript
export default function capitalize(string) {
  if (typeof string === 'string') {
    const firstCharacter = string.trimStart().slice(0, 1);

    if (!Number.isNaN(Number(firstCharacter))) {
      return 'Not a letter';
    }

    const newString = string.replace(
      firstCharacter,
      firstCharacter.toUpperCase()
    );
    return newString;
  }
  return 'Not a string';
}
```

> capitalize.test.js

```javascript
import capitalize from '../scripts/capitalize';

test('First character of a string capitalized', () => {
  expect(capitalize('test')).toBe('Test');
});

test('Not a letter', () => {
  expect(capitalize('5')).toBe('Not a letter');
});

test('Not a string', () => {
  expect(capitalize(5)).toBe('Not a string');
});

test('Not a string', () => {
  expect(capitalize({ object: 'test' })).toBe('Not a string');
});

test('Not whitespaces at the start', () => {
  expect(capitalize('   test')).toBe('   Test');
});

test('More than one word', () => {
  expect(capitalize('test is a test')).toBe('Test is a test');
});
```

## Reverse String

Function that takes a string and returns it reversed.

> reverse-string.js

```javascript
export default function reverseString(string) {
  if (typeof string === 'string') {
    const newString = string.split('').reverse().join('');
    return newString;
  }
  return 'Not a string';
}
```

> reverse-string.test.js

```javascript
import reverseString from '../scripts/reverse-string';

test('Takes a string and return it reversed', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Works with a string of numbers', () => {
  expect(reverseString('12345')).toBe('54321');
});

test('Not a string', () => {
  expect(reverseString(12345)).toBe('Not a string');
});

test('Not a string', () => {
  expect(reverseString({ object: 'test' })).toBe('Not a string');
});

test('Works with white spaces', () => {
  expect(reverseString('   test')).toBe('tset   ');
});

test('Works with capital letters', () => {
  expect(reverseString('This is a Test')).toBe('tseT a si sihT');
});

test('Works with more than one word', () => {
  expect(reverseString('This is a Test')).toBe('tseT a si sihT');
});
```

## Calculator

Object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

> calculator.js

```javascript
const calculator = {
  isNumber: (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
      return true;
    }
    return false;
  },
  add: (x, y) => (calculator.isNumber(x, y) ? x + y : 'Only Numbers'),
  subtract: (x, y) => (calculator.isNumber(x, y) ? x - y : 'Only Numbers'),
  divide: (x, y) => (calculator.isNumber(x, y) ? x / y : 'Only Numbers'),
  multiply: (x, y) => (calculator.isNumber(x, y) ? x * y : 'Only Numbers'),
};

export default calculator;
```

> calculator.test.js

```javascript
import calculator from '../scripts/calculator';

test('Return add, subtract, divide and multiply retult from two numbers', () => {
  expect(calculator.add(3, 3)).toBe(6);
  expect(calculator.subtract(3, 3)).toBe(0);
  expect(calculator.divide(3, 3)).toBe(1);
  expect(calculator.multiply(3, 3)).toBe(9);
});

test('Only Numbers', () => {
  expect(calculator.add('3', 3)).toBe('Only Numbers');
  expect(calculator.subtract(3, 'test')).toBe('Only Numbers');
  expect(calculator.divide('3', '3')).toBe('Only Numbers');
  expect(calculator.multiply('3', 3)).toBe('Only Numbers');
});

test('Works with negative values', () => {
  expect(calculator.add(-3, 3)).toBe(0);
  expect(calculator.subtract(-3, 3)).toBe(-6);
  expect(calculator.divide(-3, 3)).toBe(-1);
  expect(calculator.multiply(-3, -3)).toBe(9);
});
```
