/*
        const express = require('express')
        const app = express()
        const port = 3000
        app.get('/', (req, res) => {
            //res.send("<h1>some HTML</h1>")
            //res.send({ 'some': 'json' })
            res.send('hello')
        })
        app.listen(port)
*/

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
//middlewares
//when someone/something uses 'assets' the following function will fire
//node express.static takes care of the work for us '/assets' matches the route and 'assets' matches the folder
app.use('/assets', express.static('assets'))
/*app.use('/assets', (req, res, next) => {
    console.log(req.url)
    next()
})*/

app.get('/', (req, res) => {
    //res.status(500).send('error')
    //res.status(500).json({ 'message': 'hi' })
    res.send('main page')
    //use locals in ejs file to render the file even if the passed data is undefined
})
app.get('/profile/:name', (req, res) => {
    var data = { age: 20, hobbies: ['drawing', 'games'], job: 'ninja' }
    //to render ejs file
    res.render('index', { person: req.params.name, data: data })
    //to send html file
    //res.sendFile(__dirname + '/static/index.html')
})
//query:as in profiles?name=property&name=property and so on
app.get('/contact', (req, res) => {
    res.render('contact', { res: req.query })
})
//const useRouter = require('./routes/users')

//app.use('/users', useRouter)

app.listen(3000)
