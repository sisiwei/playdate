var currPattern = [];
var playerScore = 0;
var colors = ['orange', 'white', 'yellow', '#CB98A1', '#72C072', '#84B0BF'];

var PatternsView = Backbone.View.extend({
  el: ".patterns",
  events: {
    'click .circle': 'trackPlayer'
  },

  initialize: function() {
    this.render();
    this.createPattern();
  },

  render: function() {
    var that = this.$el;
    _.each(colors, function(v,k){
      that.append("<div class='circle' data-color='" + v + "' style='background-color: " + v + "'></div>");
    })
  },
  
  createPattern: function(){
    // Create the next item in the pattern one at a time
    var item = colors[Math.floor(Math.random()*colors.length)];
    currPattern.push(item);
  },
  
  animate: function(){
    _.each(colors, function(v,k){
      $('.circle').removeClass("show");
      $("div[data-color='" + v + "']").addClass('show');
    })
  },
  
  trackPlayer: function(){
    console.log($('.circle', this.el));
  }

});

var patterns = new PatternsView();




// TO DOs:
// * Keep track of score and current sequence #.
// * Create a random sequence of lights.
// * Wait for player to begin clicking.
// * Anticipate which light the player should click next.
// * If player fails, end game with score. Otherwise, give another point, and start sequence again but end at sequence # +1.

// $("div[data-color='orange']").addClass('show')