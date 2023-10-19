/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table hastags_posts (
//     id serial primary key,
// 	hashtag_id integer not null references hastags(id) on delete cascade,
// 	post_id integer not null references posts(id) on delete cascade,
// 	unique(hashtag_id,post_id)
// )

exports.up = function(knex) {
    return knex.schema.createTable('hashtags_posts', function(table) {
      table.increments('id').primary();
      table.integer('hashtag_id').notNullable().references('id').inTable('hashtags').onDelete('CASCADE');
      table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('CASCADE');
      
      // Add a unique constraint
      table.unique(['hashtag_id', 'post_id']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('hashtags_posts');
  };