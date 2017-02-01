// Define npm packages
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

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
var PORT = process.env.PORT || 3005;

// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/views' : 'views' ;
nunjucks.configure( _templates, {
    autoescape: true,
    cache: false,
    express: app
});
// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

//console.log(__dirname + '/assets');
//app.use(express.static(__dirname + '/assets'));
app.use(express.static('assets'));

// Respond to all GET requests by rendering relevant page using Nunjucks
app.get( '/', function( request, response ) {
  response.render( 'index' ) ;
} ) ;

app.get( '/index', function( request, response ) {
  response.render( 'index' ) ;
  //response.render( request.params.page ) ;
} ) ;



app.post('/products', function(request, response) {
  var productsHTMLString = products.reduce(function(generatedString, product) {
    return generatedString + nunjucks.render( '_item-row.html', { id: product.id, name: product.name } );
  }, '');

  response.send(productsHTMLString);
});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
