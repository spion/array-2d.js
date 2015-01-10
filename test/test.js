var assert = require('assert');

var Array2d = require('../array-2d');
var arr = new Array2d(10, 5, 0)
arr.set(3,0,1);

assert.equal(arr.get(3, 0), 1);
assert.equal(arr.toString().split('\n').length, 11);
