angular.module("ang-bbnotes").controller("AddNoteController", ["notes",
function (notes) {
    this.note = {};

    this.save = function (note) {
        notes.saveNote(note);
    };
}]);
