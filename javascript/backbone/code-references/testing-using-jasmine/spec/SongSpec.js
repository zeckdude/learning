// Tests to run on a Backbone Model

describe('Song', function() {
  var song;

  beforeEach(function() {
    song = new Song();
  });

  it('urlRoot should be /api/songs', function() {
    // assert that the `urlRoot` property is equal to the specified string
    expect(song.urlRoot).toEqual('/api/songs');
  });

  it('numberOfPlays property should be 0 by default', function() {
    // assert that the `numberOfPlays` property is equal to 0 initially
    expect(song.get('numberOfPlays')).toEqual(0);
  });

  it('title is required', function() {
    // assert that the validation fails since no title was provided when the object was instantiated
    expect(song.isValid()).toBeFalsy();

    song.set('title', 'Blue in Green');
    // assert that the validation passes now that we set the title on the instance
    expect(song.isValid()).toBeTruthy();
  });

  it('play should increment the `numberOfPlays` property', function() {
    // assert that the `numberOfPlays` property initially equals 0 when the object is instantiated
    expect(song.get('numberOfPlays')).toEqual(0);

    song.play();

    // assert that the `numberOfPlays` property increments by 1 after the play() method is called
    expect(song.get('numberOfPlays')).toEqual(1);
  });
});
