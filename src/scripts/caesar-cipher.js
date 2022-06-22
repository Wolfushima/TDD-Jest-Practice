const isLetter = (string) => {
    if ((/[a-zA-Z]/).test(string)) {
        return true;
    }
    return false;
};

const isLowerCase = (string) => {
    if (string.toLowerCase() === string) {
        return true;
    }
    return false;
};

const isUpperCase = (string) => {
    if (string.toUpperCase() === string) {
        return true;
    }
    return false;
};

export default function caesarCipher(string) {
    if (typeof string !== 'string') { return 'Only Strings'; }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetCapitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const arrayFromString = Array.from(string);
    const newString = [];

    arrayFromString.forEach((character) => {
        if (isLetter(character)) {
            if (isLowerCase(character)) {
                const letterIndex = alphabet.indexOf(character);
                let index = letterIndex + 1;
                if (index > alphabet.length - 1) {
                    index -= alphabet.length;
                }
                newString.push(alphabet[index]);
            }
            if (isUpperCase(character)) {
                const letterIndex = alphabetCapitalized.indexOf(character);
                let index = letterIndex + 1;
                if (index > alphabet.length - 1) {
                    index -= alphabet.length;
                }
                newString.push(alphabetCapitalized[index]);
            }
        } else { newString.push(character); }
    });
    return newString.join('');
}
