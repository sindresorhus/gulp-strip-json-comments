# gulp-strip-json-comments [![Build Status](https://travis-ci.org/sindresorhus/gulp-strip-json-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-strip-json-comments)

> Strip comments from JSON with [strip-json-comments](https://github.com/sindresorhus/strip-json-comments)<br>
> Lets you use comments in your JSON files!


## Install

```
$ npm install --save-dev gulp-strip-json-comments
```


## Usage

```js
const gulp = require('gulp');
const stripJsonComments = require('gulp-strip-json-comments');

gulp.task('default', () =>
	gulp.src('src/config.json')
		.pipe(stripJsonComments())
		.pipe(gulp.dest('dist'))
);
```


## API

### stripJsonComments([options])

#### options

Type: `Object`

See the [`strip-json-comments` options](https://github.com/sindresorhus/strip-json-comments#options).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
