'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripJsonComments = require('strip-json-comments');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-strip-json-comments', 'Streaming not supported'));
			return cb();
		}

		try {
			file.contents = new Buffer(stripJsonComments(file.contents.toString()));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-strip-json-comments', err, {fileName: file.path}));
		}

		this.push(file);
		cb();
	});
};
