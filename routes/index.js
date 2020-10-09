const { Router } = require("express")
const url = require('url')
const getUserData = require('../logic/getUserData')

const router = Router()
const userData = []


router.get('/', async function (req, res) {
    let urlQueries = req.query

    try {
        const response = await getUserData(urlQueries.username)
        response && userData.push(response)

        res.render('index', {
            condition: userData.length !== 0 ? true : false,
            darkMode: urlQueries.darkMode,
            title: 'Hello, Handlebars',
            username: userData[0].name,
            honor: userData[0].honor,
            kyu: userData[0].ranks.overall.name
        })

    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

})


module.exports = router