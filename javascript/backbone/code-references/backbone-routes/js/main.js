
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var ArtistsView = Backbone.View.extend({
  render: function() {
    this.$el.html("Artists View");
    return this;
  }
});

var AlbumsView = Backbone.View.extend({
  render: function () {
    this.$el.html('Albums View');
    return this;
  }
});

var AlbumView = Backbone.View.extend({
  render: function() {
    alert('Album View with the ID of ' + this.albumId);
    this.$el.html('Album View with the ID of ' + this.albumId);
    return this;
  }
});

var GenresView = Backbone.View.extend({
  render: function() {
    this.$el.html('Genres View');
    return this;
  }
});

var PageNotFoundView = Backbone.View.extend({
  render: function() {
    this.$el.html('Page not Found');
    return this;
  }
});

var AppRouter = Backbone.Router.extend({
  routes: { // Sets up the routes
    // matches `/albums`
    'albums': 'viewAlbums', // Call the viewAlbums() method when the `/albums` URL is accessed
    // matches `/albums/2`
    'albums/:albumId': 'viewAlbumById', // Call the viewAlbumById() method when the `/albums/` URL followed by a number is accessed. The number is then passed to the method specified.
    'artists': 'viewArtists',
    'genres': 'viewGenres',
    // matches `/download/file.pdf`
    'download/*url': 'downloadFile',
    // matches any other non-specified route
    '*other': 'viewPageNotFound' // Call the viewPageNotFound() method when any URL pattern not already specified above is accessed
  },

  viewAlbums: function() {
    var view = new AlbumsView({ el: '#container'}); // Create a new Albums View and specify the element that the view should appear in
    view.render(); // Render the view
  },

  viewAlbumById: function(albumId) {
    var view = new AlbumView({
      el: '#container',
      albumId: 'sdfsdf'
    });
    view.render();
  },

  viewArtists: function() {
    var view = new ArtistsView({el: '#container'});
    view.render();
  },

  viewGenres: function() {
    var view = new GenresView({el: '#container'});
    view.render();
  },

  downloadFile: function(url) {
    alert('File to download: ' + url);
  },

  viewPageNotFound: function() {
    var view = new PageNotFoundView({el: '#container'});
    view.render();
  }
});

var router = new AppRouter();
// Tell Backbone to start monitoring address changes
Backbone.history.start();

var NavView = Backbone.View.extend({
  events: {
    'click': 'onClick'
  },

  onClick: function(e) {
    var $li = $(e.target);
    // Navigate to url specified
    router.navigate($li.attr('data-url'), { trigger: true });
  }
});

var navView = new NavView({el: '#nav'});
