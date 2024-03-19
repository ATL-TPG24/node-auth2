const express = require('express');
const router = express.Router();

// Define routes specific to users
router.get('/', (req, res) => {
  res.send('Hello World from User Router!');
});

// Add more user-specific routes as needed here

// Export the router at the end
module.exports = router;
