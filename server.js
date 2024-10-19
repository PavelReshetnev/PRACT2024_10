'use strict'

const express = require('express');
//константы
const PORT = 8080;
const HOST = '0.0.0.0';
//приложение
const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  const result = a / b;
  res.json({ result });
});

app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
