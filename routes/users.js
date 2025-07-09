import express from "express";
const router = express.Router();

let users = [{ id: 1, name: "Alice" }];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;