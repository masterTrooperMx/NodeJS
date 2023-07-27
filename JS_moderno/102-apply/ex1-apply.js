// Indirect invocation
// method of any object
// The apply() method calls the specified function with a given this value, 
// and arguments provided as an array (or an array-like object).
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
