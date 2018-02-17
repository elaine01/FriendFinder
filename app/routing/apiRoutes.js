const friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		// diplay JSON of all possible friends
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {

		let answerArr = req.body.scores;
		//answerArr = answerArr.split(" ").map(Number);

		const reducer = function (total, amount) {
			return total + amount;
		}

		let answerSum = answerArr.reduce(reducer);
		
		// testing
		console.log("----------------------");
		console.log("userInput answerSum \n", answerSum);
		console.log("----------------------");

		for (let i = 0; i < friendsData.length; i ++) {
			let prevAnswers = friendsData[i].scores;
			let prevAnswersSum = prevAnswers.reduce(reducer);

			let difference = answerSum - prevAnswersSum;
			let totalDifference = Math.abs(difference);
			console.log(prevAnswersSum);
			console.log("\n totalDifference \n", totalDifference);
		}
		//console.log("friendsData ", friendsData);
		
		friendsData.push(req.body);
		res.json(true);
	});
}