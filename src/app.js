require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const cors = require('cors')
const errorHandler = require('errorhandler')


const {
    env: { PORT },
} = process

const badgeController = require('./controller')

const app = express()
app.use(cors())

app.get('/', badgeController.badge)

app.use(errorHandler())

http.createServer(app).listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})

