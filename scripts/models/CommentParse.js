var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var AnimateMixin = require('react-animate');


module.exports = React.createClass({
	mixins: [AnimateMixin],
	render: function(){
		return(
			<div  style={this.getAnimatedStyle.call(this, 'my-custom-animation')}  onClick={this.remove}>{this.props.text}</div>
		);
		
	},
	remove: function(){
		this.animate.call(this,
      'my-custom-animation', // animation name
      { opacity: 0 }, // initial style
      { opacity: 1 }, // final style
      5000, // animation duration (in ms)
      { easing: 'linear' } // other options
    );
		this.props.remove(this.props.objectId);
	}
})