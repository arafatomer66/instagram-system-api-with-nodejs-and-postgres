/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
    // Add more data as needed
  ]);
};