import forEach from "./aux/foraech-lib.js";

const arr = [1, 2, 3, 4, 5];

//forEach(arr, console.log());
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// la funcion de flecha que se manda tiene argumento data y es un console.log
// fn = (data) => console.log(data)
// fn(a) = function (data) { console.log(data) }
// fn(a) = function(array[i]) { console.log(data) }
forEach(arr, (data) => console.log(data));

forEach(arr, (data) => console.log(2 * data));