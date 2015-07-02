var React = require ('react');
var ReactCSSTransitionGroup = require("react/lib/ReactCSSTransitionGroup");
var Backbone = require('backbone');
var CommentModel = require('../models/CommentModel')
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var CommentParse = require('../models/CommentParse');


module.exports = React.createClass({
	mixins: [ParseReact.Mixin],

	observe: function(){
		return{
			comments: (new Parse.Query('Comment')).descending('createdAt')
		}
	},
	componentDidMount: function(){

	},
	render: function() {
		self = this;
		return(
			<div>
				<form onSubmit={this.createComment}>
					<label>Add Comment</label><br/>
					<input ref="comment" type="text"/><br/>
					<button>Submit</button>
				</form>
				<ul ref="cool">
					{this.data.comments.map(function(comment){
						return (
							   
						<CommentParse  key={comment.id}  remove={self.remove} objectId={comment.id} text={comment.text}/>
						
						)
					})}
				</ul>
			</div>
		);
	},
	// submit: function(e){
	// 	e.preventDefault();
	// 	self = this;
	// 	var comment = new CommentModel({
	// 		text: this.refs.comment.getDOMNode().value
	// 	})
	// 	comment.save(null,
	// 	{
	// 		success: function(model){
	// 			// console.log(model);
	// 			console.log('saved');
	// 			self.refs.comment.getDOMNode().value= '';
	// 			self.refreshQueries('comments');
	// 		},
	// 		error: function(res){
	// 			console.log(res)
	// 		}
	// 	})
	// },
	remove: function(){

		ParseReact.Mutation.Destroy(id).dispatch();
	},
	createComment: function(e){
		e.preventDefault();
		ParseReact.Mutation.Create('Comment', 
			{ 
				text: this.refs.comment.getDOMNode().value
			})
		.dispatch().done(function(results){
			console.log(results);
		});
	}
})