const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurant/profile/:restaurant_id', (req, res) => {
  db.find({ restaurant_id: req.params.restaurant_id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]);
      res.end();
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
