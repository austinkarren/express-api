const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const port = 3000;

// Apply cors middleware
app.use(cors());

// Define a sample route
app.get('/api', (req, res) => {
  res.json(
    { 
        message: 'Hello from your own API, Austin!',
        messageTwo: "Message Two!"
    }
);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
