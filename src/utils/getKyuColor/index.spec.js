const chai = require('chai')
const { assert } = chai
const getKyuColor = require('./index')

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