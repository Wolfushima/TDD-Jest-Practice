export default function reverseString(string) {
    if (typeof string === 'string') {
        const newString = string.split('').reverse().join('');
        return newString;
    }
    return 'Not a string';
}
