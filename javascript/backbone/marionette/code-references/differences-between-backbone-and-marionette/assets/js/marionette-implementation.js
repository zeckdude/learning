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
  var BillView = Marionette.ItemView.extend({
    tagName: 'li', // The tag that each item will be wrapped with

    template: '#bill-template', // The template that contains the structure of the data that will be displayed

    events: {
      "click p": "alertInfo" // Event to run on action performed within the view
    },

    alertInfo: function(e) {
      var modelProperty = $(e.currentTarget).attr('data-property');
      alert(this.model.get(modelProperty));
    }
  });

  var BillsView = Marionette.CollectionView.extend({
    tagName: 'ul', // The tag that the collection will be wrapped with
    childView: BillView // The view that will be used for each child item in the collection
  });

  // Run before app starts and initializers are executed (http://marionettejs.com/docs/v2.3.1/marionette.application.html#application-events)
  MarionetteApp.on('before:start', function() {
    var AppView = Marionette.LayoutView.extend({
      el: "#marionette-container",

      regions: {
        header: '[data-ui~=header-region]',
        main: '[data-ui~=main-region]'
      }
    });

    regions = new AppView();
  });

  // Start the app
  MarionetteApp.on('start', function() {
    var billsView = new BillsView({
      collection: bills
    });

    // Render the view in the region specified
    regions.main.show(billsView);
    //debugger;
    regions.header.$el.html('<h3>Marionette Implementation</h3>');
  });

  MarionetteApp.start();

})();
