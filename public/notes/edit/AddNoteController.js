angular.module("ang-bbnotes").controller("AddNoteController", ["notes", "$state", "navService",
function (notes, $state, navService) {
    navService.setPage($state.current.data);
    this.note = {};

    this.save = function (note) {
        notes.saveNote(note);
    };
}]);
