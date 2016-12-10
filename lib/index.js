var path = require('path');
var sh = require('shelljs');

var output = {};

output.stub = function(args) {
	var arg = args[0];
	var cwd = process.cwd();
	var src = path.join(__dirname, '..', 'fixtures');
	var dest = path.join(cwd, arg);

	sh.cp(src + path.sep + 'index.htm', dest);
}

module.exports = output;
