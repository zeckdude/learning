var Backbone = require('backbone');
var _ = require('underscore');
var Song = require('Song');
var SongView = require('SongView');


var song = new Song({ title: 'Blue in Green' });

var songView = new SongView({
  el: '#container',
  model: song
});
songView.render();
