define([
  'backbone',
  'underscore',
  'marionette',
  'entities/contact'
],

function( Backbone, _, Marionette, ContactCollection ) {
  'use strict';

  var App = new Marionette.Application();

  App.on("before:start", function() {
    var RegionContainer = Marionette.LayoutView.extend({
      el: "#app-container",

      regions: {
        main: "#main-region"
      }
    });

    App.regions = new RegionContainer();
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
    console.log('start app');

    var contacts = App.request("contact:entities");

    console.log(contacts);

    var contactsListView = new App.ContactsView({
      collection: contacts
    });

    App.regions.main.show(contactsListView);
  });

  return App;
});
