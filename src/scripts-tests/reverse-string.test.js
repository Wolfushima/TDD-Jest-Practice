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
