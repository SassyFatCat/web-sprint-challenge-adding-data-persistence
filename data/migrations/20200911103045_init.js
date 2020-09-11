exports.up = function(knex) {
  return knex.schema
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string("taskDescription", 255).notNullable().index().unique();
            tbl.string("notes", 255).index().unique();
            tbl.integer("project_id").unsigned().notNullable().references('id').inTable('projects');
            tbl.boolean("completed").default(false)
    })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("name", 255).notNullable().index().unique();
            tbl.string("description", 255).index().unique();
    })
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("name", 255).notNullable().index().unique();
            tbl.string("description", 255).index().unique();
            tbl.boolean("completed").default(false);
    })
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
