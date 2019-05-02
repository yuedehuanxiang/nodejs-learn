var { add, mul } = require("./a");

var _ = require("loadsh");

var arr = _.concat([1, 2], 3);
console.log(arr);

var res = add(10, 20);
var res2 = mul(4, 3);
console.log(res);
console.log(res2);
