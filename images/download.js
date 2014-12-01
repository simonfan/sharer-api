var fs = require('fs');
var path = require('path');

var gm = require('gm');
var request = require('request');


function download(options, dest) {

	var width    = options.width || '300',
		height   = options.height || '300',
		category = options.category || 'abstract';

	var url = 'http://lorempixel/' + width + '/' + height + '/' + category;


	console.log(url);

	// create the file
//	fs.openSync(dest, 'w');

	// download
	var strm = request('http://proxy.universo.mobi/moblets/2579327.json').pipe(fs.createWriteStream(dest));

	return strm;
}


function genImages(quantity, options) {

	options = options || {};
	
	var imgsStreams = [];

	while (imgsStreams.length < quantity) {


		console.log('download ' + imgsStreams.length);
		var strm = download(options, path.join(__dirname, '../static/images/', '' + Math.random()));

		imgsStreams.push(strm);
	}

}

// export the function to generate images.
module.exports = genImages;