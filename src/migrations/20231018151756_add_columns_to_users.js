/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.table('users', function(table) {
          table.string('bio');
          table.string('phone');
          table.string('password');
          table.string('status');
          // Add any other columns and constraints you need
        });
      };
      
      exports.down = function(knex) {
        return knex.schema.table('users', function(table) {
          // In the down function, you can reverse the changes by removing the added columns
          table.dropColumn('bio');
          table.dropColumn('phone');
          table.dropColumn('email');
          table.dropColumn('password');
          table.dropColumn('status');
        });
      };