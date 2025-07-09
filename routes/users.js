import express from "express";
const router = express.Router();

let users = [{ id: 1, name: "Alice" }];

// GET /users - get all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id - get specific user
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(users);
});

// POST /users - create a new user
router.post("/", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - update a user
router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;
  // Validate body.name
  if (!name || typeof name !== "string") return res.status(400).json({ error: "Invalid name" });

  for (const user of users)
    if (user.id === userId) {
      user.name = name;
      return res.json(user);
    }

  return res.status(404).json({ error: "User not found" });
});

// DELETE /users/:id - delete a user
router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

export default router;
