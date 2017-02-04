var Backbone = require('backbone');
var _ = require('underscore');


module.exports = Backbone.View.extend({
  render: function() {
    this.$el.html(this.model.get('title'));
    return this;
  }
});
