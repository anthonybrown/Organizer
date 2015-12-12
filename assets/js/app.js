Organizer= {
	initialize: function () {
		var eventsList = new Organizer.EventsListView();
		eventsList.render();
	}
};

$(function () {
	Organizer.initialize()
})
