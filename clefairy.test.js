import {test, expect,} from 'vitest'
import {clefairyWord} from './clefairy.js'


//To run these tests specifically you'll have to enter 'npm run test clefairy.test.js' Best of luck :)




//Words that only use letters once and are greater than 6 characters long

test('6 < , anagram', () => {
     expect(clefairyWord('fireclay')).toBe('Perfect anagram! Excellent job!');
     expect(clefairyWord('CLEFAIRY')).toBe('Perfect anagram! Excellent job!');
     expect(clefairyWord('clayier')).toBe('Perfect anagram! Excellent job!');
     expect(clefairyWord('fairLey')).toBe('Perfect anagram! Excellent job!');
     expect(clefairyWord('clarify')).toBe('Perfect anagram! Excellent job!');
     })

//Words that only use letters once and are under 7 characters long
   
test('7 > , anagram', () => {
     expect(clefairyWord('clear')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('laYer')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('I')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('fry')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('rifle')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('flea')).toBe('Perfect anagram! Good job!');
     expect(clefairyWord('Earl')).toBe('Perfect anagram! Good job!');
          })
 
//Words that use letters more than once and are over 6 characters long
   
test('6 < , not anagram', () => {
     expect(clefairyWord('cyclically')).toBe('Excellent job!');
     expect(clefairyWord('Lifecycle')).toBe('Excellent job!');
     expect(clefairyWord('carefree')).toBe('Excellent job!');
     expect(clefairyWord('Airfryer')).toBe('Excellent job!');
     expect(clefairyWord('CYRILLIC')).toBe('Excellent job!');
     expect(clefairyWord('freefall')).toBe('Excellent job!');
     expect(clefairyWord('RiffrAff')).toBe('Excellent job!');
               })

//Words that use letters more than once and are under 7 characters long
   
test('7 > , not anagram', () => {
     expect(clefairyWord('Cleffa')).toBe('Good job!');
     expect(clefairyWord('career')).toBe('Good job!');
     expect(clefairyWord('Reef')).toBe('Good job!');
     expect(clefairyWord('ICICLE')).toBe('Good job!');
     expect(clefairyWord('Lilly')).toBe('Good job!');
     expect(clefairyWord('racEr')).toBe('Good job!');
     expect(clefairyWord('fee')).toBe('Good job!');
               })

//Fails
   
test('Fail', () => {
     expect(clefairyWord('Clefable')).toBe('Womp Womp');
     expect(clefairyWord('PIIPII')).toBe('Womp Womp');
     expect(clefairyWord('CosmicPower')).toBe('Womp Womp');
     expect(clefairyWord('Hydreigon')).toBe('Womp Womp');
     expect(clefairyWord('alleyoop')).toBe('Womp Womp');
     expect(clefairyWord('unbeknownst')).toBe('Womp Womp');
     expect(clefairyWord('Supercalifragilisticexpialidocious')).toBe('Womp Womp');
               })

//Further test cases can be directed here

const testCases = [
     ['AZUMARILL', 'Womp Womp'],
     ['REALLY', 'Good job!'],
     ['Lyrically', 'Excellent job!'],
     ['flare', 'Perfect anagram! Good job!'],
     ['fairley', 'Perfect anagram! Excellent job!'],
                  ];
test.each(testCases)('bank for further test cases if necessary', (word, expectedResult) => {
     expect(clefairyWord(word)).toBe(expectedResult);
});