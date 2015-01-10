# array-2d

Fast 2d array suitable for dynamic programming

# example

```js
var Array2d = require('array-2d');
var arr = new Array2d(10, 5, 1)
arr.set(3,4,2);
console.log(arr.get(3,4))
console.log(arr.toString());
```

# api

#### array2d(rows, cols, defaultValue)

Create a new 2d array with the specified rows, columns and default value

#### arr.get(row, col)

Get the element at position `row, column`

#### arr.set(row, col, value)

Set the element at `row, column` to the specified value

# licence

ISC
