describe('TweetView', function () {
  var view;
  var model;

  beforeEach(function () {
    model = new Tweet();
    view = new TweetView({ model: model });
    view.render();
  });

  it('tagName should be li', function () {
    expect(view.tagName).toEqual('li');
  });

  it('tagName should be li', function () {
    expect(view.tagName).toEqual('li');
  });


});
