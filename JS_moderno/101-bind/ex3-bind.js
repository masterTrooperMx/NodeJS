// bind is a method on the prototype of all functions in JavaScript.
// this function needs to be bound
function f(y) { return this.x + y }
// objecto literal que da el contexto
const o = { x : 1 }
// crea una funcion que se va a ligar a la funcion f con el objeto o
const g = f.bind(o);
console.log(g(5)); // se espera 6