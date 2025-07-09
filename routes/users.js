import express from "express";
const router = express.Router();

let users = [{ id: 1, name: "Alice" }];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(users);
});

router.post("/", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;