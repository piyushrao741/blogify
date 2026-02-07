const express = require('express');
const app = express();
const PORT = 3000;

// Import post routes
const postRouter = require('./routes/posts.routes');

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount post router
app.use('/api/v1/posts', postRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
