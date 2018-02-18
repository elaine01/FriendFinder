const friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		// diplay JSON of all possible friends
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {

		// user input scores
		let answerArr = req.body.scores;
		let differences = [];

		// gets sum value within array
		const reducer = function (total, amount) {
			return total + amount;
		}

		// sum of user's answers
		let answerSum = answerArr.reduce(reducer);

		// sum of each score array already stored
		for (let i = 0; i < friendsData.length; i ++) {
			let prevScores = friendsData[i].scores;
			let prevScoresSum = prevScores.reduce(reducer);
			let scoresDifference = answerSum - prevScoresSum;
			let totalDifference = Math.abs(scoresDifference);
			differences.push(totalDifference);
		}


		// finds the lowest difference score
		let minNum = Math.min.apply(null, differences);

		let bestMatch = [];

		// finds user with lowest difference score; becomes best Match
		for (let j = 0; j < differences.length; j++) {
			if (minNum === differences[j]) {
				bestMatch.push(friendsData[j]);
			}
		}
		
		// if more than 1 user has the same minimum score, pick the first user in the bestMatch array
		let soulmate = bestMatch[0];

		let soulmateName = soulmate.name;
		let soulmateURL = soulmate.photo;


		// Send appropriate response
		res.json({
			data: true,
			status: 'OK',
			matchName: soulmateName,
			matchImage: soulmateURL
		});

		friendsData.push(req.body);
	});
}