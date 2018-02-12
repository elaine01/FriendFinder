var friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		// diplay JSON of all possible friends
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		// handle incoming survey results
		friendsData.push(req.body);
	});
}