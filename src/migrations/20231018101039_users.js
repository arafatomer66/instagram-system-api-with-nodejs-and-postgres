/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table users (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
//     updated_at timestamp with time zone Default current_timestamp,
//     username varchar(30) not null,
//     bio varchar(400) default '',
// 	avatar varchar(200),
// 	phone varchar(25),
// 	email varchar(15),
// 	status varchar(15),
// 	password varchar(50)
// 	check(coalesce(phone, email) is not null),
// 	check(coalesce(email, password) is not null), 
// )
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('username', 30).notNullable();
      table.string('bio', 400).defaultTo('');
      table.string('avatar', 200);
      table.string('phone', 50);
      table.string('email', 50);
      table.string('status', 50);
      table.string('password', 50);
    })
    // .raw('ALTER TABLE users ADD CONSTRAINT coalesce_check1 CHECK (coalesce(phone, email) is not null)')
    // .raw('ALTER TABLE users ADD CONSTRAINT coalesce_check2 CHECK (coalesce(email, password) is not null)');
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };