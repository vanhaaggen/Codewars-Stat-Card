const fetch = require('cross-fetch')
const simpleIcons = require('simple-icons')

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
        return data
    })()

}

function fetchIcon(iconName) {
    if (!iconName) throw new Error('no logo name queried')
    const icon = simpleIcons.get(iconName)
    return icon
}

module.exports = {
    fetchUser,
    fetchIcon
}