const { Router } = require("express")
const url = require('url')
const { ErrorHandler } = require("../helpers/error")
const getUserData = require('../logic/getUserData')

const router = Router()
const data = []


router.get('/', async function (req, res, next) {
    let urlQueries = req.query
    console.log(urlQueries)
    try {
        if (!req.query.username) throw new ErrorHandler(404, "You need to specify username")
        const data = await getUserData(urlQueries.username)
        console.log(data)
        res.render('index', {
            condition: data.length !== 0 ? true : false,
            darkMode: urlQueries.darkMode,
            title: 'Hello, Handlebars',
            username: data.name,
            honor: data.honor,
            kyu: data.ranks.overall.name
        })
        next()
    } catch (error) {
        next(error)
    }

})


module.exports = router