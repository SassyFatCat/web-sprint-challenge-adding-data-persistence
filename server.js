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
server.post('/projects', (req, res) => {
    db.addProject(req.body)
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// GET PROJECTS
server.get('/projects', (req, res) => {
    db.getProjects()
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// ADDING TASK
server.post('/tasks', (req, res) => {
    db.addTask(req.body)
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// GET TASKS
server.get('/tasks', (req, res) => {
    db.getTasks()
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// ASSIGN A RESOURCE TO A PROJECT
server.post('/assignResource', (req, res) => {
    db.assignResource(req.body)
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})

// GET RESOURCES FOR A PROJECT
server.get('/projects/:id/resources', (req, res) => {
    const id = Number(req.params.id);
    db.getResourceByProject(id)
        .then(result => res.status(200).json({ data: result }))
        .catch(err => res.status(500).json({ error: "Server error" }))
})


module.exports = server;