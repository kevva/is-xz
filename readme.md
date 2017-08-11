# is-xz [![Build Status](https://travis-ci.org/kevva/is-xz.svg?branch=master)](https://travis-ci.org/kevva/is-xz)

> Check if a Buffer/Uint8Array is a XZ file


## Install

```
$ npm install is-xz
```


## Usage

```js
const fs = require('fs');
const isXz = require('is-xz');

isXz(fs.readFileSync('foo.tar.xz'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
