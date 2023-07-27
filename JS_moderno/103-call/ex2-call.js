// https://medium.com/@jhawleypeters/javascript-call-vs-apply-vs-bind-61447bc5e989
// Indirect invocation
// unamed function
const printTwo =function () {
    console.log(2);
    };

printTwo(); // 2
printTwo.call(); // 2
printTwo.apply(); // 2

// The difference between call() and apply() is that call() passes all arguments after the first one on to the invoked function, 
// while apply() takes an array as its second argument and passes the members of that array as arguments. 
//The following have the same effect.
//
// someFunc.call(thisArg, 1, 2, 3) VS someFunc.apply(thisArg, [1, 2, 3])

const ins = [1, 2, 3, 4, 5];

const someFunc = function () {
    return this.length
}

// ins es el objeto
const len = someFunc.call(ins);
console.log(len);