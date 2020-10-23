const chai = require('chai')
const { assert } = chai
const {
    getKyuColor,
    findInObj,
    progressBar,
    REQUIRED_SCORE
} = require('./index')

describe('getKyuColor()', () => {
    const tests = [
        { args: 'white', expected: '#EEEEEE' },
        { args: 'yellow', expected: '#ECB613' },
        { args: 'blue', expected: '#0077EE' },
        { args: 'purple', expected: '#B500ED' }
    ]

    tests.forEach(test => {
        it(`should correctly select ${test.expected} for color ${test.args}`, () => {
            const res = getKyuColor(test.args)
            assert.equal(res, test.expected)
        })
    })

})

describe('findInObj()', () => {
    const queries = {
        name_only: '',
        alias_only: ''
    }
    const tests = [
        { arg: 'name_only', expected: true },
        { arg: 'alias_only', expected: true },
        { arg: 'peanut_butter', expected: false }
    ]
    tests.forEach(test => {
        it(`Return correct Boolean type if key exists. Expect ${test.arg} to be ${test.expected}`, () => {
            const res = findInObj(queries, test.arg)
            assert.strictEqual(res, test.expected)
        })
    })
})

describe('progressBar()', () => {
    const test = [
        { arg: [-8, 15], expected: {} },
        { arg: [], expected: {} }

    ]
})
