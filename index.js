var fs = require('fs');
var colors = require('colors');

fs.readdir('../zadanie-13.7', 'utf-8', function(err, files) {
	console.log(files);
	fs.writeFile('./plik.txt', files ,  function(err) {
		if (err) throw err;
		console.log('Zapisano!'.yellow);
	});
});











        















       









