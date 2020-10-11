const fetch = require('cross-fetch')
const URL = 'https://www.codewars.com/api/v1/users/'

module.exports = function (username) {
    if (!username) throw new Error('username parameter is missing')

    return (async () => {
        const response = await fetch(`${URL}${username}`)

        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        }
        const data = await response.json()
        return data
    })()

}