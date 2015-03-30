# is-xz [![Build Status](http://img.shields.io/travis/kevva/is-xz/master.svg?style=flat)](https://travis-ci.org/kevva/is-xz)

> Check if a Buffer/Uint8Array is a XZ file


## Install

```
$ npm install --save is-xz
```


## Usage

```js
var isXz = require('is-xz');
var read = require('fs').readFileSync;

isXz(read('file.tar.xz'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
