
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValue1'},
        {id: 2, name: 'rowValue2'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
