'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var stripJsonComments = require('./index');

it('should strip JSON comments', function (cb) {
	var stream = stripJsonComments();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), '\n{"a":"b"}');
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('//comment\n{"a":"b"}')
	}));
});
