var express = require('express');
var app = express();


var products = [
  {
    id: 1,
    name: 'laptop'
  },
  {
    id: 2,
    name: 'microwave'
  }
];

var currentId = 2;

var PORT = process.env.PORT || 3001;

app.use(express.static(__dirname));

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
