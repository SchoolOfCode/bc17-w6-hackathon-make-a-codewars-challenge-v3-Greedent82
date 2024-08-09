import {expect, test} from 'vitest'
import {cleffaWord} from 'cleffa.js'

//to run these test specifically, you'll need to enter 'npm run test cleffa.test.js' into the console :)

test('Single Letters', () => {
    expect(cleffaWord('C')).toBe('Good job!');
    expect(cleffaWord('l')).toBe('Good job!');
    expect(cleffaWord('E')).toBe('Good job!');
    expect(cleffaWord('f')).toBe('Good job!');
    expect(cleffaWord('A')).toBe('Good job!');
})

    test('strings', () => {
        expect(cleffaWord('Ella')).toBe('Good job!');
        expect(cleffaWord('calf')).toBe('Good job!');
        expect(cleffaWord('flEEce')).toBe('Good job!');
        expect(cleffaWord('ACCEL')).toBe('Good job!');
        expect(cleffaWord('falafel')).toBe('Good job!');
        expect(cleffaWord('AlFalFa')).toBe('Good job!');
        expect(cleffaWord('fae')).toBe('Good job!');
    })

    test('Fails', () => {
        expect(cleffaWord('Greedent')).toBe('Nope');
        expect(cleffaWord('scarcely')).toBe('Nope');
        expect(cleffaWord('TERROR')).toBe('Nope');
        expect(cleffaWord('faketears')).toBe('Nope')
        expect(cleffaWord('Clefairy')).toBe('Nope');
        expect(cleffaWord('x')).toBe('Nope');
        expect(cleffaWord('Mondaze')).toBe('Nope');
    })