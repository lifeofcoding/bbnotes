var MOB = MOB || {};

/**
 * Default application router
 */
MOB.Router = Backbone.Router.extend({
    routes: {
        "": "home",
        "notes": "displayNotes",
        "create-note": "createNote",
        "edit-note/:id": "editNote",
    },

    // Set the navigation view
    initialize: function () {
        MOB.navView = new MOB.NavView;
    },

    // Display the home page
    home: function () {
        MOB.mainView = new MOB.HomeView(generateMainContainer());
        MOB.mainView.render();

        MOB.navView.pick("home");
    },

    // Display the list of notes
    displayNotes: function () {
        var notes = new MOB.Notes;
        // Default reverse 'order' sort
        notes.comparator = function (model) {
            return -model.get("order");
        };

        notes.fetch().done(function () {
            MOB.mainView = new MOB.NotesView(generateMainContainer(), notes);
            MOB.mainView.render();
        });

        MOB.navView.pick("notes");
    },

    // Display the note creation form
    createNote: function () {
        var note = new MOB.Note;

        MOB.mainView = new MOB.EditNoteView(generateMainContainer(), note);
        MOB.mainView.render();

        MOB.navView.pick("create-note");
    },

    // Display the note update form for the given Note ID
    editNote: function (id) {
        var note = new MOB.Note;
        note.set("_id", id);

        note.fetch().done(function () {
            MOB.mainView = new MOB.EditNoteView(generateMainContainer(), note);
            MOB.mainView.render();

            MOB.navView.pick("edit-note");
        });
    },
});

// Generate an element to append to the main view
// This also removes the current main view
function generateMainContainer() {
    if (MOB.mainView) {
        MOB.mainView.remove();
    }
    var viewEl = $("<div>");
    viewEl.appendTo("#main-content");

    return viewEl;
}

MOB.router = new MOB.Router;
Backbone.history.start();
