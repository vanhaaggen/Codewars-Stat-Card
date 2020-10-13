require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const cors = require('cors')
const exphbs = require('express-handlebars')
const errorHandler = require('errorhandler')


const {
    env: { PORT },
} = process

/**
 * Controller (route handler).
 */
const badgeController = require('./controller/badge')

/**
 * Create Express server.
 */
const app = express()

/**
 * Express configuration.
 */
app.set('views', path.resolve(__dirname, 'views',))//Tells express where the view folder is
app.engine('handlebars', exphbs({ extname: '.handlebars', defaultLayout: 'main' }))//Associates .hbs files with the Handlebars engine and defines layout file and its folder
app.set('view engine', 'handlebars')//Tells express that you're going to use Handlebars templating engine
app.use(express.static(__dirname + '/public'))//search for the style.css file in /public
app.use(cors())

/**
 * App route
 */
app.get('/', badgeController.badge)

/**
 * Error handler.
 */
app.use(errorHandler())

/**
 * Start Express server
 */
http.createServer(app).listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})

