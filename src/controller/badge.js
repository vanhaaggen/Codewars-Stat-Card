const getUserData = require('../logic/getUserData')
const template = require('../views/layouts/main')

exports.badge = async (req, res, next) => {
    const queries = req.query
    if (Object.keys(queries).length === 0) {
        res.render('partial-badge', {
            condition: false
        })

    } else {

        try {
            const data = await getUserData(queries.username)
            console.log(data)
            res.render('home', {
                condition: true,
                darkMode: queries.darkMode == "true",
                title: 'Hello, Handlebars',
                username: data.name,
                honor: data.honor,
                kyu: data.ranks.overall.name
            })

        } catch (error) {
            next(error)
        }
    }
}


