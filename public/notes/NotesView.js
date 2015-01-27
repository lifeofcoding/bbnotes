var MOB = MOB || {};

/**
 * View for displaying the list of notes from the collection
 */

MOB.NotesView = Backbone.View.extend({
    template: _.template($("#notes").html()),
    render: function () {
        // Add the sort dropdown
        this.$el.html("<select class=sort>"
            + "<option value=order>By Order</option>"
            + "<option value=title>By Title</option>"
            + "</select>"
        );
        this.renderNotes();
    },

    // Render the list of notes itself
    // This is rendered separately from the dropdown so that it
    // can maintain its state
    renderNotes: function () {
        this.$el.find(".notes-list").remove().end().append(
            this.template({notes: this.notes})
        );
    },
    initialize: function ($el, notes) {
        this.$el = $el;
        this.notes = notes;
    },
    events: {
        "click li": "liClicked",
        "click .remove": "removeNote",
        "change .sort": "sortNotes",
    },

    // Remove an individual note and rerender the list of notes
    removeNote: function (event) {
        var self = this,
            note = self.notes.get($(event.target).data("id"));

        note.destroy().done(function () {
            self.notes.remove(note);
            self.renderNotes();
        });
    },

    // Update the sort order for the list of notes from the dropdown
    sortNotes: function (event) {
        var prop = $(event.currentTarget).val();
        this.notes.comparator = function (note) {
            // Reverse order sort by default
            if ("order" == prop) {
                return -note.get("order");
            }
            return note.get(prop);
        };
        this.notes.sort();
        this.renderNotes();
    },
});
