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
