var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app) {

	app.get('/notes', notes.show); 

	app.post('/notes', notes.create); 
		


	app.all("*", (req, res, next) => {
			res.sendFile(path.resolve("./client/dist/index.html"))
		});

		
	};
