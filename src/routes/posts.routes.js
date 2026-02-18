const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts.controller");

// IMPORTANT: Static routes first
router.get("/", postController.getAllPosts);

// Dynamic route
router.get("/:postId", postController.getPostById);

module.exports = router;
