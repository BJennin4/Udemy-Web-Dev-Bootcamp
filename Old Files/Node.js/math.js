const add = (x,y) => x + y;
const PI = 3.14159;
const square = x => x * x;
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

// module.exports.add  = (x,y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;

// module.exports can be shortened to exports as long as exports is not assigned as a variable
exports.add = add;
exports.PI = PI;
exports.square = square;

