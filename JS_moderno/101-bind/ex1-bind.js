// bind is a method on the prototype of all functions in JavaScript. 
// It allows you to create a new function from an existing function, change the new function's this context, 
// and provide any arguments you want the new function to be called with.

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

// literal object
const my_module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  // I can call the function of the object and inside the context of object it works
  console.log(my_module.getX());
  // assign the function defined in literal object to another label
  const unboundGetX = my_module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  // creamos la funcion
  const boundGetX = unboundGetX.bind(my_module);
  console.log(boundGetX());
  // Expected output: 42