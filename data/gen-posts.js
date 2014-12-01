// system modules
var fs = require('fs');


// external modules
var loremIpsum = require('lorem-ipsum');
var _ = require('lodash');

/* Lorem ipsum docs
	output = loremIpsum({
	    count: 1                      // Number of words, sentences, or paragraphs to generate.
	  , units: 'sentences'            // Generate words, sentences, or paragraphs.
	  , sentenceLowerBound: 5         // Minimum words per sentence.
	  , sentenceUpperBound: 15        // Maximum words per sentence.
	  , paragraphLowerBound: 3        // Minimum sentences per paragraph.
	  , paragraphUpperBound: 7        // Maximum sentences per paragraph.
	  , format: 'plain'               // Plain text or html
	  , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
	  , random: Math.random           // A PRNG function. Uses Math.random by default
	});
 */



function genPosts(quantity) {

	var posts = [];

	while (posts.length < quantity) {

		posts.push({

			// title
			title: loremIpsum({
				count: 1,
				units: 'sentences',
				sentenceLowerBound: 3,
				sentenceUpperBound: 6
			}),

			// body
			body: loremIpsum({
				count: 2,
				units: 'paragraphs',
				paragraphLowerBound: 1,
				paragraphUpperBound: 3
			})

		});
	}

	return posts;
}


module.exports = genPosts;