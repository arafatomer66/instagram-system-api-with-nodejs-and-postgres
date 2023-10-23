const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../../knexfile').development);

// ... Other routes ...

// Get all users using raw SQL
router.get('/', async (req, res) => {
  try {
    // Use Knex.raw to execute a raw SQL query to select all users
    const result = await knex.raw('SELECT * FROM users');

    if (result.rows.length > 0) {
      res.json(result.rows); // Respond with all users' data
    } else {
      res.sendStatus(404); // No users found
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Internal server error
  }
});

module.exports = router;
