'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripJsonComments = require('strip-json-comments');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-strip-json-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(stripJsonComments(file.contents.toString(), opts));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-strip-json-comments', err, {fileName: file.path}));
		}

		cb();
	});
};
