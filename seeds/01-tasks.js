
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, tasks_name: 'pour concrete'},
        {id: 2, tasks_name: 'tile roof'},
        
      ]);
    });
};
