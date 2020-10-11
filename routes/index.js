const { Router } = require("express")
const { ErrorHandler } = require("../helpers/error")
const getUserData = require('../logic/getUserData')

const router = Router()
const data = []


router.get('/', async function (req, res, next) {
    let queries = req.query


    console.log(typeof queries.darkMode)
    try {
        if (!req.query.username) throw new ErrorHandler(404, "You need to specify username")
        const data = await getUserData(queries.username)
        console.log(data)
        res.render('index', {
            condition: Object.keys(data).length !== 0,
            darkMode: queries.darkMode == "on",
            title: 'Hello, Handlebars',
            username: data.name,
            honor: data.honor,
            kyu: data.ranks.overall.name
        })

    } catch (error) {
        next(error)
    }

})


module.exports = router