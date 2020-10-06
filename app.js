const http = require('http')
const path = require('path')
const express = require('express')
const getUserData = require('./logic/getUserData')
const logger = require('morgan')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')


const app = express()

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/' }))//Associates .hbs files with the Handlebars engine and defines layout file and its folder
app.set('views', path.resolve(__dirname, 'views'))//Tells express where the view folder is
app.set('view engine', 'hbs')//Tells express that you're going to use Handlebars templating engine

app.use('/public', express.static("public"))//search for the style.css file in /public

const userData = []
app.locals.userData = userData//Makes userData available in all views

app.get('/', function (req, res) {
    res.render('index', { title: 'Hello, Handlebars', condition: userData.length !== 0 ? true : false, username: userData[0].username, honor: userData[0].honor })
})

app.get('/:username', async function (req, res) {
    const { params: { username } } = req
    try {
        const response = await getUserData(username)
        response && userData.push(response)
        console.log(userData)
        res.redirect("/")

    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

})

app.use(function (req, res) {
    res.status(404).render("404")
})


http.createServer(app).listen(8080, () => {
    console.log(`Server up and running on port 8080`)
})