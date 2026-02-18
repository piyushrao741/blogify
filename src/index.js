const express = require("express");
const app = express();

const postRouter = require("./routes/posts.routes");

const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Blogify API!");
});

// Posts routes
app.use("/api/v1/posts", postRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
