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

  // New suite for tests that relate only to the getPopularSong() method
  describe('getPopularSong', function() {
    it('should return undefined if the collection is empty', function() {
      expect(album.getPopularSong()).toBeUndefined();
    });

    it('should return the song with the highest number of plays if the collection is not empty', function () {
        var song1 = new Song({ title: 'Blue in Green', numberOfPlays: 10 });
        var song2 = new Song({ title: 'So What', numberOfPlays: 5 });

        album.add(song1);
        album.add(song2);

        // assert that the return value of the call to getPopularSong() is the `song1` model
        expect(album.getPopularSong()).toEqual(song1);
    });
  });
});
