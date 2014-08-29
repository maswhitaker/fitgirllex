Parse.initialize("CGiH8mU7FWqmYhm2HXL1KZ2yusLAYc6uLGLxWKOE", "pFMs3sr9uuLC8ITdi6mK2unnU4xVARJ97grozseD");

var HomeView = Parse.View.extend({

  template: _.template($("#home").html()),

  initialize: function(){
    $(".container").html(this.el);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var AboutView = Parse.View.extend({
  template: _.template($("#about").html()),

  initialize: function(){
    $(".container").html(this.el);
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Router = Parse.Router.extend({
  routes: {
    "": "homepage",
    "contact": "contactpage",
    "about": "aboutpage",
    "service": "servicepage"
  },
  homepage: function(){
    new HomeView();
  },
  contactpage: function(){

  },
  aboutpage: function(){
    new AboutView();
  },
  servicepage: function(){

  }
});

var approuter = new Router();

Parse.history.start();
