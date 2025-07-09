import express from "express";
import commentsRouter from "./comments.js";

const router = express.Router();

// Hardcode data
export const posts = [{ id: 1, title: "Hello" }];
export const comments = { 1: [] };

// GET /posts - get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// GET /posts/:postId - get specific post
router.get("/:postId", (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find((p) => p.id === postId);

  if (!post) return res.status(404).json({ error: "Post not found" });

  res.json(post);
});

// 
router.use("/:postId/comments", commentsRouter);

export default router;
