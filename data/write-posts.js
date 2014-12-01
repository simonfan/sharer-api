// system modules
var fs = require('fs');
var path = require('path');

var genPosts = require('./gen-posts');


var stringifiedPosts = JSON.stringify(genPosts(30), null, '\t');

fs.writeFileSync(path.join(__dirname, '../static/data/posts.json'), stringifiedPosts);