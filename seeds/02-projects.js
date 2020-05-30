
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, projects_name: 'house'},
        {id: 2, projects_name: 'pool'},
        
      ]);
    });
};
