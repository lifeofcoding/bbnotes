angular.module("ang-bbnotes").controller("NotesListController", ["notes", "$state", "navService", function (notes, $state, navService) {
    navService.setPage($state.current.data);
    this.notes = notes.getNotes();
    this.fetchNotes = notes.fetchNotes;
    this.lastViewed = {};
    this.viewNote = function(noteId){
        notes.viewNote(noteId);
    }
}]);
