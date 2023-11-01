# gulp-strip-json-comments

> Strip comments from JSON with [strip-json-comments](https://github.com/sindresorhus/strip-json-comments)<br>
> Lets you use comments in your JSON files!

## Install

```sh
npm install --save-dev gulp-strip-json-comments
```

## Usage

```js
import gulp from 'gulp';
import stripJsonComments from 'gulp-strip-json-comments';

export default () => (
	gulp.src('src/config.json')
		.pipe(stripJsonComments())
		.pipe(gulp.dest('dist'))
);
```

## API

### stripJsonComments(options?)

#### options

Type: `object`

See the [`strip-json-comments` options](https://github.com/sindresorhus/strip-json-comments#options).
