/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Create Table followers (
//     id serial primary key,
//     created_at timestamp with time zone Default current_timestamp,
// 	leader_id integer not null references users(id) on delete cascade,
// 	follower_id integer not null references users(id) on delete cascade,
// 	unique(leader_id, follower_id)
// )

exports.up = function (knex) {
  return knex.schema.createTable("followers", function (table) {
    table.increments("id").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .integer("leader_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("follower_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    // Add a unique constraint
    table.unique(["leader_id", "follower_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("followers");
};
