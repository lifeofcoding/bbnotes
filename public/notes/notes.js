angular.module("ang-bbnotes").factory("notes", ["$http", "$state", function ($http, $state) {
    var notesService,
        self = this,
        notesArray = [];
        
        this.currentViewNote = {title: '', text: ''}
        
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
            $state.go("notes");
        };

        var noteFound = _.findWhere(notesArray, {_id: note._id});
        if(!noteFound){
            notesArray.push(note);
        }
        $state.go("notes");
    }

    notesService = {
        currentViewNote: function(){
            return self.currentViewNote;
        },
            
        getNotes: function () {
            return notesArray;
        },

        getNote: function (id) {
            return notesArray.filter(function (note) {
                return note._id === id;
            })[0];
        },
        
        viewNote: function(id){
            var note = notesArray.filter(function (note) {
                return note._id === id;
            })[0];

            angular.extend(self.currentViewNote, note);
            return this.currentViewNote();
        },

        fetchNotes: function () {
            return $http.get("/notes").success(function (serverNotes) {
                serverNotes.forEach(addNote);
            });
        },

        saveNote: function (note) {
            $http.post("/notes", note).success(function (note) {
                addNote(note);
            });
        }
    };

    notesService.fetchNotes();

    return notesService;
}]);
