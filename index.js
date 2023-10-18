const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON request bodies
app.use(express.json());

// Mount the "users" routes
app.use('/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
