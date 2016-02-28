Organizer.Event = Backbone.Model.extend({
  defaults: {
		title: '',
		author: ''
  },
  localStorage: new Backbone.LocalStorage('events')
});