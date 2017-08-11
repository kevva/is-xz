'use strict';
module.exports = buf => {
	if (!buf || buf.length < 6) {
		return false;
	}

	return buf[0] === 0xFD && buf[1] === 0x37 && buf[2] === 0x7A && buf[3] === 0x58 && buf[4] === 0x5A && buf[5] === 0x00;
};
