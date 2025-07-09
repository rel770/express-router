import express from "express";
import greetRouter from "./routes/greet.js";
import usersRouter from "./routes/users.js";

const PORT = 3000;

const app = express();
app.use(express.json());

// routes
app.use(greetRouter);
app.use("/users", usersRouter);

//#region "Before" code
const posts = [{ id: 1, title: "Hello" }];
const comments = { 1: [] };

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:postId/comments", (req, res) => {
  const pid = req.params.postId;
  res.json(comments[pid] || []);
});

app.post("/posts/:postId/comments", (req, res) => {
  const pid = req.params.postId;
  const newComment = { id: Date.now(), text: req.body.text };
  comments[pid] = comments[pid] || [];
  comments[pid].push(newComment);
  res.status(201).json(newComment);
});
//#endregion "Before" code

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
