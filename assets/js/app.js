Organizer = {
	initialize: function () {
		var events = new Organizer.Events()
		var eventsList = new Organizer.EventsListView({
			collection: events
		})

		events.fetch({
			success: function() {
				events.reset([ { title: 'Cather on the Rye' }, { title: 'To Kill a Mocking Bird' }, { title: 'On the Road Again' } ])
				eventsList.render()
			},

			error: function() {
				console.error('There was an error.')
			}
		})
	}
};

$(function () {
	Organizer.initialize()
})
