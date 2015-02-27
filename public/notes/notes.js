angular.module("ang-bbnotes").factory("notes", ["$http", function ($http) {
    var notesService,
        notesArray = [];

    /**
     * Add a note to the notes list with extended functionality
     */
    function addNote(note) {
        note.remove = function () {
            $http.delete("/notes/" + note._id).success(function () {
                notesArray.splice(notesArray.indexOf(note));
            });
        };

        note.save = function () {
            $http.put("/notes/" + note._id, note).success(function () {
                var found = false;
                notesArray.forEach(function (arrNote, idx) {
                    if (arrNote._id === note._id) {
                        notesArray[idx] = note;
                        found = true;
                    }
                });

                if (!found) {
                    notesArray.push(note);
                }
            });
        };
        notesArray.push(note);
    }

    notesService = {
        getNotes: function () {
            return notesArray;
        },

        getNote: function (id) {
            return notesArray.filter(function (note) {
                return note._id === id;
            })[0];
        },

        fetchNotes: function () {
            return $http.get("/notes").success(function (serverNotes) {
                // clear the array
                notesArray.splice(0);

                serverNotes.forEach(addNote);
            });
        },

        saveNote: function (note) {
            $http.post("/notes", note).success(function (note) {
                addNote(note);
            });
        },
    };

    notesService.fetchNotes();

    return notesService;
}]);
