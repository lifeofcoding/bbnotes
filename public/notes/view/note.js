angular.module("ang-bbnotes").controller("viewNoteController", ["notes", function (notes) {
    this.note = notes.currentViewNote();
}]);
