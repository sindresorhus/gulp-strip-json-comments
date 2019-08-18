'use strict';
const through = require('through2');
const stripJsonComments = require('strip-json-comments');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-strip-json-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripJsonComments(file.contents.toString(), options));
			this.push(file);
		} catch (error) {
			this.emit('error', new PluginError('gulp-strip-json-comments', error, {fileName: file.path}));
		}

		callback();
	});
};
