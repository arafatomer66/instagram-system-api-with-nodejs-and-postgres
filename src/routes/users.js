const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
  const users = await User.getAllUsers();
  res.json(users);
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);
  res.json(user);
});

// Create a new user
router.post('/', async (req, res) => {
  const user = req.body;
  const newUser = await User.createUser(user);
  res.json(newUser);
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await User.updateUser(id, user);
  res.json(updatedUser);
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.deleteUser(id);
  res.sendStatus(204);
});

module.exports = router;