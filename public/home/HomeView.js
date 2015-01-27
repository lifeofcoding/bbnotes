var MOB = MOB || {};

/**
 * Home page view renderer
 */

MOB.HomeView = Backbone.View.extend({
    initialize: function ($el) {
        this.$el = $el;
    },
    template: _.template($("#home").html()),
    render: function () {
        this.$el.html(this.template);
    },
});
