const express = require('express');
const app = express();
const router = express.Router();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for GET request
app.get('/', (req, res) => {
  res.send('Hello World! Nascar!');
});

// REST API routes
// GET, POST, PUT, DELETE operations might correspond to read, create, update, delete operations.

// Example: GET request to retrieve a list of items
app.get('/items', (req, res) => {
  res.status(200).json({ message: 'Getting all items' });
});

// Example: POST request to add a new item
app.post('/items', (req, res) => {
  // Add logic to add item
  res.status(201).json({ message: 'Item added' });
});

// Replace '3000' with the port number you want your server to listen on.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

module.exports = router;