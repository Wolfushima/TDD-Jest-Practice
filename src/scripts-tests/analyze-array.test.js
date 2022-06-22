import analyzeArray from '../scripts/analyze-array';

test('Return object with average, min, max and length properties', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4, min: 1, max: 8, length: 6,
    });
});

test('Not an array', () => {
    expect(analyzeArray('1,8,3,4,2,6')).toBe('Not an array');
});

test('Only Numbers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toBe('Only numbers');
});
