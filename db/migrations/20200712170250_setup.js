
exports.up = function (knex) {
  return knex.schema.createTable('markers', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('rating', 4).notNullable();
    table.string('description', 1000);
    table.specificType('latitude', 'double precision').notNullable();
    table.specificType('longitude', 'double precision').notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('markers');
};
