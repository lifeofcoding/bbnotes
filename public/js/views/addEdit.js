// add/edit view

var MOB = MOB || {};

MOB.AddEditView = Backbone.View.extend({
    className: 'add',
    template: _.template($('script.add-edit-pane').html()),

    events: {
        'click button': 'save',
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    },

    save: function (e) {
        var title = this.$('.title').val().trim();
        var text = this.$('.text').val().trim();

        clearInputs = function () {
            this.$('.title').val('');
            this.$('.text').val('');

            window.location.hash = 'view';
        }
		
		valError = function(error){
			alert(error);
		}

		this.model.set({
			title: title,
			text: text
        });
		
		if(!this.model.isValid()){
			valError(this.model.validationError);
		}else{
			this.model.save().done(function(){
				clearInputs();
			});
		}
        e.preventDefault();

        return false;
    }
});
