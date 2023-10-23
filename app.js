const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

// Middleware for JSON request bodies
app.use(express.json());

// Mount the "users" routes
app.use('/api/users', require('./src/routes/users'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
