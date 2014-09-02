'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripJsonComments = require('strip-json-comments');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-strip-json-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(stripJsonComments(file.contents.toString()));
			cb(null, file);
		} catch (err) {
			cb(new gutil.PluginError('gulp-strip-json-comments', err, {fileName: file.path}));
		}
	});
};
