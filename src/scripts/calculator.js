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
