import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import stripJsonComments from './index.js';

test('strips JSON comments', async t => {
	const stream = stripJsonComments();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('//comment\n{"a":"b"}'),
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), '         \n{"a":"b"}');
});

test('strips JSON comments and whitespace with options', async t => {
	const options = {whitespace: false};
	const stream = stripJsonComments(options);
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('//comment   \n{"a":"b"}'),
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), '\n{"a":"b"}');
});

