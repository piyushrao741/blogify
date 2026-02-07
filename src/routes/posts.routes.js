const express = require('express');
const router = express.Router();

// import controller
const { getAllPosts } = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/', getAllPosts);

module.exports = router;
