// GET all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      data: {
        posts
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts"
    });
  }
};


// GET single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    res.status(200).json({
      success: true,
      data: {
        post
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch post"
    });
  }
};


module.exports = {
  getAllPosts,
  getPostById,
};
