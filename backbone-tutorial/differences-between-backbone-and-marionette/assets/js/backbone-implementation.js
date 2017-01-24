(function() {
 "use strict";

  var AppView = Backbone.View.extend({
    el: '#backbone-container',

    initialize: function () {
      this.booksView = new BooksView({ model: books });
      this.render();
    },

    displayHeader: function() {
      this.$el.find('[data-ui~=header-region]').html('<h3>Backbone Implementation</h3>');
    },

    displayBooks: function() {
      this.$el.find('[data-ui~=main-region]').html(this.booksView.render().el);
    },

    render: function() {
      this.displayHeader();
      this.displayBooks();
      return this;
    }
  });

  var BookView = Backbone.View.extend({
    tagName: "li",

    template: _.template($("#book-template").html()),

    events: {
      "click p": "alertInfo" // Event to run on action performed within the view
    },

    alertInfo: function(e) {
      var modelProperty = $(e.currentTarget).attr('data-property');
      alert(this.model.get(modelProperty));
    },

    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      return this;
    }
  });

  var BooksView = Backbone.View.extend({
    tagName: 'ul',

    displaySingleBooks: function() {
      var self = this;
      this.model.each(function(book){
        var bookView = new BookView({ model: book });
        self.$el.append(bookView.render().$el);
      });
    },

    render: function() {
      this.displaySingleBooks();
      return this;
    }
  });

  var appView = new AppView();

})();
