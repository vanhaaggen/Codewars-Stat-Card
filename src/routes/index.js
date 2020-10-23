const { Router } = require("express")
const bodyParser = require("body-parser")

const getUser = require('./getUser')

const router = Router()
const jsonBodyParser = bodyParser.json()

router.get('/', [jsonBodyParser], getUser)


module.exports = router