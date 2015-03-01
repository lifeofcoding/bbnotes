/**
 * Directive for displaying and managing an individual note
 *
 * Could use controller, (note.note.title) but individual note
 * functionality is self-contained and this directive is bound
 * to a note object from the service
 */
angular.module("ang-bbnotes").directive("navBar", function () {
    return {
        restrict: 'E',
        templateUrl: "./nav.html",
    };
});
