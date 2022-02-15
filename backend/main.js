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

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    console.log(process.env.PGUSER);
})
