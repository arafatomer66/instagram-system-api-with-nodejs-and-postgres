const knex = require('../../knexfile');
const db = require('knex')(knex.development);

class User {
  static async getAllUsers() {
    return db.select('*').from('users');
  }

  static async getUserById(id) {
    return db('users').where({ id }).first();
  }

  static async createUser(user) {
    return db('users').insert(user).returning('*');
  }

  static async updateUser(id, user) {
    return db('users').where({ id }).update(user).returning('*');
  }

  static async deleteUser(id) {
    return db('users').where({ id }).del();
  }
}

module.exports = User;
