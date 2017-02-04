require([
    'backbone',
    'application'
],
function ( Backbone, App, RegionManager ) {
    'use strict';

    App.start();
    window.App = App;
});
