var friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		// diplay JSON of all possible friends
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		friendsData.push(req.body);
		res.json(true);

		// testing
		console.log("----------------------");
		console.log("1 apiRoutes req.body \n", req.body);
		//let scoresNumArr = req.body.scores.join(", ");
		//console.log("req.body.scores ", scoresNumArr);
		console.log("----------------------");
		console.log("2 api Routes friendsData \n", friendsData);
		//console.log("friendsData ", friendsData);
	});
}