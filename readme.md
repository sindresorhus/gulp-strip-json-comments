# gulp-strip-json-comments [![Build Status](https://travis-ci.org/sindresorhus/gulp-strip-json-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-strip-json-comments)

> Strip comments from JSON with [strip-json-comments](https://github.com/sindresorhus/strip-json-comments)  
> Lets you use comments in your JSON files!


## Install

```
$ npm install --save-dev gulp-strip-json-comments
```


## Usage

```js
var gulp = require('gulp');
var stripJsonComments = require('gulp-strip-json-comments');

gulp.task('default', function () {
	return gulp.src('src/config.json')
		.pipe(stripJsonComments())
		.pipe(gulp.dest('dist'));
});
```

### Options

You can set the configuration to strip comments and their equivalent whitespace instead of replacing them with whitespace (which is the default).

[Strip-json-comments whitespace option](https://github.com/sindresorhus/strip-json-comments#options)  

```js
var gulp = require('gulp');
var stripJsonComments = require('gulp-strip-json-comments');

const strippingOptions = {whitespace: false};

gulp.task('default', function () {
	return gulp.src('src/config.json')
		.pipe(stripJsonComments(strippingOptions))
		.pipe(gulp.dest('dist'));
});
```



## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
