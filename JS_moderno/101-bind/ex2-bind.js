// bind is a method on the prototype of all functions in JavaScript.
// Top-level 'this' is bound to 'globalThis' in scripts.
const my_module = {
  x: 81,
  getX() {
    return this.x;
  },
};
//this.x = 9;
x = 9
// The 'this' parameter of 'getX' is bound to 'my_module'.
console.log(my_module.getX()); // 81

const retrieveX = my_module.getX;
// The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
console.log(retrieveX()); // 9

// Create a new function 'boundGetX' with the 'this' parameter bound to 'my_module'.
const boundGetX = retrieveX.bind(my_module);
console.log(boundGetX()); // 81