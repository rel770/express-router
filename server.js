import express from 'express';
import greetRouter from './routes/greet.js';

const app = express();
const PORT = 3000;

app.use(greetRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
