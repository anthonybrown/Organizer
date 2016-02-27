Organizer = {
	initialize: function () {

		var events = new Organizer.Events()
		events.fetch()
		events.reset([ { title: 'test1' }, { title: 'test2' }, { title: 'test3' } ])

		var eventsList = new Organizer.EventsListView({
			collection: events
		})
		eventsList.render()
	}
};

$(function () {
	Organizer.initialize()
})
