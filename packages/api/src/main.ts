import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Project B – ci trigersssss test');
});

app.listen(3000, () => {
  console.log('Project B API running on port 3000');
});

