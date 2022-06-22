import caesarCipher from '../scripts/caesar-cipher';

test('Returns a string with each character shifted', () => {
    expect(caesarCipher('abc')).toBe('bcd');
});

test('Works with z', () => {
    expect(caesarCipher('zabc')).toBe('abcd');
});

test('Works with every letter in the alphabet', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
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
