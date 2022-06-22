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

## Caesar Cipher

Function that takes a string and returns it with each character “shifted”.

> caesar-cipher.js

```javascript
const isLetter = (string) => {
  if (/[a-zA-Z]/.test(string)) {
    return true;
  }
  return false;
};

const isLowerCase = (string) => {
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
};

const isUpperCase = (string) => {
  if (string.toUpperCase() === string) {
    return true;
  }
  return false;
};

export default function caesarCipher(string) {
  if (typeof string !== 'string') {
    return 'Only Strings';
  }

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const alphabetCapitalized = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const arrayFromString = Array.from(string);
  const newString = [];

  arrayFromString.forEach((character) => {
    if (isLetter(character)) {
      if (isLowerCase(character)) {
        const letterIndex = alphabet.indexOf(character);
        let index = letterIndex + 1;
        if (index > alphabet.length - 1) {
          index -= alphabet.length;
        }
        newString.push(alphabet[index]);
      }
      if (isUpperCase(character)) {
        const letterIndex = alphabetCapitalized.indexOf(character);
        let index = letterIndex + 1;
        if (index > alphabet.length - 1) {
          index -= alphabet.length;
        }
        newString.push(alphabetCapitalized[index]);
      }
    } else {
      newString.push(character);
    }
  });
  return newString.join('');
}
```

> caesar-cipher.test.js

```javascript
import caesarCipher from '../scripts/caesar-cipher';

test('Returns a string with each character shifted', () => {
  expect(caesarCipher('abc')).toBe('bcd');
});

test('Works with z', () => {
  expect(caesarCipher('zabc')).toBe('abcd');
});

test('Works with every letter in the alphabet', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('Works with capital letters', () => {
  expect(caesarCipher('zAbCZ')).toBe('aBcDA');
});

test('Works with special characters and spaces', () => {
  expect(caesarCipher('abc !#$%...wXyZ')).toBe('bcd !#$%...xYzA');
});

test('Works with numbers', () => {
  expect(caesarCipher('zAbCZ123')).toBe('aBcDA123');
});

test('Only Strings', () => {
  expect(caesarCipher(123)).toBe('Only Strings');
});
```

## Analyze Array

Function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

> analyze-array.js

```javascript
const notValidArray = (array) =>
  array.some((element) => typeof element !== 'number');

export default function analyzeArray(array) {
  if (Array.isArray(array)) {
    if (notValidArray(array)) {
      return 'Only numbers';
    }
    const sortedArray = array.sort((a, b) => a - b);
    const average =
      array.reduce((previous, current) => previous + current) / array.length;
    const min = sortedArray[0];
    const max = sortedArray[array.length - 1];
    const { length } = array;

    return {
      average,
      min,
      max,
      length,
    };
  }
  return 'Not an array';
}
```

> analyze-array.test.js

```javascript
import analyzeArray from '../scripts/analyze-array';

test('Return object with average, min, max and length properties', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Not an array', () => {
  expect(analyzeArray('1,8,3,4,2,6')).toBe('Not an array');
});

test('Only Numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toBe('Only numbers');
});
```
