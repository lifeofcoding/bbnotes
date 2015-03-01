angular.module("ang-bbnotes").controller("EditNoteController", ["notes", "$stateParams", "$state",
function (notes, $stateParams, $state) {
    var _note = notes.getNote($stateParams.id);

    if (!_note) {
        // Cease what we're doing
        return $state.go("notes");
    }

    this.note = angular.copy(_note);

    this.save = function (note) {
        angular.extend(_note, note);
        note.save();
    };
    
    this.isValid = function(){
        return (this.note.title === '' || this.note.text === '') ? '' : 'true';
    }
}]);
