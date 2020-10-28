const { fetchUser } = require('../utils/fetcher')
const renderSVG = require('./renderSVG')

const DEV = {
    username: 'vanhaaggen',
    name: 'Christian Haag',
    honor: 135,
    clan: 'SelfClan',
    leaderboardPosition: 231907,
    skills: ['javascript'],
    ranks: {
        overall: { rank: -6, name: '6 kyu', color: 'yellow', score: 149 },
        languages: {
            lua: { score: 17856 },
            cfml: { score: 17856 },
            crystal: { score: 17856 }
        }
    },
    codeChallenges: {
        totalAuthored: 0,
        totalCompleted: 21
    }
}

module.exports = async (req, res, next) => {
    const queries = req.query
    console.log(req.body)

    res.setHeader("Content-Type", "image/svg+xml")
    res.header('Cache-Control', 'no-cache');


    if (Object.keys(queries).length === 0) {
        res.send('Not founddddd')
    } else {

        try {
            const data = await fetchUser(queries.username)//---> Commented out for developement
            res.send(renderSVG(data, queries))

        } catch (error) {
            next(error)
        }
    }
}


