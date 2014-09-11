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

var ContactView = Parse.View.extend({
  initialize: function(){
    $(".container").html(this.el);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model));
  },

  template: _.template($("#contact").html())
});

var ServiceView = Parse.View.extend({
  initialize: function(){
    $(".container").html(this.el);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model));
  },

  template: _.template($("#service").html())
});

var EnterView = Parse.View.extend({
  initialize: function(){
    $(".container").html(this.el);
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model));
  },
  template: _.template($("#enter").html())
});

var Router = Parse.Router.extend({
  routes: {
    "": "enter",
    "home": "homepage",
    "contact": "contactpage",
    "about": "aboutpage",
    "service": "servicepage"
  },
  enter: function(){
    new EnterView();
  },
  homepage: function(){
    new HomeView();
  },
  contactpage: function(){
    new ContactView();
  },
  aboutpage: function(){
    new AboutView();
  },
  servicepage: function(){
    new ServiceView();
  }
});

var approuter = new Router();

Parse.history.start();
