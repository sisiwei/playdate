var PatternsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var colors = ['orange', 'white', 'yellow', '#CB98A1', '#72C072', '#84B0BF'];
    var that = this.$el;
    _.each(colors, function(v,k){
      that.append("<div class='circle' style='background-color: " + v + "'></div>");
    })
  }
});

var patterns = new PatternsView({ el: ".patterns" });


// TO DOs:
// * Keep track of score and current sequence #.
// * Create a random sequence of lights.
// * Wait for player to begin clicking.
// * Anticipate which light the player should click next.
// * If player fails, end game with score. Otherwise, give another point, and start sequence again but end at sequence # +1.