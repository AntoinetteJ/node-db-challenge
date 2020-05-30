
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('tasks_name', 128).notNullable();
  })
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('projects_id')
      .unsigned()
      .notNullable()
      .reference('id')
      .inTable('tasks');
  })
};

exports.down = function(knex) {
  return knex. schema.dropTableIfExists('projects')
  .dropTableIfExists('tasks')
};
