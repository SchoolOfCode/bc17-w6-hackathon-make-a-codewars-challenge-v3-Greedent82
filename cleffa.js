export function cleffaWord(word) {
    let cleffa = ['C', 'L', 'E', 'F', 'A'];
    word = word.split('');
    for (let letter of word) {
        if (!cleffa.includes(letter.toUpperCase())) {
            return 'Nope';
        }
    }
    return 'Good job!';
}

