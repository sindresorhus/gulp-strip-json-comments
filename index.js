'use strict';
var gutil = require('gulp-util');
var map = require('map-stream');
var stripJsonComments = require('strip-json-comments');

module.exports = function (bowerConfig, options) {
	return map(function (file, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		file.contents = new Buffer(stripJsonComments(file.contents.toString()));
		cb(null, file);
	});
};
