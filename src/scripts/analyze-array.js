const notValidArray = (array) => array.some((element) => typeof element !== 'number');

export default function analyzeArray(array) {
    if (Array.isArray(array)) {
        if (notValidArray(array)) {
            return 'Only numbers';
        }
        const sortedArray = array.sort((a, b) => a - b);
        const average = array.reduce((previous, current) => previous + current) / array.length;
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
