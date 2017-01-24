var Book = Backbone.Model.extend({
  defaults: {
    title: 'Not Provided',
    author: 'Not Provided',
    publishYear: 'Not Provided',
  }
});

var Books = Backbone.Collection.extend({
  model: Book
});

var book = new Book({
  title: 'The Great Santini',
  author: 'Pat Conroy'
});

var books = new Books([
  new Book({
    title: 'The Great Santini',
    author: 'Pat Conroy',
    publishYear: 1976
  }),
  new Book({
    title: 'To Kill a Mockingbird ',
    author: 'Harper Lee'
  }),
  new Book({
    title: 'The Man Without Qualities ',
    publishYear: 1988
  })
]);
