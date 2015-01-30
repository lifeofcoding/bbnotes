angular.module("ang-bbnotes").controller("NotesListController", [
    "notesService",
    function (notesService) {
        // Retrieve notes from server initially
        notesService.fetchNotes();

        this.getNotes = function () {
            return notesService.getNotes();
        };

        this.selectNote = function (note) {
            notesService.selectNote(note);
        };

        this.deleteNote = function ($event, note) {
            $event.stopPropagation();
            notesService.deleteNote(note).success(function () {
                if (notesService.getSelectedNote()._id == note._id) {
                    notesService.selectNote({});
                }
            });
        };
    }
]);
