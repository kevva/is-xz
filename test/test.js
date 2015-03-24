'use strict';

var isXz = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect XZ from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.tar.xz'), 0, 6, function (err, buf) {
		t.assert(!err, err);
		t.assert(isXz(buf));
	});
});
