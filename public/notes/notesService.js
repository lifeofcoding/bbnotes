angular.module("ang-bbnotes").factory("notesService", ["$http", function ($http) {
    var serviceNotes = {}
        currentNote = {};

    return {
        getNotes: function () {
            return serviceNotes;
        },

        selectNote: function (note) {
            // Currently selected note for editing, but break binding
            currentNote = angular.copy(note);
        },

        getSelectedNote: function () {
            return currentNote;
        },

        fetchNotes: function () {
            return $http.get("/notes").success(function (serverNotes) {
                serverNotes.forEach(function (serverNote) {
                    serviceNotes[serverNote._id] = serverNote;
                });
            });
        },

        deleteNote: function (note) {
            return $http.delete("/notes/" + note._id).success(function () {
                delete serviceNotes[note._id];
            });
        },

        updateNote: function (note) {
            return $http.put("/notes/" + note._id, note).success(function (updatedNote) {
                serviceNotes[updatedNote._id] = updatedNote;
            });
        },

        addNote: function (note) {
            return $http.post("/notes", note).success(function (note) {
                serviceNotes[note._id] = note;
            });
        },
    };
}]);
