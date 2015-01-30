angular.module("ang-bbnotes").controller("NotesEditorController", [
    "notesService",
    function (notesService) {
        this.getSelectedNote = function () {
            var note = notesService.getSelectedNote();

            if (note._id) {
                this.submitMessage = "Update Note";
            }
            else {
                this.submitMessage = "Add Note";
            }

            return note;
        };

        this.saveNote = function (note) {
            var promise,
                notesEditor = this;

            if (note._id) {
                promise = notesService.updateNote(note);
            }
            else {
                promise = notesService.addNote(note);
            }

            promise.then(function () {
                // Clear selected note again
                notesService.selectNote({});
            });
        };
    }
]);
