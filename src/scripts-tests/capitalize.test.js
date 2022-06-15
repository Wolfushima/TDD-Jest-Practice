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
