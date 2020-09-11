const express = require('express');
const server = express();
const db = require('./db-model.js');

server.use(express.json());



server.get('/', (req, res) => {
    res.json({ server: "up" })
})



module.exports = server;