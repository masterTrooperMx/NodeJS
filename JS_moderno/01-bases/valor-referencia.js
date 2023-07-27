// todos los primitivos son pasados por valor
// todos los objetos son pasados por referencia

let a = 10;
let b = a; // apunta al mismo valor, no al mismo lugar de memoria
a = 30;
console.table({ a, b });

// todos los objetos son pasados por referencia
let juan = { nombre: 'Juan', };
let ana = juan;
ana.nombre = 'Ana';

console.table({ juan, ana });

// este valor se esta cambian por valor no por referencia
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter', };
let tony = cambiaNombre(peter);

console.table({ peter, tony });

const frutas = ["Manzana", "Pera", "Pina"];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread'); // operador spread
const otrasFrutas2 = [...frutas]; // creamos un nuevo arreglo
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });