angular.module("ang-bbnotes").controller("NotesListController", ["notes", function (notes) {
    this.notes = notes.getNotes();
    this.fetchNotes = notes.fetchNotes;
}]);
