/*HTTP demo*/
/*
    const http = require('http')
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.write('Hello world')
            res.end()
        }
        else {
            res.write('using another domain')
            res.end()
        }
    })
    server.listen('1000')
*/

//serving static files
/*
    const http = require('http')
    const fs = require('fs')

    http.createServer((req, res) => {
        const readstream = fs.createReadStream('read.txt')
        res.writeHead(200, { 'content-type': 'text/plain' })
        readstream.pipe(res)
    }).listen(3000)
*/

//demo for express framework

/*
        const express = require('express')
        const app = express()
        app.get('/', (req, res) => {
            res.send("hello from express")
        })
        app.listen(3000)

        app.get('/example', (req, res) => {
            res.send('Example')
        })

        app.get('/example/:name/:age', (req, res) => {
            console.log(req.params)
            console.log(req.query)
            res.send(req.params.name + "" + req.params.age)
        })
*/

//serving static file using express

/*
        const express = require('express')
        const path = require('path')
        const app = express()
        app.use('/public', express.static(path.join(__dirname, 'static')))
        //for alias
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'static', 'index.html'))
        })
        app.listen(3000)
*/
const http = require('http')
const fs = require('fs')
const { dirname } = require('path')

var server = http.createServer((req, res) => {
    if (req.url == '/') {
        console.log(req.url)
        res.writeHead(200, { 'content-type': 'text/html' })
        var read = fs.createReadStream(__dirname + '/static/index.html')
        //console.log(__dirname)
        read.pipe(res)
    }
    else {
        console.log(req.url)
        res.writeHead(404, { 'content-type': 'text/html' })
        fs.createReadStream(__dirname + '/static/error.html').pipe(res)
    }
})

server.listen(1000)