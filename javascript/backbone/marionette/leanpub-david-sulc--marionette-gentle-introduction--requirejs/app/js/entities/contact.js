define([
  'backbone',
  '../application'
],
function ( Backbone, App ) {
  'use strict';

  // Create the contact model class
  var Contact = Backbone.Model.extend({});

  // Create the contact collection class
  var ContactCollection = Backbone.Collection.extend({
    model: Contact,
    comparator: "firstName"
  });

  var contacts;

  var initializeContacts = function(){
    console.log('ran1');
    contacts = new ContactCollection([
      { id: 1, firstName: "Alice", lastName: "Arten",
        phoneNumber: "555-0184" },
      { id: 2, firstName: "Bob", lastName: "Brigham",
        phoneNumber: "555-0163" },
      { id: 3, firstName: "Charlie", lastName: "Campbell",
        phoneNumber: "555-0129" }
    ]);
  };

  var API = {
    getContactEntities: function(){
      alert('dsds');
      if(contacts === undefined){
        initializeContacts();
      }
      return contacts;
    }
  };

  // App.reqres.setHandler("contact:entities", function(){
  //   console.log('ran2');
  //   return API.getContactEntities();
  // });

  return ContactCollection;
});
