# [gulp](http://gulpjs.com)-strip-json-comments [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-strip-json-comments.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-strip-json-comments)

> Strip comments from JSON with [strip-json-comments](https://github.com/sindresorhus/strip-json-comments)  
> Lets you use comments in your JSON files!


## Install

Install with [npm](https://npmjs.org/package/gulp-strip-json-comments)

```
npm install --save-dev gulp-strip-json-comments
```


## Example

```js
var gulp = require('gulp');
var stripJsonComments = require('gulp-strip-json-comments');

gulp.task('default', function () {
	gulp.src('src/config.json')
		.pipe(stripJsonComments())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
