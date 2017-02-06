require.config({

  // Relative location from where the `paths` are referenced
  //baseUrl: '/scripts',

  /* starting point for application */
  deps: ['main'],

  paths: {
    jquery: 'vendor/jquery',
    backbone: 'vendor/backbone',
    marionette: 'vendor/backbone.marionette',
    underscore: 'vendor/underscore',
    bootstrap: 'vendor/bootstrap',
    application: 'application'
  }
});
