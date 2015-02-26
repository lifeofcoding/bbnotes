// nav item view

var MOB = MOB || {};

MOB.NavItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'navigation-item',
    render: function () {
		if(this.model.attributes.path === document.location.hash.replace('#','')){
			this.template = _.template($('script.nav-item-selected').html())
		}else{
			this.template = _.template($('script.nav-item').html())
		}
        this.$el.html(this.template(this.model.attributes));

        return this;
    },
});
