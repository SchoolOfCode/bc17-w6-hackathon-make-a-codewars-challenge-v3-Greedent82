import {test, expect} from 'vitest'
import {clefairyWord, dupes} from './clefairy.js'

test('calculate scrabble score for longer words (a)', () => {
     expect(clefairyWord('fireclay')).toBe('Perfect anagram! Excellent job!');
        expect(clefairyWord('cleffa')).toBe(20);
        expect(clefairyWord('ambivalent')).toBe(17);
        expect(clefairyWord('clefairy')).toBe(16);
        expect(clefairyWord('unbeknownst')).toBe(20);
     })