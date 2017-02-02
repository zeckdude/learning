// Define npm packages
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var logger = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('http');

// Get data
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

// Define port to run server on
var PORT = process.env.PORT || 3007;

// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/app/views' : 'app/views' ;
nunjucks.configure( _templates, {
    autoescape: true,
    cache: false,
    express: app
});
// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

// Log information (to the console) about what is being sent
app.use(logger('dev'));

//console.log(__dirname + '/assets');
//app.use(express.static(__dirname + '/assets'));
app.use(express.static('public'));

app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Respond to all GET requests by rendering relevant page using Nunjucks
app.get( '/', function( request, response ) {
  response.render( 'index' ) ;
} ) ;

app.get( '/index', function( request, response ) {
  response.render( 'index' ) ;
  //response.render( request.params.page ) ;
} ) ;


// GET (SELECT all products)
app.get('/products', function(request, response) {
  response.send( { products: products } );
});

// POST (INSERT into products)
app.post('/products', function(request, response) {
  currentId++;

  products.push({
    id: currentId,
    name: request.body.name
  });

  response.send({ status: 'success' });
});

// PUT (UPDATE products WHERE id = ?)
app.put('/products/:id', function(request, response) {
  var id = Number(request.params.id);
  var newName = request.body.newName;
  var result;

  var productToUpdate = products.find(function(product){
    return product.id === id;
  });

  if (typeof productToUpdate !== 'undefined') {
    productToUpdate.name = newName;
    // result = { status: 'success' };
    response.send({ status: 'success' });
  } else {
    response.status(500).json({
      status: 'failed',
      message: 'There is no product with the given id'
    });
  }
});

// DELETE (DELETE products WHERE id = ?)
app.delete('/products/:id', function(request, response) {
  var id = Number(request.params.id);

  var productToDeleteIndex = products.findIndex(function(product){
    return product.id === id;
  });

  if (productToDeleteIndex !== -1) {
    products.splice(productToDeleteIndex, 1);
    response.send({ status: 'success' });
  } else {
    response.status(500).json({
      status: 'failed',
      message: 'There is no product with the given id'
    });
  }
});


app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
