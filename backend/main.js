// const http = require("http");
// const { Client } = require('pg');
//
// http.createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
// }).listen(8081);
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
//
//
// const client = new Client({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,
// })
//
// client.connect()
// client.query('SELECT $1::text as message', ['Connected to Data Base!'], (err, res) => {
//     console.log(err ? err.stack : res.rows[0].message) // Connected to Data Base!
//     client.end()
// })
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    bodyParser.urlencoded({
        extended: true,
    })
    next();
}
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/user', db.getUsers)
app.get('/user/:id', db.getUserById)
app.post('/user', db.createUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    console.log(process.env.PGUSER);
})
