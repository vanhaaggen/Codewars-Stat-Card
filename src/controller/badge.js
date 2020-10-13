const getUserData = require('../fetcher/getUserData')
const renderBadge = require('../views/renderBadge')


exports.badge = async (req, res, next) => {
    const queries = req.query
    res.setHeader("Content-Type", "image/svg+xml")
    if (Object.keys(queries).length === 0) {
        res.send('Not founddddd')

    } else {

        try {
            const data = await getUserData(queries.username)
            console.log(queries)
            res.send(renderBadge(data, queries))

        } catch (error) {
            next(error)
        }
    }
}


