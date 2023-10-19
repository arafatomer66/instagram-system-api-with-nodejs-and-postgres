/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table posts (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
//     updated_at timestamp with time zone Default current_timestamp,
// 	caption varchar(200),
// 	url varchar(200) not null,
// 	lat real check(lat is null or (lat >= -90 and lat <=90)),
// 	lng real check(lng is null or (lng >= -180 and lng <= 180)),
// 	user_id integer not null references users(id) on delete cascade
// )

exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('caption', 200);
      table.string('url', 200).notNullable();
      table.float('lat');
      table.float('lng');
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    })
      // Use raw SQL to add check constraints
      .raw('ALTER TABLE posts ADD CONSTRAINT check_lat CHECK (lat IS NULL OR (lat >= -90 AND lat <= 90))')
      .raw('ALTER TABLE posts ADD CONSTRAINT check_lng CHECK (lng IS NULL OR (lng >= -180 AND lng <= 180))');
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('posts');
  };
  