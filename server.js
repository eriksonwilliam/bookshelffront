const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/bookshelf'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/bookshelf/'}
);
});

app.listen(process.env.PORT || 8082);
