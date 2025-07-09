import express from "express";
import { posts, comments } from "./posts.js";

// For access parent postId param
const router = express.Router({ mergeParams: true });

// Middleware -> Validate that postId exists
router.use((req, res, next) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find((p) => p.id === postId);

  if (!post) return res.status(404).json({ error: "Post not found" });

  // Add post to request object for use in route handlers
  req.post = post;
  next();
});

// GET / - get comments for post
router.get("/", (req, res) => {
  const { postId } = req.params;
  res.json(comments[postId] || []);
});

// POST / - add comment to post
router.post("/", (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;

  const newComment = { id: Date.now(), text };

  // Initialize comments array if it doesn't exist
  comments[postId] = comments[postId] || [];

    // Add new comment
  comments[postId].push(newComment);

  res.status(201).json(newComment);
});

export default router;
