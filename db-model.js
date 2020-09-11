const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    getResources
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