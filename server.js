import express from "express";
import greetRouter from "./routes/greet.js";
import usersRouter from "./routes/users.js";

const PORT = 3000;

const app = express();
app.use(express.json());

// routes
app.use(greetRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
