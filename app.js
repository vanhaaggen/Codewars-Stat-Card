const http = require('https')
const path = require('path')
const express = require('express')
const getUserData = require('./logic/getUserData')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const app = express()

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/' }))//Associates .hbs files with the Handlebars engine and defines layout file and its folder
app.set('views', path.resolve(__dirname, 'views'))//Tells express where the view folder is
app.set('view engine', 'hbs')//Tells express that you're going to use Handlebars templating engine

app.use('/public', express.static("public"))//search for the style.css file in /public

app.use(cors())
app.use('/', routes)


app.use(function (req, res) {
    res.status(404).render("404")
})


http.createServer(app).listen(8080, () => {
    console.log(`Server up and running on port 8080`)
})