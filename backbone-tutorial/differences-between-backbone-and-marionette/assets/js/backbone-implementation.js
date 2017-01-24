(function() {
 "use strict";

  var AppView = Backbone.View.extend({
    el: '#backbone-container',

    initialize: function () {
      this.booksView = new BooksView({ model: books });
      this.render();
    },

    render: function() {
      this.$el.append(this.booksView.render().el);
      return this;
    }
  });

  var BookView = Backbone.View.extend({
    tagName: "li",

    template: _.template($("#book-template").html()),

    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      return this;
    }
  });

  var BooksView = Backbone.View.extend({
    tagName: 'ul',

    displayBooks: function() {
      var self = this;
      this.model.each(function(book){
        var bookView = new BookView({ model: book });
        self.$el.append(bookView.render().$el);
      });
    },

    render: function() {
      this.displayBooks();
      return this;
    }
  });

  var appView = new AppView();

})();
