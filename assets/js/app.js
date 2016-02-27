/*Organizer = {
	initialize: function () {
		Organizer.events  = new Organizer.Events()
		 new Organizer.EventsListView({
			collection: Organizer.events
		})

		Organizer.events.fetch()
		Organizer.events.reset([ { title: 'Cather on the Rye' }, { title: 'To Kill a Mocking Bird' }, { title: 'On the Road Again' } ])
	}
	};*/

Organizer = {
	initialize : function() {

		var events = new Organizer.Events()
		var eventList = new Organizer.EventsListView({
			collection: events
		});

		events.fetch({
			success : function() {
				events.reset([
					{ title: 'Catcher in the Rye', author: 'J.D.Salinger' },
					{ title: 'To Kill a Mocking Bird', author: 'Harper Lee' },
					{title: 'War & Peace', author: 'Leo Tolstoy'}
				])
				eventList.render();
			},

			error: function() {
				console.error('error')
			}

		})



	}
}

$(function () {
	Organizer.initialize()

	function setCopyRight () {
		var thisDate = new Date();
		var name = 'Tony Brown UI-Developer, UX-Designer.';
		var thisYear = thisDate.getFullYear();
		document.querySelector('#copyright').innerHTML = '&copy; ' + thisYear + ' ' + name;
	}

	setCopyRight();
})
