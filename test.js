import test from 'ava';
import Vinyl from 'vinyl';
import m from '.';

test.cb('strips JSON comments', t => {
	const stream = m();

	stream.on('data', file => {
		t.is(file.contents.toString(), '         \n{"a":"b"}');
		t.end();
	});

	stream.end(new Vinyl({
		contents: Buffer.from('//comment\n{"a":"b"}')
	}));
});

test.cb('strips JSON comments and whitespace with options', t => {
	const options = {whitespace: false};
	const stream = m(options);

	stream.on('data', file => {
		t.is(file.contents.toString(), '\n{"a":"b"}');
		t.end();
	});

	stream.end(new Vinyl({
		contents: Buffer.from('//comment   \n{"a":"b"}')
	}));
});

