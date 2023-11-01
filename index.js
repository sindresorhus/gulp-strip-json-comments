import {Buffer} from 'node:buffer';
import stripJsonComments from 'strip-json-comments';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpStripJsonComments(options) {
	return gulpPlugin('gulp-strip-json-comments', file => {
		file.contents = Buffer.from(stripJsonComments(file.contents.toString(), options));
		return file;
	});
}
