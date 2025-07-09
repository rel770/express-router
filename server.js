import express from "express";
import greetRouter from "./routes/greet.js";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";

const PORT = 3000;

const app = express();

// body parser middleware
app.use(express.json());

// routes
app.use(greetRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
