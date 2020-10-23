require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const cors = require('cors')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require("./routes")
const {
    env: { PORT },
} = process



const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/api', routes)

app.use(errorHandler())

http.createServer(app).listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})

