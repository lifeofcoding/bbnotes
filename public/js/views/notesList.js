// notes list view

var MOB = MOB || {};

MOB.NotesListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'notes-list',

    initialize: function () {
        this.collection = MOB.notes;
		this.listenTo(this.collection, 'add remove', this.render);
    },

    render: function () {
		
        this.$el.empty();

		if(this.collection.length > 0){
	        this.collection.each(function (item) {
	            this.$el.append(this.renderItem(item));
	        }, this);
		}else{
			this.$el.append('<center>Nothing To See Here!</center>');
		}

        return this;
    },

    renderItem: function (item) {
        var notesListItemView = new MOB.NotesListItemView({
            model: item
        });

        return notesListItemView.render().$el;
    }
});
