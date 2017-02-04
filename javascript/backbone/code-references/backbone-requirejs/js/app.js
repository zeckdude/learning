define([
  'underscore',
  'backbone',
  '../models/Song',
  '../views/SongView'
], function(_, Backbone, Song, SongView){

  initialize = function() {
    var song = new Song({ title: 'Blue in Green' });

    var songView = new SongView({
      el: '#container',
      model: song
    });
    songView.render();
  }

  return {
    initialize: initialize
  };
});
