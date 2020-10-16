const chai = require('chai')
const { expect } = chai
const fetch = require('cross-fetch')
const chaiFetch = require('chai-fetch')
const getUserData = require('./index')
chai.use(chaiFetch)


describe('test getUserData()', () => {
    const URL = 'https://www.codewars.com/api/v1/users/'
    const username = 'vanhaaggen'
    const emptyQuery = '?username='

    it('should fail on empty username parameter', () => {
        expect(() => getUserData()
        ).to.throw('username parameter is missing')
    })

    it('should return data', async () => {
        const user = await getUserData(username)

        expect(user.username).to.equal('vanhaaggen')
        expect(user.name).to.equal('Christian Haag')
    })

    it('Fetch should return status 404 on empty username query', async () => {
        await expect(fetch(`${URL}${emptyQuery}`)).to.have.status(404)
    })


})