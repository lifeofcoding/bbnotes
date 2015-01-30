angular.module("ang-bbnotes").directive("notesList", function () {
    return {
        restrict: "E",
        templateUrl: "notes/notes-list.html",
        controller: "NotesListController",
        controllerAs: "notesList",
    };
});
