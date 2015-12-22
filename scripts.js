// Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
});

// Backbone Collection

var Blogs = Backbone.Collection.extend({});

// instantiate two Blogs

var blog1 = new Blog({
	author: 'Michael',
	title: 'Michael\'s Blog',
	url: 'http://michaelsblog.com'
});

var blog2 = new Blog({
	author: 'John',
	title: 'John\'s Blog',
	url: 'http://johnsblog.com'
});

// instantiate a Collection

var blogs = new Blogs([blog1, blog2]);

