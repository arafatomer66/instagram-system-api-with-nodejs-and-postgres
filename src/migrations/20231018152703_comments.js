/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table comments (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
//     updated_at timestamp with time zone Default current_timestamp,
// 	contents varchar(240) not null,
// 	user_id integer not null references users(id) on delete cascade,
// 	post_id integer not null references posts(id) on delete cascade,
// )

exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('contents', 240).notNullable();
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  };
  