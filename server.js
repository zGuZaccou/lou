const express = require('express');
const path = require('path');

const app = express();

// State to track which image to serve
let toggleState = false;

// Serve the image
app.get('/image.png', (req, res) => {
  // Determine which image to serve based on toggleState
  const imageToServe = toggleState ? 'image2.png' : 'image.png';
  toggleState = !toggleState; // Toggle the state for the next request

  // Send the image
  res.sendFile(path.join(__dirname, imageToServe));
});

// Serve static files (optional, for testing purposes)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
