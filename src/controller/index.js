const getUserData = require('../fetcher/getUserData')
const renderBadge = require('../views/renderBadge')
const DEV = {
    username: 'vanhaaggen',
    name: 'Christian Haag',
    honor: 135,
    clan: 'SelfClan',
    leaderboardPosition: 231907,
    skills: ['javascript'],
    ranks: {
        overall: { rank: -6, name: '6 kyu', color: 'yellow', score: 109 },
    }
}


exports.badge = async (req, res, next) => {
    const queries = req.query
    res.setHeader("Content-Type", "image/svg+xml")
    if (Object.keys(queries).length === 0) {
        res.send('Not founddddd')
    } else {

        try {
            const data = await getUserData(queries.username)//---> Commented out for developement

            res.send(renderBadge(data, queries))

        } catch (error) {
            next(error)
        }
    }
}


