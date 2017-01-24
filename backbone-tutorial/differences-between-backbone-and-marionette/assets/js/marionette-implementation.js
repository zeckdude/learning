// (function() {
//  "use strict";
//
//  var regions;
//
//   // Initialize the app
//   var MarionetteApp = new Marionette.Application();
//
//   // Define a single item view (http://marionettejs.com/docs/v2.3.1/marionette.itemview.html)
//   var StaticView = Marionette.ItemView.extend({
//     template: '#static-template'
//   });
//
//   // Run before app starts and initializers are executed (http://marionettejs.com/docs/v2.3.1/marionette.application.html#application-events)
//   MarionetteApp.on('before:start', function() {
//     var AppView = Marionette.LayoutView.extend({
//       el: "#marionette-container",
//
//       regions: {
//         main: "#main-region"
//       }
//     });
//
//     regions = new AppView();
//   });
//
//   MarionetteApp.on('start', function() {
//     var staticView = new StaticView();
//     regions.main.show(staticView);
//   });
//
//   MarionetteApp.start();
//
// })();



(function() {
 "use strict";

 var regions;

  // Initialize the app
  var MarionetteApp = new Marionette.Application();

  // Define a single item view (http://marionettejs.com/docs/v2.3.1/marionette.itemview.html)
  var BookView = Marionette.ItemView.extend({
    tagName: 'li', // The tag that each item will be wrapped with

    template: '#book-template', // The template that contains the structure of the data that will be displayed

    events: {
      "click p": "alertInfo" // Event to run on action performed within the view
    },

    alertInfo: function(e) {
      var modelProperty = $(e.currentTarget).attr('data-property');
      alert(this.model.get(modelProperty));
    }
  });

  var BooksView = Marionette.CollectionView.extend({
    tagName: 'ul', // The tag that the collection will be wrapped with
    childView: BookView // The view that will be used for each child item in the collection
  });

  // Run before app starts and initializers are executed (http://marionettejs.com/docs/v2.3.1/marionette.application.html#application-events)
  MarionetteApp.on('before:start', function() {
    var AppView = Marionette.LayoutView.extend({
      el: "#app-container",

      regions: {
        main: "#marionette-container"
      }
    });

    regions = new AppView();
  });

  // Start the app
  MarionetteApp.on('start', function() {
    var booksView = new BooksView({
      collection: books
    });

    // Render the view in the region specified
    regions.main.show(booksView);
  });

  MarionetteApp.start();

})();
