Organizer.NewEventView = Backbone.View.extend({
  tagName: 'form',
  initialize: function() {
    this.render()
  },

  render: function() {
    var template = Handlebars.compile($('#event-form-template').html())
    this.$el.html(template())
    $('#new-event').html(this.el)
    return this
  },

  events: {
    'submit': 'createEvent'
  },

  createEvent: function(e) {
    e.preventDefault()
    var title = this.$('#event_title').val()
    var author = this.$('#author_title').val()
    var model = new Organizer.Event()
    var _this = this
    model.save({
			title: title,
			author: author
		}, {
      success: function() {
        Organizer.events.add(model)
        _this.el.reset()
      }
    })
  }
})

Organizer.EventsListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render)
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove', this.render)
  },

  render: function() {
    var events_elements = []
    this.collection.each(function(event) {
      var eventView = new Organizer.EventView({model: event})
      events_elements.push(eventView.render().el)
    })

    this.$el.html(events_elements)
    $('#events-list').append(this.el)
    return this
  },

  tagName: 'ul',

  className: 'list-group'
})

Organizer.EventView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  render: function() {
    var template = Handlebars.compile($('#event-template').html())
    this.$el.html(template(this.model.toJSON()))
    return this
  },

  events: {
    'click a': 'removeEvent'
  },
  removeEvent: function() {console.log(this);}
});