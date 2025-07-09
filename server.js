import express from 'express';
import greetRouter from './routes/greet.js';

const PORT = 3000;

const app = express();
app.use(express.json());

// routes
app.use(greetRouter);

//#region before example
let users = [{ id: 1, name: 'Alice' }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// More routes...

//#endregion before example

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
