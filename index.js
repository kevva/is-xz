'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 6) {
		return false;
	}

	return buf[0] === 0xfd && buf[1] === 0x37 && buf[2] === 0x7a && buf[3] === 0x58 && buf[4] === 0x5a && buf[5] === 0x00;
};
