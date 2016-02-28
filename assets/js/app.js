Organizer = {
  initialize: function() {
    Organizer.events = new Organizer.Events();

    new Organizer.NewEventView();

    new Organizer.EventsListView({
      collection: Organizer.events
    });
    Organizer.events.fetch();
  }
};

$(function () {
	Organizer.initialize()
	function setCopyRight () {
		var thisDate = new Date();
		var name = 'Tony Brown UI-Developer, UX-Designer.'
		var thisYear = thisDate.getFullYear()
		document.querySelector('#copyright').innerHTML = '&copy; ' + thisYear + ' ' + name
	}
	setCopyRight()
})
