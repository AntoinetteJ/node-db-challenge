
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('tasks_name', 128).notNullable();
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('projects_name', 128);
        tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resources_name', 128);
        tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
    })
  };
  
  exports.down = function(knex) {
    return knex. schema.dropTableIfExists('projects')
    .dropTableIfExists('tasks')
  };
