require([
  'backbone',
  'application'
],
function ( Backbone, App ) {
  'use strict';

  App.start();
  window.App = App;

  console.log('Window1: ', window);
});
