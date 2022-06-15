export default function capitalize(string) {
    if (typeof string === 'string') {
        const firstCharacter = string.trimStart().slice(0, 1);

        if (!Number.isNaN(Number(firstCharacter))) { return 'Not a letter'; }

        const newString = string.replace(firstCharacter, firstCharacter.toUpperCase());
        return newString;
    }
    return 'Not a string';
}
