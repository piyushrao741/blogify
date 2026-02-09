// GET all posts
const getAllPosts = async (req, res) => {
  res.json({
    message: "Fetching all posts",
  });
};

// GET single post by ID
const getPostById = async (req, res) => {
  const postId = req.params.postId;

  res.json({
    message: "Fetching data for post with ID: " + postId,
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
