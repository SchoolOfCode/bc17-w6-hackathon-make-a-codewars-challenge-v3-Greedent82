export function clefairyWord(word) {

//define some variables I'll need later

let clefairy = ['C' , 'L' , 'E' , 'F' , 'A' , 'I' , 'R' , 'Y']
let matches = []
let result = ''

//redfines word as an array of its composite letters

word = word.split('');

//for loop that iterates through the 'word' array. Elements are set as 'letter'. 
//From there, if the clefairy array has the letter (as an upper case) we're testing...
//It'll shove it in the matches array
//If it encounters a letter not in CLEFAIRY, it'll terminate the entire function (hence the for of)

for (let letter of word) {
    if (clefairy.includes(letter.toUpperCase())) {
        matches.push(letter);
    } else {
        return "Womp Womp";
    }

//Runs the matched letters through the dupes function, if there arent any...
//'Perfect Anagram' is concatonated into result
//I abhor how silly the space in the string looks, but trying to add a space between the two statments 
//if (and only if) both are true would be another like 8 lines of code

}
if (dupes(matches) === false) {
    result += 'Perfect anagram! '
}

// If the array length is greater than 6, then 'Excellent job!' is added to the result variable

if (matches.length > 6) {
    result += 'Excellent job!'
}

//ditto for under 7

if (matches.length < 7) {
    result += 'Good job!'
}
return result
}

//I got this off of stack overflow. All I know is that set is a good way of checking for duplicates in an array

export function dupes(arr) {
    return new Set(arr).size !== arr.length
}