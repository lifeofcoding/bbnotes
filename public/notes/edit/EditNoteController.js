angular.module("ang-bbnotes").controller("EditNoteController", ["notes", "$stateParams", "$state",
function (notes, $stateParams, $state) {
    var note = notes.getNote($stateParams.id);

    if (!note) {
        // Cease what we're doing
        return $state.go("notes");
    }

    this.note = note;

    this.save = function (note) {
        note.save();
    };
}]);
