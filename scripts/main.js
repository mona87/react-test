var React = require ('react');
var Backbone = require('backbone');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
Parse.initialize("LlTLGoNt02wfsrBARQtOQq8P2WeuwidYVd07uwus", "y20mCo1Um8zLtoa2Fh0FCfAZnxekU9Jlqo3KIycn");
var CreateComment = require('./components/CreateCommentComponent');




var el = document.getElementById('container');

var App = Backbone.Router.extend({
	routes:{
		'':  		'home',
		'profile': 'profile'
	},

	home: function(){
		console.log('home');
		React.render(
			<div>
			<CreateComment/>
			</div>,
			el
		);
	},
	profile: function(){
		console.log('profile');
	}
});

var myRouter = new App();
Backbone.history.start();