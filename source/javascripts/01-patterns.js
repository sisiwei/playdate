var currPattern = [];
var playerOrder = [];
var round = 1;
var animating = true;
var prompt = "Ready?";
var colors = ['orange', 'pink', 'yellow', '#CB98A1', '#72C072', '#84B0BF'];

var PatternsView = Backbone.View.extend({
  el: ".patterns",
  events: {
    'click .circle': 'trackPlayer'
  },

  initialize: function() {
    this.render();
    this.addToPattern();
  },

  render: function() {
    var that = this.$el;
    _.each(colors, function(v,k){
      that.append("<div class='circle' data-color='" + v + "' style='background-color: " + v + "'></div>");
    })
  },
  
  addToPattern: function(){
    // Add one item to the pattern
    var item = colors[Math.floor(Math.random()*colors.length)];
    currPattern.push(item);
  },
  
  animate: function(){
    _.each(currPattern, function(v,k){
      _.delay(function(){
        $('.circle').removeClass("show");
        // console.log($("div[data-color='" + v + "']"));
        _.delay(function(){
          $("div[data-color='" + v + "']").addClass('show');
        }, 200);
      }, 600*k);
    })

    _.delay(function(){
      $('.circle').removeClass("show")
    }, 600*currPattern.length + 600);
    
    animating = false;
  },
  
  trackPlayer: function(ev){
    var that = this;
    if (!animating){
      // check to see if it's the correct option
      var selectedCircle = $(ev.currentTarget).attr('data-color');
      var correctCircle = currPattern[playerOrder.length];

      if (selectedCircle == correctCircle){
        playerOrder.push(correctCircle);

        // is the round over?
        if (currPattern.length == playerOrder.length){
          // advance to the next round
          round++;
          $('.round').html("Round: " + String(round));
          playerOrder = [];
          that.addToPattern();
          this.animate();
          console.log(currPattern);
        } 

      } else {
        // display final result
      }

      console.log(selectedCircle, correctCircle);
    }
  }

});

var Prompt = Backbone.View.extend({
  el: ".prompt",
  events: {
    'click' : 'trackProgress'
  },

  trackProgress: function(){
    patterns.animate();
  }
});

var patterns = new PatternsView();
var prompt = new Prompt();


// TO DOs:
// * Keep track of score and current sequence #.
// * Create a random sequence of lights.
// * Wait for player to begin clicking.
// * Anticipate which light the player should click next.
// * If player fails, end game with score. Otherwise, give another point, and start sequence again but end at sequence # +1.

// $("div[data-color='orange']").addClass('show')