require('dotenv').config();
const express = require('express');
const connectToMongo = require('./config/database');  // Adjust path as necessary
const userRoutes = require('./routers/userRouter');    // Example route


const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
      await connectToMongo(); // Establish MongoDB connection
      app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
      console.error('Unable to connect to MongoDB', error);
      process.exit(1);
    }
  };

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/', userRoutes); // Use user routes

startServer();
