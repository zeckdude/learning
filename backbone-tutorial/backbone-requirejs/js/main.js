require.config({
  paths: {
    jquery: 'lib/jquery-min',
    backbone: 'lib/backbone-min',
    underscore: 'lib/underscore-min',
  }
});

define([
  'app'
], function(App){
  App.initialize();
});
