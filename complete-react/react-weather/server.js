var express = require('express');

// Create app
var app = express();

app.use(express.static('public'));
app.listen(3003, function() {
  console.log('express up');
});
