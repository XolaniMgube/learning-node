const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {

    // Set header content type..............................
    // For writing plain text...............................
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Hello dawg')
    // res.end()

    // for writing html text...........................
    // res.setHeader('Content-Type', 'text/html')
    // res.write('Fede Fede')
    // res.write('<p>Xolani</p>')
    // res.end()

    //For sending an html file 
    res.setHeader('Content-Type', 'text/html')

    let path = '../views/'

    if (req.url == '/') {
        path += 'index.html'
        res.statusCode = 200
    } else if (req.url == '/about') {
        path += 'about.html'
         res.statusCode = 200;
    } else {
        path += '404.html'
         res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end() // we can also put data inside the end brackes it will still work
        }
    })
})

// Status Codes
// 100 Range - information responses
// 200 Range - success codes
// 300 Range - codes for redirects
// 400 Range - user or clients error codes
// 500 Range - server error codes 

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})