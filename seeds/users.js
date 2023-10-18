exports.seed = function (knex) {
  // Deletes ALL existing entries in the "users" table
  return knex('users').del()
    .then(function () {
      // Inserts seed entries into the "users" table
      return knex('users').insert([
        {
          username: 'user1',
          email: 'user1@example.com',
          created_at: new Date(),
          bio: 'User 1 Bio',
          phone: '123-456-7890',
          password: 'password1',
          status: 'active',
        },
        {
          username: 'user2',
          email: 'user2@example.com',
          created_at: new Date(),
          bio: 'User 2 Bio',
          phone: '987-654-3210',
          password: 'password2',
          status: 'inactive',
        },
        // Add more seed data as needed
      ]);
    });
};
