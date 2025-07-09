import express from 'express';
const router = express.Router();

// GET /greet - simple greeting endpoint
router.get('/greet', (req, res) => {
  res.json({ msg: 'Hello from /greet!' });
});

export default router;
