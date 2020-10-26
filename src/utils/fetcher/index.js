const fetch = require('cross-fetch')


function fetchUser(username) {
    const URL = 'https://www.codewars.com/api/v1/users/'

    if (!username) throw new Error('username parameter is missing')

    return (async () => {
        const response = await fetch(`${URL}${username}`)

        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        }
        const data = await response.json()
        console.log(data)
        return data
    })()

}


module.exports = {
    fetchUser,
}