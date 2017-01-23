var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
  el: '#main-region',
  template: '#static-template'
});

ContactManager.on('start', function() {
  var staticView = new ContactManager.StaticView();
  staticView.render();
});

ContactManager.start();
