// notes list view

var MOB = MOB || {};

MOB.NotesListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'notes-list',

    initialize: function () {
        this.collection = MOB.notes;
    },

    render: function () {
        this.$el.empty();

        this.collection.each(function (item) {
            this.$el.append(this.renderItem(item));
        }, this);

        return this;
    },

    renderItem: function (item) {
        var notesListItemView = new MOB.NotesListItemView({
            model: item
        });

        return notesListItemView.render().$el;
    }
});
