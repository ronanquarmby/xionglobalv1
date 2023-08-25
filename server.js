const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1234;

// Serve static assets from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests for your app's routes
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/hosted-checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ... Handle other routes similarly ...

// Catch-all route for handling 404 errors
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
