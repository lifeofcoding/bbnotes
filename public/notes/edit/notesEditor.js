angular.module("ang-bbnotes").directive("notesEditor", function () {
    return {
        restrict: "E",
        templateUrl: "notes/edit/edit-note.html",
        controller: "NotesEditorController",
        controllerAs: "noteEdit",
    };
});
