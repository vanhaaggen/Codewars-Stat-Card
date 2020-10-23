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
        overall: { rank: -6, name: '6 dan', color: 'yellow', score: 149 },
        languages: {
            javascript: { score: 17856 },
            ruby: { score: 17856 },
            typescript: { score: 17856 }
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

    if (Object.keys(queries).length === 0) {
        res.send('Not founddddd')
    } else {

        try {
            //const data = await fetchUser(queries.username)//---> Commented out for developement
            res.send(renderSVG(DEV, queries))

        } catch (error) {
            next(error)
        }
    }
}


