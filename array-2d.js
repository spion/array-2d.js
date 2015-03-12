
// Fast allocator and initializer for large arrays

function allocInit(len, val) {
  // if you preallocate 100K or more items, v8 turns it into a hashtable
  var prealloc = len < 99999 ? len : 99999;
  var a = new Array(prealloc);
  for (var k = 0; k < prealloc; ++k) a[k] = val;
  var remaining = len - prealloc;
  while (remaining-- > 0) a.push(val);
  return a;
}

// A generic 2d array with a configurable allocator. 
function makeArray2d(allocInit) {
    function Array2d(m, n, initial) {
        this.m = m;
        this.n = n;
        this.length = m * n;
        this.a = allocInit(this.length, initial);
    }

    Array2d.prototype.get = function(i, j) {
        return this.a[i * this.n + j];
    }

    Array2d.prototype.set = function(i, j, val) {
        this.a[i * this.n + j] = val;
    }

    Array2d.prototype.toString = function() {
        var s = '';
        for (var i = 0; i < this.m; ++i)
            s += '[' + this.a.slice(i * this.n, (i+1)*this.n).join(',') + ']' + '\n';
        return s;
    }
    return Array2d;
}

// Export uses the default allocator
exports = module.exports = makeArray2d(allocInit);
// Also provides a way to customize an allocator
exports.withAllocator = makeArray2d;

exports.allocInit = allocInit;
