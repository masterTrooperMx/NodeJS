// objetos literales

let heroes = {
    nombre: 'Tony Stark',
    nickName: 'Iron Man',
    edad: 40,
    coords: {
        lat: 34.034,
        lon: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10800, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(heroes);

console.log('Trajes:', heroes.trajes.length);

delete heroes.edad;

console.log(heroes);

const entriesPares = Object.entries(heroes);
console.log(entriesPares);

heroes.casado = true;

console.log(heroes);

Object.freeze(heroes);

heroes.casado = false;

console.log(heroes);

// pero si pasa
heroes.direccion.ubicacion = 'Mi casa';

console.log(heroes);
// hay que congenlar Object.freeze(heroes.direccion)!!

console.log(Object.getOwnPropertyNames(heroes), Object.values(heroes));

const names = ['kb', 'kl', 'kk', 'kb', 'kl', 'ka']

const unique_names = [...new Set(names)]

console.log(names, unique_names)
console.log(names.filter(function(x) { return x == 'kb' }));
console.log(names.filter(x =>  x == 'kb'));

arr = [ [ 2, 13, 4, 16 ], [ 9, 3, 8, 8, 4 ], [ 1, 2, 3, 4 ] ];
console.log( (arr[0].map((x)=> x>10)).reduce((total,x) => (x==true ? total+1 : total), 0) );
console.log( arr[0].reduce((total,x) => (x>10 ? total+1 : total), 0) );
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// para probar un sort primero un map
console.log('a', arr[1] );
console.log('m', arr[1].map((a, b) => a-b) );
console.log('s', arr[1].sort((a, b) => a-b) );