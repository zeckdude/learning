define([
    'backbone',
    'underscore',
    'marionette'
],

function( Backbone, _, Marionette ) {
  'use strict';

    var App = new Marionette.Application();

    App.on("before:start", function(){
      var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",

        regions: {
          main: "#main-region"
        }
      });

      App.regions = new RegionContainer();
    });








    App.Contact = Backbone.Model.extend({});

    App.ContactCollection = Backbone.Collection.extend({
      model: App.Contact,
      comparator: "firstName"
    });

    App.ContactItemView = Marionette.ItemView.extend({
      tagName: "li",
      template: "#contact-list-item"
    });

    App.ContactsView = Marionette.CollectionView.extend({
      tagName: "ul",
      childView: App.ContactItemView
    });

    App.on("start", function(){
      var contacts = new App.ContactCollection([
        {
          firstName: "Bob",
          lastName: "Brigham",
          phoneNumber: "555-0163"
        },
        {
          firstName: "Alice",
          lastName: "Arten",
          phoneNumber: "555-0184"
        },
        {
          firstName: "Charlie",
          lastName: "Campbell",
          phoneNumber: "555-0129"
        }
      ]);

      var contactsListView = new App.ContactsView({
        collection: contacts
      });

      App.regions.main.show(contactsListView);
    });







    return App;
});
