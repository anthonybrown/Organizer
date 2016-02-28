Organizer.EventsListView = Backbone.View.extend({
	initialize: function() {
		// bind our events
		// listenTo makes an object listen for events on another object
		this.listenTo(this.collection, 'reset' , this.render)
		this.listenTo(this.collection, 'add'   , this.render)
		this.listenTo(this.collection, 'remove', this.render)
		// to stop listeningTo an object
		// this.stopListening(this.collection)
    // both listenTo works on a specific object, and on works on the entire collection
		//this.collection.on('reset' , this.render, this);
		//this.collection.on('add'   , this.render, this);
		//this.collection.on('remove', this.render, this);
	},

	render: function () {
		var events_element = [];
		this.collection.each(function (event) {
			var eventView = new Organizer.EventView({ model: event })
			events_element.push(eventView.render().el)
		})

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
		// use Handlebars runtime instead of full lib
		// better for production
		//this.$el.html( Handlebars.templates['event'](this.model.toJSON()) );
		// I'm using the full Handlebars lib for dev
		var template = Handlebars.compile($ ( '#event-template' ).html() )
		// we can ust this.model.get or this.model.set to get and set respectively
		//console.log(this.model.get('author') + ' ' + this.model.get('title'));
		// use the .toJSON method to get all the attributes
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
