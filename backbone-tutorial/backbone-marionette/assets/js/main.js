require.config({
  paths: {
    jquery: 'vendor/jquery',
    backbone: 'vendor/backbone',
    marionette: 'vendor/backbone.marionette',
    underscore: 'vendor/underscore',
    bootstrap: 'vendor/bootstrap'
  }
});

define([
  'app'
], function(App){
  App.initialize();
});
