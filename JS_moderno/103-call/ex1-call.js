// Indirect invocation
// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
const person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }

person.hello("world");  // output: "James Smith says hello world"
const helloFunc = person.hello.bind({ name: "Jim Smith" });
helloFunc("world");  // output: Jim Smith says hello world"


// call and apply call a function while bind creates a function. 
// Though with call() you pass arguments individually and apply() as an argument array. 
// For more details check out the linked documentation which should be able to completely answer your question