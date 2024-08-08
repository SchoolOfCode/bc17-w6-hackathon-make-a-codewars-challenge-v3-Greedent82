function clefairyWord(word) {
word = word.split('');
let clefairy = ['C' , 'L' , 'E' , 'F' , 'A' , 'I' , 'R' , 'Y']
let matches = []
let result = ''
for (let letter of word) {
    if (clefairy.includes(letter.toUpperCase())) {
        matches.push(letter);
    } else {
        return "Womp Womp";
    }
}
if (dupes(matches) === false) {
    result += 'Perfect anagram! '
}
if (matches.length > 6) {
    result += 'Excellent job!'
}
if (matches.length < 7) {
    result += 'Good job!'
}
return result
}

function dupes(arr) {
    return new Set(arr).size !== arr.length
}