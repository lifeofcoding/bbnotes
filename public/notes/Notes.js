var MOB = MOB || {};

/**
 * Notes collection
 */

MOB.Notes = Backbone.Collection.extend({
    model: MOB.Note,
    url: "/notes",
});
