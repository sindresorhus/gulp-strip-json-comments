'use strict';
const through = require('through2');
const stripJsonComments = require('strip-json-comments');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-strip-json-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripJsonComments(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-strip-json-comments', err, {fileName: file.path}));
		}

		cb();
	});
};
