

// ContactManager.ContactItemView = Marionette.ItemView.extend({
//   tagName: "li",
//   template: "#contact-list-item"
// });
//
// ContactManager.ContactsView = Marionette.CollectionView.extend({
//   tagName: "ul",
//   childView: ContactManager.ContactItemView
// });
//
// ContactManager.on("start", function(){
//   var contacts = new ContactManager.ContactCollection([
//     {
//       firstName: "Bob",
//       lastName: "Brigham",
//       phoneNumber: "555-0163"
//     },
//     {
//       firstName: "Alice",
//       lastName: "Arten",
//       phoneNumber: "555-0184"
//     },
//     {
//       firstName: "Charlie",
//       lastName: "Campbell",
//       phoneNumber: "555-0129"
//     }
//   ]);
//
//   var contactsListView = new ContactManager.ContactsView({
//     collection: contacts
//   });
//
//   ContactManager.regions.main.show(contactsListView);
// });
//
// ContactManager.start();





define([
  'underscore',
  'backbone',
  'marionette'
], function(_, Backbone, Marionette) {

  initialize = function() {
    var ContactManager = new Marionette.Application();

    ContactManager.on("before:start", function(){
      var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",

        regions: {
          main: "#main-region"
        }
      });

      ContactManager.regions = new RegionContainer();
    });

    return ContactManager;
  }

  return {
    initialize: initialize
  };
});
