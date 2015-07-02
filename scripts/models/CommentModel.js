var Backbone = require ('backbone');
var Parse = require ('parse').Parse;

module.exports = Parse.Object.extend({
	defaults:{
		objectId:'',
		userId: '',
		text: ''
	},
    className: "Comment",
    idAttribute: 'objectId'
});