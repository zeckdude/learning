(function() {
 "use strict";

  var AppView = Backbone.View.extend({
    el: '#backbone-container',

    initialize: function () {
      this.billsView = new BillsView({ model: bills });
      this.render();
    },

    displayHeader: function() {
      this.$el.find('[data-ui~=header-region]').html('<h3>Backbone Implementation</h3>');
    },

    displayBills: function() {
      this.$el.find('[data-ui~=main-region]').html(this.billsView.render().el);
    },

    render: function() {
      this.displayHeader();
      this.displayBills();
      return this;
    }
  });

  var BillView = Backbone.View.extend({
    tagName: "li",

    template: _.template($("#bill-template").html()),

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

  var BillsView = Backbone.View.extend({
    tagName: 'ul',

    displaySingleBills: function() {
      var self = this;
      this.model.each(function(bill){
        var billView = new BillView({ model: bill });
        self.$el.append(billView.render().$el);
      });
    },

    render: function() {
      this.displaySingleBills();
      return this;
    }
  });

  var appView = new AppView();

})();
