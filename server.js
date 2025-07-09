import express from 'express';
const app = express();
const PORT = 3000;

app.get('/greet', (req, res) => {
  res.json({ msg: 'Hello from /greet!' });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
