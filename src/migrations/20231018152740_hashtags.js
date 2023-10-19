/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table hashtags (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
// 	title varchar(20) not null unique,
// )

exports.up = function(knex) {
    return knex.schema.createTable('hashtags', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('title', 20).notNullable().unique();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('hashtags');
  };