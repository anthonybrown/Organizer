Organizer.EventsListView = Backbone.View.extend({
	initialize: function() {
		// bind our events
		this.listenTo(this.collection, 'reset', this.render)
		this.listenTo(this.collection, 'add', this.render)
		this.listenTo(this.collection, 'remove', this.render)

		//this.collection.on('reset', this.render, this);
		//this.collection.on('add', this.render, this);
		//this.collection.on('remove', this.render, this);
	},
	render: function () {

		var events_elements = [];

		this.collection.each( function (event) {
			var eventView = new Organizer.EventView({ model: event });
			events_elements.push(eventView.render().el);
		})

		this.$el.append(events_elements);

		$('#events-list').html(this.el);
	},

	tagName: 'ul',
	className: 'list-group'

})

Organizer.EventView = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',

	render: function () {
		//console.log(this.model)
		this.$el.html( Handlebars.templates['event'](this.model.toJSON()) );
		return this
	},

	events: {
		'click a' : function() {
			console.log('removed')
		},

		removeEvent: function() {
			console.log(this)
		}
	}
})
