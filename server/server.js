const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('fhqwhgads');
  res.end();
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
