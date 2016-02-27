Organizer.EventsListView = Backbone.View.extend({
	initialize: function() {
		// bind our events
		//this.listenTo(this.collection, 'reset', this.render)
		//this.listenTo(this.collection, 'add', this.render)
		//this.listenTo(this.collection, 'remove', this.render)

		//this.collection.on('reset', this.render, this);
		//this.collection.on('add', this.render, this);
		//this.collection.on('remove', this.render, this);
	},
	render: function () {
		/*var events = [
			{ title: 'Catcher in the Rey', author: 'J.D. Salinger' },
			{ title: 'To Kill a Mocking Bird', author: 'Harper Lee' },
			{ title: 'War and Peace', author: 'Leo Tolstoy' }
			]*/

		var events_element = [];
		this.collection.each(function (event) {
			var eventView = new Organizer.EventView({ model: event })
			events_element.push(eventView.render().el)
		})

		//this.collection.each( function (event) {
		//	var eventView = new Organizer.EventView({ model: event });
		//	events_elements.push(eventView.render().el);
		//})

		this.$el.append(events_element);
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
		// to use Handlebars runtime instead of full lib
		// better for production
		//this.$el.html( Handlebars.templates['event'](this.model.toJSON()) );
		var template = Handlebars.compile($ ( '#event-template' ).html() )
		this.$el.html(template(this.model.toJSON()))
		return this
	},

	events: {
		'click a' : function() {
			console.log(this.model.toJSON())
		},

		removeEvent: function() {
			console.log('remove event')
		}
	}
})
