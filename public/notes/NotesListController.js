angular.module("ang-bbnotes").controller("NotesListController", ["notes", function (notes) {
    this.notes = notes.getNotes();
    window.notes = this.notes;
    this.fetchNotes = notes.fetchNotes;
}]);
