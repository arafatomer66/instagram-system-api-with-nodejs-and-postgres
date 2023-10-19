/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table photo_tags (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
//     updated_at timestamp with time zone Default current_timestamp,
// 	user_id integer not null references users(id) on delete cascade,
// 	post_id integer references posts(id) on delete cascade,
// 	x integer not null,
// 	y integer not null,
// 	unique(user_id, post_id)
// )

exports.up = function(knex) {
    return knex.schema.createTable('photo_tags', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
      table.integer('x').notNullable();
      table.integer('y').notNullable();
  
      // Add a unique constraint
      table.unique(['user_id', 'post_id']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('photo_tags');
  };
