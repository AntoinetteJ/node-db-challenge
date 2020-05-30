
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resources_name: 'Loews'},
        {id: 2, resources_name: 'Home Depot'},
       
      ]);
    });
};
