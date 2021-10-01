/*
        const express = require('express')
        const path = require('path')
        const bodyParser = require('body-parser')
        const app = express()
        app.use('/public', express.static(path.join(__dirname, 'static')))
        app.use(bodyParser.urlencoded({ extended: false }))
        //allows to parse url encoded forms
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'static', 'index.html'))
        })
        app.post('/',/*action of html form*//*(req, res) => {
console.log(req.body)
//database
res.send('successful')
})
app.listen(3000)
*/


const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//allows to parse url encoded forms
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})
app.post('/', (req, res) => {
    console.log(req.body)
    //database
    res.json({ success: true })
})
app.listen(3000)
