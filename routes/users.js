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
