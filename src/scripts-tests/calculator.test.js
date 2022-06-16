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
