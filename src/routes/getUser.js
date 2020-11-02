const { fetchUser } = require('../utils/fetcher')
const renderSVG = require('./renderSVG')
const DEV = require('../assets/testDataObj')

module.exports = async (req, res, next) => {
    const queries = req.query
    console.log(queries)

    res.setHeader("Content-Type", "image/svg+xml")
    res.header('Cache-Control', 'no-store');

    if (Object.keys(queries).length === 0) {
        res.send('Not founddddd')

    } else {
        try {
            const data = await fetchUser(queries.username)//---> Comment out for developement
            res.send(renderSVG(data, queries))

        } catch (error) {
            next(error)
        }
    }
}


