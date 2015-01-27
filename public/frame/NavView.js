/**
 * Navigation View handling
 */
var MOB = MOB || {};

MOB.NavView = Backbone.View.extend({
    el: $("#nav-header"),
    template: _.template($("#nav").html()),
    render: function () {
        this.$el.html(this.template({
            page: this.page
        }));
    },

    // Update selected page and re-render
    pick: function (page) {
        this.page = page;
        this.render();
    },
});
