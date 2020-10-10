const { expect } = require('chai')
const getUserData = require('./getUserData')

describe('fetch User', () => {
    const URL = 'https://www.codewars.com/api/v1/users/'
    const username = 'vanhaaggen'

    it('should fail on empty username', () => {
        expect(() => getUserData()
        ).to.throw('empty username')
    })

    it('should return data', async () => {
        const user = await getUserData(username)

        expect(user.username).to.equal('vanhaaggen')
        expect(user.name).to.equal('Christian Haag')
    })
})