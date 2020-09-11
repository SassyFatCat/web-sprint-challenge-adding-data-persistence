const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
            .then(() => {
            return getResources()
            })
}

function getResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects')
        .insert(project)
            .then(() => {
                return getProjects()
            })
}

function getProjects() {
    return db('projects')
}

function addTask(task) {
    return db('tasks')
        .insert(task)
            .then(() => {
                return getTasks()
            })
}

function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select(
            'tasks.id as taskID',
            'tasks.taskDescription',
            'projects.name as projectName',
            'projects.description as projectDescription',
            'tasks.completed as taskCompleted',
            'tasks.notes as taskNotes'
        )
}