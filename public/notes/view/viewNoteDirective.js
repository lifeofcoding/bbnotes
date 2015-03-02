angular.module("ang-bbnotes").directive("viewNote", ['$state', function ($state) {
    return {
        restrict: 'E',
        templateUrl: "./notes/view/viewNote.html",
        controller: "viewNoteController as viewCtl"
    };
}]);
