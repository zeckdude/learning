// Tests to run on a Backbone Collection

describe('Album', function() {
  var album;

  beforeEach(function() {
    album = new Album();
  });

  it('url should be /api/songs', function() {
    // assert that the `url` property is equal to the specified string
    expect(album.url).toEqual('/api/songs');
  });
});
