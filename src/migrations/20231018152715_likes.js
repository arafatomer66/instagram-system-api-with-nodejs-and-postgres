/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table likes (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
// 	user_id integer not null references users(id) on delete cascade,
// 	post_id integer references posts(id) on delete cascade,
// 	comment_id integer references comments(id) on delete cascade,
// 	check(
// 		coalesce((post_id)::boolean::integer, 0)
// 		+
// 		coalesce((comment_id)::boolean::integer, 0)
// 		= 1
// 	)
// )

exports.up = function(knex) {
    return knex.schema.createTable('likes', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
      table.integer('comment_id').references('id').inTable('comments').onDelete('CASCADE');
  
      knex.schema.raw('ALTER TABLE "likes" ADD CONSTRAINT check_post_comment CHECK (coalesce("post_id"::boolean::integer, 0) + coalesce("comment_id"::boolean::integer, 0) = 1)');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  };
  
