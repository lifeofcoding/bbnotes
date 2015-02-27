/**
 * Module for displaying notes and allowing CRUD operations on notes
 */

angular.module("ang-bbnotes", ["ui.router", "ngAnimate"]).config(["$stateProvider", "$urlRouterProvider",
function ($stateProvider, $urlRouterProvider) {
    // Default route (homepage)
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        // Homepage to display a welcome message and link to the notes
        .state("home", {
            url: "/home",
            controller: "HomeController",
            controllerAs: "home",
            templateUrl: "home/home.html",
        })
        // List of notes page
        .state("notes", {
            url: "/notes",
            controller: "NotesListController",
            controllerAs: "notesList",
            templateUrl: "notes/notes-list.html",
        })
            // Add a new note (must be before edit because otherwise the
            // edit route will match first)
            .state("notes.add", {
                url: "/add",
                controller: "AddNoteController",
                controllerAs: "note",
                templateUrl: "notes/edit/note-form.html",
            })
            // Edit an individual note
            .state("notes.edit", {
                url: "/:id",
                controller: "EditNoteController",
                controllerAs: "note",
                templateUrl: "notes/edit/note-form.html",
            })
    ;
}]);
