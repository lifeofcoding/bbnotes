var MOB = MOB || {};

/**
 * Note model
 */

MOB.Note = Backbone.Model.extend({
    idAttribute: "_id",
    urlRoot: "/notes",
    validate: function (attrs) {
        if (!attrs.title || !attrs.text) {
            return "Both the title and text attributes are required";
        }
    },
});
