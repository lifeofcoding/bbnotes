// note model

var MOB = MOB || {};

MOB.Note = Backbone.Model.extend({
    idAttribute: '_id',
	urlRoot: '/notes',
	validate: function(attrs, options) {
		var isValid = true;
		_.each(attrs, function(val, attr){
			if(val === ''){
				isValid = false;
			}
		});
		return !isValid ? 'Please fill out all fields.' : null;
	}
});
