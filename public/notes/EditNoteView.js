var MOB = MOB || {};

/**
 * View for the note create/update form
 */

MOB.EditNoteView = Backbone.View.extend({
    template: _.template($("#create-note").html()),
    initialize: function ($el, note) {
        var self = this;

        self.$el = $el;
        self.note = note;

        self.note.on("invalid", function () {
            self.$el.find(".invalid").show();
        });
    },
    render: function () {
        this.$el.html(this.template({
            note: this.note
        }));
    },
    events: {
        "submit form": "addNote",
    },

    // Save the note with the form data when it is submitted
    addNote: function (e) {
        e.preventDefault();

        var jqXHR,
            self = this;

        self.$el.find(".invalid").hide();

        jqXHR = self.note.save({
            title: self.$el.find("[name=title]").val(),
            text: self.$el.find("[name=text]").val(),
        });

        if (jqXHR) {
            jqXHR.done(function () {
                MOB.router.navigate("#/notes");
            });
        }
    },
});
