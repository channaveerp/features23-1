const express = require('express');
const app = express();
const user = require('./user.js');

console.log(user);

app.get('/', (req, res) => {
  const q = req.query.q;
  //   console.log(q);

  const keys = ['first_name', 'last_name', 'email'];
  const search = () => {
    return user.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  res.json(search(user).slice(0, 5));
});

app.listen(8080, () => console.log('Api is working'));
