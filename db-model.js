const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks,
    assignResource,
    getResourceByProject
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

function assignResource(assignment) {
    return db('project_resources').insert(assignment)
        .then(() => {
            return db('resources').where({ id: assignment.resource_id })
        })
}

function getResourceByProject(id) {
    return db('project_resources')
        .join('resources', 'project_resources.resource_id', '=', 'resources.id')
        .join('projects', 'project_resources.project_id', '=', 'projects.id')
        .where({ project_id: id })
        .select(
            'name as projectName',
            'resourceName',
            'resource_id'
        )
}