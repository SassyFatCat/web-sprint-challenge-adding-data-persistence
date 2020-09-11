const express = require('express');
const server = express();
const db = require('./db-model.js');

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ server: "up" })
});

// ADDING RESOURCE
server.post('/resources', (req, res) => {
    db.addResource(req.body)
        .then(result => res.status(201).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// GET RESOURCES
server.get('/resources', (req, res) => {
    db.getResources()
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// ADDING PROJECT

// GET PROJECTS

// ADDING TASK

// GET TASKS



module.exports = server;